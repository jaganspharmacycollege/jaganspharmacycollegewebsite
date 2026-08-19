'use client';

import React from 'react';
import { ClipboardCheck, FileText, FileUp, CreditCard, Users, CheckCircle } from 'lucide-react';
import styles from './AdmissionProcess.module.css';

const steps = [
    {
        step: 'Step 01',
        title: 'Check Eligibility',
        desc: 'Review the eligibility\ncriteria for your\nchosen program.',
        icon: ClipboardCheck,
        iconBg: 'bg-[#EBF7F2] text-[#053B2A]',
    },
    {
        step: 'Step 02',
        title: 'Apply Online',
        desc: 'Fill out the online\napplication form with\nrequired details.',
        icon: FileText,
        iconBg: 'bg-[#F3E8FF] text-purple-700',
    },
    {
        step: 'Step 03',
        title: 'Submit Documents',
        desc: 'Upload the necessary\ndocuments as per the\nguidelines.',
        icon: FileUp,
        iconBg: 'bg-[#FFF3E6] text-[#B86E00]',
    },
    {
        step: 'Step 04',
        title: 'Pay Application Fee',
        desc: 'Pay the application\nfee securely through\nonline mode.',
        icon: CreditCard,
        iconBg: 'bg-[#EBF7F2] text-[#053B2A]',
    },
    {
        step: 'Step 05',
        title: 'Merit / Selection',
        desc: 'Selection will be based\non merit and eligibility\ncriteria.',
        icon: Users,
        iconBg: 'bg-[#F3E8FF] text-purple-700',
    },
    {
        step: 'Step 06',
        title: 'Confirmation',
        desc: 'Receive confirmation\nand admission details\nvia email / SMS.',
        icon: CheckCircle,
        iconBg: 'bg-[#FFF3E6] text-[#B86E00]',
    },
];

export default function AdmissionProcess() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Section Heading with Gold Line */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Admission Process</h2>
                    <div className={styles.accentLine} />
                </div>

                {/* 6 Step Cards Flow */}
                <div className={styles.grid}>
                    {steps.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className={styles.cardWrapper}>
                                <div className={styles.card}>
                                    <div className={`${styles.iconBadge} ${item.iconBg}`}>
                                        <Icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className={styles.stepTag}>{item.step}</p>
                                        <h3 className={styles.stepTitle}>{item.title}</h3>
                                        <p className={styles.stepDesc}>{item.desc}</p>
                                    </div>
                                </div>

                                {idx !== steps.length - 1 && (
                                    <div className={styles.chevronSeparator}>›</div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}