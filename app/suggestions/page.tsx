'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    ArrowLeft,
    Send,
    CheckCircle,
    AlertCircle,
    Lightbulb,
    Building,
    GraduationCap,
    Loader2,
} from 'lucide-react';
import styles from './Suggestions.module.css';

export default function SuggestionsPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        userRole: 'Student',
        category: 'Academic Curriculum',
        subject: '',
        suggestion: '',
    });

    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isMounted = true;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isMounted && entry) {
                    setIsVisible(entry.isIntersecting);
                }
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            isMounted = false;
            observer.disconnect();
        };
    }, []);

    // Parallax animation
    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;
        let isMounted = true;

        const updateParallax = () => {
            if (!isMounted || !sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                currentScroll += (targetScroll - currentScroll) * 0.035;
                const relativeOffset = window.innerHeight - rect.top;

                if (orbLeftRef.current) {
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06}px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05}px, 0)`;
                }
            }

            if (isMounted) {
                animationFrameId = requestAnimationFrame(updateParallax);
            }
        };

        const handleScroll = () => {
            if (!isMounted) return;
            targetScroll = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateParallax);

        return () => {
            isMounted = false;
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const res = await fetch('/api/suggestions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to submit suggestion.');
            }

            setSubmitted(true);
        } catch (err: any) {
            setErrorMessage(err.message || 'An unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            {/* Ambient Parallax Radial Depth Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Navigation Breadcrumb */}
                <div className={`${styles.backNav} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>Return to Home</span>
                    </Link>
                </div>

                {/* Page Header */}
                <div className={`${styles.header} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Continuous Improvement &amp; Feedback</span>
                    </div>
                    <h1 className={styles.title}>Student &amp; Institutional Suggestions</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Your recommendations help us enhance academic quality, laboratory infrastructure, campus life,
                        and student welfare. Every submission is routed directly to the principal and IQAC desk.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className={styles.contentGrid}>
                    {/* Form Card */}
                    <div className={`${styles.formCard} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                        {submitted ? (
                            <div className={styles.successState}>
                                <div className={styles.successIconBox}>
                                    <CheckCircle size={48} />
                                </div>
                                <h3 className={styles.successTitle}>Suggestion Dispatched Successfully!</h3>
                                <p className={styles.successText}>
                                    A copy of your feedback has been sent directly to the college administration email with full
                                    documentation. Thank you for contributing to the growth of Jagan&apos;s College of Pharmacy.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormData({
                                            fullName: '',
                                            email: '',
                                            phone: '',
                                            userRole: 'Student',
                                            category: 'Academic Curriculum',
                                            subject: '',
                                            suggestion: '',
                                        });
                                    }}
                                    className={styles.btnReset}
                                >
                                    Submit Another Suggestion
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.formElement}>
                                {errorMessage && (
                                    <div className={styles.errorBanner}>
                                        <AlertCircle size={16} />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <div className={styles.formRowTwo}>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. S. Karthik Reddy"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            className={styles.textInput}
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Email Address *</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="e.g. karthik@student.jagans.edu.in"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={styles.textInput}
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRowTwo}>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 98480 XXXXX"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className={styles.textInput}
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>I am a *</label>
                                        <select
                                            value={formData.userRole}
                                            onChange={(e) => setFormData({ ...formData, userRole: e.target.value })}
                                            className={styles.selectInput}
                                        >
                                            <option value="Student">Current Student</option>
                                            <option value="Faculty">Faculty / Staff Member</option>
                                            <option value="Alumni">Alumni</option>
                                            <option value="Parent">Parent / Guardian</option>
                                            <option value="Industry Partner">Industry Partner</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>Category *</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className={styles.selectInput}
                                    >
                                        <option value="Academic Curriculum">Academic Curriculum &amp; Teaching</option>
                                        <option value="Laboratory & Research">Laboratory Equipment &amp; Research</option>
                                        <option value="Campus Facilities & Hostel">Campus Infrastructure &amp; Hostel</option>
                                        <option value="Library & Digital Access">Library &amp; E-Learning Resources</option>
                                        <option value="Training & Placements">Training, Internships &amp; Placements</option>
                                        <option value="Student Clubs & Sports">Student Clubs, Fests &amp; Sports</option>
                                        <option value="General Institutional Feedback">General Institutional Feedback</option>
                                    </select>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>Suggestion Subject *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Brief headline of your recommendation"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className={styles.textInput}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>Detailed Suggestion *</label>
                                    <textarea
                                        required
                                        rows={5}
                                        placeholder="Provide details on the challenge, proposed improvement, and potential impact on students..."
                                        value={formData.suggestion}
                                        onChange={(e) => setFormData({ ...formData, suggestion: e.target.value })}
                                        className={styles.textArea}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={styles.btnSubmit}
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 size={16} className={styles.spinnerIcon} />
                                            <span>Transmitting Suggestion...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Submit Suggestion</span>
                                            <Send size={15} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Information Column */}
                    <div className={`${styles.infoColumn} ${isVisible ? styles.animateReveal3 : styles.hiddenState}`}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoCardHeader}>
                                <div className={styles.infoIconCircle}>
                                    <Lightbulb size={20} />
                                </div>
                                <div>
                                    <h4 className={styles.infoTitle}>Constructive Ideation</h4>
                                    <p className={styles.infoSubtitle}>How suggestions are processed</p>
                                </div>
                            </div>
                            <p className={styles.infoBody}>
                                Every suggestion submitted through this portal is delivered directly to the institution's official
                                inbox and logged by the IQAC. Constructive recommendations regarding labs, curriculum, or campus
                                upgrades are scheduled for discussion in faculty and board reviews.
                            </p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoCardHeader}>
                                <div className={styles.infoIconCircle}>
                                    <Building size={20} />
                                </div>
                                <div>
                                    <h4 className={styles.infoTitle}>Physical Suggestion Boxes</h4>
                                    <p className={styles.infoSubtitle}>Campus collection spots</p>
                                </div>
                            </div>
                            <p className={styles.infoBody}>
                                Confidential drop-boxes are also accessible outside the Principal&apos;s Office, Central Library,
                                and the Campus Canteen for students who prefer paper submissions.
                            </p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoCardHeader}>
                                <div className={styles.infoIconCircle}>
                                    <GraduationCap size={20} />
                                </div>
                                <div>
                                    <h4 className={styles.infoTitle}>Privacy Assured</h4>
                                    <p className={styles.infoSubtitle}>Safe &amp; open communication</p>
                                </div>
                            </div>
                            <p className={styles.infoBody}>
                                Submissions are handled with confidentiality. For formal regulatory grievances or safety matters,
                                please contact the <strong>Grievance Redressal Cell</strong> or <strong>Anti-Ragging Squad</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}