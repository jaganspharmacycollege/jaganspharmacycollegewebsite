'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Layers } from 'lucide-react';
import styles from './FestivalsCelebrationsPage.module.css';

const celebrationsList = [
    {
        category: 'PROFESSIONAL MILESTONES',
        title: 'World Pharmacists Day (Sept 25)',
        codeTag: 'GLOBAL HEALTHCARE',
        specTag: 'Pharmacist Oath Public Screening',
        caption: 'Annual Pharmacist Oath Ceremony & Public Awareness Rallies',
        desc: 'Campus rallies, scientific poster presentations, formal pharmacist oath ceremonies, and free diagnostic health screening camps conducted in honor of global healthcare service.',
        images: [
            '/assets/courses/pharmd4.png',
            '/assets/courses/pharmd1.png',

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
        category: 'CULTURAL UNITY',
        title: 'Traditional Festive Celebrations',
        codeTag: 'HERITAGE HARMONY',
        specTag: 'Sankranti Diwali Eid Christmas',
        caption: 'Vibrant Traditional Fests & Festive Regional Harmony',
        desc: 'Grand campus celebrations for Sankranti, Diwali, Dussehra, Eid, and Christmas fostering cultural unity, community harmony, and regional heritage across our student body.',
        images: [
            '/assets/Infra/events1.png',
            '/assets/HomePageImages/CGS_sports.png',

        ],
        features: [
            {
                title: 'Ethnic Celebrations',
                desc: 'Traditional attire days, rangoli art, and authentic seasonal cuisines.',
            },
            {
                title: 'Cultural Harmony',
                desc: 'Multi-faith celebrations uniting students and faculty throughout the year.',
            },
        ],
    },
];

const sectionDelays = [
    styles.sectionDelay1,
    styles.sectionDelay2,
    styles.sectionDelay3,
];

export default function FestivalsCelebrationsPage() {
    const [slideIndices, setSlideIndices] = useState<number[]>(
        celebrationsList.map(() => 0)
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
                    (idx, cIdx) => (idx + 1) % celebrationsList[cIdx].images.length
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
        celebrationIdx: number,
        targetSlideIdx: number
    ) => {
        setSlideIndices((prev) => {
            const updated = [...prev];
            updated[celebrationIdx] = targetSlideIdx;
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
                        <span>Festive Spirit</span>
                    </div>
                    <h1 className={styles.title}>Festivals &amp; Celebrations</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Celebrating professional healthcare milestones, national festivals, and cultural harmony throughout the year.
                    </p>
                </div>

                {/* Alternating Zigzag Celebrations Stack */}
                <div className={styles.facilitiesList}>
                    {celebrationsList.map((item, cIdx) => {
                        const currentImgIdx = slideIndices[cIdx];
                        const isReversed = cIdx % 2 !== 0;
                        const isAlternateTheme = cIdx % 2 !== 0;

                        return (
                            <div
                                key={cIdx}
                                className={`${styles.facilitySectionCard} ${isReversed ? styles.rowReversed : ''
                                    } ${isAlternateTheme ? styles.cardHeroEmeraldTheme : ''} ${isVisible
                                        ? sectionDelays[cIdx % sectionDelays.length]
                                        : styles.hiddenState
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
                                            <span className={styles.specBadge}>{item.specTag}</span>
                                        </div>

                                        {/* Bottom Caption & Synchronized Dots */}
                                        <div className={styles.captionOverlay}>
                                            <h4 className={styles.captionText}>{item.caption}</h4>
                                            <div className={styles.dotsWrapper}>
                                                {item.images.map((_, dotIdx) => (
                                                    <button
                                                        key={dotIdx}
                                                        onClick={() =>
                                                            handleManualDotClick(cIdx, dotIdx)
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