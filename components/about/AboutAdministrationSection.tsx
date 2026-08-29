'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    BookOpenCheck,
    FileSpreadsheet,
    ShieldCheck,
    HeartHandshake,
} from 'lucide-react';
import styles from './AboutAdministrationSection.module.css';

const adminBodies = [
    {
        icon: BookOpenCheck,
        cell: 'Academic Council',
        lead: 'Head: Vice Principal & HoDs',
        desc: 'Oversees curriculum delivery, student attendance, laboratory scheduling, and internal assessment reviews.',
        themeClass: styles.themeEmerald,
        animClass: styles.animDelay1,
    },
    {
        icon: FileSpreadsheet,
        cell: 'Examination Cell',
        lead: 'Head: Controller of Examinations',
        desc: 'Coordinates with JNTUA for seamless scheduling, hall ticket dissemination, and board evaluations.',
        themeClass: styles.themeAmber,
        animClass: styles.animDelay2,
    },
    {
        icon: ShieldCheck,
        cell: 'Internal Quality Assurance (IQAC)',
        lead: 'Head: IQAC Coordinator',
        desc: 'Drives continuous enhancement across teaching methodologies, laboratory safety, and faculty development programs.',
        themeClass: styles.themeBlue,
        animClass: styles.animDelay3,
    },
    {
        icon: HeartHandshake,
        cell: 'Student Affairs & Grievance Cell',
        lead: 'Head: Dean of Student Affairs',
        desc: 'Dedicated to student well-being, campus anti-ragging policies, mentorship, and extracurricular coordination.',
        themeClass: styles.themePurple,
        animClass: styles.animDelay4,
    },
];

export default function AboutAdministrationSection() {
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
                {/* Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <span className={styles.eyebrow}>Governance &amp; Framework</span>
                    <h2 className={styles.title}>Administrative Bodies</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.headerSub}>
                        Structured leadership committees ensuring academic discipline, seamless examinations, and student welfare.
                    </p>
                </div>

                {/* 4-Card Responsive Grid */}
                <div className={styles.grid}>
                    {adminBodies.map((admin, idx) => {
                        const Icon = admin.icon;
                        return (
                            <div
                                key={idx}
                                className={`${styles.adminCard} ${isVisible ? admin.animClass : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconBadge} ${admin.themeClass}`}>
                                        <Icon size={22} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.adminLead}>{admin.lead}</span>
                                </div>
                                <h3 className={styles.adminCellTitle}>{admin.cell}</h3>
                                <p className={styles.adminDesc}>{admin.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}