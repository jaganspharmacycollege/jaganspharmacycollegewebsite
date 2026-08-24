'use client';

import React, { useState, useEffect } from 'react';
import {
    Award,
    FileCheck2,
    GraduationCap,
    Sparkles,
    Layers,
} from 'lucide-react';
import styles from './StudentAchievementsPage.module.css';

const achievementsList = [
    {
        category: 'ACADEMIC EXCELLENCE',
        title: 'JNTUA University Rank Holders',
        codeTag: 'RANK - GOLD MEDALS',
        specTag: 'State Rank 1 • University Honors',
        caption: 'Consistently Securing Top Honors in University Board Exams',
        desc: 'Consistently securing top ranks, state gold medals, and merit certificates across all academic years in annual board examinations conducted by JNTUA[cite: 15].',
        images: [
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Gold Medals',
                desc: 'Institutional and university-level academic excellence honors.',
            },
            {
                title: 'Merit Scholarships',
                desc: 'Fee waivers and cash awards presented to semester toppers.',
            },
        ],
    },
    {
        category: 'SCIENTIFIC RESEARCH',
        title: 'National Level Paper Presentations',
        codeTag: 'RESEARCH - IPC PRIZES',
        specTag: 'First Place • Poster & Oral Presentations',
        caption: 'Scholars Winning Prestigious Awards at National Conferences',
        desc: 'First prizes and cash awards won by our student scholars at the Indian Pharmaceutical Congress (IPC) and international healthcare conferences for innovative drug delivery research[cite: 15].',
        images: [
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'IPC First Prizes',
                desc: 'Accolades for novel drug synthesis and clinical evaluations.',
            },
            {
                title: 'Journal Publications',
                desc: 'Undergraduate and postgraduate co-authored indexed papers.',
            },
        ],
    },
    {
        category: 'COMPETITIVE BENCHMARKS',
        title: 'GPAT & NIPER Qualifiers',
        codeTag: 'NATIONAL - FELLOWSHIPS',
        specTag: '99+ Percentile • AICTE Stipends',
        caption: 'High Percentage of Final Year Students Securing All-India Ranks',
        desc: 'High percentage of final year B. Pharm students securing top percentiles in national entrance exams with full AICTE fellowship stipends for postgraduate programs[cite: 15].',
        images: [
            'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'NIPER Admissions',
                desc: 'Premier premier institute placements for advanced M.Pharm degrees.',
            },
            {
                title: 'GPAT Stipends',
                desc: 'Direct qualification for national monthly research stipends.',
            },
        ],
    },
];

export default function StudentAchievementsPage() {
    const [slideIndices, setSlideIndices] = useState<number[]>(
        achievementsList.map(() => 0)
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndices((prev) =>
                prev.map((idx, aIdx) => (idx + 1) % achievementsList[aIdx].images.length)
            );
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const handleManualDotClick = (achievementIdx: number, targetSlideIdx: number) => {
        setSlideIndices((prev) => {
            const updated = [...prev];
            updated[achievementIdx] = targetSlideIdx;
            return updated;
        });
    };

    return (
        <div className={styles.pageWrapper}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.pageHeader}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Pride of Jagan&apos;s</span>
                    </div>
                    <h1 className={styles.title}>Student Achievements</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Celebrating outstanding milestones, university awards, research recognitions, and national competitive breakthroughs attained by our students[cite: 15].
                    </p>
                </div>

                {/* Alternating Zigzag Achievements Stack */}
                <div className={styles.facilitiesList}>
                    {achievementsList.map((item, aIdx) => {
                        const currentImgIdx = slideIndices[aIdx];
                        const isReversed = aIdx % 2 !== 0; // Alternates layout on desktop (Image on Right on odd indices)

                        return (
                            <div
                                key={aIdx}
                                className={`${styles.facilitySectionCard} ${isReversed ? styles.rowReversed : ''
                                    }`}
                            >
                                {/* 1. Carousel Box */}
                                <div className={styles.carouselContainer}>
                                    <div className={styles.carouselFrame}>
                                        {item.images.map((imgSrc, imgIdx) => (
                                            <img
                                                key={imgIdx}
                                                src={imgSrc}
                                                alt={`${item.title} Image ${imgIdx + 1}`}
                                                className={`${styles.carouselImg} ${imgIdx === currentImgIdx
                                                        ? styles.activeImg
                                                        : styles.inactiveImg
                                                    }`}
                                            />
                                        ))}
                                        <div className={styles.imageOverlay} />

                                        {/* Top-Left Amber Badges */}
                                        <div className={styles.badgesHeader}>
                                            <span className={styles.codeBadge}>
                                                <Layers size={13} className={styles.codeIcon} />
                                                <span>{item.codeTag}</span>
                                            </span>
                                            <span className={styles.specBadge}>
                                                {item.specTag}
                                            </span>
                                        </div>

                                        {/* Bottom Caption & Synchronized Dots */}
                                        <div className={styles.captionOverlay}>
                                            <h4 className={styles.captionText}>{item.caption}</h4>

                                            <div className={styles.dotsWrapper}>
                                                {item.images.map((_, dotIdx) => (
                                                    <button
                                                        key={dotIdx}
                                                        onClick={() => handleManualDotClick(aIdx, dotIdx)}
                                                        className={`${styles.dot} ${dotIdx === currentImgIdx ? styles.activeDot : ''
                                                            }`}
                                                        aria-label={`Show image ${dotIdx + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Content & Spec Sub-Cards */}
                                <div className={styles.infoContent}>
                                    <span className={styles.facilityCategory}>
                                        {item.category}
                                    </span>
                                    <h2 className={styles.facilityTitle}>{item.title}</h2>
                                    <div className={styles.subAccentLine} />

                                    <p className={styles.facilityDesc}>{item.desc}</p>

                                    {/* 2 Feature Sub-Cards */}
                                    <div className={styles.subCardsGrid}>
                                        {item.features.map((feat, featIdx) => (
                                            <div key={featIdx} className={styles.subCard}>
                                                <h3 className={styles.subCardTitle}>{feat.title}</h3>
                                                <p className={styles.subCardDesc}>{feat.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}