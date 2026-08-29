'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './CoursesCTA.module.css';

export default function CoursesCTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const goldArcRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.12 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;

        const updateParallax = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();

            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                currentScroll += (targetScroll - currentScroll) * 0.08;
                const relativeOffset = window.innerHeight - rect.top;

                if (imageRef.current) {
                    imageRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06}px, 0) scale(1.05)`;
                }
                if (goldArcRef.current) {
                    goldArcRef.current.style.transform = `translate3d(${relativeOffset * -0.02}px, 0, 0)`;
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
            <div
                className={`${styles.card} ${isVisible ? styles.animateCard : styles.hiddenState
                    }`}
            >
                <div className={styles.leftCol}>
                    <h2
                        className={`${styles.title} ${isVisible ? styles.animateTitle : styles.hiddenState
                            }`}
                    >
                        Ready to Start Your Journey?
                    </h2>
                    <p
                        className={`${styles.description} ${isVisible ? styles.animateDesc : styles.hiddenState
                            }`}
                    >
                        Join Jagan&apos;s College of Pharmacy and take the first step towards a successful career in healthcare.
                    </p>
                    <div
                        className={`${styles.btnWrapper} ${isVisible ? styles.animateBtn : styles.hiddenState
                            }`}
                    >
                        <Link href="/admissions" className={styles.applyBtn}>
                            <span>Apply Now</span>
                            <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>

                <div className={styles.desktopImageContainer}>
                    <div ref={goldArcRef} className={styles.goldArc} />
                    <div className={styles.imageArc}>
                        <img
                            ref={imageRef}
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                            alt="Jagan's College of Pharmacy Students in Library"
                            className={styles.studentImg}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}