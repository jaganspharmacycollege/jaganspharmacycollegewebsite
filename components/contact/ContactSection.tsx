'use client';

import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* 1. Contact Us Heading */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Get in Touch</span>
                    <h1 className={styles.title}>Contact Us</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Have questions about admissions, courses, or campus visits? Reach out to our administrative and academic office directly.
                    </p>
                </div>

                <div className={styles.mainGrid}>
                    {/* Left Column: College Address, Email, and Google Map */}
                    <div className={styles.infoColumn}>
                        {/* 2. College Address */}
                        <div className={styles.card}>
                            <div className={styles.infoBlock}>
                                <div className={styles.iconWrapper}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className={styles.infoLabel}>Campus Location</p>
                                    <h3 className={styles.infoTitle}>College Address</h3>
                                    <p className={styles.infoText}>
                                        Jagan&apos;s College of Pharmacy,<br />
                                        Jangala Kandriga, Muthukur Road,<br />
                                        Nellore, Andhra Pradesh – 524346, India.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Email & Contact Direct */}
                        <div className={styles.card}>
                            <div className={styles.infoBlock}>
                                <div className={styles.iconWrapper}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className={styles.infoLabel}>Communication</p>
                                    <h3 className={styles.infoTitle}>Email & Phone</h3>
                                    <p className={styles.infoText}>
                                        <strong>Official Email:</strong>{' '}
                                        <a href="mailto:info@jaganspharmacy.edu.in" className={styles.link}>
                                            info@jaganspharmacy.edu.in
                                        </a>
                                    </p>
                                    <p className={styles.infoText}>
                                        <strong>Admissions Desk:</strong>{' '}
                                        <a href="mailto:admissions@jaganspharmacy.edu.in" className={styles.link}>
                                            admissions@jaganspharmacy.edu.in
                                        </a>
                                    </p>
                                    <p className={`${styles.infoText} mt-1`}>
                                        <strong>Phone:</strong> +91 861 2345678 / +91 98765 43210
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Google Maps / Location */}
                        <div className={styles.mapContainer}>
                            <iframe
                                title="Jagan's College of Pharmacy Location"
                                src="https://maps.google.com/maps?q=Nellore,+Andhra+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                className={styles.mapFrame}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Right Column: 5. Enquiry Form */}
                    <div className={styles.formCard}>
                        {submitted ? (
                            <div className={styles.successMessage}>
                                <CheckCircle2 size={48} className="text-emerald-700 mx-auto mb-3" />
                                <h3 className={styles.formTitle}>Thank You for Reaching Out!</h3>
                                <p className={styles.infoText}>
                                    Your enquiry has been received successfully. Our admission team will contact you shortly.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className={`${styles.submitBtn} mt-6`}
                                    style={{ width: 'auto', margin: '1.5rem auto 0 auto' }}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h2 className={styles.formTitle}>Enquiry Form</h2>
                                <p className={styles.formSub}>
                                    Please fill out the form below for admission or general inquiries.
                                </p>

                                <form onSubmit={handleSubmit} className={styles.formGrid}>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enter your name"
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>Phone Number *</label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="+91 98765 43210"
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                                        <label className={styles.label}>Email Address *</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="your.email@example.com"
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                                        <label className={styles.label}>Course of Interest *</label>
                                        <select required className={styles.select}>
                                            <option value="">Select Course</option>
                                            <option value="b-pharm">Bachelor of Pharmacy (B.Pharm)</option>
                                            <option value="pharm-d">Doctor of Pharmacy (Pharm.D)</option>
                                            <option value="m-pharm">Master of Pharmacy (M.Pharm)</option>
                                            <option value="general">General Inquiry</option>
                                        </select>
                                    </div>

                                    <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                                        <label className={styles.label}>Message / Questions *</label>
                                        <textarea
                                            required
                                            rows={4}
                                            placeholder="How can we assist you?"
                                            className={styles.textarea}
                                        />
                                    </div>

                                    <div className={styles.fullSpan}>
                                        <button type="submit" className={styles.submitBtn}>
                                            Submit Enquiry <Send size={15} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}