'use client';

import React, { useState, useEffect } from 'react';
import {
    FlaskConical,
    Microscope,
    BookOpen,
    HeartHandshake,
    Trophy,
    Music,
    Sparkles,
} from 'lucide-react';
import styles from './StudentClubs.module.css';

const clubSlides = [
    {
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        caption: 'Student Council & Leadership Meets',
    },
    {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        caption: 'Annual Cultural & Fine Arts Club Fests',
    },
    {
        src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Pharma & Research Club Seminars',
    },
    {
        src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
        caption: 'Inter-College Sports Club Championships',
    },
];

const clubs = [
    { name: 'Pharma Club', icon: FlaskConical, theme: styles.themeEmerald },
    { name: 'Research Club', icon: Microscope, theme: styles.themeAmber },
    { name: 'Literary Club', icon: BookOpen, theme: styles.themePurple },
    { name: 'NSS', icon: HeartHandshake, theme: styles.themeTeal },
    { name: 'Sports Club', icon: Trophy, theme: styles.themeBlue },
    { name: 'Cultural Club', icon: Music, theme: styles.themePeach },
];

export default function StudentClubs() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % clubSlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.section}>
            {/* Ambient Parallax Depth Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div className={styles.card}>
                    {/* Left Section: Header & 6 Clubs Grid */}
                    <div className={styles.leftSection}>
                        <div className={styles.header}>
                            <div className={styles.eyebrowTag}>
                                <Sparkles size={14} className={styles.eyebrowIcon} />
                                <span>Student Engagement</span>
                            </div>
                            <h2 className={styles.title}>Student Activities &amp; Clubs</h2>
                            <div className={styles.accentLine} />
                            <p className={styles.subText}>
                                Join student-led clubs, explore your passions, build collaborative leadership skills, and create unforgettable campus memories.
                            </p>
                        </div>

                        {/* 6 Clubs Row */}
                        <div className={styles.clubsGrid}>
                            {clubs.map((club, idx) => {
                                const Icon = club.icon;
                                return (
                                    <div key={idx} className={styles.clubWrapper}>
                                        <div className={styles.clubItem}>
                                            <div className={`${styles.iconSquircle} ${club.theme}`}>
                                                <Icon size={24} strokeWidth={2} />
                                            </div>
                                            <h3 className={styles.clubName}>{club.name}</h3>
                                        </div>
                                        {idx !== clubs.length - 1 && (
                                            <div className={styles.verticalDivider} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Section: Auto-sliding Image Carousel Frame */}
                    <div className={styles.rightImageWrapper}>
                        {clubSlides.map((slide, idx) => (
                            <img
                                key={idx}
                                src={slide.src}
                                alt={slide.caption}
                                className={`${styles.rightImg} ${idx === currentImgIdx ? styles.activeImg : styles.inactiveImg
                                    }`}
                            />
                        ))}
                        <div className={styles.imageOverlay} />

                        {/* Dynamic Active Caption Badge */}
                        <div className={styles.imageBadge}>
                            <span>{clubSlides[currentImgIdx].caption}</span>
                        </div>

                        {/* Carousel Dot Indicators */}
                        <div className={styles.dotsWrapper}>
                            {clubSlides.map((_, dotIdx) => (
                                <button
                                    key={dotIdx}
                                    onClick={() => setCurrentImgIdx(dotIdx)}
                                    className={`${styles.dot} ${dotIdx === currentImgIdx ? styles.activeDot : ''
                                        }`}
                                    aria-label={`Show slide ${dotIdx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}