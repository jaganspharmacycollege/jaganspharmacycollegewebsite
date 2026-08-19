'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import styles from '../AdmissionsLayout.module.css';

export default function ApplicationFormPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Online Registration</span>
                    <h1 className={styles.title}>Application Form</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Fill out the official online application form to register your interest for admission in the 2026-27 academic session.
                    </p>
                </div>

                <div className={styles.card}>
                    {submitted ? (
                        <div className="text-center py-10">
                            <h3 className="text-2xl font-bold text-[#053B2A]">Application Submitted Successfully!</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Our admission counseling team will review your application and contact you within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.formGrid}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Full Name *</label>
                                <input type="text" required placeholder="Enter student's full name" className={styles.input} />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Father / Guardian Name *</label>
                                <input type="text" required placeholder="Enter guardian name" className={styles.input} />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Phone Number *</label>
                                <input type="tel" required placeholder="+91 98765 43210" className={styles.input} />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Email Address *</label>
                                <input type="email" required placeholder="student@example.com" className={styles.input} />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Program Applying For *</label>
                                <select required className={styles.select}>
                                    <option value="">Select Course</option>
                                    <option value="b-pharm">Bachelor of Pharmacy (B.Pharm)</option>
                                    <option value="pharm-d">Doctor of Pharmacy (Pharm.D)</option>
                                    <option value="m-pharm">Master of Pharmacy (M.Pharm)</option>
                                </select>
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Entrance Rank / Aggregate % *</label>
                                <input type="text" required placeholder="e.g. AP EAPCET Rank: 14250 or 85%" className={styles.input} />
                            </div>

                            <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                                <label className={styles.label}>Communication Address</label>
                                <textarea rows={3} placeholder="Enter your full residential address" className={styles.textarea} />
                            </div>

                            <div className={styles.fullSpan}>
                                <button type="submit" className={styles.submitBtn}>
                                    Submit Application <Send size={15} />
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}