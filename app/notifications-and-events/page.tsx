'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Bell,
    Calendar,
    Sparkles,
    Clock,
    MapPin,
    FileText,
    ChevronRight,
    ArrowRight,
    Layers,
} from 'lucide-react';
import styles from './NotificationsEvents.module.css';

const showcaseSlides = [
    {
        src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80',
        caption: 'Official Admissions 2026-27 Counseling & Document Verification Cell',
    },
    {
        src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80',
        caption: 'National Symposium on Drug Regulatory Filings & AI in Pharmacovigilance',
    },
    {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
        caption: 'Annual Global Alumni Grand Reunion Gala & Career Mentorship Panels',
    },
];

const notificationsData = [
    {
        id: 'n1',
        date: 'AUG 24, 2026',
        category: 'Admissions',
        title: 'B.Pharm & Pharm.D 2026-27 Admissions Counseling Schedule Released',
        desc: 'Candidates allotted through AP EAPCET / GPAT rank lists are requested to report to the campus verification cell with original certificates.',
        linkText: 'Download Schedule PDF',
        isNew: true,
    },
    {
        id: 'n2',
        date: 'AUG 20, 2026',
        category: 'Examinations',
        title: 'End Semester Practical Examination Timetable Updated',
        desc: 'Timetable schedule for B.Pharm IV Year & M.Pharm II Year practical labs uploaded in compliance with JNTUA university guidelines.',
        linkText: 'View Circular',
        isNew: true,
    },
    {
        id: 'n3',
        date: 'AUG 15, 2026',
        category: 'Scholarships',
        title: 'Government Post-Matric & Institutional Merit Scholarship Applications Open',
        desc: 'Eligible students can submit fee reimbursement and institutional merit scholarship applications to the administration office before Sep 10.',
        linkText: 'Apply Instructions',
        isNew: false,
    },
    {
        id: 'n4',
        date: 'AUG 08, 2026',
        category: 'Academics',
        title: 'CPCSEA Approved Preclinical Lab Access Guidelines for PG Researchers',
        desc: 'Standard operating protocols and safety briefing for M.Pharm and Ph.D. scholars accessing the Central Instrumentation and Animal house facilities.',
        linkText: 'Download Guidelines',
        isNew: false,
    },
];

const upcomingEventsData = [
    {
        id: 'e1',
        dateBadge: 'SEP 12',
        year: '2026',
        time: '10:00 AM - 04:30 PM',
        location: 'Main Auditorium & Zoom',
        title: 'National Seminar on Modern Drug Regulatory Filings & AI Applications',
        desc: 'Keynote panels on US FDA 505(b)(2) pathways, AI in dissolution profiles, and dossier preparations led by international pharmaceutical directors.',
        type: 'Hybrid Seminar',
    },
    {
        id: 'e2',
        dateBadge: 'OCT 05',
        year: '2026',
        time: '09:30 AM - 05:00 PM',
        location: 'Central Lawn & Seminar Hall 1',
        title: 'World Pharmacists Day Expo & Free Health Camp 2026',
        desc: 'Community medication reviews, clinical screening camps, public health rallies, and inter-collegiate poster presentations.',
        type: 'Community & Academic',
    },
    {
        id: 'e3',
        dateBadge: 'DEC 19',
        year: '2026',
        time: '10:00 AM - 08:30 PM',
        location: 'College Campus & Auditorium',
        title: 'Annual Global Alumni Homecoming & Mentorship Meet 2026',
        desc: 'Grand reunion, batch felicitations, corporate mentorship roundtables, and cultural evening banquet dinner.',
        type: 'Grand Convention',
    },
    {
        id: 'e4',
        dateBadge: 'FEB 20',
        year: '2027',
        time: '02:00 PM - 05:30 PM',
        location: 'Seminar Hall 2',
        title: 'Career Mentorship, Resume Review & Mock Technical Interviews',
        desc: 'Senior industry alumni and HR managers conducting interview simulations for graduating B.Pharm and Pharm.D scholars.',
        type: 'Placement Workshop',
    },
];

export default function NotificationsAndEventsPage() {
    const [activeTab, setActiveTab] = useState<'all' | 'notifications' | 'events'>('all');
    const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlideIdx((prev) => (prev + 1) % showcaseSlides.length);
        }, 2500);

        return () => clearInterval(timer);
    }, []);

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
                        <span>Campus News &amp; Live Updates</span>
                    </div>
                    <h1 className={styles.title}>Latest Notifications &amp; Upcoming Events</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Official circulars, examination announcements, admissions counseling schedules, guest seminars, and academic symposiums at Jagan&apos;s College of Pharmacy.
                    </p>
                </div>

                {/* Multi-Image Auto-Sliding Showcase Carousel */}
                <div className={styles.carouselContainer}>
                    <div className={styles.imageFrame}>
                        {showcaseSlides.map((slide, idx) => (
                            <img
                                key={idx}
                                src={slide.src}
                                alt={slide.caption}
                                className={`${styles.carouselImg} ${idx === currentSlideIdx ? styles.activeImg : styles.inactiveImg
                                    }`}
                            />
                        ))}
                        <div className={styles.imageOverlay} />

                        {/* Top Amber Code Badges */}
                        <div className={styles.badgesHeader}>
                            <span className={styles.codeBadge}>
                                <Layers size={13} className={styles.codeIcon} />
                                <span>OFFICIAL PORTAL UPDATES</span>
                            </span>
                            <span className={styles.specBadge}>Academic Year 2026-27</span>
                        </div>

                        {/* Bottom Caption & Synchronized Dots */}
                        <div className={styles.captionOverlay}>
                            <h4 className={styles.captionText}>
                                {showcaseSlides[currentSlideIdx].caption}
                            </h4>

                            <div className={styles.dotsWrapper}>
                                {showcaseSlides.map((_, dotIdx) => (
                                    <button
                                        key={dotIdx}
                                        onClick={() => setCurrentSlideIdx(dotIdx)}
                                        className={`${styles.dot} ${dotIdx === currentSlideIdx ? styles.activeDot : ''
                                            }`}
                                        aria-label={`Go to slide ${dotIdx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter Navigation Tabs */}
                <div className={styles.filterTabsRow}>
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`${styles.filterBtn} ${activeTab === 'all' ? styles.activeFilterBtn : ''}`}
                    >
                        <span>All Updates</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('notifications')}
                        className={`${styles.filterBtn} ${activeTab === 'notifications' ? styles.activeFilterBtn : ''}`}
                    >
                        <Bell size={15} />
                        <span>Official Notifications</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('events')}
                        className={`${styles.filterBtn} ${activeTab === 'events' ? styles.activeFilterBtn : ''}`}
                    >
                        <Calendar size={15} />
                        <span>Upcoming Events</span>
                    </button>
                </div>

                {/* Stacked Layout: Section 1 (Latest Notifications) then Section 2 (Upcoming Events) */}
                <div className={styles.stackedSections}>
                    {/* Section 1: Latest Notifications */}
                    {(activeTab === 'all' || activeTab === 'notifications') && (
                        <div className={styles.sectionBlock}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.colTitleWrap}>
                                    <div className={styles.iconSquircleEmerald}>
                                        <Bell size={22} />
                                    </div>
                                    <div>
                                        <h2 className={styles.sectionHeading}>Latest Notifications</h2>
                                        <p className={styles.sectionSub}>Official university circulars, counseling &amp; academic notices</p>
                                    </div>
                                </div>
                            </div>

                            {/* 2-Column Responsive Card Grid */}
                            <div className={styles.cardsGrid}>
                                {notificationsData.map((item, idx) => (
                                    <div
                                        key={item.id}
                                        className={`${styles.noticeCard} ${styles[`animDelay${(idx % 4) + 1}`]}`}
                                    >
                                        <div className={styles.cardTopRow}>
                                            <span className={styles.dateChip}>{item.date}</span>
                                            <div className={styles.badgeGroup}>
                                                {item.isNew && <span className={styles.newBadge}>NEW</span>}
                                                <span className={styles.catBadge}>{item.category}</span>
                                            </div>
                                        </div>

                                        <h4 className={styles.cardTitle}>{item.title}</h4>
                                        <p className={styles.cardDesc}>{item.desc}</p>

                                        <div className={styles.cardFooter}>
                                            <button
                                                className={styles.pdfLinkBtn}
                                                onClick={() => alert(`Opening circular: ${item.title}`)}
                                            >
                                                <FileText size={14} />
                                                <span>{item.linkText}</span>
                                                <ChevronRight size={13} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Section 2: Upcoming Events */}
                    {(activeTab === 'all' || activeTab === 'events') && (
                        <div className={styles.sectionBlock}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.colTitleWrap}>
                                    <div className={styles.iconSquircleAmber}>
                                        <Calendar size={22} />
                                    </div>
                                    <div>
                                        <h2 className={styles.sectionHeading}>Upcoming Events</h2>
                                        <p className={styles.sectionSub}>National conferences, alumni meets, workshops &amp; symposiums</p>
                                    </div>
                                </div>
                            </div>

                            {/* 2-Column Responsive Card Grid */}
                            <div className={styles.cardsGrid}>
                                {upcomingEventsData.map((ev, idx) => (
                                    <div
                                        key={ev.id}
                                        className={`${styles.eventCard} ${styles[`animDelay${(idx % 4) + 1}`]}`}
                                    >
                                        <div className={styles.eventHeaderRow}>
                                            <div className={styles.dateBlock}>
                                                <span className={styles.dateDay}>{ev.dateBadge}</span>
                                                <span className={styles.dateYr}>{ev.year}</span>
                                            </div>
                                            <div className={styles.eventTitleWrap}>
                                                <span className={styles.eventTypePill}>{ev.type}</span>
                                                <h4 className={styles.cardTitle}>{ev.title}</h4>
                                            </div>
                                        </div>

                                        <div className={styles.eventMetaRow}>
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

                                        <div className={styles.cardFooter}>
                                            <Link href="/contact" className={styles.registerEventBtn}>
                                                <span>Register / Enquire</span>
                                                <ArrowRight size={13} />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}