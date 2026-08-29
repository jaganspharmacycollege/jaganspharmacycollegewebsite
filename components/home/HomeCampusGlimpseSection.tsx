'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './HomeCampusGlimpseSection.module.css';

const glimpses = [
    {
        title: 'Modern Labs',
        img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
        animClass: styles.animDelay1,
    },
    {
        title: 'Rich Library',
        img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
        animClass: styles.animDelay2,
    },
    {
        title: 'Smart Classrooms',
        img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
        animClass: styles.animDelay3,
    },
    {
        title: 'Events & Fests',
        img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
        animClass: styles.animDelay4,
    },
    {
        title: 'Hostel Life',
        img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
        animClass: styles.animDelay5,
    },
    {
        title: 'Sports & Arena',
        img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
        animClass: styles.animDelay6,
    },
];

export default function HomeCampusGlimpseSection() {
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
                {/* Section Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <div className={styles.headerText}>
                        <span className={styles.eyebrow}>Life at Jagan&apos;s</span>
                        <h2 className={styles.title}>A Glimpse of Our Campus</h2>
                    </div>
                    <Link href="/infrastructure" className={styles.btnGallery}>
                        <span>View Full Gallery</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>

                {/* 6-Card Image Grid */}
                <div className={styles.galleryGrid}>
                    {glimpses.map((item, idx) => (
                        <Link
                            key={idx}
                            href="/infrastructure"
                            className={`${styles.galleryCard} ${isVisible ? item.animClass : styles.hiddenState
                                }`}
                        >
                            <div className={styles.imgFrame}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className={styles.galleryImgTag}
                                />
                            </div>
                            <div className={styles.cardOverlay} />
                            <div className={styles.cardContent}>
                                <p className={styles.labelTag}>{item.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}