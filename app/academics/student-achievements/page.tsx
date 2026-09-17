'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    ArrowLeft,
    Trophy,
    Medal,
    Award,
    BookOpen,
    Calendar,
    CheckCircle2,
    Maximize2,
    X,
    User,
} from 'lucide-react';
import styles from './StudentAchievements.module.css';

interface AchievementItem {
    title: string;
    student: string;
    year: string;
    category: string;
    image: string;
    desc: string;
    tags: string[];
}

const stats = [
    { label: 'GPAT / NIPER Qualifiers', value: '45+', icon: Trophy },
    { label: 'State Gold Medals', value: '8', icon: Medal },
    { label: 'Conference Paper Awards', value: '28', icon: Award },
    { label: 'Student Hackathon Wins', value: '12', icon: BookOpen },
];

const achievements: AchievementItem[] = [
    {
        title: 'GPAT All India Rank (AIR 64)',
        student: 'M. Sravani (B.Pharm Final Year)',
        year: '2026',
        category: 'National Competitive Exam',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85',
        desc: 'Secured national top-100 ranking in the Graduate Pharmacy Aptitude Test with a 99.85 percentile, earning a direct MHRD postgraduate fellowship.',
        tags: ['GPAT', 'NIPER Qualified', 'National Fellowship'],
    },
    {
        title: 'Best Oral Presentation – Indian Pharmaceutical Congress (IPC)',
        student: 'K. Sai Akhil & Team (Pharm.D 5th Year)',
        year: '2025',
        category: 'Clinical Research Symposium',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85',
        desc: 'Awarded 1st place in the Clinical Pharmacy & Pharmacovigilance track for their investigative prospective paper on ADR monitoring in tertiary care cardiology units.',
        tags: ['IPC 2025', 'Clinical Research', 'Gold Citation'],
    },
    {
        title: 'State University Gold Medal in B. Pharm',
        student: 'V. Divya Teja',
        year: '2024',
        category: 'University Academic Excellence',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85',
        desc: 'Ranked 1st across JNTUA affiliated pharmacy colleges with an overall 9.42 CGPA, presented by the Honorable Governor of Andhra Pradesh.',
        tags: ['JNTUA Gold Medal', 'Academic Rank 1', 'Merit Honor'],
    },
    {
        title: 'National Pharma Hackathon Runners-Up',
        student: 'R. Karthik & P. Sneha Latha (M.Pharm & B.Pharm)',
        year: '2025',
        category: 'Innovation & Formulation Design',
        image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=85',
        desc: 'Developed a novel 3D-printed biodegradable microneedle patch for transdermal insulin delivery, winning a cash grant of INR 50,000.',
        tags: ['Hackathon', 'Patent Filed', 'Cash Award'],
    },
    {
        title: 'Best Scientific Poster Award – APTI National Convention',
        student: 'B. Pooja Reddy (Pharm.D 4th Year)',
        year: '2024',
        category: 'Preclinical Pharmacology',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85',
        desc: 'Recognized by the Association of Pharmaceutical Teachers of India for her screening model on natural flavonoids in neurodegenerative inflammation.',
        tags: ['APTI', 'Poster 1st Place', 'Pharmacology'],
    },
    {
        title: 'University Sports Championship – Badminton & Table Tennis',
        student: 'T. Rakesh Verma & G. Suresh Babu',
        year: '2025',
        category: 'Inter-Collegiate Athletics',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85',
        desc: "Secured Gold in men's doubles badminton and Silver in singles table tennis during the JNTUA Inter-Collegiate Central Zone Tournament.",
        tags: ['JNTUA Sports', 'Gold Medal', 'Athletics'],
    },
];

const galleryShowcase = [
    {
        id: 1,
        title: 'Governor Gold Medal Felicitation Ceremony',
        tag: 'University Honor',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 2,
        title: 'National IPC Research Paper Presentation',
        tag: 'Clinical Conclave',
        image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 3,
        title: '3D Formulation Prototype Demo & Grant',
        tag: 'Innovation Award',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 4,
        title: 'APTI Scientific Poster Exhibition & Defense',
        tag: 'Pharmacology Laurels',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 5,
        title: 'Inter-Collegiate Sports Trophy Celebration',
        tag: 'Athletics Championship',
        image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 6,
        title: 'GPAT Top Rankers Felicitation by Chairman',
        tag: 'Merit Recognition',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85',
    },
];

export default function StudentAchievementsPage() {
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

                {/* Page Header */}
                <div className={`${styles.header} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Academic &amp; Competitive Excellence</span>
                    </div>
                    <h1 className={styles.title}>Student Achievements &amp; Laurels</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our students earn recognition in national competitive examinations, international research symposia,
                        patent incubators, and university sports championships.
                    </p>
                </div>

                {/* Stats Row */}
                <div className={`${styles.statsGrid} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                    {stats.map((s, idx) => {
                        const Icon = s.icon;
                        return (
                            <div key={idx} className={styles.statCard}>
                                <div className={styles.statIconBox}>
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h3 className={styles.statValue}>{s.value}</h3>
                                    <p className={styles.statLabel}>{s.label}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Achievements Cards Grid with Featured Images */}
                <div className={`${styles.cardsGrid} ${isVisible ? styles.animateReveal3 : styles.hiddenState}`}>
                    {achievements.map((item, idx) => (
                        <div key={idx} className={styles.achievementCard}>
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
                                <h3 className={styles.achievementTitle}>{item.title}</h3>

                                <div className={styles.studentInfoRow}>
                                    <User size={15} className={styles.studentIcon} />
                                    <p className={styles.studentName}>
                                        Recipient: <strong>{item.student}</strong>
                                    </p>
                                </div>

                                <p className={styles.achievementDesc}>{item.desc}</p>

                                <div className={styles.tagsRow}>
                                    {item.tags.map((t, tIdx) => (
                                        <span key={tIdx} className={styles.tagPill}>
                                            <CheckCircle2 size={12} className={styles.tagCheck} />
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Showcase Gallery: Laurels & Felicitations */}
                <section className={styles.gallerySection}>
                    <div className={styles.galleryHeader}>
                        <span className={styles.galleryEyebrow}>Wall of Fame</span>
                        <h2 className={styles.galleryTitle}>Felicitations &amp; Conclave Moments</h2>
                        <p className={styles.gallerySubtitle}>
                            Memorable highlights of our students receiving university awards, presenting research posters, and excelling
                            at inter-collegiate sports meets.
                        </p>
                    </div>

                    <div className={styles.galleryGrid}>
                        {galleryShowcase.map((item) => (
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
                        <img src={selectedImage} alt="Award Highlight Zoom" className={styles.lightboxImg} />
                    </div>
                </div>
            )}
        </div>
    );
}