'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Layers,
    Wind,
    FlaskConical,
} from 'lucide-react';
import styles from './PharmaceuticalChemistryLabs.module.css';

const chemSlides = [
    {
        src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
        caption: 'Advanced Chemical Synthesis & Reaction Workbenches',
    },
    {
        src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-Suction Ducted Fume Hoods & Safety Exhaust Systems',
    },
    {
        src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Precision Rotary Evaporators & Distillation Setups',
    },
];

const features = [
    {
        icon: Wind,
        title: 'Fume Hood Stations',
        desc: 'High-suction ducted exhaust hoods ensuring safety.',
        theme: styles.themeEmerald,
    },
    {
        icon: FlaskConical,
        title: 'Synthesis Workbenches',
        desc: 'Equipped with distillation setups and magnetic stirrers.',
        theme: styles.themeAmber,
    },
];

export default function PharmaceuticalChemistryLabs() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % chemSlides.length);
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
                            {chemSlides.map((slide, idx) => (
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
                                    <span>LAB - BLOCK C</span>
                                </span>
                                <span className={styles.specBadge}>Ducted Exhaust • Fume Hoods</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {chemSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {chemSlides.map((_, dotIdx) => (
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
                            <span>Synthesis &amp; Medicinal Chemistry</span>
                        </div>
                        <h2 className={styles.title}>Pharmaceutical Chemistry Labs</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Equipped with individual chemical fume hoods, precision heating mantles, and reaction workstations
                            for synthetic organic, inorganic, and medicinal chemistry experiments[cite: 23].
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