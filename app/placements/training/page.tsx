'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    ArrowLeft,
    GraduationCap,
    Briefcase,
    Layers,
    BookOpen,
    CheckCircle2,
    Users,
    Award,
    Maximize2,
    X,
    Stethoscope,
    Microscope,
} from 'lucide-react';
import styles from './Training.module.css';

interface TrainingModule {
    icon: any;
    title: string;
    tag: string;
    image: string;
    desc: string;
    points: string[];
}

const modules: TrainingModule[] = [
    {
        icon: BookOpen,
        title: 'Pre-Clinical & Clinical Aptitude',
        tag: 'Clinical Research & Trials',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85',
        desc: 'Structured training modules focusing on Pharmacovigilance, Clinical Data Management (CDM), Regulatory Affairs, and Medical Coding protocols.',
        points: [
            'GCP / GLP compliance simulations & audit guidelines',
            'Phase I - IV Clinical trial protocol architecture',
            'MedDRA & WHO drug dictionaries terminology',
            'ADR reporting and causality assessment techniques',
        ],
    },
    {
        icon: Layers,
        title: 'Formulation & QC Analytical Labs',
        tag: 'Instrumentation & cGMP',
        image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=85',
        desc: 'Hands-on instrumentation training covering HPLC, UV-Spectroscopy, FTIR, and dissolution profiling in strict compliance with current GMP norms.',
        points: [
            'Chromatographic HPLC & UV method development',
            'Methodology documentation as per ICH Q2 guidelines',
            'Cleanroom hygiene, pilot plant operations & equipment calibration',
            'Pre-formulation stability testing and dissolution analysis',
        ],
    },
    {
        icon: Users,
        title: 'Soft Skills & HR Mock Interviews',
        tag: 'Corporate Readiness',
        image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=900&q=85',
        desc: 'Intensive communication drills, technical group discussions, personality profiling, and one-on-one mock interview sessions conducted by pharma corporate HR heads.',
        points: [
            'Technical communication & GD mastery for campus drives',
            'Resume refining and professional LinkedIn personal branding',
            'Pharma MNC situational aptitude and behavioral HR drills',
            'Body language, stress interview tactics & corporate etiquette',
        ],
    },
];

const trainingShowcase = [
    {
        id: 1,
        title: 'Central Analytical Lab & HPLC Station',
        category: 'Analytical Instrumentation',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 2,
        title: 'Clinical Ward Rounds & Preceptor Training',
        category: 'Hospital Pharmacy',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 3,
        title: 'Sterile Formulation & Pilot Manufacturing',
        category: 'Industrial Pharmacy',
        image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 4,
        title: 'Corporate Aptitude & Mock Interview Sessions',
        category: 'HR Personality Drills',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 5,
        title: 'Pharmacology Cell & Bioassay Experiments',
        category: 'Preclinical Screening',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 6,
        title: 'Pharmacovigilance & Drug Coding Workshop',
        category: 'Clinical Data Management',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
    },
];

export default function PlacementTrainingPage() {
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
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            isMounted = false;
            observer.disconnect();
        };
    }, []);

    // Smooth Parallax Loop
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
                        <span>Placement &amp; Corporate Readiness</span>
                    </div>
                    <h1 className={styles.title}>Industry Readiness &amp; Training Programs</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our comprehensive training wing equips students with practical laboratory expertise, clinical reasoning,
                        regulatory documentation competencies, and corporate interpersonal skills before on-campus recruitment drives.
                    </p>
                </div>

                {/* Key Metrics Stats Row */}
                <div className={`${styles.statsGrid} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                    <div className={styles.statCard}>
                        <div className={styles.statIconBox}>
                            <Award size={24} />
                        </div>
                        <div>
                            <h3 className={styles.statValue}>180+ Hrs</h3>
                            <p className={styles.statLabel}>Dedicated Annual Training</p>
                        </div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statIconBox}>
                            <Briefcase size={24} />
                        </div>
                        <div>
                            <h3 className={styles.statValue}>100%</h3>
                            <p className={styles.statLabel}>Internship Placement Target</p>
                        </div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statIconBox}>
                            <GraduationCap size={24} />
                        </div>
                        <div>
                            <h3 className={styles.statValue}>25+</h3>
                            <p className={styles.statLabel}>Industry Guest Mentors</p>
                        </div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statIconBox}>
                            <Layers size={24} />
                        </div>
                        <div>
                            <h3 className={styles.statValue}>5 Labs</h3>
                            <p className={styles.statLabel}>Advanced Hands-on Modules</p>
                        </div>
                    </div>
                </div>

                {/* Primary Detailed Training Modules (Cards with Photo Headers) */}
                <div className={`${styles.contentGrid} ${isVisible ? styles.animateReveal3 : styles.hiddenState}`}>
                    {modules.map((m, idx) => {
                        const Icon = m.icon;
                        return (
                            <div key={idx} className={styles.moduleCard}>
                                <div className={styles.moduleImgBox}>
                                    <img src={m.image} alt={m.title} className={styles.moduleImg} />
                                    <div className={styles.moduleImgOverlay} />
                                    <span className={styles.moduleTagBadge}>{m.tag}</span>
                                    <div className={styles.floatingIconBox}>
                                        <Icon size={20} />
                                    </div>
                                </div>

                                <div className={styles.moduleBody}>
                                    <h3 className={styles.cardTitle}>{m.title}</h3>
                                    <p className={styles.cardText}>{m.desc}</p>

                                    <div className={styles.pointsList}>
                                        {m.points.map((pt, pIdx) => (
                                            <div key={pIdx} className={styles.pointRow}>
                                                <CheckCircle2 size={15} className={styles.pointIcon} />
                                                <span>{pt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Image Showcase Gallery: Hands-On Student Training in Action */}
                <section className={styles.gallerySection}>
                    <div className={styles.galleryHeader}>
                        <span className={styles.galleryEyebrow}>Real-World Experience</span>
                        <h2 className={styles.galleryTitle}>Practical Training &amp; Clinical Exposure</h2>
                        <p className={styles.gallerySubtitle}>
                            From hospital rounds to formulation manufacturing, take a look at our students mastering professional
                            competencies across diverse domains.
                        </p>
                    </div>

                    <div className={styles.galleryGrid}>
                        {trainingShowcase.map((item) => (
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
                                    <span className={styles.categoryBadge}>{item.category}</span>
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
                        <img src={selectedImage} alt="Training Showcase Zoom" className={styles.lightboxImg} />
                    </div>
                </div>
            )}
        </div>
    );
}