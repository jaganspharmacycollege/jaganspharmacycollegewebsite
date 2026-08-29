'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    FileCheck2,
    Globe2,
    FolderCheck,
    CreditCard,
    Sparkles,
} from 'lucide-react';
import styles from './AdmissionProcessPage.module.css';

const steps = [
    {
        num: '01',
        title: 'Entrance Examination & Eligibility Verification',
        desc: 'Candidates must appear for the relevant entrance examinations—AP EAPCET for B. Pharm and Pharm.D, or GPAT / AP PGECET for M. Pharm admissions.',
        icon: FileCheck2,
        theme: styles.themeEmerald,
        animClass: styles.animDelay1,
    },
    {
        num: '02',
        title: 'State Counseling / Online Application',
        desc: 'Qualifying students can participate in APSCHE state web counseling under Convenor Quota, or apply directly on our campus portal for Category-B (Management) Quota.',
        icon: Globe2,
        theme: styles.themeAmber,
        animClass: styles.animDelay2,
    },
    {
        num: '03',
        title: 'Document Verification & Seat Allotment',
        desc: 'Shortlisted candidates submit their academic credentials, rank cards, and transfer certificates for administrative verification and seat confirmation.',
        icon: FolderCheck,
        theme: styles.themePurple,
        animClass: styles.animDelay3,
    },
    {
        num: '04',
        title: 'Tuition Fee Payment & Enrollment',
        desc: 'Upon official seat allotment, candidates pay the prescribed institutional fee to complete university enrollment and receive their official student kit.',
        icon: CreditCard,
        theme: styles.themeTeal,
        animClass: styles.animDelay4,
    },
];

export default function AdmissionProcessPage() {
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
                {/* Header Section */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.sparkleIcon} />
                        <span>Admissions 2026-27</span>
                    </div>
                    <h1 className={styles.title}>Admission Process</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Follow the systematic step-by-step procedure to secure your admission into our approved pharmaceutical programs at Jagan&apos;s College of Pharmacy.
                    </p>
                </div>

                {/* Vertical Step Cards List */}
                <div className={styles.list}>
                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.num}
                                className={`${styles.card} ${isVisible ? step.animClass : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardInner}>
                                    {/* Step Number Badge */}
                                    <div className={`${styles.stepNumber} ${step.theme}`}>
                                        <span className={styles.numText}>{step.num}</span>
                                        <Icon
                                            size={18}
                                            strokeWidth={2.2}
                                            className={styles.stepIcon}
                                        />
                                    </div>

                                    {/* Step Content */}
                                    <div className={styles.contentCol}>
                                        <div className={styles.titleRow}>
                                            <span className={styles.stepIndicator}>
                                                Step {step.num}
                                            </span>
                                            <h3 className={styles.stepTitle}>{step.title}</h3>
                                        </div>
                                        <p className={styles.stepDesc}>{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}