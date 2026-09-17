'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    ArrowLeft,
    GraduationCap,
    Award,
    BookOpen,
    Phone,
    Mail,
    Quote,
    ShieldCheck,
    Building,
    Target,
    CheckCircle2,
} from 'lucide-react';
import styles from './PrincipalDesk.module.css';

const strategicPillars = [
    {
        icon: Target,
        title: 'Outcome-Based Pedagogy',
        desc: 'Aligning curriculum modules strictly with Pharmacy Council of India (PCI) standards and JNTUA university norms to empower clinical and industrial excellence.',
    },
    {
        icon: ShieldCheck,
        title: 'Bench-to-Bedside Research',
        desc: 'Fostering interdisciplinary research dissertations, high-performance analytical labs, and live hospital clinical rotations for translational healthcare outcomes.',
    },
    {
        icon: Building,
        title: 'Industry & Hospital Linkages',
        desc: 'Deepening industry MoUs with multinational pharmaceutical formulation units and tertiary teaching hospitals for guaranteed internships and career placement.',
    },
];

export default function PrincipalDeskPage() {
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
            { threshold: 0.08 }
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
                        <span>Executive Leadership Address</span>
                    </div>
                    <h1 className={styles.title}>From the Principal&apos;s Desk</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Guiding future pharmacists with transformative pedagogy, laboratory research rigor, and clinical
                        compassion at Jagan&apos;s College of Pharmacy, Jangalakandriga, Nellore.
                    </p>
                </div>

                {/* 2-Column Showcase: Profile Card on Left, Message on Right */}
                <div className={styles.showcaseGrid}>
                    {/* Principal Square Profile Card */}
                    <div className={`${styles.profileCard} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                        <div className={styles.squareImageContainer}>
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                                alt="Dr. S. Radha Krishna, Principal"
                                className={styles.squareImage}
                            />
                            <div className={styles.roleBadge}>Principal &amp; Professor</div>
                            <div className={styles.imageOverlay} />
                        </div>

                        <div className={styles.profileBody}>
                            <span className={styles.subRoleTag}>Academic &amp; Regulatory Head</span>
                            <h2 className={styles.principalName}>Dr. S. Radha Krishna</h2>
                            <p className={styles.qualification}>M.Pharm, Ph.D, FIC, FAGE</p>

                            <div className={styles.expPill}>
                                <Award size={13} className={styles.awardIcon} />
                                <span>22+ Years in Pharmaceutical Academics &amp; R&amp;D</span>
                            </div>

                            <div className={styles.credentialsBlock}>
                                <div className={styles.credRow}>
                                    <CheckCircle2 size={14} className={styles.checkIcon} />
                                    <span>JNTUA Academic Senator &amp; Board Member</span>
                                </div>
                                <div className={styles.credRow}>
                                    <CheckCircle2 size={14} className={styles.checkIcon} />
                                    <span>35+ Scopus / WoS Indexed Research Publications</span>
                                </div>
                                <div className={styles.credRow}>
                                    <CheckCircle2 size={14} className={styles.checkIcon} />
                                    <span>Doctoral Research Supervisor (8 Ph.D. Awarded)</span>
                                </div>
                            </div>

                            <div className={styles.contactGroup}>
                                <a href="tel:+919989000447" className={styles.contactLink}>
                                    <div className={styles.iconCircle}>
                                        <Phone size={13} />
                                    </div>
                                    <span>+91 99890 00447 / +91 76800 77726</span>
                                </a>
                                <a href="mailto:principal.jcp@gmail.com" className={styles.contactLink}>
                                    <div className={styles.iconCircle}>
                                        <Mail size={13} />
                                    </div>
                                    <span>principal.jcp@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Message & Vision Card */}
                    <div className={`${styles.messageCard} ${isVisible ? styles.animateReveal3 : styles.hiddenState}`}>
                        <div className={styles.quoteIconWrap}>
                            <Quote size={28} />
                        </div>

                        <h3 className={styles.messageGreeting}>Dear Students, Aspirants, and Esteemed Stakeholders,</h3>

                        <div className={styles.messageText}>
                            <p>
                                It gives me immense pleasure to welcome you to <strong>Jagan&apos;s College of Pharmacy</strong>, an
                                institution established with a resolute commitment to deliver high-quality pharmaceutical and healthcare
                                education in coastal Andhra Pradesh.
                            </p>
                            <p>
                                The field of pharmacy has evolved dynamically from traditional dispensing into an indispensable pillar of
                                evidence-based clinical healthcare, high-end formulation technology, molecular drug discovery, and global
                                regulatory compliance. At JCP, our academic architecture is purposely modeled to bridge theoretical insight
                                with practical industry readiness.
                            </p>
                            <p>
                                Our students are mentored in state-of-the-art laboratories equipped with modern HPLC, FTIR, and dissolution
                                profiling systems, alongside dedicated preclinical CPCSEA-compliant facilities. Through our six-year clinical
                                Pharm.D program and hospital affiliations, scholars participate in direct patient bedside rounds, gaining
                                firsthand competencies in adverse drug reaction monitoring, therapeutic optimization, and clinical pharmacokinetics.
                            </p>
                            <p>
                                Beyond academics, we place paramount focus on ethics, professional integrity, and continuous student welfare.
                                With our active training pipelines, our graduates are regularly recruited by leading multinational pharmaceutical
                                corporations and tertiary medical centers across India and overseas.
                            </p>
                            <p>
                                I invite you to embark on this enriching journey with us to innovate, discover, and lead with compassion.
                            </p>
                        </div>

                        <div className={styles.signOffBlock}>
                            <div className={styles.signatureLine}>Warm regards &amp; best wishes,</div>
                            <div className={styles.signName}>Dr. S. Radha Krishna</div>
                            <div className={styles.signTitle}>Principal, Jagan&apos;s College of Pharmacy</div>
                            <div className={styles.signAffil}>Approved by PCI, New Delhi &bull; Affiliated to JNTUA, Anantapur</div>
                        </div>
                    </div>
                </div>

                {/* Institutional Pillars Under Principal's Guidance */}
                <div className={`${styles.pillarsSection} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                    <div className={styles.pillarsHeader}>
                        <span className={styles.pillarEyebrow}>Core Principles</span>
                        <h2 className={styles.pillarHeading}>Our Directional Benchmarks</h2>
                    </div>

                    <div className={styles.pillarsGrid}>
                        {strategicPillars.map((pillar, idx) => {
                            const Icon = pillar.icon;
                            return (
                                <div key={idx} className={styles.pillarCard}>
                                    <div className={styles.pillarIconBox}>
                                        <Icon size={22} />
                                    </div>
                                    <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}