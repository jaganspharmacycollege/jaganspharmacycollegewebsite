'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import styles from './AlumniShared.module.css';

export default function AlumniRegistration() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className={styles.sectionAlt}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    <div className={styles.imageFrame}>
                        <img
                            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80"
                            alt="Alumni Registration Portal"
                        />
                    </div>

                    <div className={styles.formCard}>
                        <span className={styles.eyebrow}>Stay Connected</span>
                        <h2 className={styles.title} style={{ fontSize: '1.75rem' }}>
                            Alumni Registration
                        </h2>
                        <div className={styles.accentLine} />

                        {submitted ? (
                            <div className="text-center py-8">
                                <CheckCircle2 size={42} className="text-emerald-700 mx-auto mb-2" />
                                <h3 className="text-lg font-bold text-[#053B2A]">Registration Submitted!</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Thank you for updating your alumni profile with Jagan&apos;s College of Pharmacy.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Full Name *</label>
                                    <input type="text" required placeholder="Your full name" className={styles.input} />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Email Address *</label>
                                    <input type="email" required placeholder="alumni@example.com" className={styles.input} />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Course Studied *</label>
                                    <select required className={styles.select}>
                                        <option value="">Select Course</option>
                                        <option value="b-pharm">B.Pharm</option>
                                        <option value="pharm-d">Pharm.D</option>
                                        <option value="m-pharm">M.Pharm</option>
                                    </select>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Year of Graduation *</label>
                                    <input type="text" required placeholder="e.g. 2021" className={styles.input} />
                                </div>

                                <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                                    <label className={styles.label}>Current Designation & Company</label>
                                    <input type="text" placeholder="e.g. Senior Research Scientist at Cipla" className={styles.input} />
                                </div>

                                <div className={styles.fullSpan}>
                                    <button type="submit" className={styles.submitBtn}>
                                        Register Profile <Send size={14} />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}