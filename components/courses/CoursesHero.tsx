'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Beaker, UserCheck, GraduationCap } from 'lucide-react';
import styles from './CoursesHero.module.css';

const courseSlides = [
    {
        program: 'B. Pharmacy',
        duration: '4 Years Undergraduate',
        focus: 'Pharmaceutical Chemistry, Analysis & Formulation Science',
        image:
            '/assets/courses/pharmd1.png',
    },
    {
        program: 'Pharm. D',
        duration: '6 Years Doctoral Program',
        focus: 'Clinical Pharmacy, Hospital Ward Rounds & Patient Care',
        image:
            '/assets/Infra/Pharmaceutics_1.png',
    },
    {
        program: 'M. Pharmacy',
        duration: '2 Years Postgraduate',
        focus: 'Advanced Drug Delivery Systems, Pharmacology & Research',
        image:
            '/assets/Infra/Pharmaceutical_Chemistry_1.png',
    },
];

export default function CoursesHero() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const bgSliderRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // 5000ms auto-cycling slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % courseSlides.length);
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

                if (bgSliderRef.current) {
                    bgSliderRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.04
                        }px, 0) scale(1.05)`;
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
                {courseSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`${styles.bgSlide} ${idx === currentIdx ? styles.activeSlide : styles.inactiveSlide
                            }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
            </div>

            {/* Deep Vignette Overlay */}
            <div className={styles.overlay} />

            {/* Ambient Parallax Lighting Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            {/* Main Content Container */}
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <span
                        className={`${styles.eyebrow} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                            }`}
                    >
                        Our Academic Courses
                    </span>

                    <h1
                        className={`${styles.title} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                            }`}
                    >
                        Programs Designed <br />
                        for Your Future
                    </h1>

                    <div
                        className={`${styles.accentLine} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                            }`}
                    />

                    <p
                        className={`${styles.description} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                            }`}
                    >
                        Explore our industry-aligned pharmacy programs crafted to build comprehensive clinical knowledge, advanced research skills, and successful careers in healthcare and beyond.
                    </p>

                    {/* Active Course Banner */}
                    <div
                        className={`${styles.currentCourseBadge} ${isVisible ? styles.animateReveal5 : styles.hiddenState
                            }`}
                    >
                        <GraduationCap size={18} className={styles.badgeIcon} />
                        <span className={styles.badgeDuration}>
                            {courseSlides[currentIdx].duration}
                        </span>
                        <span className={styles.badgeProgram}>
                            {courseSlides[currentIdx].program}
                        </span>
                        <span className={styles.badgeFocus}>
                            &bull; {courseSlides[currentIdx].focus}
                        </span>
                    </div>

                    {/* 3 Pillar Feature Cards */}
                    <div
                        className={`${styles.badgesRow} ${isVisible ? styles.animateReveal6 : styles.hiddenState
                            }`}
                    >
                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeEmerald}`}>
                                <BookOpen size={20} />
                            </div>
                            <div className={styles.badgeText}>
                                <h4 className={styles.badgeTitle}>Industry Oriented</h4>
                                <p className={styles.badgeSub}>
                                    Designed with corporate standards
                                </p>
                            </div>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themePurple}`}>
                                <Beaker size={20} />
                            </div>
                            <div className={styles.badgeText}>
                                <h4 className={styles.badgeTitle}>Practical Learning</h4>
                                <p className={styles.badgeSub}>
                                    Hands-on state-of-the-art labs
                                </p>
                            </div>
                        </div>

                        <div className={styles.badgeCard}>
                            <div className={`${styles.iconCircle} ${styles.themeAmber}`}>
                                <UserCheck size={20} />
                            </div>
                            <div className={styles.badgeText}>
                                <h4 className={styles.badgeTitle}>Career Guidance</h4>
                                <p className={styles.badgeSub}>
                                    Hospital postings &amp; drives
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Indicators */}
                <div
                    className={`${styles.dotsWrapper} ${isVisible ? styles.animateReveal6 : styles.hiddenState
                        }`}
                >
                    {courseSlides.map((_, dotIdx) => (
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