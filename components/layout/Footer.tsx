'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ExternalLink, Award, ShieldCheck } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* 1. Contact Ribbon */}
                <div className={styles.contactBar}>
                    <a href="tel:+917680077726" className={styles.contactCard}>
                        <div className={styles.contactIcon}>
                            <Phone size={18} />
                        </div>
                        <div>
                            <p className={styles.contactLabel}>Admissions Helpline</p>
                            <p className={styles.contactValue}>+91 76800 77726</p>
                        </div>
                    </a>

                    <a href="mailto:principal.jcp@gmail.com" className={styles.contactCard}>
                        <div className={styles.contactIcon}>
                            <Mail size={18} />
                        </div>
                        <div>
                            <p className={styles.contactLabel}>Official Inquiries</p>
                            <p className={styles.contactValue}>principal.jcp@gmail.com</p>
                        </div>
                    </a>

                    <Link href="/contact" className={styles.contactCard}>
                        <div className={styles.contactIcon}>
                            <MapPin size={18} />
                        </div>
                        <div>
                            <p className={styles.contactLabel}>Campus Location</p>
                            <p className={styles.contactValue}>Jagan&apos;s College of Pharmacy, Jangalakandriga, Nellore, A.P</p>
                        </div>
                    </Link>
                </div>

                {/* 2. Main Section */}
                <div className={styles.mainGrid}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className={styles.logoLink}>
                            <div className={styles.logoOuter}>
                                <img
                                    src="/assets/logo/Jagans_logo.png"
                                    alt="Jagan's College of Pharmacy"
                                    className={styles.logoImg}
                                />
                            </div>
                            <div className={styles.brandTextGroup}>
                                <h3 className={styles.brandTitle}>Jagan&apos;s</h3>
                                <p className={styles.brandSubtitle}>COLLEGE OF PHARMACY</p>
                            </div>
                        </Link>

                        <p className={styles.brandDescription}>
                            Empowering pharmaceutical scholars with advanced clinical competencies, evidence-based research, and industrial linkages to build healthier tomorrows.
                        </p>

                        <div className={styles.accreditationBadges}>
                            <span className={styles.badge}>
                                <Award size={13} /> JNTUA Affiliated
                            </span>
                            <span className={styles.badge}>
                                <ShieldCheck size={13} /> Approved by PCI
                            </span>
                        </div>
                    </div>

                    {/* Clean 5-Column Navigation */}
                    <div className={styles.linksGrid}>
                        {/* 1. Explore */}
                        <div className={styles.columnBlock}>
                            <h4 className={styles.columnTitle}>Explore</h4>
                            <ul className={styles.linkList}>
                                <li><Link href="/about" className={styles.linkItem}>About Us</Link></li>
                                <li><Link href="/courses" className={styles.linkItem}>Programs Offered</Link></li>
                                <li><Link href="/admissions" className={styles.linkItem}>Admissions</Link></li>
                                <li><Link href="/infrastructure" className={styles.linkItem}>Campus Infrastructure</Link></li>
                                <li><Link href="/alumni" className={styles.linkItem}>Alumni Network</Link></li>
                            </ul>
                        </div>

                        {/* 2. Academics */}
                        <div className={styles.columnBlock}>
                            <h4 className={styles.columnTitle}>Academics</h4>
                            <ul className={styles.linkList}>
                                <li><Link href="/academics/calendar" className={styles.linkItem}>Academic Calendar</Link></li>
                                <li><Link href="/academics/departments" className={styles.linkItem}>Departments &amp; Faculty</Link></li>
                                <li><Link href="/courses/b-pharm" className={styles.linkItem}>B.Pharm Curriculum</Link></li>
                                <li><Link href="/courses/pharm-d" className={styles.linkItem}>Pharm.D Program</Link></li>
                                <li><Link href="/courses/m-pharm" className={styles.linkItem}>M.Pharm Specializations</Link></li>
                            </ul>
                        </div>

                        {/* 3. Campus */}
                        <div className={styles.columnBlock}>
                            <h4 className={styles.columnTitle}>Campus</h4>
                            <ul className={styles.linkList}>
                                <li><Link href="/campus-life/student-activities" className={styles.linkItem}>Student Clubs &amp; Activities</Link></li>
                                <li><Link href="/campus-life/sports" className={styles.linkItem}>Sports &amp; Gymnasium</Link></li>
                                <li><Link href="/campus-life/hostel" className={styles.linkItem}>Hostel Facilities</Link></li>
                                <li><Link href="/campus-life/seminar-workshops" className={styles.linkItem}>Seminars &amp; Workshops</Link></li>
                                <li><Link href="/placements" className={styles.linkItem}>Training &amp; Placements</Link></li>
                            </ul>
                        </div>

                        {/* 4. Statutory */}
                        <div className={styles.columnBlock}>
                            <h4 className={styles.columnTitle}>Statutory</h4>
                            <ul className={styles.linkList}>
                                <li><Link href="/campus-life/anti-ragging" className={styles.linkItem}>Anti-Ragging Cell</Link></li>
                                <li><Link href="/disclosures" className={styles.linkItem}>Mandatory Disclosures</Link></li>
                                <li><Link href="/disclosures/aicte" className={styles.linkItem}>AICTE EOA Disclosure</Link></li>
                                <li><Link href="/faculty-publications" className={styles.linkItem}>Faculty Publications</Link></li>
                                <li><Link href="/admissions/fee-structure" className={styles.linkItem}>Fee Regulations</Link></li>
                            </ul>
                        </div>

                        {/* 5. Portals */}
                        <div className={styles.columnBlock}>
                            <h4 className={styles.columnTitle}>Portals</h4>
                            <ul className={styles.linkList}>
                                <li>
                                    <a href="https://www.jntua.ac.in" target="_blank" rel="noreferrer" className={styles.linkItem}>
                                        JNTUA Anantapur
                                        <ExternalLink size={11} className={styles.extIcon} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://aicte-india.org" target="_blank" rel="noreferrer" className={styles.linkItem}>
                                        AICTE Portal
                                        <ExternalLink size={11} className={styles.extIcon} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://sche.ap.gov.in" target="_blank" rel="noreferrer" className={styles.linkItem}>
                                        APSCHE Portal
                                        <ExternalLink size={11} className={styles.extIcon} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Legal Bar */}
                <div className={styles.bottomBar}>
                    <p>© {new Date().getFullYear()} Jagan&apos;s College of Pharmacy. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
                        <span className={styles.legalDivider}></span>
                        <Link href="/terms-conditions" className={styles.legalLink}>Terms of Use</Link>
                        <span className={styles.legalDivider}></span>
                        <Link href="/sitemap" className={styles.legalLink}>Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}