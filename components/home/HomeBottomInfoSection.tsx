'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Award, GraduationCap, Building2, Quote, ShieldCheck } from 'lucide-react';
import styles from './HomeBottomInfoSection.module.css';

const recruiters = [
    { name: 'Sun Pharma', logo: '/assets/logo/SP.png' },
    { name: 'Omega Health', logo: '/assets/logo/OH.png' },
    { name: 'Hetero Drugs', logo: '/assets/logo/HT.png' },
    { name: "Dr. Reddy's", logo: '/assets/logo/DR.png' },
    { name: 'Cipla', logo: '/assets/logo/CI.png' },
    { name: 'Aurobindo', logo: '/assets/logo/Aurobindo.png' },
];

export default function HomeBottomInfoSection() {
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
                {/* 1. Approvals & Affiliations */}
                <div
                    className={`${styles.card} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <h3 className={styles.cardTitle}>Approvals &amp; Affiliations</h3>
                    <div className={styles.approvalList}>
                        <div className={styles.approvalItem}>
                            <div className={styles.approvalBadge}>
                                <Award size={20} />
                            </div>
                            <div>
                                <p className={styles.approvalName}>Affiliated to JNTUA</p>
                                <p className={styles.approvalSub}>
                                    Jawaharlal Nehru Technological University
                                </p>
                            </div>
                        </div>

                        <div className={styles.approvalItem}>
                            <div className={styles.approvalBadge}>
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <p className={styles.approvalName}>Approved by PCI</p>
                                <p className={styles.approvalSub}>
                                    Pharmacy Council of India, New Delhi
                                </p>
                            </div>
                        </div>

                        <div className={styles.approvalItem}>
                            <div className={styles.approvalBadge}>
                                <GraduationCap size={20} />
                            </div>
                            <div>
                                <p className={styles.approvalName}>AICTE Approved</p>
                                <p className={styles.approvalSub}>
                                    All India Council for Technical Education
                                </p>
                            </div>
                        </div>

                        <div className={styles.approvalItem}>
                            <div className={styles.approvalBadge}>
                                <Building2 size={20} />
                            </div>
                            <div>
                                <p className={styles.approvalName}>Govt. Recognized</p>
                                <p className={styles.approvalSub}>
                                    Department of Technical Education, AP
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className={styles.approvalNote}>
                        Fully certified and operating under strict curriculum standards set by the university.
                    </p>
                </div>

                {/* 2. Top Recruiters - Clean Square Logos Grid */}
                <div
                    className={`${styles.card} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                        }`}
                >
                    <div className={styles.cardHeaderWithBadge}>
                        <h3 className={styles.cardTitle}>Top Recruiters</h3>
                        <span className={styles.pillBadge}>100+ Placement Partners</span>
                    </div>

                    <p className={styles.recruitersDesc}>
                        Our graduates are hired directly by leading multi-national pharmaceutical leaders and clinical CROs. Through continuous hospital rounds, industry-standard formulation laboratories, and rigorous placement training, our graduates consistently achieve top placement benchmarks across clinical analysis, pharmacovigilance, and global manufacturing operations.
                    </p>

                    <div className={styles.recruiterSquareGrid}>
                        {recruiters.map((company, idx) => (
                            <div
                                key={idx}
                                className={styles.logoSquareCard}
                                title={company.name}
                            >
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className={styles.squareLogoImg}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Student Testimonials */}
                <div
                    className={`${styles.card} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                        }`}
                >
                    <div className={styles.cardHeaderWithBadge}>
                        <h3 className={styles.cardTitle}>Student Voices</h3>
                        <Quote size={20} className={styles.quoteDecor} />
                    </div>

                    <p className={styles.quoteText}>
                        &ldquo;Studying at Jagan&apos;s College of Pharmacy has given me extensive hands-on experience in advanced formulation laboratories and intensive bedside clinical hospital rounds. The rigorous career readiness programs, case study seminars, and placement training provided by our faculty have built my practical knowledge and confidence to excel in upcoming campus recruitment drives.&rdquo;
                    </p>

                    <div className={styles.studentMeta}>
                        <img
                            src="/assets/HomePageImages/HomeStudent.png"
                            alt="Javangula Krishna Priya"
                            className={styles.avatar}
                        />
                        <div>
                            <p className={styles.studentName}>Javangula Krishna Priya</p>
                            <p className={styles.studentRole}>Pharm.D &bull; 4th Year Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}