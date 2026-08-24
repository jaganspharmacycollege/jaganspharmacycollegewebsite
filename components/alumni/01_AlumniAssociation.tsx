'use client';

import React, { useState, useEffect } from 'react';
import { Playfair_Display, Merriweather } from 'next/font/google';
import {
    Sparkles,
    Layers,
    Globe2,
    Users2,
    Briefcase,
} from 'lucide-react';
import styles from './AlumniAssociation.module.css';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    weight: ['600', '700', '800'],
});

const merriweather = Merriweather({
    subsets: ['latin'],
    variable: '--font-merriweather',
    weight: ['300', '400'],
});

const associationSlides = [
    {
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        caption: 'Global Alumni Network & Academic Leadership Meets',
    },
    {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        caption: 'Annual Distinguished Alumni Conventions & Mentorship Roundtables',
    },
    {
        src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Connecting Graduates Across Top Global Pharmaceutical Enterprises',
    },
];

const features = [
    {
        icon: Globe2,
        title: 'Worldwide Chapters',
        desc: 'Connecting scholars across 30+ countries globally.',
        theme: styles.themeEmerald,
    },
    {
        icon: Users2,
        title: 'Lifelong Mentorship',
        desc: 'Guiding current students into clinical & industrial careers.',
        theme: styles.themeAmber,
    },
];

export default function AlumniAssociation() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % associationSlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={`${styles.section} ${playfair.variable} ${merriweather.variable}`}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    {/* Left Column: Information Content & Feature Cards */}
                    <div className={styles.infoContent}>
                        <div className={styles.eyebrowTag}>
                            <Sparkles size={14} className={styles.eyebrowIcon} />
                            <span>Global Network</span>
                        </div>
                        <h1 className={styles.title}>Alumni Association</h1>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            The Jagan&apos;s College of Pharmacy Alumni Association fosters lifelong bonds between the college
                            and its worldwide graduate network[cite: 16]. Our alumni community includes researchers, clinical
                            pharmacologists, industrial directors, regulatory executives, and healthcare entrepreneurs globally[cite: 16].
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
                            {associationSlides.map((slide, idx) => (
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
                                    <span>ALUMNI NETWORK</span>
                                </span>
                                <span className={styles.specBadge}>Global Relations • Lifelong Network</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {associationSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {associationSlides.map((_, dotIdx) => (
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