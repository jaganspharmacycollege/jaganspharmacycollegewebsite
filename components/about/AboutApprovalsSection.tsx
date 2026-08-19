'use client';

import React from 'react';
import { ShieldCheck, Building2, Award } from 'lucide-react';
import styles from './AboutApprovalsSection.module.css';

const approvals = [
    {
        icon: ShieldCheck,
        title: 'Pharmacy Council of India (PCI)',
        authority: 'Apex Regulatory Body',
        desc: 'Approved by the Pharmacy Council of India, New Delhi, ensuring all pharmaceutical curricula and labs adhere strictly to national statutory standards.',
    },
    {
        icon: Building2,
        title: 'JNTU Anantapur (JNTUA)',
        authority: 'Affiliating University',
        desc: 'Affiliated to Jawaharlal Nehru Technological University Anantapur for all undergraduate, postgraduate, and doctoral degree programs.',
    },
    {
        icon: Award,
        title: 'Govt. of Andhra Pradesh',
        authority: 'State Recognition',
        desc: 'Recognized by the Department of Technical Education and Government of Andhra Pradesh for excellence in technical and higher education.',
    },
];

export default function AboutApprovalsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.eyebrow}>Statutory Recognition</p>
                    <h2 className={styles.title}>Approvals & Affiliations</h2>
                    <div className={styles.accentLine} />
                </div>

                <div className={styles.grid}>
                    {approvals.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className={styles.approvalCard}>
                                <div className={styles.cardIcon}>
                                    <Icon size={28} />
                                </div>
                                <div>
                                    <span className={styles.cardSubtitle}>{item.authority}</span>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                </div>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}