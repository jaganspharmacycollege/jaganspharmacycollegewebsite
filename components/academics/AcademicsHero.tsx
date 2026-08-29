'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, BookOpenCheck, Microscope, GraduationCap, Award } from 'lucide-react';
import styles from './AcademicsHero.module.css';

const academicHeroSlides = [
    {
        image:
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1920&q=80',
        caption: 'Advanced Pharmaceutical Research & Formulation Labs',
    },
    {
        image:
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80',
        caption: 'Hands-on Spectrophotometry & Instrumental Analysis',
    },
    {
        image:
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
        caption: 'Interactive Smart Lecture Theatres & Collaborative Learning',
    },
    {
        image:
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80',
        caption: 'Doctoral Seminars, Case Studies & Clinical Discussions',
    },
];

const pillars = [
    {
        icon: Microscope,
        title: 'Research-Led',
        subtitle: 'Innovation Hub',
        theme: styles.themeEmerald,
    },
    {
        icon: BookOpenCheck,
        title: 'Industry-Aligned',
        subtitle: 'Curriculum Framework',
        theme: styles.themeAmber,
    },
    {
        icon: GraduationCap,
        title: 'Distinguished',
        subtitle: 'Doctoral Faculty',
        theme: styles.themePurple,
    },
    {
        icon: Award,
        title: 'Clinical Rigor',
        subtitle: 'Hospital Postings',
        theme: styles.themeTeal,
    },
];

export default function AcademicsHero() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const bgSliderRef = useRef<HTMLDivElement>(null);

    // Cinematic 5.0-second auto-cycling interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % academicHeroSlides.length);
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
            {/* 100% Full-Bleed Clear Background Slider */}
            <div ref={bgSliderRef} className={styles.bgSlider}>
                {academicHeroSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`${styles.bgSlide} ${idx === currentIdx ? styles.activeSlide : styles.inactiveSlide
                            }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
            </div>

            {/* Balanced Transparent Gradient Overlay */}
            <div className={styles.overlay} />

            {/* Hero Content */}
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div
                        className={`${styles.eyebrowTag} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                            }`}
                    >
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Excellence in Pharmaceutical Pedagogy</span>
                    </div>

                    <h1
                        className={`${styles.title} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                            }`}
                    >
                        Academic Framework
                    </h1>

                    <div
                        className={`${styles.accentLine} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                            }`}
                    />

                    <p
                        className={`${styles.description} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                            }`}
                    >
                        Fostering rigorous scientific inquiry, evidence-based clinical training, and comprehensive curriculum delivery guided by distinguished faculty and doctoral researchers.
                    </p>

                    {/* Active Highlight Banner */}
                    <div
                        className={`${styles.activeSlideBadge} ${isVisible ? styles.animateReveal5 : styles.hiddenState
                            }`}
                    >
                        <span className={styles.badgePulse} />
                        <span className={styles.badgeText}>
                            {academicHeroSlides[currentIdx].caption}
                        </span>
                    </div>

                    {/* 4 Feature Badges Row */}
                    <div
                        className={`${styles.badgesRow} ${isVisible ? styles.animateReveal6 : styles.hiddenState
                            }`}
                    >
                        {pillars.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className={styles.badgeCard}>
                                    <div className={`${styles.iconCircle} ${item.theme}`}>
                                        <Icon size={18} strokeWidth={2.2} />
                                    </div>
                                    <div className={styles.badgeTextWrapper}>
                                        <h4 className={styles.badgeTitle}>{item.title}</h4>
                                        <span className={styles.badgeSubtitle}>{item.subtitle}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Sync Carousel Dots */}
                <div className={styles.dotsWrapper}>
                    {academicHeroSlides.map((_, dotIdx) => (
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