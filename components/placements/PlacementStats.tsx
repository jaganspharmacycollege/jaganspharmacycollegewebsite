'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './PlacementStats.module.css';

const stats = [
    {
        targetValue: 92,
        prefix: '',
        suffix: '%+',
        label: 'Placement Rate',
        desc: 'Across B. Pharm, Pharm.D & M.Pharm',
    },
    {
        targetValue: 60,
        prefix: '',
        suffix: '+',
        label: 'Recruiting Companies',
        desc: 'MNCs, Hospitals & R&D Units',
    },
    {
        targetValue: 8.5,
        prefix: '₹',
        suffix: ' LPA',
        decimals: 1,
        label: 'Highest Package',
        desc: 'Offered in R&D and Clinical Research',
    },
    {
        targetValue: 4.2,
        prefix: '₹',
        suffix: ' LPA',
        decimals: 1,
        label: 'Average Package',
        desc: 'Across core pharmaceutical branches',
    },
];

const statDelays = [
    styles.statDelay1,
    styles.statDelay2,
    styles.statDelay3,
    styles.statDelay4,
];

export default function PlacementStats() {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // Repeating scroll-triggered entrance detection & counter trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    // Trigger number increment animation from 0
                    const duration = 2000; // 2 seconds animation duration
                    const startTime = performance.now();

                    const animateNumbers = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease-out cubic progression for smooth deceleration
                        const easeProgress = 1 - Math.pow(1 - progress, 3);

                        setCounts(
                            stats.map((s) => Number((s.targetValue * easeProgress).toFixed(s.decimals || 0)))
                        );

                        if (progress < 1) {
                            requestAnimationFrame(animateNumbers);
                        }
                    };

                    requestAnimationFrame(animateNumbers);
                } else {
                    // Reset when out of view so it repeats on re-entry
                    setCounts(stats.map(() => 0));
                }
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
            {/* Ambient Parallax Lighting Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div className={styles.grid}>
                    {stats.map((s, idx) => (
                        <div
                            key={idx}
                            className={`${styles.statCard} ${isVisible ? statDelays[idx % statDelays.length] : styles.hiddenState
                                }`}
                        >
                            <div className={styles.statNumber}>
                                {s.prefix}
                                {s.decimals ? counts[idx].toFixed(s.decimals) : Math.round(counts[idx])}
                                {s.suffix}
                            </div>
                            <div className={styles.statLabel}>{s.label}</div>
                            <p className={styles.statDesc}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}