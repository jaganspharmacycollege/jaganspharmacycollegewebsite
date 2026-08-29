'use client';

import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award, Users, CheckCircle2 } from 'lucide-react';
import styles from './AdmissionsHero.module.css';

const admissionsHeroImages = [
    'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80',
];

export default function AdmissionsHero() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const bgSliderRef = useRef<HTMLDivElement>(null);

    // Cinematic 5.0-second auto-cycling interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % admissionsHeroImages.length);
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
                {admissionsHeroImages.map((src, index) => (
                    <div
                        key={index}
                        className={`${styles.bgSlide} ${index === currentIdx ? styles.activeSlide : styles.inactiveSlide
                            }`}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}
            </div>

            {/* Clear Left-to-Right Contrast Gradient Overlay */}
            <div className={styles.overlay} />

            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <span
                        className={`${styles.eyebrow} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                            }`}
                    >
                        Admissions Open
                    </span>

                    <h1
                        className={`${styles.title} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                            }`}
                    >
                        Your Future. <br />
                        Our Commitment.
                    </h1>

                    <div
                        className={`${styles.accentLine} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                            }`}
                    />

                    <p
                        className={`${styles.description} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                            }`}
                    >
                        At Jagan&apos;s College of Pharmacy, we make the admission process simple, transparent, and student-friendly. Take the first step toward a rewarding career in pharmaceutical sciences and clinical healthcare.
                    </p>

                    {/* Feature Badges */}
                    <div
                        className={`${styles.featureList} ${isVisible ? styles.animateReveal5 : styles.hiddenState
                            }`}
                    >
                        <div className={styles.featureItem}>
                            <CheckCircle2 size={16} className={styles.checkIcon} />
                            <span>Affiliated to JNTUA</span>
                        </div>
                        <div className={styles.featureItem}>
                            <CheckCircle2 size={16} className={styles.checkIcon} />
                            <span>AICTE Approved</span>
                        </div>
                        <div className={styles.featureItem}>
                            <CheckCircle2 size={16} className={styles.checkIcon} />
                            <span>Merit &amp; Management Quota</span>
                        </div>
                    </div>

                    {/* 3 Separate Glassmorphic Pillar Cards */}
                    <div
                        className={`${styles.badgesRow} ${isVisible ? styles.animateReveal6 : styles.hiddenState
                            }`}
                    >
                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeEmerald}`}>
                                <GraduationCap size={22} />
                            </div>
                            <div className={styles.badgeText}>
                                <h4 className={styles.badgeTitle}>Quality Education</h4>
                                <p className={styles.badgeSub}>
                                    Industry-aligned curriculum &amp; expert Ph.D faculty
                                </p>
                            </div>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themePurple}`}>
                                <Award size={22} />
                            </div>
                            <div className={styles.badgeText}>
                                <h4 className={styles.badgeTitle}>Approved &amp; Recognized</h4>
                                <p className={styles.badgeSub}>
                                    Approved by AICTE and affiliated to JNTUA
                                </p>
                            </div>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeAmber}`}>
                                <Users size={22} />
                            </div>
                            <div className={styles.badgeText}>
                                <h4 className={styles.badgeTitle}>Student Centric</h4>
                                <p className={styles.badgeSub}>
                                    Holistic development &amp; dedicated career mentorship
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Slide Indicators */}
                <div className={styles.dotsWrapper}>
                    {admissionsHeroImages.map((_, dotIdx) => (
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