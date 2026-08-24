'use client';

import React, { useState } from 'react';
import {
    Sparkles,
    Building2,
    GraduationCap,
    Users2,
    BookOpen,
    FlaskConical,
    Mail,
    Award,
} from 'lucide-react';
import styles from './Departments.module.css';

const departmentsData = [
    {
        id: 'pharmaceutics',
        title: 'Department of Pharmaceutics',
        tagline: 'Formulation Design, Novel Drug Delivery & Industrial Technology',
        desc: 'Dedicated to the design, manufacturing, quality control, and biopharmaceutical evaluation of dosage forms ranging from solid tablets to targeted nanomedicines.',
        labs: ['Formulation Tech Lab', 'Pilot Plant & Scale-up', 'Physical Pharmacy Lab'],
        faculty: [
            {
                name: 'Dr. S. K. Venkatesh',
                role: 'Professor & HOD',
                qualification: 'Ph.D., M.Pharm (Pharmaceutics)',
                experience: '18+ Years Exp.',
                img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Dr. Meena Ramesh',
                role: 'Associate Professor',
                qualification: 'Ph.D., M.Pharm (NDDS)',
                experience: '12+ Years Exp.',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
            },
        ],
    },
    {
        id: 'pharmacology',
        title: 'Department of Pharmacology',
        tagline: 'Preclinical Screenings, Pharmacokinetics & Toxicology',
        desc: 'Equipped for preclinical drug screenings, animal model studies under CPCSEA compliance, molecular toxicology, and clinical pharmacotherapeutic evaluations.',
        labs: ['Preclinical Animal Lab (CPCSEA Approved)', 'Clinical Pharmacokinetics Lab'],
        faculty: [
            {
                name: 'Dr. K. Ravindra Reddy',
                role: 'Professor & HOD',
                qualification: 'Ph.D., M.Pharm (Pharmacology)',
                experience: '20+ Years Exp.',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Dr. Ananya Roy',
                role: 'Assistant Professor',
                qualification: 'Pharm.D, Post-Doc',
                experience: '8+ Years Exp.',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
            },
        ],
    },
    {
        id: 'pharm-analysis',
        title: 'Department of Pharmaceutical Analysis',
        tagline: 'Spectroscopy, Chromatography & Quality Assurance',
        desc: 'Features advanced analytical instruments including HPLC, UV-Vis Spectrophotometers, FTIR, and GC for drug purity validation and standardizations.',
        labs: ['Central Instrumentation Facility (CIF)', 'Spectral Analysis Lab'],
        faculty: [
            {
                name: 'Dr. G. Lakshmi Prasanna',
                role: 'Professor & HOD',
                qualification: 'Ph.D., M.Pharm (Analysis)',
                experience: '16+ Years Exp.',
                img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Prof. B. Sudhakar',
                role: 'Associate Professor',
                qualification: 'M.Pharm, (Ph.D.)',
                experience: '10+ Years Exp.',
                img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
            },
        ],
    },
    {
        id: 'pharm-chemistry',
        title: 'Department of Pharmaceutical Chemistry',
        tagline: 'Drug Synthesis, Molecular Modeling & Medicinal Chemistry',
        desc: 'Focuses on lead molecule identification, synthetic organic chemistry, computational drug design (CADD), and structural activity relationships (SAR).',
        labs: ['Organic Synthesis Lab', 'Medicinal Chemistry Lab', 'Computational Lab'],
        faculty: [
            {
                name: 'Dr. P. Madhusudhan Rao',
                role: 'Professor & HOD',
                qualification: 'Ph.D., M.Sc., M.Pharm',
                experience: '19+ Years Exp.',
                img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
            },
        ],
    },
    {
        id: 'pharmacy-practice',
        title: 'Department of Pharmacy Practice',
        tagline: 'Clinical Pharmacy, Ward Rounds & Hospital Pharmacotherapy',
        desc: 'Operates in direct collaboration with tertiary teaching hospitals, offering experiential learning in patient counseling, ADR monitoring, and pharmacovigilance.',
        labs: ['Drug Information Center (DIC)', 'Hospital Clinical Ward'],
        faculty: [
            {
                name: 'Dr. Sneha Chandran',
                role: 'Associate Professor & Clinical Lead',
                qualification: 'Pharm.D, BCPS',
                experience: '9+ Years Exp.',
                img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
            },
        ],
    },
];

export default function DepartmentsPage() {
    const [activeDept, setActiveDept] = useState(0);

    return (
        <div className={styles.pageWrapper}>
            {/* Background Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Header Block */}
                <div className={styles.headerBlock}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Academic Divisions &amp; Mentors</span>
                    </div>
                    <h1 className={styles.title}>Departments &amp; Faculty</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our accomplished faculty of doctorates, research guides, and clinical specialists lead five specialized pharmaceutical academic divisions.
                    </p>
                </div>

                {/* 2-Column Split: Dept Nav on Left, Detailed View on Right */}
                <div className={styles.mainGrid}>
                    {/* Department Navigation List */}
                    <div className={styles.deptNavList}>
                        {departmentsData.map((dept, idx) => (
                            <button
                                key={dept.id}
                                onClick={() => setActiveDept(idx)}
                                className={`${styles.deptNavBtn} ${activeDept === idx ? styles.activeDeptNavBtn : ''
                                    }`}
                            >
                                <div className={styles.deptNavIcon}>
                                    <Building2 size={18} />
                                </div>
                                <div className={styles.deptNavText}>
                                    <h4>{dept.title}</h4>
                                    <p>{dept.tagline}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Department Detail Card */}
                    <div className={styles.detailCard}>
                        <div className={styles.detailHeader}>
                            <span className={styles.deptBadge}>Academic Specialization</span>
                            <h2 className={styles.detailTitle}>
                                {departmentsData[activeDept].title}
                            </h2>
                            <p className={styles.detailDesc}>
                                {departmentsData[activeDept].desc}
                            </p>
                        </div>

                        {/* Labs & Infrastructure */}
                        <div className={styles.labsSection}>
                            <h4 className={styles.sectionHeading}>
                                <FlaskConical size={18} className={styles.sectionIcon} />
                                <span>Associated Laboratories &amp; Research Centers</span>
                            </h4>
                            <div className={styles.labsList}>
                                {departmentsData[activeDept].labs.map((lab, labIdx) => (
                                    <span key={labIdx} className={styles.labPill}>
                                        {lab}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Department Faculty Members */}
                        <div className={styles.facultySection}>
                            <h4 className={styles.sectionHeading}>
                                <Users2 size={18} className={styles.sectionIcon} />
                                <span>Faculty Members &amp; Research Leads</span>
                            </h4>
                            <div className={styles.facultyGrid}>
                                {departmentsData[activeDept].faculty.map((member, fIdx) => (
                                    <div key={fIdx} className={styles.facultyCard}>
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className={styles.facultyAvatar}
                                        />
                                        <div className={styles.facultyInfo}>
                                            <h4 className={styles.facultyName}>{member.name}</h4>
                                            <p className={styles.facultyRole}>{member.role}</p>
                                            <p className={styles.facultyQual}>{member.qualification}</p>
                                            <span className={styles.experienceBadge}>
                                                <Award size={12} /> {member.experience}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}