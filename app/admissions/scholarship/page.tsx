import React from 'react';
import styles from '../AdmissionsLayout.module.css';

export default function ScholarshipPage() {
    const schemes = [
        {
            title: 'State Government Fee Reimbursement (JVD Scheme)',
            desc: 'Full tuition fee reimbursement and post-matric financial assistance provided by the Government of Andhra Pradesh for eligible SC, ST, BC, EBC, Minority, and Kapu students.',
        },
        {
            title: 'GPAT National Fellowship (For M.Pharm)',
            desc: 'Monthly stipend of ₹12,400 awarded by AICTE/Ministry of Education to GPAT-qualified candidates admitted into regular postgraduate programs.',
        },
        {
            title: 'Merit-Cum-Means Institutional Scholarships',
            desc: 'Special tuition fee concessions provided by the Jagan Educational Trust for top academic rank holders, sports achievers, and economically underprivileged students.',
        },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Financial Assistance</span>
                    <h1 className={styles.title}>Scholarship</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        We facilitate multiple government welfare programs and trust-backed institutional scholarships to ensure that financial constraints never hinder quality education.
                    </p>
                </div>

                <div className={styles.grid}>
                    {schemes.map((scheme, idx) => (
                        <div key={idx} className={styles.card}>
                            <h3 className="text-lg font-bold text-[#053B2A]">{scheme.title}</h3>
                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{scheme.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}