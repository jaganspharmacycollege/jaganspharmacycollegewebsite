'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    ArrowLeft,
    TrendingUp,
    Award,
    Building,
    GraduationCap,
} from 'lucide-react';
import styles from './PlacementRecord.module.css';

const placementStats = [
    { year: '2025-26', registered: '148', placed: '139', percentage: '93.9%', topRecruiters: 'Novartis, Hetero, Dr. Reddy’s, Omega' },
    { year: '2024-25', registered: '142', placed: '131', percentage: '92.2%', topRecruiters: 'Sun Pharma, Cipla, Divi’s, Episource' },
    { year: '2023-24', registered: '135', placed: '122', percentage: '90.3%', topRecruiters: 'Aurobindo, Biophore, Apollo Hospitals' },
    { year: '2022-23', registered: '128', placed: '115', percentage: '89.8%', topRecruiters: 'Hetero Drugs, Granules India, IQVIA' },
];

export default function PlacementRecordPage() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isMounted = true;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isMounted && entry) setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            isMounted = false;
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;
        let isMounted = true;

        const updateParallax = () => {
            if (!isMounted || !sectionRef.current) return;
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
            if (isMounted) animationFrameId = requestAnimationFrame(updateParallax);
        };

        const handleScroll = () => {
            if (!isMounted) return;
            targetScroll = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateParallax);

        return () => {
            isMounted = false;
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div className={`${styles.backNav} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>Return to Home</span>
                    </Link>
                </div>

                <div className={`${styles.header} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Employment Milestones</span>
                    </div>
                    <h1 className={styles.title}>Annual Placement Track Record</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Graduates from Jagan&apos;s College of Pharmacy are consistently absorbed by premier multinational
                        formulation manufacturers, research hospitals, analytical laboratories, and health-tech organizations.
                    </p>
                </div>

                {/* Highlights Row */}
                <div className={`${styles.statsGrid} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                    <div className={styles.statCard}>
                        <div className={styles.statIconBox}>
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <h3 className={styles.statValue}>2,250+</h3>
                            <p className={styles.statLabel}>Total Alumni Placed</p>
                        </div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIconBox}>
                            <Award size={24} />
                        </div>
                        <div>
                            <h3 className={styles.statValue}>6.5 LPA</h3>
                            <p className={styles.statLabel}>Highest Salary Package</p>
                        </div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIconBox}>
                            <Building size={24} />
                        </div>
                        <div>
                            <h3 className={styles.statValue}>40+</h3>
                            <p className={styles.statLabel}>Active Hiring Partners</p>
                        </div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIconBox}>
                            <GraduationCap size={24} />
                        </div>
                        <div>
                            <h3 className={styles.statValue}>92%+</h3>
                            <p className={styles.statLabel}>Average Placement Ratio</p>
                        </div>
                    </div>
                </div>

                {/* Data Table */}
                <div className={`${styles.tableWrapper} ${isVisible ? styles.animateReveal3 : styles.hiddenState}`}>
                    <table className={styles.responsiveTable}>
                        <thead>
                            <tr>
                                <th>Academic Year</th>
                                <th>Registered Graduates</th>
                                <th>Offers Extended</th>
                                <th>Placement Rate</th>
                                <th>Prominent Recruiters</th>
                            </tr>
                        </thead>
                        <tbody>
                            {placementStats.map((row, idx) => (
                                <tr key={idx}>
                                    <td><strong>{row.year}</strong></td>
                                    <td>{row.registered}</td>
                                    <td>{row.placed}</td>
                                    <td><span className={styles.tableTag}>{row.percentage}</span></td>
                                    <td>{row.topRecruiters}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}