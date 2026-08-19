'use client';

import React from 'react';
import Link from 'next/link';
import { Award, GraduationCap, Bell, Calendar, ChevronRight, Sparkles } from 'lucide-react';
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

                {/* Notifications & Events Glass Strip */}
                <div className={styles.newsStrip}>
                    {/* Latest Notifications */}
                    <div className={styles.stripCol}>
                        <div className={styles.stripHeader}>
                            <span className={styles.stripTitle}>
                                <Bell size={14} className="text-emerald-400" />
                                Latest Notifications
                            </span>
                            <div className={styles.liveDot} title="Live Updates" />
                        </div>

                        <div className={styles.stripItems}>
                            <Link href="/admissions" className={styles.stripLink}>
                                <span className={styles.dateBadge}>AUG 2026</span>
                                <span className="truncate">B.Pharm & Pharm.D 2026-27 Admissions Counseling Schedule Released.</span>
                            </Link>
                            <Link href="/academics/calendar" className={styles.stripLink}>
                                <span className={styles.dateBadge}>AUG 2026</span>
                                <span className="truncate">End Semester Practical Examination Timetable Updated.</span>
                            </Link>
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className={styles.stripCol}>
                        <div className={styles.stripHeader}>
                            <span className={styles.stripTitle}>
                                <Calendar size={14} className="text-amber-400" />
                                Upcoming Events
                            </span>
                            <Link href="/campus-life/seminar-workshops" className="text-xs font-bold text-[#fbbf24] flex items-center">
                                View All <ChevronRight size={12} />
                            </Link>
                        </div>

                        <div className={styles.stripItems}>
                            <Link href="/campus-life/seminar-workshops" className={styles.stripLink}>
                                <span className={styles.dateBadge}>SEP 12</span>
                                <span className="truncate">National Seminar on Modern Drug Regulatory Filings & AI.</span>
                            </Link>
                            <Link href="/alumni" className={styles.stripLink}>
                                <span className={styles.dateBadge}>DEC 19</span>
                                <span className="truncate">Annual Global Alumni Homecoming & Mentorship Meet 2026.</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}