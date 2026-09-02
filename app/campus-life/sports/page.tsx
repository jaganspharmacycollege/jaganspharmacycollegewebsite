'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Layers } from 'lucide-react';
import styles from './SportsPage.module.css';

const sportsFacilities = [
    {
        category: 'ATHLETICS & FITNESS',
        title: 'Outdoor Sports Arena',
        codeTag: 'ARENA FIELD A',
        specTag: 'Standard Turf Floodlight System',
        caption: 'Inter-College Track & Field Athletic Championships',
        desc: 'Our expansive outdoor sports arena features standard multi-sport turf grounds and courts for Cricket, Volleyball, Basketball, Football, and Track & Field athletics with dedicated coaching facilities.',
        images: [
            '/assets/HomePageImages/CGS_sports.png',
            '/assets/Infra/sports2.png',

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
        category: 'CHAMPIONSHIPS & MEETS',
        title: 'Annual Sports Meet',
        codeTag: 'TOURNAMENT 2026',
        specTag: 'Inter-House University Trophies',
        caption: 'Inter-College & House Championship Tournaments',
        desc: 'The flagship annual sporting meet featuring competitive inter-house leagues and inter-collegiate pharmacy championships promoting teamwork, grit, and athletic excellence.',
        images: [
            '/assets/Infra/sports1.png',
            '/assets/Infra/sports2.png',

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

const sectionDelays = [
    styles.sectionDelay1,
    styles.sectionDelay2,
    styles.sectionDelay3,
];

export default function SportsPage() {
    const [slideIndices, setSlideIndices] = useState<number[]>(
        sportsFacilities.map(() => 0)
    );
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // 5000ms auto-cycling carousel with 1.5s cross-fade
    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndices((prev) =>
                prev.map(
                    (idx, fIdx) => (idx + 1) % sportsFacilities[fIdx].images.length
                )
            );
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Repeating scroll-triggered entrance detection
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Ultra-slow fluid linear-interpolated (lerp 0.035) parallax animation
    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;

        const updateParallax = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();

            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                currentScroll += (targetScroll - currentScroll) * 0.035;
                const relativeOffset = window.innerHeight - rect.top;

                if (orbLeftRef.current) {
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06
                        }px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05
                        }px, 0)`;
                }
            }

            animationFrameId = requestAnimationFrame(updateParallax);
        };

        const handleScroll = () => {
            targetScroll = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateParallax);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleManualDotClick = (
        facilityIdx: number,
        targetSlideIdx: number
    ) => {
        setSlideIndices((prev) => {
            const updated = [...prev];
            updated[facilityIdx] = targetSlideIdx;
            return updated;
        });
    };

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            {/* Ambient Parallax Lighting Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div
                    className={`${styles.pageHeader} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
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
                        const isReversed = fIdx % 2 !== 0;
                        const isAlternateTheme = fIdx % 2 !== 0;

                        return (
                            <div
                                key={fIdx}
                                className={`${styles.facilitySectionCard} ${isReversed ? styles.rowReversed : ''
                                    } ${isAlternateTheme ? styles.cardHeroEmeraldTheme : ''} ${isVisible
                                        ? sectionDelays[fIdx % sectionDelays.length]
                                        : styles.hiddenState
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
                                            <h4 className={styles.captionText}>
                                                {facility.caption}
                                            </h4>
                                            <div className={styles.dotsWrapper}>
                                                {facility.images.map((_, dotIdx) => (
                                                    <button
                                                        key={dotIdx}
                                                        onClick={() =>
                                                            handleManualDotClick(fIdx, dotIdx)
                                                        }
                                                        className={`${styles.dot} ${dotIdx === currentImgIdx
                                                            ? styles.activeDot
                                                            : ''
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