'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Layers,
} from 'lucide-react';
import styles from './FestivalsCelebrationsPage.module.css';

const celebrationsList = [
    {
        category: 'PROFESSIONAL MILESTONES',
        title: 'World Pharmacists Day (Sept 25)',
        codeTag: 'GLOBAL - HEALTHCARE',
        specTag: 'Pharmacist Oath • Public Screening',
        caption: 'Annual Pharmacist Oath Ceremony & Public Awareness Rallies',
        desc: 'Campus rallies, scientific poster presentations, formal pharmacist oath ceremonies, and free diagnostic health screening camps conducted in honor of global healthcare service[cite: 18].',
        images: [
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Pharmacist Oath',
                desc: 'Formal code of ethics pledge administered to graduating pharmacy batches.',
            },
            {
                title: 'Health Drives',
                desc: 'Community medical screening, BMI checks, and free medication counseling.',
            },
        ],
    },
    {
        category: 'NATIONAL ADVOCACY',
        title: 'National Pharmacy Week',
        codeTag: 'NPW - CELEBRATION',
        specTag: 'Week-Long • Scientific Symposia',
        caption: 'Advancing Public Awareness on Safe & Rational Medicine Use',
        desc: 'Week-long celebrations dedicated to advancing public awareness about the pharmacy profession, safe drug administration, and innovations in modern therapeutic systems[cite: 18].',
        images: [
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Public Symposia',
                desc: 'Interactive lectures addressing patient safety and antibiotic stewardship.',
            },
            {
                title: 'Student Rallies',
                desc: 'Civic marches promoting rational medicine use and wellness awareness.',
            },
        ],
    },
    {
        category: 'CULTURAL UNITY',
        title: 'Traditional Festive Celebrations',
        codeTag: 'HERITAGE - HARMONY',
        specTag: 'Sankranti • Diwali • Eid • Christmas',
        caption: 'Vibrant Traditional Fests & Festive Regional Harmony',
        desc: 'Grand campus celebrations for Sankranti, Diwali, Dussehra, Eid, and Christmas fostering cultural unity, community harmony, and regional heritage across our student body[cite: 18].',
        images: [
            'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Ethnic Celebrations',
                desc: 'Traditional attire days, rangoli art, and authentic seasonal cuisines.',
            },
            {
                title: 'Cultural Harmony',
                desc: 'Multi-faith celebrations uniting students and faculty throughout the year[cite: 18].',
            },
        ],
    },
];

export default function FestivalsCelebrationsPage() {
    const [slideIndices, setSlideIndices] = useState<number[]>(
        celebrationsList.map(() => 0)
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndices((prev) =>
                prev.map((idx, cIdx) => (idx + 1) % celebrationsList[cIdx].images.length)
            );
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const handleManualDotClick = (celebrationIdx: number, targetSlideIdx: number) => {
        setSlideIndices((prev) => {
            const updated = [...prev];
            updated[celebrationIdx] = targetSlideIdx;
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
                        <span>Festive Spirit</span>
                    </div>
                    <h1 className={styles.title}>Festivals &amp; Celebrations</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Celebrating professional healthcare milestones, national festivals, and cultural harmony throughout the year[cite: 18].
                    </p>
                </div>

                {/* Alternating Zigzag Celebrations Stack */}
                <div className={styles.facilitiesList}>
                    {celebrationsList.map((item, cIdx) => {
                        const currentImgIdx = slideIndices[cIdx];
                        const isReversed = cIdx % 2 !== 0; // Alternates layout on desktop (Image on Right on odd indices)

                        return (
                            <div
                                key={cIdx}
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

                                        {/* Top-Left Badges */}
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
                                                        onClick={() => handleManualDotClick(cIdx, dotIdx)}
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