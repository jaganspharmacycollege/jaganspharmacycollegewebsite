'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    Layers,
    HeartPulse,
    Database,
} from 'lucide-react';
import styles from './ClinicalPharmacyLab.module.css';

const clinicalSlides = [
    {
        src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Simulated Patient Counseling Cabins & Clinical Interaction Bays',
    },
    {
        src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
        caption: 'Drug Information Center (DIC) & Electronic Health Records Workstations',
    },
    {
        src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
        caption: 'Therapeutic Drug Monitoring (TDM) & Prescription Audit Units',
    },
];

const features = [
    {
        icon: HeartPulse,
        title: 'Counseling Cabins',
        desc: 'Dedicated booths for patient medication counseling practice.',
        theme: styles.themeEmerald,
    },
    {
        icon: Database,
        title: 'Drug Info Center',
        desc: 'Micromedex and Lexicomp clinical pharmacotherapy portals.',
        theme: styles.themeAmber,
    },
];

export default function ClinicalPharmacyLab() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % clinicalSlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.section}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    {/* Left Column: Information & Feature Cards */}
                    <div className={styles.infoContent}>
                        <div className={styles.eyebrowTag}>
                            <Sparkles size={14} className={styles.eyebrowIcon} />
                            <span>Patient Care &amp; Clinical Skills</span>
                        </div>
                        <h2 className={styles.title}>Clinical Pharmacy Lab</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Designed specifically for Pharm.D training, featuring simulated clinical patient interaction booths,
                            electronic drug information databases, and therapeutic drug monitoring systems[cite: 23].
                        </p>

                        {/* 2 Separated Feature Cards */}
                        <div className={styles.featuresGrid}>
                            {features.map((feat, idx) => {
                                const Icon = feat.icon;
                                return (
                                    <div key={idx} className={styles.featureCard}>
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

                    {/* Right Column: Auto-sliding Rounded Image Carousel */}
                    <div className={styles.carouselContainer}>
                        <div className={styles.imageFrame}>
                            {clinicalSlides.map((slide, idx) => (
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
                                    <span>LAB - BLOCK E</span>
                                </span>
                                <span className={styles.specBadge}>Pharm.D Dedicated • DIC Portals</span>
                            </div>

                            {/* Bottom Title / Caption Overlay & Sync Dots */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {clinicalSlides[currentImgIdx].caption}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {clinicalSlides.map((_, dotIdx) => (
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
                </div>
            </div>
        </section>
    );
}