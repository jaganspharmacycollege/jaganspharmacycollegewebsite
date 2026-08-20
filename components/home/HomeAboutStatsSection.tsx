'use client';

import React from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    Eye,
    Target,
    GraduationCap,
    Users,
    UserCheck,
    TrendingUp,
} from 'lucide-react';
import styles from './HomeAboutStatsSection.module.css';

export default function HomeAboutStatsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Left Column: Heading & Vision/Mission */}
                <div className={styles.leftCol}>
                    <span className={styles.eyebrow}>About Us</span>
                    <h2 className={styles.title}>
                        Shaping Careers. <br />
                        Impacting Lives.
                    </h2>

                    {/* Vision & Mission Cards */}
                    <div className={styles.vmContainer}>
                        <div className={styles.vmCard}>
                            <div className={styles.vmHeader}>
                                <Eye size={18} className={styles.vmIcon} />
                                <h4 className={styles.vmTitle}>Our Vision</h4>
                            </div>
                            <p className={styles.vmText}>
                                To emerge as a center of excellence in pharmaceutical education and clinical
                                research, fostering skilled healthcare leaders for global service.
                            </p>
                        </div>

                        <div className={styles.vmCard}>
                            <div className={styles.vmHeader}>
                                <Target size={18} className={styles.vmIcon} />
                                <h4 className={styles.vmTitle}>Our Mission</h4>
                            </div>
                            <p className={styles.vmText}>
                                Providing outcome-based pharmacy education, advancing clinical discoveries,
                                and developing ethical healthcare professionals through state-of-the-art training.
                            </p>
                        </div>
                    </div>

                    <Link href="/about" className={styles.btnAbout}>
                        <span>Know More About Us</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>

                {/* Right Column: 4 Stats Cards */}
                <div className={styles.statsGrid}>
                    {/* Left Sub-Column */}
                    <div className={styles.colParallaxLeft}>
                        {/* Card 1 */}
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>20+</div>
                            <div className={styles.statLabel}>Years of Excellence</div>
                            <GraduationCap size={22} className={styles.statIcon} />
                        </div>

                        {/* Card 2 */}
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>1500+</div>
                            <div className={styles.statLabel}>Students Enrolled</div>
                            <Users size={22} className={styles.statIcon} />
                        </div>
                    </div>

                    {/* Right Sub-Column */}
                    <div className={styles.colParallaxRight}>
                        {/* Card 3 */}
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>50+</div>
                            <div className={styles.statLabel}>Expert Faculty</div>
                            <UserCheck size={22} className={styles.statIcon} />
                        </div>

                        {/* Card 4 (Clickable Placement Assistance Card) */}
                        <Link
                            href="/placements"
                            className={`${styles.statCard} ${styles.placementCardLink}`}
                            title="Click to view full Placements & Recruitment details"
                        >
                            <div className={styles.placementNumbers}>
                                <div className={styles.placementItem}>
                                    <span className={styles.placementPercent}>88%</span>
                                    <span className={styles.placementTag}>B. Pharm</span>
                                </div>
                                <div className={styles.placementDivider} />
                                <div className={styles.placementItem}>
                                    <span className={styles.placementPercent}>98%</span>
                                    <span className={styles.placementTag}>Pharm.D</span>
                                </div>
                            </div>
                            <div className={styles.statLabel}>Placement Assistance</div>
                            <TrendingUp size={22} className={styles.statIcon} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}