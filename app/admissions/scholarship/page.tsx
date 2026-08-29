'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Building2, Sparkles, Award, GraduationCap } from 'lucide-react';
import styles from './ScholarshipPage.module.css';

const schemes = [
    {
        icon: Building2,
        badgeText: 'State Scheme',
        title: 'State Government Fee Reimbursement (JVD Scheme)',
        desc: 'Full tuition fee reimbursement and post-matric financial assistance provided by the Government of Andhra Pradesh for eligible SC, ST, BC, EBC, Minority, and Kapu students.',
        theme: styles.themeEmerald,
        animClass: styles.animDelay1,
    },
    {
        icon: Sparkles,
        badgeText: 'National Fellowship',
        title: 'GPAT National Fellowship (For M.Pharm)',
        desc: 'Monthly stipend of ₹12,400 awarded by AICTE / Ministry of Education to GPAT-qualified candidates admitted into regular postgraduate programs.',
        theme: styles.themeAmber,
        animClass: styles.animDelay2,
    },
    {
        icon: Award,
        badgeText: 'Trust Scholarship',
        title: 'Merit-Cum-Means Institutional Scholarships',
        desc: 'Special tuition fee concessions provided by the Jagan Educational Trust for top academic rank holders, sports achievers, and economically underprivileged students.',
        theme: styles.themePurple,
        animClass: styles.animDelay3,
    },
];

export default function ScholarshipPage() {
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
                        <GraduationCap size={15} className={styles.eyebrowIcon} />
                        <span>Financial Assistance</span>
                    </div>
                    <h1 className={styles.title}>Scholarships &amp; Financial Aid</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        We facilitate multiple government welfare programs and trust-backed institutional scholarships to ensure that financial constraints never hinder quality pharmaceutical education.
                    </p>
                </div>

                {/* 3-Card Responsive Grid */}
                <div className={styles.grid}>
                    {schemes.map((scheme, idx) => {
                        const Icon = scheme.icon;
                        return (
                            <div
                                key={idx}
                                className={`${styles.card} ${isVisible ? scheme.animClass : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${scheme.theme}`}>
                                        <Icon size={24} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.badgePill}>{scheme.badgeText}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{scheme.title}</h3>
                                <p className={styles.cardDesc}>{scheme.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}