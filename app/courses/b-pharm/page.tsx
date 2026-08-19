import React from 'react';
import styles from './BPharm.module.css';

export default function BPharmPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* 1. Course Details Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Bachelor of Pharmacy</span>
                    <h1 className={styles.title}>Course Details</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Bachelor of Pharmacy (B.Pharm) is a four-year comprehensive undergraduate program designed to provide students with foundational and advanced knowledge in pharmaceutical chemistry, pharmacology, pharmacognosy, and pharmaceutics. Approved by the Pharmacy Council of India (PCI) and affiliated with JNTUA, this program prepares students for leadership roles in clinical practice, formulation research, manufacturing, and hospital healthcare systems.
                    </p>
                </div>
            </section>

            {/* 2. Duration */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Program Timeline</span>
                    <h2 className={styles.title}>Duration</h2>
                    <div className={styles.accentLine} />
                    <div className={styles.card}>
                        <div className={styles.highlightValue}>4 Academic Years</div>
                        <p className={styles.highlightSub}>8 Semesters (Full-Time Regular Degree Program)</p>
                        <p className={`${styles.descText} mt-3`}>
                            Includes regular practical laboratory sessions, industrial visits, hospital training, and a final semester project dissertation.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Eligibility */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Admission Requirements</span>
                    <h2 className={styles.title}>Eligibility</h2>
                    <div className={styles.accentLine} />
                    <div className={styles.card}>
                        <div className={styles.list}>
                            <div className={styles.listItem}>
                                <span className={styles.dot} />
                                <span>Passed 10+2 Intermediate examination with Physics and Chemistry as compulsory subjects along with Mathematics or Biology (MPC / BiPC).</span>
                            </div>
                            <div className={styles.listItem}>
                                <span className={styles.dot} />
                                <span>Minimum 45% aggregate marks (40% for reserved category candidates) in qualifying subjects.</span>
                            </div>
                            <div className={styles.listItem}>
                                <span className={styles.dot} />
                                <span>Qualification in the state entrance examination (AP EAPCET) or management quota criteria as per Andhra Pradesh government norms.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Intake */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Approved Capacity</span>
                    <h2 className={styles.title}>Intake</h2>
                    <div className={styles.accentLine} />
                    <div className={styles.card}>
                        <div className={styles.highlightValue}>100 Seats</div>
                        <p className={styles.highlightSub}>Annual Approved Intake by PCI & JNTUA</p>
                        <p className={`${styles.descText} mt-3`}>
                            Seat allotment is conducted via state counseling (Convenor Quota) and institutional category admissions (Management Quota).
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}