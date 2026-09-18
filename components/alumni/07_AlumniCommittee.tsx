'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    ArrowLeft,
    Award,
    Users2,
    Calendar,
    Building2,
    Mail,
    Phone,
    Maximize2,
    X,
    Globe2,
    GraduationCap,
} from 'lucide-react';
import styles from './AlumniCommittee.module.css';

interface CommitteeMember {
    name: string;
    role: string;
    batch: string;
    designation: string;
    company: string;
    location: string;
    image: string;
    email: string;
    phone: string;
}

const stats = [
    { label: 'Registered Global Alumni', value: '2,500+', icon: Users2 },
    { label: 'Annual Alumni Meets', value: '15+', icon: Calendar },
    { label: 'Regional & Overseas Chapters', value: '6', icon: Globe2 },
    { label: 'Endowment & Student Grants', value: '₹25L+', icon: Award },
];

const executiveOfficers: CommitteeMember[] = [
    {
        name: 'Sri J. V. Subba Rao',
        role: 'Chief Patron',
        batch: 'Management',
        designation: 'Chairman',
        company: "Jagan's Educational Society",
        location: 'Nellore, AP',
        image: '/assets/logo/Chairman.png',
        email: 'chairman@jaganspharmacy.edu.in',
        phone: '+91 76800 77726',
    },
    {
        name: 'Dr. S. Radha Krishna',
        role: 'President (Ex-Officio)',
        batch: 'Faculty Council',
        designation: 'Principal & Professor',
        company: "Jagan's College of Pharmacy",
        location: 'Nellore, AP',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        email: 'principal.jcp@gmail.com',
        phone: '+91 99890 00447',
    },
    {
        name: 'Mr. K. V. Rajesh',
        role: 'Working President',
        batch: 'B.Pharm (Batch of 2011)',
        designation: 'Associate Director - Global RA',
        company: 'Hetero Drugs Ltd.',
        location: 'Hyderabad, India',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        email: 'rajesh.alumni@jaganspharmacy.edu.in',
        phone: '+91 98480 11223',
    },
    {
        name: 'Mrs. S. Tejaswini',
        role: 'General Secretary',
        batch: 'Pharm.D (Batch of 2017)',
        designation: 'Lead Clinical Pharmacologist',
        company: 'Apollo Hospitals',
        location: 'Chennai, India',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
        email: 'tejaswini.secretary@jaganspharmacy.edu.in',
        phone: '+91 94401 55667',
    },
    {
        name: 'Mr. M. Bhanu Prakash',
        role: 'Treasurer',
        batch: 'B.Pharm (Batch of 2014)',
        designation: 'Quality Control Lead',
        company: "Dr. Reddy's Laboratories",
        location: 'Visakhapatnam, AP',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        email: 'bhanu.treasurer@jaganspharmacy.edu.in',
        phone: '+91 91212 33445',
    },
    {
        name: 'Dr. C. Venkatesh',
        role: 'Faculty Coordinator',
        batch: 'Faculty Council',
        designation: 'Vice Principal & Professor',
        company: "Jagan's College of Pharmacy",
        location: 'Nellore, AP',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        email: 'viceprincipal@jaganspharmacy.edu.in',
        phone: '+91 94402 78901',
    },
];

const chapterLeads: CommitteeMember[] = [
    {
        name: 'Dr. N. Sai Charitha',
        role: 'USA Chapter Coordinator',
        batch: 'Pharm.D (Batch of 2016)',
        designation: 'Clinical Research Scientist',
        company: 'Pfizer Global R&D',
        location: 'Boston, USA',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
        email: 'usachapter@jaganspharmacy.edu.in',
        phone: '+1 (617) 555-0199',
    },
    {
        name: 'Mr. G. Avinash Reddy',
        role: 'Middle East Chapter Lead',
        batch: 'B.Pharm (Batch of 2013)',
        designation: 'Hospital Pharmacy Head',
        company: 'Aster DM Healthcare',
        location: 'Dubai, UAE',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        email: 'uaechapter@jaganspharmacy.edu.in',
        phone: '+971 50 123 4567',
    },
    {
        name: 'Mrs. V. Divya Teja',
        role: 'Hyderabad Chapter Lead',
        batch: 'M.Pharm (Batch of 2018)',
        designation: 'Formulation Scientist',
        company: 'Aurobindo Pharma',
        location: 'Hyderabad, India',
        image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80',
        email: 'hydchapter@jaganspharmacy.edu.in',
        phone: '+91 98485 77889',
    },
    {
        name: 'Mr. P. Rakesh Sharma',
        role: 'Bengaluru Chapter Lead',
        batch: 'B.Pharm (Batch of 2015)',
        designation: 'Senior Medical Coding Auditor',
        company: 'Omega Healthcare',
        location: 'Bengaluru, India',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        email: 'blrchapter@jaganspharmacy.edu.in',
        phone: '+91 97401 22334',
    },
];

const meetGallery = [
    {
        id: 1,
        title: 'Annual Global Alumni Homecoming Meet 2026',
        category: 'Campus Auditorium',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 2,
        title: 'Alumni Student Mentorship & GPAT Interaction',
        category: 'Seminar Hall',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 3,
        title: 'Distinguished Alumni Corporate Leadership Awards',
        category: 'Award Ceremony',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 4,
        title: 'Hyderabad Regional Chapter Networking Dinner',
        category: 'Regional Conclave',
        image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 5,
        title: 'Silver Jubilee Batch Reunion & Campus Reminiscence',
        category: 'Alumni Lawn',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 6,
        title: 'Alumni Endowment Seed Fund Grant Ceremony',
        category: 'Board Room',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85',
    },
];

export default function AlumniCommitteePage() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

    // Smooth Dual-Axis Parallax Engine
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

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImage]);

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Navigation Breadcrumb */}
                <div className={`${styles.backNav} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <Link href="/alumni" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>Return to Alumni Portal</span>
                    </Link>
                </div>

                {/* Page Header */}
                <div className={`${styles.header} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Alumni Association Executive Council</span>
                    </div>
                    <h1 className={styles.title}>Alumni Committee &amp; Office Bearers</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our dedicated alumni committee guides student mentorship, organizes annual global reunions, drives corporate
                        placements, and manages alumni-backed endowment scholarships for upcoming pharmaceutical scholars.
                    </p>
                </div>

                {/* Metrics Row */}
                <div className={`${styles.statsGrid} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                    {stats.map((s, idx) => {
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

                {/* 1. Executive Office Bearers Grid */}
                <section className={styles.sectionBlock}>
                    <div className={styles.sectionHeaderWrap}>
                        <span className={styles.sectionPill}>Apex Leadership</span>
                        <h2 className={styles.sectionHeading}>Central Executive Committee</h2>
                        <p className={styles.sectionSubDesc}>
                            Elected and nominated alumni office bearers responsible for institutional liaison, alumni policy formulation,
                            and flagship homecoming events.
                        </p>
                    </div>

                    <div className={`${styles.officersGrid} ${isVisible ? styles.animateReveal3 : styles.hiddenState}`}>
                        {executiveOfficers.map((member, idx) => (
                            <div key={idx} className={styles.memberCard}>
                                <div className={styles.memberImgWrap}>
                                    <img src={member.image} alt={member.name} className={styles.memberImg} />
                                    <div className={styles.memberImgOverlay} />
                                    <span className={styles.roleBadge}>{member.role}</span>
                                </div>

                                <div className={styles.memberBody}>
                                    <div className={styles.batchTagRow}>
                                        <GraduationCap size={13} className={styles.batchIcon} />
                                        <span>{member.batch}</span>
                                    </div>

                                    <h3 className={styles.memberName}>{member.name}</h3>
                                    <p className={styles.memberDesignation}>{member.designation}</p>

                                    <div className={styles.companyRow}>
                                        <Building2 size={13} className={styles.companyIcon} />
                                        <span>
                                            {member.company} &bull; {member.location}
                                        </span>
                                    </div>

                                    <div className={styles.contactFooter}>
                                        <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className={styles.contactLink}>
                                            <Phone size={12} />
                                            <span>{member.phone}</span>
                                        </a>
                                        <a href={`mailto:${member.email}`} className={styles.contactLink}>
                                            <Mail size={12} />
                                            <span>{member.email}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. Regional & Overseas Chapter Leads */}
                <section className={styles.sectionBlock}>
                    <div className={styles.sectionHeaderWrap}>
                        <span className={styles.sectionPill}>Global Reach</span>
                        <h2 className={styles.sectionHeading}>Regional &amp; Overseas Chapter Leads</h2>
                        <p className={styles.sectionSubDesc}>
                            Connecting JCP alumni across major industrial hubs in India and international destinations.
                        </p>
                    </div>

                    <div className={styles.chaptersGrid}>
                        {chapterLeads.map((ch, idx) => (
                            <div key={idx} className={styles.chapterCard}>
                                <div className={styles.chapterImgWrap}>
                                    <img src={ch.image} alt={ch.name} className={styles.chapterImg} />
                                    <span className={styles.chapterPill}>{ch.role}</span>
                                </div>

                                <div className={styles.chapterBody}>
                                    <h4 className={styles.chapterName}>{ch.name}</h4>
                                    <p className={styles.chapterDesignation}>
                                        {ch.designation} &bull; {ch.company}
                                    </p>
                                    <p className={styles.chapterLocation}>{ch.location}</p>

                                    <div className={styles.chapterContacts}>
                                        <a href={`mailto:${ch.email}`} className={styles.chapterContactItem}>
                                            <Mail size={12} />
                                            <span>{ch.email}</span>
                                        </a>
                                        <a href={`tel:${ch.phone.replace(/\s+/g, '')}`} className={styles.chapterContactItem}>
                                            <Phone size={12} />
                                            <span>{ch.phone}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Reunion & Alumni Engagement Photo Gallery */}
                <section className={styles.gallerySection}>
                    <div className={styles.galleryHeader}>
                        <span className={styles.galleryEyebrow}>Photo Highlights</span>
                        <h2 className={styles.galleryTitle}>Alumni Reunions &amp; Campus Memories</h2>
                        <p className={styles.gallerySubtitle}>
                            Cherished moments from our annual alumni meets, student mentoring conclaves, and chapter felicitation ceremonies.
                        </p>
                    </div>

                    <div className={styles.galleryGrid}>
                        {meetGallery.map((item) => (
                            <div
                                key={item.id}
                                className={styles.galleryCard}
                                onClick={() => setSelectedImage(item.image)}
                            >
                                <div className={styles.galleryImgFrame}>
                                    <img src={item.image} alt={item.title} className={styles.galleryPhoto} />
                                    <div className={styles.galleryPhotoOverlay}>
                                        <div className={styles.zoomIconWrap}>
                                            <Maximize2 size={18} />
                                        </div>
                                    </div>
                                    <span className={styles.galleryCategoryBadge}>{item.category}</span>
                                </div>
                                <div className={styles.galleryMeta}>
                                    <h4 className={styles.galleryCardTitle}>{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className={styles.lightboxOverlay} onClick={() => setSelectedImage(null)}>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            onClick={() => setSelectedImage(null)}
                            className={styles.closeBtn}
                            aria-label="Close Preview"
                        >
                            <X size={22} />
                        </button>
                        <img src={selectedImage} alt="Alumni Meet Preview" className={styles.lightboxImg} />
                    </div>
                </div>
            )}
        </div>
    );
}