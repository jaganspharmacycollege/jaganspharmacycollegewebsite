'use client';

import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import styles from './DocumentsRequiredPage.module.css';

const ugDocuments = [
    'SSC / 10th Standard Original Marks Memo & Passing Certificate',
    'Intermediate / 10+2 / Diploma Marks Memo & Pass Certificate',
    'AP EAPCET Rank Card & Hall Ticket',
    'Transfer Certificate (T.C.) & Conduct Certificate from the last attended institution',
    'Study & Bonafide Certificates (Class VI to Intermediate / Diploma)',
    'Income Certificate & Caste / Community Certificate (if claiming fee reimbursement)',
    'Aadhaar Card Photocopy (Student and Parents)',
    'Passport Size Color Photographs (6 Copies)',
];

const pgDocuments = [
    'B. Pharm Degree Certificate & Consolidated Marks Memo (All Semesters)',
    'GPAT / AP PGECET Rank Card & Hall Ticket',
    'State Pharmacy Council Registration Certificate',
    'Transfer Certificate (T.C.) & Migration Certificate from last attended university',
    'Study & Bonafide Certificates from B. Pharm Institution',
    'Income Certificate & Caste / Community Certificate (if claiming fee reimbursement)',
    'Aadhaar Card Photocopy (Student and Parents)',
    'Passport Size Color Photographs (6 Copies)',
];

export default function DocumentsRequiredPage() {
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
                    <span className={styles.eyebrow}>Verification Checklist</span>
                    <h1 className={styles.title}>Documents Required</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Please prepare original documents along with 3 sets of self-attested photocopies at the time of admission counseling and verification.
                    </p>
                </div>

                {/* 2-Column Responsive Card Grid */}
                <div className={styles.grid}>
                    {/* Card 1: B. Pharm & Pharm.D */}
                    <div
                        className={`${styles.card} ${isVisible ? styles.animateCardLeft : styles.hiddenState
                            }`}
                    >
                        <div className={styles.cardHeader}>
                            <div className={styles.headerLeft}>
                                <div
                                    className={`${styles.iconBadge} ${styles.badgeEmerald}`}
                                >
                                    <GraduationCap size={22} strokeWidth={2.2} />
                                </div>
                                <h2 className={styles.cardTitle}>B. Pharm &amp; Pharm.D</h2>
                            </div>
                            <span className={styles.tagAmber}>UG / Integrated</span>
                        </div>
                        <div className={styles.list}>
                            {ugDocuments.map((doc, idx) => (
                                <div key={idx} className={styles.listItem}>
                                    <span className={styles.numberBadge}>{idx + 1}</span>
                                    <span className={styles.docText}>{doc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: M. Pharm */}
                    <div
                        className={`${styles.card} ${isVisible ? styles.animateCardRight : styles.hiddenState
                            }`}
                    >
                        <div className={styles.cardHeader}>
                            <div className={styles.headerLeft}>
                                <div
                                    className={`${styles.iconBadge} ${styles.badgePurple}`}
                                >
                                    <Award size={22} strokeWidth={2.2} />
                                </div>
                                <h2 className={styles.cardTitle}>M. Pharm</h2>
                            </div>
                            <span className={styles.tagEmerald}>Postgraduate</span>
                        </div>
                        <div className={styles.list}>
                            {pgDocuments.map((doc, idx) => (
                                <div key={idx} className={styles.listItem}>
                                    <span className={styles.numberBadge}>{idx + 1}</span>
                                    <span className={styles.docText}>{doc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}