'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, Beaker, UserCheck, GraduationCap } from 'lucide-react';
import styles from './CoursesHero.module.css';

const courseSlides = [
    {
        program: 'B. Pharmacy',
        duration: '4 Years Undergraduate',
        focus: 'Pharmaceutical Chemistry, Analysis & Formulation Science',
        // Laboratory formulation, glassware & testing
        image:
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=85',
    },
    {
        program: 'Pharm. D',
        duration: '6 Years Doctoral Program',
        focus: 'Clinical Pharmacy, Hospital Ward Rounds & Patient Care',
        // Clinical setting, doctors/pharmacists consulting
        image:
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=85',
    },
    {
        program: 'M. Pharmacy',
        duration: '2 Years Postgraduate',
        focus: 'Advanced Drug Delivery Systems, Pharmacology & Research',
        // High-tech micro-pipetting and biochemical research
        image:
            'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2000&q=85',
    },
];

export default function CoursesHero() {
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % courseSlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.section}>
            {/* 100% Full Cover Background Slides */}
            <div className={styles.bgSlider}>
                {courseSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`${styles.bgSlide} ${idx === currentIdx ? styles.activeSlide : styles.inactiveSlide
                            }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
            </div>

            {/* Deep Vignette Overlay with Zero Light Bleed */}
            <div className={styles.overlay} />

            {/* Main Content Container */}
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <span className={styles.eyebrow}>Our Academic Courses</span>
                    <h1 className={styles.title}>
                        Programs Designed <br />
                        for Your Future
                    </h1>
                    <div className={styles.accentLine} />

                    <p className={styles.description}>
                        Explore our industry-aligned pharmacy programs crafted to build comprehensive clinical knowledge,
                        advanced research skills, and successful careers in healthcare and beyond.
                    </p>

                    {/* Active Course Banner */}
                    <div className={styles.currentCourseBadge}>
                        <GraduationCap size={18} className={styles.badgeIcon} />
                        <span className={styles.badgeDuration}>{courseSlides[currentIdx].duration}</span>
                        <span className={styles.badgeProgram}>{courseSlides[currentIdx].program}</span>
                        <span className={styles.badgeFocus}>&bull; {courseSlides[currentIdx].focus}</span>
                    </div>

                    {/* 3 Pillar Feature Cards */}
                    <div className={styles.badgesRow}>
                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeEmerald}`}>
                                <BookOpen size={20} />
                            </div>
                            <div className={styles.badgeText}>
                                <h4 className={styles.badgeTitle}>Industry Oriented</h4>
                                <p className={styles.badgeSub}>Designed with corporate standards</p>
                            </div>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themePurple}`}>
                                <Beaker size={20} />
                            </div>
                            <div className={styles.badgeText}>
                                <h4 className={styles.badgeTitle}>Practical Learning</h4>
                                <p className={styles.badgeSub}>Hands-on state-of-the-art labs</p>
                            </div>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeAmber}`}>
                                <UserCheck size={20} />
                            </div>
                            <div className={styles.badgeText}>
                                <h4 className={styles.badgeTitle}>Career Guidance</h4>
                                <p className={styles.badgeSub}>Hospital postings &amp; drives</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Indicators */}
                <div className={styles.dotsWrapper}>
                    {courseSlides.map((_, dotIdx) => (
                        <button
                            key={dotIdx}
                            onClick={() => setCurrentIdx(dotIdx)}
                            className={`${styles.dot} ${dotIdx === currentIdx ? styles.activeDot : ''}`}
                            aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}