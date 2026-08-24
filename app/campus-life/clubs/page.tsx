'use client';

import React, { useState, useEffect } from 'react';
import {
    FlaskConical,
    BookOpen,
    Leaf,
    Sparkles,
} from 'lucide-react';
import styles from './ClubsPage.module.css';

const clubSlides = [
    {
        src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Drug Formulation Ideation & Research Workshops',
    },
    {
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        caption: 'Debating Competitions & Scientific Presentations',
    },
    {
        src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Herbal Botanical Garden & Sustainability Initiatives',
    },
];

const clubs = [
    {
        title: 'Pharma Innovators Club',
        desc: 'Focused on drug formulation discussions, patent analysis, and novel pharmaceutical techniques.',
        icon: FlaskConical,
        tag: 'Research & Innovation',
        theme: styles.themeEmerald,
    },
    {
        title: 'Literary & Debating Society',
        desc: 'Cultivates public speaking, presentation clarity, and medical writing abilities.',
        icon: BookOpen,
        tag: 'Communication & Arts',
        theme: styles.themeAmber,
    },
    {
        title: 'Nature & Green Campus Club',
        desc: 'Drives herbal garden plantation projects and campus sustainability initiatives.',
        icon: Leaf,
        tag: 'Eco & Herbal Botany',
        theme: styles.themeTeal,
    },
];

export default function ClubsPage() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % clubSlides.length);
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
                        <span>Student Societies</span>
                    </div>
                    <h1 className={styles.title}>Clubs &amp; Societies</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Student-run societies providing opportunities to pursue diverse passions beyond the academic syllabus[cite: 21].
                    </p>
                </div>

                {/* Auto-sliding Image Showcase Banner */}
                <div className={styles.showcaseBanner}>
                    <div className={styles.carouselFrame}>
                        {clubSlides.map((slide, idx) => (
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
                            <span>{clubSlides[currentImgIdx].caption}</span>
                        </div>

                        {/* Slider Dots */}
                        <div className={styles.dotsWrapper}>
                            {clubSlides.map((_, dotIdx) => (
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

                {/* 3 Clubs Responsive Grid */}
                <div className={styles.grid}>
                    {clubs.map((c, i) => {
                        const Icon = c.icon;
                        return (
                            <div key={i} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${c.theme}`}>
                                        <Icon size={24} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.cardTag}>{c.tag}</span>
                                </div>

                                <h3 className={styles.cardTitle}>{c.title}</h3>
                                <p className={styles.cardDesc}>{c.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}