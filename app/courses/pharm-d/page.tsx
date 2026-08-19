import React from 'react';
import styles from './PharmD.module.css';

export default function PharmDPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* 1. Course Details Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Doctor of Pharmacy</span>
                    <h1 className={styles.title}>Course Details</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Doctor of Pharmacy (Pharm.D) is a prestigious professional doctoral program centered around clinical pharmacy, patient counseling, pharmacotherapy, and adverse drug reaction monitoring. Students acquire extensive hospital ward experience, working collaboratively alongside medical practitioners in diagnosis and drug safety management.
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
                        <div className={styles.highlightValue}>6 Academic Years</div>
                        <p className={styles.highlightSub}>5 Years Study + 1 Year Mandatory Hospital Internship</p>
                        <p className={`${styles.descText} mt-3`}>
                            The 6th year consists of intensive full-time clinical rotations across multi-specialty hospital departments including internal medicine, pediatrics, oncology, and cardiology.
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
                                <span>Passed 10+2 Intermediate examination with Physics and Chemistry as compulsory subjects with Mathematics or Biology (MPC / BiPC).</span>
                            </div>
                            <div className={styles.listItem}>
                                <span className={styles.dot} />
                                <span>Or candidates holding a recognized Diploma in Pharmacy (D.Pharm) qualification from a PCI-approved institution.</span>
                            </div>
                            <div className={styles.listItem}>
                                <span className={styles.dot} />
                                <span>Valid rank in the AP EAPCET entrance examination or qualifying merit in management category admissions.</span>
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
                        <div className={styles.highlightValue}>30 Seats</div>
                        <p className={styles.highlightSub}>Annual Approved Intake by Pharmacy Council of India</p>
                        <p className={`${styles.descText} mt-3`}>
                            Small cohort size ensures focused clinical bedside mentoring, doctor-student clinical discussions, and specialized research guidance.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}