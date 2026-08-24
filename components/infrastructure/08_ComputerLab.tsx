'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Layers,
    Monitor,
    Binary,
} from 'lucide-react';
import styles from './ComputerLab.module.css';

const computerLabSlides = [
    {
        src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-Density Desktop Workstations & Gigabit Fiber Network',
    },
    {
        src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
        caption: 'Molecular Docking & In Silico Drug Design Modeling Suite',
    },
    {
        src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        caption: 'Biostatistics, SPSS Analytics & Digital Pharmacokinetics Lab',
    },
];

const features = [
    {
        icon: Monitor,
        title: '60+ High-End PCs',
        desc: 'Dedicated workstations with UPS power backup.',
        theme: styles.themeEmerald,
    },
    {
        icon: Binary,
        title: 'Molecular Tools',
        desc: 'ChemDraw, AutoDock, and SPSS statistical packages.',
        theme: styles.themeAmber,
    },
];

export default function ComputerLab() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % computerLabSlides.length);
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
                            {computerLabSlides.map((slide, idx) => (
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
                                    <span>LAB - BLOCK A</span>
                                </span>
                                <span className={styles.specBadge}>60+ Terminals • Gigabit Fiber</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {computerLabSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {computerLabSlides.map((_, dotIdx) => (
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
                            <span>Digital &amp; Computational Pharmacy</span>
                        </div>
                        <h2 className={styles.title}>Computer Lab</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            High-speed computing facility equipped with 60+ latest desktop workstations, gigabit fiber internet, and
                            licensed software for molecular modeling and biostatistics[cite: 19].
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