'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    Send,
    FlaskConical,
    Stethoscope,
    Microscope,
    CheckCircle2,
    Sparkles,
} from 'lucide-react';
import styles from './HomeCoursesEnquirySection.module.css';

export default function HomeCoursesEnquirySection() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Top Header */}
                <div className={styles.topHeading}>
                    <span className={styles.eyebrow}>Our Programs</span>
                </div>

                <div className={styles.mainLayout}>
                    {/* Courses 3-Card Grid */}
                    <div className={styles.coursesGrid}>
                        {/* 1. B. Pharmacy */}
                        <div className={`${styles.courseCard} ${styles.cardBpharm}`}>
                            <div className={styles.cardTop}>
                                <div className={`${styles.iconCircle} ${styles.bpharmIcon}`}>
                                    <FlaskConical size={28} />
                                </div>
                                <h3 className={styles.courseName}>B. Pharmacy</h3>
                                <span className={styles.durationBadge}>Duration: 4 Years</span>

                                <p className={styles.courseText}>
                                    Undergraduate program that builds a strong foundation in pharmaceutical sciences,
                                    medicinal chemistry, drug development, dosage formulation, and laboratory instrumentation.
                                </p>
                                <p className={styles.courseSubText}>
                                    Prepares graduates for diverse careers in pharmaceutical manufacturing, quality assurance,
                                    drug regulatory affairs, marketing, and competitive examinations like GPAT.
                                </p>
                            </div>

                            <Link href="/courses/b-pharm" className={styles.learnMoreLink}>
                                <span>Learn More</span>
                                <ArrowRight size={14} />
                            </Link>
                        </div>

                        {/* 2. Pharm.D */}
                        <div className={`${styles.courseCard} ${styles.cardPharmd}`}>
                            <div className={styles.cardTop}>
                                <div className={`${styles.iconCircle} ${styles.pharmdIcon}`}>
                                    <Stethoscope size={28} />
                                </div>
                                <h3 className={styles.courseName}>Pharm.D</h3>
                                <span className={styles.durationBadge}>Duration: 6 Years</span>

                                <p className={styles.courseText}>
                                    Doctor of Pharmacy professional doctorate curriculum focused on patient-centered
                                    healthcare, therapeutic drug monitoring, hospital ward rounds, and clinical pharmacokinetics.
                                </p>
                                <p className={styles.courseSubText}>
                                    Includes an extensive 1-year residency internship in multi-specialty hospitals, equipping
                                    students for clinical pharmacy practice and global healthcare research careers.
                                </p>
                            </div>

                            <Link href="/courses/pharm-d" className={styles.learnMoreLink}>
                                <span>Learn More</span>
                                <ArrowRight size={14} />
                            </Link>
                        </div>

                        {/* 3. M. Pharmacy */}
                        <div className={`${styles.courseCard} ${styles.cardMpharm}`}>
                            <div className={styles.cardTop}>
                                <div className={`${styles.iconCircle} ${styles.mpharmIcon}`}>
                                    <Microscope size={28} />
                                </div>
                                <h3 className={styles.courseName}>M. Pharmacy</h3>
                                <span className={styles.durationBadge}>Duration: 2 Years</span>

                                <p className={styles.courseText}>
                                    Postgraduate program offering advanced specialization and research exposure in
                                    Pharmaceutics, Pharmacology, and Pharmaceutical Analysis with dedicated dissertation projects.
                                </p>
                                <p className={styles.courseSubText}>
                                    Focuses on modern analytical techniques (HPLC, UV-Vis, FTIR), novel drug delivery systems,
                                    pharmacological screening, and high-impact biomedical publications.
                                </p>
                            </div>

                            <Link href="/courses/m-pharm" className={styles.learnMoreLink}>
                                <span>Learn More</span>
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                    {/* Enquire Today Sidebar Box */}
                    <div className={styles.enquiryBox}>
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles size={16} className="text-amber-400" />
                            <h3 className={styles.enquiryTitle}>Enquire Today</h3>
                        </div>
                        <p className={styles.enquirySubtitle}>
                            Get immediate admission guidance and fee breakdown.
                        </p>

                        {submitted ? (
                            <div className="py-8 text-center flex flex-col items-center justify-center gap-3">
                                <CheckCircle2 size={38} className="text-emerald-400" />
                                <p className="text-sm text-emerald-100 font-semibold leading-relaxed">
                                    Thank you! We will get in touch with you shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.enquiryForm}>
                                <input
                                    type="text"
                                    required
                                    placeholder="Your Name"
                                    className={styles.input}
                                />
                                <input
                                    type="tel"
                                    required
                                    placeholder="Mobile Number"
                                    className={styles.input}
                                />
                                <input
                                    type="email"
                                    required
                                    placeholder="Email Address"
                                    className={styles.input}
                                />
                                <select required className={styles.select} defaultValue="">
                                    <option value="" disabled>
                                        Select Course
                                    </option>
                                    <option value="bpharm">B. Pharmacy</option>
                                    <option value="pharmd">Pharm.D</option>
                                    <option value="mpharm">M. Pharmacy</option>
                                </select>
                                <textarea
                                    rows={3}
                                    placeholder="Your Message"
                                    className={styles.textarea}
                                />
                                <button type="submit" className={styles.btnSubmit}>
                                    <span>Submit Enquiry</span>
                                    <Send size={13} className="rotate-45" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}