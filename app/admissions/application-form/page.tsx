'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import styles from './ApplicationFormPage.module.css';

export default function ApplicationFormPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className={styles.pageWrapper}>
            {/* Subtle Ambient Parallax Depth Layers */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Exact Left-Aligned Header from Screenshot */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>ONLINE REGISTRATION</span>
                    <h1 className={styles.title}>Application Form</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Fill out the official online application form to register your interest for admission in the 2026–27 academic session.
                    </p>
                </div>

                {/* Form Card */}
                <div className={styles.card}>
                    {submitted ? (
                        <div className={styles.successState}>
                            <CheckCircle2 size={44} className={styles.successIcon} />
                            <h3 className={styles.successTitle}>Application Submitted Successfully!</h3>
                            <p className={styles.successDesc}>
                                Our admission counseling team will review your details and reach out within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.formGrid}>
                            {/* Full Name */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter student's full name"
                                    className={styles.input}
                                />
                            </div>

                            {/* Father / Guardian Name */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Father / Guardian Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter guardian name"
                                    className={styles.input}
                                />
                            </div>

                            {/* Phone Number */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Phone Number *</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+91 98765 43210"
                                    className={styles.input}
                                />
                            </div>

                            {/* Email Address */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="student@example.com"
                                    className={styles.input}
                                />
                            </div>

                            {/* Program Applying For */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Program Applying For *</label>
                                <select required defaultValue="" className={styles.select}>
                                    <option value="" disabled>
                                        Select Course
                                    </option>
                                    <option value="b-pharm">Bachelor of Pharmacy (B.Pharm)</option>
                                    <option value="pharm-d">Doctor of Pharmacy (Pharm.D)</option>
                                    <option value="m-pharm">Master of Pharmacy (M.Pharm)</option>
                                </select>
                            </div>

                            {/* Entrance Rank / Aggregate % */}
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Entrance Rank / Aggregate % *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. AP EAPCET Rank: 14250 or 85%"
                                    className={styles.input}
                                />
                            </div>

                            {/* Communication Address */}
                            <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                                <label className={styles.label}>Communication Address</label>
                                <textarea
                                    rows={4}
                                    placeholder="Enter your full residential address"
                                    className={styles.textarea}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className={styles.fullSpan}>
                                <button type="submit" className={styles.submitBtn}>
                                    <span>Submit Application</span>
                                    <Send size={15} className={styles.sendIcon} />
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}