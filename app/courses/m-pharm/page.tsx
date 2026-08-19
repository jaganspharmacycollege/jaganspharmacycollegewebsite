import React from 'react';
import styles from './MPharm.module.css';

export default function MPharmPage() {
    const specializations = [
        {
            title: 'Pharmaceutics',
            desc: 'Focuses on novel drug delivery systems (NDDS), nanomedicine, industrial formulation optimization, and bioavailability enhancement.',
        },
        {
            title: 'Pharmaceutical Analysis',
            desc: 'Advanced training in spectroscopic methods, HPLC, mass spectrometry, analytical method development, and regulatory validation.',
        },
        {
            title: 'Pharmacology',
            desc: 'In-depth molecular pharmacology, preclinical animal screening models, toxicological evaluations, and neuropharmacology.',
        },
    ];

    const departments = [
        {
            title: 'Department of Pharmaceutics',
            desc: 'Equipped with rotary tablet presses, dissolution test apparatus, freeze dryers, and particle size analyzers.',
        },
        {
            title: 'Department of Pharmaceutical Analysis',
            desc: 'Features HPLC systems, UV-Visible spectrophotometers, FTIR spectrometers, and stability testing chambers.',
        },
        {
            title: 'Department of Pharmacology',
            desc: 'Includes an institutional animal house conforming to CPCSEA guidelines, computerized organ bath systems, and behavioral testing setups.',
        },
    ];

    const semesters = [
        {
            sem: 'Semester I',
            topics: [
                'Modern Pharmaceutical Analytical Techniques',
                'Advanced Specialized Branch Subjects',
                'Research Methodology & Biostatistics',
                'Specialized Practical Lab I',
            ],
        },
        {
            sem: 'Semester II',
            topics: [
                'Advanced Formulation / Screening Methodologies',
                'Regulatory Affairs & Quality Assurance',
                'Computer-Aided Drug Design / Industrial Protocols',
                'Specialized Practical Lab II',
            ],
        },
        {
            sem: 'Semester III',
            topics: [
                'Research Methodology & Journal Club',
                'Comprehensive Viva Voce',
                'Thesis Proposal & Project Work Commencement',
            ],
        },
        {
            sem: 'Semester IV',
            topics: [
                'Research Project Work (Full Time)',
                'Colloquium Presentation & Scopus Publications',
                'Final Thesis Submission and Defense',
            ],
        },
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* 1. Specialization */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Master of Pharmacy</span>
                    <h1 className={styles.title}>Specialization</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our Master of Pharmacy (M.Pharm) offers specialized 2-year postgraduate degrees tailored for advanced R&D, analytical laboratories, and leadership roles across the pharmaceutical sector.
                    </p>

                    <div className={`${styles.grid} mt-6`}>
                        {specializations.map((spec, idx) => (
                            <div key={idx} className={styles.card}>
                                <h3 className={styles.cardTitle}>{spec.title}</h3>
                                <p className={styles.cardDesc}>{spec.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Eligibility */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Admission Requirements</span>
                    <h2 className={styles.title}>Eligibility</h2>
                    <div className={styles.accentLine} />
                    <div className={styles.card}>
                        <div className={styles.list}>
                            <div className={styles.listItem}>
                                <span className={styles.dot} />
                                <span>Passed B.Pharm degree examination with a minimum of 55% aggregate marks (50% for reserved category) from any PCI and AICTE-recognized institution.</span>
                            </div>
                            <div className={styles.listItem}>
                                <span className={styles.dot} />
                                <span>Valid score in the national Graduate Pharmacy Aptitude Test (GPAT) or state-level AP PGECET entrance examination.</span>
                            </div>
                            <div className={styles.listItem}>
                                <span className={styles.dot} />
                                <span>Registered Pharmacist certification with any State Pharmacy Council is mandatory.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Departments */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Academic Wings</span>
                    <h2 className={styles.title}>Departments</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Each postgraduate department is backed by doctoral research guides, high-tech instrumentation labs, and continuous research funding.
                    </p>

                    <div className={`${styles.grid} mt-6`}>
                        {departments.map((dept, idx) => (
                            <div key={idx} className={styles.card}>
                                <h3 className={styles.cardTitle}>{dept.title}</h3>
                                <p className={styles.cardDesc}>{dept.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Syllabus */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Curriculum Structure</span>
                    <h2 className={styles.title}>Syllabus</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Structured strictly in accordance with PCI Uniform Regulations for Postgraduate Pharmacy Education:
                    </p>

                    <div className={styles.semesterGrid}>
                        {semesters.map((s, idx) => (
                            <div key={idx} className={styles.semesterCard}>
                                <h4 className={styles.semHeader}>{s.sem}</h4>
                                <div className={styles.list}>
                                    {s.topics.map((topic, i) => (
                                        <div key={i} className={styles.listItem}>
                                            <span className={styles.dot} />
                                            <span>{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}