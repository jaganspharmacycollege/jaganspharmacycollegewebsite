'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Apple, FlaskConical, Stethoscope, FileCode, Sprout, Award } from 'lucide-react';
import styles from './CoursesOfferedGrid.module.css';

const courses = [
    {
        icon: Apple,
        iconBg: 'bg-[#EBF7F2] text-[#053B2A]',
        title: 'B. Pharmacy',
        duration: 'Duration: 4 Years',
        description: 'An undergraduate program that builds a strong foundation in pharmaceutical sciences and patient care.',
        href: '/courses/b-pharm',
    },
    {
        icon: FlaskConical,
        iconBg: 'bg-[#F3E8FF] text-purple-800',
        title: 'Pharm.D',
        duration: 'Duration: 6 Years',
        description: 'Doctor of Pharmacy program with clinical exposure and hands-on training.',
        href: '/courses/pharm-d',
    },
    {
        icon: Stethoscope,
        iconBg: 'bg-[#FFF3E6] text-[#B86E00]',
        title: 'M. Pharmacy',
        duration: 'Duration: 2 Years',
        description: 'Postgraduate program with specialization and advanced research opportunities.',
        href: '/courses/m-pharm',
    },
];

export default function CoursesOfferedGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <p className={styles.eyebrow}>Our Programs</p>
                    <h2 className={styles.title}>Courses Offered</h2>
                    <p className={styles.subText}>
                        We offer a range of pharmacy programs at undergraduate, postgraduate and doctoral levels.
                    </p>
                </div>

                {/* 6-Card Grid Layout */}
                <div className={styles.grid}>
                    {courses.map((course, idx) => {
                        const Icon = course.icon;
                        return (
                            <div key={idx} className={styles.card}>
                                <div>
                                    {/* Top Row: Circular Icon & Titles */}
                                    <div className={styles.topRow}>
                                        <div className={`${styles.iconCircle} ${course.iconBg}`}>
                                            <Icon size={26} strokeWidth={1.4} />
                                        </div>
                                        <div>
                                            <h3 className={styles.courseTitle}>{course.title}</h3>
                                            <p className={styles.duration}>{course.duration}</p>
                                        </div>
                                    </div>

                                    {/* Course Description */}
                                    <p className={styles.description}>{course.description}</p>
                                </div>

                                {/* Learn More Link */}
                                <div className={styles.linkWrapper}>
                                    <Link href={course.href} className={styles.learnMoreLink}>
                                        Learn More <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}