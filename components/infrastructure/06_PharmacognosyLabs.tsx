'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Layers,
    FlaskRound as Flask,
    Flower2,
} from 'lucide-react';
import styles from './PharmacognosyLabs.module.css';

const pharmacognosySlides = [
    {
        src: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80',
        caption: 'Continuous Soxhlet & Rotary Solvent Extraction Bays',
    },
    {
        src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Authentic Botanical Herbarium & Medicinal Plant Specimen Museum',
    },
    {
        src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Phytochemical Isolation, Chromatography & Microscopy Workstations',
    },
];

const features = [
    {
        icon: Flask,
        title: 'Soxhlet Extraction',
        desc: 'Continuous solvent extractors for natural active isolates.',
        theme: styles.themeEmerald,
    },
    {
        icon: Flower2,
        title: 'Herbarium Museum',
        desc: 'Rich library of authentic plant and mineral specimens.',
        theme: styles.themeAmber,
    },
];

export default function PharmacognosyLabs() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % pharmacognosySlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.sectionAlt}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    {/* Left Column: Rounded Auto-sliding Image Carousel */}
                    <div className={styles.carouselContainer}>
                        <div className={styles.imageFrame}>
                            {pharmacognosySlides.map((slide, idx) => (
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
                                    <span>LAB - BLOCK D</span>
                                </span>
                                <span className={styles.specBadge}>Botanical Museum • Extraction Bay</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {pharmacognosySlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {pharmacognosySlides.map((_, dotIdx) => (
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

                    {/* Right Column: Information Content & Feature Cards */}
                    <div className={styles.infoContent}>
                        <div className={styles.eyebrowTag}>
                            <Sparkles size={14} className={styles.eyebrowIcon} />
                            <span>Natural Products &amp; Phytochemistry</span>
                        </div>
                        <h2 className={styles.title}>Pharmacognosy Labs</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Dedicated to the extraction, isolation, identification, and standardization of crude herbal
                            drugs, botanical tissues, and active phytoconstituents[cite: 23].
                        </p>

                        {/* 2 Feature Cards Grid */}
                        <div className={styles.featuresGrid}>
                            {features.map((feat, idx) => {
                                const Icon = feat.icon;
                                return (
                                    <div key={idx} className={styles.featureCardAlt}>
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
                </div>
            </div>
        </section>
    );
}