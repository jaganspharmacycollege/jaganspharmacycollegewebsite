'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    Calendar,
    Award,
    Building,
    GraduationCap,
    TrendingUp,
    ArrowLeft,
    CheckCircle2,
    Clock,
} from 'lucide-react';
import styles from './History.module.css';

const milestones = [
    {
        year: '2007',
        title: "Foundation of Jagan's Educational Society",
        desc: 'Founded by visionary educator Sri J. V. Subba Rao and co-founder Smt. J. Pushpalatha with an ambition to make top-tier pharmaceutical training accessible in Nellore.',
    },
    {
        year: '2008',
        title: 'Official Establishment of JCP & B.Pharm Launch',
        desc: "Jagan's College of Pharmacy was formally inaugurated on August 15, 2008, with PCI and AICTE approvals, affiliated to JNTUA, launching the foundational 4-year B. Pharm degree.",
    },
    {
        year: '2011',
        title: 'Expansion into Postgraduate Studies (M.Pharm)',
        desc: 'Introduced M. Pharm in Pharmaceutics and Pharmaceutical Analysis to foster drug formulation and chromatographic instrumentation research.',
    },
    {
        year: '2014',
        title: 'Pharmacology & Chemistry Additions',
        desc: 'Commissioned specialized CPCSEA-standard preclinical animal testing facilities and synthesis laboratories for Pharmacology and Pharmaceutical Chemistry specializations.',
    },
    {
        year: '2017',
        title: 'Doctor of Pharmacy (Pharm.D) Introduction',
        desc: 'Pioneered the 6-year clinical Pharm.D program in collaboration with regional multi-specialty teaching hospitals for inpatient ward rounds.',
    },
    {
        year: '2026',
        title: 'A Legacy of Excellence in Healthcare',
        desc: 'Over 2,800+ graduated pharmacists and 2,250+ placed across multinational pharmaceutical corporations, regulatory bodies, and clinical healthcare systems globally.',
    },
];

const stats = [
    { label: 'Graduated Pharmacists', value: '2,800+', icon: GraduationCap },
    { label: 'Campus Placements', value: '2,250+', icon: TrendingUp },
    { label: 'Specialized Departments', value: '5 Core', icon: Building },
    { label: 'Years of Academic Legacy', value: '18+ Yrs', icon: Award },
];

export default function HistoryPage() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.08 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    // Safe parallax lerp hook guarded against unmount race conditions
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
                        <span>Our Founding Journey</span>
                    </div>
                    <h1 className={styles.title}>History of Jagan&apos;s College of Pharmacy</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        From a humble foundation in Jangalakandriga, Nellore to becoming a premier center for
                        pharmaceutical innovation and healthcare education affiliated with JNTUA and approved by PCI.
                    </p>
                </div>

                {/* Highlight Stats Row */}
                <div className={`${styles.statsGrid} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div key={idx} className={styles.statCard}>
                                <div className={styles.statIconBox}>
                                    <Icon size={24} />
                                </div>
                                <div className={styles.statData}>
                                    <h3 className={styles.statValue}>{stat.value}</h3>
                                    <p className={styles.statLabel}>{stat.label}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Founders Card: Balanced 2-Column with Archival Imagery & Seal */}
                <div className={`${styles.foundersCard} ${isVisible ? styles.animateReveal3 : styles.hiddenState}`}>
                    <div className={styles.foundersGrid}>
                        <div className={styles.foundersContent}>
                            <span className={styles.foundersTag}>Foundational Visionaries</span>
                            <h2 className={styles.foundersHeading}>The Spark Behind the Institution</h2>
                            <p className={styles.foundersText}>
                                In 2007, <strong>Sri J. V. Subba Rao</strong> (Founder Chairman) together with <strong>Smt. J. Pushpalatha</strong> (Co-Founder)
                                recognized the acute demand for skilled clinical and formulation pharmacists in coastal Andhra Pradesh.
                                Driven by the motto of empowering youth through scientific education, they laid the foundation stone on
                                <strong> August 15, 2008</strong>.
                            </p>
                            <div className={styles.founderPills}>
                                <div className={styles.pillItem}>
                                    <CheckCircle2 size={15} className={styles.checkIcon} />
                                    <span>Founder: Sri J. V. Subba Rao</span>
                                </div>
                                <div className={styles.pillItem}>
                                    <CheckCircle2 size={15} className={styles.checkIcon} />
                                    <span>Co-Founder: Smt. J. Pushpalatha</span>
                                </div>
                                <div className={styles.pillItem}>
                                    <CheckCircle2 size={15} className={styles.checkIcon} />
                                    <span>Inaugurated: August 15, 2008</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Visual Media Column */}
                        <div className={styles.foundersVisualWrapper}>
                            <div className={styles.imageFrame}>
                                <img
                                    src="/assets/HomePageImages/WCU.png"
                                    alt="Laboratory and research facility foundation"
                                    className={styles.foundersImg}
                                />
                                <div className={styles.imageScrim} />
                                <div className={styles.imageBadge}>
                                    <Clock size={13} />
                                    <span>Established 2008 &bull; Nellore, AP</span>
                                </div>
                            </div>

                            <div className={styles.foundingSealCard}>
                                <div className={styles.sealHeader}>
                                    <div className={styles.sealIconWrap}>
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <h4 className={styles.sealTitle}>18+ Years of Service</h4>
                                        <span className={styles.sealSub}>PCI Approved &bull; JNTUA Affiliated</span>
                                    </div>
                                </div>
                                <p className={styles.sealQuote}>
                                    &ldquo;To nurture compassionate pharmacy practitioners and pioneering researchers who serve humanity with ethics and excellence.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Evolution Timeline */}
                <div className={styles.timelineSection}>
                    <div className={`${styles.timelineHeader} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                        <span className={styles.innerEyebrow}>Institutional Milestones</span>
                        <h2 className={styles.innerTitle}>Evolution of Academic Departments</h2>
                    </div>

                    <div className={styles.timelineList}>
                        {milestones.map((item, idx) => (
                            <div
                                key={idx}
                                className={`${styles.timelineItem} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}
                            >
                                <div className={styles.timelineYearBadge}>
                                    <Calendar size={14} />
                                    <span>{item.year}</span>
                                </div>
                                <div className={styles.timelineCard}>
                                    <h3 className={styles.milestoneTitle}>{item.title}</h3>
                                    <p className={styles.milestoneDesc}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}