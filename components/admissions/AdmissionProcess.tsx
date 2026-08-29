'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    ClipboardCheck,
    FileText,
    FileUp,
    CreditCard,
    Users,
    CheckCircle2,
    ChevronRight,
} from 'lucide-react';
import styles from './AdmissionProcess.module.css';

const steps = [
    {
        step: 'Step 01',
        title: 'Check Eligibility',
        desc: 'Review the academic criteria for your chosen pharmacy course.',
        icon: ClipboardCheck,
        iconTheme: styles.iconMint,
        animClass: styles.animDelay1,
    },
    {
        step: 'Step 02',
        title: 'Apply Online',
        desc: 'Fill out the online application form with the required details.',
        icon: FileText,
        iconTheme: styles.iconPurple,
        animClass: styles.animDelay2,
    },
    {
        step: 'Step 03',
        title: 'Submit Documents',
        desc: 'Upload the necessary certificates and ID proofs as per guidelines.',
        icon: FileUp,
        iconTheme: styles.iconPeach,
        animClass: styles.animDelay3,
    },
    {
        step: 'Step 04',
        title: 'Pay Application Fee',
        desc: 'Pay the application fee securely through the online payment gateway.',
        icon: CreditCard,
        iconTheme: styles.iconMint,
        animClass: styles.animDelay4,
    },
    {
        step: 'Step 05',
        title: 'Merit / Selection',
        desc: 'Evaluation is completed based on entrance rank and qualifying merit.',
        icon: Users,
        iconTheme: styles.iconPurple,
        animClass: styles.animDelay5,
    },
    {
        step: 'Step 06',
        title: 'Seat Confirmation',
        desc: 'Receive formal admission confirmation and reporting dates via SMS/email.',
        icon: CheckCircle2,
        iconTheme: styles.iconPeach,
        animClass: styles.animDelay6,
    },
];

export default function AdmissionProcess() {
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
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <span className={styles.eyebrow}>How to Join</span>
                    <h2 className={styles.title}>Admission Process</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.subText}>
                        Follow these simple, transparent steps to complete your enrollment at Jagan&apos;s College of Pharmacy.
                    </p>
                </div>

                {/* 6 Step Cards Grid */}
                <div className={styles.grid}>
                    {steps.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className={styles.cardWrapper}>
                                <div
                                    className={`${styles.card} ${isVisible ? item.animClass : styles.hiddenState
                                        }`}
                                >
                                    <div className={styles.cardTop}>
                                        <div className={`${styles.iconSquircle} ${item.iconTheme}`}>
                                            <Icon size={22} strokeWidth={2} />
                                        </div>
                                        <span className={styles.stepTag}>{item.step}</span>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <h3 className={styles.stepTitle}>{item.title}</h3>
                                        <p className={styles.stepDesc}>{item.desc}</p>
                                    </div>
                                </div>

                                {/* Arrow Connector between steps for Desktops */}
                                {idx !== steps.length - 1 && (
                                    <div className={styles.connectorArrow}>
                                        <ChevronRight size={18} strokeWidth={2.5} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}