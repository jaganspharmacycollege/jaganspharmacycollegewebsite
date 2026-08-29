'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, CheckCircle2 } from 'lucide-react';
import styles from './AboutCollegeSection.module.css';

const campusHeroImages = [
    'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&q=80',
];

// Reusable smooth counter hook with cubic-bezier easing
function useAnimatedCounter(target: number, isVisible: boolean, duration: number = 1450) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) {
            setCount(0);
            return;
        }

        let startTimestamp: number | null = null;
        let animationFrameId: number;

        const easeOutCubic = (t: number): number => {
            return 1 - Math.pow(1 - t, 3);
        };

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easedProgress = easeOutCubic(progress);

            setCount(Math.floor(easedProgress * target));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };

        animationFrameId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrameId);
    }, [target, isVisible, duration]);

    return count;
}

export default function AboutCollegeSection() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const bgSliderRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    const yearsCount = useAnimatedCounter(15, isVisible, 1400);
    const alumniCount = useAnimatedCounter(3500, isVisible, 1600);

    // Auto-cycling slider with 5000ms duration
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % campusHeroImages.length);
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

                if (bgSliderRef.current) {
                    bgSliderRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.04
                        }px, 0) scale(1.04)`;
                }
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
        <section ref={sectionRef} className={styles.section}>
            {/* Parallax Background Auto-Cycling Slider */}
            <div ref={bgSliderRef} className={styles.bgSlider}>
                {campusHeroImages.map((src, index) => (
                    <div
                        key={index}
                        className={`${styles.bgSlide} ${index === currentIdx ? styles.activeSlide : styles.inactiveSlide
                            }`}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}
            </div>

            {/* Clear Gradient Overlay */}
            <div className={styles.overlay} />

            {/* Ambient Parallax Radial Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <span
                        className={`${styles.eyebrow} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                            }`}
                    >
                        About Our Institution
                    </span>

                    <h2
                        className={`${styles.title} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                            }`}
                    >
                        Excellence in Pharmacy <br />
                        &amp; Healthcare Education
                    </h2>

                    <div
                        className={`${styles.accentLine} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                            }`}
                    />

                    <p
                        className={`${styles.description} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                            }`}
                    >
                        Established with a vision to deliver excellence in pharmacy education and scientific innovation, Jagan&apos;s College of Pharmacy provides students with comprehensive clinical knowledge, cutting-edge laboratory facilities, and experiential research opportunities.
                    </p>

                    <p
                        className={`${styles.description} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                            }`}
                    >
                        Our sprawling green campus is equipped with smart classrooms, advanced analytical instruments, an extensive digital library, and dedicated spaces designed to prepare future-ready pharmacists and healthcare leaders.
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
                            <span>Multi-Specialty Hospital Postings</span>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div
                        className={`${styles.statsGrid} ${isVisible ? styles.animateReveal6 : styles.hiddenState
                            }`}
                    >
                        <div className={styles.statCard}>
                            <div className={styles.statIconBadge}>
                                <Award size={22} />
                            </div>
                            <div>
                                <div className={styles.statVal}>{yearsCount}+</div>
                                <div className={styles.statLabel}>
                                    Years of Educational Excellence
                                </div>
                            </div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statIconBadge}>
                                <Users size={22} />
                            </div>
                            <div>
                                <div className={styles.statVal}>{alumniCount}+</div>
                                <div className={styles.statLabel}>
                                    Graduated Pharmacists
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div
                    className={`${styles.dotsWrapper} ${isVisible ? styles.animateReveal6 : styles.hiddenState
                        }`}
                >
                    {campusHeroImages.map((_, dotIdx) => (
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