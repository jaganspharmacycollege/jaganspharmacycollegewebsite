'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Layers } from 'lucide-react';
import styles from './CanteenPage.module.css';

const canteenFeatures = [
    {
        category: 'HYGIENE & NUTRITION',
        title: 'Fresh & Hygienic Meals',
        codeTag: 'KITCHEN LIVE COUNTERS',
        specTag: 'South & North Indian Fresh Juices',
        caption: 'Freshly Prepared Multi-Cuisine Daily Meals & Beverages',
        desc: 'Serves freshly cooked South & North Indian breakfast, wholesome thali meals, nutritious evening snacks, and fresh fruit juices prepared under strict sanitary standards.',
        images: [
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Fresh Ingredients',
                desc: 'Daily sourced farm produce, filtered water, and zero-preservative cooking.',
            },
            {
                title: 'Beverage Bar',
                desc: 'Cold-pressed seasonal fruit juices, milkshakes, and hot brewed filter coffee.',
            },
        ],
    },
    {
        category: 'STUDENT VALUE',
        title: 'Affordable Student Pricing',
        codeTag: 'PRICING SUBSIDIZED',
        specTag: 'Pocket-Friendly Balanced Nutrition',
        caption: 'Subsidized & Wholesome Meal Plans for Every Student',
        desc: 'Subsidized, highly nutritious food options designed specifically to meet student dietary needs without compromising on quality, freshness, or portion size.',
        images: [
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Budget Combos',
                desc: 'Economical combo platters providing balanced proteins and carbohydrates.',
            },
            {
                title: 'Quick Digital Pay',
                desc: 'Cashless UPI, smart campus cards, and rapid-checkout billing counters.',
            },
        ],
    },
    {
        category: 'CAMPUS COMMUNITY',
        title: 'Vibrant Social Hub',
        codeTag: 'DINING ATRIUM',
        specTag: 'Spacious Seating High-Speed Wi-Fi',
        caption: 'Welcoming Ambiance for Group Discussions & Relaxation',
        desc: 'A spacious, naturally illuminated, and clean dining hall providing a welcoming environment for group study discussions, peer bonding, and midday relaxation.',
        images: [
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-152101732531-fbd92d768814?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Ergonomic Seating',
                desc: 'Comfortable bench and table clusters suitable for study groups and teams.',
            },
            {
                title: 'Acoustic Comfort',
                desc: 'Open-plan, ventilated atrium designed for low-noise dining comfort.',
            },
        ],
    },
];

const sectionDelays = [
    styles.sectionDelay1,
    styles.sectionDelay2,
    styles.sectionDelay3,
];

export default function CanteenPage() {
    const [slideIndices, setSlideIndices] = useState<number[]>(
        canteenFeatures.map(() => 0)
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
                    (idx, cIdx) => (idx + 1) % canteenFeatures[cIdx].images.length
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
        featureIdx: number,
        targetSlideIdx: number
    ) => {
        setSlideIndices((prev) => {
            const updated = [...prev];
            updated[featureIdx] = targetSlideIdx;
            return updated;
        });
    };

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            {/* Ambient Parallax Glows */}
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
                        <span>Dining &amp; Refreshment</span>
                    </div>
                    <h1 className={styles.title}>Campus Canteen</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        A modern, hygienic cafeteria serving balanced meals, refreshing beverages, and quick bites throughout the day.
                    </p>
                </div>

                {/* Alternating Zigzag Stack */}
                <div className={styles.facilitiesList}>
                    {canteenFeatures.map((item, cIdx) => {
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

                                        {/* Top-Left Amber Badges */}
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