'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    GraduationCap,
    Lightbulb,
    FlaskConical,
    ShieldCheck,
    Scale,
    HeartHandshake,
    Users,
    Building2,
    BookOpen,
    ArrowLeft,
    ChevronDown,
    Sparkles,
    Phone,
    Mail,
    UserCheck,
    Briefcase,
} from 'lucide-react';
import styles from './AllCells.module.css';

interface Member {
    name: string;
    collegeDesignation: string;
    cellRole: string;
    phone: string;
    email: string;
    image: string;
    isStudent?: boolean;
}

interface CellData {
    id: string;
    title: string;
    category: string;
    icon: any;
    theme: string;
    animClass: string;
    desc: string;
    objectives: string[];
    members: Member[];
}

const allAcademicCells: CellData[] = [
    {
        id: '1',
        title: 'Training and Placement Cell',
        category: 'Career & Corporate Connect',
        icon: GraduationCap,
        theme: styles.themeAmber,
        animClass: styles.animDelay1,
        desc: 'Bridges academia and industrial pharma leaders by organizing campus placement drives, CV mentoring, and professional soft-skills bootcamps.',
        objectives: [
            'Facilitate 100% placement assistance across top pharmaceutical corporations.',
            'Organize industrial internships, plant tours, and hands-on skill workshops.',
            'Conduct regular mock interviews and career readiness sessions.',
        ],
        members: [
            {
                name: 'Dr. K. Srinivas Rao',
                collegeDesignation: 'Professor, Dept. of Pharmaceutics',
                cellRole: 'Convenor & Placement Head',
                phone: '+91 98480 12345',
                email: 'placements@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mrs. M. Vani',
                collegeDesignation: 'Associate Professor, Pharmaceutical Chemistry',
                cellRole: 'Faculty Coordinator',
                phone: '+91 94401 54321',
                email: 'vani.chem@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mr. P. Rajesh Kumar',
                collegeDesignation: 'Assistant Professor, Pharmacology',
                cellRole: 'Industry Relations Officer',
                phone: '+91 98492 67890',
                email: 'rajesh.p@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'B. Sravani',
                collegeDesignation: 'Pharm.D Final Year',
                cellRole: 'Senior Student Placement Lead',
                phone: '+91 89781 12456',
                email: 'sravani.pharmd@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
            {
                name: 'V. Karthik Reddy',
                collegeDesignation: 'B.Pharm 4th Year',
                cellRole: 'Student Placement Secretary',
                phone: '+91 78932 98765',
                email: 'karthik.bpharm@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
        ],
    },
    {
        id: '2',
        title: 'Entrepreneurship Development & Innovation Cell (EDIC)',
        category: 'Incubation & Startups',
        icon: Lightbulb,
        theme: styles.themeEmerald,
        animClass: styles.animDelay2,
        desc: 'Empowers aspiring healthcare entrepreneurs to convert pharmaceutical research, novel formulations, and bio-tech concepts into licensed startups.',
        objectives: [
            'Foster student research ideation and intellectual property registration.',
            'Guide students on MSME schemes, venture capital, and patent filing.',
            'Host annual innovation hackathons and pharma incubator demo days.',
        ],
        members: [
            {
                name: 'Dr. C. Venkatesh',
                collegeDesignation: 'Professor & Vice-Principal',
                cellRole: 'Director, Innovation Council',
                phone: '+91 94402 78901',
                email: 'edic@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Dr. R. Shalini',
                collegeDesignation: 'Professor, Dept. of Pharmaceutics',
                cellRole: 'Patent & IPR Mentor',
                phone: '+91 97034 23412',
                email: 'shalini.r@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mr. T. Sudhakar',
                collegeDesignation: 'Assistant Professor, Pharmaceutical Analysis',
                cellRole: 'Incubation Executive',
                phone: '+91 98485 67432',
                email: 'sudhakar.t@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Ch. Divya Teja',
                collegeDesignation: 'M.Pharm (Pharmaceutics) 2nd Year',
                cellRole: 'Student Innovation Leader',
                phone: '+91 96521 89745',
                email: 'divya.mpharm@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
            {
                name: 'K. Sai Akhil',
                collegeDesignation: 'B.Pharm 3rd Year',
                cellRole: 'Student Startup Ambassador',
                phone: '+91 91002 45879',
                email: 'saiakhil.bpharm@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
        ],
    },
    {
        id: '3',
        title: 'Research & Development (R&D) Cell',
        category: 'Research & Discoveries',
        icon: FlaskConical,
        theme: styles.themePurple,
        animClass: styles.animDelay3,
        desc: 'Promotes interdisciplinary clinical research, manages institutional funded projects, and supports publications in high-impact Scopus indexed journals.',
        objectives: [
            'Coordinate institutional research projects, drug testing, and grant proposals.',
            'Facilitate access to advanced HPLC, FTIR, and preclinical animal models.',
            'Organize national seminars, scientific symposia, and thesis evaluations.',
        ],
        members: [
            {
                name: 'Dr. G. Lakshmi Narayana',
                collegeDesignation: 'Head of R&D & Professor, Pharmacology',
                cellRole: 'Chairman, Research Advisory Council',
                phone: '+91 98481 90123',
                email: 'rd@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Dr. N. Hema Latha',
                collegeDesignation: 'Associate Professor, Pharmaceutical Analysis',
                cellRole: 'Bio-Analytical Research In-Charge',
                phone: '+91 94412 87654',
                email: 'hemalatha.n@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mr. V. Bhanu Prasad',
                collegeDesignation: 'Assistant Professor, Pharmaceutics',
                cellRole: 'Instrumentation & Lab Manager',
                phone: '+91 99890 32145',
                email: 'bhanu.prasad@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'P. Sai Manasa',
                collegeDesignation: 'Pharm.D 5th Year',
                cellRole: 'Student Research Lead',
                phone: '+91 89771 23654',
                email: 'manasa.pharmd@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
            {
                name: 'M. Tharun Kumar',
                collegeDesignation: 'M.Pharm (Pharmacology) 2nd Year',
                cellRole: 'Student Publications Coordinator',
                phone: '+91 98487 65123',
                email: 'tharun.mpharm@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
        ],
    },
    {
        id: '4',
        title: 'Internal Quality Assurance Cell (IQAC)',
        category: 'Accreditation & Standards',
        icon: ShieldCheck,
        theme: styles.themeTeal,
        animClass: styles.animDelay1,
        desc: 'Develops conscious and catalytic action plans to improve the academic and administrative performance of the institution per statutory guidelines.',
        objectives: [
            'Maintain quality standards across curriculum delivery and laboratory practices.',
            'Coordinate faculty development programs (FDPs) and stakeholder feedback.',
            'Lead accreditation documentation for AICTE, PCI, and JNTUA inspections.',
        ],
        members: [
            {
                name: 'Dr. S. Radha Krishna',
                collegeDesignation: 'Principal & Professor',
                cellRole: 'IQAC Chairperson',
                phone: '+91 861 2345678',
                email: 'principal.jcp@gmail.com',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Dr. B. Mallikarjuna',
                collegeDesignation: 'Professor, Dept. of Pharmaceutics',
                cellRole: 'Director & IQAC Coordinator',
                phone: '+91 98483 12987',
                email: 'iqac@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mrs. K. Anitha',
                collegeDesignation: 'Associate Professor, Dept. of Pharmacology',
                cellRole: 'Documentation Officer',
                phone: '+91 94901 23789',
                email: 'anitha.k@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'S. Harika',
                collegeDesignation: 'B.Pharm Final Year',
                cellRole: 'Student Quality Representative',
                phone: '+91 97045 61234',
                email: 'harika.bpharm@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
            {
                name: 'D. Naveen Chowdary',
                collegeDesignation: 'Pharm.D 4th Year',
                cellRole: 'Student Council Delegate',
                phone: '+91 88971 45678',
                email: 'naveen.pharmd@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
        ],
    },
    {
        id: '5',
        title: 'Grievance Redressal Cell',
        category: 'Student Welfare & Governance',
        icon: Scale,
        theme: styles.themeAmber,
        animClass: styles.animDelay2,
        desc: 'Provides a safe, confidential, and prompt mechanism for resolving academic, infrastructural, and administrative grievances for students and faculty.',
        objectives: [
            'Maintain an accessible digital and on-campus suggestion/complaint box.',
            'Conduct unbiased, transparent inquiry sessions within 48 hours of complaint.',
            'Uphold an environment of harmony, dignity, and student-first resolution.',
        ],
        members: [
            {
                name: 'Dr. P. Madhavi Latha',
                collegeDesignation: 'Professor & Dean of Student Affairs',
                cellRole: 'Convenor & Ombudsperson',
                phone: '+91 94405 67123',
                email: 'grievances@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mr. A. V. Subba Rao',
                collegeDesignation: 'Associate Professor, Pharmaceutical Chemistry',
                cellRole: 'Senior Member',
                phone: '+91 98486 34567',
                email: 'subbarao.a@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mrs. Y. Sunitha',
                collegeDesignation: 'Assistant Professor, Pharmacognosy',
                cellRole: 'Member Secretary',
                phone: '+91 99854 78912',
                email: 'sunitha.y@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'G. Meghana',
                collegeDesignation: 'Pharm.D 5th Year',
                cellRole: 'Student Representative (Girls)',
                phone: '+91 91214 56789',
                email: 'meghana.pharmd@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
            {
                name: 'T. Rakesh Verma',
                collegeDesignation: 'B.Pharm 3rd Year',
                cellRole: 'Student Representative (Boys)',
                phone: '+91 95023 45678',
                email: 'rakesh.bpharm@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
        ],
    },
    {
        id: '6',
        title: 'Anti-Ragging & Discipline Committee',
        category: 'Safety & Regulations',
        icon: ShieldCheck,
        theme: styles.themeEmerald,
        animClass: styles.animDelay3,
        desc: 'Operates strict zero-tolerance protocols against ragging, maintaining round-the-clock campus supervision and hostel disciplinary surveillance.',
        objectives: [
            'Enforce PCI and Supreme Court anti-ragging mandatory directives.',
            'Deploy flying squads across college transport, cafeterias, and hostels.',
            'Guarantee total safety, psychological comfort, and orientation for freshers.',
        ],
        members: [
            {
                name: 'Dr. S. Radha Krishna',
                collegeDesignation: 'Principal',
                cellRole: 'Chairman & Chief Warden',
                phone: '+91 861 2345678',
                email: 'antiragging@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mr. N. Ramesh',
                collegeDesignation: 'Associate Professor, Pharmacology',
                cellRole: 'Anti-Ragging Squad Leader',
                phone: '+91 98480 87654',
                email: 'ramesh.n@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mrs. D. Prabhavathi',
                collegeDesignation: 'Hostel Chief Warden & Faculty',
                cellRole: 'Ladies Hostel In-Charge',
                phone: '+91 94408 90123',
                email: 'warden.girls@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'K. Vamshi Krishna',
                collegeDesignation: 'B.Pharm 4th Year',
                cellRole: 'Student Vigilance Captain',
                phone: '+91 98850 12398',
                email: 'vamshi.bpharm@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
            {
                name: 'P. Sneha Latha',
                collegeDesignation: 'Pharm.D 3rd Year',
                cellRole: 'Student Peer Counselor',
                phone: '+91 97012 34567',
                email: 'sneha.pharmd@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
        ],
    },
    {
        id: '7',
        title: 'Internal Complaints & Women Empowerment Cell',
        category: 'Gender Equality & Equity',
        icon: HeartHandshake,
        theme: styles.themePurple,
        animClass: styles.animDelay1,
        desc: 'Champions women empowerment, organizes self-defense and health awareness sessions, and enforces statutory POSH guidelines across campus.',
        objectives: [
            'Promote gender sensitisation and professional leadership programs for female students.',
            'Provide a supportive forum to address grievances under POSH guidelines.',
            'Organize health screenings, hygiene seminars, and legal awareness workshops.',
        ],
        members: [
            {
                name: 'Dr. K. Sujatha',
                collegeDesignation: 'Professor, Dept. of Pharmaceutical Chemistry',
                cellRole: 'Presiding Officer',
                phone: '+91 94409 56781',
                email: 'icc@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mrs. T. Sandhya',
                collegeDesignation: 'Assistant Professor, Pharmaceutics',
                cellRole: 'Faculty Coordinator',
                phone: '+91 98482 12908',
                email: 'sandhya.t@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Adv. S. Suhasini',
                collegeDesignation: 'Legal Consultant & Advocate',
                cellRole: 'External NGO / Legal Member',
                phone: '+91 98481 23490',
                email: 'legal.suhasini@gmail.com',
                image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'B. Pooja Reddy',
                collegeDesignation: 'Pharm.D Final Year',
                cellRole: 'Student President (Women Cell)',
                phone: '+91 99632 14785',
                email: 'pooja.pharmd@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
            {
                name: 'M. Divya',
                collegeDesignation: 'B.Pharm 3rd Year',
                cellRole: 'Student Coordinator',
                phone: '+91 91234 56780',
                email: 'divya.bpharm@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
        ],
    },
    {
        id: '8',
        title: 'SC / ST & Minority Cell',
        category: 'Inclusive Student Welfare',
        icon: Users,
        theme: styles.themeTeal,
        animClass: styles.animDelay2,
        desc: 'Ensures social harmony, equal access, fee reimbursement coordination, and targeted academic mentoring for students from underprivileged backgrounds.',
        objectives: [
            'Facilitate government JVD scholarships and social welfare stipends.',
            'Conduct free remedial coaching and English communication workshops.',
            'Uphold inclusive social equity throughout campus and academic life.',
        ],
        members: [
            {
                name: 'Mr. B. Vijay Kumar',
                collegeDesignation: 'Associate Professor, Pharmaceutics',
                cellRole: 'Liaison Officer & Convenor',
                phone: '+91 98488 45612',
                email: 'scstcell@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mrs. L. Sailaja',
                collegeDesignation: 'Assistant Professor, Pharmacology',
                cellRole: 'Scholarship Desk Coordinator',
                phone: '+91 94411 23456',
                email: 'sailaja.l@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mr. J. Daniel',
                collegeDesignation: 'Administrative Officer',
                cellRole: 'Welfare Documentation In-Charge',
                phone: '+91 98495 67891',
                email: 'daniel.admin@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'G. Suresh Babu',
                collegeDesignation: 'B.Pharm 4th Year',
                cellRole: 'Student Representative',
                phone: '+91 90123 45678',
                email: 'suresh.bpharm@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
            {
                name: 'A. Mary Prasanna',
                collegeDesignation: 'Pharm.D 3rd Year',
                cellRole: 'Student Welfare Delegate',
                phone: '+91 96420 89123',
                email: 'mary.pharmd@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
        ],
    },
    {
        id: '9',
        title: 'Industry-Institute Interaction Cell (IIIC)',
        category: 'Corporate Collaborations',
        icon: Building2,
        theme: styles.themeAmber,
        animClass: styles.animDelay3,
        desc: 'Establishes active MoUs with top multinational pharma corporations, organizing plant internships, industrial projects, and guest lectures.',
        objectives: [
            'Sign active MoUs with formulation, API, and clinical research organizations.',
            'Facilitate cGMP facility visits and faculty industrial immersion programs.',
            'Bridge industrial technology trends into college curriculum enrichment.',
        ],
        members: [
            {
                name: 'Dr. M. Satyanarayana',
                collegeDesignation: 'Professor, Dept. of Pharmaceutics',
                cellRole: 'Chairman, IIIC',
                phone: '+91 98480 34521',
                email: 'iiic@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mr. K. Anil Kumar',
                collegeDesignation: 'Head, Corporate Relations',
                cellRole: 'MoU & Industrial Liaison Officer',
                phone: '+91 94404 12789',
                email: 'anilkumar.cr@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Dr. V. Ravi Teja',
                collegeDesignation: 'Associate Professor, Quality Assurance',
                cellRole: 'Faculty In-Charge (Tech Transfer)',
                phone: '+91 99891 23450',
                email: 'raviteja.qa@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Ch. Venkata Sai',
                collegeDesignation: 'M.Pharm (Pharmaceutics) 2nd Year',
                cellRole: 'Student Industrial Liaison',
                phone: '+91 88970 12345',
                email: 'venkatasai.mpharm@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
            {
                name: 'S. Bhavana',
                collegeDesignation: 'B.Pharm 4th Year',
                cellRole: 'Student Coordinator',
                phone: '+91 97034 56123',
                email: 'bhavana.bpharm@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
        ],
    },
    {
        id: '10',
        title: 'Library & Learning Resource Advisory Cell',
        category: 'Knowledge Infrastructure',
        icon: BookOpen,
        theme: styles.themeEmerald,
        animClass: styles.animDelay1,
        desc: 'Oversees procurement of the latest pharmacopeias, Scopus-indexed digital subscriptions (ScienceDirect, DELNET), and digital repository systems.',
        objectives: [
            'Expand college digital library with remote access e-books and research journals.',
            'Conduct bibliometric software training (Mendeley, Zotero, and Turnitin).',
            'Ensure round-the-clock digital access for postgraduate dissertations.',
        ],
        members: [
            {
                name: 'Dr. E. Prasada Rao',
                collegeDesignation: 'Chief Librarian',
                cellRole: 'Convenor & Library Head',
                phone: '+91 98485 12098',
                email: 'library@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mrs. K. Sarada',
                collegeDesignation: 'Associate Professor, Pharmacognosy',
                cellRole: 'Faculty Library Secretary',
                phone: '+91 94415 67890',
                email: 'sarada.k@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Mr. G. Nagaraju',
                collegeDesignation: 'Assistant Librarian',
                cellRole: 'Digital Database Administrator',
                phone: '+91 99898 34567',
                email: 'nagaraju.lib@jaganspharmacy.edu.in',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
            },
            {
                name: 'Y. Vamsi',
                collegeDesignation: 'Pharm.D 4th Year',
                cellRole: 'Student Library Representative',
                phone: '+91 91001 23456',
                email: 'vamsi.pharmd@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
            {
                name: 'K. Kavya Sri',
                collegeDesignation: 'B.Pharm 3rd Year',
                cellRole: 'Student E-Resource Coordinator',
                phone: '+91 95055 67891',
                email: 'kavya.bpharm@student.jagans.edu.in',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
                isStudent: true,
            },
        ],
    },
];

export default function AllCellsPage() {
    const [activeCellId, setActiveCellId] = useState<string>('1');
    const [hoveredMemberIdx, setHoveredMemberIdx] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // Viewport intersection detection
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

    // Fluid 0.035 lerp parallax animation
    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;

        const updateParallax = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                currentScroll += (targetScroll - currentScroll) * 0.035;
                const relativeOffset = window.innerHeight - rect.top;
                if (orbLeftRef.current) {
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06
                        }px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05
                        }px, 0)`;
                }
            }
            animationFrameId = requestAnimationFrame(updateParallax);
        };

        const handleScroll = () => {
            targetScroll = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateParallax);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // When active cell changes, reset default hovered member to the Convenor (index 0)
    const handleCellSelect = (id: string) => {
        setActiveCellId(id === activeCellId ? '' : id);
        setHoveredMemberIdx(0);
    };

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Navigation Breadcrumb */}
                <div
                    className={`${styles.backNav} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>Return to Home</span>
                    </Link>
                </div>

                {/* Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Statutory Governance &amp; Student Mentorship</span>
                    </div>
                    <h1 className={styles.title}>Academic &amp; Institutional Cells</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Select any cell to inspect its institutional mandate, core objectives,
                        and the 5 appointed committee members including faculty leadership
                        and student coordinators.
                    </p>
                </div>

                {/* Cells List & Expanded Accordion Sections */}
                <div className={styles.accordionContainer}>
                    {allAcademicCells.map((cell) => {
                        const CellIcon = cell.icon;
                        const isExpanded = activeCellId === cell.id;
                        const selectedMember = isExpanded ? cell.members[hoveredMemberIdx] || cell.members[0] : null;

                        return (
                            <div
                                key={cell.id}
                                className={`${styles.cellItemWrapper} ${isExpanded ? styles.cellItemActive : ''
                                    } ${isVisible ? cell.animClass : styles.hiddenState}`}
                            >
                                {/* Main Cell Row Header Button (matches user reference layout) */}
                                <button
                                    type="button"
                                    onClick={() => handleCellSelect(cell.id)}
                                    className={styles.cellHeaderBar}
                                    aria-expanded={isExpanded}
                                >
                                    <div className={styles.cellBarLeft}>
                                        <div className={`${styles.iconPill} ${cell.theme}`}>
                                            <CellIcon size={20} strokeWidth={2.2} />
                                        </div>
                                        <div className={styles.cellTitleGroup}>
                                            <span className={styles.categoryBadge}>{cell.category}</span>
                                            <h3 className={styles.cellName}>
                                                <span className={styles.cellNum}>{cell.id}.</span> {cell.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className={styles.cellBarRight}>
                                        <span className={styles.membersCountBadge}>5 Members</span>
                                        <div
                                            className={`${styles.chevronWrapper} ${isExpanded ? styles.chevronRotated : ''
                                                }`}
                                        >
                                            <ChevronDown size={18} />
                                        </div>
                                    </div>
                                </button>

                                {/* Expanded Detailed Section */}
                                {isExpanded && (
                                    <div className={styles.expandedPanel}>
                                        {/* Objectives / Mandate Bar */}
                                        <div className={styles.mandateCard}>
                                            <div className={styles.mandateHeader}>
                                                <h4 className={styles.mandateTitle}>Scope &amp; Strategic Mandate</h4>
                                                <p className={styles.mandateDesc}>{cell.desc}</p>
                                            </div>
                                            <div className={styles.objectivesGrid}>
                                                {cell.objectives.map((obj, oIdx) => (
                                                    <div key={oIdx} className={styles.objItem}>
                                                        <span className={styles.objBullet} />
                                                        <span className={styles.objText}>{obj}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Committee Members Header */}
                                        <div className={styles.committeeHeaderRow}>
                                            <div className={styles.committeeTitleWrap}>
                                                <UserCheck size={18} className={styles.sectionIcon} />
                                                <h4 className={styles.committeeHeading}>
                                                    Committee Members &amp; Contact Details
                                                </h4>
                                            </div>
                                            <span className={styles.hoverHint}>
                                                Hover over any member to view their profile card
                                            </span>
                                        </div>

                                        {/* Interactive Stack (matches wireframe reference image 1 & 2) */}
                                        <div className={styles.membersInteractiveGrid}>
                                            {/* Left: 5 Rounded Horizontal Pill Rows */}
                                            <div className={styles.membersPillsList}>
                                                {cell.members.map((member, mIdx) => {
                                                    const isHovered = hoveredMemberIdx === mIdx;
                                                    return (
                                                        <div
                                                            key={mIdx}
                                                            onMouseEnter={() => setHoveredMemberIdx(mIdx)}
                                                            onClick={() => setHoveredMemberIdx(mIdx)}
                                                            className={`${styles.memberPillRow} ${isHovered ? styles.memberPillActive : ''
                                                                }`}
                                                        >
                                                            <div className={styles.pillIndexDot}>
                                                                {mIdx + 1}
                                                            </div>
                                                            <div className={styles.pillInfoLeft}>
                                                                <span className={styles.pillName}>
                                                                    {member.name}
                                                                </span>
                                                                <span className={styles.pillCollegeRole}>
                                                                    {member.collegeDesignation}
                                                                </span>
                                                            </div>
                                                            <div className={styles.pillInfoRight}>
                                                                <span
                                                                    className={`${styles.pillCellRole} ${member.isStudent ? styles.studentBadge : ''
                                                                        }`}
                                                                >
                                                                    {member.cellRole}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Right: Enlarged Hover Preview Card (matches wireframe reference image 2) */}
                                            {selectedMember && (
                                                <div className={styles.memberHoverCard}>
                                                    <div className={styles.hoverCardGlow} />
                                                    <div className={styles.cardHeaderArea}>
                                                        <div className={styles.avatarWrap}>
                                                            <img
                                                                src={selectedMember.image}
                                                                alt={selectedMember.name}
                                                                className={styles.memberAvatar}
                                                            />
                                                            {selectedMember.isStudent ? (
                                                                <span className={styles.studentPill}>Student Rep</span>
                                                            ) : (
                                                                <span className={styles.facultyPill}>Faculty</span>
                                                            )}
                                                        </div>

                                                        <div className={styles.memberProfileMeta}>
                                                            <span className={styles.cardRoleEyebrow}>
                                                                {selectedMember.cellRole}
                                                            </span>
                                                            <h3 className={styles.cardMemberName}>
                                                                {selectedMember.name}
                                                            </h3>
                                                            <p className={styles.cardCollegeRole}>
                                                                <Briefcase size={13} className={styles.metaIcon} />
                                                                <span>{selectedMember.collegeDesignation}</span>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className={styles.cardDivider} />

                                                    {/* Contact Channels */}
                                                    <div className={styles.contactChannels}>
                                                        <a
                                                            href={`tel:${selectedMember.phone.replace(/\s+/g, '')}`}
                                                            className={styles.contactBtn}
                                                        >
                                                            <div className={styles.contactIconCircle}>
                                                                <Phone size={14} />
                                                            </div>
                                                            <div className={styles.contactData}>
                                                                <span className={styles.contactLabel}>Phone / Direct Line</span>
                                                                <span className={styles.contactValue}>{selectedMember.phone}</span>
                                                            </div>
                                                        </a>

                                                        <a
                                                            href={`mailto:${selectedMember.email}`}
                                                            className={styles.contactBtn}
                                                        >
                                                            <div className={styles.contactIconCircle}>
                                                                <Mail size={14} />
                                                            </div>
                                                            <div className={styles.contactData}>
                                                                <span className={styles.contactLabel}>Official Email</span>
                                                                <span className={styles.contactValue}>{selectedMember.email}</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}