'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Layers } from 'lucide-react';
import styles from './HostelPage.module.css';

const hostelFacilities = [
    {
        category: 'RESIDENTIAL LIVING',
        title: 'Separate Boys & Girls Hostels',
        codeTag: 'HOSTEL BLOCKS A & B',
        specTag: 'Wi-Fi Enabled Study Desks & Wardrobes',
        caption: 'Comfortable, Well-Ventilated Residential Accommodation',
        desc: 'Spacious, well-ventilated rooms with dedicated study desks, modular wardrobes, solar hot water systems, and high-speed Wi-Fi connectivity to create a focused living environment.',
        images: [
            'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Furnished Rooms',
                desc: 'Individual study tables, ergonomically designed beds, and organized storage.',
            },
            {
                title: 'Connectivity & Power',
                desc: 'Uninterrupted power backup and high-speed campus Wi-Fi across all floors.',
            },
        ],
    },
    {
        category: 'NUTRITION & DINING',
        title: 'Hygienic Dining Mess',
        codeTag: 'DINING HALL 1',
        specTag: 'Modern Steam Kitchen Balanced Nutrition',
        caption: 'Nutritious & Hygienically Prepared Daily Meals',
        desc: 'Nutritious vegetarian and non-vegetarian meals prepared in steam-operated modern kitchens under strict hygienic supervision and dietician guidance.',
        images: [
            'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Steam-Cooked Meals',
                desc: 'Modern mechanized kitchen equipment ensuring spotless cleanliness.',
            },
            {
                title: 'Diverse Menu',
                desc: 'Rotational nutritious menu including regional festive cuisines and fresh fruits.',
            },
        ],
    },
    {
        category: 'STUDENT SAFETY & HEALTH',
        title: '24/7 Security & Medical Care',
        codeTag: 'SAFETY CELL',
        specTag: 'Resident Wardens On-Call Ambulance',
        caption: 'Round-the-Clock Security Personnel & Rapid Health Response',
        desc: 'Round-the-clock security personnel, resident wardens, CCTV surveillance, and on-call ambulance and medical doctors providing complete peace of mind.',
        images: [
            'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Resident Wardens',
                desc: 'Dedicated faculty wardens present on premises for student care and discipline.',
            },
            {
                title: 'Medical Support',
                desc: 'First-aid stations, routine health check-ups, and immediate hospital transit.',
            },
        ],
    },
];

const sectionDelays = [
    styles.sectionDelay1,
    styles.sectionDelay2,
    styles.sectionDelay3,
];

export default function HostelPage() {
    const [slideIndices, setSlideIndices] = useState<number[]>(
        hostelFacilities.map(() => 0)
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
                    (idx, hIdx) => (idx + 1) % hostelFacilities[hIdx].images.length
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
        hostelIdx: number,
        targetSlideIdx: number
    ) => {
        setSlideIndices((prev) => {
            const updated = [...prev];
            updated[hostelIdx] = targetSlideIdx;
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
                        <span>Residential Accommodation</span>
                    </div>
                    <h1 className={styles.title}>Hostel &amp; Residential Life</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        A safe, comfortable home-away-from-home providing modern residential living spaces, caring wardens, and balanced nutrition.
                    </p>
                </div>

                {/* Alternating Zigzag Hostel Stack */}
                <div className={styles.facilitiesList}>
                    {hostelFacilities.map((item, hIdx) => {
                        const currentImgIdx = slideIndices[hIdx];
                        const isReversed = hIdx % 2 !== 0;

                        return (
                            <div
                                key={hIdx}
                                className={`${styles.facilitySectionCard} ${isReversed ? styles.rowReversed : ''
                                    } ${isVisible ? sectionDelays[hIdx % sectionDelays.length] : styles.hiddenState}`}
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
                                                            handleManualDotClick(hIdx, dotIdx)
                                                        }
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