'use client';

import React, { useState, useEffect } from 'react';
import {
    HeartHandshake,
    BrainCircuit,
    Megaphone,
    Sparkles,
} from 'lucide-react';
import styles from './StudentActivitiesPage.module.css';

const activitySlides = [
    {
        src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
        caption: 'Free Rural Health Diagnostics & Medication Counseling',
    },
    {
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        caption: 'Inter-College Pharma Quizzes & Case Presentations',
    },
    {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        caption: 'Public Health Awareness Rallies & Student Drives',
    },
];

const activities = [
    {
        title: 'Community Health Camps',
        desc: 'Students actively participate in free medical diagnostic and medication counseling drives across rural Nellore.',
        icon: HeartHandshake,
        tag: 'Civic Outreach',
        theme: styles.themeEmerald,
    },
    {
        title: 'Pharma Quizzes & Debates',
        desc: 'Regular inter-departmental intellectual competitions focusing on clinical pharmacy, drug discoveries, and global pharmacovigilance.',
        icon: BrainCircuit,
        tag: 'Academic Competitions',
        theme: styles.themeAmber,
    },
    {
        title: 'Drug Awareness Rallies',
        desc: 'Public health awareness campaigns on rational antibiotic use, immunization schedules, and chronic disease prevention.',
        icon: Megaphone,
        tag: 'Public Healthcare',
        theme: styles.themePurple,
    },
];

export default function StudentActivitiesPage() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % activitySlides.length);
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
                        <span>Campus Engagement</span>
                    </div>
                    <h1 className={styles.title}>Student Activities</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our campus offers vibrant student activities that develop leadership, civic awareness, teamwork,
                        and clinical communication skills.
                    </p>
                </div>

                {/* Auto-sliding Image Showcase Banner */}
                <div className={styles.showcaseBanner}>
                    <div className={styles.carouselFrame}>
                        {activitySlides.map((slide, idx) => (
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
                            <span>{activitySlides[currentImgIdx].caption}</span>
                        </div>

                        {/* Slider Dots */}
                        <div className={styles.dotsWrapper}>
                            {activitySlides.map((_, dotIdx) => (
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

                {/* 3 Activity Cards Grid */}
                <div className={styles.grid}>
                    {activities.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${item.theme}`}>
                                        <Icon size={24} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.cardTag}>{item.tag}</span>
                                </div>

                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}