'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Users, Trophy, HeartHandshake, Globe, Sparkles } from 'lucide-react';
import styles from './CampusLifeHero.module.css';

const campusLifeSlides = [
    {
        title: 'Vibrant Campus Grounds',
        image:
            '/assets/HomePageImages/CGS_sports.png',
    },
    {
        title: 'Annual Sports Tournaments & Athletics',
        image:
            '/assets/Infra/Infra_lib2.png',
    },
    {
        title: 'Cultural Fests & Student Celebrations',
        image:
            '/assets/Infra/Infra_sports1.png',
    },
    {
        title: 'Collaborative Learning & Student Clubs',
        image:
            '/assets/HomePageImages/CGS_events.png',
    },
];

export default function CampusLifeHero() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const bgSliderRef = useRef<HTMLDivElement>(null);

    // Cinematic 5.0-second auto-cycling interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % campusLifeSlides.length);
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

                if (bgSliderRef.current) {
                    bgSliderRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.05}px, 0) scale(1.05)`;
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
            {/* Background Auto-Cycling Image Slider */}
            <div ref={bgSliderRef} className={styles.bgSlider}>
                {campusLifeSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`${styles.bgSlide} ${idx === currentIdx ? styles.activeSlide : styles.inactiveSlide
                            }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
            </div>

            {/* Clear Contrast Overlay */}
            <div className={styles.overlay} />

            {/* Main Hero Content */}
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <span
                        className={`${styles.eyebrow} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                            }`}
                    >
                        CAMPUS LIFE
                    </span>

                    <h1
                        className={`${styles.title} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                            }`}
                    >
                        Learn. Grow.<br />Thrive Together.
                    </h1>

                    <div
                        className={`${styles.accentLine} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                            }`}
                    />

                    <p
                        className={`${styles.description} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                            }`}
                    >
                        At Jagan&apos;s College of Pharmacy, life goes beyond classrooms. Discover a vibrant campus where learning, leadership, athletic pursuits, and lifelong friendships flourish.
                    </p>

                    {/* Active Highlight Banner */}
                    <div
                        className={`${styles.activeSlideBadge} ${isVisible ? styles.animateReveal5 : styles.hiddenState
                            }`}
                    >
                        <Sparkles size={15} className={styles.badgeSparkle} />
                        <span className={styles.badgeText}>
                            {campusLifeSlides[currentIdx].title}
                        </span>
                    </div>

                    {/* 4 Separate Pillar Cards Grid */}
                    <div
                        className={`${styles.badgesRow} ${isVisible ? styles.animateReveal6 : styles.hiddenState
                            }`}
                    >
                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeEmerald}`}>
                                <Users size={18} strokeWidth={2.2} />
                            </div>
                            <h4 className={styles.badgeTitle}>
                                Vibrant <br /> Community
                            </h4>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themePurple}`}>
                                <Trophy size={18} strokeWidth={2.2} />
                            </div>
                            <h4 className={styles.badgeTitle}>
                                Holistic <br /> Development
                            </h4>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeAmber}`}>
                                <HeartHandshake size={18} strokeWidth={2.2} />
                            </div>
                            <h4 className={styles.badgeTitle}>
                                Health &amp; <br /> Wellness
                            </h4>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeBlue}`}>
                                <Globe size={18} strokeWidth={2.2} />
                            </div>
                            <h4 className={styles.badgeTitle}>
                                Lasting <br /> Connections
                            </h4>
                        </div>
                    </div>
                </div>

                {/* Carousel Dots */}
                <div className={styles.dotsWrapper}>
                    {campusLifeSlides.map((_, dotIdx) => (
                        <button
                            key={dotIdx}
                            onClick={() => setCurrentIdx(dotIdx)}
                            className={`${styles.dot} ${dotIdx === currentIdx ? styles.activeDot : ''
                                }`}
                            aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}