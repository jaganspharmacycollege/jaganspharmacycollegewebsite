'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    ChevronDown,
    ChevronRight,
    Menu,
    X,
    ArrowUpRight,
    Phone,
    Mail,
    MapPin,
    Award,
} from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    const pathname = usePathname();
    const [coursesOpen, setCoursesOpen] = useState(false);
    const [admissionsOpen, setAdmissionsOpen] = useState(false);
    const [campusLifeOpen, setCampusLifeOpen] = useState(false);
    const [academicsOpen, setAcademicsOpen] = useState(false);
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

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
        { name: 'Anti-Ragging', href: '/campus-life/anti-ragging' },
        { name: 'Hostel', href: '/campus-life/hostel' },
        { name: 'Transportation', href: '/campus-life/transportation' },
        { name: 'Canteen', href: '/campus-life/canteen' },
        { name: 'Academic Calendar', href: '/academics/calendar' },
    ];

    const academicsOptions = [
        { name: 'Departments & Faculty', href: '/academics/departments' },
        { name: 'Academic Calendar', href: '/academics/calendar' },
    ];

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
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
        { name: 'Placements', href: '/placements' },
        { name: 'Alumni', href: '/alumni' },
    ];

    return (
        <header className={styles.headerWrapper}>
            {/* Top Strip */}
            <div className={styles.topBar}>
                <div className={styles.topBarContainer}>
                    <div className={styles.topBarLeft}>
                        <span className={styles.affilBadge}>
                            <Award size={14} /> Affiliated to JNTUA
                        </span>
                    </div>
                    <div className={styles.topBarRight}>
                        <a href="tel:+917680077726" className={styles.topContactLink}>
                            <Phone size={12} /> +91 76800 77726
                        </a>
                        <a
                            href="mailto:principal.jcp@gmail.com"
                            className={styles.topContactLink}
                        >
                            <Mail size={12} /> principal.jcp@gmail.com
                        </a>
                        <span className={`${styles.topContactLink} ${styles.topBarLocation}`}>
                            <MapPin size={12} /> Jagan&apos;s College of Pharmacy, Jangalakandriga, Nellore, AP
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className={styles.mainHeader}>
                <div className={styles.container}>
                    {/* Left Group: Hamburger + Circular Image Logo & Text */}
                    <div className={styles.leftGroup}>
                        <button
                            className={styles.mobileMenuBtn}
                            onClick={() => setOffcanvasOpen(true)}
                            aria-label="Open Navigation Menu"
                        >
                            <Menu size={22} />
                        </button>
                        <Link href="/" className={styles.logoLink}>
                            <div className={styles.logoOuter}>
                                <img
                                    src="/assets/logo/Jagans_logo.png"
                                    alt="Jagan's College of Pharmacy"
                                    className={styles.logoImg}
                                />
                            </div>

                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className={styles.desktopNav}>
                        {navItems.map((item) => {
                            const isActive =
                                pathname.startsWith(item.href) && item.href !== '/';
                            const isHomeActive = pathname === '/' && item.href === '/';
                            const highlight = isActive || isHomeActive;

                            if (item.options) {
                                return (
                                    <div
                                        key={item.name}
                                        className={styles.dropdownContainer}
                                        onMouseEnter={() =>
                                            handleMouseEnter(item.name, item.setter!)
                                        }
                                        onMouseLeave={() =>
                                            handleMouseLeave(item.name, item.setter!)
                                        }
                                    >
                                        <Link
                                            href={item.href}
                                            className={`${styles.navLink} ${highlight ? styles.activeNavLink : ''
                                                }`}
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
                                                onMouseEnter={() =>
                                                    handleMouseEnter(item.name, item.setter!)
                                                }
                                                onMouseLeave={() =>
                                                    handleMouseLeave(item.name, item.setter!)
                                                }
                                            >
                                                {item.options.map((opt) => (
                                                    <Link
                                                        key={opt.name}
                                                        href={opt.href}
                                                        className={styles.dropdownItem}
                                                        onClick={() => item.setter!(false)}
                                                    >
                                                        <span>{opt.name}</span>
                                                        <ChevronRight
                                                            size={13}
                                                            className="text-emerald-400"
                                                        />
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
                                    className={`${styles.navLink} ${highlight ? styles.activeNavLink : ''
                                        }`}
                                >
                                    <span>{item.name}</span>
                                    {highlight && <span className={styles.activeDot} />}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Controls */}
                    <div className={styles.rightControls}>
                        <Link
                            href="/admissions/application-form"
                            className={styles.applyButton}
                        >
                            <span>Apply Now</span>
                            <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Offcanvas Drawer */}
            {offcanvasOpen && (
                <div
                    className={styles.offcanvasOverlay}
                    onClick={() => setOffcanvasOpen(false)}
                >
                    <div
                        className={styles.offcanvasDrawer}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.drawerHeader}>
                            <Link
                                href="/"
                                className={styles.logoLink}
                                onClick={() => setOffcanvasOpen(false)}
                            >
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
                                                className={styles.drawerToggleBtn}
                                                onClick={() => toggleMobileAccordion(item.name)}
                                                aria-label={`Toggle ${item.name}`}
                                            >
                                                <ChevronDown
                                                    size={18}
                                                    style={{
                                                        transform:
                                                            mobileSubmenu === item.name
                                                                ? 'rotate(180deg)'
                                                                : 'none',
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
                            <Link
                                href="/admissions/application-form"
                                className={styles.drawerApplyBtn}
                                onClick={() => setOffcanvasOpen(false)}
                            >
                                <span>Apply for Admission</span>
                                <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}