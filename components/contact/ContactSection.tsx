'use client';
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Mail, Send, CheckCircle2 } from 'lucide-react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        course: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/send-contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    course: '',
                    message: '',
                });
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
        } finally {
            setIsSubmitting(false);
        }
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
        <section ref={sectionRef} className={styles.section}>
            {/* Ambient Parallax Lighting Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />
            <div className={styles.container}>
                {/* 1. Contact Us Heading */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <span className={styles.eyebrow}>Get in Touch</span>
                    <h1 className={styles.title}>Contact Us</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Have questions about admissions, courses, or campus visits? Reach
                        out to our administrative and academic office directly.
                    </p>
                </div>

                {/* Main Grid Layout */}
                <div className={styles.mainGrid}>
                    {/* Left Column: College Address, Email, and Google Map */}
                    <div
                        className={`${styles.infoColumn} ${isVisible ? styles.animateLeftCol : styles.hiddenState
                            }`}
                    >
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
                                        Jagan&apos;s College of Pharmacy, <br />
                                        Jangala Kandriga, Muthukur Road, <br />
                                        Nellore, Andhra Pradesh 524346, India.
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
                                    <h3 className={styles.infoTitle}>Email &amp; Phone</h3>
                                    <p className={styles.infoText}>
                                        <strong>Official Email: </strong>
                                        <a
                                            href="mailto:principal.jcp@gmail.com"
                                            className={styles.link}
                                        >
                                            principal.jcp@gmail.com
                                        </a>
                                    </p>
                                    <p className={styles.infoText}>
                                        <strong>Admissions Desk: </strong>
                                        <a
                                            href="mailto:admissions.jcp@gmail.com"
                                            className={styles.link}
                                        >
                                            admissions.jcp@gmail.com
                                        </a>
                                    </p>
                                    <p className={`${styles.infoText} ${styles.mt1}`}>
                                        <strong>Phone:</strong> +91 7680077726 / +91 7680077726
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Google Maps / Location Container */}
                        <div className={styles.mapContainer}>
                            <iframe
                                title="Jagan's College of Pharmacy Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4039.596580697175!2d80.05553690451647!3d14.357158758953533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf5d5e9abfb1f%3A0xfa2fe2be492fc92c!2sJagan's%20College%20of%20Pharmacy!5e1!3m2!1sen!2sin!4v1789715030603!5m2!1sen!2sin"
                                className={styles.mapFrame}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Right Column: 5. Enquiry Form */}
                    <div
                        className={`${styles.formCard} ${isVisible ? styles.animateRightCol : styles.hiddenState
                            }`}
                    >
                        {submitted ? (
                            <div className={styles.successMessage}>
                                <CheckCircle2 size={48} className={styles.successIcon} />
                                <h3 className={styles.formTitle}>
                                    Thank You for Reaching Out!
                                </h3>
                                <p className={styles.infoText}>
                                    Your enquiry has been received successfully. Our admission team
                                    will contact you shortly.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className={styles.submitBtn}
                                    style={{
                                        width: 'auto',
                                        margin: '1.5rem auto 0 auto',
                                    }}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h2 className={styles.formTitle}>Enquiry Form</h2>
                                <p className={styles.formSub}>
                                    Please fill out the form below for admission or general
                                    inquiries.
                                </p>
                                <form onSubmit={handleSubmit} className={styles.formGrid}>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>Phone Number *</label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="+91 98765 43210"
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                                        <label className={styles.label}>Email Address *</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="your.email@example.com"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                                        <label className={styles.label}>Course of Interest *</label>
                                        <select
                                            required
                                            value={formData.course}
                                            onChange={(e) =>
                                                setFormData({ ...formData, course: e.target.value })
                                            }
                                            className={styles.select}
                                        >
                                            <option value="">Select Course</option>
                                            <option value="b-pharm">
                                                Bachelor of Pharmacy (B.Pharm)
                                            </option>
                                            <option value="pharm-d">
                                                Doctor of Pharmacy (Pharm.D)
                                            </option>
                                            <option value="m-pharm">
                                                Master of Pharmacy (M.Pharm)
                                            </option>
                                            <option value="general">General Inquiry</option>
                                        </select>
                                    </div>

                                    <div className={`${styles.inputGroup} ${styles.fullSpan}`}>
                                        <label className={styles.label}>Message / Questions *</label>
                                        <textarea
                                            required
                                            rows={4}
                                            placeholder="How can we assist you?"
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            className={styles.textarea}
                                        />
                                    </div>

                                    <div className={styles.fullSpan}>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={styles.submitBtn}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Submit Enquiry'}{' '}
                                            <Send size={15} />
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