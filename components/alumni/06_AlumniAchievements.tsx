'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Trophy,
    Award,
    FlaskConical,
    Building2,
    Layers,
    ArrowUpRight,
} from 'lucide-react';
import styles from './AlumniAchievements.module.css';

const achievementSlides = [
    {
        src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
        caption: 'Global Research Citations, Drug Patents & International Awards',
    },
    {
        src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
        caption: 'Executive Leadership Across Global Regulatory & Healthcare Bodies',
    },
    {
        src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
        caption: 'Breakthrough Formulations & Clinical Pharmacotherapy Excellence',
    },
];

const achievements = [
    {
        icon: FlaskConical,
        metric: '40+ Patents & Papers',
        title: 'Research Innovations',
        desc: 'Alumni authored high-impact publications in Nature Pharma, Elsevier, and secured multiple drug formulation patents.',
        theme: styles.themeEmerald,
    },
    {
        icon: Building2,
        metric: '120+ Corporate Leaders',
        title: 'Industry Leadership',
        desc: 'Graduates currently heading R&D, QA, Regulatory Affairs, and Clinical Ops at Fortune 500 pharmaceutical firms.',
        theme: styles.themeAmber,
    },
    {
        icon: Trophy,
        metric: '15+ National Awards',
        title: 'Excellence Recognitions',
        desc: 'Conferred prestigious IPA Best Pharmacist and Young Pharmaceutical Scientist honours globally.',
        theme: styles.themePurple,
    },
];

export default function AlumniAchievements() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % achievementSlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.sectionAlt}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Header Block */}
                <div className={styles.headerBlock}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Excellence &amp; Honors</span>
                    </div>
                    <h2 className={styles.title}>Alumni Achievements</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Recognizing the remarkable global contributions, scientific discoveries, and executive milestones accomplished by our distinguished alumni.
                    </p>
                </div>

                {/* Auto-sliding Banner Showcase */}
                <div className={styles.carouselContainer}>
                    <div className={styles.imageFrame}>
                        {achievementSlides.map((slide, idx) => (
                            <img
                                key={idx}
                                src={slide.src}
                                alt={slide.caption}
                                className={`${styles.carouselImg} ${idx === currentImgIdx ? styles.activeImg : styles.inactiveImg
                                    }`}
                            />
                        ))}
                        <div className={styles.imageOverlay} />

                        {/* Top Amber Badges */}
                        <div className={styles.badgesHeader}>
                            <span className={styles.codeBadge}>
                                <Layers size={13} className={styles.codeIcon} />
                                <span>GLOBAL RECOGNITION</span>
                            </span>
                            <span className={styles.specBadge}>Research • Patents • Leadership</span>
                        </div>

                        {/* Bottom Caption & Sync Dots */}
                        <div className={styles.captionOverlay}>
                            <h4 className={styles.captionText}>
                                {achievementSlides[currentImgIdx].caption}
                            </h4>

                            <div className={styles.dotsWrapper}>
                                {achievementSlides.map((_, dotIdx) => (
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

                {/* 3 Milestone Achievement Cards Grid */}
                <div className={styles.grid}>
                    {achievements.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${item.theme}`}>
                                        <Icon size={20} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.metricBadge}>{item.metric}</span>
                                </div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}