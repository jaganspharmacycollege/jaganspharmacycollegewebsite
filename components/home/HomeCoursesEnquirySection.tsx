'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    Send,
    FlaskConical,
    Stethoscope,
    Microscope,
    CheckCircle2,
    Sparkles,
    Briefcase,
    Award,
    FileText,
    ShieldCheck,
} from 'lucide-react';
import styles from './HomeCoursesEnquirySection.module.css';

export default function HomeCoursesEnquirySection() {
    const [activeTab, setActiveTab] = useState<'enquiry' | 'recruitment'>('enquiry');
    const [enquirySubmitted, setEnquirySubmitted] = useState(false);
    const [recruitmentSubmitted, setRecruitmentSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

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

    const handleEnquirySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEnquirySubmitted(true);
    };

    const handleRecruitmentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setRecruitmentSubmitted(true);
    };

    return (
        <section ref={sectionRef} className={styles.section}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div
                    className={`${styles.topHeading} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <span className={styles.eyebrow}>Our Academic Programs</span>
                </div>

                <div className={styles.mainLayout}>
                    {/* Left Column: 3 Course Cards + Bottom Trust/Action Banner */}
                    <div className={styles.leftColumn}>
                        <div className={styles.coursesGrid}>
                            {/* 1. B. Pharmacy */}
                            <div
                                className={`${styles.courseCard} ${styles.cardBpharm} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardTop}>
                                    <div className={`${styles.iconCircle} ${styles.bpharmIcon}`}>
                                        <FlaskConical size={28} />
                                    </div>
                                    <h3 className={styles.courseName}>B. Pharmacy</h3>
                                    <span className={styles.durationBadge}>Duration: 4 Years</span>
                                    <p className={styles.courseText}>
                                        Undergraduate program that builds a strong foundation in pharmaceutical sciences, medicinal chemistry, drug development, dosage formulation, and laboratory instrumentation.
                                    </p>
                                    <p className={styles.courseSubText}>
                                        Prepares graduates for diverse careers in pharmaceutical manufacturing, quality assurance, drug regulatory affairs, marketing, and competitive examinations like GPAT.
                                    </p>
                                </div>
                                <Link href="/courses/b-pharm" className={styles.learnMoreLink}>
                                    <span>Learn More</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>

                            {/* 2. Pharm.D */}
                            <div
                                className={`${styles.courseCard} ${styles.cardPharmd} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardTop}>
                                    <div className={`${styles.iconCircle} ${styles.pharmdIcon}`}>
                                        <Stethoscope size={28} />
                                    </div>
                                    <h3 className={styles.courseName}>Pharm.D</h3>
                                    <span className={styles.durationBadge}>Duration: 6 Years</span>
                                    <p className={styles.courseText}>
                                        Doctor of Pharmacy professional doctorate curriculum focused on patient-centered healthcare, therapeutic drug monitoring, hospital ward rounds, and clinical pharmacokinetics.
                                    </p>
                                    <p className={styles.courseSubText}>
                                        Includes an extensive 1-year residency internship in multi-specialty hospitals, equipping students for clinical pharmacy practice and global healthcare research careers.
                                    </p>
                                </div>
                                <Link href="/courses/pharm-d" className={styles.learnMoreLink}>
                                    <span>Learn More</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>

                            {/* 3. M. Pharmacy */}
                            <div
                                className={`${styles.courseCard} ${styles.cardMpharm} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardTop}>
                                    <div className={`${styles.iconCircle} ${styles.mpharmIcon}`}>
                                        <Microscope size={28} />
                                    </div>
                                    <h3 className={styles.courseName}>M. Pharmacy</h3>
                                    <span className={styles.durationBadge}>Duration: 2 Years</span>
                                    <p className={styles.courseText}>
                                        Postgraduate program offering advanced specialization and research exposure in Pharmaceutics, Pharmacology, and Pharmaceutical Analysis with dedicated dissertation projects.
                                    </p>
                                    <p className={styles.courseSubText}>
                                        Focuses on modern analytical techniques (HPLC, UV-Vis, FTIR), novel drug delivery systems, pharmacological screening, and high-impact biomedical publications.
                                    </p>
                                </div>
                                <Link href="/courses/m-pharm" className={styles.learnMoreLink}>
                                    <span>Learn More</span>
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Bottom Trust & Feature Highlights Banner */}
                        <div
                            className={`${styles.trustBanner} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                                }`}
                        >
                            <div className={styles.trustItem}>
                                <div className={styles.trustIconWrap}>
                                    <ShieldCheck size={18} />
                                </div>
                                <div>
                                    <h4 className={styles.trustTitle}>PCI &amp; AICTE Approved</h4>
                                    <p className={styles.trustSubtitle}>Affiliated to JNTUA Anantapur</p>
                                </div>
                            </div>

                            <div className={styles.trustDivider} />

                            <div className={styles.trustItem}>
                                <div className={styles.trustIconWrap}>
                                    <Award size={18} />
                                </div>
                                <div>
                                    <h4 className={styles.trustTitle}>GPAT Coaching &amp; Research</h4>
                                    <p className={styles.trustSubtitle}>100% Placement &amp; Lab Training</p>
                                </div>
                            </div>

                            <div className={styles.trustDivider} />

                            <div className={styles.trustAction}>
                                <Link href="/admissions/eligibility-criteria" className={styles.trustCtaBtn}>
                                    <FileText size={15} />
                                    <span>Eligibility Criteria</span>
                                    <ArrowRight size={13} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Enquiry & Recruitment Sidebar Box */}
                    <div
                        className={`${styles.enquiryBox} ${isVisible ? styles.animateReveal5 : styles.hiddenState
                            }`}
                    >
                        {/* Top Switcher Tabs */}
                        <div className={styles.tabSwitcher}>
                            <button
                                type="button"
                                onClick={() => setActiveTab('enquiry')}
                                className={`${styles.tabBtn} ${activeTab === 'enquiry' ? styles.activeTabBtn : ''
                                    }`}
                            >
                                <Sparkles size={14} />
                                <span>For Enquire</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab('recruitment')}
                                className={`${styles.tabBtn} ${activeTab === 'recruitment' ? styles.activeTabBtn : ''
                                    }`}
                            >
                                <Briefcase size={14} />
                                <span>For Recruitment</span>
                            </button>
                        </div>

                        {/* TAB 1: FOR ENQUIRE */}
                        {activeTab === 'enquiry' && (
                            <>
                                <div className={styles.enquiryHeader}>
                                    <Sparkles size={16} className={styles.enquiryIcon} />
                                    <h3 className={styles.enquiryTitle}>Enquire Today</h3>
                                </div>
                                <p className={styles.enquirySubtitle}>
                                    Get immediate admission guidance and fee breakdown.
                                </p>

                                {enquirySubmitted ? (
                                    <div className={styles.successBox}>
                                        <CheckCircle2 size={38} className={styles.successIcon} />
                                        <p className={styles.successText}>
                                            Thank you! We will get in touch with you shortly.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleEnquirySubmit} className={styles.enquiryForm}>
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
                                            <Send size={13} className={styles.btnSendIcon} />
                                        </button>
                                    </form>
                                )}
                            </>
                        )}

                        {/* TAB 2: FOR RECRUITMENT */}
                        {activeTab === 'recruitment' && (
                            <>
                                <div className={styles.enquiryHeader}>
                                    <Briefcase size={16} className={styles.enquiryIcon} />
                                    <h3 className={styles.enquiryTitle}>Careers &amp; Hiring</h3>
                                </div>
                                <p className={styles.enquirySubtitle}>
                                    Join our academic faculty or administrative team.
                                </p>

                                {recruitmentSubmitted ? (
                                    <div className={styles.successBox}>
                                        <CheckCircle2 size={38} className={styles.successIcon} />
                                        <p className={styles.successText}>
                                            Application submitted! Our HR team will review your profile and reach out.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleRecruitmentSubmit} className={styles.enquiryForm}>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Full Name"
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
                                                Position Applied For
                                            </option>
                                            <option value="professor">Professor / Assoc. Professor</option>
                                            <option value="assistant-professor">Assistant Professor</option>
                                            <option value="lab-technician">Lab Technician</option>
                                            <option value="admin-staff">Administrative Staff</option>
                                            <option value="other">Other Position</option>
                                        </select>
                                        <input
                                            type="text"
                                            placeholder="Highest Qualification (e.g., M.Pharm, Ph.D)"
                                            className={styles.input}
                                        />
                                        <textarea
                                            rows={2}
                                            placeholder="Brief Experience & Cover Note"
                                            className={styles.textarea}
                                        />
                                        <button type="submit" className={styles.btnSubmit}>
                                            <span>Submit Application</span>
                                            <Send size={13} className={styles.btnSendIcon} />
                                        </button>
                                    </form>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}