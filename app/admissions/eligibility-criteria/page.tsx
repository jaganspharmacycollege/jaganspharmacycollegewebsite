import React from 'react';
import styles from '../AdmissionsLayout.module.css';

export default function EligibilityCriteriaPage() {
    const criteria = [
        {
            course: 'B.Pharm (4 Years)',
            reqs: [
                'Passed 10+2 Intermediate examination with Physics & Chemistry as compulsory subjects with Mathematics or Biology (MPC/BiPC).',
                'Minimum 45% aggregate marks (40% for reserved category).',
                'Valid score/rank in AP EAPCET.',
            ],
        },
        {
            course: 'Pharm.D (6 Years)',
            reqs: [
                'Passed 10+2 Intermediate examination with Physics, Chemistry, and Mathematics/Biology.',
                'Or completed D.Pharm from a PCI-approved institution.',
                'Qualified in AP EAPCET or recognized equivalent examination.',
            ],
        },
        {
            course: 'M.Pharm (2 Years)',
            reqs: [
                'Passed B.Pharm degree from a PCI/AICTE recognized institution with minimum 55% marks (50% for reserved category).',
                'Qualified GPAT or AP PGECET score.',
                'Must hold Registered Pharmacist certification with State Pharmacy Council.',
            ],
        },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Entry Requirements</span>
                    <h1 className={styles.title}>Eligibility Criteria</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Academic and statutory prerequisite standards required for admission into our undergraduate, postgraduate, and doctoral degree programs.
                    </p>
                </div>

                <div className={styles.grid}>
                    {criteria.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            <h3 className="text-lg font-bold text-[#053B2A] border-b pb-2 mb-3 border-emerald-100">
                                {item.course}
                            </h3>
                            <div className={styles.list}>
                                {item.reqs.map((r, i) => (
                                    <div key={i} className={styles.listItem}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#053B2A] mt-2 flex-shrink-0" />
                                        <span>{r}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}