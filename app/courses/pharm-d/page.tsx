'use client';

import React, { useState, useEffect } from 'react';
import {
    Clock,
    CheckCircle2,
    Users2,
    GraduationCap,
    Stethoscope,
    Building2,
} from 'lucide-react';
import styles from './PharmD.module.css';

const overviewImages = [
    {
        src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
        caption: 'Clinical Ward Postings & Patient Counseling',
    },
    {
        src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
        caption: 'Pharmacotherapy & Drug Monitoring',
    },
    {
        src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
        caption: 'Clinical Case Studies & Hospital Rotations',
    },
];

export default function PharmDPage() {
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
                {/* Section Header */}
                <div className={styles.pageHeader}>
                    <span className={styles.eyebrow}>Doctoral Degree Program</span>
                    <h1 className={styles.title}>Doctor of Pharmacy (Pharm. D)</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.headerSub}>
                        A prestigious 6-year professional doctorate program focused on clinical pharmacy, bedside ward rounds,
                        therapeutic drug monitoring, and patient healthcare delivery.
                    </p>
                </div>

                {/* 1. Main Overview Feature Card with Auto-sliding Images */}
                <div className={styles.overviewCard}>
                    <div className={styles.overviewContent}>
                        <div className={styles.cardSectionTag}>
                            <Stethoscope size={14} />
                            <span>Clinical Excellence</span>
                        </div>
                        <h2 className={styles.cardHeading}>Patient-Centric Clinical Pharmacotherapy</h2>
                        <p className={styles.descText}>
                            The Doctor of Pharmacy (Pharm.D) is a prestigious doctoral program centered around clinical
                            pharmacy practice, patient counseling, pharmacotherapy, and adverse drug reaction monitoring.
                            Affiliated with JNTUA and approved by statutory regulatory bodies, students acquire extensive hospital ward
                            experience, collaborating closely with physicians and medical teams in diagnosis, medication charts,
                            and patient wellness.
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
                                <span>Multi-Specialty Hospital Postings</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                <span>1 Year Full Clinical Internship</span>
                            </div>
                        </div>
                    </div>

                    {/* Auto-sliding Clinical Image Carousel */}
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

                        {/* Carousel Dot Indicators */}
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

                {/* 2. Key Specifications Cards Grid (Duration, Eligibility, Intake) */}
                <div className={styles.specsGrid}>
                    {/* Card 1: Duration */}
                    <div className={styles.specCard}>
                        <div className={styles.specHeader}>
                            <div className={`${styles.iconSquircle} ${styles.iconPurple}`}>
                                <Clock size={24} strokeWidth={2} />
                            </div>
                            <div className={styles.specHeaderTitles}>
                                <span className={styles.specEyebrow}>Academic Timeline</span>
                                <h3 className={styles.specTitle}>Duration</h3>
                            </div>
                        </div>

                        <div className={styles.metricWrapper}>
                            <div className={styles.metricValue}>6 Years</div>
                            <div className={styles.metricSub}>5 Years Study + 1 Year Internship</div>
                        </div>

                        <p className={styles.specDesc}>
                            The 6th year consists of intensive full-time clinical rotations across multi-specialty hospital
                            departments including internal medicine, pediatrics, oncology, nephrology, and cardiology.
                        </p>
                    </div>

                    {/* Card 2: Eligibility */}
                    <div className={styles.specCard}>
                        <div className={styles.specHeader}>
                            <div className={`${styles.iconSquircle} ${styles.iconAmber}`}>
                                <GraduationCap size={24} strokeWidth={2} />
                            </div>
                            <div className={styles.specHeaderTitles}>
                                <span className={styles.specEyebrow}>Admission Criteria</span>
                                <h3 className={styles.specTitle}>Eligibility</h3>
                            </div>
                        </div>

                        <div className={styles.eligibilityList}>
                            <div className={styles.eligibilityItem}>
                                <span className={styles.listBulletDot} />
                                <span>Passed 10+2 Intermediate with Physics and Chemistry along with Mathematics or Biology (MPC / BiPC).</span>
                            </div>
                            <div className={styles.eligibilityItem}>
                                <span className={styles.listBulletDot} />
                                <span>Or candidates holding a recognized Diploma in Pharmacy (D.Pharm) qualification.</span>
                            </div>
                            <div className={styles.eligibilityItem}>
                                <span className={styles.listBulletDot} />
                                <span>Valid rank in AP EAPCET entrance examination or qualifying merit in management category admissions.</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Intake */}
                    <div className={styles.specCard}>
                        <div className={styles.specHeader}>
                            <div className={`${styles.iconSquircle} ${styles.iconMint}`}>
                                <Users2 size={24} strokeWidth={2} />
                            </div>
                            <div className={styles.specHeaderTitles}>
                                <span className={styles.specEyebrow}>Approved Capacity</span>
                                <h3 className={styles.specTitle}>Annual Intake</h3>
                            </div>
                        </div>

                        <div className={styles.metricWrapper}>
                            <div className={styles.metricValue}>30 Seats</div>
                            <div className={styles.metricSub}>Approved by AICTE &amp; JNTUA</div>
                        </div>

                        <p className={styles.specDesc}>
                            Small cohort size ensures focused bedside mentoring, continuous doctor-student clinical discussions,
                            and dedicated research mentorship during rotations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}