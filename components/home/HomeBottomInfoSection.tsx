'use client';

import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import styles from './HomeBottomInfoSection.module.css';

export default function HomeBottomInfoSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* 1. Approvals & Affiliations */}
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Approvals & Affiliations</h3>

                    <div className={styles.approvalItem}>
                        <div className={styles.approvalBadge}>
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <p className={styles.approvalName}>Approved by PCI</p>
                            <p className={styles.approvalSub}>Pharmacy Council of India</p>
                        </div>
                    </div>

                    <div className={styles.approvalItem}>
                        <div className={styles.approvalBadge}>
                            <Award size={20} />
                        </div>
                        <div>
                            <p className={styles.approvalName}>Affiliated to JNTUA</p>
                            <p className={styles.approvalSub}>Jawaharlal Nehru Tech Univ</p>
                        </div>
                    </div>

                    <p className={styles.approvalNote}>
                        We follow the guidelines and regulations prescribed by PCI and JNTUA.
                    </p>
                </div>

                {/* 2. Placement Highlights */}
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Top Recruiters</h3>

                    <div className={styles.recruiterLogos}>
                        <span className={styles.recruiterName}>SUN PHARMA</span>
                        <span className={styles.recruiterName}>Omega Healthcare</span>
                        <span className={styles.recruiterName}>Dr.Reddy&apos;s</span>
                        <span className={styles.recruiterName}>AUROBINDO</span>
                    </div>
                </div>

                {/* 3. Student Testimonials */}
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Student Testimonials</h3>
                    <div className={styles.quoteIcon}>“</div>
                    <p className={styles.quoteText}>
                        Jagan&apos;s College of Pharmacy has been instrumental in shaping my career. The faculty, infrastructure, and exposure here are unmatched.
                    </p>

                    <div className={styles.studentMeta}>
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                            alt="Priya Sharma"
                            className={styles.avatar}
                        />
                        <div>
                            <p className={styles.studentName}>Priya Sharma</p>
                            <p className={styles.studentRole}>B. Pharm Final Year</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}