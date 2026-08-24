'use client';

import React from 'react';
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
        desc: 'Instructional periods, practical schedules, and midterm internal windows[cite: 18].',
        icon: Clock,
    },
    {
        title: 'University Examinations',
        desc: 'JNTUA board practicals, theory examinations, and end-sem assessments[cite: 18].',
        icon: CheckCircle2,
    },
    {
        title: 'Institutional Holidays',
        desc: 'Official semester breaks, state holidays, and regional festive dates[cite: 18].',
        icon: BookOpen,
    },
];

export default function AcademicCalendarSection() {
    return (
        <section className={styles.section}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>University Schedule</span>
                    </div>
                    <h2 className={styles.title}>Academic Calendar</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Official schedule aligned with Jawaharlal Nehru Technological University Anantapur (JNTUA) academic
                        regulations for the current academic session[cite: 18].
                    </p>
                </div>

                {/* Overview Banner Card without Table */}
                <div className={styles.overviewCard}>
                    <div className={styles.cardHeaderArea}>
                        <div className={styles.iconCircle}>
                            <CalendarDays size={28} className={styles.mainIcon} />
                        </div>
                        <div className={styles.cardHeaderText}>
                            <span className={styles.sessionBadge}>Session 2026–2027</span>
                            <h3 className={styles.cardTitle}>University Academic Schedules &amp; Circulars</h3>
                            <p className={styles.cardSub}>
                                Explore comprehensive timetables, examination windows, and semester dates for B.Pharm, Pharm.D, and M.Pharm programs[cite: 18].
                            </p>
                        </div>
                    </div>

                    {/* 3 Pillars Grid */}
                    <div className={styles.highlightsGrid}>
                        {calendarHighlights.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className={styles.highlightItem}>
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
                    <div className={styles.actionRow}>
                        <Link
                            href="/academics/academic-calendar"
                            className={styles.ctaButton}
                        >
                            <span>View Full Academic Calendar</span>
                            <ArrowRight size={16} className={styles.ctaArrow} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}