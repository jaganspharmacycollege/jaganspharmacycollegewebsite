'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    ShieldCheck,
    Building2,
    GraduationCap,
    Phone,
    Mail,
    ArrowLeft,
    Briefcase,
} from 'lucide-react';
import styles from './Management.module.css';

interface Leader {
    id: string;
    name: string;
    role: string;
    subRole: string;
    qualification: string;
    experience: string;
    image: string;
    phone: string;
    email: string;
    bio: string;
}

interface ManagementRow {
    rowTitle: string;
    rowTag: string;
    members: Leader[];
}

const managementRows: ManagementRow[] = [
    {
        rowTitle: 'Executive Board',
        rowTag: 'Tier 01',
        members: [
            {
                id: 'chairman',
                name: 'Sri J. V. Subba Rao',
                role: 'Chairman',
                subRole: 'Jagan’s Educational Society',
                qualification: 'M.A., Philanthropist & Edu-Visionary',
                experience: '25+ Years in Educational Governance',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
                phone: '+91 76800 77726',
                email: 'chairman@jaganspharmacy.edu.in',
                bio: 'Pioneered top-tier pharmaceutical training in rural Nellore. Guides institutional strategic expansion, global university partnerships, and capital infrastructure investments to nurture future healthcare innovators.',
            },
            {
                id: 'vice-chairman',
                name: 'Sri J. Tarun Kumar',
                role: 'Vice Chairman',
                subRole: 'Executive Operations & Innovations',
                qualification: 'M.Tech, MBA (UK)',
                experience: '12+ Years in Strategic Administration',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
                phone: '+91 76800 77733',
                email: 'vicechairman@jaganspharmacy.edu.in',
                bio: 'Directs digital campus integration, entrepreneurship incubator programs, cutting-edge laboratory instrumentation procurement, and student innovation seed grants.',
            },
        ],
    },
    {
        rowTitle: 'Collegiate Administration',
        rowTag: 'Tier 02',
        members: [
            {
                id: 'principal',
                name: 'Dr. S. Radha Krishna',
                role: 'Principal',
                subRole: 'Academic & Regulatory Head',
                qualification: 'M.Pharm, Ph.D, FIC, FAGE',
                experience: '22+ Years in Pharmaceutical Academics & R&D',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
                phone: '+91 99890 00447',
                email: 'principal.jcp@gmail.com',
                bio: 'Oversees statutory accreditations (PCI, AICTE, JNTUA), faculty development initiatives, collaborative multi-specialty clinical training, and outcome-based curriculum standards.',
            },
            {
                id: 'vice-principal',
                name: 'Dr. C. Venkatesh',
                role: 'Vice Principal',
                subRole: 'Dean of Student Welfare & Placements',
                qualification: 'M.Pharm (Pharmaceutics), Ph.D',
                experience: '18+ Years in Teaching & Industrial Liaison',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
                phone: '+91 94402 78901',
                email: 'viceprincipal@jaganspharmacy.edu.in',
                bio: 'Supervises corporate placement pipelines, cGMP industrial plant internships, student discipline, campus vigilance cells, and annual academic cultural festivals.',
            },
        ],
    },
    {
        rowTitle: 'Governance & Academic Research',
        rowTag: 'Tier 03',
        members: [
            {
                id: 'secretary',
                name: 'Smt. J. Pushpalatha',
                role: 'Secretary & Correspondent',
                subRole: 'Institutional Welfare & Administration',
                qualification: 'B.Ed, M.A.',
                experience: '18+ Years in Academic Administration',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
                phone: '+91 76800 77744',
                email: 'secretary@jaganspharmacy.edu.in',
                bio: 'Manages institution welfare policies, inclusive campus support services, community medical outreach campaigns, student merit scholarships, and women empowerment councils.',
            },
            {
                id: 'dean-academics',
                name: 'Dr. G. Lakshmi Narayana',
                role: 'Dean of Academics & R&D',
                subRole: 'Research Cell & Curriculum Oversight',
                qualification: 'M.Pharm (Pharmacology), Ph.D',
                experience: '16+ Years in Laboratory Research & Mentorship',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
                phone: '+91 98481 90123',
                email: 'academics.dean@jaganspharmacy.edu.in',
                bio: 'Directs postgraduate research dissertations, CPCSEA compliant animal housing facilities, extramural funded research grants, and high-impact Scopus indexed publications.',
            },
        ],
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
                if (isMounted && entry) {
                    setIsVisible(entry.isIntersecting);
                }
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            isMounted = false;
            observer.disconnect();
        };
    }, []);

    // Safe Parallax RAF Loop with unmount protection
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
            {/* Ambient Parallax Radial Depth Glows */}
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
                        <span>Institutional Governance</span>
                    </div>
                    <h1 className={styles.title}>Management &amp; Leadership</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our governing body pairs transformative visionary governance with academic excellence,
                        guiding Jagan&apos;s College of Pharmacy toward world-class standards in healthcare pedagogy
                        and clinical pharmaceutical research.
                    </p>
                </div>

                {/* How Governance Structure Operates */}
                <div className={`${styles.governanceCard} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                    <div className={styles.govTop}>
                        <span className={styles.govSubtitle}>Administrative Ecosystem</span>
                        <h2 className={styles.govTitle}>How Our Governing Structure Works</h2>
                        <p className={styles.govIntro}>
                            Our management framework functions through structured collaboration across the Trust Council,
                            Academic Operations, and Industry-Hospital linkages.
                        </p>
                    </div>

                    <div className={styles.govGrid}>
                        <div className={styles.govItem}>
                            <div className={styles.govIconBox}>
                                <ShieldCheck size={22} />
                            </div>
                            <h3 className={styles.govItemTitle}>1. Trust Board Governance</h3>
                            <p className={styles.govItemDesc}>
                                Headed by the Chairman and Secretary, establishing capital funding, campus infrastructure,
                                staff appointments, and philanthropic scholarships.
                            </p>
                        </div>

                        <div className={styles.govItem}>
                            <div className={styles.govIconBox}>
                                <GraduationCap size={22} />
                            </div>
                            <h3 className={styles.govItemTitle}>2. Academic &amp; Regulatory Council</h3>
                            <p className={styles.govItemDesc}>
                                Led by the Principal and Vice Principal, executing university-aligned curricula, PCI/AICTE statutory
                                compliance, and internal quality audits.
                            </p>
                        </div>

                        <div className={styles.govItem}>
                            <div className={styles.govIconBox}>
                                <Building2 size={22} />
                            </div>
                            <h3 className={styles.govItemTitle}>3. Research &amp; Clinical Ties</h3>
                            <p className={styles.govItemDesc}>
                                Coordinated with teaching hospitals and formulation plants for clinical rounds, patent registrations,
                                and dedicated corporate placements.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3 Explicit Rows: Row 1, Row 2, Row 3 */}
                <div className={styles.tiersContainer}>
                    {managementRows.map((row) => (
                        <div key={row.rowTag} className={styles.tierSection}>
                            {/* Row Subheader */}
                            <div className={`${styles.tierHeader} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                                <div className={styles.tierHeaderLeft}>
                                    <span className={styles.tierBadge}>{row.rowTag}</span>
                                    <h3 className={styles.tierTitleText}>{row.rowTitle}</h3>
                                </div>
                                <div className={styles.tierDividerLine} />
                            </div>

                            {/* 2 Square-Proportioned Cards Per Row */}
                            <div className={styles.twoColumnSquareGrid}>
                                {row.members.map((member) => (
                                    <div
                                        key={member.id}
                                        className={`${styles.squareCard} ${isVisible ? styles.animateReveal3 : styles.hiddenState}`}
                                    >
                                        {/* Left: Square Member Photo Container */}
                                        <div className={styles.squareImageContainer}>
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className={styles.squareImage}
                                            />
                                            <div className={styles.rolePillBadge}>{member.role}</div>
                                            <div className={styles.imageOverlayGradient} />
                                        </div>

                                        {/* Right: Content Panel Filling Height Seamlessly */}
                                        <div className={styles.cardInfoPanel}>
                                            <div className={styles.topMeta}>
                                                <span className={styles.subRoleTag}>{member.subRole}</span>
                                                <h4 className={styles.leaderName}>{member.name}</h4>
                                                <p className={styles.qualification}>{member.qualification}</p>

                                                <div className={styles.experienceBadge}>
                                                    <Briefcase size={12} className={styles.briefcaseIcon} />
                                                    <span>{member.experience}</span>
                                                </div>

                                                <p className={styles.bioText}>{member.bio}</p>
                                            </div>

                                            {/* Direct Contacts Anchor */}
                                            <div className={styles.contactFooter}>
                                                <a
                                                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                                                    className={styles.contactLink}
                                                    aria-label={`Call ${member.name}`}
                                                >
                                                    <div className={styles.contactIconWrap}>
                                                        <Phone size={13} />
                                                    </div>
                                                    <span>{member.phone}</span>
                                                </a>
                                                <a
                                                    href={`mailto:${member.email}`}
                                                    className={styles.contactLink}
                                                    aria-label={`Email ${member.name}`}
                                                >
                                                    <div className={styles.contactIconWrap}>
                                                        <Mail size={13} />
                                                    </div>
                                                    <span>{member.email}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}