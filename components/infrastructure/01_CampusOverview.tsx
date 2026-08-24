'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Layers,
    Trees,
    Building2,
} from 'lucide-react';
import styles from './CampusOverview.module.css';

const campusSlides = [
    {
        src: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
        caption: 'Main Academic Block & Integrated Research Complex',
    },
    {
        src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Lush Botanical Gardens & Green Quadrangle',
    },
    {
        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
        caption: 'Interconnected Administrative & Smart Lecture Wings',
    },
];

const features = [
    {
        icon: Trees,
        title: 'Lush Green Setting',
        desc: 'Pollution-free atmosphere built for focused learning.',
        theme: styles.themeEmerald,
    },
    {
        icon: Building2,
        title: 'Centralized Block',
        desc: 'Interconnected academic and administrative wings.',
        theme: styles.themeAmber,
    },
];

export default function CampusOverview() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % campusSlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.section}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    {/* Left Column: Information & Feature Cards */}
                    <div className={styles.infoContent}>
                        <div className={styles.eyebrowTag}>
                            <Sparkles size={14} className={styles.eyebrowIcon} />
                            <span>Campus &amp; Facilities</span>
                        </div>
                        <h1 className={styles.title}>Campus Overview</h1>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Spread across a serene, green campus, Jagan&apos;s College of Pharmacy offers a purpose-built
                            environment designed exclusively for high-standard pharmaceutical education, clinical training,
                            and translational research[cite: 20].
                        </p>

                        {/* 2 Separated Feature Cards */}
                        <div className={styles.featuresGrid}>
                            {features.map((feat, idx) => {
                                const Icon = feat.icon;
                                return (
                                    <div key={idx} className={styles.featureCard}>
                                        <div className={`${styles.iconSquircle} ${feat.theme}`}>
                                            <Icon size={20} strokeWidth={2.2} />
                                        </div>
                                        <div>
                                            <h4 className={styles.featureTitle}>{feat.title}</h4>
                                            <p className={styles.featureDesc}>{feat.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Auto-sliding Rounded Image Carousel */}
                    <div className={styles.carouselContainer}>
                        <div className={styles.imageFrame}>
                            {campusSlides.map((slide, idx) => (
                                <img
                                    key={idx}
                                    src={slide.src}
                                    alt={slide.caption}
                                    className={`${styles.carouselImg} ${idx === currentImgIdx ? styles.activeImg : styles.inactiveImg
                                        }`}
                                />
                            ))}
                            <div className={styles.imageOverlay} />

                            {/* Top Amber Code Badges */}
                            <div className={styles.badgesHeader}>
                                <span className={styles.codeBadge}>
                                    <Layers size={13} className={styles.codeIcon} />
                                    <span>CAMPUS - MAIN WING</span>
                                </span>
                                <span className={styles.specBadge}>Eco-Friendly • Wi-Fi Campus</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {campusSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {campusSlides.map((_, dotIdx) => (
                                        <button
                                            key={dotIdx}
                                            onClick={() => setCurrentImgIdx(dotIdx)}
                                            className={`${styles.dot} ${dotIdx === currentImgIdx ? styles.activeDot : ''
                                                }`}
                                            aria-label={`Go to slide ${dotIdx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}