'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Award, GraduationCap, Building2, Quote, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
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
    const [activeIndex, setActiveIndex] = useState(2);

    // Auto-slide effect for the 3D coverflow carousel
    useEffect(() => {
        const slideTimer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % recruiters.length);
        }, 3200);
        return () => clearInterval(slideTimer);
    }, []);

    useEffect(() => {
        let isMounted = true;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isMounted && entry) {
                    setIsVisible(entry.isIntersecting);
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            isMounted = false;
            observer.disconnect();
        };
    }, []);

    // Parallax animation
    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;
        let isMounted = true;

        const updateParallax = () => {
            if (!isMounted || !sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                currentScroll += (targetScroll - currentScroll) * 0.035;
                const relativeScroll = window.innerHeight - rect.top;
                if (orbLeftRef.current) {
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeScroll * 0.06}px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeScroll * -0.05}px, 0)`;
                }
            }
            if (isMounted) {
                animationFrameId = requestAnimationFrame(updateParallax);
            }
        };

        const handleScroll = () => {
            if (!isMounted) return;
            targetScroll = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateParallax);

        return () => {
            isMounted = false;
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? recruiters.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % recruiters.length);
    };

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
                                <p className={styles.approvalSub}>Jawaharlal Nehru Technological University</p>
                            </div>
                        </div>

                        <div className={styles.approvalItem}>
                            <div className={styles.approvalBadge}>
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <p className={styles.approvalName}>Approved by PCI</p>
                                <p className={styles.approvalSub}>Pharmacy Council of India, New Delhi</p>
                            </div>
                        </div>

                        <div className={styles.approvalItem}>
                            <div className={styles.approvalBadge}>
                                <GraduationCap size={20} />
                            </div>
                            <div>
                                <p className={styles.approvalName}>AICTE Approved</p>
                                <p className={styles.approvalSub}>All India Council for Technical Education</p>
                            </div>
                        </div>

                        <div className={styles.approvalItem}>
                            <div className={styles.approvalBadge}>
                                <Building2 size={20} />
                            </div>
                            <div>
                                <p className={styles.approvalName}>Govt. Recognized</p>
                                <p className={styles.approvalSub}>Department of Technical Education, AP</p>
                            </div>
                        </div>
                    </div>

                    <p className={styles.approvalNote}>
                        Fully certified and operating under strict curriculum standards set by the university.
                    </p>
                </div>

                {/* 2. Top Recruiters - 3D Coverflow Slider */}
                <div
                    className={`${styles.card} ${styles.recruitersCard} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                        }`}
                >
                    <div className={styles.cardHeaderWithBadge}>
                        <h3 className={styles.cardTitle}>Top Recruiters</h3>
                    </div>

                    <div className={styles.coverflowWrapper}>
                        <div className={styles.coverflowStage}>
                            {recruiters.map((company, idx) => {
                                const total = recruiters.length;
                                let offset = (idx - activeIndex + total) % total;
                                if (offset > total / 2) offset -= total;

                                // Only render items within immediate depth range
                                const isVisibleSlide = Math.abs(offset) <= 2;
                                if (!isVisibleSlide) return null;

                                const isImmediateLeft = offset === -1;
                                const isImmediateRight = offset === 1;

                                let cardStyleClass = styles.coverflowSlideCenter;
                                if (isImmediateLeft) cardStyleClass = styles.coverflowSlideLeft;
                                if (isImmediateRight) cardStyleClass = styles.coverflowSlideRight;
                                if (offset < -1) cardStyleClass = styles.coverflowSlideFarLeft;
                                if (offset > 1) cardStyleClass = styles.coverflowSlideFarRight;

                                return (
                                    <div
                                        key={company.name}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`${styles.coverflowCard} ${cardStyleClass}`}
                                    >
                                        <div className={styles.cardPhotoFrame}>
                                            <img
                                                src={company.logo}
                                                alt={company.name}
                                                className={styles.companyLogoImg}
                                            />
                                        </div>
                                        <div className={styles.polaroidFooter}>
                                            <span className={styles.polaroidText}>{company.name}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Carousel Arrow Controls */}
                        <button
                            type="button"
                            onClick={handlePrev}
                            aria-label="Previous recruiter"
                            className={`${styles.navBtn} ${styles.navBtnPrev}`}
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            type="button"
                            onClick={handleNext}
                            aria-label="Next recruiter"
                            className={`${styles.navBtn} ${styles.navBtnNext}`}
                        >
                            <ChevronRight size={16} />
                        </button>
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
                        &ldquo;Studying at Jagan&apos;s College of Pharmacy has given me extensive hands-on
                        experience in advanced formulation laboratories and intensive bedside clinical hospital
                        rounds. The rigorous career readiness programs, case study seminars, and placement training
                        provided by our faculty have built my practical knowledge and confidence to excel in upcoming
                        campus recruitment drives.&rdquo;
                    </p>

                    <div className={styles.studentMeta}>
                        <img
                            src="/assets/HomePageImages/HomeStudent.png"
                            alt="Javangula Krishna Priya"
                            className={styles.avatar}
                        />
                        <div>
                            <p className={styles.studentName}>Javangula Krishna Priya</p>
                            <p className={styles.studentRole}>Pharm. D &bull; 4th Year Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}