'use client';

import React, { useState, useEffect } from 'react';
import {
    Layers,
    Sparkles,
    Tv2,
    Armchair,
} from 'lucide-react';
import styles from './Classrooms.module.css';

const classroomImages = [
    {
        name: 'Dr. A.P.J. Abdul Kalam Smart Lecture Hall',
        roomNo: 'LH 01 (Block A)',
        capacity: '120 Seats • Smart Podium',
        src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Dr. A.P.J. Abdul Kalam Smart Lecture Hall',
    },
    {
        name: 'Sir C.V. Raman Multimedia Gallery Hall',
        roomNo: 'LH 02 (Block A)',
        capacity: '150 Seats • Tiered Gallery',
        src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
        alt: 'Sir C.V. Raman Multimedia Gallery Hall',
    },
    {
        name: 'Pharmaceutics Interactive Digital Classroom',
        roomNo: 'CR 104 (Block B)',
        capacity: '90 Seats • Interactive Digital Board',
        src: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
        alt: 'Pharmaceutics Interactive Digital Classroom',
    },
    {
        name: 'Clinical Pharmacy & Case Study Seminar Hall',
        roomNo: 'CR 202 (Block B)',
        capacity: '80 Seats • Audio-Visual System',
        src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
        alt: 'Clinical Pharmacy & Case Study Seminar Hall',
    },
];

const features = [
    {
        icon: Tv2,
        title: 'Multimedia Podiums',
        desc: 'Projectors and interactive digital boards in all halls.',
        theme: styles.themeEmerald,
    },
    {
        icon: Armchair,
        title: 'Tiered Seating',
        desc: 'Ergonomic gallery seating ensuring clear line of sight.',
        theme: styles.themeAmber,
    },
];

export default function Classrooms() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % classroomImages.length);
        }, 3000);

        return () => clearInterval(interval);
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
                            {classroomImages.map((item, idx) => (
                                <img
                                    key={idx}
                                    src={item.src}
                                    alt={item.alt}
                                    className={`${styles.carouselImg} ${idx === currentIndex ? styles.activeImg : styles.inactiveImg
                                        }`}
                                />
                            ))}
                            <div className={styles.imageOverlay} />

                            {/* Top Amber Code Badges & Capacity Pill */}
                            <div className={styles.badgesHeader}>
                                <span className={styles.codeBadge}>
                                    <Layers size={13} className={styles.codeIcon} />
                                    <span>{classroomImages[currentIndex].roomNo}</span>
                                </span>
                                <span className={styles.specBadge}>
                                    {classroomImages[currentIndex].capacity}
                                </span>
                            </div>

                            {/* Bottom Caption & Sync Dots Indicator */}
                            <div className={styles.captionOverlay}>
                                <h4 className={styles.captionText}>
                                    {classroomImages[currentIndex].name}
                                </h4>

                                <div className={styles.dotsWrapper}>
                                    {classroomImages.map((_, dotIdx) => (
                                        <button
                                            key={dotIdx}
                                            onClick={() => setCurrentIndex(dotIdx)}
                                            className={`${styles.dot} ${dotIdx === currentIndex ? styles.activeDot : ''
                                                }`}
                                            aria-label={`Go to slide ${dotIdx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Information & Feature Cards */}
                    <div className={styles.infoContent}>
                        <div className={styles.eyebrowTag}>
                            <Sparkles size={14} className={styles.eyebrowIcon} />
                            <span>Learning Spaces</span>
                        </div>
                        <h2 className={styles.title}>Classrooms</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Our spacious, well-ventilated lecture halls are acoustically treated and equipped with modern
                            multimedia teaching aids, LCD projectors, high-speed Wi-Fi, and smart podiums for technology-driven instructions[cite: 21].
                        </p>

                        {/* 2 Feature Cards Grid */}
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
                </div>
            </div>
        </section>
    );
}