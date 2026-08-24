'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Layers,
    BookMarked,
    Globe2,
} from 'lucide-react';
import styles from './Library.module.css';

const librarySlides = [
    {
        src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Air-Conditioned Central Reading Hall & Reference Book Stacks',
    },
    {
        src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Digital E-Library Suite with DELNET & ScienceDirect Terminals',
    },
    {
        src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Official Pharmacopoeias (IP, BP, USP) & International Journals Section',
    },
];

const features = [
    {
        icon: BookMarked,
        title: '10,000+ Textbooks',
        desc: 'IP, BP, USP, and national & international print journals[cite: 21].',
        theme: styles.themeEmerald,
    },
    {
        icon: Globe2,
        title: 'Digital E-Library',
        desc: 'DELNET and ScienceDirect subscriptions for scholars[cite: 21].',
        theme: styles.themeAmber,
    },
];

export default function Library() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % librarySlides.length);
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
                            {librarySlides.map((slide, idx) => (
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
                                    <span>LIBRARY - BLOCK A</span>
                                </span>
                                <span className={styles.specBadge}>10K+ Volumes • Digital Repositories</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {librarySlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {librarySlides.map((_, dotIdx) => (
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
                            <span>Knowledge Resource Center[cite: 21]</span>
                        </div>
                        <h2 className={styles.title}>Library</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            A fully automated, air-conditioned learning repository housing thousands of pharmaceutical volumes,
                            pharmacopoeias, print journals, and e-learning terminals[cite: 21].
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