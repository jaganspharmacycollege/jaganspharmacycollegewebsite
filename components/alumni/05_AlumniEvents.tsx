'use client';

import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import styles from './AlumniEvents.module.css';

const events = [
    {
        title: 'Pharma Leadership Webinar Series',
        date: 'September 12, 2026',
        time: '04:00 PM IST',
        location: 'Virtual / Zoom',
        desc: 'Keynote sessions on modern drug regulatory filings and AI applications in pharmaceutical analysis led by international alumni.',
    },
    {
        title: 'Grand Alumni Homecoming Meet 2026',
        date: 'December 19, 2026',
        time: '10:00 AM IST',
        location: 'Main Campus Auditorium',
        desc: 'Annual batch reunion, campus tour, felicitation of distinguished alumni, and networking banquet dinner.',
    },
    {
        title: 'Career Mentorship & Mock Interviews',
        date: 'February 20, 2027',
        time: '02:00 PM IST',
        location: 'Seminar Hall 2',
        desc: 'Senior alumni guiding final-year B. Pharm, Pharm.D, and M. Pharm students with resume reviews and technical interview prep.',
    },
];

export default function AlumniEvents() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerBlock}>
                    <span className={styles.eyebrow}>Conferences & Gatherings</span>
                    <h2 className={styles.title}>Alumni Events</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Participate in upcoming webinars, professional workshops, and networking chapter meets hosted throughout the year.
                    </p>
                </div>

                <div className={styles.grid}>
                    {events.map((ev, idx) => (
                        <div key={idx} className={styles.card}>
                            <h3 className={styles.cardTitle}>{ev.title}</h3>

                            <div className={styles.metaGroup}>
                                <div className={styles.metaItem}>
                                    <Calendar size={14} className={styles.metaIcon} />
                                    <span>{ev.date}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <Clock size={14} className={styles.metaIcon} />
                                    <span>{ev.time}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <MapPin size={14} className={styles.metaIcon} />
                                    <span>{ev.location}</span>
                                </div>
                            </div>

                            <p className={styles.cardDesc}>{ev.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}