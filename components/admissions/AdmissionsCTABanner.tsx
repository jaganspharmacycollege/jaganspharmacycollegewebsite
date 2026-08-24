'use client';

import React from 'react';
import Link from 'next/link';
import {
    GraduationCap,
    ArrowRight,
    Sparkles,
    PhoneCall,
    Download,
} from 'lucide-react';
import styles from './AdmissionsCTABanner.module.css';

export default function AdmissionsCTABanner() {
    return (
        <section className={styles.section}>
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div className={styles.card}>
                    {/* Subtle Decorative Ambient Layer */}
                    <div className={styles.decorativeShine} />

                    {/* Left Block: Icon & Headline Content */}
                    <div className={styles.leftSection}>
                        <div className={styles.iconBadge}>
                            <GraduationCap size={28} strokeWidth={2} />
                        </div>

                        <div className={styles.textContent}>
                            <div className={styles.tagWrapper}>
                                <Sparkles size={13} className={styles.tagIcon} />
                                <span className={styles.tagText}>Admissions Open for 2026 Academic Year</span>
                            </div>
                            <h3 className={styles.heading}>
                                Take the First Step Towards a Rewarding Career in Pharmacy
                            </h3>
                            <p className={styles.subHeading}>
                                Join Jagan&apos;s College of Pharmacy for clinical excellence, state-of-the-art labs, and 100% placement support.
                            </p>
                        </div>
                    </div>

                    {/* Right Block: Actions */}
                    <div className={styles.rightSection}>
                        <div className={styles.divider} />

                        <div className={styles.actionButtons}>
                            <Link href="/admissions/apply" className={styles.applyBtn}>
                                <span>Apply Online Now</span>
                                <ArrowRight size={16} />
                            </Link>

                            <Link href="/contact" className={styles.inquireBtn}>
                                <PhoneCall size={14} />
                                <span>Talk to Admissions</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}