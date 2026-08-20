'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import styles from './PlacementsHero.module.css';

interface StudentInfo {
    name: string;
    role: string;
    company: string;
    src: string;
}

// 19 sets of young Indian pharmacy students with accurate roles & companies
const heroPhotoSets: StudentInfo[][] = [
    // 0
    [
        { name: 'P. Sai Praneeth', role: 'Clinical Pharmacist', company: 'Novartis', src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop' },
        { name: 'K. Divya Sree', role: 'Drug Safety Officer', company: "Dr. Reddy's", src: 'https://images.unsplash.com/photo-1594824813523-96b66802111b?q=80&w=600&auto=format&fit=crop' },
        { name: 'A. Naveen Kumar', role: 'QC Chemist', company: 'Aurobindo', src: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=600&auto=format&fit=crop' },
    ],
    // 1
    [
        { name: 'S. Haritha', role: 'Formulation Scientist', company: 'Sun Pharma', src: 'https://images.unsplash.com/photo-1618052163124-7ef86a4eb8d7?q=80&w=600&auto=format&fit=crop' },
        { name: 'M. Harish Kumar', role: 'R&D Executive', company: 'Biocon', src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop' },
        { name: 'P. Kavitha', role: 'Pharmacovigilance', company: 'TCS Health', src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=600&auto=format&fit=crop' },
    ],
    // 2
    [
        { name: 'T. Bhavana Reddy', role: 'Medical Specialist', company: 'Pfizer India', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop' },
        { name: 'B. Rajesh', role: 'Analytical Chemist', company: 'Hetero', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' },
        { name: 'R. Anusha', role: 'Clinical Data Assoc.', company: 'IQVIA', src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop' },
    ],
    // 3
    [
        { name: 'V. Rakesh Varma', role: 'QA Associate', company: 'Lupin Pharma', src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop' },
        { name: 'Ch. Suresh', role: 'Production Officer', company: 'Divi’s Labs', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop' },
        { name: 'D. Mounika', role: 'Regulatory Affairs', company: 'Cipla', src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop' },
    ],
    // 4
    [
        { name: 'G. Sushma', role: 'Pharmacovigilance Assoc.', company: 'Hetero Drugs', src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop' },
        { name: 'N. Akhil Reddy', role: 'Clinical Pharmacist', company: 'Apollo Health', src: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=600&auto=format&fit=crop' },
        { name: 'K. Sneha', role: 'Formulation Trainee', company: 'Granules', src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop' },
    ],
    // 5
    [
        { name: 'E. Tarun Teja', role: 'R&D Chemist', company: 'Torrent Pharma', src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop' },
        { name: 'J. Deepthi', role: 'Drug Analyst', company: 'Gland Pharma', src: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop' },
        { name: 'V. Lokesh', role: 'QC Chemist', company: 'Alkem Labs', src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600&auto=format&fit=crop' },
    ],
    // 6
    [
        { name: 'M. Sandhya', role: 'Clinical Data Mgmt.', company: 'Cognizant', src: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=600&auto=format&fit=crop' },
        { name: 'P. Manoj Kumar', role: 'Hospital Pharmacist', company: 'KIMS Hospitals', src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop' },
        { name: 'L. Sirisha', role: 'Quality Control', company: 'Biological E', src: 'https://images.unsplash.com/photo-1594824813523-96b66802111b?q=80&w=600&auto=format&fit=crop' },
    ],
    // 7
    [
        { name: 'K. Ruthvik', role: 'Drug Regulatory Exec.', company: 'MSN Labs', src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop' },
        { name: 'B. Varun', role: 'Medical Writer', company: 'Indegene', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' },
        { name: 'A. Pooja', role: 'Clinical Auditor', company: 'Syneos Health', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop' },
    ],
    // 8
    [
        { name: 'S. Pradeep', role: 'Clinical Associate', company: 'Care Hospitals', src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop' },
        { name: 'D. Keerthi', role: 'QC Analyst', company: 'Natco Pharma', src: 'https://images.unsplash.com/photo-1618052163124-7ef86a4eb8d7?q=80&w=600&auto=format&fit=crop' },
        { name: 'H. Nikhil', role: 'Regulatory Associate', company: 'Zydus Cadila', src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=600&auto=format&fit=crop' },
    ],
    // 9
    [
        { name: 'Y. Swetha', role: 'Medical Info Specialist', company: 'Sanofi India', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop' },
        { name: 'C. Naresh', role: 'Formulation Exec.', company: 'Alembic', src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop' },
        { name: 'R. Lavanya', role: 'Drug Safety Chemist', company: 'Glenmark', src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop' },
    ],
    // 10
    [
        { name: 'U. Vinay', role: 'QC Chemist', company: 'Strides Pharma', src: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=600&auto=format&fit=crop' },
        { name: 'M. Sravani', role: 'Pharmacovigilance', company: 'Wipro Health', src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop' },
        { name: 'V. Kalyan', role: 'Clinical Pharmacist', company: 'Medicover', src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop' },
    ],
    // 11
    [
        { name: 'K. Madhuri', role: 'Regulatory Affairs', company: 'Laurus Labs', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' },
        { name: 'G. Bharath', role: 'Production Officer', company: 'Micro Labs', src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop' },
        { name: 'N. Tejaswi', role: 'Data Reviewer', company: 'Parexel', src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop' },
    ],
    // 12
    [
        { name: 'P. Anil', role: 'QA Associate', company: 'IPCA Labs', src: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop' },
        { name: 'T. Himabindu', role: 'Clinical Pharmacist', company: 'Yashoda', src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600&auto=format&fit=crop' },
        { name: 'S. Jagadeesh', role: 'QC Analyst', company: 'Mankind Pharma', src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop' },
    ],
    // 13
    [
        { name: 'V. Gayathri', role: 'Drug Safety Assoc.', company: 'Accenture Ops', src: 'https://images.unsplash.com/photo-1594824813523-96b66802111b?q=80&w=600&auto=format&fit=crop' },
        { name: 'E. Karthik', role: 'Formulation Trainee', company: 'Ajanta Pharma', src: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=600&auto=format&fit=crop' },
        { name: 'B. Meghana', role: 'Clinical Data Trainee', company: 'ICON plc', src: 'https://images.unsplash.com/photo-1618052163124-7ef86a4eb8d7?q=80&w=600&auto=format&fit=crop' },
    ],
    // 14
    [
        { name: 'A. Srikanth', role: 'Clinical Pharmacist', company: 'Rainbow Hosp.', src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop' },
        { name: 'J. Rohini', role: 'Regulatory Exec.', company: 'Neuland Labs', src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=600&auto=format&fit=crop' },
        { name: 'M. Santosh', role: 'QC Specialist', company: 'Suven Pharma', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop' },
    ],
    // 15
    [
        { name: 'R. Deepika', role: 'Medical Coder', company: 'Omega Healthcare', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop' },
        { name: 'K. Bhanu Prakash', role: 'Production Exec.', company: 'Shasun Pharma', src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop' },
        { name: 'O. Pavani', role: 'Drug Safety Chemist', company: 'Dr. Reddy’s', src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop' },
    ],
    // 16
    [
        { name: 'N. Dileep', role: 'Analytical Chemist', company: 'Aurobindo', src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop' },
        { name: 'S. Yamini', role: 'Clinical Pharmacist', company: 'Manipal Hosp.', src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop' },
        { name: 'T. Charan', role: 'QC Chemist', company: 'GVK BIO', src: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=600&auto=format&fit=crop' },
    ],
    // 17
    [
        { name: 'G. Manasa', role: 'Pharmacovigilance', company: 'TCS Health', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' },
        { name: 'L. Sai Krishna', role: 'Formulation Scientist', company: 'Sun Pharma', src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop' },
        { name: 'W. Haritha', role: 'Drug Regulatory Assoc.', company: 'Biocon', src: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop' },
    ],
    // 18
    [
        { name: 'D. Tarun', role: 'QC Analyst', company: 'Hetero', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop' },
        { name: 'K. Sneha Reddy', role: 'Clinical Pharmacist', company: 'Apollo', src: 'https://images.unsplash.com/photo-1618052163124-7ef86a4eb8d7?q=80&w=600&auto=format&fit=crop' },
        { name: 'M. Venkat', role: 'QA Associate', company: 'Cipla', src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600&auto=format&fit=crop' },
    ],
];

// Helper sub-component to render an image tile with dynamic overlay info
function StudentCardTile({
    photoSet,
    activeIdx,
}: {
    photoSet: StudentInfo[];
    activeIdx: number;
}) {
    const currentStudent = photoSet[activeIdx];

    return (
        <div className={styles.photoTile}>
            {photoSet.map((student, idx) => (
                <img
                    key={idx}
                    src={student.src}
                    alt={`${student.name} - ${student.role}`}
                    className={`${styles.photoImage} ${idx === activeIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                        }`}
                />
            ))}
            <div className={styles.photoOverlay} />
            <div className={styles.studentInfo}>
                <span className={styles.studentName}>{currentStudent.name}</span>
                <span className={styles.studentRole}>{currentStudent.role}</span>
                <span className={styles.studentCompany}>{currentStudent.company}</span>
            </div>
        </div>
    );
}

export default function PlacementsHero() {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef<HTMLElement | null>(null);
    const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

    // 5.5-second image transition timer
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 3);
        }, 5500);

        return () => clearInterval(timer);
    }, []);

    // Mousemove parallax handler
    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
        const yRatio = (e.clientY - rect.top) / rect.height - 0.5;

        setParallaxOffset({
            x: xRatio * 18,
            y: yRatio * 14,
        });
    };

    const handleMouseLeave = () => {
        setParallaxOffset({ x: 0, y: 0 });
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={styles.section}
        >
            <div className={styles.bgGlow} />

            {/* Top Header */}
            <div className={styles.topContent}>
                <span className={styles.eyebrow}>Career Opportunities</span>
                <h1 className={styles.title}>Training &amp; Placements</h1>
                <div className={styles.accentLine} />
            </div>

            {/* Interactive & Ambient Floating Parallax Pyramid Grid */}
            <div className={styles.mosaicWrapper}>
                <div
                    className={styles.mosaicGrid}
                    style={{
                        transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0) rotateX(${parallaxOffset.y * -0.2
                            }deg) rotateY(${parallaxOffset.x * 0.2}deg)`,
                    }}
                >
                    {/* Col 0 (Left Wing Edge) */}
                    <div className={`${styles.mosaicCol} ${styles.col0} ${styles.floatSlow}`}>
                        <StudentCardTile photoSet={heroPhotoSets[0]} activeIdx={activeStep} />
                        <StudentCardTile photoSet={heroPhotoSets[1]} activeIdx={(activeStep + 1) % 3} />
                    </div>

                    {/* Col 1 */}
                    <div className={`${styles.mosaicCol} ${styles.col1} ${styles.floatMedium}`}>
                        <StudentCardTile photoSet={heroPhotoSets[2]} activeIdx={(activeStep + 2) % 3} />
                        <StudentCardTile photoSet={heroPhotoSets[3]} activeIdx={activeStep} />
                    </div>

                    {/* Col 2 */}
                    <div className={`${styles.mosaicCol} ${styles.col2} ${styles.floatFast}`}>
                        <StudentCardTile photoSet={heroPhotoSets[4]} activeIdx={(activeStep + 1) % 3} />
                        <StudentCardTile photoSet={heroPhotoSets[5]} activeIdx={(activeStep + 2) % 3} />
                    </div>

                    {/* Col 3 */}
                    <div className={`${styles.mosaicCol} ${styles.col3} ${styles.floatSlow}`}>
                        <StudentCardTile photoSet={heroPhotoSets[6]} activeIdx={activeStep} />
                        <StudentCardTile photoSet={heroPhotoSets[7]} activeIdx={(activeStep + 1) % 3} />
                    </div>

                    {/* Col 4 (Apex Peak Left) */}
                    <div className={`${styles.mosaicCol} ${styles.col4} ${styles.floatMedium}`}>
                        <StudentCardTile photoSet={heroPhotoSets[8]} activeIdx={(activeStep + 2) % 3} />
                        <StudentCardTile photoSet={heroPhotoSets[9]} activeIdx={activeStep} />
                    </div>

                    {/* Col 5 (Apex Peak Right) */}
                    <div className={`${styles.mosaicCol} ${styles.col5} ${styles.floatMedium}`}>
                        <StudentCardTile photoSet={heroPhotoSets[10]} activeIdx={(activeStep + 1) % 3} />
                        <StudentCardTile photoSet={heroPhotoSets[11]} activeIdx={(activeStep + 2) % 3} />
                    </div>

                    {/* Col 6 */}
                    <div className={`${styles.mosaicCol} ${styles.col6} ${styles.floatSlow}`}>
                        <StudentCardTile photoSet={heroPhotoSets[12]} activeIdx={activeStep} />
                        <StudentCardTile photoSet={heroPhotoSets[13]} activeIdx={(activeStep + 1) % 3} />
                    </div>

                    {/* Col 7 */}
                    <div className={`${styles.mosaicCol} ${styles.col7} ${styles.floatFast}`}>
                        <StudentCardTile photoSet={heroPhotoSets[14]} activeIdx={(activeStep + 2) % 3} />
                        <StudentCardTile photoSet={heroPhotoSets[15]} activeIdx={activeStep} />
                    </div>

                    {/* Col 8 */}
                    <div className={`${styles.mosaicCol} ${styles.col8} ${styles.floatMedium}`}>
                        <StudentCardTile photoSet={heroPhotoSets[16]} activeIdx={(activeStep + 1) % 3} />
                        <StudentCardTile photoSet={heroPhotoSets[17]} activeIdx={(activeStep + 2) % 3} />
                    </div>

                    {/* Col 9 (Right Wing Edge) */}
                    <div className={`${styles.mosaicCol} ${styles.col9} ${styles.floatSlow}`}>
                        <StudentCardTile photoSet={heroPhotoSets[0]} activeIdx={(activeStep + 2) % 3} />
                        <StudentCardTile photoSet={heroPhotoSets[18]} activeIdx={activeStep} />
                    </div>
                </div>
            </div>

            {/* Center Feedback / Testimonial Box */}
            <div className={styles.bottomReviewCard}>
                <div className={styles.badgePill}>
                    <Sparkles size={13} />
                    <span>Pride of Jagan&apos;s</span>
                </div>

                <p className={styles.reviewQuote}>
                    &ldquo;Empowering pharmaceutical graduates with high-impact clinical competencies,
                    industrial readiness, and direct recruitment linkages with world-leading healthcare enterprises.&rdquo;
                </p>

                <span className={styles.reviewerMeta}>
                    <CheckCircle2 size={14} className="inline mr-1 text-emerald-400" />
                    Training &amp; Corporate Placement Cell &bull; Jagan&apos;s College of Pharmacy
                </span>
            </div>
        </section>
    );
}