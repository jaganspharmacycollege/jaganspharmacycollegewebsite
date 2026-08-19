import React from 'react';
import styles from '../AdmissionsLayout.module.css';

export default function FAQsPage() {
    const faqs = [
        {
            q: 'Is Jagan’s College of Pharmacy approved by the Pharmacy Council of India?',
            a: 'Yes, all our pharmacy programs (B.Pharm, Pharm.D, and M.Pharm) are strictly approved by the Pharmacy Council of India (PCI), New Delhi and affiliated to JNTU Anantapur.',
        },
        {
            q: 'What entrance examinations are accepted for admission?',
            a: 'For B.Pharm and Pharm.D, AP EAPCET scores are accepted. For M.Pharm, GPAT and AP PGECET scores are considered for both Convenor and Management quota allocations.',
        },
        {
            q: 'Can BiPC (Biology) students apply for B.Pharm and Pharm.D?',
            a: 'Yes, both Mathematics (MPC) and Biology (BiPC) students from 10+2 Intermediate backgrounds are fully eligible for B.Pharm and Pharm.D admissions.',
        },
        {
            q: 'Are hostel and transportation facilities available?',
            a: 'Yes, we provide separate, fully secured hostel accommodation for boys and girls along with daily college bus transportation routes across Nellore and surrounding regions.',
        },
        {
            q: 'How can I apply under the Management Quota?',
            a: 'Candidates can fill out the online Application Form on our website or visit the college admission office in person with their academic certificates.',
        },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Frequently Asked Questions</span>
                    <h1 className={styles.title}>FAQs</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Find quick answers to common queries regarding admissions, courses, entrance examinations, and facilities.
                    </p>
                </div>

                <div className={styles.list}>
                    {faqs.map((faq, idx) => (
                        <div key={idx} className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>{faq.q}</h3>
                            <p className={styles.faqAnswer}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}