'use client';

import React, { useState, useEffect } from 'react';
import {
    FlaskConical,
    Microscope,
    Sparkles,
    CheckCircle2,
    GraduationCap,
    Award,
    Building2,
    BookOpen,
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
    },
    {
        icon: Microscope,
        title: 'Pharmaceutical Analysis',
        tag: 'Instrumentation & QC',
        desc: 'Advanced training in spectroscopic methods, HPLC, mass spectrometry, analytical method development, and regulatory validation.',
        theme: styles.themeAmber,
    },
    {
        icon: Sparkles,
        title: 'Pharmacology',
        tag: 'Preclinical Screening',
        desc: 'In-depth molecular pharmacology, preclinical screening models, toxicological evaluations, and neuropharmacology.',
        theme: styles.themePurple,
    },
];

const departments = [
    {
        icon: Building2,
        title: 'Dept. of Pharmaceutics',
        equipment: 'Rotary tablet presses, dissolution test apparatus, freeze dryers & particle size analyzers.',
        focus: 'Formulation Design & Industrial Scale-Up',
    },
    {
        icon: Microscope,
        title: 'Dept. of Pharmaceutical Analysis',
        equipment: 'HPLC systems, UV-Visible spectrophotometers, FTIR spectrometers & stability chambers.',
        focus: 'Bioanalytical Methods & Quality Control',
    },
    {
        icon: FlaskConical,
        title: 'Dept. of Pharmacology',
        equipment: 'CPCSEA-standard animal housing, computerized organ baths & behavioral testing setups.',
        focus: 'In-Vivo Therapeutics & Toxicity Profiling',
    },
];

export default function MPharmPage() {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImgIdx((prev) => (prev + 1) % overviewImages.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.pageHeader}>
                    <span className={styles.eyebrow}>Postgraduate Master Degree</span>
                    <h1 className={styles.title}>Master of Pharmacy (M. Pharm)</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.headerSub}>
                        A research-intensive 2-year postgraduate program tailored for advanced pharmaceutical R&amp;D,
                        analytical instrumentation, molecular pharmacology, and academic leadership.
                    </p>
                </div>

                {/* 1. Main Overview Card with Auto-Sliding Images */}
                <div className={styles.overviewCard}>
                    <div className={styles.overviewContent}>
                        <div className={styles.cardSectionTag}>
                            <Award size={14} />
                            <span>Advanced R&amp;D Program</span>
                        </div>
                        <h2 className={styles.cardHeading}>Cutting-Edge Research &amp; Industry Specializations</h2>
                        <p className={styles.descText}>
                            Our Master of Pharmacy (M. Pharm) offers specialized 2-year postgraduate degrees affiliated with
                            JNTUA and approved by AICTE. Backed by state-of-the-art analytical equipment and funded research
                            projects, students complete rigorous dissertations and publish in high-impact international journals.
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
                    <div className={styles.sectionHeaderInner}>
                        <span className={styles.innerEyebrow}>Areas of Specialization</span>
                        <h2 className={styles.innerTitle}>Postgraduate Disciplines</h2>
                    </div>

                    <div className={styles.specializationsGrid}>
                        {specializations.map((spec, idx) => {
                            const Icon = spec.icon;
                            return (
                                <div key={idx} className={styles.specCard}>
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
                    <div className={styles.sectionHeaderInner}>
                        <span className={styles.innerEyebrow}>Academic Infrastructure</span>
                        <h2 className={styles.innerTitle}>Dedicated Research Departments</h2>
                    </div>

                    <div className={styles.deptGrid}>
                        {departments.map((dept, idx) => {
                            const DeptIcon = dept.icon;
                            return (
                                <div key={idx} className={styles.deptCard}>
                                    <div className={styles.deptHeader}>
                                        <div className={styles.deptIconBadge}>
                                            <DeptIcon size={22} strokeWidth={2} />
                                        </div>
                                        <h3 className={styles.deptTitle}>{dept.title}</h3>
                                    </div>
                                    <div className={styles.deptBody}>
                                        <p className={styles.deptFocus}><strong>Core Focus:</strong> {dept.focus}</p>
                                        <p className={styles.deptEquipment}><strong>Lab Facilities:</strong> {dept.equipment}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 4. Admission Eligibility Card */}
                <div className={styles.eligibilityCard}>
                    <div className={styles.eligibilityHeader}>
                        <div className={`${styles.iconSquircle} ${styles.themeEmerald}`}>
                            <GraduationCap size={28} strokeWidth={2} />
                        </div>
                        <div>
                            <span className={styles.innerEyebrow}>Admission Criteria</span>
                            <h2 className={styles.eligibilityTitle}>Eligibility &amp; Entrance Requirements</h2>
                        </div>
                    </div>

                    <div className={styles.eligibilityList}>
                        <div className={styles.eligibilityItem}>
                            <span className={styles.listBulletDot} />
                            <span>Passed B. Pharm degree examination with a minimum of 55% aggregate marks (50% for reserved category candidates) from any recognized institution.</span>
                        </div>
                        <div className={styles.eligibilityItem}>
                            <span className={styles.listBulletDot} />
                            <span>Valid score in the national Graduate Pharmacy Aptitude Test (GPAT) or state-level AP PGECET entrance examination.</span>
                        </div>
                        <div className={styles.eligibilityItem}>
                            <span className={styles.listBulletDot} />
                            <span>Registered Pharmacist certification with the state regulatory authority or statutory state councils.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}