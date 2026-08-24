'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Layers,
    Trophy,
    Dumbbell,
} from 'lucide-react';
import styles from './SportsFacility.module.css';

const sportsSlides = [
    {
        src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
        caption: 'Full-Size Athletic Grounds, Cricket Turf & Running Tracks',
    },
    {
        src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
        caption: 'Floodlit Outdoor Volleyball, Basketball & Tennis Courts',
    },
    {
        src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
        caption: 'Modern Equipped Gymnasium, Badminton Courts & Indoor Table Tennis Hub',
    },
];

const features = [
    {
        icon: Trophy,
        title: 'Outdoor Grounds',
        desc: 'Full-size cricket turf, volleyball, and basketball courts[cite: 25].',
        theme: styles.themeEmerald,
    },
    {
        icon: Dumbbell,
        title: 'Indoor Sports Hub',
        desc: 'Equipped gym, badminton courts, chess, and table tennis[cite: 25].',
        theme: styles.themeAmber,
    },
];

export default function SportsFacility() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % sportsSlides.length);
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
                            {sportsSlides.map((slide, idx) => (
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
                                    <span>SPORTS - COMPLEX</span>
                                </span>
                                <span className={styles.specBadge}>Cricket Turf • Fitness Gym</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {sportsSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {sportsSlides.map((_, dotIdx) => (
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
                            <span>Recreation &amp; Wellness[cite: 25]</span>
                        </div>
                        <h2 className={styles.title}>Sports Facility[cite: 25]</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Comprehensive indoor and outdoor athletic grounds including dedicated courts for Volleyball,
                            Basketball, Badminton, Cricket turf, Table Tennis, Chess, and an equipped gymnasium[cite: 25].
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