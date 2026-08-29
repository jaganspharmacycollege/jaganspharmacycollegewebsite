'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    FlaskConical,
    Stethoscope,
    Sparkles,
    GraduationCap,
} from 'lucide-react';
import styles from './CoursesOfferedGrid.module.css';

const courses = [
    {
        icon: FlaskConical,
        title: 'B. Pharmacy',
        level: 'Undergraduate Program',
        duration: '4 Years (8 Semesters)',
        eligibility: '10+2 with PCB/PCM or D. Pharm',
        description:
            'A foundational undergraduate degree covering medicinal chemistry, pharmacology, pharmaceutical engineering, and formulation design.',
        image:
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
        href: '/courses/b-pharm',
        iconTheme: styles.iconThemeEmerald,
        animClass: styles.animDelay1,
    },
    {
        icon: Stethoscope,
        title: 'Pharm. D',
        level: 'Doctoral Clinical Degree',
        duration: '6 Years (5 Yrs + 1 Yr Internship)',
        eligibility: '10+2 with PCB/PCM or B. Pharm (Post Baccalaureate)',
        description:
            'A patient-centric professional doctorate combining intensive clinical pharmacology, bedside ward rounds, and hospital rotations.',
        image:
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
        href: '/courses/pharm-d',
        iconTheme: styles.iconThemePurple,
        animClass: styles.animDelay2,
    },
    {
        icon: Sparkles,
        title: 'M. Pharmacy',
        level: 'Postgraduate Master Degree',
        duration: '2 Years (4 Semesters)',
        eligibility: 'B. Pharm with valid GPAT / AP-PGECET score',
        description:
            'Advanced specialized research in Pharmaceutics, Pharmacology, and Novel Drug Delivery Systems with dissertations.',
        image:
            'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
        href: '/courses/m-pharm',
        iconTheme: styles.iconThemeAmber,
        animClass: styles.animDelay3,
    },
];

export default function CoursesOfferedGrid() {
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
                {/* Section Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <span className={styles.eyebrow}>Our Academic Spectrum</span>
                    <h2 className={styles.title}>Programs Offered</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.subText}>
                        Industry-aligned pharmaceutical curricula approved by statutory authorities and affiliated to JNTUA.
                    </p>
                </div>

                {/* 3 Main Course Cards Grid */}
                <div className={styles.grid}>
                    {courses.map((course, idx) => {
                        const Icon = course.icon;
                        return (
                            <div
                                key={idx}
                                className={`${styles.card} ${isVisible ? course.animClass : styles.hiddenState
                                    }`}
                            >
                                {/* Image Showcase */}
                                <div className={styles.cardImageWrapper}>
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className={styles.cardImage}
                                    />
                                    <div className={styles.cardImageOverlay} />
                                    <span className={styles.levelTag}>{course.level}</span>
                                </div>

                                {/* Card Body */}
                                <div className={styles.cardBody}>
                                    <div className={styles.topHeaderRow}>
                                        <div className={`${styles.iconBadge} ${course.iconTheme}`}>
                                            <Icon size={24} strokeWidth={2.2} />
                                        </div>
                                        <div>
                                            <h3 className={styles.courseTitle}>{course.title}</h3>
                                            <p className={styles.duration}>{course.duration}</p>
                                        </div>
                                    </div>

                                    <p className={styles.description}>{course.description}</p>

                                    <div className={styles.eligibilityBox}>
                                        <GraduationCap
                                            size={15}
                                            className={styles.eligibilityIcon}
                                        />
                                        <span>
                                            <strong>Eligibility:</strong> {course.eligibility}
                                        </span>
                                    </div>

                                    {/* Call-to-action button */}
                                    <div className={styles.cardFooter}>
                                        <Link href={course.href} className={styles.learnMoreBtn}>
                                            <span>Explore Program &amp; Syllabus</span>
                                            <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}