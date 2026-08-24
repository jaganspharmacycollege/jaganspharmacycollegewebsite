'use client';

import React from 'react';
import {
    HelpCircle,
    Award,
    Compass,
    GraduationCap,
    Bus,
    FileText,
} from 'lucide-react';
import styles from './FAQsPage.module.css';

const faqs = [
    {
        q: "Is Jagan's College of Pharmacy approved and recognized?",
        a: 'Yes, all our pharmaceutical degree programs (B.Pharm, Pharm.D, and M.Pharm) are approved by the All India Council for Technical Education (AICTE), New Delhi and permanently affiliated to Jawaharlal Nehru Technological University Anantapur (JNTUA).',
        icon: Award,
        theme: styles.themeEmerald,
    },
    {
        q: 'What entrance examinations are accepted for admission?',
        a: 'For B. Pharm and Pharm.D, AP EAPCET ranks are accepted. For M. Pharm, GPAT and AP PGECET scores are considered for both Convenor (Category-A) and Management (Category-B) quota allocations.',
        icon: Compass,
        theme: styles.themeAmber,
    },
    {
        q: 'Can BiPC (Biology) students apply for B. Pharm and Pharm.D?',
        a: 'Yes, both Mathematics (MPC) and Biology (BiPC) students from 10+2 Intermediate backgrounds are fully eligible for B. Pharm and Pharm.D admissions.',
        icon: GraduationCap,
        theme: styles.themePurple,
    },
    {
        q: 'Are hostel and transportation facilities available?',
        a: 'Yes, we provide separate, fully secured on-campus hostel accommodation for boys and girls along with daily college bus transportation routes across Nellore and surrounding regions.',
        icon: Bus,
        theme: styles.themeTeal,
    },
    {
        q: 'How can I apply under the Management Quota?',
        a: 'Candidates can fill out the online Application Form on our website or visit the college admission office in person with their academic certificates and qualifying marks memos.',
        icon: FileText,
        theme: styles.themePeach,
    },
];

export default function FAQsPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.eyebrowTag}>
                        <HelpCircle size={15} className={styles.eyebrowIcon} />
                        <span>Frequently Asked Questions</span>
                    </div>
                    <h1 className={styles.title}>Admissions FAQs</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Find quick answers to common queries regarding admissions, courses, entrance examinations, and campus facilities.
                    </p>
                </div>

                {/* Separate FAQ Cards List */}
                <div className={styles.list}>
                    {faqs.map((faq, idx) => {
                        const Icon = faq.icon;
                        return (
                            <div key={idx} className={styles.faqItem}>
                                <div className={styles.faqCardInner}>
                                    <div className={`${styles.iconSquircle} ${faq.theme}`}>
                                        <Icon size={22} strokeWidth={2.2} />
                                    </div>

                                    <div className={styles.faqContent}>
                                        <h3 className={styles.faqQuestion}>{faq.q}</h3>
                                        <p className={styles.faqAnswer}>{faq.a}</p>
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