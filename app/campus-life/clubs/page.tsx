'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    FlaskConical,
    BookOpen,
    Leaf,
    Sparkles,
} from 'lucide-react';
import styles from './ClubsPage.module.css';

const clubSlides = [
    {
        src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Drug Formulation Ideation & Research Workshops',
    },
    {
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        caption: 'Debating Competitions & Scientific Presentations',
    },
    {
        src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Herbal Botanical Garden & Sustainability Initiatives',
    },
];

const clubs = [
    {
        title: 'Pharma Innovators Club',
        desc: 'Focused on drug formulation discussions, patent analysis, and novel pharmaceutical techniques.',
        icon: FlaskConical,
        tag: 'Research & Innovation',
        theme: styles.themeEmerald,
        animClass: styles.animDelay1,
    },
    {
        title: 'Literary & Debating Society',
        desc: 'Cultivates public speaking, presentation clarity, and medical writing abilities.',
        icon: BookOpen,
        tag: 'Communication & Arts',
        theme: styles.themeAmber,
        animClass: styles.animDelay2,
    },
    {
        title: 'Nature & Green Campus Club',
        desc: 'Drives herbal garden plantation projects and campus sustainability initiatives.',
        icon: Leaf,
        tag: 'Eco & Herbal Botany',
        theme: styles.themeTeal,
        animClass: styles.animDelay3,
    },
];

export default function ClubsPage() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // 5000ms auto-cycling carousel with 1.5s cross-fade
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % clubSlides.length);
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
                        <span>Student Societies</span>
                    </div>
                    <h1 className={styles.title}>Clubs &amp; Societies</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Student-run societies providing opportunities to pursue diverse passions beyond the academic syllabus.
                    </p>
                </div>

                {/* Auto-sliding Image Showcase Banner */}
                <div
                    className={`${styles.showcaseBanner} ${isVisible ? styles.animateShowcase : styles.hiddenState
                        }`}
                >
                    <div className={styles.carouselFrame}>
                        {clubSlides.map((slide, idx) => (
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
                            <span>{clubSlides[currentImgIdx].caption}</span>
                        </div>

                        {/* Slider Dots */}
                        <div className={styles.dotsWrapper}>
                            {clubSlides.map((_, dotIdx) => (
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

                {/* 3 Clubs Responsive Grid */}
                <div className={styles.grid}>
                    {clubs.map((c, i) => {
                        const Icon = c.icon;
                        return (
                            <div
                                key={i}
                                className={`${styles.card} ${isVisible ? c.animClass : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${c.theme}`}>
                                        <Icon size={24} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.cardTag}>{c.tag}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{c.title}</h3>
                                <p className={styles.cardDesc}>{c.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}