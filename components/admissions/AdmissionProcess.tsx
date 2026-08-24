'use client';

import React from 'react';
import {
    ClipboardCheck,
    FileText,
    FileUp,
    CreditCard,
    Users,
    CheckCircle2,
    ChevronRight,
} from 'lucide-react';
import styles from './AdmissionProcess.module.css';

const steps = [
    {
        step: 'Step 01',
        title: 'Check Eligibility',
        desc: 'Review the academic criteria for your chosen pharmacy course.',
        icon: ClipboardCheck,
        iconTheme: styles.iconMint,
    },
    {
        step: 'Step 02',
        title: 'Apply Online',
        desc: 'Fill out the online application form with the required details.',
        icon: FileText,
        iconTheme: styles.iconPurple,
    },
    {
        step: 'Step 03',
        title: 'Submit Documents',
        desc: 'Upload the necessary certificates and ID proofs as per guidelines.',
        icon: FileUp,
        iconTheme: styles.iconPeach,
    },
    {
        step: 'Step 04',
        title: 'Pay Application Fee',
        desc: 'Pay the application fee securely through the online payment gateway.',
        icon: CreditCard,
        iconTheme: styles.iconMint,
    },
    {
        step: 'Step 05',
        title: 'Merit / Selection',
        desc: 'Evaluation is completed based on entrance rank and qualifying merit.',
        icon: Users,
        iconTheme: styles.iconPurple,
    },
    {
        step: 'Step 06',
        title: 'Seat Confirmation',
        desc: 'Receive formal admission confirmation and reporting dates via SMS/email.',
        icon: CheckCircle2,
        iconTheme: styles.iconPeach,
    },
];

export default function AdmissionProcess() {
    return (
        <section className={styles.section}>
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>How to Join</span>
                    <h2 className={styles.title}>Admission Process</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.subText}>
                        Follow these simple, transparent steps to complete your enrollment at Jagan&apos;s College of Pharmacy.
                    </p>
                </div>

                {/* 6 Step Cards Grid */}
                <div className={styles.grid}>
                    {steps.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className={styles.cardWrapper}>
                                <div className={styles.card}>
                                    <div className={styles.cardTop}>
                                        <div className={`${styles.iconSquircle} ${item.iconTheme}`}>
                                            <Icon size={22} strokeWidth={2} />
                                        </div>
                                        <span className={styles.stepTag}>{item.step}</span>
                                    </div>

                                    <div className={styles.cardBody}>
                                        <h3 className={styles.stepTitle}>{item.title}</h3>
                                        <p className={styles.stepDesc}>{item.desc}</p>
                                    </div>
                                </div>

                                {/* Arrow Connector between steps for Desktops */}
                                {idx !== steps.length - 1 && (
                                    <div className={styles.connectorArrow}>
                                        <ChevronRight size={18} strokeWidth={2.5} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}