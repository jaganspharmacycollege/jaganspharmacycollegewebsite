'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Info } from 'lucide-react';
import styles from './HomeAcademicWhyCampusSection.module.css';

const cells = [
    '1. Training and Placement Cell',
    '2. Entrepreneurship Development Cell',
    '3. R&D Cell',
    '4. Internal Quality Assessment Cell',
    '5. Innovation Cell'
];

const whyReasons = [
    'Innovative Teaching & Learning',
    'Industry Exposure & Career Growth',
    'Global & Professional Engagement',
    'Skills Development & Hands-on Training',
    'Beyond Academics & Student Welfare',
];

const campusLifeImages = [
    '/assets/HomePageImages/CGS_lab.png',
    '/assets/HomePageImages/CGS_classroom.png',
    '/assets/HomePageImages/CGS_lib.png',
    '/assets/HomePageImages/CGS_sports.png',
];

export default function HomeAcademicWhyCampusSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentCampusImgIdx, setCurrentCampusImgIdx] = useState(0);

    // 5000ms auto-cycle with 1.5s cross-fade for Campus Life images
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentCampusImgIdx((prev) => (prev + 1) % campusLifeImages.length);
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
                const relativeScroll = window.innerHeight - rect.top;

                if (orbLeftRef.current) {
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeScroll * 0.06
                        }px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeScroll * -0.05
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
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* 1. Academic Cells Card */}
                <div
                    className={`${styles.academicCard} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <h3 className={styles.academicTitle}>Academic Cells</h3>
                    <div className={styles.cellsList}>
                        {cells.map((cell, idx) => (
                            <div key={idx} className={styles.cellButton}>
                                <Info size={15} className={styles.cellIcon} />
                                <span>{cell}</span>
                            </div>
                        ))}
                    </div>
                    <Link href="/academics" className={styles.btnViewAll}>
                        <span>View All Cells</span>
                        <ArrowRight size={13} />
                    </Link>
                </div>

                {/* 2. Why Choose Us Card */}
                <div
                    className={`${styles.whyCard} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                        }`}
                >
                    <div>
                        <h3 className={styles.whyTitle}>Why Choose Us</h3>
                        <div className={styles.whyList}>
                            {whyReasons.map((reason, idx) => (
                                <div key={idx} className={styles.whyItem}>
                                    <Check
                                        size={16}
                                        strokeWidth={2.5}
                                        className={styles.whyCheckIcon}
                                    />
                                    <span>{reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.whyImage}>
                        <img
                            src="/assets/HomePageImages/WCU.png"
                            alt="Pharmacy student in laboratory"
                            className={styles.whyImgTag}
                        />
                    </div>
                </div>

                {/* 3. Campus Life Card */}
                <div
                    className={`${styles.campusCard} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                        }`}
                >
                    {campusLifeImages.map((imgSrc, imgIdx) => (
                        <img
                            key={imgIdx}
                            src={imgSrc}
                            alt={`Campus Life at Jagan's ${imgIdx + 1}`}
                            className={`${styles.campusImg} ${imgIdx === currentCampusImgIdx
                                ? styles.activeCampusImg
                                : styles.inactiveCampusImg
                                }`}
                        />
                    ))}
                    <div className={styles.campusOverlay} />
                    <div className={styles.campusContent}>
                        <h3 className={styles.campusTitle}>Campus Life</h3>
                        <p className={styles.campusSub}>
                            Beyond classrooms, a world of opportunities and growth.
                        </p>
                        <Link href="/campus-life" className={styles.btnExplore}>
                            <span>Explore Campus Life</span>
                            <ArrowRight size={13} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}