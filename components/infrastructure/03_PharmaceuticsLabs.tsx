'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Layers,
    Pill,
    ShieldCheck,
} from 'lucide-react';
import styles from './PharmaceuticsLabs.module.css';

const labSlides = [
    {
        src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
        caption: 'Industrial Rotary Tablet Compression & Coating Section',
    },
    {
        src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Class 10,000 Aseptic Sterile Cleanroom & Laminar Airflows',
    },
    {
        src: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
        caption: 'USP Dissolution Apparatus & Physical Pharmacy Testing Unit',
    },
];

const features = [
    {
        icon: Pill,
        title: 'Tableting Unit',
        desc: 'Rotary tablet presses, coating pans, and capsule fillers.',
        theme: styles.themeEmerald,
    },
    {
        icon: ShieldCheck,
        title: 'Sterile Cleanroom',
        desc: 'Laminar airflow hoods for aseptic ophthalmic formulations.',
        theme: styles.themeAmber,
    },
];

export default function PharmaceuticsLabs() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % labSlides.length);
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
                            <span>Formulation &amp; Manufacturing</span>
                        </div>
                        <h2 className={styles.title}>Pharmaceutics Laboratories</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Designed for novel dosage form preparation, pilot-scale manufacturing, and physical pharmacy
                            experiments conforming strictly to Good Laboratory Practices (GLP)[cite: 22].
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
                            {labSlides.map((slide, idx) => (
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
                                    <span>LAB - BLOCK B</span>
                                </span>
                                <span className={styles.specBadge}>GLP Standard • Cleanroom 10K</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {labSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {labSlides.map((_, dotIdx) => (
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