'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Sparkles,
    Layers,
    FlaskRound as Flask,
    Flower2,
} from 'lucide-react';
import styles from './PharmacognosyLabs.module.css';

const pharmacognosySlides = [
    {
        src: '/assets/Infra/Pharmacognosy_1.png',
        caption: 'Continuous Soxhlet & Rotary Solvent Extraction Bays',
    },
    {
        src: '/assets/Infra/Pharmacognosy_2.png',
        caption: 'Authentic Botanical Herbarium & Medicinal Plant Specimen Museum',
    },
    {
        src: '/assets/Infra/Pharmacognosy_3.png',
        caption: 'Phytochemical Isolation, Chromatography & Microscopy Workstations',
    },
];

const features = [
    {
        icon: Flask,
        title: 'Soxhlet Extraction',
        desc: 'Continuous solvent extractors for natural active isolates.',
        theme: styles.themeEmerald,
        animClass: styles.animDelay3,
    },
    {
        icon: Flower2,
        title: 'Herbarium Museum',
        desc: 'Rich library of authentic plant and mineral specimens.',
        theme: styles.themeAmber,
        animClass: styles.animDelay4,
    },
];

export default function PharmacognosyLabs() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // Cinematic 5.0-second auto-cycling interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % pharmacognosySlides.length);
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

    // Ultra-slow fluid linear-interpolated (lerp) parallax animation
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
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06}px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05}px, 0)`;
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

    return (
        <section ref={sectionRef} className={styles.sectionAlt}>
            {/* Ambient Parallax Lighting Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    {/* Left Column: Rounded Auto-sliding Image Carousel */}
                    <div
                        className={`${styles.carouselContainer} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                            }`}
                    >
                        <div className={styles.imageFrame}>
                            {pharmacognosySlides.map((slide, idx) => (
                                <img
                                    key={idx}
                                    src={slide.src}
                                    alt={slide.caption}
                                    className={`${styles.carouselImg} ${idx === currentImgIdx ? styles.activeImg : styles.inactiveImg
                                        }`}
                                />
                            ))}

                            <div className={styles.imageOverlay} />

                            {/* Top Amber Code Badges */}
                            <div className={styles.badgesHeader}>
                                <span className={styles.codeBadge}>
                                    <Layers size={13} className={styles.codeIcon} />
                                    <span>LAB BLOCK D</span>
                                </span>
                                <span className={styles.specBadge}>
                                    Botanical Museum Extraction Bay
                                </span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {pharmacognosySlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {pharmacognosySlides.map((_, dotIdx) => (
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

                    {/* Right Column: Information Content & Feature Cards */}
                    <div className={styles.infoContent}>
                        <div
                            className={`${styles.eyebrowTag} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                                }`}
                        >
                            <Sparkles size={14} className={styles.eyebrowIcon} />
                            <span>Natural Products &amp; Phytochemistry</span>
                        </div>

                        <h2
                            className={`${styles.title} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                                }`}
                        >
                            Pharmacognosy Labs
                        </h2>

                        <div
                            className={`${styles.accentLine} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                                }`}
                        />

                        <p
                            className={`${styles.descText} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                                }`}
                        >
                            Dedicated to the extraction, isolation, identification, and standardization of crude herbal drugs, botanical tissues, and active phytoconstituents.
                        </p>

                        {/* 2 Feature Cards Grid */}
                        <div className={styles.featuresGrid}>
                            {features.map((feat, idx) => {
                                const Icon = feat.icon;
                                return (
                                    <div
                                        key={idx}
                                        className={`${styles.featureCardAlt} ${isVisible ? feat.animClass : styles.hiddenState
                                            }`}
                                    >
                                        <div className={`${styles.iconSquircle} ${feat.theme}`}>
                                            <Icon size={20} strokeWidth={2.2} />
                                        </div>
                                        <div>
                                            <h4 className={styles.featureTitle}>{feat.title}</h4>
                                            <p className={styles.featureDesc}>{feat.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}