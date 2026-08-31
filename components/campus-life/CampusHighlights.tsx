'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    FlaskConical,
    BookOpen,
    Trophy,
    Sparkles,
    Home,
    ArrowRight,
} from 'lucide-react';
import styles from './CampusHighlights.module.css';

const highlights = [
    {
        title: 'Advanced Laboratories',
        desc: 'Well-equipped labs for practical learning and pharmaceutical research.',
        image: '/assets/HomePageImages/CGS_lab.png',
        icon: FlaskConical,
        theme: styles.themeEmerald,
        animClass: styles.animDelay1,
    },
    {
        title: 'Rich Library',
        desc: 'A vast collection of books, international journals and digital e-resources.',
        image: '/assets/HomePageImages/CGS_lib.png',
        icon: BookOpen,
        theme: styles.themeAmber,
        animClass: styles.animDelay2,
    },
    {
        title: 'Sports & Fitness',
        desc: 'Indoor and outdoor sports facilities and athletics to keep you energized.',
        image: '/assets/HomePageImages/CGS_sports.png',
        icon: Trophy,
        theme: styles.themePurple,
        animClass: styles.animDelay3,
    },
    {
        title: 'Cultural Activities',
        desc: 'Annual festivals, creative arts events and student clubs to nurture your talents.',
        image: '/assets/HomePageImages/CGS_events.png',
        icon: Sparkles,
        theme: styles.themeTeal,
        animClass: styles.animDelay4,
    },
    {
        title: 'Comfortable Hostel',
        desc: 'Well-furnished, hygienic and secure residential accommodation for boys & girls.',
        image:
            '/assets/Infra/Hostel_1.png',
        icon: Home,
        theme: styles.themePeach,
        animClass: styles.animDelay5,
    },
];

export default function CampusHighlights() {
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
                {/* Section Heading with Gold Line */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Infrastructure &amp; Amenities</span>
                    </div>
                    <h2 className={styles.title}>Campus Highlights</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.headerSub}>
                        Explore the state-of-the-art academic and recreational facilities that make life at Jagan&apos;s inspiring.
                    </p>
                </div>

                {/* 5 Cards Row */}
                <div className={styles.grid}>
                    {highlights.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className={`${styles.card} ${isVisible ? item.animClass : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.imageFrame}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={styles.cardImg}
                                    />
                                    <div className={styles.imageOverlay} />
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.iconHeader}>
                                        <div className={`${styles.iconSquircle} ${item.theme}`}>
                                            <Icon size={18} strokeWidth={2.2} />
                                        </div>
                                        <h3 className={styles.cardTitle}>{item.title}</h3>
                                    </div>
                                    <p className={styles.description}>{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Centered CTA Button */}
                <div
                    className={`${styles.btnWrapper} ${isVisible ? styles.animDelay6 : styles.hiddenState
                        }`}
                >
                    <Link href="/campus-life/facilities" className={styles.viewAllBtn}>
                        <span>View All Facilities</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}