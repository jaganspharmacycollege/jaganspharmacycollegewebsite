'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    ArrowLeft,
    Handshake,
    Calendar,
    Building2,
    CheckCircle2,
    Maximize2,
    X,
    FileCheck2,
    Users2,
    Award,
} from 'lucide-react';
import styles from './MOUs.module.css';

interface MOUItem {
    organization: string;
    type: string;
    badge: string;
    image: string;
    scope: string;
    validity: string;
    deliverables: string[];
}

const mouList: MOUItem[] = [
    {
        organization: 'Hetero Drugs Ltd.',
        type: 'Industrial Formulation Partner',
        badge: 'Pharmaceutical Manufacturing',
        image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=85',
        scope: 'Industrial plant visits, internship stipends, formulation quality control projects, and campus interview preference for graduating batches.',
        validity: 'Active (2024 - 2029)',
        deliverables: [
            'Semi-annual formulation plant visits & GMP workshops',
            'Dedicated industrial project dissertations for M.Pharm',
            'Priority campus recruitment drives',
        ],
    },
    {
        organization: "Dr. Reddy's Laboratories",
        type: 'API & Formulation Liaison',
        badge: 'API & Drug Discovery',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85',
        scope: 'Technical skill transfer, guest lectures by principal research scientists, and advanced chromatographic internship access.',
        validity: 'Active (2023 - 2028)',
        deliverables: [
            'Advanced HPLC & Mass Spectrometry training modules',
            'Annual technical seminars by Senior Research Scientists',
            'Merit-based R&D internships for postgraduates',
        ],
    },
    {
        organization: 'Apollo Multi-Specialty Teaching Hospital',
        type: 'Clinical & Hospital Affiliate',
        badge: 'Hospital Residency & Patient Care',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=85',
        scope: 'Inpatient ward rounds, bedside clinical pharmacy clerkships, patient case analysis, and hospital residency rotations for Pharm.D scholars.',
        validity: 'Active (2022 - 2027)',
        deliverables: [
            'Continuous hospital ward rounds & clinical clerkships',
            'Therapeutic drug monitoring & toxicological analysis',
            '1-Year intensive Pharm.D residency program',
        ],
    },
    {
        organization: 'Biophore India Pharmaceuticals',
        type: 'Analytical Research & Development',
        badge: 'Bio-equivalence & Regulatory',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85',
        scope: 'Bio-equivalence dissertations, co-authored Scopus research papers, and technical instrument maintenance training.',
        validity: 'Active (2024 - 2029)',
        deliverables: [
            'Extramural bio-analytical testing facility access',
            'Joint publications in Scopus / SCI Q1 index journals',
            'Bioassay and stability validation certifications',
        ],
    },
    {
        organization: 'Omega Healthcare Management Services',
        type: 'Medical Coding & Analytics',
        badge: 'Healthcare Informatics',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
        scope: 'Campus recruitment bootcamps, certified clinical medical coding training, and pharmacovigilance placements.',
        validity: 'Active (2023 - 2028)',
        deliverables: [
            'AAPC certified medical coding curriculum modules',
            'Pharmacovigilance & clinical data analytics bootcamps',
            'Guaranteed on-campus recruitment assessment panels',
        ],
    },
    {
        organization: 'JNTUA Research & Collaborative Hub',
        type: 'Apex Academic Affiliation',
        badge: 'University Patent Cell',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85',
        scope: 'Faculty development programs, academic curriculum revisions, state patent incubator access, and joint research symposiums.',
        validity: 'Permanent Statutory Council',
        deliverables: [
            'State-level patent incubator and intellectual property filings',
            'Inter-collegiate student innovation seed funding grants',
            'Faculty pedagogical empowerment conventions',
        ],
    },
];

const mouGallery = [
    {
        id: 1,
        title: 'Hospital Clinical Rounds Signing & Induction',
        category: 'Apollo Healthcare Liaison',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 2,
        title: 'Industrial GMP Formulation Orientation',
        category: 'Hetero Drugs Plant Training',
        image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 3,
        title: 'Analytical Instrumentation Workshop',
        category: "Dr. Reddy's Scientist Sessions",
        image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 4,
        title: 'Medical Coding Career Readiness Conclave',
        category: 'Omega Healthcare Drive',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 5,
        title: 'University Research Grant Symposium',
        category: 'JNTUA Academic Network',
        image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=900&q=85',
    },
    {
        id: 6,
        title: 'Bio-equivalence Research Presentation',
        category: 'Biophore Research Exchange',
        image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=85',
    },
];

export default function MOUsPage() {
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

    // Safe Parallax RAF Loop
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
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>Return to Home</span>
                    </Link>
                </div>

                {/* Page Header */}
                <div className={`${styles.header} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Collaborative Networks &amp; Alliances</span>
                    </div>
                    <h1 className={styles.title}>MOUs with Industries &amp; Institutions</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our formal Memorandums of Understanding connect academic curriculum with corporate pharmaceutical practice,
                        ensuring our scholars gain real-world exposure through hospitals, cGMP manufacturing plants, and research laboratories.
                    </p>
                </div>

                {/* Strategic Impact Metrics */}
                <div className={`${styles.statsGrid} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                    <div className={styles.statCard}>
                        <div className={styles.statIconBox}>
                            <Handshake size={24} />
                        </div>
                        <div>
                            <h3 className={styles.statValue}>15+</h3>
                            <p className={styles.statLabel}>Active Corporate &amp; Clinical MOUs</p>
                        </div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statIconBox}>
                            <Users2 size={24} />
                        </div>
                        <div>
                            <h3 className={styles.statValue}>100%</h3>
                            <p className={styles.statLabel}>Annual Student Internship Coverage</p>
                        </div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statIconBox}>
                            <Building2 size={24} />
                        </div>
                        <div>
                            <h3 className={styles.statValue}>500+ Beds</h3>
                            <p className={styles.statLabel}>Tertiary Teaching Hospital Access</p>
                        </div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statIconBox}>
                            <FileCheck2 size={24} />
                        </div>
                        <div>
                            <h3 className={styles.statValue}>30+</h3>
                            <p className={styles.statLabel}>Joint Patents &amp; Scopus Papers</p>
                        </div>
                    </div>
                </div>

                {/* Detailed Visual MOU Cards Grid */}
                <div className={`${styles.contentGrid} ${isVisible ? styles.animateReveal3 : styles.hiddenState}`}>
                    {mouList.map((mou, idx) => (
                        <div key={idx} className={styles.mouCard}>
                            <div className={styles.mouImgContainer}>
                                <img src={mou.image} alt={mou.organization} className={styles.mouImg} />
                                <div className={styles.mouImgOverlay} />
                                <span className={styles.mouBadge}>{mou.badge}</span>
                                <div className={styles.orgPillIcon}>
                                    <Handshake size={18} />
                                </div>
                            </div>

                            <div className={styles.mouBody}>
                                <div className={styles.topInfo}>
                                    <h3 className={styles.orgName}>{mou.organization}</h3>
                                    <p className={styles.orgType}>{mou.type}</p>
                                </div>

                                <p className={styles.mouScopeText}>{mou.scope}</p>

                                <div className={styles.deliverablesBox}>
                                    <span className={styles.deliverableHeading}>Key Collaborative Deliverables:</span>
                                    <div className={styles.deliverablesList}>
                                        {mou.deliverables.map((item, dIdx) => (
                                            <div key={dIdx} className={styles.deliverableRow}>
                                                <CheckCircle2 size={14} className={styles.checkIcon} />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.validityBadge}>
                                    <Calendar size={13} className={styles.calIcon} />
                                    <span>{mou.validity}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Real-Time Collaboration Showcase Gallery */}
                <section className={styles.gallerySection}>
                    <div className={styles.galleryHeader}>
                        <span className={styles.galleryEyebrow}>Field Engagements</span>
                        <h2 className={styles.galleryTitle}>MOU Engagements &amp; Industrial Conclaves</h2>
                        <p className={styles.gallerySubtitle}>
                            Glimpses of clinical hospital rounds, industrial manufacturing plant tours, and technical orientation workshops
                            organized through our strategic partnerships.
                        </p>
                    </div>

                    <div className={styles.galleryGrid}>
                        {mouGallery.map((item) => (
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
                        <img src={selectedImage} alt="MOU Showcase Expanded View" className={styles.lightboxImg} />
                    </div>
                </div>
            )}
        </div>
    );
}