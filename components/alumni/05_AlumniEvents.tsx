'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Sparkles,
    Calendar,
    Clock,
    MapPin,
    Layers,
    Video,
    Building,
    GraduationCap,
} from 'lucide-react';
import styles from './AlumniEvents.module.css';

const eventsSlides = [
    {
        src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
        caption: 'Global Webinar Series & Online Pharmaceutical Symposiums',
    },
    {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        caption: 'Grand Alumni Homecoming Meet & Distinguished Scholar Felicitations',
    },
    {
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        caption: 'Student Career Mentorship, Mock Interviews & Industry Readiness Panels',
    },
];

const events = [
    {
        icon: Video,
        title: 'Pharma Leadership Webinar Series',
        date: 'September 12, 2026',
        time: '04:00 PM IST',
        location: 'Virtual / Zoom',
        desc: 'Keynote sessions on modern drug regulatory filings and AI applications in pharmaceutical analysis led by international alumni.',
        theme: styles.themeEmerald,
        typeBadge: 'Virtual Webinar',
        animClass: styles.animDelay3,
    },
    {
        icon: Building,
        title: 'Grand Alumni Homecoming Meet 2026',
        date: 'December 19, 2026',
        time: '10:00 AM IST',
        location: 'Main Campus Auditorium',
        desc: 'Annual batch reunion, campus tour, felicitation of distinguished alumni, and networking banquet dinner.',
        theme: styles.themeAmber,
        typeBadge: 'Campus Event',
        animClass: styles.animDelay4,
    },
    {
        icon: GraduationCap,
        title: 'Career Mentorship & Mock Interviews',
        date: 'February 20, 2027',
        time: '02:00 PM IST',
        location: 'Seminar Hall 2',
        desc: 'Senior alumni guiding final-year B. Pharm, Pharm.D, and M. Pharm students with resume reviews and technical interview prep.',
        theme: styles.themePurple,
        typeBadge: 'Workshop',
        animClass: styles.animDelay5,
    },
];

export default function AlumniEvents() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // Cinematic 5.0-second auto-cycling interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % eventsSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

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

    // Ultra-slow fluid linear-interpolated (lerp) parallax animation
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
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06}px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05}px, 0)`;
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
                {/* Header Block */}
                <div
                    className={`${styles.headerBlock} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Conferences &amp; Gatherings</span>
                    </div>
                    <h2 className={styles.title}>Alumni Events</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Participate in upcoming webinars, professional workshops, and networking chapter meets hosted throughout the year.
                    </p>
                </div>

                {/* Auto-sliding Banner Showcase */}
                <div
                    className={`${styles.carouselContainer} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                        }`}
                >
                    <div className={styles.imageFrame}>
                        {eventsSlides.map((slide, idx) => (
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
                                <span>UPCOMING CALENDAR 2026-27</span>
                            </span>
                            <span className={styles.specBadge}>
                                Hybrid &amp; In-Person Sessions
                            </span>
                        </div>

                        {/* Bottom Caption & Sync Dots */}
                        <div className={styles.captionOverlay}>
                            <h4 className={styles.captionText}>
                                {eventsSlides[currentImgIdx].caption}
                            </h4>
                            <div className={styles.dotsWrapper}>
                                {eventsSlides.map((_, dotIdx) => (
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

                {/* 3 Event Cards Grid */}
                <div className={styles.grid}>
                    {events.map((ev, idx) => {
                        const Icon = ev.icon;
                        return (
                            <div
                                key={idx}
                                className={`${styles.card} ${isVisible ? ev.animClass : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${ev.theme}`}>
                                        <Icon size={20} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.typePill}>{ev.typeBadge}</span>
                                </div>

                                <h3 className={styles.cardTitle}>{ev.title}</h3>

                                <div className={styles.metaGroup}>
                                    <div className={styles.metaItem}>
                                        <Calendar size={15} className={styles.metaIcon} />
                                        <span>{ev.date}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <Clock size={15} className={styles.metaIcon} />
                                        <span>{ev.time}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <MapPin size={15} className={styles.metaIcon} />
                                        <span>{ev.location}</span>
                                    </div>
                                </div>

                                <p className={styles.cardDesc}>{ev.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}