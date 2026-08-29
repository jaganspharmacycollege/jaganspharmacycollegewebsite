'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FlaskConical, Users, Briefcase, Award } from 'lucide-react';
import styles from './JagansAdvantage.module.css';

const advantages = [
    {
        icon: FlaskConical,
        title: 'Modern Labs &\nInfrastructure',
        description: 'State-of-the-art facilities for practical learning',
        iconTheme: styles.iconMint,
        animClass: styles.animDelay1,
    },
    {
        icon: Users,
        title: 'Experienced &\nExpert Faculty',
        description: 'Learn from highly qualified and dedicated faculty',
        iconTheme: styles.iconPurple,
        animClass: styles.animDelay2,
    },
    {
        icon: Briefcase,
        title: 'Industry\nCollaborations',
        description: 'Strong tie-ups for internships and placements',
        iconTheme: styles.iconPeach,
        animClass: styles.animDelay3,
    },
    {
        icon: Award,
        title: 'Holistic Student\nDevelopment',
        description: 'Focus on academics, ethics and leadership',
        iconTheme: styles.iconMint,
        animClass: styles.animDelay4,
    },
];

export default function JagansAdvantage() {
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);
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
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <span className={styles.eyebrow}>Why Choose Us</span>
                    <h2 className={styles.title}>The Jagan&apos;s Advantage</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.subText}>
                        Providing a world-class academic environment designed to foster innovation, clinical excellence, and high career growth.
                    </p>
                </div>

                {/* 4-Card Multi-device Grid */}
                <div className={styles.grid}>
                    {advantages.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className={`${styles.card} ${isVisible ? item.animClass : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardHeaderRow}>
                                    <div className={`${styles.iconSquircle} ${item.iconTheme}`}>
                                        <Icon size={24} strokeWidth={1.8} />
                                    </div>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                </div>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}