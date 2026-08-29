'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    FlaskConical,
    Microscope,
    Sparkles,
    CheckCircle2,
    GraduationCap,
    Award,
    Building2,
} from 'lucide-react';
import styles from './MPharm.module.css';

const overviewImages = [
    {
        src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
        caption: 'Advanced Spectrophotometry & HPLC Analytics',
    },
    {
        src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
        caption: 'Novel Drug Delivery Systems (NDDS) Formulation',
    },
    {
        src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
        caption: 'Molecular Pharmacology & Preclinical Screening',
    },
];

const specializations = [
    {
        icon: FlaskConical,
        title: 'Pharmaceutics',
        tag: 'Novel Drug Delivery',
        desc: 'Focuses on novel drug delivery systems (NDDS), nanomedicine, industrial formulation optimization, and bioavailability enhancement.',
        theme: styles.themeEmerald,
        animClass: styles.animDelay1,
    },
    {
        icon: Microscope,
        title: 'Pharmaceutical Analysis',
        tag: 'Instrumentation & QC',
        desc: 'Advanced training in spectroscopic methods, HPLC, mass spectrometry, analytical method development, and regulatory validation.',
        theme: styles.themeAmber,
        animClass: styles.animDelay2,
    },
    {
        icon: Sparkles,
        title: 'Pharmacology',
        tag: 'Preclinical Screening',
        desc: 'In-depth molecular pharmacology, preclinical screening models, toxicological evaluations, and neuropharmacology.',
        theme: styles.themePurple,
        animClass: styles.animDelay3,
    },
];

const departments = [
    {
        icon: Building2,
        title: 'Dept. of Pharmaceutics',
        equipment:
            'Rotary tablet presses, dissolution test apparatus, freeze dryers & particle size analyzers.',
        focus: 'Formulation Design & Industrial Scale-Up',
        animClass: styles.animDelay1,
    },
    {
        icon: Microscope,
        title: 'Dept. of Pharmaceutical Analysis',
        equipment:
            'HPLC systems, UV-Visible spectrophotometers, FTIR spectrometers & stability chambers.',
        focus: 'Bioanalytical Methods & Quality Control',
        animClass: styles.animDelay2,
    },
    {
        icon: FlaskConical,
        title: 'Dept. of Pharmacology',
        equipment:
            'CPCSEA-standard animal housing, computerized organ baths & behavioral testing setups.',
        focus: 'In-Vivo Therapeutics & Toxicity Profiling',
        animClass: styles.animDelay3,
    },
];

export default function MPharmPage() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // 5000ms auto-cycling carousel with cross-fade
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % overviewImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Viewport Intersection Observer triggering on entry
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

    // Fluid lerp (0.035) Parallax Animation
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
        <div ref={sectionRef} className={styles.pageWrapper}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Header */}
                <div
                    className={`${styles.pageHeader} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <span className={styles.eyebrow}>Postgraduate Master Degree</span>
                    <h1 className={styles.title}>
                        Master of Pharmacy (M. Pharm)
                    </h1>
                    <div className={styles.accentLine} />
                    <p className={styles.headerSub}>
                        A research-intensive 2-year postgraduate program tailored for advanced pharmaceutical R&amp;D, analytical instrumentation, molecular pharmacology, and academic leadership.
                    </p>
                </div>

                {/* 1. Main Overview Card with Auto-Sliding Images */}
                <div
                    className={`${styles.overviewCard} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                        }`}
                >
                    <div className={styles.overviewContent}>
                        <div className={styles.cardSectionTag}>
                            <Award size={14} />
                            <span>Advanced R&amp;D Program</span>
                        </div>
                        <h2 className={styles.cardHeading}>
                            Cutting-Edge Research &amp; Industry Specializations
                        </h2>
                        <p className={styles.descText}>
                            Our Master of Pharmacy (M. Pharm) offers specialized 2-year postgraduate degrees affiliated with JNTUA and approved by AICTE. Backed by state-of-the-art analytical equipment and funded research projects, students complete rigorous dissertations and publish in high-impact international journals.
                        </p>
                        <div className={styles.highlightsList}>
                            <div className={styles.highlightItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>Affiliated to JNTUA</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>AICTE Approved</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>High-End HPLC &amp; FTIR Labs</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>Scopus Indexed Publications</span>
                            </div>
                        </div>
                    </div>

                    {/* Auto-sliding Image Showcase */}
                    <div className={styles.overviewImageWrapper}>
                        {overviewImages.map((item, idx) => (
                            <img
                                key={idx}
                                src={item.src}
                                alt={item.caption}
                                className={`${styles.overviewImage} ${idx === currentImgIdx ? styles.activeImg : styles.inactiveImg
                                    }`}
                            />
                        ))}
                        <div className={styles.imageOverlay} />

                        {/* Dynamic Active Caption Badge */}
                        <div className={styles.imageBadge}>
                            <span>{overviewImages[currentImgIdx].caption}</span>
                        </div>

                        {/* Indicator Dots */}
                        <div className={styles.dotsWrapper}>
                            {overviewImages.map((_, dotIdx) => (
                                <button
                                    key={dotIdx}
                                    onClick={() => setCurrentImgIdx(dotIdx)}
                                    className={`${styles.dot} ${dotIdx === currentImgIdx ? styles.activeDot : ''
                                        }`}
                                    aria-label={`Show image ${dotIdx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Specializations Grid */}
                <div className={styles.sectionBlock}>
                    <div
                        className={`${styles.sectionHeaderInner} ${isVisible ? styles.animateReveal3 : styles.hiddenState
                            }`}
                    >
                        <span className={styles.innerEyebrow}>Areas of Specialization</span>
                        <h2 className={styles.innerTitle}>
                            Postgraduate Disciplines
                        </h2>
                    </div>
                    <div className={styles.specializationsGrid}>
                        {specializations.map((spec, idx) => {
                            const Icon = spec.icon;
                            return (
                                <div
                                    key={idx}
                                    className={`${styles.specCard} ${isVisible ? spec.animClass : styles.hiddenState
                                        }`}
                                >
                                    <div className={styles.specCardTop}>
                                        <div className={`${styles.iconSquircle} ${spec.theme}`}>
                                            <Icon size={26} strokeWidth={2} />
                                        </div>
                                        <span className={styles.specTag}>{spec.tag}</span>
                                    </div>
                                    <h3 className={styles.specTitle}>{spec.title}</h3>
                                    <p className={styles.specDesc}>{spec.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 3. Academic Departments */}
                <div className={styles.sectionBlock}>
                    <div
                        className={`${styles.sectionHeaderInner} ${isVisible ? styles.animateReveal4 : styles.hiddenState
                            }`}
                    >
                        <span className={styles.innerEyebrow}>Academic Infrastructure</span>
                        <h2 className={styles.innerTitle}>
                            Dedicated Research Departments
                        </h2>
                    </div>
                    <div className={styles.deptGrid}>
                        {departments.map((dept, idx) => {
                            const DeptIcon = dept.icon;
                            return (
                                <div
                                    key={idx}
                                    className={`${styles.deptCard} ${isVisible ? dept.animClass : styles.hiddenState
                                        }`}
                                >
                                    <div className={styles.deptHeader}>
                                        <div className={styles.deptIconBadge}>
                                            <DeptIcon size={22} strokeWidth={2} />
                                        </div>
                                        <h3 className={styles.deptTitle}>{dept.title}</h3>
                                    </div>
                                    <div className={styles.deptBody}>
                                        <p className={styles.deptFocus}>
                                            <strong>Core Focus:</strong> {dept.focus}
                                        </p>
                                        <p className={styles.deptEquipment}>
                                            <strong>Lab Facilities:</strong> {dept.equipment}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 4. Admission Eligibility Card */}
                <div
                    className={`${styles.eligibilityCard} ${isVisible ? styles.animateReveal5 : styles.hiddenState
                        }`}
                >
                    <div className={styles.eligibilityHeader}>
                        <div className={`${styles.iconSquircle} ${styles.themeEmerald}`}>
                            <GraduationCap size={28} strokeWidth={2} />
                        </div>
                        <div>
                            <span className={styles.innerEyebrow}>Admission Criteria</span>
                            <h2 className={styles.eligibilityTitle}>
                                Eligibility &amp; Entrance Requirements
                            </h2>
                        </div>
                    </div>
                    <div className={styles.eligibilityList}>
                        <div className={styles.eligibilityItem}>
                            <span className={styles.listBulletDot} />
                            <span className={styles.eligibilityText}>
                                Passed B. Pharm degree examination with a minimum of 55% aggregate marks (50% for reserved category candidates) from any recognized institution.
                            </span>
                        </div>
                        <div className={styles.eligibilityItem}>
                            <span className={styles.listBulletDot} />
                            <span className={styles.eligibilityText}>
                                Valid score in the national Graduate Pharmacy Aptitude Test (GPAT) or state-level AP PGECET entrance examination.
                            </span>
                        </div>
                        <div className={styles.eligibilityItem}>
                            <span className={styles.listBulletDot} />
                            <span className={styles.eligibilityText}>
                                Registered Pharmacist certification with the state regulatory authority or statutory state councils.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}