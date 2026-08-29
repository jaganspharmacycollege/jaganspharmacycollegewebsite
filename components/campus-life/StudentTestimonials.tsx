'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Quote, Sparkles } from 'lucide-react';
import styles from './StudentTestimonials.module.css';

const testimonials = [
    {
        quote:
            'The campus environment is amazing! We get great support from faculty and plenty of opportunities to grow.',
        name: 'Anusha R.',
        role: 'B. Pharmacy III Year',
        image:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        theme: styles.themeEmerald,
        animClass: styles.animDelay1,
    },
    {
        quote:
            "Jagan's College of Pharmacy feels like a second home. The facilities and exposure here are excellent.",
        name: 'Karthik M.',
        role: 'Pharm.D II Year',
        image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        theme: styles.themeAmber,
        animClass: styles.animDelay2,
    },
    {
        quote:
            "I've learned so much beyond academics through events, clubs and interactions. Truly a holistic experience!",
        name: 'Sreeja P.',
        role: 'M. Pharmacy I Year',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
        theme: styles.themePurple,
        animClass: styles.animDelay3,
    },
];

export default function StudentTestimonials() {
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
                {/* Section Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Student Voices</span>
                    </div>
                    <h2 className={styles.title}>What Our Students Say</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.headerSub}>
                        Hear directly from our students about their academic journey, laboratory exposure, and campus life.
                    </p>
                </div>

                {/* 3 Testimonial Cards Grid */}
                <div className={styles.grid}>
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className={`${styles.card} ${isVisible ? item.animClass : styles.hiddenState
                                }`}
                        >
                            {/* Left Content Area */}
                            <div className={styles.leftContent}>
                                <div className={`${styles.quoteMarkBadge} ${item.theme}`}>
                                    <Quote size={16} strokeWidth={2.4} />
                                </div>
                                <p className={styles.quoteText}>&ldquo;{item.quote}&rdquo;</p>
                                <div className={styles.meta}>
                                    <h4 className={styles.studentName}>{item.name}</h4>
                                    <p className={styles.studentRole}>{item.role}</p>
                                </div>
                            </div>

                            {/* Right Circular Avatar Badge */}
                            <div className={styles.avatarBadge}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className={styles.avatarImg}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}