'use client';

import React from 'react';
import Link from 'next/link';
import {
    Award,
    GraduationCap,
    Sparkles,
    ArrowRight,
    Volume2,
} from 'lucide-react';
import styles from './HomeHeroSection.module.css';

export default function HomeHeroSection() {
    return (
        <section className={styles.heroSection}>
            {/* Authentic Pharmacy College Campus & Research Lab Background */}
            <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2000&q=85"
                alt="Pharmacy College Research Laboratories and Campus"
                className={styles.bgImage}
            />
            <div className={styles.overlay} />

            {/* Layered Ambient Parallax Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Main Content Area */}
                <div className={styles.heroContent}>
                    <div className={styles.eyebrowBadge}>
                        <Sparkles size={13} />
                        <span>Building Healthier Tomorrows</span>
                    </div>

                    <h1 className={styles.heading}>
                        Jagan&apos;s College <br />
                        <span className={styles.headingGold}>of Pharmacy</span>
                    </h1>

                    <p className={styles.subtext}>
                        Empowering future pharmacists with clinical competencies, pharmaceutical research innovation, and compassion to lead global healthcare.
                    </p>

                    {/* Affiliation Badges */}
                    <div className={styles.badgesRow}>
                        <div className={styles.badgeItem}>
                            <div className={styles.badgeIcon}>
                                <Award size={20} />
                            </div>
                            <div>
                                <p className={styles.badgeTitle}>Affiliated to JNTUA</p>
                                <p className={styles.badgeSubtitle}>Jawaharlal Nehru Tech University</p>
                            </div>
                        </div>

                        <div className={styles.badgeItem}>
                            <div className={styles.badgeIcon}>
                                <GraduationCap size={20} />
                            </div>
                            <div>
                                <p className={styles.badgeTitle}>Academic Excellence</p>
                                <p className={styles.badgeSubtitle}>B.Pharm • Pharm.D • M.Pharm</p>
                            </div>
                        </div>
                    </div>

                    {/* Action CTAs */}
                    <div className={styles.ctaRow}>
                        <Link href="/contact" className={styles.btnPrimary}>
                            Enquiry Form
                        </Link>
                        <Link href="/admissions/application-form" className={styles.btnSecondary}>
                            Online Application
                        </Link>
                        <Link href="/contact" className={styles.btnGold}>
                            Campus Visit (Tour Enquiry)
                        </Link>
                    </div>
                </div>

                {/* Continuous Right-to-Left Ticker Glass Strip */}
                <Link href="/notifications-and-events" className={styles.tickerCardLink}>
                    <div className={styles.tickerBadge}>
                        <Volume2 size={15} className={styles.pulseIcon} />
                        <span>Live Updates</span>
                    </div>

                    <div className={styles.marqueeTrackWrapper}>
                        <div className={styles.marqueeContent}>
                            <span className={styles.tickerItem}>
                                <strong className={styles.goldHighlight}>Latest Notifications &amp; Upcoming Events</strong>: B.Pharm &amp; Pharm.D 2026-27 Admissions Counseling Schedule Released • National Seminar on Modern Drug Regulatory Filings &amp; AI • Annual Global Alumni Homecoming Meet 2026 • End Semester Practical Examination Timetable Updated
                            </span>
                            <span className={styles.tickerItem}>
                                <strong className={styles.goldHighlight}>Latest Notifications &amp; Upcoming Events</strong>: B.Pharm &amp; Pharm.D 2026-27 Admissions Counseling Schedule Released • National Seminar on Modern Drug Regulatory Filings &amp; AI • Annual Global Alumni Homecoming Meet 2026 • End Semester Practical Examination Timetable Updated
                            </span>
                        </div>
                    </div>

                    <div className={styles.actionPill}>
                        <span>View All</span>
                        <ArrowRight size={13} />
                    </div>
                </Link>
            </div>
        </section>
    );
}