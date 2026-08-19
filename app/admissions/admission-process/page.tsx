import React from 'react';
import styles from '../AdmissionsLayout.module.css';

export default function AdmissionProcessPage() {
    const steps = [
        {
            num: '1',
            title: 'Entrance Examination & Eligibility Verification',
            desc: 'Candidates must appear for the relevant entrance examinations—AP EAPCET for B.Pharm and Pharm.D, or GPAT / AP PGECET for M.Pharm admissions.',
        },
        {
            num: '2',
            title: 'State Counseling / Online Application',
            desc: 'Qualifying students can participate in APSCHE state web counseling under Convenor Quota, or apply directly on our campus portal for Category-B (Management) Quota.',
        },
        {
            num: '3',
            title: 'Document Verification & Seat Allotment',
            desc: 'Shortlisted candidates submit their academic credentials, rank cards, and transfer certificates for administrative verification and seat confirmation.',
        },
        {
            num: '4',
            title: 'Tuition Fee Payment & Enrollment',
            desc: 'Upon official seat allotment, candidates pay the prescribed institutional fee to complete university enrollment and receive their student kit.',
        },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Admissions 2026-27</span>
                    <h1 className={styles.title}>Admission Process</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Follow the systematic step-by-step procedure to secure your admission into our PCI-approved pharmaceutical programs at Jagan&apos;s College of Pharmacy.
                    </p>
                </div>

                <div className={styles.list}>
                    {steps.map((step) => (
                        <div key={step.num} className={styles.card}>
                            <div className="flex items-start gap-4">
                                <div className={styles.stepNumber}>{step.num}</div>
                                <div>
                                    <h3 className="text-base font-bold text-[#053B2A]">{step.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}