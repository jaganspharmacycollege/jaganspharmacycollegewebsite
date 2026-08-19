'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, Target, GraduationCap, Users, UserCheck, TrendingUp } from 'lucide-react';
import styles from './HomeAboutStatsSection.module.css';

export default function HomeAboutStatsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftCol}>
                    <span className={styles.eyebrow}>About Us</span>
                    <h2 className={styles.title}>Shaping Careers. Impacting Lives.</h2>

                    {/* Vision & Mission Cards */}
                    <div className={styles.vmContainer}>
                        <div className={styles.vmCard}>
                            <div className={styles.vmHeader}>
                                <Eye size={18} className={styles.vmIcon} />
                                <h4 className={styles.vmTitle}>Our Vision</h4>
                            </div>
                            <p className={styles.vmText}>
                                To emerge as a center of excellence in pharmaceutical education and clinical research, fostering skilled healthcare leaders for global service.
                            </p>
                        </div>

                        <div className={styles.vmCard}>
                            <div className={styles.vmHeader}>
                                <Target size={18} className={styles.vmIcon} />
                                <h4 className={styles.vmTitle}>Our Mission</h4>
                            </div>
                            <p className={styles.vmText}>
                                Providing outcome-based pharmacy education, advancing clinical discoveries, and developing ethical healthcare professionals through state-of-the-art training.
                            </p>
                        </div>
                    </div>

                    <Link href="/about" className={styles.btnAbout}>
                        Know More About Us <ArrowRight size={13} />
                    </Link>
                </div>

                {/* 4 Stats Cards */}
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>20+</div>
                        <div className={styles.statLabel}>Years of Excellence</div>
                        <GraduationCap size={24} className={styles.statIcon} />
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>1500+</div>
                        <div className={styles.statLabel}>Students Enrolled</div>
                        <Users size={24} className={styles.statIcon} />
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>50+</div>
                        <div className={styles.statLabel}>Expert Faculty</div>
                        <UserCheck size={24} className={styles.statIcon} />
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>98%</div>
                        <div className={styles.statLabel}>Placement Assistance</div>
                        <TrendingUp size={24} className={styles.statIcon} />
                    </div>
                </div>
            </div>
        </section>
    );
}