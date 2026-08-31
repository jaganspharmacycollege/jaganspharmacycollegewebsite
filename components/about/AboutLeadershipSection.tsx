'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Quote, Award } from 'lucide-react';
import styles from './AboutLeadershipSection.module.css';

const leaders = [
    {
        name: 'S.V.Madhusudhan Reddy',
        role: 'Chairman & Founder',
        image:
            '/assets/logo/Chairman.png',
        quote:
            'Our commitment is to cultivate competent pharmaceutical professionals equipped with high ethical standards to serve global healthcare.',
        bio:
            'With visionary leadership and a dedication to educational advancement, Sri. Jagan Mohan Reddy laid the foundation for the college to provide quality, accessible pharmacy education.',
    },
    {
        name: 'Dr.D.Hepcy Kalarani',
        role: 'Principal & Professor',
        image:
            '/assets/logo/Principal.png',
        quote:
            'We blend rigorous scientific exploration with hands-on clinical internships to prepare students for real-world pharmaceutical challenges.',
        bio:
            'Holding decades of teaching, research, and administrative experience in pharmaceutical sciences, Dr. Srinivasulu leads the academic faculty with an emphasis on research excellence.',
    },
];

export default function AboutLeadershipSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgGlowLeftRef = useRef<HTMLDivElement>(null);
    const bgGlowRightRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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

    // Fluid linear-interpolated (lerp 0.035) parallax animation
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

                if (bgGlowLeftRef.current) {
                    bgGlowLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06
                        }px, 0)`;
                }
                if (bgGlowRightRef.current) {
                    bgGlowRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05
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
            <div ref={bgGlowLeftRef} className={styles.bgGlowLeft} />
            <div ref={bgGlowRightRef} className={styles.bgGlowRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <span className={styles.eyebrow}>Visionary Guidance</span>
                    <h2 className={styles.title}>College Leadership</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.headerSub}>
                        Guided by dedicated pioneers shaping the future of pharmaceutical sciences and clinical education.
                    </p>
                </div>

                {/* Leadership Cards Grid */}
                <div className={styles.grid}>
                    {leaders.map((leader, idx) => (
                        <div
                            key={idx}
                            className={`${styles.leaderCard} ${isVisible
                                ? idx % 2 === 0
                                    ? styles.animateCardLeft
                                    : styles.animateCardRight
                                : styles.hiddenState
                                }`}
                        >
                            <div className={styles.imageContainer}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className={styles.leaderImg}
                                    />
                                </div>
                                <div className={styles.leaderBadge}>
                                    <Award size={14} />
                                    <span>Leadership</span>
                                </div>
                            </div>

                            <div className={styles.contentWrapper}>
                                <div className={styles.leaderInfo}>
                                    <h3 className={styles.leaderName}>{leader.name}</h3>
                                    <p className={styles.leaderRole}>{leader.role}</p>
                                </div>

                                <div className={styles.quoteBox}>
                                    <Quote size={18} className={styles.quoteIcon} />
                                    <p className={styles.quoteText}>&ldquo;{leader.quote}&rdquo;</p>
                                </div>

                                <p className={styles.leaderBio}>{leader.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}