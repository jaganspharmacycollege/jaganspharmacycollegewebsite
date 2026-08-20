'use client';

import React, { useState, useEffect } from 'react';
import { Award, Users, CheckCircle2 } from 'lucide-react';
import styles from './AboutCollegeSection.module.css';

const campusHeroImages = [
    'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80',
];

export default function AboutCollegeSection() {
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % campusHeroImages.length);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.section}>
            {/* Background Auto-Cycling Image Slider */}
            <div className={styles.bgSlider}>
                {campusHeroImages.map((src, index) => (
                    <div
                        key={index}
                        className={`${styles.bgSlide} ${index === currentIdx ? styles.activeSlide : styles.inactiveSlide
                            }`}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}
            </div>

            {/* Clear Gradient Overlay */}
            <div className={styles.overlay} />

            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <span className={styles.eyebrow}>About Our Institution</span>
                    <h2 className={styles.title}>
                        Excellence in Pharmacy <br />
                        &amp; Healthcare Education
                    </h2>
                    <div className={styles.accentLine} />

                    <p className={styles.description}>
                        Established with a vision to deliver excellence in pharmacy education and scientific innovation,
                        Jagan&apos;s College of Pharmacy provides students with comprehensive clinical knowledge,
                        cutting-edge laboratory facilities, and experiential research opportunities.
                    </p>

                    <p className={styles.description}>
                        Our sprawling green campus is equipped with smart classrooms, advanced analytical instruments,
                        an extensive digital library, and dedicated spaces designed to prepare future-ready pharmacists
                        and healthcare leaders.
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
                            <span>Multi-Specialty Hospital Postings</span>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statIconBadge}>
                                <Award size={22} />
                            </div>
                            <div>
                                <div className={styles.statVal}>15+</div>
                                <div className={styles.statLabel}>Years of Educational Excellence</div>
                            </div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statIconBadge}>
                                <Users size={22} />
                            </div>
                            <div>
                                <div className={styles.statVal}>3500+</div>
                                <div className={styles.statLabel}>Graduated Pharmacists</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className={styles.dotsWrapper}>
                    {campusHeroImages.map((_, dotIdx) => (
                        <span
                            key={dotIdx}
                            className={`${styles.dot} ${dotIdx === currentIdx ? styles.activeDot : ''
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}