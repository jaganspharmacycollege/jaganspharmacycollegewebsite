'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    ArrowLeft,
    Mail,
    Briefcase,
    GraduationCap,
    Award,
    Search,
} from 'lucide-react';
import styles from './Faculty.module.css';

interface FacultyMember {
    name: string;
    department: string;
    designation: string;
    qualification: string;
    experience: string;
    specialization: string;
    email: string;
    image: string;
}

const facultyList: FacultyMember[] = [
    {
        name: 'Dr. S. Radha Krishna',
        department: 'Collegiate Directorate',
        designation: 'Principal & Professor',
        qualification: 'M.Pharm, Ph.D, FIC, FAGE',
        experience: '22+ Years Exp.',
        specialization: 'Regulatory Affairs & Pharmacokinetics',
        email: 'principal.jcp@gmail.com',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Dr. C. Venkatesh',
        department: 'Pharmaceutics',
        designation: 'Vice Principal & Professor',
        qualification: 'M.Pharm, Ph.D',
        experience: '18+ Years Exp.',
        specialization: 'Controlled & Targeted Drug Delivery Systems',
        email: 'viceprincipal@jaganspharmacy.edu.in',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Dr. K. Srinivas Rao',
        department: 'Pharmaceutics',
        designation: 'Professor & HOD',
        qualification: 'Ph.D., M.Pharm (Pharmaceutics)',
        experience: '18+ Years Exp.',
        specialization: 'Nanomedicine & Scale-up Tech',
        email: 'srinivas.rao@jaganspharmacy.edu.in',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Dr. G. Lakshmi Narayana',
        department: 'Pharmacology',
        designation: 'Dean of R&D & Professor',
        qualification: 'M.Pharm (Pharmacology), Ph.D',
        experience: '16+ Years Exp.',
        specialization: 'Neuropharmacology & Toxicology',
        email: 'academics.dean@jaganspharmacy.edu.in',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Dr. N. Hema Latha',
        department: 'Pharmaceutical Analysis',
        designation: 'Associate Professor & HOD',
        qualification: 'Ph.D., M.Pharm (Analysis)',
        experience: '14+ Years Exp.',
        specialization: 'RP-HPLC & Impurity Profiling',
        email: 'hemalatha.n@jaganspharmacy.edu.in',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Dr. P. Madhusudhan Rao',
        department: 'Pharmaceutical Chemistry',
        designation: 'Professor & HOD',
        qualification: 'Ph.D., M.Sc., M.Pharm',
        experience: '19+ Years Exp.',
        specialization: 'Medicinal Chemistry & Molecular Docking',
        email: 'madhusudhan.p@jaganspharmacy.edu.in',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Dr. P. Madhavi Latha',
        department: 'Pharmacy Practice',
        designation: 'Professor & Dean of Students',
        qualification: 'Pharm.D, Ph.D, BCPS',
        experience: '15+ Years Exp.',
        specialization: 'Inpatient Clinical Rounds & ADRs',
        email: 'madhavi.latha@jaganspharmacy.edu.in',
        image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Mrs. M. Vani',
        department: 'Pharmaceutical Chemistry',
        designation: 'Associate Professor',
        qualification: 'M.Pharm (Ph.D)',
        experience: '12+ Years Exp.',
        specialization: 'Heterocyclic Drug Synthesis',
        email: 'vani.chem@jaganspharmacy.edu.in',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
];

export default function FacultyDirectoryPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedDept, setSelectedDept] = useState('All');
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    const departments = [
        'All',
        'Collegiate Directorate',
        'Pharmaceutics',
        'Pharmacology',
        'Pharmaceutical Analysis',
        'Pharmaceutical Chemistry',
        'Pharmacy Practice',
    ];

    const filteredFaculty =
        selectedDept === 'All'
            ? facultyList
            : facultyList.filter((f) => f.department === selectedDept);

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
                        <span>Academic Mentorship &amp; Faculty Leadership</span>
                    </div>
                    <h1 className={styles.title}>Faculty Directory</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Meet our team of professors, clinical researchers, and laboratory instructors dedicated
                        to quality education across undergraduate and postgraduate pharmaceutical sciences.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className={styles.filterTabs}>
                    {departments.map((dept, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedDept(dept)}
                            className={`${styles.filterBtn} ${selectedDept === dept ? styles.activeFilterBtn : ''}`}
                        >
                            {dept}
                        </button>
                    ))}
                </div>

                {/* Faculty Grid (Square Image Proportions) */}
                <div className={`${styles.facultyGrid} ${isVisible ? styles.animateReveal3 : styles.hiddenState}`}>
                    {filteredFaculty.map((member, idx) => (
                        <div key={idx} className={styles.facultyCard}>
                            <div className={styles.squareImageContainer}>
                                <img src={member.image} alt={member.name} className={styles.squareImage} />
                                <span className={styles.deptBadge}>{member.department}</span>
                            </div>
                            <div className={styles.cardBody}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.designation}>{member.designation}</p>
                                <p className={styles.qualification}>{member.qualification}</p>

                                <div className={styles.metaRow}>
                                    <Award size={13} className={styles.metaIcon} />
                                    <span>{member.experience}</span>
                                </div>

                                <div className={styles.specBox}>
                                    <span className={styles.specLabel}>Focus:</span>
                                    <span className={styles.specValue}>{member.specialization}</span>
                                </div>

                                <a href={`mailto:${member.email}`} className={styles.emailBtn}>
                                    <Mail size={13} />
                                    <span>{member.email}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}