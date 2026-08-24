'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Music,
    PartyPopper,
    Palette,
} from 'lucide-react';
import styles from './CulturalEventsPage.module.css';

const culturalSlides = [
    {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        caption: 'TARANG Annual Cultural Mega Fest & Live Stage Performances',
    },
    {
        src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
        caption: 'Talent Hunt & Freshers Welcome Celebrations',
    },
    {
        src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
        caption: 'Traditional Ethnic Day & Regional Heritage Celebrations',
    },
];

const events = [
    {
        title: 'Annual Cultural Fest TARANG',
        desc: 'Three days of vibrant music, drama, traditional and modern dance, and fine arts competitions on our open-air auditorium.',
        icon: Music,
        tag: 'Flagship Fest',
        theme: styles.themeEmerald,
    },
    {
        title: 'Talent Hunt & Freshers Night',
        desc: 'Welcoming first-year students to showcase their talents in performing arts, music, dance, and creative expression.',
        icon: PartyPopper,
        tag: 'Freshers Showcase',
        theme: styles.themePurple,
    },
    {
        title: 'Traditional Attire & Ethnic Day',
        desc: 'Celebrating regional traditions, festive traditional cuisines, authentic handlooms, and cultural diversity across our student body.',
        icon: Palette,
        tag: 'Heritage & Diversity',
        theme: styles.themeAmber,
    },
];

export default function CulturalEventsPage() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % culturalSlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.pageWrapper}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Arts &amp; Expression</span>
                    </div>
                    <h1 className={styles.title}>Cultural Events</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Vibrant celebrations of creativity, Indian heritage, musical rhythms, and stage performances on our open-air auditorium[cite: 22].
                    </p>
                </div>

                {/* Auto-sliding Image Showcase Banner */}
                <div className={styles.showcaseBanner}>
                    <div className={styles.carouselFrame}>
                        {culturalSlides.map((slide, idx) => (
                            <img
                                key={idx}
                                src={slide.src}
                                alt={slide.caption}
                                className={`${styles.carouselImg} ${idx === currentImgIdx ? styles.activeImg : styles.inactiveImg
                                    }`}
                            />
                        ))}
                        <div className={styles.imageOverlay} />

                        {/* Active Caption Pill */}
                        <div className={styles.imageBadge}>
                            <span>{culturalSlides[currentImgIdx].caption}</span>
                        </div>

                        {/* Slider Dots */}
                        <div className={styles.dotsWrapper}>
                            {culturalSlides.map((_, dotIdx) => (
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

                {/* 3 Event Cards Responsive Grid */}
                <div className={styles.grid}>
                    {events.map((e, i) => {
                        const Icon = e.icon;
                        return (
                            <div key={i} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${e.theme}`}>
                                        <Icon size={24} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.cardTag}>{e.tag}</span>
                                </div>

                                <h3 className={styles.cardTitle}>{e.title}</h3>
                                <p className={styles.cardDesc}>{e.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}