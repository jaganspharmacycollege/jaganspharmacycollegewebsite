'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Layers } from 'lucide-react';
import styles from './NSSPage.module.css';

const nssActivities = [
    {
        category: 'HEALTHCARE & CIVIC RELIEF',
        title: 'Blood Donation Drives',
        codeTag: 'NSS WING RED',
        specTag: 'Red Cross Society 250+ Donors',
        caption: 'Annual Voluntary Blood Donation & Diagnostic Camps',
        desc: 'Annual voluntary blood donation camps conducted in direct association with the Indian Red Cross Society and regional government hospitals to support emergency blood reserves.',
        images: [
            'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Red Cross Partnership',
                desc: 'Certified medical staff and donor safety standards.',
            },
            {
                title: 'Emergency Cell',
                desc: 'Student voluntary donor registry for urgent hospital needs.',
            },
        ],
    },
    {
        category: 'COMMUNITY WELFARE',
        title: 'Rural Village Adoption',
        codeTag: 'NSS OUTREACH',
        specTag: 'Weekly Drives Health Literacy',
        caption: 'Sanitation, Health Literacy & Potable Water Drives',
        desc: 'Weekly sanitation drives, health literacy camps, and clean drinking water initiatives across adopted neighboring villages to empower rural communities.',
        images: [
            'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Village Sanitation',
                desc: 'Clean water distribution and public hygiene drives.',
            },
            {
                title: 'Health Literacy',
                desc: 'Educating families on medication usage and nutrition.',
            },
        ],
    },
    {
        category: 'SUSTAINABILITY & ECO-ACTION',
        title: 'Environmental Tree Plantation',
        codeTag: 'HARITHA HARAM',
        specTag: '1,000+ Saplings Green India',
        caption: 'Annual Afforestation & Green Campus Stewardship',
        desc: 'Over 1,000+ saplings planted annually as part of the Haritha Haram and Green India initiatives, promoting biodiversity and environmental sustainability.',
        images: [
            'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Green Canopy',
                desc: 'Plantation of herbal, shade, and medicinal tree species.',
            },
            {
                title: 'Eco Stewardship',
                desc: 'Organic composting and water-conservation initiatives.',
            },
        ],
    },
];

const sectionDelays = [
    styles.sectionDelay1,
    styles.sectionDelay2,
    styles.sectionDelay3,
];

export default function NSSPage() {
    const [slideIndices, setSlideIndices] = useState<number[]>(
        nssActivities.map(() => 0)
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
                    (idx, aIdx) => (idx + 1) % nssActivities[aIdx].images.length
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
        activityIdx: number,
        targetSlideIdx: number
    ) => {
        setSlideIndices((prev) => {
            const updated = [...prev];
            updated[activityIdx] = targetSlideIdx;
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
                        <span>National Service Scheme</span>
                    </div>
                    <h1 className={styles.title}>NSS Activities &amp; Outreach</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our active NSS unit instills social responsibility and community welfare values under the motto &apos;Not Me But You&apos;.
                    </p>
                </div>

                {/* Alternating Zigzag Activities Stack */}
                <div className={styles.activitiesList}>
                    {nssActivities.map((activity, aIdx) => {
                        const currentImgIdx = slideIndices[aIdx];
                        const isReversed = aIdx % 2 !== 0;

                        return (
                            <div
                                key={aIdx}
                                className={`${styles.activitySectionCard} ${isReversed ? styles.rowReversed : ''
                                    } ${isVisible ? sectionDelays[aIdx % sectionDelays.length] : styles.hiddenState}`}
                            >
                                {/* 1. Carousel Box */}
                                <div className={styles.carouselContainer}>
                                    <div className={styles.carouselFrame}>
                                        {activity.images.map((imgSrc, imgIdx) => (
                                            <img
                                                key={imgIdx}
                                                src={imgSrc}
                                                alt={`${activity.title} Image ${imgIdx + 1}`}
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
                                                <span>{activity.codeTag}</span>
                                            </span>
                                            <span className={styles.specBadge}>{activity.specTag}</span>
                                        </div>

                                        {/* Bottom Caption & Synchronized Dots */}
                                        <div className={styles.captionOverlay}>
                                            <h4 className={styles.captionText}>{activity.caption}</h4>
                                            <div className={styles.dotsWrapper}>
                                                {activity.images.map((_, dotIdx) => (
                                                    <button
                                                        key={dotIdx}
                                                        onClick={() =>
                                                            handleManualDotClick(aIdx, dotIdx)
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

                                {/* 2. Content & Spec Cards */}
                                <div className={styles.infoContent}>
                                    <span className={styles.activityCategory}>
                                        {activity.category}
                                    </span>
                                    <h2 className={styles.activityTitle}>{activity.title}</h2>
                                    <div className={styles.subAccentLine} />
                                    <p className={styles.activityDesc}>{activity.desc}</p>

                                    {/* 2 Feature Sub-Cards */}
                                    <div className={styles.subCardsGrid}>
                                        {activity.features.map((feat, featIdx) => (
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