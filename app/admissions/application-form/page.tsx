'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import styles from './ApplicationFormPage.module.css';

export default function ApplicationFormPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    // Repeating scroll-triggered entrance detection
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Ultra-slow fluid linear-interpolated (lerp 0.035) parallax animation
    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;

        const updateParallax = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();

            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                currentScroll += (targetScroll - currentScroll) * 0.035;
                const relativeOffset = window.innerHeight - rect.top;

                if (orbLeftRef.current) {
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06
                        }px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05
                        }px, 0)`;
                }
            }

            animationFrameId = requestAnimationFrame(updateParallax);
        };

        const handleScroll = () => {
            targetScroll = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateParallax);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            {/* Subtle Ambient Parallax Depth Layers */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Left-Aligned Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <span className={styles.eyebrow}>Online Registration</span>
                    <h1 className={styles.title}>Application Form</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Fill out the official online application form to register your interest for admission in the 2026-27 academic session.
                    </p>
                </div>

                {/* Form Card */}
                <div
                    className={`${styles.card} ${isVisible ? styles.animateCard : styles.hiddenState
                        }`}
                >
                    {submitted ? (
                        <div className={styles.successState}>
                            <CheckCircle2 size={44} className={styles.successIcon} />
                            <h3 className={styles.successTitle}>
                                Application Submitted Successfully!
                            </h3>
                            <p className={styles.successDesc}>
                                Our admission counseling team will review your details and reach out within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.formGrid}>
                            {/* Full Name */}
                            <div
                                className={`${styles.inputGroup} ${isVisible ? styles.animDelay1 : styles.hiddenState
                                    }`}
                            >
                                <label className={styles.label}>Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter student's full name"
                                    className={styles.input}
                                />
                            </div>

                            {/* Father / Guardian Name */}
                            <div
                                className={`${styles.inputGroup} ${isVisible ? styles.animDelay2 : styles.hiddenState
                                    }`}
                            >
                                <label className={styles.label}>Father / Guardian Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter guardian name"
                                    className={styles.input}
                                />
                            </div>

                            {/* Phone Number */}
                            <div
                                className={`${styles.inputGroup} ${isVisible ? styles.animDelay3 : styles.hiddenState
                                    }`}
                            >
                                <label className={styles.label}>Phone Number *</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+91 98765 43210"
                                    className={styles.input}
                                />
                            </div>

                            {/* Email Address */}
                            <div
                                className={`${styles.inputGroup} ${isVisible ? styles.animDelay4 : styles.hiddenState
                                    }`}
                            >
                                <label className={styles.label}>Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="student@example.com"
                                    className={styles.input}
                                />
                            </div>

                            {/* Program Applying For */}
                            <div
                                className={`${styles.inputGroup} ${isVisible ? styles.animDelay5 : styles.hiddenState
                                    }`}
                            >
                                <label className={styles.label}>Program Applying For *</label>
                                <select required defaultValue="" className={styles.select}>
                                    <option value="" disabled>
                                        Select Course
                                    </option>
                                    <option value="b-pharm">
                                        Bachelor of Pharmacy (B.Pharm)
                                    </option>
                                    <option value="pharm-d">
                                        Doctor of Pharmacy (Pharm.D)
                                    </option>
                                    <option value="m-pharm">
                                        Master of Pharmacy (M.Pharm)
                                    </option>
                                </select>
                            </div>

                            {/* Entrance Rank / Aggregate % */}
                            <div
                                className={`${styles.inputGroup} ${isVisible ? styles.animDelay6 : styles.hiddenState
                                    }`}
                            >
                                <label className={styles.label}>
                                    Entrance Rank / Aggregate % *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. AP EAPCET Rank: 14250 or 85%"
                                    className={styles.input}
                                />
                            </div>

                            {/* Communication Address */}
                            <div
                                className={`${styles.inputGroup} ${styles.fullSpan} ${isVisible ? styles.animDelay6 : styles.hiddenState
                                    }`}
                            >
                                <label className={styles.label}>Communication Address</label>
                                <textarea
                                    rows={4}
                                    placeholder="Enter your full residential address"
                                    className={styles.textarea}
                                />
                            </div>

                            {/* Submit Button */}
                            <div
                                className={`${styles.fullSpan} ${isVisible ? styles.animDelay6 : styles.hiddenState
                                    }`}
                            >
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