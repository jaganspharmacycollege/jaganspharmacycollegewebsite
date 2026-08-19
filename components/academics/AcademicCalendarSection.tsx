'use client';

import React from 'react';
import styles from './AcademicCalendarSection.module.css';

const schedule = [
    { event: 'Commencement of Classwork (Odd Semester)', bpharm: 'August 2026', pharmd: 'August 2026', mpharm: 'September 2026' },
    { event: 'I Mid-Term Internal Examinations', bpharm: 'October 2026', pharmd: 'November 2026', mpharm: 'November 2026' },
    { event: 'II Mid-Term Internal Examinations', bpharm: 'December 2026', pharmd: 'January 2027', mpharm: 'January 2027' },
    { event: 'Practical Laboratory Board Examinations', bpharm: 'January 2027', pharmd: 'February 2027', mpharm: 'February 2027' },
    { event: 'JNTUA University Theory Examinations', bpharm: 'February 2027', pharmd: 'March 2027', mpharm: 'March 2027' },
    { event: 'Commencement of Even Semester Classwork', bpharm: 'March 2027', pharmd: 'April 2027', mpharm: 'April 2027' },
];

export default function AcademicCalendarSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>University Schedule</span>
                    <h2 className={styles.title}>Academic Calendar</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Tentative schedule aligned with Jawaharlal Nehru Technological University Anantapur (JNTUA) academic regulations for the 2026-27 session.
                    </p>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>Academic Milestone</th>
                                <th className={styles.th}>B.Pharm</th>
                                <th className={styles.th}>Pharm.D</th>
                                <th className={styles.th}>M.Pharm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.map((row, idx) => (
                                <tr key={idx} className={styles.tr}>
                                    <td className={`${styles.td} font-bold text-[#053B2A]`}>{row.event}</td>
                                    <td className={styles.td}>{row.bpharm}</td>
                                    <td className={styles.td}>{row.pharmd}</td>
                                    <td className={styles.td}>{row.mpharm}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}