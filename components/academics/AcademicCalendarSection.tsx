'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    CalendarDays,
    Sparkles,
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Clock,
} from 'lucide-react';
import styles from './AcademicCalendarSection.module.css';

const calendarHighlights = [
    {
        title: 'Odd & Even Semesters',
        desc: 'Instructional periods, practical schedules, and midterm internal windows.',
        icon: Clock,
    },
    {
        title: 'University Examinations',
        desc: 'JNTUA board practicals, theory examinations, and end-sem assessments.',
        icon: CheckCircle2,
    },
    {
        title: 'Institutional Holidays',
        desc: 'Official semester breaks, state holidays, and regional festive dates.',
        icon: BookOpen,
    },
];

export default function AcademicCalendarSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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
                {/* Section Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>University Schedule</span>
                    </div>
                    <h2 className={styles.title}>Academic Calendar</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Official schedule aligned with Jawaharlal Nehru Technological University Anantapur (JNTUA) academic regulations for the current academic session.
                    </p>
                </div>

                {/* Overview Banner Card without Table */}
                <div
                    className={`${styles.overviewCard} ${isVisible ? styles.animateCard : styles.hiddenState
                        }`}
                >
                    <div className={styles.cardHeaderArea}>
                        <div className={styles.iconCircle}>
                            <CalendarDays size={28} className={styles.mainIcon} />
                        </div>
                        <div className={styles.cardHeaderText}>
                            <span className={styles.sessionBadge}>Session 2026-2027</span>
                            <h3 className={styles.cardTitle}>University Academic Schedules &amp; Circulars</h3>
                            <p className={styles.cardSub}>
                                Explore comprehensive timetables, examination windows, and semester dates for B. Pharm, Pharm.D, and M. Pharm programs.
                            </p>
                        </div>
                    </div>

                    {/* 3 Pillars Grid */}
                    <div className={styles.highlightsGrid}>
                        {calendarHighlights.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className={`${styles.highlightItem} ${isVisible
                                            ? idx === 0
                                                ? styles.animDelay1
                                                : idx === 1
                                                    ? styles.animDelay2
                                                    : styles.animDelay3
                                            : styles.hiddenState
                                        }`}
                                >
                                    <div className={styles.miniIconBox}>
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <h4 className={styles.highlightTitle}>{item.title}</h4>
                                        <p className={styles.highlightDesc}>{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Direct Button Link */}
                    <div
                        className={`${styles.actionRow} ${isVisible ? styles.animDelay4 : styles.hiddenState
                            }`}
                    >
                        <Link href="/academics/academic-calendar" className={styles.ctaButton}>
                            <span>View Full Academic Calendar</span>
                            <ArrowRight size={16} className={styles.ctaArrow} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}