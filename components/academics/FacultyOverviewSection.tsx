'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    GraduationCap,
    Sparkles,
    ArrowRight,
    Award,
    BookOpenCheck,
} from 'lucide-react';
import styles from './FacultyOverviewSection.module.css';

const facultyMembers = [
    {
        name: 'Dr. K. Srinivasulu',
        role: 'Principal & Professor',
        dept: 'Pharmaceutics',
        exp: '20+ Years Exp | Ph.D',
        theme: styles.themeEmerald,
        animClass: styles.animDelay1,
    },
    {
        name: 'Dr. M. Venkata Ramana',
        role: 'Professor & HoD',
        dept: 'Pharmaceutical Analysis',
        exp: '16+ Years Exp | Ph.D',
        theme: styles.themeAmber,
        animClass: styles.animDelay2,
    },
    {
        name: 'Dr. S. Hariprasad',
        role: 'Professor & HoD',
        dept: 'Pharmacology',
        exp: '14+ Years Exp | Ph.D',
        theme: styles.themePurple,
        animClass: styles.animDelay3,
    },
    {
        name: 'Dr. P. Anitha',
        role: 'Associate Professor',
        dept: 'Pharmacy Practice',
        exp: '11+ Years Exp | Pharm.D',
        theme: styles.themeTeal,
        animClass: styles.animDelay4,
    },
];

export default function FacultyOverviewSection() {
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
                        <span>Mentorship &amp; Research</span>
                    </div>
                    <h2 className={styles.title}>Faculty &amp; Research Guides</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our faculty members possess doctoral credentials, numerous Scopus-indexed research publications, and patents in pharmaceutical science.
                    </p>
                </div>

                {/* 4 Faculty Cards Responsive Grid */}
                <div className={styles.grid}>
                    {facultyMembers.map((fac, idx) => (
                        <div
                            key={idx}
                            className={`${styles.card} ${isVisible ? fac.animClass : styles.hiddenState
                                }`}
                        >
                            <div className={styles.cardHeader}>
                                <div className={`${styles.avatarSquircle} ${fac.theme}`}>
                                    <GraduationCap size={22} strokeWidth={2.2} />
                                </div>
                                <span className={styles.expBadge}>
                                    {fac.exp.split('|')[0].trim()}
                                </span>
                            </div>

                            <div className={styles.cardBody}>
                                <h3 className={styles.facultyName}>{fac.name}</h3>
                                <p className={styles.facultyRole}>{fac.role}</p>

                                <div className={styles.deptBadge}>
                                    <BookOpenCheck size={13} className={styles.deptIcon} />
                                    <span>{fac.dept}</span>
                                </div>

                                <div className={styles.qualificationRow}>
                                    <Award size={13} className={styles.qualIcon} />
                                    <span>
                                        {fac.exp.split('|')[1]?.trim() || 'Doctoral Guide'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Directory Overview Footer Link */}
                <div
                    className={`${styles.sectionFooter} ${isVisible ? styles.animDelay5 : styles.hiddenState
                        }`}
                >
                    <Link href="/academics/faculty" className={styles.exploreDirectoryLink}>
                        <span>View Complete Faculty Directory &amp; Research Profiles</span>
                        <ArrowRight size={16} className={styles.footerArrow} />
                    </Link>
                </div>
            </div>
        </section>
    );
}