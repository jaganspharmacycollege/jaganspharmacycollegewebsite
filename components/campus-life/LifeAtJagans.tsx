'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Building2, UserCheck, Briefcase, ShieldCheck, Sparkles } from 'lucide-react';
import styles from './LifeAtJagans.module.css';

const campusSlides = [
    {
        src: '/assets/HomePageImages/CGS_lib.png',
        caption: 'Modern Digital Library & Collaborative Study Hub',
    },
    {
        src: '/assets/HomePageImages/CGS_lab.png',
        caption: 'High-Tech Formulation & Research Laboratories',
    },
    {
        src: '/assets/HomePageImages/CGS_classroom.png',
        caption: 'Spacious Green Campus Grounds & Infrastructure',
    },
    {
        src: '/assets/HomePageImages/CGS_sports.png',
        caption: 'Student Cultural Fests & Annual Celebrations',
    },
];

const pillars = [
    {
        title: 'Modern Infrastructure',
        desc: 'State-of-the-art classrooms, smart labs and advanced research facilities.',
        icon: Building2,
        theme: styles.themeEmerald,
        animClass: styles.animDelay1,
    },
    {
        title: 'Experienced Faculty',
        desc: 'Learn from dedicated educators and seasoned industry professionals.',
        icon: UserCheck,
        theme: styles.themeAmber,
        animClass: styles.animDelay2,
    },
    {
        title: 'Industry Exposure',
        desc: 'Workshops, seminars and industrial visits to keep you ahead.',
        icon: Briefcase,
        theme: styles.themePurple,
        animClass: styles.animDelay3,
    },
    {
        title: 'Safe & Secure Campus',
        desc: '24/7 security and a safe, supportive environment for all students.',
        icon: ShieldCheck,
        theme: styles.themeTeal,
        animClass: styles.animDelay4,
    },
];

export default function LifeAtJagans() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // Cinematic 5.0-second auto-cycling interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % campusSlides.length);
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
                {/* Section Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Campus Experience</span>
                    </div>
                    <h2 className={styles.title}>Life at Jagan&apos;s</h2>
                    <div className={styles.accentLine} />
                </div>

                {/* Main Grid Layout */}
                <div className={styles.mainGrid}>
                    {/* Left Column: Subtitle + Auto-sliding Carousel Image Frame */}
                    <div
                        className={`${styles.leftCol} ${isVisible ? styles.animDelay1 : styles.hiddenState
                            }`}
                    >
                        <p className={styles.subText}>
                            Our campus is designed to inspire, engage and empower students to become confident professionals and responsible global healthcare citizens.
                        </p>
                        <div className={styles.imageFrame}>
                            {campusSlides.map((slide, idx) => (
                                <img
                                    key={idx}
                                    src={slide.src}
                                    alt={slide.caption}
                                    className={`${styles.campusImg} ${idx === currentImgIdx ? styles.activeImg : styles.inactiveImg
                                        }`}
                                />
                            ))}
                            <div className={styles.imageOverlay} />

                            {/* Dynamic Active Caption Badge */}
                            <div className={styles.imageBadge}>
                                <span>{campusSlides[currentImgIdx].caption}</span>
                            </div>

                            {/* Slider Sync Dots */}
                            <div className={styles.dotsWrapper}>
                                {campusSlides.map((_, dotIdx) => (
                                    <button
                                        key={dotIdx}
                                        onClick={() => setCurrentImgIdx(dotIdx)}
                                        className={`${styles.dot} ${dotIdx === currentImgIdx ? styles.activeDot : ''
                                            }`}
                                        aria-label={`Show slide ${dotIdx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 4 Pillar Cards Grid */}
                    <div className={styles.rightCol}>
                        <div className={styles.rightGrid}>
                            {pillars.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className={`${styles.pillarCard} ${isVisible ? item.animClass : styles.hiddenState
                                            }`}
                                    >
                                        <div className={`${styles.iconSquircle} ${item.theme}`}>
                                            <Icon size={24} strokeWidth={2.2} />
                                        </div>
                                        <div className={styles.cardHeader}>
                                            <h3 className={styles.pillarTitle}>{item.title}</h3>
                                            <div className={styles.goldDash} />
                                        </div>
                                        <p className={styles.pillarDesc}>{item.desc}</p>
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