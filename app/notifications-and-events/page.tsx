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
    FileSpreadsheet,
    GraduationCap,
    Download,
} from 'lucide-react';
import styles from './NotificationsEvents.module.css';

type TabType = 'all' | 'notifications' | 'events' | 'circulars' | 'examinations';

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
        desc: 'Candidates allotted through AP EAPCET / GPAT rank lists are requested to report to the campus verification cell with original certificates and fee allotment orders.',
        linkText: 'Download Schedule PDF',
        isNew: true,
    },
    {
        id: 'n2',
        date: 'AUG 19, 2026',
        category: 'Scholarships',
        title: 'Jagananna Vidya Deevena & Post-Matric Fee Reimbursement Verification',
        desc: 'Eligible B.Pharm and Pharm.D scholars must submit updated biometric e-KYC documents and family income verification at the administrative accounts office.',
        linkText: 'View Verification Guidelines',
        isNew: true,
    },
    {
        id: 'n3',
        date: 'AUG 15, 2026',
        category: 'Placements',
        title: 'Hetero Drugs & Dr. Reddy’s Campus Placement Drive Registration',
        desc: 'Registration open for final year B.Pharm & M.Pharm scholars for formulation quality control, regulatory documentation, and production plant roles.',
        linkText: 'Registration Link & Eligibility',
        isNew: false,
    },
    {
        id: 'n4',
        date: 'AUG 10, 2026',
        category: 'R&D Cell',
        title: 'Intramural Student Research Seed Grant Scheme 2026',
        desc: 'Research committee invites project proposals from postgraduate and Pharm.D interns for institutional seed grants up to INR 50,000 per formulation innovation.',
        linkText: 'Download Proposal Format',
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
        title: 'World Pharmacists Day Expo & Free Community Health Camp 2026',
        desc: 'Community medication reviews, clinical screening camps, public health awareness rallies, and inter-collegiate scientific poster presentations.',
        type: 'Community & Academic',
    },
    {
        id: 'e3',
        dateBadge: 'DEC 19',
        year: '2026',
        time: '10:00 AM - 08:30 PM',
        location: 'College Campus & Auditorium',
        title: 'Annual Global Alumni Homecoming & Mentorship Meet 2026',
        desc: 'Grand reunion, batch felicitations, corporate mentorship roundtables, and cultural evening banquet dinner with alumni industry leaders.',
        type: 'Grand Convention',
    },
    {
        id: 'e4',
        dateBadge: 'FEB 20',
        year: '2027',
        time: '02:00 PM - 05:30 PM',
        location: 'Seminar Hall 2',
        title: 'Career Mentorship, Resume Review & Mock Technical Interviews',
        desc: 'Senior industry alumni and corporate HR heads conducting mock interview simulations for graduating B.Pharm and Pharm.D scholars.',
        type: 'Placement Workshop',
    },
];

const circularsData = [
    {
        id: 'c1',
        refNo: 'JCP/CIR/2026/084',
        date: 'AUG 25, 2026',
        category: 'Administration',
        title: 'Institutional Anti-Ragging & Campus Vigilance Committee Directive',
        desc: 'Zero-tolerance policy circular regarding discipline, hostel regulations, and statutory 24x7 helpline details as per PCI and UGC statutory mandates.',
        linkText: 'Download Circular PDF',
        isNew: true,
    },
    {
        id: 'c2',
        refNo: 'JCP/CIR/2026/079',
        date: 'AUG 17, 2026',
        category: 'Academics',
        title: 'Commencement of Classwork for Academic Year 2026-27 (II, III & IV Years)',
        desc: 'All students are instructed to report on the scheduled date with complete lab manuals, aprons, and semester registration clearance receipts.',
        linkText: 'View Academic Circular',
        isNew: false,
    },
    {
        id: 'c3',
        refNo: 'JCP/CIR/2026/071',
        date: 'AUG 05, 2026',
        category: 'Campus Facilities',
        title: 'Central Library Extended Study Hours & Digital e-Journal Access',
        desc: 'Library working hours extended till 8:00 PM for GPAT aspirants. Off-campus remote credentials for ScienceDirect and DELNET portals updated.',
        linkText: 'Download Access Guide',
        isNew: false,
    },
    {
        id: 'c4',
        refNo: 'JCP/CIR/2026/065',
        date: 'JUL 28, 2026',
        category: 'Transportation',
        title: 'College Bus Route Timings & Boarding Pass Renewal Notice',
        desc: 'Route details covering Nellore City, Gudur, and surrounding regional pickup locations finalized for the upcoming academic session.',
        linkText: 'Download Bus Route Chart',
        isNew: false,
    },
];

const examinationsData = [
    {
        id: 'ex-bpharm',
        date: 'AUG 22, 2026',
        program: 'B. Pharmacy',
        title: 'B. Pharmacy End Semester Theory & Practical Examination Timetable',
        desc: 'Comprehensive examination schedule and lab batch allocations for B.Pharm (I, II, III & IV Years) released in accordance with JNTUA university notifications.',
        linkText: 'Download Timetable PDF',
        isNew: true,
    },
    {
        id: 'ex-pharmd',
        date: 'AUG 20, 2026',
        program: 'Pharm. D',
        title: 'Pharm. D Annual & Hospital Clerkship Examination Schedule Announced',
        desc: 'Notification for Pharm.D (Years I to V) theory examinations, clinical ward bedside assessments, and final year internship major project evaluations.',
        linkText: 'View Exam Schedule',
        isNew: true,
    },
    {
        id: 'ex-mpharm',
        date: 'AUG 18, 2026',
        program: 'M. Pharmacy',
        title: 'M. Pharmacy Semester End & Dissertation Defense Timetable',
        desc: 'Schedule for M.Pharm end semester examinations and final research dissertation viva-voce presentations across Pharmaceutics, Analysis, and Pharmacology.',
        linkText: 'Download Exam Circular',
        isNew: true,
    },
    {
        id: 'ex-fee',
        date: 'AUG 12, 2026',
        program: 'All Programs',
        title: 'Regular & Supplementary Examination Fee Payment Deadlines',
        desc: 'Last date for submission of regular and supplementary exam applications without fine and with penal fines through the institutional examination portal.',
        linkText: 'Fee Schedule & Challan Info',
        isNew: false,
    },
];

const cardDelays = [styles.cardDelay1, styles.cardDelay2, styles.cardDelay3, styles.cardDelay4];

export default function NotificationsAndEventsPage() {
    const [activeTab, setActiveTab] = useState<TabType>('all');
    const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlideIdx((prev) => (prev + 1) % showcaseSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        let isMounted = true;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isMounted && entry) {
                    setIsVisible(entry.isIntersecting);
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            isMounted = false;
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;
        let isMounted = true;

        const updateParallax = () => {
            if (!isMounted || !sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                currentScroll += (targetScroll - currentScroll) * 0.035;
                const relativeOffset = window.innerHeight - rect.top;
                if (orbLeftRef.current) {
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06}px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05}px, 0)`;
                }
            }
            if (isMounted) {
                animationFrameId = requestAnimationFrame(updateParallax);
            }
        };

        const handleScroll = () => {
            if (!isMounted) return;
            targetScroll = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateParallax);

        return () => {
            isMounted = false;
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Header Block */}
                <div className={`${styles.headerBlock} ${isVisible ? styles.animateHeader : styles.hiddenState}`}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Campus News &amp; Live Updates</span>
                    </div>
                    <h1 className={styles.title}>Official Notices, Events &amp; Examinations</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Central bulletin for official university notifications, academic circulars, semester examination timetables,
                        and upcoming conferences at Jagan&apos;s College of Pharmacy.
                    </p>
                </div>

                {/* Multi-Image Auto-Sliding Showcase Carousel */}
                <div className={`${styles.carouselContainer} ${isVisible ? styles.animateCarousel : styles.hiddenState}`}>
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

                        <div className={styles.badgesHeader}>
                            <span className={styles.codeBadge}>
                                <Layers size={13} className={styles.codeIcon} />
                                <span>OFFICIAL PORTAL UPDATES</span>
                            </span>
                            <span className={styles.specBadge}>Academic Year 2026-27</span>
                        </div>

                        <div className={styles.captionOverlay}>
                            <h4 className={styles.captionText}>{showcaseSlides[currentSlideIdx].caption}</h4>
                            <div className={styles.dotsWrapper}>
                                {showcaseSlides.map((_, dotIdx) => (
                                    <button
                                        key={dotIdx}
                                        onClick={() => setCurrentSlideIdx(dotIdx)}
                                        className={`${styles.dot} ${dotIdx === currentSlideIdx ? styles.activeDot : ''}`}
                                        aria-label={`Go to slide ${dotIdx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter Navigation Tabs (All Updates, Notifications, Events, Circulars, Examinations) */}
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

                    <button
                        onClick={() => setActiveTab('circulars')}
                        className={`${styles.filterBtn} ${activeTab === 'circulars' ? styles.activeFilterBtn : ''}`}
                    >
                        <FileSpreadsheet size={15} />
                        <span>Circulars</span>
                    </button>

                    <button
                        onClick={() => setActiveTab('examinations')}
                        className={`${styles.filterBtn} ${activeTab === 'examinations' ? styles.activeFilterBtn : ''}`}
                    >
                        <GraduationCap size={15} />
                        <span>Examinations</span>
                    </button>
                </div>

                {/* Stacked Content Sections */}
                <div className={styles.stackedSections}>
                    {/* SECTION 1: LATEST NOTIFICATIONS */}
                    {(activeTab === 'all' || activeTab === 'notifications') && (
                        <div key={`notifications-${activeTab}`} className={styles.sectionBlock}>
                            <div className={`${styles.sectionHeader} ${isVisible ? styles.animateSectionHead : styles.hiddenState}`}>
                                <div className={styles.colTitleWrap}>
                                    <div className={styles.iconSquircleEmerald}>
                                        <Bell size={22} />
                                    </div>
                                    <div>
                                        <h2 className={styles.sectionHeading}>Latest Notifications</h2>
                                        <p className={styles.sectionSub}>Admissions schedules, fee directives &amp; placement notices</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.cardsGrid}>
                                {notificationsData.map((item, idx) => (
                                    <div
                                        key={item.id}
                                        className={`${styles.noticeCard} ${isVisible ? cardDelays[idx % cardDelays.length] : styles.hiddenState
                                            }`}
                                    >
                                        <div>
                                            <div className={styles.cardTopRow}>
                                                <span className={styles.dateChip}>{item.date}</span>
                                                <div className={styles.badgeGroup}>
                                                    {item.isNew && <span className={styles.newBadge}>NEW</span>}
                                                    <span className={styles.catBadge}>{item.category}</span>
                                                </div>
                                            </div>
                                            <h4 className={styles.cardTitle}>{item.title}</h4>
                                            <p className={styles.cardDesc}>{item.desc}</p>
                                        </div>
                                        <div className={styles.cardFooter}>
                                            <button
                                                className={styles.pdfLinkBtn}
                                                onClick={() => alert(`Opening notification: ${item.title}`)}
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

                    {/* SECTION 2: UPCOMING EVENTS */}
                    {(activeTab === 'all' || activeTab === 'events') && (
                        <div key={`events-${activeTab}`} className={styles.sectionBlock}>
                            <div className={`${styles.sectionHeader} ${isVisible ? styles.animateSectionHead : styles.hiddenState}`}>
                                <div className={styles.colTitleWrap}>
                                    <div className={styles.iconSquircleAmber}>
                                        <Calendar size={22} />
                                    </div>
                                    <div>
                                        <h2 className={styles.sectionHeading}>Upcoming Events</h2>
                                        <p className={styles.sectionSub}>National conferences, symposiums &amp; annual alumni meets</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.cardsGrid}>
                                {upcomingEventsData.map((ev, idx) => (
                                    <div
                                        key={ev.id}
                                        className={`${styles.eventCard} ${isVisible ? cardDelays[idx % cardDelays.length] : styles.hiddenState
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

                    {/* SECTION 3: CIRCULARS */}
                    {(activeTab === 'all' || activeTab === 'circulars') && (
                        <div key={`circulars-${activeTab}`} className={styles.sectionBlock}>
                            <div className={`${styles.sectionHeader} ${isVisible ? styles.animateSectionHead : styles.hiddenState}`}>
                                <div className={styles.colTitleWrap}>
                                    <div className={styles.iconSquircleBlue}>
                                        <FileSpreadsheet size={22} />
                                    </div>
                                    <div>
                                        <h2 className={styles.sectionHeading}>Campus Circulars</h2>
                                        <p className={styles.sectionSub}>Administrative guidelines, committee rules &amp; campus memos</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.cardsGrid}>
                                {circularsData.map((circ, idx) => (
                                    <div
                                        key={circ.id}
                                        className={`${styles.noticeCard} ${isVisible ? cardDelays[idx % cardDelays.length] : styles.hiddenState
                                            }`}
                                    >
                                        <div>
                                            <div className={styles.cardTopRow}>
                                                <span className={styles.refCodeBadge}>{circ.refNo}</span>
                                                <div className={styles.badgeGroup}>
                                                    {circ.isNew && <span className={styles.newBadge}>NEW</span>}
                                                    <span className={styles.catBadgeBlue}>{circ.category}</span>
                                                </div>
                                            </div>
                                            <span className={styles.circularDateText}>Issued on: {circ.date}</span>
                                            <h4 className={styles.cardTitle}>{circ.title}</h4>
                                            <p className={styles.cardDesc}>{circ.desc}</p>
                                        </div>
                                        <div className={styles.cardFooter}>
                                            <button
                                                className={styles.pdfLinkBtnBlue}
                                                onClick={() => alert(`Downloading circular: ${circ.title}`)}
                                            >
                                                <Download size={14} />
                                                <span>{circ.linkText}</span>
                                                <ChevronRight size={13} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* SECTION 4: EXAMINATIONS */}
                    {(activeTab === 'all' || activeTab === 'examinations') && (
                        <div key={`examinations-${activeTab}`} className={styles.sectionBlock}>
                            <div className={`${styles.sectionHeader} ${isVisible ? styles.animateSectionHead : styles.hiddenState}`}>
                                <div className={styles.colTitleWrap}>
                                    <div className={styles.iconSquirclePurple}>
                                        <GraduationCap size={22} />
                                    </div>
                                    <div>
                                        <h2 className={styles.sectionHeading}>Examination Cell &amp; Timetables</h2>
                                        <p className={styles.sectionSub}>JNTUA end-semester theory, practical schedules &amp; fee dates</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.cardsGrid}>
                                {examinationsData.map((exam, idx) => (
                                    <div
                                        key={exam.id}
                                        className={`${styles.noticeCard} ${isVisible ? cardDelays[idx % cardDelays.length] : styles.hiddenState
                                            }`}
                                    >
                                        <div>
                                            <div className={styles.cardTopRow}>
                                                <span className={styles.examProgramBadge}>{exam.program}</span>
                                                <div className={styles.badgeGroup}>
                                                    {exam.isNew && <span className={styles.newBadge}>NEW</span>}
                                                    <span className={styles.dateChip}>{exam.date}</span>
                                                </div>
                                            </div>
                                            <h4 className={styles.cardTitle}>{exam.title}</h4>
                                            <p className={styles.cardDesc}>{exam.desc}</p>
                                        </div>
                                        <div className={styles.cardFooter}>
                                            <button
                                                className={styles.pdfLinkBtnPurple}
                                                onClick={() => alert(`Opening examination file: ${exam.title}`)}
                                            >
                                                <FileText size={14} />
                                                <span>{exam.linkText}</span>
                                                <ChevronRight size={13} />
                                            </button>
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