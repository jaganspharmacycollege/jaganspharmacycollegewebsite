'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Building2, Award } from 'lucide-react';
import styles from './AboutApprovalsSection.module.css';

const approvals = [
    {
        icon: ShieldCheck,
        title: 'AICTE Approved',
        authority: 'Apex Technical Body',
        desc: 'Approved by the All India Council for Technical Education, New Delhi, ensuring all pharmaceutical curricula, research labs, and faculty adhere strictly to national statutory standards.',
        themeClass: styles.themeEmerald,
        animClass: styles.animDelay1,
    },
    {
        icon: Building2,
        title: 'JNTU Anantapur (JNTUA)',
        authority: 'Affiliating University',
        desc: 'Permanently affiliated to Jawaharlal Nehru Technological University Anantapur for all undergraduate (B. Pharm), postgraduate (M. Pharm), and doctoral (Pharm.D) degree programs.',
        themeClass: styles.themeAmber,
        animClass: styles.animDelay2,
    },
    {
        icon: Award,
        title: 'Govt. of Andhra Pradesh',
        authority: 'State Recognition',
        desc: 'Recognized by the Department of Technical Education and Government of Andhra Pradesh for upholding high educational benchmarks and clinical healthcare training.',
        themeClass: styles.themeBlue,
        animClass: styles.animDelay3,
    },
];

export default function AboutApprovalsSection() {
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
                    <span className={styles.eyebrow}>Statutory Recognition</span>
                    <h2 className={styles.title}>Approvals &amp; Affiliations</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.headerSub}>
                        Accredited and approved by recognized national statutory boards and government authorities.
                    </p>
                </div>

                {/* 3-Card Grid */}
                <div className={styles.grid}>
                    {approvals.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className={`${styles.approvalCard} ${isVisible ? item.animClass : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardTop}>
                                    <div className={`${styles.cardIcon} ${item.themeClass}`}>
                                        <Icon size={26} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.cardSubtitle}>{item.authority}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}