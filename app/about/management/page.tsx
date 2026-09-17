'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    ArrowLeft,
    Quote,
    Award,
    Phone,
    Mail,
    Building2,
    ShieldCheck,
    GraduationCap,
    Users,
} from 'lucide-react';
import styles from './Management.module.css';

// 7 Members of the Executive Council
const executiveCouncil = [
    {
        name: 'Sri J. V. Subba Rao',
        role: 'President & Chairman',
        qualification: 'M.A.',
        affiliation: "Jagan's Educational Society",
        image: '/assets/logo/Chairman.png',
    },
    {
        name: 'Smt. J. Pushpalatha',
        role: 'Secretary & Correspondent',
        qualification: 'B.Ed, M.A.',
        affiliation: "Jagan's Educational Society",
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    },
    {
        name: 'Sri J. Tarun Kumar',
        role: 'Treasurer & Director',
        qualification: 'M.Tech, MBA (UK)',
        affiliation: "Jagan's Educational Society",
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    },
    {
        name: 'Sri K. Venugopal Reddy',
        role: 'Vice President',
        qualification: 'B.Tech, Industrialist',
        affiliation: "Jagan's Educational Society",
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80',
    },
    {
        name: 'Sri M. Raghava Rao',
        role: 'Joint Secretary',
        qualification: 'M.Com, FCA',
        affiliation: "Jagan's Educational Society",
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
    },
    {
        name: 'Dr. C. Venkateswarlu',
        role: 'Executive Member',
        qualification: 'M.S., Ortho Surgeon',
        affiliation: 'Healthcare Nominee',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    },
    {
        name: 'Smt. P. Anitha Kumari',
        role: 'Executive Member',
        qualification: 'M.Sc., Educationist',
        affiliation: 'Philanthropic Council',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
    },
];

// Governing Body of the College
const governingBody = [
    {
        name: 'Sri J. V. Subba Rao',
        category: 'Management - Chairman',
        designation: 'Chairman, Governing Body',
        profile: 'Philanthropist & Edu-Visionary, Leading educational institutions in AP',
    },
    {
        name: 'Sri J. Tarun Kumar',
        category: 'Management - Member',
        designation: 'Director & Treasurer',
        profile: 'M.Tech, MBA (UK), Enterprise Systems & Strategic Academic Operations',
    },
    {
        name: 'Smt. J. Pushpalatha',
        category: 'Management - Member',
        designation: 'Secretary & Correspondent',
        profile: 'B.Ed, M.A., Educational administration and student community outreach',
    },
    {
        name: 'Nominee of JNTUA (University Nominee)',
        category: 'University Representative',
        designation: 'Professor of Pharmaceutical Sciences',
        profile: 'Appointed by Jawaharlal Nehru Technological University Anantapur',
    },
    {
        name: 'Nominee of AICTE / PCI',
        category: 'Statutory Regulatory Authority',
        designation: 'Council Nominee',
        profile: 'Regional Officer / Nominated Academic Auditor, AICTE / PCI New Delhi',
    },
    {
        name: 'Nominee of State Government (DTE, AP)',
        category: 'State Govt. Representative',
        designation: 'Ex-Officio Member',
        profile: 'Representative from Department of Technical Education, Government of AP',
    },
    {
        name: 'Industrial Stalwart / Technologist',
        category: 'Industry Representative',
        designation: 'VP - Quality & Formulations',
        profile: 'Senior Executive representing Multinational Pharmaceutical Formulation Industry',
    },
    {
        name: 'Dr. C. Venkatesh',
        category: 'Senior Faculty Member',
        designation: 'Vice Principal & Professor',
        profile: 'M.Pharm, Ph.D, Academic Coordinator & Research Disciplinary Council',
    },
    {
        name: 'Dr. G. Lakshmi Narayana',
        category: 'Senior Faculty Member',
        designation: 'Dean of Academics & R&D',
        profile: 'M.Pharm, Ph.D, Head of Extramural Research Projects & CPCSEA Facility',
    },
    {
        name: 'Dr. S. Radha Krishna',
        category: 'Member Secretary',
        designation: 'Principal, JCP',
        profile: 'M.Pharm, Ph.D, Academic and Regulatory Executive Head of the Institution',
    },
];

export default function ManagementPage() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isMounted = true;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isMounted && entry) setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
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
            if (isMounted) animationFrameId = requestAnimationFrame(updateParallax);
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
                {/* Navigation Breadcrumb */}
                <div className={`${styles.backNav} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>Return to Home</span>
                    </Link>
                </div>

                {/* Page Header */}
                <div className={`${styles.header} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Executive Governance &amp; Administration</span>
                    </div>
                    <h1 className={styles.title}>Management &amp; Leadership</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Dedicated to philanthropic vision, statutory compliance, and world-class healthcare pedagogy at
                        Jagan&apos;s College of Pharmacy, Jangalakandriga, Nellore.
                    </p>
                </div>

                {/* =========================================================================
            SECTION 1: CHAIRMAN'S ADDRESS & PROFILE
           ========================================================================= */}
                <section className={styles.leaderSection}>
                    <div className={styles.sectionHeaderWrap}>
                        <span className={styles.sectionPill}>Institutional Visionary</span>
                        <h2 className={styles.sectionHeading}>Chairman&apos;s Message</h2>
                    </div>

                    <div className={styles.leaderCard}>
                        {/* Square Photo & Contact Column */}
                        <div className={styles.leaderProfileCol}>
                            <div className={styles.squareImageWrap}>
                                <img
                                    src="/assets/logo/Chairman.png"
                                    alt="Sri J. V. Subba Rao, Chairman"
                                    className={styles.squareImage}
                                />
                                <span className={styles.badgeRole}>Chairman</span>
                                <div className={styles.photoOverlay} />
                            </div>

                            <div className={styles.profileMeta}>
                                <span className={styles.subRoleTag}>Jagan&apos;s Educational Society</span>
                                <h3 className={styles.leaderName}>Sri J. V. Subba Rao</h3>
                                <p className={styles.qualification}>M.A., Philanthropist &amp; Edu-Visionary</p>
                                <div className={styles.expPill}>
                                    <Award size={13} className={styles.expIcon} />
                                    <span>25+ Years in Educational Leadership</span>
                                </div>

                                <div className={styles.contactGroup}>
                                    <a href="tel:+917680077726" className={styles.contactBtn}>
                                        <Phone size={13} />
                                        <span>+91 76800 77726</span>
                                    </a>
                                    <a href="mailto:chairman@jaganspharmacy.edu.in" className={styles.contactBtn}>
                                        <Mail size={13} />
                                        <span>chairman@jaganspharmacy.edu.in</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Message Column */}
                        <div className={styles.leaderMessageCol}>
                            <div className={styles.quoteIconBox}>
                                <Quote size={28} />
                            </div>
                            <h4 className={styles.messageSubject}>Empowering Youth Through Quality Pharmaceutical Education</h4>
                            <div className={styles.messageText}>
                                <p>
                                    Education is the cornerstone of societal progress, and specialized pharmaceutical education holds the
                                    power to heal communities and safeguard national well-being. When we established Jagan&apos;s College of
                                    Pharmacy, our singular ambition was to build a premier destination for pharmaceutical studies in rural
                                    and coastal Andhra Pradesh that competes on equal footing with national-level universities.
                                </p>
                                <p>
                                    Over the past two decades, we have continually upgraded our institutional infrastructure with pilot-scale
                                    manufacturing plants, high-precision central instrumentation laboratories, and advanced digital learning
                                    facilities. We firmly believe that academic rigor, paired with ethical humanitarian values, shapes our students
                                    into responsible global healthcare providers.
                                </p>
                                <p>
                                    I warmly welcome aspiring pharmacists to make use of our research ecosystems, hospital clinical training,
                                    and faculty mentorship to craft distinguished careers in pharmaceutical sciences.
                                </p>
                            </div>

                            <div className={styles.signOff}>
                                <p className={styles.signName}>Sri J. V. Subba Rao</p>
                                <p className={styles.signTitle}>Chairman, Jagan&apos;s Educational Society</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
            SECTION 2: TREASURER & DIRECTOR'S ADDRESS & PROFILE
           ========================================================================= */}
                <section className={styles.leaderSection}>
                    <div className={styles.sectionHeaderWrap}>
                        <span className={styles.sectionPill}>Executive Operations &amp; Innovation</span>
                        <h2 className={styles.sectionHeading}>Treasurer &amp; Director&apos;s Message</h2>
                    </div>

                    <div className={styles.leaderCard}>
                        {/* Square Photo & Contact Column */}
                        <div className={styles.leaderProfileCol}>
                            <div className={styles.squareImageWrap}>
                                <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                                    alt="Sri J. Tarun Kumar, Treasurer & Director"
                                    className={styles.squareImage}
                                />
                                <span className={styles.badgeRole}>Treasurer &amp; Director</span>
                                <div className={styles.photoOverlay} />
                            </div>

                            <div className={styles.profileMeta}>
                                <span className={styles.subRoleTag}>Executive Operations &amp; Strategy</span>
                                <h3 className={styles.leaderName}>Sri J. Tarun Kumar</h3>
                                <p className={styles.qualification}>M.Tech, MBA (UK)</p>
                                <div className={styles.expPill}>
                                    <Award size={13} className={styles.expIcon} />
                                    <span>12+ Years in Strategic Administration</span>
                                </div>

                                <div className={styles.contactGroup}>
                                    <a href="tel:+917680077733" className={styles.contactBtn}>
                                        <Phone size={13} />
                                        <span>+91 76800 77733</span>
                                    </a>
                                    <a href="mailto:vicechairman@jaganspharmacy.edu.in" className={styles.contactBtn}>
                                        <Mail size={13} />
                                        <span>director@jaganspharmacy.edu.in</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Message Column */}
                        <div className={styles.leaderMessageCol}>
                            <div className={styles.quoteIconBox}>
                                <Quote size={28} />
                            </div>
                            <h4 className={styles.messageSubject}>Bridging Innovation, Technology Transfer, and Industry Integration</h4>
                            <div className={styles.messageText}>
                                <p>
                                    Today&apos;s pharmaceutical sector operates on rapid digital transformation, computational drug design,
                                    international regulatory dossiers, and clinical precision. At Jagan&apos;s College of Pharmacy, our
                                    operational priority is ensuring that our students learn using the identical equipment, standards, and
                                    methodologies practiced inside multinational cGMP formulation suites.
                                </p>
                                <p>
                                    We have cultivated active industrial relationships with formulation leaders across Hyderabad, Vizag, and
                                    Chennai to provide continuous student internships, live plant visits, and campus placement drives. Concurrently,
                                    we invest robustly in student innovation grants, competitive GPAT coaching modules, and institutional research seed funds.
                                </p>
                                <p>
                                    Our campus is intentionally cultivated as an open, empowering ecosystem where intellectual curiosity transforms into
                                    patented discoveries and clinical breakthroughs.
                                </p>
                            </div>

                            <div className={styles.signOff}>
                                <p className={styles.signName}>Sri J. Tarun Kumar</p>
                                <p className={styles.signTitle}>Treasurer &amp; Director, Jagan&apos;s Educational Society</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
            SECTION 3: EXECUTIVE COUNCIL OF THE SOCIETY (7 MEMBERS)
           ========================================================================= */}
                <section className={styles.councilSection}>
                    <div className={styles.sectionHeaderWrap}>
                        <span className={styles.sectionPill}>Apex Administrative Body</span>
                        <h2 className={styles.sectionHeading}>Executive Council of the Society</h2>
                        <p className={styles.sectionSubDesc}>
                            The Executive Council of Jagan&apos;s Educational Society formulates institutional policies, oversees capital
                            investments, and directs overall societal welfare.
                        </p>
                    </div>

                    <div className={styles.councilGrid}>
                        {executiveCouncil.map((member, idx) => (
                            <div key={idx} className={styles.councilCard}>
                                <div className={styles.councilImgBox}>
                                    <img src={member.image} alt={member.name} className={styles.councilImg} />
                                    <span className={styles.councilRoleTag}>{member.role}</span>
                                </div>
                                <div className={styles.councilCardBody}>
                                    <h4 className={styles.councilMemberName}>{member.name}</h4>
                                    <p className={styles.councilQual}>{member.qualification}</p>
                                    <div className={styles.councilAffilRow}>
                                        <Building2 size={13} className={styles.councilAffilIcon} />
                                        <span>{member.affiliation}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =========================================================================
            SECTION 4: GOVERNING BODY OF THE COLLEGE
           ========================================================================= */}
                <section className={styles.governingBodySection}>
                    <div className={styles.sectionHeaderWrap}>
                        <span className={styles.sectionPill}>Academic &amp; Statutory Body</span>
                        <h2 className={styles.sectionHeading}>Governing Body of the College</h2>
                        <p className={styles.sectionSubDesc}>
                            Constituted in strict accordance with AICTE, PCI, and JNTUA norms to supervise academic progress, quality
                            assurance, statutory audits, and institutional governance.
                        </p>
                    </div>

                    {/* Desktop & Laptop Table View */}
                    <div className={styles.tableCard}>
                        <div className={styles.tableResponsive}>
                            <table className={styles.govTable}>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Member Name</th>
                                        <th>Designation in Governing Body</th>
                                        <th>Category / Representation</th>
                                        <th>Professional Background &amp; Profile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {governingBody.map((item, idx) => (
                                        <tr key={idx}>
                                            <td className={styles.tdIndex}>{idx + 1}</td>
                                            <td className={styles.tdName}>
                                                <strong>{item.name}</strong>
                                            </td>
                                            <td>
                                                <span className={styles.tableDesignation}>{item.designation}</span>
                                            </td>
                                            <td>
                                                <span className={styles.tableCategoryPill}>{item.category}</span>
                                            </td>
                                            <td className={styles.tdProfile}>{item.profile}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Mobile & Tablet Card View */}
                    <div className={styles.mobileGovList}>
                        {governingBody.map((item, idx) => (
                            <div key={idx} className={styles.mobileGovCard}>
                                <div className={styles.mobileCardTop}>
                                    <span className={styles.mobileIndex}>#{idx + 1}</span>
                                    <span className={styles.tableCategoryPill}>{item.category}</span>
                                </div>
                                <h4 className={styles.mobileMemberName}>{item.name}</h4>
                                <p className={styles.mobileDesignation}>{item.designation}</p>
                                <p className={styles.mobileProfile}>{item.profile}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}