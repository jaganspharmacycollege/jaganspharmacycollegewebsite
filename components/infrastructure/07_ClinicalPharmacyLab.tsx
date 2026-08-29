'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Sparkles,
    Layers,
    HeartPulse,
    Database,
} from 'lucide-react';
import styles from './ClinicalPharmacyLab.module.css';

const clinicalSlides = [
    {
        src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Simulated Patient Counseling Cabins & Clinical Interaction Bays',
    },
    {
        src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
        caption: 'Drug Information Center (DIC) & Electronic Health Records Workstations',
    },
    {
        src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
        caption: 'Therapeutic Drug Monitoring (TDM) & Prescription Audit Units',
    },
];

const features = [
    {
        icon: HeartPulse,
        title: 'Counseling Cabins',
        desc: 'Dedicated booths for patient medication counseling practice.',
        theme: styles.themeEmerald,
        animClass: styles.animDelay3,
    },
    {
        icon: Database,
        title: 'Drug Info Center',
        desc: 'Micromedex and Lexicomp clinical pharmacotherapy portals.',
        theme: styles.themeAmber,
        animClass: styles.animDelay4,
    },
];

export default function ClinicalPharmacyLab() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // Cinematic 5.0-second auto-cycling interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % clinicalSlides.length);
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
                            <span>Patient Care &amp; Clinical Skills</span>
                        </div>

                        <h2
                            className={`${styles.title} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                                }`}
                        >
                            Clinical Pharmacy Lab
                        </h2>

                        <div
                            className={`${styles.accentLine} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                                }`}
                        />

                        <p
                            className={`${styles.descText} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                                }`}
                        >
                            Designed specifically for Pharm.D training, featuring simulated clinical patient interaction booths, electronic drug information databases, and therapeutic drug monitoring systems.
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
                            {clinicalSlides.map((slide, idx) => (
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
                                    <span>LAB BLOCK E</span>
                                </span>
                                <span className={styles.specBadge}>
                                    Pharm.D Dedicated DIC Portals
                                </span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {clinicalSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {clinicalSlides.map((_, dotIdx) => (
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