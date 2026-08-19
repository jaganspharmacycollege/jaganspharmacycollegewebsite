'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Send, FlaskConical, Stethoscope, Microscope } from 'lucide-react';
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
                {/* Only OUR PROGRAMS header */}
                <div className={styles.topHeading}>
                    <span className={styles.eyebrow}>Our Programs</span>
                </div>

                <div className={styles.mainLayout}>
                    {/* Courses 3-Card Grid */}
                    <div className={styles.coursesGrid}>
                        {/* B. Pharmacy */}
                        <div className={styles.courseCard}>
                            <div className={`${styles.iconCircle} ${styles.bpharmIcon}`}>
                                <FlaskConical size={28} />
                            </div>
                            <h3 className={styles.courseName}>B. Pharmacy</h3>
                            <p className={styles.durationTag}>Duration: 4 Years</p>
                            <p className={styles.courseText}>
                                Undergraduate program that builds a strong foundation in pharmaceutical sciences.
                            </p>
                            <Link href="/courses/b-pharm" className={styles.learnMoreLink}>
                                Learn More <ArrowRight size={14} />
                            </Link>
                        </div>

                        {/* Pharm.D */}
                        <div className={styles.courseCard}>
                            <div className={`${styles.iconCircle} ${styles.pharmdIcon}`}>
                                <Stethoscope size={28} />
                            </div>
                            <h3 className={styles.courseName}>Pharm.D</h3>
                            <p className={styles.durationTag}>Duration: 6 Years</p>
                            <p className={styles.courseText}>
                                Doctor of Pharmacy program with clinical exposure and hands-on training.
                            </p>
                            <Link href="/courses/pharm-d" className={styles.learnMoreLink}>
                                Learn More <ArrowRight size={14} />
                            </Link>
                        </div>

                        {/* M. Pharmacy */}
                        <div className={styles.courseCard}>
                            <div className={`${styles.iconCircle} ${styles.mpharmIcon}`}>
                                <Microscope size={28} />
                            </div>
                            <h3 className={styles.courseName}>M. Pharmacy</h3>
                            <p className={styles.durationTag}>Duration: 2 Years</p>
                            <p className={styles.courseText}>
                                Postgraduate program with specialisation and research opportunities.
                            </p>
                            <Link href="/courses/m-pharm" className={styles.learnMoreLink}>
                                Learn More <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                    {/* Enquire Today Sidebar Box */}
                    <div className={styles.enquiryBox}>
                        <h3 className={styles.enquiryTitle}>Enquire Today</h3>
                        {submitted ? (
                            <p className="text-sm text-emerald-200 py-6 text-center leading-relaxed">
                                Thank you! We will get in touch with you shortly.
                            </p>
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
                                <select required className={styles.select}>
                                    <option value="">Select Course</option>
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
                                    Submit Enquiry <Send size={13} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}