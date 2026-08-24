'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Calendar,
    Sparkles,
    Download,
    BookOpen,
    GraduationCap,
    Bell,
    ExternalLink,
} from 'lucide-react';
import styles from './AcademicCalendar.module.css';

const jntuaLinks = [
    {
        course: 'B. Pharm (All Years)',
        academicYear: 'Academic Year 2026–27',
        label: 'JNTUA B.Pharm Academic Calendar',
        url: 'https://www.jntua.ac.in/',
    },
    {
        course: 'Pharm. D (Years I to VI)',
        academicYear: 'Academic Year 2026–27',
        label: 'JNTUA Pharm.D Academic Calendar',
        url: 'https://www.jntua.ac.in/',
    },
    {
        course: 'M. Pharm (All Semesters)',
        academicYear: 'Academic Year 2026–27',
        label: 'JNTUA M.Pharm Academic Calendar',
        url: 'https://www.jntua.ac.in/',
    },
];

const calendarSchedules = [
    {
        course: 'B. Pharm (All Semesters)',
        badge: 'AY 2026-27',
        events: [
            {
                date: 'Aug 17, 2026',
                title: 'Commencement of Classwork (Odd Semesters)',
                type: 'Academic',
            },
            {
                date: 'Oct 12 - 17, 2026',
                title: 'I Mid-Term Examinations & Practical Lab Assessments',
                type: 'Exam',
            },
            {
                date: 'Dec 07 - 12, 2026',
                title: 'II Mid-Term Examinations & Internal Marks Finalization',
                type: 'Exam',
            },
            {
                date: 'Dec 14 - 19, 2026',
                title: 'End-Semester Practical Laboratory Examinations',
                type: 'Practical',
            },
            {
                date: 'Dec 22, 2026',
                title: 'JNTUA University Theory End Examinations',
                type: 'University Exam',
            },
            {
                date: 'Jan 11, 2027',
                title: 'Commencement of Classwork (Even Semesters)',
                type: 'Academic',
            },
        ],
    },
    {
        course: 'Pharm. D (Years I to VI)',
        badge: 'AY 2026-27',
        events: [
            {
                date: 'Aug 24, 2026',
                title: 'Orientation & Hospital Ward Posting Briefing',
                type: 'Academic',
            },
            {
                date: 'Nov 02 - 07, 2026',
                title: 'I Sessional Examinations (Clinical & Theory)',
                type: 'Exam',
            },
            {
                date: 'Jan 18 - 23, 2027',
                title: 'II Sessional Examinations & Clerkship Reviews',
                type: 'Exam',
            },
            {
                date: 'Mar 22 - 27, 2027',
                title: 'III Sessional Examinations & Model Clinical Vivas',
                type: 'Exam',
            },
            {
                date: 'Apr 19, 2027',
                title: 'Annual Board Practical & University Theory Exams',
                type: 'University Exam',
            },
        ],
    },
    {
        course: 'M. Pharm (Pharmaceutics & Analysis)',
        badge: 'AY 2026-27',
        events: [
            {
                date: 'Sep 01, 2026',
                title: 'Commencement of Semester I Classwork & Research Lab Allocations',
                type: 'Academic',
            },
            {
                date: 'Nov 16 - 21, 2026',
                title: 'I Mid-Term Exams & Project Proposal Submissions',
                type: 'Exam',
            },
            {
                date: 'Jan 04 - 09, 2027',
                title: 'II Mid-Term Examinations & Synopsis Defense',
                type: 'Exam',
            },
            {
                date: 'Jan 25, 2027',
                title: 'Semester End Theory & Comprehensive Viva Examinations',
                type: 'University Exam',
            },
        ],
    },
];

export default function AcademicCalendarPage() {
    const [selectedCourse, setSelectedCourse] = useState(0);

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
                        <span>Official University Schedule</span>
                    </div>
                    <h1 className={styles.title}>Academic Calendar</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Official academic schedules, examination timetables, practical assessment windows, and JNTUA university calendar notifications.
                    </p>
                </div>

                {/* JNTUA Academic Calendar Quick Links Bar */}
                <div className={styles.jntuaLinksContainer}>
                    <div className={styles.jntuaLinksHeader}>
                        <span className={styles.jntuaHeaderTitle}>JNTUA Academic Calendar Notifications</span>
                        <a
                            href="https://www.jntua.ac.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.jntuaPortalLink}
                        >
                            <span>JNTUA Official Website</span>
                            <ExternalLink size={13} />
                        </a>
                    </div>

                    <div className={styles.jntuaLinksGrid}>
                        {jntuaLinks.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.jntuaLinkCard}
                            >
                                <div>
                                    <h4 className={styles.jntuaLinkCourse}>{item.course}</h4>
                                    <p className={styles.jntuaLinkYear}>{item.academicYear}</p>
                                </div>
                                <div className={styles.downloadIconWrap}>
                                    <Download size={14} />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Tab Selection Row */}
                <div className={styles.tabsRow}>
                    {calendarSchedules.map((schedule, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedCourse(idx)}
                            className={`${styles.tabBtn} ${selectedCourse === idx ? styles.activeTabBtn : ''
                                }`}
                        >
                            <BookOpen size={16} />
                            <span>{schedule.course}</span>
                        </button>
                    ))}
                </div>

                {/* Active Schedule Card */}
                <div className={styles.scheduleCard}>
                    <div className={styles.scheduleHeader}>
                        <div className={styles.scheduleHeaderTitle}>
                            <GraduationCap size={24} className={styles.headerIcon} />
                            <div>
                                <h3 className={styles.scheduleName}>
                                    {calendarSchedules[selectedCourse].course}
                                </h3>
                                <span className={styles.academicYearBadge}>
                                    {calendarSchedules[selectedCourse].badge}
                                </span>
                            </div>
                        </div>

                        <a
                            href="https://www.jntua.ac.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.downloadPdfBtn}
                        >
                            <Download size={15} />
                            <span>Download Official JNTUA PDF</span>
                        </a>
                    </div>

                    {/* Timeline List */}
                    <div className={styles.timelineList}>
                        {calendarSchedules[selectedCourse].events.map((event, eventIdx) => (
                            <div key={eventIdx} className={styles.timelineItem}>
                                <div className={styles.timelineDateCol}>
                                    <Calendar size={15} className={styles.dateIcon} />
                                    <span className={styles.dateText}>{event.date}</span>
                                </div>

                                <div className={styles.timelineContentCol}>
                                    <div className={styles.timelineDot} />
                                    <div className={styles.eventDetails}>
                                        <span className={styles.eventTypeBadge}>{event.type}</span>
                                        <h4 className={styles.eventTitle}>{event.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Notice Info Box */}
                <div className={styles.noticeBox}>
                    <Bell size={20} className={styles.noticeIcon} />
                    <p className={styles.noticeText}>
                        <strong>Note:</strong> All examination schedules and session dates are subject to guidelines and circular revisions issued by <strong>Jawaharlal Nehru Technological University Anantapur (JNTUA)</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
}