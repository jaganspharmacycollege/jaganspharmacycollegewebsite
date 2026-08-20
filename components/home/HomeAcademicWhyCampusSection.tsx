'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Info } from 'lucide-react';
import styles from './HomeAcademicWhyCampusSection.module.css';

const cells = [
    '1. Examination Cell',
    '2. Training and Placement Cell',
    '3. Extra-curricular Activities Cell',
    '4. R&D Cell',
    '5. Internal Quality Assurance Cell',
];

const whyReasons = [
    'Innovative Teaching & Learning',
    'Industry Exposure & Career Growth',
    'Global & Professional Engagement',
    'Skills Development & Hands-on Training',
    'Beyond Academics & Student Welfare',
];

export default function HomeAcademicWhyCampusSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* 1. Academic Cells */}
                <div className={styles.academicCard}>
                    <h3 className={styles.academicTitle}>Academic Cells</h3>
                    <div className={styles.cellsList}>
                        {cells.map((cell, idx) => (
                            <div key={idx} className={styles.cellButton}>
                                <Info size={15} className={styles.cellIcon} />
                                <span>{cell}</span>
                            </div>
                        ))}
                    </div>
                    <Link href="/academics" className={styles.btnViewAll}>
                        <span>View All Cells</span>
                        <ArrowRight size={13} />
                    </Link>
                </div>

                {/* 2. Why Choose Us */}
                <div className={styles.whyCard}>
                    <div>
                        <h3 className={styles.whyTitle}>Why Choose Us</h3>
                        <div className={styles.whyList}>
                            {whyReasons.map((reason, idx) => (
                                <div key={idx} className={styles.whyItem}>
                                    <Check size={16} strokeWidth={2.5} className={styles.whyCheckIcon} />
                                    <span>{reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.whyImage}>
                        <img
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
                            alt="Pharmacy student in laboratory"
                            className={styles.whyImgTag}
                        />
                    </div>
                </div>

                {/* 3. Campus Life Card */}
                <div className={styles.campusCard}>
                    <img
                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80"
                        alt="Campus Life at Jagan's"
                        className={styles.campusImg}
                    />
                    <div className={styles.campusOverlay} />
                    <div className={styles.campusContent}>
                        <h3 className={styles.campusTitle}>Campus Life</h3>
                        <p className={styles.campusSub}>
                            Beyond classrooms, a world of opportunities and growth.
                        </p>
                        <Link href="/campus-life" className={styles.btnExplore}>
                            <span>Explore Campus Life</span>
                            <ArrowRight size={13} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}