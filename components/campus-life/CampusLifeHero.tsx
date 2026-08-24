'use client';

import React, { useState, useEffect } from 'react';
import { Users, Trophy, HeartHandshake, Globe, Sparkles } from 'lucide-react';
import styles from './CampusLifeHero.module.css';

const campusLifeSlides = [
    {
        title: 'Vibrant Campus Grounds',
        image:
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80',
    },
    {
        title: 'Annual Sports Tournaments & Athletics',
        image:
            'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1920&q=80',
    },
    {
        title: 'Cultural Fests & Student Celebrations',
        image:
            'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80',
    },
    {
        title: 'Collaborative Learning & Student Clubs',
        image:
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
    },
];

export default function CampusLifeHero() {
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % campusLifeSlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.section}>
            {/* Background Auto-Cycling Image Slider */}
            <div className={styles.bgSlider}>
                {campusLifeSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`${styles.bgSlide} ${idx === currentIdx ? styles.activeSlide : styles.inactiveSlide
                            }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
            </div>

            {/* Clear Contrast Overlay */}
            <div className={styles.overlay} />

            {/* Main Hero Content */}
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <span className={styles.eyebrow}>CAMPUS LIFE</span>
                    <h1 className={styles.title}>
                        Learn. Grow.<br />Thrive Together.
                    </h1>
                    <div className={styles.accentLine} />

                    <p className={styles.description}>
                        At Jagan&apos;s College of Pharmacy, life goes beyond classrooms. Discover a vibrant campus
                        where learning, leadership, athletic pursuits, and lifelong friendships flourish.
                    </p>

                    {/* Active Highlight Banner */}
                    <div className={styles.activeSlideBadge}>
                        <Sparkles size={15} className={styles.badgeSparkle} />
                        <span className={styles.badgeText}>{campusLifeSlides[currentIdx].title}</span>
                    </div>

                    {/* 4 Separate Pillar Cards Grid */}
                    <div className={styles.badgesRow}>
                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeEmerald}`}>
                                <Users size={18} strokeWidth={2.2} />
                            </div>
                            <h4 className={styles.badgeTitle}>
                                Vibrant <br /> Community
                            </h4>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themePurple}`}>
                                <Trophy size={18} strokeWidth={2.2} />
                            </div>
                            <h4 className={styles.badgeTitle}>
                                Holistic <br /> Development
                            </h4>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeAmber}`}>
                                <HeartHandshake size={18} strokeWidth={2.2} />
                            </div>
                            <h4 className={styles.badgeTitle}>
                                Health &amp; <br /> Wellness
                            </h4>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeBlue}`}>
                                <Globe size={18} strokeWidth={2.2} />
                            </div>
                            <h4 className={styles.badgeTitle}>
                                Lasting <br /> Connections
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Carousel Dots */}
                <div className={styles.dotsWrapper}>
                    {campusLifeSlides.map((_, dotIdx) => (
                        <button
                            key={dotIdx}
                            onClick={() => setCurrentIdx(dotIdx)}
                            className={`${styles.dot} ${dotIdx === currentIdx ? styles.activeDot : ''}`}
                            aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}