'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Layers,
    Building2,
    UtensilsCrossed,
} from 'lucide-react';
import styles from './Hostel.module.css';

const hostelSlides = [
    {
        src: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
        caption: 'Modern Furnished Student Rooms with Study Desks & Power Backup',
    },
    {
        src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
        caption: 'Secure Residential Blocks with Wi-Fi & Solar Hot Water Systems',
    },
    {
        src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1200&q=80',
        caption: 'Hygienic Dining Mess Serving Balanced Vegetarian & Non-Veg Meals',
    },
];

const features = [
    {
        icon: Building2,
        title: 'Separate Buildings',
        desc: 'Individual secure hostels for male and female scholars[cite: 24].',
        theme: styles.themeEmerald,
    },
    {
        icon: UtensilsCrossed,
        title: 'Hygienic Dining',
        desc: 'Nutritious vegetarian and non-vegetarian daily meals[cite: 24].',
        theme: styles.themeAmber,
    },
];

export default function Hostel() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % hostelSlides.length);
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
                            <span>Student Living[cite: 24]</span>
                        </div>
                        <h2 className={styles.title}>Hostel</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Secure residential hostel buildings for boys and girls offering well-furnished rooms, 24/7 power
                            backup, purified RO water, hygienic dining, and round-the-clock security surveillance[cite: 24].
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
                            {hostelSlides.map((slide, idx) => (
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
                                    <span>HOSTEL - BLOCKS A &amp; B</span>
                                </span>
                                <span className={styles.specBadge}>24/7 Power • RO Water • High Security</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {hostelSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {hostelSlides.map((_, dotIdx) => (
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