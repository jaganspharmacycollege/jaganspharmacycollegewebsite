'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Sparkles,
    Quote,
    Layers,
} from 'lucide-react';
import styles from './AlumniDirectory.module.css';

const directorySlides = [
    {
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Global Placement Network & Corporate Industry Tie-ups',
    },
    {
        src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
        caption: 'Clinical Leaders & Hospital Pharmacy Directors Worldwide',
    },
    {
        src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
        caption: 'Alumni Mentorship Roundtables & Research Advisory Councils',
    },
];

const directory = [
    {
        name: 'Anusha R.',
        batch: 'B. PHARMACY III YEAR',
        quote:
            'The campus environment is amazing! We get great support from faculty and plenty of opportunities to grow.',
        avatar:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        theme: styles.themeEmerald,
        avatarBorder: styles.avatarBorderEmerald,
        animClass: styles.animDelay3,
    },
    {
        name: 'Karthik M.',
        batch: 'PHARM.D II YEAR',
        quote:
            "Jagan's College of Pharmacy feels like a second home. The facilities and exposure here are excellent.",
        avatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        theme: styles.themeAmber,
        avatarBorder: styles.avatarBorderAmber,
        animClass: styles.animDelay4,
    },
    {
        name: 'Sreeja P.',
        batch: 'M. PHARMACY I YEAR',
        quote:
            "I've learned so much beyond academics through events, clubs and interactions. Truly a holistic experience!",
        avatar:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
        theme: styles.themePurple,
        avatarBorder: styles.avatarBorderPurple,
        animClass: styles.animDelay5,
    },
];

export default function AlumniDirectory() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // Cinematic 5.0-second auto-cycling interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % directorySlides.length);
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
                {/* Header Block */}
                <div
                    className={`${styles.headerBlock} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Member Profiles</span>
                    </div>
                    <h2 className={styles.title}>Alumni Directory</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Explore our alumni network representing leading pharmaceutical corporations, research centers, and tertiary hospitals worldwide.
                    </p>
                </div>

                {/* Auto-sliding Banner Showcase */}
                <div
                    className={`${styles.carouselContainer} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                        }`}
                >
                    <div className={styles.imageFrame}>
                        {directorySlides.map((slide, idx) => (
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
                                <span>GLOBAL CHAPTER DIRECTORY</span>
                            </span>
                            <span className={styles.specBadge}>
                                3,500+ Verified Profiles
                            </span>
                        </div>

                        {/* Bottom Caption & Sync Dots */}
                        <div className={styles.captionOverlay}>
                            <h4 className={styles.captionText}>
                                {directorySlides[currentImgIdx].caption}
                            </h4>
                            <div className={styles.dotsWrapper}>
                                {directorySlides.map((_, dotIdx) => (
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

                {/* 3 Quote & Squircle Avatar Cards */}
                <div className={styles.grid}>
                    {directory.map((item, idx) => (
                        <div
                            key={idx}
                            className={`${styles.card} ${isVisible ? item.animClass : styles.hiddenState
                                }`}
                        >
                            <div className={styles.cardHeader}>
                                <div className={`${styles.quoteSquircle} ${item.theme}`}>
                                    <Quote size={18} strokeWidth={2.4} />
                                </div>
                                <div className={`${styles.avatarSquircle} ${item.avatarBorder}`}>
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className={styles.avatarImg}
                                    />
                                </div>
                            </div>

                            <div className={styles.cardBody}>
                                <p className={styles.quoteText}>&ldquo;{item.quote}&rdquo;</p>
                                <div className={styles.cardDivider} />
                                <h3 className={styles.cardTitle}>{item.name}</h3>
                                <p className={styles.cardBatch}>{item.batch}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}