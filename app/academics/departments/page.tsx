'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
    Sparkles,
    Building2,
    FlaskConical,
    BookOpen,
    Microscope,
    Briefcase,
    CheckCircle2,
} from 'lucide-react';
import styles from './Departments.module.css';

interface DepartmentDetails {
    id: string;
    title: string;
    tagline: string;
    overview: string;
    labs: string[];
    equipment: string[];
    researchAreas: string[];
    careerScopes: string[];
}

const departmentsData: DepartmentDetails[] = [
    {
        id: 'pharmaceutics',
        title: 'Department of Pharmaceutics',
        tagline: 'Formulation Design, Novel Drug Delivery & Industrial Technology',
        overview:
            'The Department of Pharmaceutics focuses on turning active pharmaceutical ingredients (APIs) into safe, stable, and bioavailable dosage forms. Instruction spans classical solid or liquid dosage production, pre-formulation screening, pilot plant scale-up, biopharmaceutics, pharmacokinetics, and advanced targeted nano-drug delivery systems (NDDS).',
        labs: [
            'Formulation Technology Laboratory',
            'Pilot Plant & Industrial Scale-Up Center',
            'Physical Pharmacy & Dispersed Systems Lab',
            'Biopharmaceutics & Pharmacokinetics Evaluation Lab',
        ],
        equipment: [
            '16-Station Rotary Tablet Compression Press',
            'Automated Dissolution Test Apparatus (USP I & II)',
            'High-Speed Homogenizers & Probe Sonicator',
            'Lyophilizer (Freeze Dryer) & Fluid Bed Processor',
            'Stability Testing Chambers (ICH Compliant)',
        ],
        researchAreas: [
            'Liposomal, niosomal, and nanoparticle targeted drug delivery',
            'Gastro-retentive and sustained-release oral dosage forms',
            'Transdermal drug delivery patches and microneedle arrays',
            'Solubility and bioavailability enhancement of BCS Class II/IV compounds',
        ],
        careerScopes: [
            'Formulation Research & Development (F&D Scientist)',
            'Production, Manufacturing, and Scale-Up Engineering',
            'Packaging Development and Technology Transfer Specialist',
            'Regulatory Filing & Dossier Documentation Executive',
        ],
    },
    {
        id: 'pharmacology',
        title: 'Department of Pharmacology',
        tagline: 'Preclinical Screenings, Pharmacokinetics & Molecular Toxicology',
        overview:
            'Dedicated to studying the interactions of biological systems with drug candidates. Practical training covers preclinical screening models, mechanism-of-action investigations, bio-assays, and systemic toxicity testing, adhering to standard ethical animal research guidelines.',
        labs: [
            'Preclinical Animal Laboratory (CPCSEA Standard Facility)',
            'Cell Culture & In-Vitro Toxicology Screening Suite',
            'Clinical Pharmacokinetics & Bioassay Facility',
            'Behavioral Neuropharmacology Evaluation Suite',
        ],
        equipment: [
            'Digital Plethysmometer & Analgesiometer',
            'Automated Elevated Plus Maze & Rotarod Apparatus',
            'Student Organ Bath & Kymograph Recording Assemblies',
            'Inverted Fluorescence Microscope & Plate Readers',
            'Micro-Centrifuges and Ultra-Low Temperature Deep Freezers',
        ],
        researchAreas: [
            'Preclinical evaluation of novel phytopharmaceuticals for diabetes and arthritis',
            'Neuropharmacological interventions in neurodegenerative models',
            'Mechanistic screening for hepatoprotective and cardioprotective agents',
            'Safety pharmacology and in-vitro cytotoxicity assays',
        ],
        careerScopes: [
            'Preclinical Research Associate & Animal Trial Specialist',
            'Toxicology and Safety Assessment Officer',
            'Medical Science Liaison & Scientific Writer',
            'Clinical Trial Data Reviewer & Pharmacovigilance Associate',
        ],
    },
    {
        id: 'pharm-analysis',
        title: 'Department of Pharmaceutical Analysis',
        tagline: 'Spectroscopy, Chromatography & Method Validation',
        overview:
            'Focuses on identifying, purifying, quantifying, and validating bulk chemical entities and finished dosage formulations. Students receive training in analytical method development, spectral interpretation, chromatographic separations, and regulatory quality assurance standards.',
        labs: [
            'Central Instrumentation Facility (CIF)',
            'High-Performance Liquid Chromatography (HPLC) Suite',
            'UV-Vis Spectral & Photometric Analysis Center',
            'Quality Control, Assay & Titrimetric Lab',
        ],
        equipment: [
            'Shimadzu Quaternary HPLC Systems with PDA Detectors',
            'Fourier-Transform Infrared Spectrophotometer (FTIR)',
            'Double-Beam UV-Visible Spectrophotometers',
            'Gas Chromatography (GC) with Flame Ionization Detection',
            'Flame Photometer, Fluorometer & Digital Polarimeter',
        ],
        researchAreas: [
            'RP-HPLC method development and ICH-compliant validation',
            'Stress degradation studies and stability-indicating assay methods (SIAM)',
            'Trace element and heavy metal screening in pharmaceutical products',
            'Fingerprint profile analysis of herbal formulations using spectroscopy',
        ],
        careerScopes: [
            'Quality Control (QC) and Quality Assurance (QA) Analyst',
            'Analytical Method Development (AMD) Chemist',
            'Regulatory Affairs Inspector & Compliance Specialist',
            'Chromatography & Instrumentation Service Specialist',
        ],
    },
    {
        id: 'pharm-chemistry',
        title: 'Department of Pharmaceutical Chemistry',
        tagline: 'Drug Synthesis, Computational Chemistry & Structural Optimization',
        overview:
            'Integrates chemical synthesis with molecular biology to discover and design therapeutic candidates. Students explore medicinal chemistry principles, structural activity relationships (SAR), heterocyclic synthesis techniques, computational molecular docking, and organic chemical reactions.',
        labs: [
            'Organic Drug Synthesis & Reactions Laboratory',
            'Medicinal Chemistry & Natural Product Isolation Lab',
            'Computer-Aided Drug Design (CADD) & Molecular Modeling Center',
            'Inorganic Chemistry & Pharmaceutical Quality Testing Lab',
        ],
        equipment: [
            'Rotary Vacuum Evaporators with Chilling Circulators',
            'Computational Workstations with Molecular Docking Software Suites',
            'Microwave-Assisted Organic Synthesis Reactor',
            'Digital Melting Point & Boiling Point Apparatus',
            'Chemical Fume Hoods & Catalytic Hydrogenator Assemblies',
        ],
        researchAreas: [
            'In-silico molecular docking, QSAR, and pharmacophore modeling',
            'Green synthesis of novel heterocyclic antimicrobial scaffolds',
            'Isolation and characterization of active phytochemical markers',
            'Design of enzyme-targeted small molecule inhibitors',
        ],
        careerScopes: [
            'Medicinal Chemist & Custom Synthesis Specialist',
            'Cheminformatics & Computational Drug Design Modeler',
            'Active Pharmaceutical Ingredient (API) Bulk Manufacturing Chemist',
            'Patent Research & Chemical Intellectual Property Analyst',
        ],
    },
    {
        id: 'pharmacy-practice',
        title: 'Department of Pharmacy Practice',
        tagline: 'Clinical Pharmacy, Inpatient Ward Rounds & Hospital Pharmacotherapy',
        overview:
            'Provides patient-focused clinical training in clinical pharmacy, ward rounds, drug utilization reviews, patient counseling, adverse drug reaction (ADR) reporting, and therapeutic drug monitoring (TDM), working directly with multi-specialty teaching hospital departments.',
        labs: [
            'Drug Information Center (DIC) & Clinical Resource Unit',
            'Hospital Clinical Ward Training Facility',
            'Patient Counseling & Health Screening Simulation Lab',
            'Pharmacovigilance & Medication Safety Monitoring Cell',
        ],
        equipment: [
            'Clinical Decision Support & Drug Interaction Database Subscriptions',
            'Electronic Health Record (EHR) Training Systems',
            'Patient Vital Monitoring Simulation Manikins',
            'Digital Body Composition Analyzers & Point-of-Care Testing Kits',
            'Comprehensive Micromedex & Lexicomp Drug Reference Portals',
        ],
        researchAreas: [
            'Prospective monitoring and causality assessment of adverse drug reactions',
            'Antimicrobial stewardship and rational prescription audit patterns',
            'Health-related quality of life (HRQoL) in chronic disease cohorts',
            'Medication reconciliation and prevention of transition-of-care errors',
        ],
        careerScopes: [
            'Clinical Pharmacist & Hospital Pharmacy Manager',
            'Pharmacovigilance Scientist & Safety Operations Specialist',
            'Clinical Research Coordinator (CRC) & Trial Monitor',
            'Medical Coding, Health Insurance, and Informatics Analyst',
        ],
    },
];

export default function DepartmentsPage() {
    const [activeDept, setActiveDept] = useState(0);
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
            { threshold: 0.08 }
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

    const current = departmentsData[activeDept];

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Header Block */}
                <div
                    className={`${styles.headerBlock} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Academic Specializations &amp; Laboratories</span>
                    </div>
                    <h1 className={styles.title}>Academic Departments</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Explore our specialized pharmaceutical divisions, equipped with modern laboratory
                        infrastructure, precision analytical instrumentation, research clusters, and aligned
                        industry career pathways.
                    </p>
                </div>

                {/* 2-Column Split: Dept Nav on Left, Detailed View on Right */}
                <div className={styles.mainGrid}>
                    {/* Department Navigation List */}
                    <div className={styles.deptNavList}>
                        {departmentsData.map((dept, idx) => (
                            <button
                                key={dept.id}
                                onClick={() => setActiveDept(idx)}
                                className={`${styles.deptNavBtn} ${activeDept === idx ? styles.activeDeptNavBtn : ''
                                    } ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}
                            >
                                <div className={styles.deptNavIcon}>
                                    <Building2 size={18} />
                                </div>
                                <div className={styles.deptNavText}>
                                    <h4>{dept.title}</h4>
                                    <p>{dept.tagline}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Department Detail Card */}
                    <div
                        key={`dept-detail-${activeDept}`}
                        className={`${styles.detailCard} ${isVisible ? styles.animateDetailCard : styles.hiddenState
                            }`}
                    >
                        <div className={styles.detailHeader}>
                            <span className={styles.deptBadge}>Pharmaceutical Specialization</span>
                            <h2 className={styles.detailTitle}>{current.title}</h2>
                            <p className={styles.detailDesc}>{current.overview}</p>
                        </div>

                        {/* Research Domains & Core Competencies */}
                        <div className={styles.infoSection}>
                            <h4 className={styles.sectionHeading}>
                                <BookOpen size={18} className={styles.sectionIcon} />
                                <span>Research Domains &amp; Focus Areas</span>
                            </h4>
                            <div className={styles.pointsGrid}>
                                {current.researchAreas.map((area, idx) => (
                                    <div key={idx} className={styles.pointCard}>
                                        <CheckCircle2 size={15} className={styles.pointCheckIcon} />
                                        <span>{area}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Associated Laboratories */}
                        <div className={styles.infoSection}>
                            <h4 className={styles.sectionHeading}>
                                <FlaskConical size={18} className={styles.sectionIcon} />
                                <span>Associated Laboratories &amp; Research Centers</span>
                            </h4>
                            <div className={styles.labsList}>
                                {current.labs.map((lab, idx) => (
                                    <span key={idx} className={styles.labPill}>
                                        {lab}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Specialized Instrumentation & Pilot Plant */}
                        <div className={styles.infoSection}>
                            <h4 className={styles.sectionHeading}>
                                <Microscope size={18} className={styles.sectionIcon} />
                                <span>Advanced Analytical Equipment &amp; Plant Facilities</span>
                            </h4>
                            <div className={styles.pointsGrid}>
                                {current.equipment.map((item, idx) => (
                                    <div key={idx} className={styles.pointCard}>
                                        <CheckCircle2 size={15} className={styles.pointCheckIconGold} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Career Opportunities & Industrial Outlets */}
                        <div className={styles.infoSection}>
                            <h4 className={styles.sectionHeading}>
                                <Briefcase size={18} className={styles.sectionIcon} />
                                <span>Career Pathways &amp; Professional Scopes</span>
                            </h4>
                            <div className={styles.careerGrid}>
                                {current.careerScopes.map((scope, idx) => (
                                    <div key={idx} className={styles.careerPill}>
                                        <span className={styles.careerBullet} />
                                        <span>{scope}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}