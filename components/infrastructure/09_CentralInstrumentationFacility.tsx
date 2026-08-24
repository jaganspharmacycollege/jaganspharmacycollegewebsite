'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Layers,
    Gauge,
    ScanSearch,
} from 'lucide-react';
import styles from './CentralInstrumentationFacility.module.css';

const cifSlides = [
    {
        src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Quaternary Gradient HPLC Systems with Auto-Samplers & PDA Detectors',
    },
    {
        src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
        caption: 'Fourier Transform Infrared (FT-IR) & Double-Beam UV-Vis Spectrophotometers',
    },
    {
        src: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Climate-Controlled Clean Analytical Research Suite & Dissolution Stations',
    },
];

const features = [
    {
        icon: Gauge,
        title: 'HPLC Systems',
        desc: 'Gradient HPLC units with UV-Vis and PDA detection.',
        theme: styles.themeEmerald,
    },
    {
        icon: ScanSearch,
        title: 'FTIR & UV-Vis',
        desc: 'Infrared and spectrophotometric assay validation.',
        theme: styles.themeAmber,
    },
];

export default function CentralInstrumentationFacility() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % cifSlides.length);
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
                            <span>Advanced Analytical Research</span>
                        </div>
                        <h2 className={styles.title}>Central Instrumentation Facility</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            A centralized, climate-controlled research core housing state-of-the-art analytical equipment
                            supporting postgraduate theses, doctoral research, and industrial consultancy projects[cite: 20].
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
                            {cifSlides.map((slide, idx) => (
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
                                    <span>CIF - CORE LAB</span>
                                </span>
                                <span className={styles.specBadge}>Climate Controlled • High Precision</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {cifSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {cifSlides.map((_, dotIdx) => (
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