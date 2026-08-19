'use client';

import React from 'react';
import Link from 'next/link';
import { Check, FileText, Calendar, ArrowRight, Send } from 'lucide-react';
import styles from './EligibilityAndDocs.module.css';

export default function EligibilityAndDocs() {
    const documents = [
        '10th & 12th Mark Sheets',
        'Transfer Certificate (TC)',
        'Migration Certificate (if applicable)',
        'Community Certificate (if applicable)',
        'Passport Size Photographs',
        'Aadhaar Card Copy',
        'Other certificates (as applicable)',
    ];

    const dates = [
        { title: 'Applications Start', date: '15 May 2025' },
        { title: 'Last Date to Apply', date: '15 June 2025' },
        { title: 'Merit List Announcement', date: '20 June 2025' },
        { title: 'Counselling & Admission', date: '25 June 2025 Onwards' },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Card 1: Eligibility Criteria */}
                <div className={`${styles.whiteCard} ${styles.colSpan4}`}>
                    <div className="space-y-4 relative z-10">
                        <div>
                            <h3 className={styles.cardTitle}>Eligibility Criteria</h3>
                            <div className={styles.accentLine} />
                        </div>

                        <ul className={styles.criteriaList}>
                            <li className={styles.criteriaItem}>
                                <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                                <span>
                                    <strong className="text-gray-900 font-bold">For B. Pharmacy:</strong> 10+2 with Physics, Chemistry, Mathematics / Biology (PCM / PCB) with minimum 45% marks.
                                </span>
                            </li>
                            <li className={styles.criteriaItem}>
                                <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                                <span>
                                    <strong className="text-gray-900 font-bold">For Pharm.D:</strong> 10+2 with Physics, Chemistry, Biology / Mathematics with minimum 45% marks.
                                </span>
                            </li>
                            <li className={styles.criteriaItem}>
                                <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                                <span>
                                    <strong className="text-gray-900 font-bold">For M. Pharmacy:</strong> B. Pharmacy degree from a PCI approved institution.
                                </span>
                            </li>
                            <li className={styles.criteriaItem}>
                                <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                                <span>
                                    <strong className="text-gray-900 font-bold">For Ph.D:</strong> Postgraduate degree in Pharmacy or relevant field.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="relative z-10">
                        <Link href="/admissions/eligibility" className={styles.viewBtn}>
                            View Detailed Eligibility <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className={styles.watermark}>
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M12 2v4M8 10h8M6 20h12a2 2 0 002-2v-2a6 6 0 00-6-6H10a6 6 0 00-6 6v2a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>

                {/* Card 2: Documents Required */}
                <div className={`${styles.whiteCard} ${styles.colSpan4}`}>
                    <div className="space-y-4 relative z-10">
                        <div>
                            <h3 className={styles.cardTitle}>Documents Required</h3>
                            <div className={styles.accentLine} />
                        </div>

                        <ul className={styles.docList}>
                            {documents.map((doc, idx) => (
                                <li key={idx} className={styles.docItem}>
                                    <div className={styles.docIcon}>
                                        <FileText size={14} />
                                    </div>
                                    <span>{doc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.watermark}>
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                        </svg>
                    </div>
                </div>

                {/* Card 3: Important Dates */}
                <div className={`${styles.greenCard} ${styles.colSpan4}`}>
                    <div>
                        <h3 className={styles.greenTitle}>Important Dates</h3>
                        <div className={styles.accentLine} />
                    </div>

                    <div className={styles.timelineList}>
                        <div className={styles.timelineConnector} />
                        {dates.map((item, idx) => (
                            <div key={idx} className={styles.timelineItem}>
                                <div className={styles.calendarCircle}>
                                    <Calendar size={14} strokeWidth={2} />
                                </div>
                                <div>
                                    <p className={styles.timelineTitle}>{item.title}</p>
                                    <p className={styles.timelineDate}>{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <Link href="/admissions/apply" className={styles.applyBtn}>
                            Apply Now <Send size={14} className="rotate-45" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}