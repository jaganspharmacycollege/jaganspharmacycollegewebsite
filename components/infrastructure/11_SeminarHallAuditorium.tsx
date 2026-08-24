'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Layers,
    Users2,
    Projector,
} from 'lucide-react';
import styles from './SeminarHallAuditorium.module.css';

const auditoriumSlides = [
    {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        caption: 'Tiered 350+ Seat Acoustic Auditorium & Grand Stage Setup',
    },
    {
        src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-Fidelity Surround Sound, Line Arrays & Stage Lighting',
    },
    {
        src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
        caption: 'Motorized Dual HD Laser Projection & Hybrid Video Conferencing',
    },
];

const features = [
    {
        icon: Users2,
        title: '350+ Seating Capacity',
        desc: 'Plush acoustic theatre seating for conventions[cite: 22].',
        theme: styles.themeEmerald,
    },
    {
        icon: Projector,
        title: 'HD Projection',
        desc: 'Seamless hybrid video conferencing setup[cite: 22].',
        theme: styles.themeAmber,
    },
];

export default function SeminarHallAuditorium() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % auditoriumSlides.length);
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
                            <span>Events &amp; Conventions[cite: 22]</span>
                        </div>
                        <h2 className={styles.title}>Seminar Hall / Auditorium</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            An air-conditioned auditorium with 350+ theatrical seats, high-fidelity acoustics, motorized projection, and video conferencing capabilities for national conferences[cite: 22].
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
                            {auditoriumSlides.map((slide, idx) => (
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
                                    <span>AUDITORIUM - MAIN BLOCK</span>
                                </span>
                                <span className={styles.specBadge}>350+ Capacity • Surround Audio</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {auditoriumSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {auditoriumSlides.map((_, dotIdx) => (
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