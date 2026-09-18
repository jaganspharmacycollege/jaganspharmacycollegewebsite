'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    Phone,
    Mail,
    MapPin,
    Award,
    ShieldCheck,
    GraduationCap,
    BookOpen,
    Newspaper,
} from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    const pathname = usePathname();
    const [aboutOpen, setAboutOpen] = useState(false);
    const [coursesOpen, setCoursesOpen] = useState(false);
    const [admissionsOpen, setAdmissionsOpen] = useState(false);
    const [campusLifeOpen, setCampusLifeOpen] = useState(false);
    const [academicsOpen, setAcademicsOpen] = useState(false);
    const [placementsOpen, setPlacementsOpen] = useState(false);
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

    const [radialMenuOpen, setRadialMenuOpen] = useState(false);
    const radialMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (radialMenuRef.current && !radialMenuRef.current.contains(e.target as Node)) {
                setRadialMenuOpen(false);
            }
        };
        if (radialMenuOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [radialMenuOpen]);

    useEffect(() => {
        setAboutOpen(false);
        setCoursesOpen(false);
        setAdmissionsOpen(false);
        setCampusLifeOpen(false);
        setAcademicsOpen(false);
        setPlacementsOpen(false);
        setOffcanvasOpen(false);
        setRadialMenuOpen(false);
        setMobileSubmenu(null);
    }, [pathname]);

    useEffect(() => {
        if (offcanvasOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [offcanvasOpen]);

    const timerRef = useRef<{ [key: string]: NodeJS.Timeout }>({});

    const handleMouseEnter = (key: string, setter: (val: boolean) => void) => {
        if (timerRef.current[key]) {
            clearTimeout(timerRef.current[key]);
        }
        setter(true);
    };

    const handleMouseLeave = (key: string, setter: (val: boolean) => void) => {
        timerRef.current[key] = setTimeout(() => {
            setter(false);
        }, 150);
    };

    const toggleMobileAccordion = (name: string) => {
        setMobileSubmenu(mobileSubmenu === name ? null : name);
    };

    const aboutOptions = [
        { name: 'About JCP', href: '/about/history' },
        { name: 'Management & Leadership', href: '/about/management' },
        { name: 'Principal Desk', href: '/about/principal-desk' },
    ];

    const courseOptions = [
        { name: 'B. Pharm', href: '/courses/b-pharm' },
        { name: 'Pharm. D', href: '/courses/pharm-d' },
        { name: 'M. Pharm', href: '/courses/m-pharm' },
    ];

    const admissionOptions = [
        { name: 'Admission Process', href: '/admissions/admission-process' },
        { name: 'Eligibility Criteria', href: '/admissions/eligibility-criteria' },
        { name: 'Fee Structure', href: '/admissions/fee-structure' },
        { name: 'Application Form', href: '/admissions/application-form' },
        { name: 'Documents Required', href: '/admissions/documents-required' },
        { name: 'Scholarship', href: '/admissions/scholarship' },
        { name: 'FAQs', href: '/admissions/faqs' },
    ];

    const campusLifeOptions = [
        { name: 'Student Activities', href: '/campus-life/student-activities' },
        { name: 'Clubs', href: '/campus-life/clubs' },
        { name: 'Cultural Events', href: '/campus-life/cultural-events' },
        { name: 'Sports', href: '/campus-life/sports' },
        { name: 'NSS', href: '/campus-life/nss' },
        { name: 'Student Achievements', href: '/campus-life/student-achievements' },
        { name: 'Industrial Visits', href: '/campus-life/industrial-visits' },
        { name: 'Seminar & Workshops', href: '/campus-life/seminar-workshops' },
        { name: 'Festivals & Celebrations', href: '/campus-life/festivals-celebrations' },
        { name: 'Student Support', href: '/campus-life/student-support' },

        { name: 'Hostel', href: '/campus-life/hostel' },
        { name: 'Transportation', href: '/campus-life/transportation' },
        { name: 'Canteen', href: '/campus-life/canteen' },
    ];

    const academicsOptions = [
        { name: 'Departments', href: '/academics/departments' },
        { name: 'Academic Calendar', href: '/academics/calendar' },
        { name: 'Student Achievements', href: '/academics/student-achievements' },
        { name: 'Faculty Achievements', href: '/academics/faculty-achievements' },
        { name: 'Journals and Publications', href: '/academics/journals-publications' },
        { name: 'Faculty', href: '/academics/faculty' },
    ];

    const placementOptions = [
        { name: 'Training', href: '/placements/training' },
        { name: 'Placement Record', href: '/placements/record' },
        { name: "MOU's with Industries & Institutions", href: '/placements/mous' },
    ];

    const navItems = [
        { name: 'Home', href: '/' },
        {
            name: 'About Us',
            href: '/about',
            options: aboutOptions,
            state: aboutOpen,
            setter: setAboutOpen,
        },
        {
            name: 'Courses',
            href: '/courses',
            options: courseOptions,
            state: coursesOpen,
            setter: setCoursesOpen,
        },
        {
            name: 'Admissions',
            href: '/admissions',
            options: admissionOptions,
            state: admissionsOpen,
            setter: setAdmissionsOpen,
        },
        {
            name: 'Campus Life',
            href: '/campus-life',
            options: campusLifeOptions,
            state: campusLifeOpen,
            setter: setCampusLifeOpen,
        },
        {
            name: 'Academics',
            href: '/academics',
            options: academicsOptions,
            state: academicsOpen,
            setter: setAcademicsOpen,
        },
        { name: 'Infrastructure', href: '/infrastructure' },
        {
            name: 'Placements',
            href: '/placements',
            options: placementOptions,
            state: placementsOpen,
            setter: setPlacementsOpen,
        },
        { name: 'Alumni', href: '/alumni' },
    ];

    return (
        <header className={styles.headerWrapper}>
            {/* 1. Top Strip: Contact details & Location */}
            <div className={styles.topBar}>
                <div className={styles.topBarContainer}>
                    <div className={styles.topBarLeft}>
                        <span className={`${styles.topContactLink} ${styles.topBarLocation}`}>
                            <MapPin size={12} /> Jagan&apos;s College of Pharmacy, Jangalakandriga, Nellore, AP
                        </span>
                    </div>
                    <div className={styles.topBarRight}>
                        <a href="tel:+917680077726" className={styles.topContactLink}>
                            <Phone size={12} /> +91 76800 77726
                        </a>
                        <a href="mailto:principal.jcp@gmail.com" className={styles.topContactLink}>
                            <Mail size={12} /> principal.jcp@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* 2. Institution Brand Header Banner */}
            <div className={styles.brandBannerStrip}>
                <div className={styles.brandBannerContainer}>
                    <Link href="/" className={styles.brandMainGroup} aria-label="Jagan's College of Pharmacy Home">
                        <div className={styles.bannerLogoOuter}>
                            <img
                                src="/assets/logo/Jagans_logo.png"
                                alt="Jagan's College of Pharmacy Logo"
                                className={styles.bannerLogoImg}
                            />
                        </div>
                        <div className={styles.bannerTextGroup}>
                            <div className={styles.bannerHeadingRow}>
                                <h1 className={styles.bannerTitle}>Jagan&apos;s</h1>
                                <span className={styles.bannerTitleAccent}>College of Pharmacy</span>
                            </div>
                            <p className={styles.bannerMotto}>
                                Empowering future pharmacists with knowledge, integrity and innovation to advance healthcare and serve communities with compassion.
                            </p>
                        </div>
                    </Link>

                    {/* Right Accreditations & Counseling Codes Group */}
                    <div className={styles.bannerAccreditationColumn}>
                        <div className={styles.accreditationCol}>
                            <div className={styles.accreditationItem}>
                                <div className={styles.accreditationIconWrap}>
                                    <Award size={18} />
                                </div>
                                <div className={styles.accreditationText}>
                                    <p className={styles.accreditationTitle}>Affiliated to JNTUA</p>
                                    <p className={styles.accreditationSub}>Jawaharlal Nehru Tech University</p>
                                </div>
                            </div>

                            <div className={styles.codeBadgeCard}>
                                <div className={styles.codeIconBoxEmerald}>
                                    <GraduationCap size={15} />
                                </div>
                                <div className={styles.codeInfoGroup}>
                                    <span className={styles.codeSubtitle}>APEAPCET CODE</span>
                                    <span className={styles.codeHighlightEmerald}>JAGN</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.accreditationCol}>
                            <div className={styles.accreditationItem}>
                                <div className={styles.accreditationIconWrap}>
                                    <ShieldCheck size={18} />
                                </div>
                                <div className={styles.accreditationText}>
                                    <p className={styles.accreditationTitle}>Approved by PCI</p>
                                    <p className={styles.accreditationSub}>Pharmacy Council of India, New Delhi</p>
                                </div>
                            </div>

                            <div className={styles.codeBadgeCard}>
                                <div className={styles.codeIconBoxGold}>
                                    <BookOpen size={15} />
                                </div>
                                <div className={styles.codeInfoGroup}>
                                    <span className={styles.codeSubtitle}>AP PGCET CODE</span>
                                    <span className={styles.codeHighlightGold}>JAGN1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Main Navigation Bar */}
            <div className={styles.mainHeader}>
                <div className={styles.container}>
                    <div className={styles.leftGroup}>
                        <button
                            className={styles.mobileMenuBtn}
                            onClick={() => setOffcanvasOpen(true)}
                            aria-label="Open Navigation Menu"
                        >
                            <Menu size={22} />
                        </button>
                        <span className={styles.mobileNavTitle}>Menu</span>
                    </div>

                    <nav className={styles.desktopNav}>
                        {navItems.map((item) => {
                            const isActive = pathname.startsWith(item.href) && item.href !== '/';
                            const isHomeActive = pathname === '/' && item.href === '/';
                            const highlight = isActive || isHomeActive;

                            if (item.options) {
                                return (
                                    <div
                                        key={item.name}
                                        className={styles.dropdownContainer}
                                        onMouseEnter={() => handleMouseEnter(item.name, item.setter!)}
                                        onMouseLeave={() => handleMouseLeave(item.name, item.setter!)}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`${styles.navLink} ${highlight ? styles.activeNavLink : ''}`}
                                        >
                                            <span>{item.name}</span>
                                            <ChevronDown
                                                size={13}
                                                style={{
                                                    transform: item.state ? 'rotate(180deg)' : 'none',
                                                    transition: 'transform 0.25s ease',
                                                    color: '#34d399',
                                                }}
                                            />
                                            {highlight && <span className={styles.activeDot} />}
                                        </Link>

                                        {item.state && (
                                            <div
                                                className={styles.dropdownMenu}
                                                style={{ maxHeight: '72vh', overflowY: 'auto' }}
                                                onMouseEnter={() => handleMouseEnter(item.name, item.setter!)}
                                                onMouseLeave={() => handleMouseLeave(item.name, item.setter!)}
                                            >
                                                {item.options.map((opt) => (
                                                    <Link
                                                        key={opt.name}
                                                        href={opt.href}
                                                        className={styles.dropdownItem}
                                                    >
                                                        <span>{opt.name}</span>
                                                        <ChevronRight size={13} style={{ color: '#34d399' }} />
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`${styles.navLink} ${highlight ? styles.activeNavLink : ''}`}
                                >
                                    <span>{item.name}</span>
                                    {highlight && <span className={styles.activeDot} />}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Controls: Latest News & Applications Buttons */}
                    <div className={styles.rightControls}>
                        {/* Latest News Button (Placed immediately to the left of Applications) */}
                        <Link
                            href="/latest-news"
                            className={styles.latestNewsBtn}
                            aria-label="View Latest News and Press Releases"
                        >
                            <Newspaper size={14} />
                            <span>Latest News</span>
                        </Link>

                        {/* Applications Radial Fan-out */}
                        <div className={styles.radialMenuWrapper} ref={radialMenuRef}>
                            <button
                                type="button"
                                onClick={() => setRadialMenuOpen((prev) => !prev)}
                                className={`${styles.applicationsTriggerBtn} ${radialMenuOpen ? styles.triggerActive : ''
                                    }`}
                                aria-expanded={radialMenuOpen}
                                aria-label="Toggle Applications Menu"
                            >
                                <span>Applications</span>
                            </button>

                            <div
                                className={`${styles.radialArcContainer} ${radialMenuOpen ? styles.arcVisible : styles.arcHidden
                                    }`}
                            >
                                <Link
                                    href="/admissions/application-form"
                                    className={`${styles.radialTextPill} ${styles.item1}`}
                                    onClick={() => setRadialMenuOpen(false)}
                                >
                                    Admission Form
                                </Link>

                                <Link
                                    href="/contact"
                                    className={`${styles.radialTextPill} ${styles.item2}`}
                                    onClick={() => setRadialMenuOpen(false)}
                                >
                                    Enquiry Form
                                </Link>

                                <Link
                                    href="/recruitment"
                                    className={`${styles.radialTextPill} ${styles.item3}`}
                                    onClick={() => setRadialMenuOpen(false)}
                                >
                                    Recruitment Form
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Offcanvas Drawer for Mobile */}
            {offcanvasOpen && (
                <div className={styles.offcanvasOverlay} onClick={() => setOffcanvasOpen(false)}>
                    <div className={styles.offcanvasDrawer} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.drawerHeader}>
                            <Link href="/" className={styles.logoLink} onClick={() => setOffcanvasOpen(false)}>
                                <div className={styles.logoOuter}>
                                    <img
                                        src="/assets/logo/Jagans_logo.png"
                                        alt="Jagan's College of Pharmacy"
                                        className={styles.logoImg}
                                    />
                                </div>
                                <div className={styles.brandTextGroup}>
                                    <h4 className={styles.title}>Jagan&apos;s</h4>
                                    <p className={styles.subtitle}>COLLEGE OF PHARMACY</p>
                                </div>
                            </Link>
                            <button
                                className={styles.drawerCloseBtn}
                                onClick={() => setOffcanvasOpen(false)}
                                aria-label="Close Navigation Menu"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className={styles.drawerContent}>
                            <div className={styles.drawerItem}>
                                <Link
                                    href="/latest-news"
                                    className={styles.drawerNewsLink}
                                    onClick={() => setOffcanvasOpen(false)}
                                >
                                    <Newspaper size={17} />
                                    <span>Latest News &amp; Press</span>
                                </Link>
                            </div>

                            {navItems.map((item) => (
                                <div key={item.name} className={styles.drawerItem}>
                                    <div className={styles.drawerLinkRow}>
                                        <Link
                                            href={item.href}
                                            className={styles.drawerLink}
                                            onClick={() => setOffcanvasOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.options && (
                                            <button
                                                onClick={() => toggleMobileAccordion(item.name)}
                                                className={styles.drawerToggleBtn}
                                                aria-label={`Toggle ${item.name}`}
                                            >
                                                <ChevronDown
                                                    size={18}
                                                    style={{
                                                        transform: mobileSubmenu === item.name ? 'rotate(180deg)' : 'none',
                                                        transition: 'transform 0.2s ease',
                                                    }}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {item.options && mobileSubmenu === item.name && (
                                        <div className={styles.drawerSubMenu}>
                                            {item.options.map((opt) => (
                                                <Link
                                                    key={opt.name}
                                                    href={opt.href}
                                                    className={styles.drawerSubLink}
                                                    onClick={() => setOffcanvasOpen(false)}
                                                >
                                                    {opt.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className={styles.drawerFooter}>
                            <span className={styles.drawerFooterHeading}>Applications</span>
                            <div className={styles.drawerAppsList}>
                                <Link
                                    href="/admissions/application-form"
                                    className={styles.drawerAppItem}
                                    onClick={() => setOffcanvasOpen(false)}
                                >
                                    Admission Form
                                </Link>
                                <Link
                                    href="/contact"
                                    className={styles.drawerAppItem}
                                    onClick={() => setOffcanvasOpen(false)}
                                >
                                    Enquiry Form
                                </Link>
                                <Link
                                    href="/recruitment"
                                    className={styles.drawerAppItem}
                                    onClick={() => setOffcanvasOpen(false)}
                                >
                                    Recruitment Form
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}