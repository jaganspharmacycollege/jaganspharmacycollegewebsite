'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import styles from './AlumniRegistration.module.css';

const registrationSlides = [
    {
        src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
        caption: 'Global Alumni Enrollment & Professional Directory Portal',
    },
    {
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        caption: 'Exclusive Career Networking, Guest Lectures & Mentorship Hub',
    },
    {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        caption: 'Invitations to Annual Alumni Meets & Global Pharmaceutical Summits',
    },
];

export default function AlumniRegistration() {
    const [submitted, setSubmitted] = useState(false);
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % registrationSlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className={styles.sectionAlt}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    {/* Left Column: Rounded Auto-sliding Image Carousel */}
                    <div className={styles.carouselContainer}>
                        <div className={styles.imageFrame}>
                            {registrationSlides.map((slide, idx) => (
                                <img
                                    key={idx}
                                    src={slide.src}
                                    alt={slide.caption}
                                    className={`${styles.carouselImg} ${idx === currentImgIdx ? styles.activeImg : styles.inactiveImg
                                        }`}
                                />
                            ))}
                            <div className={styles.imageOverlay} />

                            {/* Top Amber Code Badges */}
                            <div className={styles.badgesHeader}>
                                <span className={styles.codeBadge}>
                                    <Layers size={13} className={styles.codeIcon} />
                                    <span>ALUMNI PORTAL</span>
                                </span>
                                <span className={styles.specBadge}>Official Membership • Lifetime Connect</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {registrationSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {registrationSlides.map((_, dotIdx) => (
                                        <button
                                            key={dotIdx}
                                            onClick={() => setCurrentImgIdx(dotIdx)}
                                            className={`${styles.dot} ${dotIdx === currentImgIdx ? styles.activeDot : ''
                                                }`}
                                            aria-label={`Go to slide ${dotIdx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Form Card */}
                    <div className={styles.formCard}>
                        <div className={styles.eyebrowTag}>
                            <Sparkles size={14} className={styles.eyebrowIcon} />
                            <span>Stay Connected</span>
                        </div>
                        <h2 className={styles.title}>Alumni Registration</h2>
                        <div className={styles.accentLine} />

                        {submitted ? (
                            <div className={styles.successWrapper}>
                                <div className={styles.successIconBubble}>
                                    <CheckCircle2 size={42} className={styles.successIcon} />
                                </div>
                                <h3 className={styles.successTitle}>Registration Submitted!</h3>
                                <p className={styles.successText}>
                                    Thank You For Updating Your Alumni Profile With Jagan&apos;s College Of Pharmacy.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your full name"
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Email Address *</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="alumni@example.com"
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Course Studied *</label>
                                    <select required className={styles.select}>
                                        <option value="">Select Course</option>
                                        <option value="b-pharm">B. Pharm</option>
                                        <option value="pharm-d">Pharm.D</option>
                                        <option value="m-pharm">M.Pharm</option>
                                    </select>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Year of Graduation *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. 2021"
                                        className={styles.input}
                                    />
                                </div>

                                <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                                    <label className={styles.label}>Current Designation &amp; Company</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Senior Research Scientist at Cipla"
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.fullSpan}>
                                    <button type="submit" className={styles.submitBtn}>
                                        <span>Register Profile</span>
                                        <Send size={15} className={styles.btnIcon} />
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