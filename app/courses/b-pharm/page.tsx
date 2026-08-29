'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Clock,
    CheckCircle2,
    Users2,
    GraduationCap,
    FlaskConical,
} from 'lucide-react';
import styles from './BPharm.module.css';

const overviewImages = [
    {
        src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
        caption: 'Modern Analytical & Formulation Labs',
    },
    {
        src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
        caption: 'Pharmaceutical Chemistry & Research',
    },
    {
        src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
        caption: 'Industrial Compounding & Pill Formulation',
    },
];

export default function BPharmPage() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // 5000ms auto-cycling carousel with cross-fade
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % overviewImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Viewport Intersection Observer triggering on entry
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Fluid lerp (0.035) Parallax Animation
    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;

        const updateParallax = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();

            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                currentScroll += (targetScroll - currentScroll) * 0.035;
                const relativeOffset = window.innerHeight - rect.top;

                if (orbLeftRef.current) {
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06
                        }px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05
                        }px, 0)`;
                }
            }

            animationFrameId = requestAnimationFrame(updateParallax);
        };

        const handleScroll = () => {
            targetScroll = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateParallax);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div
                    className={`${styles.pageHeader} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <span className={styles.eyebrow}>Undergraduate Degree</span>
                    <h1 className={styles.title}>
                        Bachelor of Pharmacy (B. Pharm)
                    </h1>
                    <div className={styles.accentLine} />
                    <p className={styles.headerSub}>
                        A foundational four-year curriculum designed to build technical mastery in pharmaceutical sciences, drug discovery, industrial formulation, and patient healthcare.
                    </p>
                </div>

                {/* 1. Main Overview Feature Card with Auto-sliding Images */}
                <div
                    className={`${styles.overviewCard} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                        }`}
                >
                    <div className={styles.overviewContent}>
                        <div className={styles.cardSectionTag}>
                            <FlaskConical size={14} />
                            <span>Program Highlights</span>
                        </div>
                        <h2 className={styles.cardHeading}>
                            Industry-Driven Pharmaceutical Excellence
                        </h2>
                        <p className={styles.descText}>
                            The Bachelor of Pharmacy (B. Pharm) program provides comprehensive theoretical and practical training across Pharmaceutical Chemistry, Pharmacology, Pharmacognosy, and Pharmaceutics. Affiliated with JNTUA and approved by AICTE, our curriculum equips graduates for diverse roles in drug manufacturing, analytical research, regulatory affairs, and clinical hospital care.
                        </p>
                        <div className={styles.highlightsList}>
                            <div className={styles.highlightItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>Affiliated to JNTUA</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>AICTE Approved</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>Advanced Formulation Labs</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>100% Placement &amp; Internship Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Auto-sliding Image Carousel Frame */}
                    <div className={styles.overviewImageWrapper}>
                        {overviewImages.map((item, idx) => (
                            <img
                                key={idx}
                                src={item.src}
                                alt={item.caption}
                                className={`${styles.overviewImage} ${idx === currentImgIdx ? styles.activeImg : styles.inactiveImg
                                    }`}
                            />
                        ))}
                        <div className={styles.imageOverlay} />

                        {/* Dynamic Active Caption Badge */}
                        <div className={styles.imageBadge}>
                            <span>{overviewImages[currentImgIdx].caption}</span>
                        </div>

                        {/* Carousel Dot Indicators */}
                        <div className={styles.dotsWrapper}>
                            {overviewImages.map((_, dotIdx) => (
                                <button
                                    key={dotIdx}
                                    onClick={() => setCurrentImgIdx(dotIdx)}
                                    className={`${styles.dot} ${dotIdx === currentImgIdx ? styles.activeDot : ''
                                        }`}
                                    aria-label={`Show image ${dotIdx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Key Specifications Cards Grid (Duration, Eligibility, Intake) */}
                <div className={styles.specsGrid}>
                    {/* Card 1: Duration */}
                    <div
                        className={`${styles.specCard} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                            }`}
                    >
                        <div className={styles.specHeader}>
                            <div className={`${styles.iconSquircle} ${styles.iconMint}`}>
                                <Clock size={22} strokeWidth={2.2} />
                            </div>
                            <div className={styles.specHeaderTitles}>
                                <span className={styles.specEyebrow}>Academic Timeline</span>
                                <h3 className={styles.specTitle}>Duration</h3>
                            </div>
                        </div>
                        <div className={styles.metricWrapper}>
                            <div className={styles.metricValue}>4 Years</div>
                            <div className={styles.metricSub}>8 Semesters &bull; Full-Time</div>
                        </div>
                        <p className={styles.specDesc}>
                            Includes hands-on laboratory sessions, industrial manufacturing visits, hospital training rotations, and a final-semester research project dissertation.
                        </p>
                    </div>

                    {/* Card 2: Eligibility */}
                    <div
                        className={`${styles.specCard} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                            }`}
                    >
                        <div className={styles.specHeader}>
                            <div className={`${styles.iconSquircle} ${styles.iconAmber}`}>
                                <GraduationCap size={22} strokeWidth={2.2} />
                            </div>
                            <div className={styles.specHeaderTitles}>
                                <span className={styles.specEyebrow}>Admission Criteria</span>
                                <h3 className={styles.specTitle}>Eligibility</h3>
                            </div>
                        </div>
                        <div className={styles.eligibilityList}>
                            <div className={styles.eligibilityItem}>
                                <span className={styles.listBulletDot} />
                                <span className={styles.eligibilityText}>
                                    Passed 10+2 Intermediate with Physics &amp; Chemistry + Math/Biology (MPC/BiPC).
                                </span>
                            </div>
                            <div className={styles.eligibilityItem}>
                                <span className={styles.listBulletDot} />
                                <span className={styles.eligibilityText}>
                                    Minimum 45% aggregate marks (40% for reserved categories) in qualifying subjects.
                                </span>
                            </div>
                            <div className={styles.eligibilityItem}>
                                <span className={styles.listBulletDot} />
                                <span className={styles.eligibilityText}>
                                    Valid rank in AP EAPCET or management criteria as per state government norms.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Intake */}
                    <div
                        className={`${styles.specCard} ${isVisible ? styles.animateReveal5 : styles.hiddenState
                            }`}
                    >
                        <div className={styles.specHeader}>
                            <div className={`${styles.iconSquircle} ${styles.iconPurple}`}>
                                <Users2 size={22} strokeWidth={2.2} />
                            </div>
                            <div className={styles.specHeaderTitles}>
                                <span className={styles.specEyebrow}>Approved Capacity</span>
                                <h3 className={styles.specTitle}>Annual Intake</h3>
                            </div>
                        </div>
                        <div className={styles.metricWrapper}>
                            <div className={styles.metricValue}>100 Seats</div>
                            <div className={styles.metricSub}>Approved by AICTE &amp; JNTUA</div>
                        </div>
                        <p className={styles.specDesc}>
                            Seat allotment is conducted seamlessly through AP state counseling (Convenor Quota) and institutional category admissions (Management Quota).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}