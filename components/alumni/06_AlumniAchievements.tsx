'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Sparkles,
    Trophy,
    FlaskConical,
    Building2,
    Layers,
} from 'lucide-react';
import styles from './AlumniAchievements.module.css';

const achievementSlides = [
    {
        src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
        caption: 'Global Research Citations, Drug Patents & International Awards',
    },
    {
        src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
        caption: 'Executive Leadership Across Global Regulatory & Healthcare Bodies',
    },
    {
        src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
        caption: 'Breakthrough Formulations & Clinical Pharmacotherapy Excellence',
    },
];

const achievements = [
    {
        icon: FlaskConical,
        metric: '40+ Patents & Papers',
        title: 'Research Innovations',
        desc: 'Alumni authored high-impact publications in Nature Pharma, Elsevier, and secured multiple drug formulation patents.',
        theme: styles.themeEmerald,
        animClass: styles.animDelay3,
    },
    {
        icon: Building2,
        metric: '120+ Corporate Leaders',
        title: 'Industry Leadership',
        desc: 'Graduates currently heading R&D, QA, Regulatory Affairs, and Clinical Ops at Fortune 500 pharmaceutical firms.',
        theme: styles.themeAmber,
        animClass: styles.animDelay4,
    },
    {
        icon: Trophy,
        metric: '15+ National Awards',
        title: 'Excellence Recognitions',
        desc: 'Conferred prestigious IPA Best Pharmacist and Young Pharmaceutical Scientist honours globally.',
        theme: styles.themePurple,
        animClass: styles.animDelay5,
    },
];

export default function AlumniAchievements() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // Cinematic 5.0-second auto-cycling interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % achievementSlides.length);
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
        <section ref={sectionRef} className={styles.sectionAlt}>
            {/* Ambient Parallax Lighting Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Header Block */}
                <div
                    className={`${styles.headerBlock} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Excellence &amp; Honors</span>
                    </div>
                    <h2 className={styles.title}>Alumni Achievements</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Recognizing the remarkable global contributions, scientific discoveries, and executive milestones accomplished by our distinguished alumni.
                    </p>
                </div>

                {/* Auto-sliding Banner Showcase */}
                <div
                    className={`${styles.carouselContainer} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                        }`}
                >
                    <div className={styles.imageFrame}>
                        {achievementSlides.map((slide, idx) => (
                            <img
                                key={idx}
                                src={slide.src}
                                alt={slide.caption}
                                className={`${styles.carouselImg} ${idx === currentImgIdx ? styles.activeImg : styles.inactiveImg
                                    }`}
                            />
                        ))}
                        <div className={styles.imageOverlay} />

                        {/* Top Amber Badges */}
                        <div className={styles.badgesHeader}>
                            <span className={styles.codeBadge}>
                                <Layers size={13} className={styles.codeIcon} />
                                <span>GLOBAL RECOGNITION</span>
                            </span>
                            <span className={styles.specBadge}>
                                Research Patents Leadership
                            </span>
                        </div>

                        {/* Bottom Caption & Sync Dots */}
                        <div className={styles.captionOverlay}>
                            <h4 className={styles.captionText}>
                                {achievementSlides[currentImgIdx].caption}
                            </h4>
                            <div className={styles.dotsWrapper}>
                                {achievementSlides.map((_, dotIdx) => (
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

                {/* 3 Milestone Achievement Cards Grid */}
                <div className={styles.grid}>
                    {achievements.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className={`${styles.card} ${isVisible ? item.animClass : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.iconSquircle} ${item.theme}`}>
                                        <Icon size={20} strokeWidth={2.2} />
                                    </div>
                                    <span className={styles.metricBadge}>{item.metric}</span>
                                </div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}