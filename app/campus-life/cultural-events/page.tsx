'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Sparkles,
    Music,
    PartyPopper,
    Palette,
} from 'lucide-react';
import styles from './CulturalEventsPage.module.css';

const culturalSlides = [
    {
        src: '/assets/Infra/events1.png',
        caption: 'TARANG Annual Cultural Mega Fest & Live Stage Performances',
    },
    {
        src: '/assets/Infra/events2.png',
        caption: 'Talent Hunt & Freshers Welcome Celebrations',
    },

];

const events = [
    {
        title: 'Annual Cultural Fest TARANG',
        desc: 'Three days of vibrant music, drama, traditional and modern dance, and fine arts competitions on our open-air auditorium.',
        icon: Music,
        tag: 'Flagship Fest',
        theme: styles.themeEmerald,
        animClass: styles.animDelay1,
    },
    {
        title: 'Talent Hunt & Freshers Night',
        desc: 'Welcoming first-year students to showcase their talents in performing arts, music, dance, and creative expression.',
        icon: PartyPopper,
        tag: 'Freshers Showcase',
        theme: styles.themePurple,
        animClass: styles.animDelay2,
    },
    {
        title: 'Traditional Attire & Ethnic Day',
        desc: 'Celebrating regional traditions, festive traditional cuisines, authentic handlooms, and cultural diversity across our student body.',
        icon: Palette,
        tag: 'Heritage & Diversity',
        theme: styles.themeAmber,
        animClass: styles.animDelay3,
    },
];

export default function CulturalEventsPage() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // 5000ms auto-cycling carousel with 1.5s cross-fade
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % culturalSlides.length);
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

    // Fluid linear-interpolated (lerp 0.035) parallax animation
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

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
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
                        <span>Arts &amp; Expression</span>
                    </div>
                    <h1 className={styles.title}>Cultural Events</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Vibrant celebrations of creativity, Indian heritage, musical rhythms, and stage performances on our open-air auditorium.
                    </p>
                </div>

                {/* Auto-sliding Image Showcase Banner */}
                <div
                    className={`${styles.showcaseBanner} ${isVisible ? styles.animateShowcase : styles.hiddenState
                        }`}
                >
                    <div className={styles.carouselFrame}>
                        {culturalSlides.map((slide, idx) => (
                            <img
                                key={idx}
                                src={slide.src}
                                alt={slide.caption}
                                className={`${styles.carouselImg} ${idx === currentImgIdx
                                    ? styles.activeImg
                                    : styles.inactiveImg
                                    }`}
                            />
                        ))}
                        <div className={styles.imageOverlay} />

                        {/* Active Caption Pill */}
                        <div className={styles.imageBadge}>
                            <span>{culturalSlides[currentImgIdx].caption}</span>
                        </div>

                        {/* Slider Dots */}
                        <div className={styles.dotsWrapper}>
                            {culturalSlides.map((_, dotIdx) => (
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

                {/* 3 Event Cards Responsive Grid */}
                <div className={styles.grid}>
                    {events.map((e, i) => {
                        const Icon = e.icon;
                        return (
                            <div
                                key={i}
                                className={`${styles.card} ${isVisible ? e.animClass : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${e.theme}`}>
                                        <Icon size={24} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.cardTag}>{e.tag}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{e.title}</h3>
                                <p className={styles.cardDesc}>{e.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}