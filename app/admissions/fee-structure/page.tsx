'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    CreditCard,
    FlaskConical,
    Stethoscope,
    Sparkles,
    Info,
    ShieldCheck,
} from 'lucide-react';
import styles from './FeeStructurePage.module.css';

const feeCards = [
    {
        course: 'B.Pharm',
        subtitle: 'Undergraduate Program',
        duration: '4 Years',
        tuitionFee: '₹45,000',
        cautionDeposit: '₹5,000 (Refundable)',
        icon: FlaskConical,
        theme: styles.themeEmerald,
        badgeTheme: styles.badgeEmerald,
        animClass: styles.animDelay1,
    },
    {
        course: 'Pharm.D',
        subtitle: 'Doctoral Clinical Degree',
        duration: '6 Years',
        tuitionFee: '₹68,000',
        cautionDeposit: '₹5,000 (Refundable)',
        icon: Stethoscope,
        theme: styles.themePurple,
        badgeTheme: styles.badgePurple,
        animClass: styles.animDelay2,
    },
    {
        course: 'M.Pharm',
        subtitle: 'Postgraduate (All Branches)',
        duration: '2 Years',
        tuitionFee: '₹55,000',
        cautionDeposit: '₹5,000 (Refundable)',
        icon: Sparkles,
        theme: styles.themeAmber,
        badgeTheme: styles.badgeAmber,
        animClass: styles.animDelay3,
    },
];

export default function FeeStructurePage() {
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
                {/* Section Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <CreditCard size={15} className={styles.eyebrowIcon} />
                        <span>Tuition &amp; Charges</span>
                    </div>
                    <h1 className={styles.title}>Fee Structure</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Tuition fees are structured in strict adherence to the Andhra Pradesh Higher Education Regulatory and Monitoring Commission (APHERMC) guidelines.
                    </p>
                </div>

                {/* 1. Distinct Responsive Course Fee Cards */}
                <div className={styles.cardsGrid}>
                    {feeCards.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className={`${styles.feeCard} ${isVisible ? item.animClass : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${item.theme}`}>
                                        <Icon size={24} strokeWidth={2.2} />
                                    </div>
                                    <div>
                                        <span className={styles.cardSubtitle}>{item.subtitle}</span>
                                        <h3 className={styles.cardCourseTitle}>{item.course}</h3>
                                    </div>
                                </div>

                                <div className={styles.durationPill}>
                                    <span>Duration: {item.duration}</span>
                                </div>

                                <div className={styles.feeHighlightBox}>
                                    <span className={styles.feeLabel}>Annual Tuition Fee</span>
                                    <div className={styles.feeAmount}>
                                        {item.tuitionFee}{' '}
                                        <span className={styles.feePerYear}>/ Year</span>
                                    </div>
                                </div>

                                <div className={styles.depositRow}>
                                    <ShieldCheck size={16} className={styles.depositIcon} />
                                    <span>
                                        <strong>Admission / Caution:</strong> {item.cautionDeposit}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 2. Structured Regulatory Breakdown Table */}
                <div
                    className={`${styles.tableCard} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                        }`}
                >
                    <div className={styles.tableHeader}>
                        <h3 className={styles.tableTitle}>
                            APHERMC Standardized Fee Schedule
                        </h3>
                        <span className={styles.tableBadge}>Academic Year 2026-27</span>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.th}>Course Program</th>
                                    <th className={styles.th}>Duration</th>
                                    <th className={styles.th}>Tuition Fee (Per Annum)</th>
                                    <th className={styles.th}>Admission / Caution Deposit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.tr}>
                                    <td className={`${styles.td} ${styles.tdBold}`}>B.Pharm</td>
                                    <td className={styles.td}>4 Years</td>
                                    <td className={`${styles.td} ${styles.tdFee}`}>₹45,000 /-</td>
                                    <td className={styles.td}>₹5,000 (Refundable)</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={`${styles.td} ${styles.tdBold}`}>Pharm.D</td>
                                    <td className={styles.td}>6 Years</td>
                                    <td className={`${styles.td} ${styles.tdFee}`}>₹68,000 /-</td>
                                    <td className={styles.td}>₹5,000 (Refundable)</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <td className={`${styles.td} ${styles.tdBold}`}>
                                        M.Pharm (All Specializations)
                                    </td>
                                    <td className={styles.td}>2 Years</td>
                                    <td className={`${styles.td} ${styles.tdFee}`}>₹55,000 /-</td>
                                    <td className={styles.td}>₹5,000 (Refundable)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Informational Callout Note */}
                <div
                    className={`${styles.noteBox} ${isVisible ? styles.animateReveal5 : styles.hiddenState
                        }`}
                >
                    <Info size={18} className={styles.noteIcon} />
                    <p className={styles.noteText}>
                        <strong>Note:</strong> Hostel accommodation, bus transportation, and university examination fees are charged separately as applicable. Eligible SC / ST / BC / EBC students can avail of Andhra Pradesh state fee reimbursement schemes (JVD).
                    </p>
                </div>
            </div>
        </div>
    );
}