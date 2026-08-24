'use client';

import React, { useState, useEffect } from 'react';
import {
    Trophy,
    Dumbbell,
    Medal,
    Sparkles,
    Layers,
} from 'lucide-react';
import styles from './SportsPage.module.css';

const sportsFacilities = [
    {
        category: 'ATHLETICS & FITNESS',
        title: 'Outdoor Sports Arena',
        codeTag: 'ARENA - FIELD A',
        specTag: 'Standard Turf • Floodlight System',
        caption: 'Inter-College Track & Field Athletic Championships',
        desc: 'Our expansive outdoor sports arena features standard multi-sport turf grounds and courts for Cricket, Volleyball, Basketball, Football, and Track & Field athletics with dedicated coaching facilities.',
        images: [
            'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Multi-Sport Turf',
                desc: 'Cricket pitch, football turf, and basketball courts.',
            },
            {
                title: 'Athletic Track',
                desc: 'Dedicated synthetic running tracks for field events.',
            },
        ],
    },
    {
        category: 'INDOOR GAMES & GYM',
        title: 'Indoor Sports Complex',
        codeTag: 'COMPLEX - BLK C',
        specTag: 'Wooden Courts • Fitness Gym',
        caption: 'Indoor Badminton, Table Tennis & Gymnasium Complex',
        desc: 'Dedicated indoor arena equipped with tournament-grade synthetic badminton courts, international table tennis setups, chess rooms, and a modern cardiovascular fitness gym.',
        images: [
            'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Badminton Courts',
                desc: 'High-grade non-slip wooden and synthetic indoor courts.',
            },
            {
                title: 'Fitness Suite',
                desc: 'Strength equipment and trainer-supervised workout areas.',
            },
        ],
    },
    {
        category: 'CHAMPIONSHIPS & MEETS',
        title: 'Annual Sports Meet',
        codeTag: 'TOURNAMENT - 2026',
        specTag: 'Inter-House • University Trophies',
        caption: 'Inter-College & House Championship Tournaments',
        desc: 'The flagship annual sporting meet featuring competitive inter-house leagues and inter-collegiate pharmacy championships promoting teamwork, grit, and athletic excellence.',
        images: [
            'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Annual Trophies',
                desc: 'Rolling championship shields and merit medals.',
            },
            {
                title: 'House Matches',
                desc: 'Healthy intramural student and faculty competitions.',
            },
        ],
    },
];

export default function SportsPage() {
    const [slideIndices, setSlideIndices] = useState<number[]>(
        sportsFacilities.map(() => 0)
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndices((prev) =>
                prev.map((idx, fIdx) => (idx + 1) % sportsFacilities[fIdx].images.length)
            );
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const handleManualDotClick = (facilityIdx: number, targetSlideIdx: number) => {
        setSlideIndices((prev) => {
            const updated = [...prev];
            updated[facilityIdx] = targetSlideIdx;
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
                        <span>Athletics &amp; Fitness</span>
                    </div>
                    <h1 className={styles.title}>Sports &amp; Athletics</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Promoting physical well-being, discipline, and sportsmanship through comprehensive indoor and outdoor athletic facilities.
                    </p>
                </div>

                {/* Alternating Zigzag Facility Cards Stack */}
                <div className={styles.facilitiesList}>
                    {sportsFacilities.map((facility, fIdx) => {
                        const currentImgIdx = slideIndices[fIdx];
                        const isReversed = fIdx % 2 !== 0; // Alternates layout (Image Right on odd indices)

                        return (
                            <div
                                key={fIdx}
                                className={`${styles.facilitySectionCard} ${isReversed ? styles.rowReversed : ''
                                    }`}
                            >
                                {/* 1. Carousel Box */}
                                <div className={styles.carouselContainer}>
                                    <div className={styles.carouselFrame}>
                                        {facility.images.map((imgSrc, imgIdx) => (
                                            <img
                                                key={imgIdx}
                                                src={imgSrc}
                                                alt={`${facility.title} Image ${imgIdx + 1}`}
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
                                                <span>{facility.codeTag}</span>
                                            </span>
                                            <span className={styles.specBadge}>
                                                {facility.specTag}
                                            </span>
                                        </div>

                                        {/* Bottom Caption & Synchronized Dots */}
                                        <div className={styles.captionOverlay}>
                                            <h4 className={styles.captionText}>{facility.caption}</h4>

                                            <div className={styles.dotsWrapper}>
                                                {facility.images.map((_, dotIdx) => (
                                                    <button
                                                        key={dotIdx}
                                                        onClick={() => handleManualDotClick(fIdx, dotIdx)}
                                                        className={`${styles.dot} ${dotIdx === currentImgIdx ? styles.activeDot : ''
                                                            }`}
                                                        aria-label={`Show image ${dotIdx + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Content & Spec Cards */}
                                <div className={styles.infoContent}>
                                    <span className={styles.facilityCategory}>
                                        {facility.category}
                                    </span>
                                    <h2 className={styles.facilityTitle}>{facility.title}</h2>
                                    <div className={styles.subAccentLine} />

                                    <p className={styles.facilityDesc}>{facility.desc}</p>

                                    {/* 2 Feature Sub-Cards */}
                                    <div className={styles.subCardsGrid}>
                                        {facility.features.map((feat, featIdx) => (
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