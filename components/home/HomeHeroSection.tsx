'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Award,
    GraduationCap,
    Sparkles,
    ArrowRight,
    Volume2,
    Phone,
    UserCheck,
    Headphones,
    Mail,
    ShieldCheck,
} from 'lucide-react';
import styles from './HomeHeroSection.module.css';

export default function HomeHeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgVideoRef = useRef<HTMLVideoElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Trigger entrance animation on viewport intersection
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

                if (bgVideoRef.current) {
                    bgVideoRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.04
                        }px, 0) scale(1.08)`;
                }
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
        <section ref={sectionRef} className={styles.heroSection}>
            {/* Full-Cover Background Video */}
            <video
                ref={bgVideoRef}
                src="/assets/HomePageImages/HomeHeroVideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={styles.bgImage}
            />
            <div className={styles.overlay} />
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <div
                        className={`${styles.eyebrowBadge} ${isVisible ? styles.animateIn1 : styles.hiddenState
                            }`}
                    >
                        <Sparkles size={13} />
                        <span>Script your future</span>
                    </div>

                    <h1
                        className={`${styles.heading} ${isVisible ? styles.animateIn2 : styles.hiddenState
                            }`}
                    >
                        Jagan&apos;s College <br />
                        <span className={styles.headingGold}>of Pharmacy</span>
                    </h1>

                    <p
                        className={`${styles.subtext} ${isVisible ? styles.animateIn3 : styles.hiddenState
                            }`}
                    >
                        Empowering future pharmacists with knowledge, integrity and innovation to advance healthcare and serve communities with compassion.
                    </p>

                    <div
                        className={`${styles.badgesRow} ${isVisible ? styles.animateIn4 : styles.hiddenState
                            }`}
                    >
                        <div className={styles.badgeItem}>
                            <div className={styles.badgeIcon}>
                                <Award size={20} />
                            </div>
                            <div>
                                <p className={styles.badgeTitle}>Affiliated to JNTUA</p>
                                <p className={styles.badgeSubtitle}>
                                    Jawaharlal Nehru Tech University
                                </p>
                            </div>
                        </div>

                        <div className={styles.badgeItem}>
                            <div className={styles.badgeIcon}>
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <p className={styles.badgeTitle}>Approved by PCI</p>
                                <p className={styles.badgeSubtitle}>
                                    Pharmacy Council of India, New Delhi
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${styles.ctaRow} ${isVisible ? styles.animateIn5 : styles.hiddenState
                            }`}
                    >
                        <Link href="/contact" className={styles.btnPrimary}>
                            Enquiry Form
                        </Link>
                        <Link
                            href="/admissions/application-form"
                            className={styles.btnSecondary}
                        >
                            Online Application
                        </Link>
                    </div>
                </div>

                {/* Live Updates Section */}
                <Link
                    href="/notifications-and-events"
                    className={`${styles.tickerCardLink} ${isVisible ? styles.animateIn6 : styles.hiddenState
                        }`}
                >
                    <div className={styles.tickerBadge}>
                        <Volume2 size={15} className={styles.pulseIcon} />
                        <span>Live Updates</span>
                    </div>
                    <div className={styles.marqueeTrackWrapper}>
                        <div className={styles.marqueeContent}>
                            <span className={styles.tickerItem}>
                                <strong className={styles.goldHighlight}>
                                    Latest Notifications &amp; Upcoming Events
                                </strong>
                                : B. Pharm &amp; Pharm.D 2026-27 Admissions Counseling Schedule Released &bull; National Seminar on Modern Drug Regulatory Filings &amp; AI &bull; Annual Global Alumni Homecoming Meet 2026 &bull; End Semester Practical Examination Timetable Updated
                            </span>
                            <span className={styles.tickerItem}>
                                <strong className={styles.goldHighlight}>
                                    Latest Notifications &amp; Upcoming Events
                                </strong>
                                : B. Pharm &amp; Pharm.D 2026-27 Admissions Counseling Schedule Released &bull; National Seminar on Modern Drug Regulatory Filings &amp; AI &bull; Annual Global Alumni Homecoming Meet 2026 &bull; End Semester Practical Examination Timetable Updated
                            </span>
                        </div>
                    </div>
                    <div className={styles.actionPill}>
                        <span>View All</span>
                        <ArrowRight size={13} />
                    </div>
                </Link>

                {/* Contact for Admissions & Inquiries Bar with Email */}
                <div
                    className={`${styles.admissionContactContainer} ${isVisible ? styles.animateIn7 : styles.hiddenState
                        }`}
                >
                    <div className={styles.admissionContactHeader}>
                        <Phone size={14} className={styles.phoneHeaderIcon} />
                        <span>Contact For Admissions (2026-2027) &amp; Inquiries</span>
                    </div>

                    <div className={styles.admissionNumbersGrid}>
                        <a
                            href="tel:+917680077726"
                            className={styles.admissionNumberCard}
                        >
                            <div className={styles.numberIconBox}>
                                <UserCheck size={16} />
                            </div>
                            <div className={styles.numberInfo}>
                                <span className={styles.numberLabel}>Principal Office</span>
                                <span className={styles.numberValue}>+91 7680077726</span>
                            </div>
                        </a>

                        <a
                            href="tel:+917680077733"
                            className={styles.admissionNumberCard}
                        >
                            <div className={styles.numberIconBox}>
                                <Headphones size={16} />
                            </div>
                            <div className={styles.numberInfo}>
                                <span className={styles.numberLabel}>Admissions Desk</span>
                                <span className={styles.numberValue}>+91 7680077733</span>
                            </div>
                        </a>

                        <a
                            href="tel:+919989000447"
                            className={styles.admissionNumberCard}
                        >
                            <div className={styles.numberIconBox}>
                                <Phone size={16} />
                            </div>
                            <div className={styles.numberInfo}>
                                <span className={styles.numberLabel}>Campus Helpline</span>
                                <span className={styles.numberValue}>+91 9989000447</span>
                            </div>
                        </a>

                        <a
                            href="mailto:admissions.jcp@gmail.com"
                            className={styles.admissionNumberCard}
                        >
                            <div className={styles.numberIconBox}>
                                <Mail size={16} />
                            </div>
                            <div className={styles.numberInfo}>
                                <span className={styles.numberLabel}>Admissions Email</span>
                                <span className={styles.numberValue}>admissions.jcp@gmail.com</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}