'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Pill,
    FlaskConical,
    Activity,
    Leaf,
    Stethoscope,
    Sparkles,
    ArrowRight,
} from 'lucide-react';
import styles from './DepartmentsSection.module.css';

const departments = [
    {
        title: 'Department of Pharmaceutics',
        desc: 'Specializes in drug dosage formulation, novel drug delivery systems (NDDS), biopharmaceutics, physical pharmacy, and industrial scale-up technologies.',
        tags: ['Tableting Lab', 'Sterile Lab', 'Dissolution Testing'],
        icon: Pill,
        theme: styles.themeEmerald,
        href: '/academics/departments/pharmaceutics',
        animClass: styles.animDelay1,
    },
    {
        title: 'Department of Pharmaceutical Chemistry & Analysis',
        desc: 'Focuses on organic synthesis, medicinal drug design, structure-activity relationships (SAR), spectroscopic analysis, and quality assurance.',
        tags: ['Spectroscopy Lab', 'HPLC & Chromatography', 'Wet Chemistry'],
        icon: FlaskConical,
        theme: styles.themeAmber,
        href: '/academics/departments/pharmaceutical-chemistry',
        animClass: styles.animDelay2,
    },
    {
        title: 'Department of Pharmacology',
        desc: 'Dedicated to understanding drug actions, preclinical pharmacokinetics, toxicological evaluations, animal behavioral studies, and molecular screening.',
        tags: ['Animal House', 'Organ Bath Labs', 'Toxicology Unit'],
        icon: Activity,
        theme: styles.themePurple,
        href: '/academics/departments/pharmacology',
        animClass: styles.animDelay3,
    },
    {
        title: 'Department of Pharmacognosy & Phytochemistry',
        desc: 'Engaged in natural product isolation, herbal medicines, plant tissue culture, phytochemical evaluation, and traditional herbal formulations.',
        tags: ['Herbal Garden', 'Extraction Lab', 'Morphology Lab'],
        icon: Leaf,
        theme: styles.themeTeal,
        href: '/academics/departments/pharmacognosy',
        animClass: styles.animDelay4,
    },
    {
        title: 'Department of Pharmacy Practice (Hospital & Clinical)',
        desc: 'Centered around clinical patient care, hospital ward rounds, prescription audit, adverse drug reaction (ADR) monitoring, and patient pharmacotherapy.',
        tags: ['Ward Round Units', 'Drug Info Center', 'Patient Counseling'],
        icon: Stethoscope,
        theme: styles.themeEmerald,
        href: '/academics/departments/pharmacy-practice',
        animClass: styles.animDelay5,
    },
];

export default function DepartmentsSection() {
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
                        <span>Disciplines &amp; Divisions</span>
                    </div>
                    <h2 className={styles.title}>Academic Departments</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our specialized departments are powered by advanced research laboratories, experienced faculty, and rigorous curriculum frameworks.
                    </p>
                </div>

                {/* Multi-Device Responsive Departments Grid */}
                <div className={styles.grid}>
                    {departments.map((dept, idx) => {
                        const Icon = dept.icon;
                        return (
                            <div
                                key={idx}
                                className={`${styles.card} ${isVisible ? dept.animClass : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${dept.theme}`}>
                                        <Icon size={24} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.overviewTag}>Academic Division</span>
                                </div>

                                <h3 className={styles.cardTitle}>{dept.title}</h3>
                                <p className={styles.cardDesc}>{dept.desc}</p>

                                {/* Laboratory & Focus Badges */}
                                <div className={styles.highlights}>
                                    {dept.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className={styles.badge}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Direct Page Link Footer */}
                                <div className={styles.cardFooter}>
                                    <Link href={dept.href} className={styles.exploreLink}>
                                        <span>View Department Details</span>
                                        <ArrowRight size={15} className={styles.arrowIcon} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}