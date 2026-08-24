'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Layers,
    Sprout,
    Flower2,
} from 'lucide-react';
import styles from './HerbalGarden.module.css';

const gardenSlides = [
    {
        src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
        caption: 'Curated Botanical Pathways & Indigenous Medicinal Flora',
    },
    {
        src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80',
        caption: 'Rare Therapeutic Species & Aromatic Herb Cultivation Bays',
    },
    {
        src: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
        caption: 'Live Field Study Zone for Student Phytochemical Extraction',
    },
];

const features = [
    {
        icon: Sprout,
        title: '120+ Plant Species',
        desc: 'Rare therapeutic species used for pharmacognosy research[cite: 23].',
        theme: styles.themeEmerald,
    },
    {
        icon: Flower2,
        title: 'Live Study Zone',
        desc: 'Provides real specimens for student herbal formulations[cite: 23].',
        theme: styles.themeAmber,
    },
];

export default function HerbalGarden() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % gardenSlides.length);
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
                            {gardenSlides.map((slide, idx) => (
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
                                    <span>BOTANICAL - GREEN ZONE</span>
                                </span>
                                <span className={styles.specBadge}>120+ Medicinal Species</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {gardenSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {gardenSlides.map((_, dotIdx) => (
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
                            <span>Botanical Diversity[cite: 23]</span>
                        </div>
                        <h2 className={styles.title}>Herbal Garden</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Our landscaped botanical garden spans significant campus ground, cultivating over 120+ authentic
                            varieties of aromatic and therapeutic medicinal plants[cite: 23].
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