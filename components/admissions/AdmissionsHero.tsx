'use client';

import React from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';
import styles from './AdmissionsHero.module.css';

export default function AdmissionsHero() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Column: Heading & Feature Badges */}
                <div className={styles.leftCol}>
                    <p className={styles.eyebrow}>ADMISSIONS</p>
                    <h1 className={styles.title}>
                        Your Future.<br />Our Commitment.
                    </h1>
                    <div className={styles.accentLine} />
                    <p className={styles.description}>
                        At Jagan's College of Pharmacy, we make the admission process simple, transparent and student-friendly. Take the first step towards a rewarding career in pharmacy.
                    </p>

                    {/* 3 Pillar Badges Row */}
                    <div className={styles.badgesRow}>
                        <div className={styles.badgeItem}>
                            <div className={`${styles.iconCircle} bg-[#EBF7F2] text-[#053B2A]`}>
                                <GraduationCap size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className={styles.badgeTitle}>Quality Education</h4>
                                <p className={styles.badgeSub}>Industry-aligned curriculum and expert faculty</p>
                            </div>
                        </div>

                        <div className={styles.badgeItem}>
                            <div className={`${styles.iconCircle} bg-[#F3E8FF] text-purple-800`}>
                                <Award size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className={styles.badgeTitle}>Approved & Recognized</h4>
                                <p className={styles.badgeSub}>Approved by PCI and affiliated to JNTUA</p>
                            </div>
                        </div>

                        <div className={styles.badgeItem}>
                            <div className={`${styles.iconCircle} bg-[#FFF3E6] text-[#B86E00]`}>
                                <Users size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className={styles.badgeTitle}>Student Centric</h4>
                                <p className={styles.badgeSub}>Holistic development and career support</p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Image Fallback */}
                    <div className={styles.mobileImageWrapper}>
                        <img
                            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80"
                            alt="Jagan's College of Pharmacy Students"
                        />
                    </div>
                </div>

                {/* Empty Column for Layout Balance */}
                <div className="hidden lg:block lg:col-span-7 h-full" />
            </div>

            {/* Right Edge Desktop Curved Image */}
            <div className={styles.desktopImageWrapper}>
                <div className={styles.desktopImageInner}>
                    <img
                        src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80"
                        alt="Jagan's College of Pharmacy Students"
                    />
                </div>
            </div>
        </section>
    );
}