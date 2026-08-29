'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    Microscope,
    Users,
    Monitor,
    BookOpen,
    Home,
    Briefcase,
} from 'lucide-react';
import styles from './HomeFeaturesBar.module.css';

const features = [
    {
        icon: Microscope,
        title: 'Modern Laboratories',
        sub: 'Advanced research labs',
        themeClass: styles.theme0,
        floatClass: styles.floatA,
        animClass: styles.animDelay1,
    },
    {
        icon: Users,
        title: 'Expert Faculty',
        sub: 'Ph.D & industry veterans',
        themeClass: styles.theme1,
        floatClass: styles.floatB,
        animClass: styles.animDelay2,
    },
    {
        icon: Monitor,
        title: 'Smart Classrooms',
        sub: 'Digital ICT-enabled halls',
        themeClass: styles.theme2,
        floatClass: styles.floatC,
        animClass: styles.animDelay3,
    },
    {
        icon: BookOpen,
        title: 'Digital Library',
        sub: 'National & e-journals',
        themeClass: styles.theme3,
        floatClass: styles.floatA,
        animClass: styles.animDelay4,
    },
    {
        icon: Home,
        title: 'Hostel Facility',
        sub: 'Secure on-campus living',
        themeClass: styles.theme4,
        floatClass: styles.floatB,
        animClass: styles.animDelay5,
    },
    {
        icon: Briefcase,
        title: 'Placement Support',
        sub: 'Dedicated recruitment cell',
        themeClass: styles.theme5,
        floatClass: styles.floatC,
        animClass: styles.animDelay6,
    },
];

export default function HomeFeaturesBar() {
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
            <div ref={orbLeftRef} className={styles.ambientOrbLeft} />
            <div ref={orbRightRef} className={styles.ambientOrbRight} />

            <div className={styles.container}>
                <div className={styles.cardsGrid}>
                    {features.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className={`${styles.featureCard} ${item.floatClass} ${isVisible ? item.animClass : styles.hiddenState
                                    }`}
                            >
                                <div className={`${styles.iconBox} ${item.themeClass}`}>
                                    <Icon size={22} strokeWidth={2.1} />
                                </div>
                                <h4 className={styles.title}>{item.title}</h4>
                                <p className={styles.sub}>{item.sub}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}