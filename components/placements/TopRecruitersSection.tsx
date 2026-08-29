'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './TopRecruitersSection.module.css';

const recruiters = [
    { name: "Dr. Reddy's Labs", sector: 'Formulation & R&D' },
    { name: 'Sun Pharma', sector: 'Manufacturing & QC' },
    { name: 'Aurobindo Pharma', sector: 'Analytical & Production' },
    { name: 'Cipla Ltd', sector: 'Clinical & QA' },
    { name: 'Hetero Drugs', sector: 'API & Formulation' },
    { name: "Divi's Laboratories", sector: 'Synthesis & Testing' },
    { name: 'Apollo Hospitals', sector: 'Clinical Pharmacy' },
    { name: 'Novartis', sector: 'Pharmacovigilance' },
    { name: 'IQVIA', sector: 'Clinical Data Management' },
    { name: 'Lupin Pharma', sector: 'Regulatory Affairs' },
    { name: 'Biocon', sector: 'Biologics & Research' },
    { name: 'MedPlus Health', sector: 'Community Pharmacy' },
];

const cardDelays = [
    styles.cardDelay1,
    styles.cardDelay2,
    styles.cardDelay3,
    styles.cardDelay4,
    styles.cardDelay5,
    styles.cardDelay6,
];

export default function TopRecruitersSection() {
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
                    <p className={styles.eyebrow}>Industry Alliances</p>
                    <h2 className={styles.title}>Our Top Recruiters</h2>
                    <div className={styles.accentLine} />
                </div>

                <div className={styles.grid}>
                    {recruiters.map((r, idx) => (
                        <div
                            key={idx}
                            className={`${styles.recruiterCard} ${isVisible ? cardDelays[idx % cardDelays.length] : styles.hiddenState
                                }`}
                        >
                            <h3 className={styles.companyName}>{r.name}</h3>
                            <p className={styles.companySector}>{r.sector}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}