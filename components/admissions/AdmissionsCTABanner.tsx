'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, ArrowRight } from 'lucide-react';
import styles from './AdmissionsCTABanner.module.css';

export default function AdmissionsCTABanner() {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                {/* Left Botanical Leaf Watermark */}
                <div className={styles.leftWatermark}>
                    <svg width="120" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M10 80 Q 40 25 30 M 50 42 Q 65 25 55 15 M 65 30 Q 80 15 70 5" />
                    </svg>
                </div>

                {/* Left Section: Icon & Heading */}
                <div className={styles.leftSection}>
                    <div className={styles.iconBadge}>
                        <GraduationCap size={28} strokeWidth={1.3} />
                    </div>
                    <h3 className={styles.heading}>
                        Take the first step towards a successful career<br className="hidden md:inline" /> in pharmacy with Jagan's College of Pharmacy.
                    </h3>
                </div>

                {/* Right Section: Divider & CTA Button */}
                <div className={styles.rightSection}>
                    <div className={styles.divider} />
                    <Link href="/admissions/apply" className={styles.applyBtn}>
                        Apply Online Now <ArrowRight size={15} />
                    </Link>
                </div>

                {/* Right Botanical Leaf Watermark */}
                <div className={styles.rightWatermark}>
                    <svg width="120" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M90 80 Q 60 40 10 20 M 70 55 Q 85 35 25 45 M 35 30 Q 20 15 30 5" />
                    </svg>
                </div>
            </div>
        </section>
    );
}