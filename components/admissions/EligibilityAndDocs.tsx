'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    CheckCircle2,
    FileText,
    Calendar,
    ArrowRight,
    Send,
    ClipboardList,
    FolderCheck,
    Clock,
} from 'lucide-react';
import styles from './EligibilityAndDocs.module.css';

const documents = [
    '10th & 12th Marks Memo / Intermediate Pass Certificate',
    'Transfer Certificate (TC) & Conduct Certificate',
    'Migration Certificate (for other state / board candidates)',
    'Integrated Community / Caste Certificate (if applicable)',
    'Income Certificate / Ration Card (for fee reimbursement)',
    'Recent Passport Size Photographs (6 copies)',
    'Government ID Proof (Aadhaar Card Copy)',
    'Rank Card & Hall Ticket (AP EAPCET / GPAT / PGECET)',
];

const dates = [
    { title: 'Applications Open', date: '15 May 2026' },
    { title: 'Last Date to Submit', date: '15 June 2026' },
    { title: 'Merit List Announcement', date: '20 June 2026' },
    { title: 'Counselling & Verification', date: '25 June 2026 Onwards' },
];

export default function EligibilityAndDocs() {
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
                {/* Card 1: Eligibility Criteria */}
                <div
                    className={`${styles.whiteCard} ${isVisible ? styles.animDelay1 : styles.hiddenState
                        }`}
                >
                    <div>
                        <div className={styles.cardHeader}>
                            <div className={`${styles.iconBadge} ${styles.badgeEmerald}`}>
                                <ClipboardList size={22} strokeWidth={2.2} />
                            </div>
                            <div>
                                <span className={styles.cardEyebrow}>Admission Standard</span>
                                <h3 className={styles.cardTitle}>Eligibility Criteria</h3>
                            </div>
                        </div>
                        <div className={styles.accentLine} />
                        <ul className={styles.criteriaList}>
                            <li className={styles.criteriaItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>
                                    <strong className={styles.courseTag}>B. Pharmacy:</strong> 10+2 Intermediate with Physics &amp; Chemistry + Mathematics/Biology (MPC/BiPC) with minimum 45% aggregate (40% for reserved categories).
                                </span>
                            </li>
                            <li className={styles.criteriaItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>
                                    <strong className={styles.courseTag}>Pharm. D:</strong> 10+2 with Physics &amp; Chemistry + Biology/Mathematics, or a recognized Diploma in Pharmacy (D.Pharm).
                                </span>
                            </li>
                            <li className={styles.criteriaItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>
                                    <strong className={styles.courseTag}>M. Pharmacy:</strong> B. Pharmacy degree with minimum 55% aggregate and a valid GPAT / AP-PGECET score.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.cardFooter}>
                        <Link href="/admissions/eligibility-criteria" className={styles.viewBtn}>
                            <span>Detailed Admission Norms</span>
                            <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>

                {/* Card 2: Documents Required */}
                <div
                    className={`${styles.whiteCard} ${isVisible ? styles.animDelay2 : styles.hiddenState
                        }`}
                >
                    <div>
                        <div className={styles.cardHeader}>
                            <div className={`${styles.iconBadge} ${styles.badgeAmber}`}>
                                <FolderCheck size={22} strokeWidth={2.2} />
                            </div>
                            <div>
                                <span className={styles.cardEyebrow}>Verification Checklist</span>
                                <h3 className={styles.cardTitle}>Required Documents</h3>
                            </div>
                        </div>
                        <div className={styles.accentLine} />
                        <ul className={styles.docList}>
                            {documents.map((doc, idx) => (
                                <li key={idx} className={styles.docItem}>
                                    <div className={styles.docIconWrapper}>
                                        <FileText size={14} />
                                    </div>
                                    <span>{doc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Card 3: Important Dates & Timeline */}
                <div
                    className={`${styles.timelineCard} ${isVisible ? styles.animDelay3 : styles.hiddenState
                        }`}
                >
                    <div>
                        <div className={styles.cardHeader}>
                            <div className={`${styles.iconBadge} ${styles.badgeDarkGreen}`}>
                                <Clock size={22} strokeWidth={2.2} />
                            </div>
                            <div>
                                <span className={styles.cardEyebrowGold}>Admission Schedule</span>
                                <h3 className={styles.timelineCardTitle}>Important Dates</h3>
                            </div>
                        </div>
                        <div className={styles.accentLineGold} />
                        <div className={styles.timelineList}>
                            <div className={styles.timelineConnector} />
                            {dates.map((item, idx) => (
                                <div key={idx} className={styles.timelineItem}>
                                    <div className={styles.calendarCircle}>
                                        <Calendar size={14} strokeWidth={2.2} />
                                    </div>
                                    <div className={styles.timelineContent}>
                                        <p className={styles.timelineTitle}>{item.title}</p>
                                        <p className={styles.timelineDate}>{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.cardFooter}>
                        <Link href="/admissions/application-form" className={styles.applyBtn}>
                            <span>Start Application Form</span>
                            <Send size={14} className={styles.sendIcon} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}