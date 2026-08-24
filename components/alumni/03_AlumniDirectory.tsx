'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Quote,
    Layers,
} from 'lucide-react';
import styles from './AlumniDirectory.module.css';

const directorySlides = [
    {
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Global Placement Network & Corporate Industry Tie-ups',
    },
    {
        src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
        caption: 'Clinical Leaders & Hospital Pharmacy Directors Worldwide',
    },
    {
        src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
        caption: 'Alumni Mentorship Roundtables & Research Advisory Councils',
    },
];

const directory = [
    {
        name: 'Anusha R.',
        batch: 'B. PHARMACY III YEAR',
        quote:
            'The campus environment is amazing! We get great support from faculty and plenty of opportunities to grow.',
        avatar:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        theme: styles.themeEmerald,
        avatarBorder: styles.avatarBorderEmerald,
    },
    {
        name: 'Karthik M.',
        batch: 'PHARM.D II YEAR',
        quote:
            "Jagan's College of Pharmacy feels like a second home. The facilities and exposure here are excellent.",
        avatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        theme: styles.themeAmber,
        avatarBorder: styles.avatarBorderAmber,
    },
    {
        name: 'Sreeja P.',
        batch: 'M. PHARMACY I YEAR',
        quote:
            "I've learned so much beyond academics through events, clubs and interactions. Truly a holistic experience!",
        avatar:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
        theme: styles.themePurple,
        avatarBorder: styles.avatarBorderPurple,
    },
];

export default function AlumniDirectory() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % directorySlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.section}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Header Block */}
                <div className={styles.headerBlock}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Member Profiles</span>
                    </div>
                    <h2 className={styles.title}>Alumni Directory</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Explore our alumni network representing leading pharmaceutical corporations, research centers, and tertiary hospitals worldwide[cite: 18].
                    </p>
                </div>

                {/* Auto-sliding Banner Showcase */}
                <div className={styles.carouselContainer}>
                    <div className={styles.imageFrame}>
                        {directorySlides.map((slide, idx) => (
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
                                <span>GLOBAL CHAPTER DIRECTORY</span>
                            </span>
                            <span className={styles.specBadge}>3,500+ Verified Profiles</span>
                        </div>

                        {/* Bottom Caption & Sync Dots */}
                        <div className={styles.captionOverlay}>
                            <h4 className={styles.captionText}>
                                {directorySlides[currentImgIdx].caption}
                            </h4>

                            <div className={styles.dotsWrapper}>
                                {directorySlides.map((_, dotIdx) => (
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

                {/* 3 Quote & Squircle Avatar Cards */}
                <div className={styles.grid}>
                    {directory.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={`${styles.quoteSquircle} ${item.theme}`}>
                                    <Quote size={18} strokeWidth={2.4} />
                                </div>
                                <div className={`${styles.avatarSquircle} ${item.avatarBorder}`}>
                                    <img src={item.avatar} alt={item.name} className={styles.avatarImg} />
                                </div>
                            </div>

                            <div className={styles.cardBody}>
                                <p className={styles.quoteText}>&ldquo;{item.quote}&rdquo;</p>
                                <div className={styles.cardDivider} />
                                <h3 className={styles.cardTitle}>{item.name}</h3>
                                <p className={styles.cardBatch}>{item.batch}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}