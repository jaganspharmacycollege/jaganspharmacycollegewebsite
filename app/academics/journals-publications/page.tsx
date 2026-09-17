'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    ArrowLeft,
    BookOpen,
    FileText,
    ExternalLink,
    Award,
    Layers,
} from 'lucide-react';
import styles from './JournalsPublications.module.css';

const pubStats = [
    { label: 'Scopus / Web of Science Papers', value: '185+', icon: BookOpen },
    { label: 'Cumulative Citations', value: '1,420+', icon: Award },
    { label: 'Average Impact Factor', value: '3.85', icon: Layers },
    { label: 'Published Textbooks & Chapters', value: '26', icon: FileText },
];

const publications = [
    {
        title: 'Formulation and In-Vitro Characterization of Nanostructured Lipid Carriers for Enhanced Oral Bioavailability of Glimepiride',
        authors: 'Dr. S. Radha Krishna, Dr. K. Srinivas Rao, et al.',
        journal: 'International Journal of Pharmaceutics (Elsevier)',
        impactFactor: 'IF: 5.8',
        indexing: 'Scopus / WoS Q1',
        year: '2026',
        doi: '10.1016/j.ijpharm.2026.122841',
    },
    {
        title: 'Neuroprotective Efficacy of Flavonoid-Rich Fractions Against Rotenone-Induced Parkinsonian Neurodegeneration in Murine Models',
        authors: 'Dr. G. Lakshmi Narayana, M. Tharun Kumar, et al.',
        journal: 'Phytomedicine & Pharmacotherapy (Springer Nature)',
        impactFactor: 'IF: 6.2',
        indexing: 'Scopus Q1',
        year: '2025',
        doi: '10.1007/s11418-025-01824-x',
    },
    {
        title: 'Development and Validation of a Stability-Indicating RP-HPLC Method for Simultaneous Estimation of Remogliflozin and Vildagliptin',
        authors: 'Dr. N. Hema Latha, Prof. B. Sudhakar',
        journal: 'Journal of Chromatographic Science (Oxford Academic)',
        impactFactor: 'IF: 2.1',
        indexing: 'Scopus / PubMed',
        year: '2025',
        doi: '10.1093/chromsci/bmad088',
    },
    {
        title: 'Impact of Clinical Pharmacist Interventions on Medication Adherence and Glycemic Control in Rural Diabetic Outpatients',
        authors: 'Dr. P. Madhavi Latha, Dr. Sneha Chandran, K. Sai Akhil',
        journal: 'Journal of Patient Safety & Clinical Pharmacy',
        impactFactor: 'IF: 2.9',
        indexing: 'PubMed / Web of Science',
        year: '2024',
        doi: '10.1016/j.clinphar.2024.100912',
    },
    {
        title: 'Green Synthesis, Molecular Docking and Antimicrobial Evaluation of Novel 1,2,3-Triazole Linked Pyrazole Derivatives',
        authors: 'Dr. P. Madhusudhan Rao, Mrs. M. Vani',
        journal: 'Journal of Molecular Structure (Elsevier)',
        impactFactor: 'IF: 3.8',
        indexing: 'Scopus / WoS',
        year: '2025',
        doi: '10.1016/j.molstruc.2025.138402',
    },
    {
        title: 'Gastroretentive Bilayer Floating Tablets of Cefuroxime Axetil: Design, Optimization and Pharmacokinetic Study',
        authors: 'Dr. C. Venkatesh, Ch. Divya Teja',
        journal: 'Drug Delivery Letters (Bentham Science)',
        impactFactor: 'IF: 2.4',
        indexing: 'Scopus Indexed',
        year: '2024',
        doi: '10.2174/2210303114666240215112233',
    },
];

export default function JournalsPublicationsPage() {
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
                <div className={`${styles.backNav} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>Return to Home</span>
                    </Link>
                </div>

                <div className={`${styles.header} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Peer-Reviewed Literature &amp; Research Output</span>
                    </div>
                    <h1 className={styles.title}>Journals &amp; Publications</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our faculty and research scholars publish in leading Scopus, Web of Science, and PubMed indexed
                        journals across formulation chemistry, clinical pharmacotherapy, and molecular toxicology.
                    </p>
                </div>

                {/* Stats Row */}
                <div className={`${styles.statsGrid} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                    {pubStats.map((s, idx) => {
                        const Icon = s.icon;
                        return (
                            <div key={idx} className={styles.statCard}>
                                <div className={styles.statIconBox}>
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h3 className={styles.statValue}>{s.value}</h3>
                                    <p className={styles.statLabel}>{s.label}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Publication Cards */}
                <div className={`${styles.pubList} ${isVisible ? styles.animateReveal3 : styles.hiddenState}`}>
                    {publications.map((p, idx) => (
                        <div key={idx} className={styles.pubCard}>
                            <div className={styles.pubMetaHeader}>
                                <div className={styles.pillGroup}>
                                    <span className={styles.indexingPill}>{p.indexing}</span>
                                    <span className={styles.impactPill}>{p.impactFactor}</span>
                                </div>
                                <span className={styles.yearText}>{p.year}</span>
                            </div>
                            <h3 className={styles.pubTitle}>{p.title}</h3>
                            <p className={styles.authors}>
                                Authors: <strong>{p.authors}</strong>
                            </p>
                            <p className={styles.journalName}>{p.journal}</p>
                            <div className={styles.doiBar}>
                                <span className={styles.doiLabel}>DOI: {p.doi}</span>
                                <span className={styles.extLinkBtn}>
                                    <span>Digital Library Access</span>
                                    <ExternalLink size={13} />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}