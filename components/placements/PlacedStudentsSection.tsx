'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    GraduationCap,
    Building2,
    BadgePercent,
    Calendar,
    CheckCircle2,
    Briefcase,
} from 'lucide-react';
import styles from './PlacedStudentsSection.module.css';

interface PlacedStudent {
    name: string;
    course: string;
    batchYear: string;
    role: string;
    company: string;
    packageLPA: string;
    location: string;
    quote: string;
    imageUrl: string;
}

const allPlacedStudents: PlacedStudent[] = [
    {
        name: 'P. Sai Praneeth',
        course: 'Pharm.D',
        batchYear: 'Passed Out: 2025',
        role: 'Clinical Pharmacotherapy Associate',
        company: 'Novartis Global Health',
        packageLPA: '₹8.5 LPA',
        location: 'Hyderabad, India',
        quote:
            "The hands-on hospital ward rounds and clinical case study rigor at Jagan's College of Pharmacy gave me an unbeatable edge during corporate clinical interviews.",
        imageUrl:
            'https://images.unsplash.com/photo-1618052163124-7ef86a4eb8d7?q=80&w=900&auto=format&fit=crop',
    },
    {
        name: 'K. Divya Sree',
        course: 'B.Pharm',
        batchYear: 'Passed Out: 2025',
        role: 'Drug Safety & Pharmacovigilance Officer',
        company: "Dr. Reddy's Laboratories",
        packageLPA: '₹6.2 LPA',
        location: 'Vizag, India',
        quote:
            'The comprehensive mock technical interviews arranged by the placement cell transformed my analytical confidence and helped me secure multiple offers.',
        imageUrl:
            'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=900&auto=format&fit=crop',
    },
    {
        name: 'M. Harish Kumar',
        course: 'M. Pharm (Pharmaceutics)',
        batchYear: 'Passed Out: 2024',
        role: 'Formulation R&D Executive',
        company: 'Sun Pharma Advanced Research',
        packageLPA: '₹7.8 LPA',
        location: 'Vadodara, India',
        quote:
            "Working in the college's modern formulation and instrumentation labs gave me real-time expertise with HPLC, spectroscopy, and dosage formulation pilot units.",
        imageUrl:
            'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop',
    },
];

const rowDelays = [styles.rowDelay1, styles.rowDelay2, styles.rowDelay3];

export default function PlacedStudentsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
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
        <section ref={sectionRef} className={styles.section}>
            {/* Ambient Parallax Lighting Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Header Block */}
                <div
                    className={`${styles.headerBlock} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <span className={styles.eyebrow}>Campus Success Stories</span>
                    <h2 className={styles.title}>Recently Placed Students</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our graduates lead from the front, securing key positions across global clinical pharmacology units, R&amp;D centers, and pharmaceutical multinationals.
                    </p>
                </div>

                {/* Alternating Zigzag Rows */}
                <div className={styles.rowsContainer}>
                    {allPlacedStudents.map((student, index) => {
                        const isReversed = index % 2 === 1;
                        const isHeroTheme = index % 2 === 0;

                        return (
                            <div
                                key={student.name}
                                className={`${styles.studentRow} ${isHeroTheme ? styles.cardHeroTheme : styles.cardLight
                                    } ${isReversed ? styles.studentRowReverse : ''} ${isVisible
                                        ? rowDelays[index % rowDelays.length]
                                        : styles.hiddenState
                                    }`}
                            >
                                {/* Information Column */}
                                <div className={styles.infoWrapper}>
                                    <div className={styles.badgeRow}>
                                        <span className={styles.courseBadge}>
                                            <GraduationCap size={13} /> {student.course}
                                        </span>
                                        <span className={styles.yearBadge}>
                                            <Calendar size={13} /> {student.batchYear}
                                        </span>
                                    </div>

                                    <h3 className={styles.studentName}>{student.name}</h3>

                                    <div className={styles.roleText}>
                                        <Briefcase size={16} />
                                        <span>{student.role}</span>
                                    </div>

                                    {/* 4-Item Parameters Grid */}
                                    <div className={styles.detailGrid}>
                                        <div className={styles.detailItem}>
                                            <span className={styles.detailLabel}>
                                                <Building2 size={12} /> Recruiting Company
                                            </span>
                                            <span className={styles.detailValue}>
                                                {student.company}
                                            </span>
                                        </div>

                                        <div className={styles.detailItem}>
                                            <span className={styles.detailLabel}>
                                                <BadgePercent size={12} /> Offered Package
                                            </span>
                                            <span
                                                className={`${styles.detailValue} ${styles.packageHighlight}`}
                                            >
                                                {student.packageLPA}
                                            </span>
                                        </div>

                                        <div className={styles.detailItem}>
                                            <span className={styles.detailLabel}>Work Location</span>
                                            <span className={styles.detailValue}>
                                                {student.location}
                                            </span>
                                        </div>

                                        <div className={styles.detailItem}>
                                            <span className={styles.detailLabel}>Placement Type</span>
                                            <span className={styles.detailValue}>
                                                Campus Recruitment
                                            </span>
                                        </div>
                                    </div>

                                    {/* Testimonial Quote */}
                                    <div className={styles.quoteBlock}>
                                        <blockquote>&ldquo;{student.quote}&rdquo;</blockquote>
                                    </div>
                                </div>

                                {/* Individual Student Portrait */}
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={student.imageUrl}
                                        alt={`${student.name} - ${student.role}`}
                                        loading="lazy"
                                    />
                                    <div className={styles.verifiedPill}>
                                        <CheckCircle2 size={13} />
                                        Verified Offer
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