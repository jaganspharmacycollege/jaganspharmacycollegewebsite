'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    FlaskConical,
    Stethoscope,
    Microscope,
    Award,
    FileText,
    ShieldCheck,
} from 'lucide-react';
import styles from './HomeCoursesEnquirySection.module.css';

interface ActivitySlide {
    title: string;
    subtitle: string;
    image: string;
}

const recentActivities: ActivitySlide[] = [
    {
        title: 'Campus Life',
        subtitle: 'Beyond classrooms, a world of opportunities and growth.',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85',
    },
    {
        title: 'National Seminars',
        subtitle: 'Interacting with leading clinical researchers and industrial stalwarts.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85',
    },
    {
        title: 'Sports & Athletics',
        subtitle: 'Fostering teamwork, vitality, and annual tournament championships.',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85',
    },
    {
        title: 'Industrial Immersion',
        subtitle: 'Hands-on formulation exposure at cGMP pharmaceutical plants.',
        image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=85',
    },
];

export default function HomeCoursesEnquirySection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isMounted = true;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isMounted && entry) {
                    setIsVisible(entry.isIntersecting);
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
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
            if (isMounted) {
                animationFrameId = requestAnimationFrame(updateParallax);
            }
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
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % recentActivities.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    const active = recentActivities[currentSlide];

    return (
        <section ref={sectionRef} className={styles.section}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div
                    className={`${styles.topHeading} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <span className={styles.eyebrow}>Our Academic Programs</span>
                </div>

                <div className={styles.mainLayout}>
                    {/* Left Column: 3 Course Cards + Bottom Trust/Action Banner */}
                    <div className={styles.leftColumn}>
                        <div className={styles.coursesGrid}>
                            {/* 1. B. Pharmacy */}
                            <div
                                className={`${styles.courseCard} ${styles.cardBpharm} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardTop}>
                                    <div className={`${styles.iconCircle} ${styles.bpharmIcon}`}>
                                        <FlaskConical size={28} />
                                    </div>
                                    <h3 className={styles.courseName}>B. Pharmacy</h3>
                                    <span className={styles.durationBadge}>Duration: 4 Years</span>
                                    <p className={styles.courseText}>
                                        Undergraduate program that builds a strong foundation in pharmaceutical sciences, medicinal
                                        chemistry, drug development, dosage formulation, and laboratory instrumentation.
                                    </p>
                                    <p className={styles.courseSubText}>
                                        Prepares graduates for diverse careers in pharmaceutical manufacturing, quality
                                        assurance, drug regulatory affairs, marketing, and competitive examinations like GPAT.
                                    </p>
                                </div>
                                <Link href="/courses/b-pharm" className={styles.learnMoreLink}>
                                    <span>Learn More</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>

                            {/* 2. Pharm.D */}
                            <div
                                className={`${styles.courseCard} ${styles.cardPharmd} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardTop}>
                                    <div className={`${styles.iconCircle} ${styles.pharmdIcon}`}>
                                        <Stethoscope size={28} />
                                    </div>
                                    <h3 className={styles.courseName}>Pharm.D</h3>
                                    <span className={styles.durationBadge}>Duration: 6 Years</span>
                                    <p className={styles.courseText}>
                                        Doctor of Pharmacy professional doctorate curriculum focused on patient-centered
                                        healthcare, therapeutic drug monitoring, hospital ward rounds, and clinical pharmacokinetics.
                                    </p>
                                    <p className={styles.courseSubText}>
                                        Includes an extensive 1-year residency internship in multi-specialty hospitals, equipping
                                        students for clinical pharmacy practice and global healthcare research careers.
                                    </p>
                                </div>
                                <Link href="/courses/pharm-d" className={styles.learnMoreLink}>
                                    <span>Learn More</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>

                            {/* 3. M. Pharmacy */}
                            <div
                                className={`${styles.courseCard} ${styles.cardMpharm} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardTop}>
                                    <div className={`${styles.iconCircle} ${styles.mpharmIcon}`}>
                                        <Microscope size={28} />
                                    </div>
                                    <h3 className={styles.courseName}>M. Pharmacy</h3>
                                    <span className={styles.durationBadge}>Duration: 2 Years</span>
                                    <p className={styles.courseText}>
                                        Postgraduate program offering advanced specialization and research exposure in
                                        Pharmaceutics, Pharmacology, and Pharmaceutical Analysis with dedicated dissertation projects.
                                    </p>
                                    <p className={styles.courseSubText}>
                                        Focuses on modern analytical techniques (HPLC, UV-Vis, FTIR), novel drug delivery systems,
                                        pharmacological screening, and high-impact biomedical publications.
                                    </p>
                                </div>
                                <Link href="/courses/m-pharm" className={styles.learnMoreLink}>
                                    <span>Learn More</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Bottom Trust & Feature Highlights Banner */}
                        <div
                            className={`${styles.trustBanner} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                                }`}
                        >
                            <div className={styles.trustItem}>
                                <div className={styles.trustIconWrap}>
                                    <ShieldCheck size={18} />
                                </div>
                                <div>
                                    <h4 className={styles.trustTitle}>PCI &amp; AICTE Approved</h4>
                                    <p className={styles.trustSubtitle}>Affiliated to JNTUA Anantapur</p>
                                </div>
                            </div>

                            <div className={styles.trustDivider} />

                            <div className={styles.trustItem}>
                                <div className={styles.trustIconWrap}>
                                    <Award size={18} />
                                </div>
                                <div>
                                    <h4 className={styles.trustTitle}>GPAT Coaching &amp; Research</h4>
                                    <p className={styles.trustSubtitle}>100% Placement &amp; Lab Training</p>
                                </div>
                            </div>

                            <div className={styles.trustDivider} />

                            <div className={styles.trustAction}>
                                <Link
                                    href="/admissions/eligibility-criteria"
                                    className={styles.trustCtaBtn}
                                >
                                    <FileText size={15} />
                                    <span>Eligibility Criteria</span>
                                    <ArrowRight size={13} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Clean Visual Showcase without Button or Green Tint */}
                    <div
                        className={`${styles.visualShowcaseCard} ${isVisible ? styles.animateReveal5 : styles.hiddenState
                            }`}
                    >
                        {/* Natural Original Image */}
                        <img
                            key={active.image}
                            src={active.image}
                            alt={active.title}
                            className={styles.fullBleedImage}
                        />

                        {/* Soft Neutral Bottom Scrim for Text Contrast */}
                        <div className={styles.naturalGradientScrim} />

                        {/* Top Right Mini Indicators */}
                        <div className={styles.indicatorsTrack}>
                            {recentActivities.map((_, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setCurrentSlide(idx)}
                                    aria-label={`Slide ${idx + 1}`}
                                    className={`${styles.indicatorBar} ${currentSlide === idx ? styles.activeIndicator : ''
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Bottom Text Area */}
                        <div className={styles.bottomContentArea}>
                            <h2 className={styles.cardTitle}>{active.title}</h2>
                            <p className={styles.cardSubtitle}>{active.subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}