'use client';

import React, { useState, useEffect, useRef } from 'react';
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
        title: 'B.Pharm & Pharm. D 2026-27 Admissions Counseling Schedule Released',
        desc: 'Candidates allotted through AP EAPCET / GPAT rank lists are requested to report to the campus verification cell with original certificates.',
        linkText: 'Download Schedule PDF',
        isNew: true,
    },
    {
        id: 'n-bpharm',
        date: 'AUG 22, 2026',
        category: 'Examinations',
        title: 'B. Pharmacy End Semester Theory & Practical Examination Timetable',
        desc: 'Comprehensive examination schedule and lab batch allocations for B. Pharm (I, II, III & IV Years) released in accordance with JNTUA university notifications.',
        linkText: 'Download Timetable PDF',
        isNew: true,
    },
    {
        id: 'n-pharmd',
        date: 'AUG 20, 2026',
        category: 'Examinations',
        title: 'Pharm. D Annual & Clerkship Examination Schedule Announced',
        desc: 'Timetable notification for Pharm. D (Years I to V) theory examinations, clinical hospital ward rounds, and final year internship project evaluations.',
        linkText: 'View Exam Schedule',
        isNew: true,
    },
    {
        id: 'n-mpharm',
        date: 'AUG 18, 2026',
        category: 'Examinations',
        title: 'M. Pharmacy Semester End & Dissertation Defense Timetable',
        desc: 'Schedule for M. Pharm end semester examinations and final major research dissertation viva-voce presentations across all specializations.',
        linkText: 'Download Exam Circular',
        isNew: true,
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
        desc: 'Senior industry alumni and HR managers conducting interview simulations for graduating B. Pharm and Pharm.D scholars.',
        type: 'Placement Workshop',
    },
];

const cardDelays = [
    styles.cardDelay1,
    styles.cardDelay2,
    styles.cardDelay3,
    styles.cardDelay4,
];

const tabDelays = [
    styles.tabDelay1,
    styles.tabDelay2,
    styles.tabDelay3,
];

export default function NotificationsAndEventsPage() {
    const [activeTab, setActiveTab] = useState<'all' | 'notifications' | 'events'>('all');
    const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // 5000ms auto-cycling showcase carousel with 1.5s cross-fade
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlideIdx((prev) => (prev + 1) % showcaseSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Repeating scroll-triggered entrance detection
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Ultra-slow fluid linear-interpolated (lerp 0.035) parallax animation
    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;

        const updateParallax = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();

            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                currentScroll += (targetScroll - currentScroll) * 0.035;
                const relativeOffset = window.innerHeight - rect.top;

                if (orbLeftRef.current) {
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06
                        }px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05
                        }px, 0)`;
                }
            }

            animationFrameId = requestAnimationFrame(updateParallax);
        };

        const handleScroll = () => {
            targetScroll = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateParallax);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            {/* Background Lighting Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Header Block */}
                <div
                    className={`${styles.headerBlock} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Campus News &amp; Live Updates</span>
                    </div>
                    <h1 className={styles.title}>
                        Latest Notifications &amp; Upcoming Events
                    </h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Official circulars, examination announcements, admissions counseling schedules, guest seminars, and academic symposiums at Jagan&apos;s College of Pharmacy.
                    </p>
                </div>

                {/* Multi-Image Auto-Sliding Showcase Carousel */}
                <div
                    className={`${styles.carouselContainer} ${isVisible ? styles.animateCarousel : styles.hiddenState
                        }`}
                >
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
                        className={`${styles.filterBtn} ${activeTab === 'all' ? styles.activeFilterBtn : ''
                            } ${isVisible ? tabDelays[0] : styles.hiddenState}`}
                    >
                        <span>All Updates</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('notifications')}
                        className={`${styles.filterBtn} ${activeTab === 'notifications' ? styles.activeFilterBtn : ''
                            } ${isVisible ? tabDelays[1] : styles.hiddenState}`}
                    >
                        <Bell size={15} />
                        <span>Official Notifications</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('events')}
                        className={`${styles.filterBtn} ${activeTab === 'events' ? styles.activeFilterBtn : ''
                            } ${isVisible ? tabDelays[2] : styles.hiddenState}`}
                    >
                        <Calendar size={15} />
                        <span>Upcoming Events</span>
                    </button>
                </div>

                {/* Stacked Layout: Section 1 (Latest Notifications) then Section 2 (Upcoming Events) */}
                <div className={styles.stackedSections}>
                    {/* Section 1: Latest Notifications */}
                    {(activeTab === 'all' || activeTab === 'notifications') && (
                        <div
                            key={`notifications-section-${activeTab}`}
                            className={styles.sectionBlock}
                        >
                            <div
                                className={`${styles.sectionHeader} ${isVisible ? styles.animateSectionHead : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.colTitleWrap}>
                                    <div className={styles.iconSquircleEmerald}>
                                        <Bell size={22} />
                                    </div>
                                    <div>
                                        <h2 className={styles.sectionHeading}>Latest Notifications</h2>
                                        <p className={styles.sectionSub}>
                                            Official university circulars, counseling &amp; academic notices
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 2-Column Responsive Card Grid */}
                            <div className={styles.cardsGrid}>
                                {notificationsData.map((item, idx) => (
                                    <div
                                        key={item.id}
                                        className={`${styles.noticeCard} ${isVisible
                                                ? cardDelays[idx % cardDelays.length]
                                                : styles.hiddenState
                                            }`}
                                    >
                                        <div>
                                            <div className={styles.cardTopRow}>
                                                <span className={styles.dateChip}>{item.date}</span>
                                                <div className={styles.badgeGroup}>
                                                    {item.isNew && (
                                                        <span className={styles.newBadge}>NEW</span>
                                                    )}
                                                    <span className={styles.catBadge}>{item.category}</span>
                                                </div>
                                            </div>
                                            <h4 className={styles.cardTitle}>{item.title}</h4>
                                            <p className={styles.cardDesc}>{item.desc}</p>
                                        </div>

                                        <div className={styles.cardFooter}>
                                            <button
                                                className={styles.pdfLinkBtn}
                                                onClick={() =>
                                                    alert(`Opening circular: ${item.title}`)
                                                }
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
                        <div
                            key={`events-section-${activeTab}`}
                            className={styles.sectionBlock}
                        >
                            <div
                                className={`${styles.sectionHeader} ${isVisible ? styles.animateSectionHead : styles.hiddenState
                                    }`}
                            >
                                <div className={styles.colTitleWrap}>
                                    <div className={styles.iconSquircleAmber}>
                                        <Calendar size={22} />
                                    </div>
                                    <div>
                                        <h2 className={styles.sectionHeading}>Upcoming Events</h2>
                                        <p className={styles.sectionSub}>
                                            National conferences, alumni meets, workshops &amp; symposiums
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 2-Column Responsive Card Grid */}
                            <div className={styles.cardsGrid}>
                                {upcomingEventsData.map((ev, idx) => (
                                    <div
                                        key={ev.id}
                                        className={`${styles.eventCard} ${isVisible
                                                ? cardDelays[idx % cardDelays.length]
                                                : styles.hiddenState
                                            }`}
                                    >
                                        <div>
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
                                        </div>

                                        <div className={styles.cardFooter}>
                                            <Link
                                                href="/contact"
                                                className={styles.registerEventBtn}
                                            >
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