'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Calendar,
    Clock,
    MapPin,
    Layers,
    ArrowRight,
    PartyPopper,
    Users,
} from 'lucide-react';
import styles from './AlumniMeet.module.css';

const meetSlides = [
    {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        caption: 'Annual Global Alumni Grand Reunion & Gala Dinner',
    },
    {
        src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
        caption: 'Auditorium Keynote Addresses & Distinguished Alumni Honors',
    },
    {
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
        caption: 'Interactive Department Networking Sessions & Cultural Evenings',
    },
];

const meetFeatures = [
    {
        icon: PartyPopper,
        title: 'Grand Reunion Gala',
        desc: 'An evening of nostalgic reminiscence, musical celebrations, and honorary alumni awards.',
        theme: styles.themeEmerald,
    },
    {
        icon: Users,
        title: 'Mentorship Roundtables',
        desc: 'Focused one-on-one sessions linking seasoned industry leaders with graduating batches.',
        theme: styles.themeAmber,
    },
];

export default function AlumniMeet() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % meetSlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

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
                            {meetSlides.map((slide, idx) => (
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
                                    <span>ANNUAL CONVENTION</span>
                                </span>
                                <span className={styles.specBadge}>Grand Reunion • Campus Wide</span>
                            </div>

                            {/* Bottom Caption & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {meetSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {meetSlides.map((_, dotIdx) => (
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

                    {/* Right Column: Information Content, Event Details & Feature Cards */}
                    <div className={styles.infoContent}>
                        <div className={styles.eyebrowTag}>
                            <Sparkles size={14} className={styles.eyebrowIcon} />
                            <span>Annual Gathering</span>
                        </div>
                        <h2 className={styles.title}>Alumni Meet</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            The Annual Alumni Meet brings together generations of pharmacy graduates to reconnect with peers,
                            celebrate professional milestones, interact with faculty, and mentor the next generation of pharmacists.
                        </p>

                        {/* Event Schedule Chip Pill */}
                        <div className={styles.eventSchedulePill}>
                            <div className={styles.scheduleItem}>
                                <Calendar size={15} className={styles.scheduleIcon} />
                                <span>Second Saturday, December</span>
                            </div>
                            <div className={styles.scheduleItem}>
                                <Clock size={15} className={styles.scheduleIcon} />
                                <span>10:00 AM – 5:00 PM</span>
                            </div>
                            <div className={styles.scheduleItem}>
                                <MapPin size={15} className={styles.scheduleIcon} />
                                <span>College Auditorium &amp; Lawn</span>
                            </div>
                        </div>

                        {/* 2 Separated Feature Cards */}
                        <div className={styles.featuresGrid}>
                            {meetFeatures.map((feat, idx) => {
                                const Icon = feat.icon;
                                return (
                                    <div key={idx} className={styles.featureCardAlt}>
                                        <div className={`${styles.iconSquircle} ${feat.theme}`}>
                                            <Icon size={20} strokeWidth={2.2} />
                                        </div>
                                        <div>
                                            <h4 className={styles.featureTitle}>{feat.title}</h4>
                                            <p className={styles.featureDesc}>{feat.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}