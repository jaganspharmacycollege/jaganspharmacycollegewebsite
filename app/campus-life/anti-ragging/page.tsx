'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    ShieldAlert,
    UserCheck,
    Video,
    PhoneCall,
    Lock,
} from 'lucide-react';
import styles from './AntiRaggingPage.module.css';

const raggingMeasures = [
    {
        title: 'Anti-Ragging Committee & Flying Squad',
        desc: 'Active squad conducting 24/7 surprise vigilance checks across campus grounds, laboratories, residential hostels, and student bus transit routes.',
        icon: UserCheck,
        tag: '24/7 Vigilance',
        theme: styles.themeEmerald,
        animClass: styles.animDelay1,
    },
    {
        title: 'Comprehensive CCTV Surveillance',
        desc: '24/7 high-definition IP camera monitoring throughout all academic corridors, campus gates, laboratory wings, dining mess halls, and common recreation areas.',
        icon: Video,
        tag: 'Campus Security',
        theme: styles.themeAmber,
        animClass: styles.animDelay2,
    },
    {
        title: 'Emergency Helplines & Rapid Response',
        desc: 'National Anti-Ragging Helpline (Toll-Free): 1800-180-5522 | Campus Internal Emergency Helpline: +91 861 2345678.',
        icon: PhoneCall,
        tag: 'Emergency Support',
        theme: styles.themePurple,
        isHelpline: true,
        animClass: styles.animDelay3,
    },
];

export default function AntiRaggingPage() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

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
                        <ShieldAlert size={14} className={styles.eyebrowIcon} />
                        <span>Safe &amp; Secure Campus</span>
                    </div>
                    <h1 className={styles.title}>Anti-Ragging Policy &amp; Safety</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Jagan&apos;s College of Pharmacy strictly enforces a Zero-Tolerance Policy toward ragging in compliance with UGC, statutory guidelines, and Supreme Court directives.
                    </p>
                </div>

                {/* Policy Zero-Tolerance Banner */}
                <div
                    className={`${styles.policyBanner} ${isVisible ? styles.animateBanner : styles.hiddenState
                        }`}
                >
                    <div className={styles.policyIconBox}>
                        <Lock size={22} />
                    </div>
                    <div className={styles.policyText}>
                        <h3 className={styles.policyTitle}>Strict Zero-Tolerance Campus</h3>
                        <p className={styles.policyDesc}>
                            Ragging in any form—physical, verbal, or mental—is strictly prohibited. Any violation attracts immediate suspension and mandatory statutory legal action.
                        </p>
                    </div>
                </div>

                {/* 3 Separate Measures Cards Grid */}
                <div className={styles.grid}>
                    {raggingMeasures.map((measure, idx) => {
                        const Icon = measure.icon;
                        return (
                            <div
                                key={idx}
                                className={`${styles.card} ${measure.isHelpline ? styles.helplineCard : ''
                                    } ${isVisible ? measure.animClass : styles.hiddenState}`}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${measure.theme}`}>
                                        <Icon size={22} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.cardTag}>{measure.tag}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{measure.title}</h3>
                                <p className={styles.cardDesc}>{measure.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}