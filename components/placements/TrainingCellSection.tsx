'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './TrainingCellSection.module.css';

const trainingPrograms = [
    {
        title: 'Pre-Placement Training & Soft Skills',
        desc: 'Regular modules covering aptitude tests, group discussions, clinical case presentations, and technical mock interviews conducted by corporate HR mentors.',
    },
    {
        title: 'Hospital & Clinical Rotations',
        desc: 'Comprehensive clinical bedside training, medical chart analysis, and patient pharmacotherapy assessments in accredited partner teaching hospitals.',
    },
    {
        title: 'Industrial R&D Internships',
        desc: 'Hands-on summer internships covering formulation manufacturing, regulatory quality assurance, analytical HPLC, and drug safety databases.',
    },
];

const cardDelays = [
    styles.cardDelay1,
    styles.cardDelay2,
    styles.cardDelay3,
];

export default function TrainingCellSection() {
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

    return (
        <section ref={sectionRef} className={styles.section}>
            {/* Ambient Parallax Lighting Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <span className={styles.eyebrow}>Skill Enhancement Framework</span>
                    <h2 className={styles.title}>Training &amp; Development Cell</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our specialized Training and Placement Cell bridges academia and corporate expectations through continuous personality development, technical workshops, and direct industry mentoring.
                    </p>
                </div>

                <div className={styles.grid}>
                    {trainingPrograms.map((item, idx) => (
                        <div
                            key={idx}
                            className={`${styles.cellCard} ${isVisible ? cardDelays[idx % cardDelays.length] : styles.hiddenState
                                }`}
                        >
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}