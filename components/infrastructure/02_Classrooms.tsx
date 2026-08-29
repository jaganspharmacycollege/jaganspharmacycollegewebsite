'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Layers,
    Sparkles,
    Tv2,
    Armchair,
} from 'lucide-react';
import styles from './Classrooms.module.css';

const classroomImages = [
    {
        name: 'Dr. A.P.J. Abdul Kalam Smart Lecture Hall',
        roomNo: 'LH 01 (Block A)',
        capacity: '120 Seats Smart Podium',
        src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Dr. A.P.J. Abdul Kalam Smart Lecture Hall',
    },
    {
        name: 'Sir C.V. Raman Multimedia Gallery Hall',
        roomNo: 'LH 02 (Block A)',
        capacity: '150 Seats Tiered Gallery',
        src: 'https://images.unsplash.com/photo-1509062522246-375597792707?auto=format&fit=crop&w=1200&q=80',
        alt: 'Sir C.V. Raman Multimedia Gallery Hall',
    },
    {
        name: 'Pharmaceutics Interactive Digital Classroom',
        roomNo: 'CR 104 (Block B)',
        capacity: '90 Seats Interactive Digital Board',
        src: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
        alt: 'Pharmaceutics Interactive Digital Classroom',
    },
    {
        name: 'Clinical Pharmacy & Case Study Seminar Hall',
        roomNo: 'CR 202 (Block B)',
        capacity: '80 Seats Audio-Visual System',
        src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
        alt: 'Clinical Pharmacy & Case Study Seminar Hall',
    },
];

const features = [
    {
        icon: Tv2,
        title: 'Multimedia Podiums',
        desc: 'Projectors and interactive digital boards in all halls.',
        theme: styles.themeEmerald,
        animClass: styles.animDelay3,
    },
    {
        icon: Armchair,
        title: 'Tiered Seating',
        desc: 'Ergonomic gallery seating ensuring clear line of sight.',
        theme: styles.themeAmber,
        animClass: styles.animDelay4,
    },
];

export default function Classrooms() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // Cinematic 5.0-second auto-cycling interval
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % classroomImages.length);
        }, 5000);
        return () => clearInterval(interval);
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
                            {classroomImages.map((item, idx) => (
                                <img
                                    key={idx}
                                    src={item.src}
                                    alt={item.alt}
                                    className={`${styles.carouselImg} ${idx === currentIndex ? styles.activeImg : styles.inactiveImg
                                        }`}
                                />
                            ))}

                            <div className={styles.imageOverlay} />

                            {/* Top Amber Code Badges & Capacity Pill */}
                            <div className={styles.badgesHeader}>
                                <span className={styles.codeBadge}>
                                    <Layers size={13} className={styles.codeIcon} />
                                    <span>{classroomImages[currentIndex].roomNo}</span>
                                </span>
                                <span className={styles.specBadge}>
                                    {classroomImages[currentIndex].capacity}
                                </span>
                            </div>

                            {/* Bottom Caption & Sync Dots Indicator */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {classroomImages[currentIndex].name}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {classroomImages.map((_, dotIdx) => (
                                        <button
                                            key={dotIdx}
                                            onClick={() => setCurrentIndex(dotIdx)}
                                            className={`${styles.dot} ${dotIdx === currentIndex ? styles.activeDot : ''
                                                }`}
                                            aria-label={`Go to slide ${dotIdx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Information & Feature Cards */}
                    <div className={styles.infoContent}>
                        <div
                            className={`${styles.eyebrowTag} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                                }`}
                        >
                            <Sparkles size={14} className={styles.eyebrowIcon} />
                            <span>Learning Spaces</span>
                        </div>

                        <h2
                            className={`${styles.title} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                                }`}
                        >
                            Classrooms
                        </h2>

                        <div
                            className={`${styles.accentLine} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                                }`}
                        />

                        <p
                            className={`${styles.descText} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                                }`}
                        >
                            Our spacious, well-ventilated lecture halls are acoustically treated and equipped with modern multimedia teaching aids, LCD projectors, high-speed Wi-Fi, and smart podiums for technology-driven instructions.
                        </p>

                        {/* 2 Feature Cards Grid */}
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
                </div>
            </div>
        </section>
    );
}