'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    ArrowLeft,
    Award,
    Scroll,
    BookMarked,
    Lightbulb,
    CheckCircle2,
    Calendar,
    Maximize2,
    X,
    User,
} from 'lucide-react';
import styles from './FacultyAchievements.module.css';

interface FacultyHonor {
    title: string;
    faculty: string;
    year: string;
    category: string;
    image: string;
    desc: string;
    deliverable: string;
}

const metrics = [
    { label: 'Granted Patents', value: '14+', icon: Lightbulb },
    { label: 'Funded Research Grants', value: '₹1.8 Cr+', icon: Award },
    { label: 'Ph.D. Scholars Guided', value: '32+', icon: BookMarked },
    { label: 'National & State Awards', value: '19', icon: Scroll },
];

const facultyHonors: FacultyHonor[] = [
    {
        title: 'SERB-DST Research Core Grant (₹42 Lakhs)',
        faculty: 'Dr. G. Lakshmi Narayana (Professor, Pharmacology)',
        year: '2025',
        category: 'Government Funded Research',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85',
        desc: 'Awarded by Science and Engineering Research Board (DST, New Delhi) for pre-clinical formulation investigations into neuro-protective targeted peptides.',
        deliverable: 'Principal Investigator – 3-Year Funded Project',
    },
    {
        title: 'Indian Patent Granted: Novel Controlled Release Pellet Formulation',
        faculty: 'Dr. S. Radha Krishna & Dr. C. Venkatesh (Pharmaceutics)',
        year: '2024',
        category: 'Intellectual Property (Patent)',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85',
        desc: 'Granted official patent by the Indian Patent Office (Patent No: 412890) for designing dual-action enteric coated multi-particulate pellets.',
        deliverable: 'Patent No: IN412890 – Full Commercial Rights',
    },
    {
        title: 'Best Pharmacy Teacher Award - State Level',
        faculty: 'Dr. K. Srinivas Rao (Professor & HOD, Pharmaceutics)',
        year: '2025',
        category: 'State Academic Honor',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=85',
        desc: 'Conferred by the Andhra Pradesh Pharmacy Teachers Council for excellence in outcome-based pharmaceutical education and pedagogical innovation.',
        deliverable: 'State Level Citation & Gold Medal',
    },
    {
        title: 'AICTE Research Promotion Scheme (RPS) Grant (₹18.5 Lakhs)',
        faculty: 'Dr. N. Hema Latha (Associate Professor, Analysis)',
        year: '2024',
        category: 'Analytical Instrumentation Grant',
        image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=85',
        desc: 'Procured modern hyphenated chromatographic analytical software and method development columns for impurity profiling of bulk medicines.',
        deliverable: 'Principal Investigator – AICTE New Delhi',
    },
    {
        title: 'Guest Research Fellow & Keynote Speaker – Singapore Healthcare Summit',
        faculty: 'Dr. P. Madhavi Latha (Professor, Pharmacy Practice)',
        year: '2025',
        category: 'International Fellowship',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85',
        desc: 'Delivered an invited keynote address on Hospital Antimicrobial Stewardship models in South Asia, chairing international clinical panel sessions.',
        deliverable: 'Keynote Speaker & International Delegate',
    },
    {
        title: 'Patent Published: Eco-friendly Microwave Heterocyclic Synthesis',
        faculty: 'Dr. P. Madhusudhan Rao (Professor, Pharmaceutical Chemistry)',
        year: '2025',
        category: 'Green Chemistry Innovation',
        image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=900&q=85',
        desc: 'Published patent on solvent-free catalytic synthesis of novel triazole anti-fungal candidates with 95% yield efficiency.',
        deliverable: 'Application No: 202541012389 A',
    },
];

const facultyGallery = [
    {
        id: 1,
        title: 'Central Instrumentation & HPLC Impurity Profiling',
        tag: 'RPS Grant Research',
        image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 2,
        title: 'State Pharmacy Teachers Felicitation Convention',
        tag: 'Excellence Award',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 3,
        title: 'Preclinical Animal Cell & Targeted Peptides Screening',
        tag: 'SERB-DST Project',
        image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 4,
        title: 'International Keynote Address & Panel Moderation',
        tag: 'Singapore Summit',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 5,
        title: 'Multi-particulate Pellet Formulation Pilot Suite',
        tag: 'Indian Patent Demo',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 6,
        title: 'Green Microwave Synthesis & Catalytic Workstation',
        tag: 'Green Chemistry',
        image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=900&q=85',
    },
];

export default function FacultyAchievementsPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isMounted = true;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isMounted && entry) setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            isMounted = false;
            observer.disconnect();
        };
    }, []);

    // Smooth Dual-Axis Parallax
    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;
        let isMounted = true;

        const updateParallax = () => {
            if (!isMounted || !sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                currentScroll += (targetScroll - currentScroll) * 0.035;
                const relativeOffset = window.innerHeight - rect.top;
                if (orbLeftRef.current) {
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06}px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05}px, 0)`;
                }
            }
            if (isMounted) animationFrameId = requestAnimationFrame(updateParallax);
        };

        const handleScroll = () => {
            if (!isMounted) return;
            targetScroll = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateParallax);

        return () => {
            isMounted = false;
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImage]);

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Navigation Breadcrumb */}
                <div className={`${styles.backNav} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>Return to Home</span>
                    </Link>
                </div>

                {/* Header */}
                <div className={`${styles.header} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Research Accolades &amp; Intellectual Property</span>
                    </div>
                    <h1 className={styles.title}>Faculty Honors &amp; Patents</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our faculty continually advance pharmaceutical science through granted patents, extramural research grants
                        from central statutory bodies (DST, AICTE), and state awards for teaching distinction.
                    </p>
                </div>

                {/* Metrics Row */}
                <div className={`${styles.statsGrid} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                    {metrics.map((m, idx) => {
                        const Icon = m.icon;
                        return (
                            <div key={idx} className={styles.statCard}>
                                <div className={styles.statIconBox}>
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h3 className={styles.statValue}>{m.value}</h3>
                                    <p className={styles.statLabel}>{m.label}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Honors & Patents Cards Grid with Embedded Imagery */}
                <div className={`${styles.cardsGrid} ${isVisible ? styles.animateReveal3 : styles.hiddenState}`}>
                    {facultyHonors.map((item, idx) => (
                        <div key={idx} className={styles.honorCard}>
                            <div className={styles.cardImgWrap}>
                                <img src={item.image} alt={item.title} className={styles.cardImg} />
                                <div className={styles.cardImgOverlay} />
                                <span className={styles.categoryPill}>{item.category}</span>
                                <span className={styles.yearTag}>
                                    <Calendar size={13} />
                                    {item.year}
                                </span>
                            </div>

                            <div className={styles.cardBody}>
                                <h3 className={styles.honorTitle}>{item.title}</h3>

                                <div className={styles.facultyInfoRow}>
                                    <User size={15} className={styles.facultyIcon} />
                                    <p className={styles.facultyName}>
                                        Lead: <strong>{item.faculty}</strong>
                                    </p>
                                </div>

                                <p className={styles.honorDesc}>{item.desc}</p>

                                <div className={styles.deliverableBadge}>
                                    <CheckCircle2 size={14} className={styles.checkIcon} />
                                    <span>{item.deliverable}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Faculty Research & Recognition Showcase Gallery */}
                <section className={styles.gallerySection}>
                    <div className={styles.galleryHeader}>
                        <span className={styles.galleryEyebrow}>Discovery &amp; Innovations</span>
                        <h2 className={styles.galleryTitle}>Research Labs &amp; Academic Conventions</h2>
                        <p className={styles.gallerySubtitle}>
                            A closer look at state-of-the-art laboratory experimentation, patent demonstration suites, and global keynote
                            engagements led by our professors.
                        </p>
                    </div>

                    <div className={styles.galleryGrid}>
                        {facultyGallery.map((item) => (
                            <div
                                key={item.id}
                                className={styles.galleryCard}
                                onClick={() => setSelectedImage(item.image)}
                            >
                                <div className={styles.galleryImgFrame}>
                                    <img src={item.image} alt={item.title} className={styles.galleryPhoto} />
                                    <div className={styles.galleryPhotoOverlay}>
                                        <div className={styles.zoomIconWrap}>
                                            <Maximize2 size={18} />
                                        </div>
                                    </div>
                                    <span className={styles.galleryTagBadge}>{item.tag}</span>
                                </div>
                                <div className={styles.galleryMeta}>
                                    <h4 className={styles.galleryCardTitle}>{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className={styles.lightboxOverlay} onClick={() => setSelectedImage(null)}>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            onClick={() => setSelectedImage(null)}
                            className={styles.closeBtn}
                            aria-label="Close Preview"
                        >
                            <X size={22} />
                        </button>
                        <img src={selectedImage} alt="Faculty Milestone Zoom" className={styles.lightboxImg} />
                    </div>
                </div>
            )}
        </div>
    );
}