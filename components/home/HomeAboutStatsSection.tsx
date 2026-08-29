'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    Eye,
    Target,
    GraduationCap,
    Users,
    UserCheck,
    TrendingUp,
} from 'lucide-react';
import styles from './HomeAboutStatsSection.module.css';

// Reusable smooth counter hook with cubic-bezier easing
function useAnimatedCounter(
    target: number,
    isVisible: boolean,
    duration = 1450
) {
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

export default function HomeAboutStatsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Animated number counters from 0 to targets
    const yearsCount = useAnimatedCounter(20, isVisible, 1400);
    const studentsCount = useAnimatedCounter(2000, isVisible, 1600);
    const facultyCount = useAnimatedCounter(50, isVisible, 1450);
    const bpharmPlacementCount = useAnimatedCounter(88, isVisible, 1500);
    const pharmdPlacementCount = useAnimatedCounter(98, isVisible, 1550);

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

    // Ultra-slow fluid linear-interpolated (lerp 0.035) parallax animation
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
        <section ref={sectionRef} className={styles.section}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Left Column: Vision, Mission & Action */}
                <div className={styles.leftCol}>
                    <span
                        className={`${styles.eyebrow} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                            }`}
                    >
                        About Us
                    </span>

                    <h2
                        className={`${styles.title} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                            }`}
                    >
                        Shaping Careers. <br />
                        Impacting Lives.
                    </h2>

                    <div className={styles.vmContainer}>
                        <div
                            className={`${styles.vmCard} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                                }`}
                        >
                            <div className={styles.vmHeader}>
                                <Eye size={18} className={styles.vmIcon} />
                                <h4 className={styles.vmTitle}>Our Vision</h4>
                            </div>
                            <p className={styles.vmText}>
                                To be a premier institution in pharmaceutical education, research and innovation, fostering skilled professionals committed to ethical practice and advancing global healthcare through knowledge, compassion and excellence

                            </p>
                        </div>

                        <div
                            className={`${styles.vmCard} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                                }`}
                        >
                            <div className={styles.vmHeader}>
                                <Target size={18} className={styles.vmIcon} />
                                <h4 className={styles.vmTitle}>Our Mission</h4>
                            </div>
                            <p className={styles.vmText}>
                                To educate and empower future pharmacists with cutting edge knowledge, ethical values, practical skills, fostering innovation, research, and community service to advance healthcare and improve lives.
                            </p>
                        </div>
                    </div>

                    <div
                        className={
                            isVisible ? styles.animateReveal5 : styles.hiddenState
                        }
                    >
                        <Link href="/about" className={styles.btnAbout}>
                            <span>Know More About Us</span>
                            <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>

                {/* Right Column: Key Performance & Placement Metrics */}
                <div className={styles.statsGrid}>
                    <div className={styles.colParallaxLeft}>
                        <div
                            className={`${styles.statCard} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                                }`}
                        >
                            <div className={styles.statNumber}>{yearsCount}+</div>
                            <div className={styles.statLabel}>Years of Excellence</div>
                            <GraduationCap size={22} className={styles.statIcon} />
                        </div>

                        <div
                            className={`${styles.statCard} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                                }`}
                        >
                            <div className={styles.statNumber}>{studentsCount}+</div>
                            <div className={styles.statLabel}>Students Enrolled</div>
                            <Users size={22} className={styles.statIcon} />
                        </div>
                    </div>

                    <div className={styles.colParallaxRight}>
                        <div
                            className={`${styles.statCard} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                                }`}
                        >
                            <div className={styles.statNumber}>{facultyCount}+</div>
                            <div className={styles.statLabel}>Expert Faculty</div>
                            <UserCheck size={22} className={styles.statIcon} />
                        </div>

                        <Link
                            href="/placements"
                            className={`${styles.statCard} ${styles.placementCardLink} ${isVisible ? styles.animateReveal5 : styles.hiddenState
                                }`}
                            title="Click to view full Placements & Recruitment details"
                        >
                            <div className={styles.placementNumbers}>
                                <div className={styles.placementItem}>
                                    <span className={styles.placementPercent}>
                                        {bpharmPlacementCount}%
                                    </span>
                                    <span className={styles.placementTag}>B. Pharm</span>
                                </div>
                                <div className={styles.placementDivider} />
                                <div className={styles.placementItem}>
                                    <span className={styles.placementPercent}>
                                        {pharmdPlacementCount}%
                                    </span>
                                    <span className={styles.placementTag}>Pharm.D</span>
                                </div>
                            </div>
                            <div className={styles.statLabel}>Placement Assistance</div>
                            <TrendingUp size={22} className={styles.statIcon} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}