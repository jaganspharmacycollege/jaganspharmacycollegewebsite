'use client';

import React, { useState } from 'react';
import {
    GraduationCap,
    Building2,
    BadgePercent,
    Calendar,
    CheckCircle2,
    Briefcase,
    ChevronDown,
    ChevronUp,
} from 'lucide-react';
import styles from './PlacedStudentsSection.module.css';

interface PlacedStudent {
    name: string;
    course: string;
    batchYear: string;
    role: string;
    company: string;
    packageLPA: string;
    location: string;
    quote: string;
    imageUrl: string;
}

const allPlacedStudents: PlacedStudent[] = [
    {
        name: 'P. Sai Praneeth',
        course: 'Pharm.D',
        batchYear: 'Passed Out: 2025',
        role: 'Clinical Pharmacotherapy Associate',
        company: 'Novartis Global Health',
        packageLPA: '₹ 8.5 LPA',
        location: 'Hyderabad, India',
        quote:
            'The hands-on hospital ward rounds and clinical case study rigor at Jagan’s College of Pharmacy gave me an unbeatable edge during corporate clinical interviews.',
        imageUrl:
            'https://images.unsplash.com/photo-1618052163124-7ef86a4eb8d7?q=80&w=900&auto=format&fit=crop',
    },
    {
        name: 'K. Divya Sree',
        course: 'B.Pharm',
        batchYear: 'Passed Out: 2025',
        role: 'Drug Safety & Pharmacovigilance Officer',
        company: "Dr. Reddy's Laboratories",
        packageLPA: '₹ 6.2 LPA',
        location: 'Vizag, India',
        quote:
            'The comprehensive mock technical interviews arranged by the placement cell transformed my analytical confidence and helped me secure multiple offers.',
        imageUrl:
            'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=900&auto=format&fit=crop',
    },
    {
        name: 'M. Harish Kumar',
        course: 'M.Pharm (Pharmaceutics)',
        batchYear: 'Passed Out: 2024',
        role: 'Formulation R&D Executive',
        company: 'Sun Pharma Advanced Research',
        packageLPA: '₹ 7.8 LPA',
        location: 'Vadodara, India',
        quote:
            'Working in the college’s modern formulation and instrumentation labs gave me real-time expertise with HPLC, spectroscopy, and dosage formulation pilot units.',
        imageUrl:
            'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop',
    },
    {
        name: 'T. Bhavana Reddy',
        course: 'Pharm.D',
        batchYear: 'Passed Out: 2024',
        role: 'Medical Information Specialist',
        company: 'Pfizer India Healthcare',
        packageLPA: '₹ 8.2 LPA',
        location: 'Chennai, India',
        quote:
            'The continuous clinical exposure and active mentorship from the pharmacy practice faculty prepared me seamlessly for top multinational healthcare roles.',
        imageUrl:
            'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=900&auto=format&fit=crop',
    },
    {
        name: 'V. Rakesh Varma',
        course: 'B.Pharm',
        batchYear: 'Passed Out: 2024',
        role: 'Quality Control Analytical Chemist',
        company: 'Aurobindo Pharma',
        packageLPA: '₹ 5.8 LPA',
        location: 'Hyderabad, India',
        quote:
            'Campus placement training focused heavily on cGMP regulations, wet-lab protocols, and pharmacopoeia compliance which made technical rounds smooth.',
        imageUrl:
            'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=900&auto=format&fit=crop',
    },
    {
        name: 'G. Sushma',
        course: 'M.Pharm (Pharmacology)',
        batchYear: 'Passed Out: 2023',
        role: 'Regulatory Affairs Associate',
        company: 'Hetero Drugs Limited',
        packageLPA: '₹ 6.5 LPA',
        location: 'Hyderabad, India',
        quote:
            'The dedicated faculty guidance during my master’s thesis submission and dossier documentation opened direct pathways into corporate drug regulatory affairs.',
        imageUrl:
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop',
    },
];

export default function PlacedStudentsSection() {
    const [showAll, setShowAll] = useState(false);

    const displayedStudents = showAll ? allPlacedStudents : allPlacedStudents.slice(0, 3);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header Block */}
                <div className={styles.headerBlock}>
                    <span className={styles.eyebrow}>Campus Success Stories</span>
                    <h2 className={styles.title}>Recently Placed Students</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our graduates lead from the front, securing key positions across global clinical
                        pharmacology units, R&D centers, and pharmaceutical multinationals.
                    </p>
                </div>

                {/* Alternating Zigzag Rows */}
                <div className={styles.rowsContainer}>
                    {displayedStudents.map((student, index) => {
                        const isReversed = index % 2 === 1;

                        return (
                            <div
                                key={student.name}
                                className={`${styles.studentRow} ${isReversed ? styles.studentRowReverse : ''
                                    }`}
                            >
                                {/* Information Column */}
                                <div className={styles.infoWrapper}>
                                    <div className={styles.badgeRow}>
                                        <span className={styles.courseBadge}>
                                            <GraduationCap size={13} /> {student.course}
                                        </span>
                                        <span className={styles.yearBadge}>
                                            <Calendar size={13} /> {student.batchYear}
                                        </span>
                                    </div>

                                    <h3 className={styles.studentName}>{student.name}</h3>
                                    <div className={styles.roleText}>
                                        <Briefcase size={16} />
                                        <span>{student.role}</span>
                                    </div>

                                    {/* 4-Item Parameters Grid */}
                                    <div className={styles.detailGrid}>
                                        <div className={styles.detailItem}>
                                            <span className={styles.detailLabel}>
                                                <Building2 size={12} /> Recruiting Company
                                            </span>
                                            <span className={styles.detailValue}>{student.company}</span>
                                        </div>

                                        <div className={styles.detailItem}>
                                            <span className={styles.detailLabel}>
                                                <BadgePercent size={12} /> Offered Package
                                            </span>
                                            <span className={`${styles.detailValue} ${styles.packageHighlight}`}>
                                                {student.packageLPA}
                                            </span>
                                        </div>

                                        <div className={styles.detailItem}>
                                            <span className={styles.detailLabel}>Work Location</span>
                                            <span className={styles.detailValue}>{student.location}</span>
                                        </div>

                                        <div className={styles.detailItem}>
                                            <span className={styles.detailLabel}>Placement Type</span>
                                            <span className={styles.detailValue}>Campus Recruitment</span>
                                        </div>
                                    </div>

                                    {/* Testimonial Quote */}
                                    <blockquote className={styles.quoteBlock}>
                                        &ldquo;{student.quote}&rdquo;
                                    </blockquote>
                                </div>

                                {/* Individual Student Portrait */}
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={student.imageUrl}
                                        alt={`${student.name} - ${student.role}`}
                                        loading="lazy"
                                    />
                                    <div className={styles.verifiedPill}>
                                        <CheckCircle2 size={13} /> Verified Offer
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View All Toggle Button */}
                <div className={styles.viewAllContainer}>
                    <button
                        onClick={() => setShowAll((prev) => !prev)}
                        className={styles.viewAllBtn}
                    >
                        <span>{showAll ? 'Show Fewer Students' : 'View All Placed Students'}</span>
                        {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                </div>
            </div>
        </section>
    );
}