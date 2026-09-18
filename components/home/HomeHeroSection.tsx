'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Volume2,
    Phone,
    UserCheck,
    Headphones,
    Mail,
    ArrowRight,
} from 'lucide-react';
import styles from './HomeHeroSection.module.css';

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const YoutubeIcon = ({ size = 18 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
    </svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
);

const socialHandles = [
    { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/jaganscollegeofpharmacy?stkn=eW8ycWFkd2l2aHpj' },
    { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/share/1GoDvh2quM/' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com' },
    { name: 'YouTube', icon: YoutubeIcon, href: 'https://youtube.com/@jaganscollegeofpharmacy?si=GnxtebIvEMtzcbD_' },
    { name: 'Twitter (X)', icon: TwitterIcon, href: 'https://twitter.com' },
];

export default function HomeHeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgVideoRef = useRef<HTMLVideoElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isMounted && entry) {
                    setIsVisible(entry.isIntersecting);
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            isMounted = false;
            observer.disconnect();
        };
    }, []);

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
                if (bgVideoRef.current) {
                    bgVideoRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.04
                        }px, 0) scale(1.05)`;
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

    return (
        <>
            {/* 1. Hero Video Section */}
            <section ref={sectionRef} className={styles.heroSection}>
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

                {/* Right-Side Floating Social Handles */}
                <aside
                    className={`${styles.socialSidebar} ${isVisible ? styles.animateIn7 : styles.hiddenState
                        }`}
                    aria-label="Social Media Links"
                >
                    <div className={styles.socialTrack}>
                        {socialHandles.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.name}
                                    className={styles.socialLink}
                                >
                                    <Icon size={18} />
                                    <span className={styles.socialTooltip}>{item.name}</span>
                                </a>
                            );
                        })}
                    </div>
                </aside>
            </section>

            {/* 2. Emerald Green Section Placed Directly Below Video */}
            <section className={styles.infoStripSection}>
                <div className={styles.container}>
                    {/* Live Updates Ticker */}
                    <Link
                        href="/notifications-and-events"
                        className={`${styles.tickerCardLink} ${isVisible ? styles.animateIn4 : styles.hiddenState
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
                                        Notifications:
                                    </strong>
                                    B. Pharm &amp; Pharm.D 2026-27 Admissions Counseling Schedule
                                    Released &bull; National Seminar on Modern Drug Regulatory
                                    Filings &amp; AI &bull; Annual Global Alumni Homecoming Meet 2026
                                    &bull; End Semester Practical Examination Timetable Updated
                                </span>
                                <span className={styles.tickerItem}>
                                    <strong className={styles.goldHighlight}>
                                        Notifications:
                                    </strong>
                                    B. Pharm &amp; Pharm.D 2026-27 Admissions Counseling Schedule
                                    Released &bull; National Seminar on Modern Drug Regulatory
                                    Filings &amp; AI &bull; Annual Global Alumni Homecoming Meet 2026
                                    &bull; End Semester Practical Examination Timetable Updated
                                </span>
                            </div>
                        </div>
                        <div className={styles.actionPill}>
                            <span>View All</span>
                            <ArrowRight size={13} />
                        </div>
                    </Link>

                    {/* Contact for Admissions & Enquiries */}
                    <div
                        className={`${styles.admissionContactContainer} ${isVisible ? styles.animateIn6 : styles.hiddenState
                            }`}
                    >
                        <div className={styles.admissionContactHeader}>
                            <Phone size={14} className={styles.phoneHeaderIcon} />
                            <span>Contact For Admissions (2026-2027) &amp; Enquiries</span>
                        </div>
                        <div className={styles.admissionNumbersGrid}>
                            <a href="tel:+917680077726" className={styles.admissionNumberCard}>
                                <div className={styles.numberIconBox}>
                                    <UserCheck size={16} />
                                </div>
                                <div className={styles.numberInfo}>
                                    <span className={styles.numberLabel}>Principal Office</span>
                                    <span className={styles.numberValue}>+91 7680077726</span>
                                </div>
                            </a>

                            <a href="tel:+917680077733" className={styles.admissionNumberCard}>
                                <div className={styles.numberIconBox}>
                                    <Headphones size={16} />
                                </div>
                                <div className={styles.numberInfo}>
                                    <span className={styles.numberLabel}>Admissions Desk</span>
                                    <span className={styles.numberValue}>+91 7680077733</span>
                                </div>
                            </a>

                            <a href="tel:+919989000447" className={styles.admissionNumberCard}>
                                <div className={styles.numberIconBox}>
                                    <Phone size={16} />
                                </div>
                                <div className={styles.numberInfo}>
                                    <span className={styles.numberLabel}>Campus Helpline</span>
                                    <span className={styles.numberValue}>+91 9989000447</span>
                                </div>
                            </a>

                            <a href="mailto:admissions.jcp@gmail.com" className={styles.admissionNumberCard}>
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
        </>
    );
}