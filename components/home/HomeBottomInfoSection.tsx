'use client';

import React from 'react';
import { Award, GraduationCap, Building2, Quote } from 'lucide-react';
import styles from './HomeBottomInfoSection.module.css';

const recruiters = [
    { name: 'Sun Pharma', short: 'SUN' },
    { name: "Dr. Reddy's", short: 'DRL' },
    { name: 'Aurobindo', short: 'APL' },
    { name: 'Omega Health', short: 'OH' },
    { name: 'Cipla', short: 'CIP' },
    { name: 'Hetero Drugs', short: 'HET' },
];

export default function HomeBottomInfoSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* 1. Approvals & Affiliations */}
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Approvals &amp; Affiliations</h3>

                    <div className={styles.approvalList}>
                        <div className={styles.approvalItem}>
                            <div className={styles.approvalBadge}>
                                <Award size={20} />
                            </div>
                            <div>
                                <p className={styles.approvalName}>Affiliated to JNTUA</p>
                                <p className={styles.approvalSub}>Jawaharlal Nehru Technological University</p>
                            </div>
                        </div>

                        <div className={styles.approvalItem}>
                            <div className={styles.approvalBadge}>
                                <GraduationCap size={20} />
                            </div>
                            <div>
                                <p className={styles.approvalName}>AICTE Approved</p>
                                <p className={styles.approvalSub}>All India Council for Technical Education</p>
                            </div>
                        </div>

                        <div className={styles.approvalItem}>
                            <div className={styles.approvalBadge}>
                                <Building2 size={20} />
                            </div>
                            <div>
                                <p className={styles.approvalName}>Govt. Recognized</p>
                                <p className={styles.approvalSub}>Department of Technical Education, AP</p>
                            </div>
                        </div>
                    </div>

                    <p className={styles.approvalNote}>
                        Fully certified and operating under strict curriculum standards set by the university.
                    </p>
                </div>

                {/* 2. Top Recruiters */}
                <div className={styles.card}>
                    <div className={styles.cardHeaderWithBadge}>
                        <h3 className={styles.cardTitle}>Top Recruiters</h3>
                        <span className={styles.pillBadge}>100+ Placement Partners</span>
                    </div>

                    <p className={styles.recruitersDesc}>
                        Our graduates are hired directly by leading multi-national pharmaceutical leaders and clinical CROs.
                    </p>

                    <div className={styles.recruiterGrid}>
                        {recruiters.map((company, idx) => (
                            <div key={idx} className={styles.recruiterPill}>
                                <div className={styles.companyLogoIcon}>{company.short}</div>
                                <span className={styles.recruiterName}>{company.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Student Testimonials */}
                <div className={styles.card}>
                    <div className={styles.cardHeaderWithBadge}>
                        <h3 className={styles.cardTitle}>Student Voices</h3>
                        <Quote size={20} className={styles.quoteDecor} />
                    </div>

                    <p className={styles.quoteText}>
                        &ldquo;Jagan&apos;s College of Pharmacy provided me with hands-on formulation labs, hospital rounds, and placement training that helped me secure my role in a leading healthcare MNC.&rdquo;
                    </p>

                    <div className={styles.studentMeta}>
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                            alt="Priya Sharma"
                            className={styles.avatar}
                        />
                        <div>
                            <p className={styles.studentName}>Priya Sharma</p>
                            <p className={styles.studentRole}>Pharm.D &bull; Alumni (Clinical Analyst)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}