'use client';

import React, { useState, useEffect } from 'react';
import { Building2, UserCheck, Briefcase, ShieldCheck, Sparkles } from 'lucide-react';
import styles from './LifeAtJagans.module.css';

const campusSlides = [
    {
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        caption: 'Modern Digital Library & Collaborative Study Hub',
    },
    {
        src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-Tech Formulation & Research Laboratories',
    },
    {
        src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Spacious Green Campus Grounds & Infrastructure',
    },
    {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        caption: 'Student Cultural Fests & Annual Celebrations',
    },
];

const pillars = [
    {
        title: 'Modern Infrastructure',
        desc: 'State-of-the-art classrooms, smart labs and advanced research facilities.',
        icon: Building2,
        theme: styles.themeEmerald,
    },
    {
        title: 'Experienced Faculty',
        desc: 'Learn from dedicated educators and seasoned industry professionals.',
        icon: UserCheck,
        theme: styles.themeAmber,
    },
    {
        title: 'Industry Exposure',
        desc: 'Workshops, seminars and industrial visits to keep you ahead.',
        icon: Briefcase,
        theme: styles.themePurple,
    },
    {
        title: 'Safe & Secure Campus',
        desc: '24/7 security and a safe, supportive environment for all students.',
        icon: ShieldCheck,
        theme: styles.themeTeal,
    },
];

export default function LifeAtJagans() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % campusSlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.section}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Campus Experience</span>
                    </div>
                    <h2 className={styles.title}>Life at Jagan&apos;s</h2>
                    <div className={styles.accentLine} />
                </div>

                {/* Main Grid Layout */}
                <div className={styles.mainGrid}>
                    {/* Left Column: Subtitle + Auto-sliding Carousel Image Frame */}
                    <div className={styles.leftCol}>
                        <p className={styles.subText}>
                            Our campus is designed to inspire, engage and empower students to become confident professionals
                            and responsible global healthcare citizens.
                        </p>

                        <div className={styles.imageFrame}>
                            {campusSlides.map((slide, idx) => (
                                <img
                                    key={idx}
                                    src={slide.src}
                                    alt={slide.caption}
                                    className={`${styles.campusImg} ${idx === currentImgIdx ? styles.activeImg : styles.inactiveImg
                                        }`}
                                />
                            ))}
                            <div className={styles.imageOverlay} />

                            {/* Dynamic Active Caption Badge */}
                            <div className={styles.imageBadge}>
                                <span>{campusSlides[currentImgIdx].caption}</span>
                            </div>

                            {/* Slider Sync Dots */}
                            <div className={styles.dotsWrapper}>
                                {campusSlides.map((_, dotIdx) => (
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

                    {/* Right Column: 4 Pillar Cards Grid */}
                    <div className={styles.rightCol}>
                        <div className={styles.rightGrid}>
                            {pillars.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className={styles.pillarCard}>
                                        <div className={`${styles.iconSquircle} ${item.theme}`}>
                                            <Icon size={24} strokeWidth={2.2} />
                                        </div>
                                        <div className={styles.cardHeader}>
                                            <h3 className={styles.pillarTitle}>{item.title}</h3>
                                            <div className={styles.goldDash} />
                                        </div>
                                        <p className={styles.pillarDesc}>{item.desc}</p>
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