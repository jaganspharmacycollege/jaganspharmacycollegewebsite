'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Layers } from 'lucide-react';
import styles from './TransportationPage.module.css';

const transportFacilities = [
    {
        category: 'TRANSIT NETWORK',
        title: 'Extensive Bus Network',
        codeTag: 'FLEET ROUTES 1-12',
        specTag: 'Nellore Gudur Kovur',
        caption: 'Modern Fleet Covering Major Urban & Rural Transit Routes',
        desc: 'Fleet of modern college buses covering all major locations in Nellore, Gudur, Kovur, and surrounding regions for safe daily commuting.',
        images: [
            'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1520105072000-f44fc0832105?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Key Boarding Points',
                desc: 'Designated pick-up and drop-off points across all key regional junctions.',
            },
            {
                title: 'Comfort Seating',
                desc: 'Spacious seating layouts with air-suspension transit for a smooth ride.',
            },
        ],
    },
    {
        category: 'SAFETY & MONITORING',
        title: 'GPS Tracking & Safety',
        codeTag: 'TELEMATICS 24/7',
        specTag: 'Live Telematics Speed Governors',
        caption: 'Live Telematics, Speed Compliance & Certified Drivers',
        desc: 'All college transport vehicles are equipped with real-time GPS tracking, speed governors, emergency first-aid kits, and vetted drivers.',
        images: [
            'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Live Tracking',
                desc: 'Centralized route monitoring and parental transit updates.',
            },
            {
                title: 'Trained Personnel',
                desc: 'Experienced drivers and attendants certified in defensive driving.',
            },
        ],
    },
    {
        category: 'TIMETABLE SYNCHRONIZATION',
        title: 'Punctual & Convenient',
        codeTag: 'SCHEDULE TIMINGS',
        specTag: 'Zero Delay Clinical Rotations',
        caption: 'Synchronized Departures for Classes & Hospital Postings',
        desc: 'Scheduled arrivals strictly aligned with college class timings, semester examination schedules, and clinical rotations at affiliated hospitals.',
        images: [
            'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Academic Sync',
                desc: 'Coordinated routes matching lecture hours and laboratory sessions.',
            },
            {
                title: 'Clinical Shifts',
                desc: 'Dedicated shuttles for Pharm.D and M. Pharm hospital duty postings.',
            },
        ],
    },
];

const sectionDelays = [
    styles.sectionDelay1,
    styles.sectionDelay2,
    styles.sectionDelay3,
];

export default function TransportationPage() {
    const [slideIndices, setSlideIndices] = useState<number[]>(
        transportFacilities.map(() => 0)
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
                    (idx, tIdx) => (idx + 1) % transportFacilities[tIdx].images.length
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
        transportIdx: number,
        targetSlideIdx: number
    ) => {
        setSlideIndices((prev) => {
            const updated = [...prev];
            updated[transportIdx] = targetSlideIdx;
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
                        <span>Campus Commute</span>
                    </div>
                    <h1 className={styles.title}>Transportation</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Safe and reliable daily transportation facilities ensuring seamless transit for students and staff.
                    </p>
                </div>

                {/* Alternating Zigzag Transport Stack */}
                <div className={styles.facilitiesList}>
                    {transportFacilities.map((item, tIdx) => {
                        const currentImgIdx = slideIndices[tIdx];
                        const isReversed = tIdx % 2 !== 0;
                        const isAlternateTheme = tIdx % 2 !== 0;

                        return (
                            <div
                                key={tIdx}
                                className={`${styles.facilitySectionCard} ${isReversed ? styles.rowReversed : ''
                                    } ${isAlternateTheme ? styles.cardHeroEmeraldTheme : ''} ${isVisible
                                        ? sectionDelays[tIdx % sectionDelays.length]
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
                                                            handleManualDotClick(tIdx, dotIdx)
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