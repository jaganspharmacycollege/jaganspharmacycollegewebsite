'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Sparkles,
    Layers,
    Activity,
    Laptop,
} from 'lucide-react';
import styles from './PharmacologyLabs.module.css';

const pharmacologySlides = [
    {
        src: '/assets/HomePageImages/CGS_lab.png',
        caption: 'Automated Student Organ Bath Systems & Bioassay Rigs',
    },
    {
        src: '/assets/Infra/Pharmacology_1.png',
        caption: 'Preclinical Pharmacological Screening & Behavioral Studies',
    },
    {
        src: '/assets/Infra/Pharmacology_2.png',
        caption: 'Computer-Assisted Learning (CAL) In Silico Simulation Suites',
    },
];

const features = [
    {
        icon: Activity,
        title: 'Organ Bath Setups',
        desc: 'Automated student organ baths for bioassay recordings.',
        theme: styles.themeEmerald,
        animClass: styles.animDelay3,
    },
    {
        icon: Laptop,
        title: 'CAL Software',
        desc: 'Computer-assisted pharmacology simulation models.',
        theme: styles.themeAmber,
        animClass: styles.animDelay4,
    },
];

export default function PharmacologyLabs() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // Cinematic 5.0-second auto-cycling interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % pharmacologySlides.length);
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
        <section ref={sectionRef} className={styles.section}>
            {/* Ambient Parallax Lighting Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    {/* Left Column: Information & Feature Cards */}
                    <div className={styles.infoContent}>
                        <div
                            className={`${styles.eyebrowTag} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                                }`}
                        >
                            <Sparkles size={14} className={styles.eyebrowIcon} />
                            <span>Experimental Pharmacology</span>
                        </div>

                        <h2
                            className={`${styles.title} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                                }`}
                        >
                            Pharmacology Labs
                        </h2>

                        <div
                            className={`${styles.accentLine} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                                }`}
                        />

                        <p
                            className={`${styles.descText} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                                }`}
                        >
                            Specialized in preclinical pharmacological screening, drug mechanism studies, and bioassays conforming to CPCSEA guidelines.
                        </p>

                        {/* 2 Separated Feature Cards */}
                        <div className={styles.featuresGrid}>
                            {features.map((feat, idx) => {
                                const Icon = feat.icon;
                                return (
                                    <div
                                        key={idx}
                                        className={`${styles.featureCard} ${isVisible ? feat.animClass : styles.hiddenState
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

                    {/* Right Column: Auto-sliding Rounded Image Carousel */}
                    <div
                        className={`${styles.carouselContainer} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                            }`}
                    >
                        <div className={styles.imageFrame}>
                            {pharmacologySlides.map((slide, idx) => (
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
                                    <span>LAB BLOCK C</span>
                                </span>
                                <span className={styles.specBadge}>
                                    CPCSEA Compliant CAL In Silico
                                </span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {pharmacologySlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {pharmacologySlides.map((_, dotIdx) => (
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
                </div>
            </div>
        </section>
    );
}