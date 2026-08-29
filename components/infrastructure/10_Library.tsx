'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Sparkles,
    Layers,
    BookMarked,
    Globe2,
} from 'lucide-react';
import styles from './Library.module.css';

const librarySlides = [
    {
        src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Air-Conditioned Central Reading Hall & Reference Book Stacks',
    },
    {
        src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Digital E-Library Suite with DELNET & ScienceDirect Terminals',
    },
    {
        src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Official Pharmacopoeias (IP, BP, USP) & International Journals Section',
    },
];

const features = [
    {
        icon: BookMarked,
        title: '10,000+ Textbooks',
        desc: 'IP, BP, USP, and national & international print journals.',
        theme: styles.themeEmerald,
        animClass: styles.animDelay3,
    },
    {
        icon: Globe2,
        title: 'Digital E-Library',
        desc: 'DELNET and ScienceDirect subscriptions for scholars.',
        theme: styles.themeAmber,
        animClass: styles.animDelay4,
    },
];

export default function Library() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // Cinematic 5.0-second auto-cycling interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % librarySlides.length);
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
                            {librarySlides.map((slide, idx) => (
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
                                    <span>LIBRARY BLOCK A</span>
                                </span>
                                <span className={styles.specBadge}>
                                    10K+ Volumes Digital Repositories
                                </span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {librarySlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {librarySlides.map((_, dotIdx) => (
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
                            <span>Knowledge Resource Center</span>
                        </div>

                        <h2
                            className={`${styles.title} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                                }`}
                        >
                            Library
                        </h2>

                        <div
                            className={`${styles.accentLine} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                                }`}
                        />

                        <p
                            className={`${styles.descText} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                                }`}
                        >
                            A fully automated, air-conditioned learning repository housing thousands of pharmaceutical volumes, pharmacopoeias, print journals, and e-learning terminals.
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