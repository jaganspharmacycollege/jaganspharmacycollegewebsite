'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Layers } from 'lucide-react';
import styles from './IndustrialVisitsPage.module.css';

const industrialVisitsList = [
    {
        category: 'PHARMA MANUFACTURING',
        title: 'Formulation & Manufacturing Units',
        codeTag: 'GMP PRODUCTION',
        specTag: 'Solid & Liquid Dosages Sterile Cleanrooms',
        caption: 'Guided Tours to GMP-Certified Formulation Plants',
        desc: 'Guided tours to GMP-certified solid dosage and sterile parenteral pharmaceutical production plants, exposing students to large-scale compression, coating, and automated packaging lines.',
        images: [
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'GMP Standards',
                desc: 'Observation of aseptic processing and sterile manufacturing protocols.',
            },
            {
                title: 'Automated Packaging',
                desc: 'Real-time demonstration of blister packing and automated bottling lines.',
            },
        ],
    },
    {
        category: 'QUALITY ASSURANCE & QC',
        title: 'Analytical & Quality Control Labs',
        codeTag: 'QC/QA PROTOCOLS',
        specTag: 'HPLC & GC-MS Stability Chambers',
        caption: 'Industrial Instrumental Analysis & Quality Control Testing',
        desc: 'Direct exposure to industrial HPLC, GC-MS instruments, FTIR spectrometers, and stability chamber operations under rigorous regulatory compliance.',
        images: [
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Advanced Equipment',
                desc: 'Hands-on overview of chromatographic and spectroscopic instrumentation.',
            },
            {
                title: 'Stability Testing',
                desc: 'Monitoring shelf-life and drug degradation pathways in climate chambers.',
            },
        ],
    },
    {
        category: 'CLINICAL TRIALS & R&D',
        title: 'Clinical Research Organizations (CRO)',
        codeTag: 'CRO BIOEQUIVALENCE',
        specTag: 'Phase I-IV Trials Bioavailability',
        caption: 'Visits to Premier Clinical Research & Pharmacokinetics Centers',
        desc: 'Visits to leading bioequivalence, pharmacokinetic analysis, and clinical trial centers across Hyderabad and Chennai to explore modern drug testing workflows.',
        images: [
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Trial Workflows',
                desc: 'Understanding ethical clearances, clinical protocols, and GCP guidelines.',
            },
            {
                title: 'Bioanalysis',
                desc: 'Bioavailability studies and plasma drug concentration monitoring.',
            },
        ],
    },
];

const sectionDelays = [
    styles.sectionDelay1,
    styles.sectionDelay2,
    styles.sectionDelay3,
];

export default function IndustrialVisitsPage() {
    const [slideIndices, setSlideIndices] = useState<number[]>(
        industrialVisitsList.map(() => 0)
    );
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // 5000ms auto-cycling carousel with 1.5s cross-fade
    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndices((prev) =>
                prev.map(
                    (idx, vIdx) => (idx + 1) % industrialVisitsList[vIdx].images.length
                )
            );
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Repeating scroll-triggered entrance detection
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Ultra-slow fluid linear-interpolated (lerp 0.035) parallax animation
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

    const handleManualDotClick = (
        visitIdx: number,
        targetSlideIdx: number
    ) => {
        setSlideIndices((prev) => {
            const updated = [...prev];
            updated[visitIdx] = targetSlideIdx;
            return updated;
        });
    };

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            {/* Ambient Parallax Lighting Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div
                    className={`${styles.pageHeader} ${isVisible ? styles.animateHeader : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Real-World Industry Exposure</span>
                    </div>
                    <h1 className={styles.title}>Industrial Visits</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Mandatory educational tours to leading pharmaceutical manufacturing plants and R&amp;D facilities to bridge theory and industry practice.
                    </p>
                </div>

                {/* Alternating Zigzag Industrial Visits Stack */}
                <div className={styles.facilitiesList}>
                    {industrialVisitsList.map((visit, vIdx) => {
                        const currentImgIdx = slideIndices[vIdx];
                        const isReversed = vIdx % 2 !== 0;

                        return (
                            <div
                                key={vIdx}
                                className={`${styles.facilitySectionCard} ${isReversed ? styles.rowReversed : ''
                                    } ${isVisible ? sectionDelays[vIdx % sectionDelays.length] : styles.hiddenState}`}
                            >
                                {/* 1. Carousel Box */}
                                <div className={styles.carouselContainer}>
                                    <div className={styles.carouselFrame}>
                                        {visit.images.map((imgSrc, imgIdx) => (
                                            <img
                                                key={imgIdx}
                                                src={imgSrc}
                                                alt={`${visit.title} Image ${imgIdx + 1}`}
                                                className={`${styles.carouselImg} ${imgIdx === currentImgIdx
                                                        ? styles.activeImg
                                                        : styles.inactiveImg
                                                    }`}
                                            />
                                        ))}
                                        <div className={styles.imageOverlay} />

                                        {/* Top-Left Badges */}
                                        <div className={styles.badgesHeader}>
                                            <span className={styles.codeBadge}>
                                                <Layers size={13} className={styles.codeIcon} />
                                                <span>{visit.codeTag}</span>
                                            </span>
                                            <span className={styles.specBadge}>{visit.specTag}</span>
                                        </div>

                                        {/* Bottom Caption & Synchronized Dots */}
                                        <div className={styles.captionOverlay}>
                                            <h4 className={styles.captionText}>{visit.caption}</h4>
                                            <div className={styles.dotsWrapper}>
                                                {visit.images.map((_, dotIdx) => (
                                                    <button
                                                        key={dotIdx}
                                                        onClick={() =>
                                                            handleManualDotClick(vIdx, dotIdx)
                                                        }
                                                        className={`${styles.dot} ${dotIdx === currentImgIdx ? styles.activeDot : ''
                                                            }`}
                                                        aria-label={`Show image ${dotIdx + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Content & Spec Sub-Cards */}
                                <div className={styles.infoContent}>
                                    <span className={styles.facilityCategory}>
                                        {visit.category}
                                    </span>
                                    <h2 className={styles.facilityTitle}>{visit.title}</h2>
                                    <div className={styles.subAccentLine} />
                                    <p className={styles.facilityDesc}>{visit.desc}</p>

                                    {/* 2 Feature Sub-Cards */}
                                    <div className={styles.subCardsGrid}>
                                        {visit.features.map((feat, featIdx) => (
                                            <div key={featIdx} className={styles.subCard}>
                                                <h3 className={styles.subCardTitle}>{feat.title}</h3>
                                                <p className={styles.subCardDesc}>{feat.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}