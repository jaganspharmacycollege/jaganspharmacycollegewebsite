'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Sparkles,
    ArrowLeft,
    CheckCircle2,
    BookOpen,
    FlaskConical,
    Clock,
    ShieldCheck,
} from 'lucide-react';
import styles from './History.module.css';

interface Milestone {
    year: string;
    title: string;
    desc: string;
}

const MILESTONES_DATA: Milestone[] = [
    {
        year: '2006',
        title: 'Establishment & Foundation',
        desc: 'Founded under the management of M.S. Reddy Educational Society under the visionary leadership of Sri S.V. Madhusudhan Reddy[cite: 6]. Approved by AICTE and Pharmacy Council of India (PCI), New Delhi, and affiliated to Jawaharlal Nehru Technological University, Anantapur (JNTUA), launching B.Pharmacy with an approved intake of 100 students on a 2.5-acre campus in Jangalakandriga Village, Muthukuru Mandal.',
    },
    {
        year: '2010',
        title: 'Postgraduate M.Pharmacy Specializations',
        desc: 'Expanded into postgraduate studies by introducing M.Pharmacy courses across four core research disciplines: Pharmaceutics, Pharmaceutical Analysis, Pharmacology, and Pharmaceutical Chemistry, each approved with an intake of 15 seats per specialization.',
    },
    {
        year: '2012',
        title: 'Doctor of Pharmacy (Pharm.D) Approval',
        desc: 'Obtained official Pharmacy Council of India (PCI) approval to commence the premier 6-year clinical Doctor of Pharmacy (Pharm.D) program to foster hospital bedside healthcare training.',
    },
    {
        year: '2016',
        title: 'Medicover Hospital Clinical Training MoU',
        desc: 'Forged a formal clinical partnership with Medicover Hospital for Pharm.D students, enabling regular hospital ward rounds, prescription reviews, pharmacotherapy monitoring, and direct healthcare practice exposure.',
    },
    {
        year: '2020',
        title: 'Built-Up Infrastructure Expansion to ~70,000 Sq. Ft.',
        desc: 'Expanded built-up area from 20,000 sq. ft. in 2006 to approximately 70,000 sq. ft., housing 20+ classrooms, 2 smart classrooms, 24 well-equipped laboratories meeting PCI standards, research animal house, and a 100+ medicinal plant herbal garden.',
    },
    {
        year: '2026',
        title: 'Two Decades of Academic Excellence',
        desc: 'Celebrating 20 years of continuous service in pharmaceutical education, supported by active MoUs with pharmaceutical industries for placements, extensive library holdings of 8,000+ volumes, and full campus hostel and transport facilities.',
    },
];

export default function HistoryPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.inView);
                    } else {
                        entry.target.classList.remove(styles.inView);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        const animatedElements = containerRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
        animatedElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main ref={containerRef} className={styles.pageWrapper}>
            <div className={styles.bgGlowTop} />

            <div className={styles.container}>
                {/* Navigation Breadcrumb */}
                <div className={`${styles.breadcrumbNav} ${styles.animateOnScroll}`}>
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>Return to Home</span>
                    </Link>
                </div>

                {/* 1. Asymmetrical Editorial Header */}
                <section className={styles.editorialHero}>
                    <div className={`${styles.heroLeft} ${styles.animateOnScroll}`}>
                        <span className={styles.tagPill}>
                            <Sparkles size={13} />
                            <span>Established 2006 &bull; Nellore</span>
                        </span>
                        <h1 className={styles.heroTitle}>Jagan’s College of Pharmacy</h1>
                        <p className={styles.heroSubtitle}>
                            Founded under the management of M.S. Reddy Educational Society and guided by the vision and leadership of Sri S.V. Madhusudhan Reddy. Approved by AICTE and Pharmacy Council of India (PCI), New Delhi, and affiliated to Jawaharlal Nehru Technological University, Anantapur (JNTUA).
                        </p>
                    </div>

                    <div className={`${styles.heroRightCallout} ${styles.animateOnScroll}`}>
                        <div className={styles.calloutStat}>
                            <span className={styles.statNumber}>70,000</span>
                            <span className={styles.statLabel}>Sq. Ft. Built-Up Area </span>
                        </div>
                        <p className={styles.calloutText}>
                            Set across 2.5 acres in a serene environment in Jangalakandriga (Village), Muthukuru (Mandal), SPSR Nellore District, expanded from 20,000 sq. ft. in 2006 into a modern pharmaceutical center.
                        </p>
                    </div>
                </section>

                {/* 2. Bento Grid */}
                <section className={styles.bentoSection}>
                    <div className={styles.bentoGrid}>
                        <div className={`${styles.bentoLargeCard} ${styles.animateOnScroll}`}>
                            <div className={styles.bentoLargeBg}>
                                <Image
                                    src="/assets/logo/group.png"
                                    alt="Jagan's College of Pharmacy Campus"
                                    fill
                                    sizes="(max-width: 860px) 100vw, 60vw"
                                    className={styles.bentoLargeImg}
                                    priority
                                />
                            </div>
                            <div className={styles.bentoOverlay} />
                            <div className={styles.bentoLargeContent}>
                                <span className={styles.bentoTag}>Leadership & Vision</span>
                                <h2 className={styles.bentoTitle}>M.S. Reddy Educational Society</h2>
                                <p className={styles.bentoDesc}>
                                    Under Sri S.V. Madhusudhan Reddy, the institution delivers quality education aligned with global standards, modern scientific facilities, and industry collaborations for training and placements.
                                </p>
                            </div>
                        </div>

                        <div className={styles.bentoSideStack}>
                            <div className={`${styles.bentoSmallCard} ${styles.animateOnScroll}`}>
                                <div>
                                    <div className={styles.cardIconWrap}>
                                        <FlaskConical size={22} />
                                    </div>
                                    <h3 className={styles.cardTitle}>24 Well-Equipped Laboratories</h3>
                                    <p className={styles.cardDesc}>
                                        Laboratories meeting PCI standards, supporting 20+ classrooms including 2 smart classrooms, seminar hall, and animal house for research activities.
                                    </p>
                                </div>
                            </div>

                            <div className={`${styles.bentoSmallCard} ${styles.animateOnScroll}`}>
                                <div>
                                    <div className={styles.cardIconWrap}>
                                        <BookOpen size={22} />
                                    </div>
                                    <h3 className={styles.cardTitle}>8,000+ Physical Volumes</h3>
                                    <p className={styles.cardDesc}>
                                        A vast library with extensive digital resources, academic journals, and study reference literature for undergraduate, postgraduate, and doctoral scholars.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Narrative Spreads */}
                <section className={styles.narrativeSection}>
                    <div className={`${styles.sectionHeadingBlock} ${styles.animateOnScroll}`}>
                        <span className={styles.sectionEyebrow}>Collaborations & Infrastructure</span>
                        <h2 className={styles.sectionTitle}>Academic Programs & Clinical Tie-Ups</h2>
                    </div>

                    <div className={`${styles.spreadRow} ${styles.animateOnScroll}`}>
                        <div className={styles.spreadMedia}>
                            <Image
                                src="/assets/courses/pharmd4.png"
                                alt="Medicover Hospital Clinical Training"
                                fill
                                sizes="(max-width: 860px) 100vw, 50vw"
                                className={styles.spreadImg}
                            />
                            <span className={styles.mediaBadge}>
                                <Clock size={13} />
                                <span>Medicover Hospital Partnership</span>
                            </span>
                        </div>
                        <div className={styles.spreadContent}>
                            <span className={styles.chapterIndex}>Clinical Healthcare Exposure</span>
                            <h3 className={styles.chapterTitle}>Doctor of Pharmacy (Pharm.D)</h3>
                            <p className={styles.chapterDesc}>
                                Approved by PCI, New Delhi, since 2012, our Pharm.D doctoral program features a clinical training partnership with Medicover Hospital, ensuring student exposure to real-world healthcare practices and inpatient ward rounds.
                            </p>
                            <div className={styles.keyPointsList}>
                                <div className={styles.pointItem}>
                                    <CheckCircle2 size={16} className={styles.pointBullet} />
                                    <span>Clinical training partnership with Medicover Hospital for hospital rounds.</span>
                                </div>
                                <div className={styles.pointItem}>
                                    <CheckCircle2 size={16} className={styles.pointBullet} />
                                    <span>MoUs with pharmaceutical industries and technical laboratories for hands-on training.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.spreadRow} ${styles.spreadRowReverse} ${styles.animateOnScroll}`}>
                        <div className={styles.spreadMedia}>
                            <Image
                                src="/assets/Infra/Herbal_1.png"
                                alt="Medicinal Herbal Garden"
                                fill
                                priority
                                sizes="(max-width: 860px) 100vw, 50vw"
                                className={styles.spreadImg}
                            />
                            <span className={styles.mediaBadge}>
                                <ShieldCheck size={13} />
                                <span>100+ Medicinal Plants</span>
                            </span>
                        </div>
                        <div className={styles.spreadContent}>
                            <span className={styles.chapterIndex}>Holistic Campus Amenities</span>
                            <h3 className={styles.chapterTitle}>Herbal Garden, Research Facilities & Living</h3>
                            <p className={styles.chapterDesc}>
                                The 2.5-acre campus includes an herbal garden with 100+ medicinal plants, an animal house for research activities, sports and games facilities for holistic development, and separate hostel facilities for boys and girls within the campus.
                            </p>
                            <div className={styles.keyPointsList}>
                                <div className={styles.pointItem}>
                                    <CheckCircle2 size={16} className={styles.pointBullet} />
                                    <span>Transportation facility directly connecting Nellore to the college campus.</span>
                                </div>
                                <div className={styles.pointItem}>
                                    <CheckCircle2 size={16} className={styles.pointBullet} />
                                    <span>Dedicated canteen for day-scholars, seminar hall for academic events, and hostel amenities.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Chronology Spine */}
                <section className={`${styles.chronologySection} ${styles.animateOnScroll}`}>
                    <div className={styles.chronologyHeader}>
                        <span className={styles.sectionEyebrow}>Legacy of Excellence</span>
                        <h2 className={styles.sectionTitle}>Key Institutional Milestones</h2>
                    </div>

                    <div className={styles.milestoneTrack}>
                        {MILESTONES_DATA.map((item) => (
                            <div key={item.year} className={styles.milestoneRow}>
                                <div className={styles.yearNode} />
                                <span className={styles.yearLabel}>{item.year}</span>
                                <div className={styles.milestoneBody}>
                                    <h3 className={styles.milestoneRowTitle}>{item.title}</h3>
                                    <p className={styles.milestoneRowDesc}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}