'use client';

import React from 'react';
import {
    FileCheck2,
    Globe2,
    FolderCheck,
    CreditCard,
    Sparkles,
} from 'lucide-react';
import styles from './AdmissionProcessPage.module.css';

const steps = [
    {
        num: '01',
        title: 'Entrance Examination & Eligibility Verification',
        desc: 'Candidates must appear for the relevant entrance examinations—AP EAPCET for B. Pharm and Pharm.D, or GPAT / AP PGECET for M. Pharm admissions.',
        icon: FileCheck2,
        theme: styles.themeEmerald,
    },
    {
        num: '02',
        title: 'State Counseling / Online Application',
        desc: 'Qualifying students can participate in APSCHE state web counseling under Convenor Quota, or apply directly on our campus portal for Category-B (Management) Quota.',
        icon: Globe2,
        theme: styles.themeAmber,
    },
    {
        num: '03',
        title: 'Document Verification & Seat Allotment',
        desc: 'Shortlisted candidates submit their academic credentials, rank cards, and transfer certificates for administrative verification and seat confirmation.',
        icon: FolderCheck,
        theme: styles.themePurple,
    },
    {
        num: '04',
        title: 'Tuition Fee Payment & Enrollment',
        desc: 'Upon official seat allotment, candidates pay the prescribed institutional fee to complete university enrollment and receive their official student kit.',
        icon: CreditCard,
        theme: styles.themeTeal,
    },
];

export default function AdmissionProcessPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Header Section */}
                <div className={styles.header}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.sparkleIcon} />
                        <span>Admissions 2026–27</span>
                    </div>
                    <h1 className={styles.title}>Admission Process</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Follow the systematic step-by-step procedure to secure your admission into our approved
                        pharmaceutical programs at Jagan&apos;s College of Pharmacy.
                    </p>
                </div>

                {/* Vertical Step Cards List */}
                <div className={styles.list}>
                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.num} className={styles.card}>
                                <div className={styles.cardInner}>
                                    {/* Step Number Badge */}
                                    <div className={`${styles.stepNumber} ${step.theme}`}>
                                        <span className={styles.numText}>{step.num}</span>
                                        <Icon size={18} strokeWidth={2.2} className={styles.stepIcon} />
                                    </div>

                                    {/* Step Content */}
                                    <div className={styles.contentCol}>
                                        <div className={styles.titleRow}>
                                            <span className={styles.stepIndicator}>Step {step.num}</span>
                                            <h3 className={styles.stepTitle}>{step.title}</h3>
                                        </div>
                                        <p className={styles.stepDesc}>{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}