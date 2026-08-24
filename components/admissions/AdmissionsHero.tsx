'use client';

import React, { useState, useEffect } from 'react';
import { GraduationCap, Award, Users, CheckCircle2 } from 'lucide-react';
import styles from './AdmissionsHero.module.css';

const admissionsHeroImages = [
    'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80',
];

export default function AdmissionsHero() {
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % admissionsHeroImages.length);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.section}>
            {/* Background Auto-Cycling Image Slider */}
            <div className={styles.bgSlider}>
                {admissionsHeroImages.map((src, index) => (
                    <div
                        key={index}
                        className={`${styles.bgSlide} ${index === currentIdx ? styles.activeSlide : styles.inactiveSlide
                            }`}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}
            </div>

            {/* Clear Left-to-Right Contrast Gradient Overlay */}
            <div className={styles.overlay} />

            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <span className={styles.eyebrow}>Admissions Open</span>
                    <h1 className={styles.title}>
                        Your Future. <br />
                        Our Commitment.
                    </h1>
                    <div className={styles.accentLine} />

                    <p className={styles.description}>
                        At Jagan&apos;s College of Pharmacy, we make the admission process simple, transparent, and
                        student-friendly. Take the first step toward a rewarding career in pharmaceutical sciences and clinical healthcare.
                    </p>

                    {/* Feature Badges */}
                    <div className={styles.featureList}>
                        <div className={styles.featureItem}>
                            <CheckCircle2 size={16} className={styles.checkIcon} />
                            <span>Affiliated to JNTUA</span>
                        </div>
                        <div className={styles.featureItem}>
                            <CheckCircle2 size={16} className={styles.checkIcon} />
                            <span>AICTE Approved</span>
                        </div>
                        <div className={styles.featureItem}>
                            <CheckCircle2 size={16} className={styles.checkIcon} />
                            <span>Merit &amp; Management Quota</span>
                        </div>
                    </div>

                    {/* 3 Separate Glassmorphic Pillar Cards */}
                    <div className={styles.badgesRow}>
                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeEmerald}`}>
                                <GraduationCap size={22} />
                            </div>
                            <div className={styles.badgeText}>
                                <h4 className={styles.badgeTitle}>Quality Education</h4>
                                <p className={styles.badgeSub}>Industry-aligned curriculum &amp; expert Ph.D faculty</p>
                            </div>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themePurple}`}>
                                <Award size={22} />
                            </div>
                            <div className={styles.badgeText}>
                                <h4 className={styles.badgeTitle}>Approved &amp; Recognized</h4>
                                <p className={styles.badgeSub}>Approved by AICTE and affiliated to JNTUA</p>
                            </div>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeAmber}`}>
                                <Users size={22} />
                            </div>
                            <div className={styles.badgeText}>
                                <h4 className={styles.badgeTitle}>Student Centric</h4>
                                <p className={styles.badgeSub}>Holistic development &amp; dedicated career mentorship</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Slide Indicators */}
                <div className={styles.dotsWrapper}>
                    {admissionsHeroImages.map((_, dotIdx) => (
                        <button
                            key={dotIdx}
                            onClick={() => setCurrentIdx(dotIdx)}
                            className={`${styles.dot} ${dotIdx === currentIdx ? styles.activeDot : ''}`}
                            aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}