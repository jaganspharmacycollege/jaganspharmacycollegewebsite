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

// Governing Body of the College
const governingBody = [
    {
        name: 'Sri S.V.Madhusudhan Reddy',
        category: 'Management - Chairman',
        designation: 'Secretary MSR Educational Society',
        profile: 'Philanthropist & Edu-Visionary, Leading educational institutions in AP',
    },
    {
        name: 'Smt. S.Mamatha',
        category: 'Management',
        designation: 'Treasurer',
        profile: 'Treasurer MSR Educational Society',
    },
    {
        name: 'Sri V.Naveen Kumar Reddy ',
        category: 'Management',
        designation: 'Management - Member',
        profile: 'Hon. Member, MSR Educational Society',
    },
    {
        name: 'Prof. E.Keshava Reddy',
        category: 'University Representative',
        designation: 'Professor in Mathematics Department',
        profile: 'Appointed by Jawaharlal Nehru Technological University Anantapur',
    },
    {
        name: 'Dr D.HepcyKalarani',
        category: 'Member',
        designation: 'Principal',
        profile: 'Principal, Jagan&apos;s College of Pharmacy, Jangalakandriga, Nellore',
    },
    {
        name: 'Dr. C.Bhuvaneswara Rao',
        category: 'Member',
        designation: 'Professor',
        profile: "Member, Professor Jagan's College of Pharmacy, Jangalakandriga, Nellore",
    },
    {
        name: 'Dr.Dr.S.SaranKumar',
        category: 'Member',
        designation: 'Associate Professor',
        profile: "Member, Associate Professor Jagan's College of Pharmacy, Jangalakandriga, Nellore",
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
                                    alt="Sri S.V.Madhusudhan Reddy"
                                    className={styles.squareImage}
                                />
                                <span className={styles.badgeRole}>Chairman</span>
                                <div className={styles.photoOverlay} />
                            </div>

                            <div className={styles.profileMeta}>
                                <span className={styles.subRoleTag}>Jagan&apos;s Educational Society</span>
                                <h3 className={styles.leaderName}>Sri S.V.Madhusudhan Reddy</h3>
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
                                    It gives me immense pride to reflect on the journey of Jagan’s College of Pharmacy over the past two decades. Since its inception, my commitment has been to build an institution that not only imparts quality education but also instills values, discipline, and a strong moral foundation among our students and faculty.
                                </p>
                                <p>
                                    For 20 years, we have worked tirelessly to uphold academic standards and nurture a culture of integrity and responsibility. This vision has guided us in shaping professionals who are not only competent in their field but also compassionate in their service to society. The success of our college lies in the collective dedication of our faculty, staff, and students, who continue to embody the principles of excellence and ethics.
                                </p>
                                <p>
                                    As Chairman, I remain steadfast in my mission to strengthen this institution, to embrace innovation while preserving our core values, and to ensure that Jagan’s College of Pharmacy stands as a beacon of trust, knowledge, and inspiration for generations to come.
                                </p>
                            </div>

                            <div className={styles.signOff}>
                                <p className={styles.signName}>Sri S.V.Madhusudhan Reddy</p>
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
                                    src="/assets/logo/treasurer.png"
                                    alt="Smt S.Mamatha, Treasurer & Director"
                                    className={styles.squareImage}
                                />
                                <span className={styles.badgeRole}>Treasurer &amp; Director</span>
                                <div className={styles.photoOverlay} />
                            </div>

                            <div className={styles.profileMeta}>
                                <span className={styles.subRoleTag}>Executive Operations &amp; Strategy</span>
                                <h3 className={styles.leaderName}>Smt S.Mamatha</h3>
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
                                    As Treasurer of Jagan’s College of Pharmacy, it has been my privilege to support the institution’s growth and stability over the years under the guidance of our Chairman. From the very beginning, our vision has been to create a college that not only delivers quality education but also stands firm on values, ethics, and responsibility.
                                </p>
                                <p>
                                    Ensuring financial discipline and transparency has been central to my role. By carefully managing resources, we have been able to provide modern infrastructure, advanced learning facilities, and opportunities that enrich both students and faculty. Every investment has been guided by the principle of strengthening our academic standards while preserving the moral fabric of our community.
                                </p>
                                <p>
                                    I take pride in the fact that our college has flourished into a trusted center of excellence, where students are nurtured to become professionals with integrity and compassion. Together with our management, faculty, and students, I remain committed to upholding the ideals that define Jagan’s College of Pharmacy and to ensuring its continued success for generations to come.
                                </p>
                            </div>

                            <div className={styles.signOff}>
                                <p className={styles.signName}>Smt S.Mamatha</p>
                                <p className={styles.signTitle}>Treasurer &amp; Director, Jagan&apos;s Educational Society</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================================
            SECTION 3: EXECUTIVE COUNCIL OF THE SOCIETY (7 MEMBERS)
           ========================================================================= */}


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