'use client';

import React, { useState, useEffect } from 'react';
import {
    FlaskConical,
    ShieldCheck,
    GraduationCap,
    Sparkles,
    Layers,
} from 'lucide-react';
import styles from './SeminarWorkshopsPage.module.css';

const workshopsList = [
    {
        category: 'ANALYTICAL TRAINING',
        title: 'Hands-on HPLC & Analytical Validation',
        codeTag: 'WORKSHOP - LAB A',
        specTag: '2-Day Intensive • Senior Scientists',
        caption: 'Hands-on Practical Chromatography & Spectral Validation',
        desc: 'Intensive two-day workshops conducted by senior instrumentation scientists covering method development, calibration, system suitability, and real-time chromatographic analysis[cite: 17].',
        images: [
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Method Validation',
                desc: 'ICH guideline compliance, linearity, accuracy, and precision testing.',
            },
            {
                title: 'Instrument Handling',
                desc: 'Direct operation of quaternary pump HPLC systems and software.',
            },
        ],
    },
    {
        category: 'CLINICAL SAFETY & REGULATORY',
        title: 'Pharmacovigilance & Drug Safety',
        codeTag: 'SEMINAR - PV CELL',
        specTag: 'Global Databases • ADR Protocols',
        caption: 'Industry Simulation Training on Adverse Drug Reaction Reporting',
        desc: 'Specialized training sessions on ADR reporting protocols, causality assessment, and global safety database software used in clinical pharmacovigilance units[cite: 17].',
        images: [
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'ADR Monitoring',
                desc: 'Standardized case intake, triage, and regulatory submissions.',
            },
            {
                title: 'Safety Databases',
                desc: 'Live walkthroughs of industry-grade safety monitoring platforms.',
            },
        ],
    },
    {
        category: 'ACADEMIC CONFERENCES',
        title: 'National Pharmacy Seminars',
        codeTag: 'CONFERENCE - 2026',
        specTag: 'Keynote Panels • International Faculty',
        caption: 'Annual National Symposium on Emerging Drug Delivery Systems',
        desc: 'Annual conferences featuring guest keynote lectures from renowned international professors, industry executives, and clinical scientists exploring emerging therapeutics[cite: 17].',
        images: [
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Keynote Lectures',
                desc: 'Interactive plenary talks on translational pharmaceutical research.',
            },
            {
                title: 'Poster Sessions',
                desc: 'Scholarly presentations and panel evaluations with cash prizes.',
            },
        ],
    },
];

export default function SeminarWorkshopsPage() {
    const [slideIndices, setSlideIndices] = useState<number[]>(
        workshopsList.map(() => 0)
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndices((prev) =>
                prev.map((idx, wIdx) => (idx + 1) % workshopsList[wIdx].images.length)
            );
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const handleManualDotClick = (workshopIdx: number, targetSlideIdx: number) => {
        setSlideIndices((prev) => {
            const updated = [...prev];
            updated[workshopIdx] = targetSlideIdx;
            return updated;
        });
    };

    return (
        <div className={styles.pageWrapper}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.pageHeader}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Knowledge Enhancement</span>
                    </div>
                    <h1 className={styles.title}>Seminar &amp; Workshops</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Continuous skill development workshops, hands-on simulation training, and national pharmacy seminars[cite: 17].
                    </p>
                </div>

                {/* Alternating Zigzag Workshops Stack */}
                <div className={styles.facilitiesList}>
                    {workshopsList.map((item, wIdx) => {
                        const currentImgIdx = slideIndices[wIdx];
                        const isReversed = wIdx % 2 !== 0; // Alternates layout on desktop (Image on Right on odd indices)

                        return (
                            <div
                                key={wIdx}
                                className={`${styles.facilitySectionCard} ${isReversed ? styles.rowReversed : ''
                                    }`}
                            >
                                {/* 1. Carousel Box */}
                                <div className={styles.carouselContainer}>
                                    <div className={styles.carouselFrame}>
                                        {item.images.map((imgSrc, imgIdx) => (
                                            <img
                                                key={imgIdx}
                                                src={imgSrc}
                                                alt={`${item.title} Image ${imgIdx + 1}`}
                                                className={`${styles.carouselImg} ${imgIdx === currentImgIdx
                                                        ? styles.activeImg
                                                        : styles.inactiveImg
                                                    }`}
                                            />
                                        ))}
                                        <div className={styles.imageOverlay} />

                                        {/* Top-Left Amber Badges */}
                                        <div className={styles.badgesHeader}>
                                            <span className={styles.codeBadge}>
                                                <Layers size={13} className={styles.codeIcon} />
                                                <span>{item.codeTag}</span>
                                            </span>
                                            <span className={styles.specBadge}>
                                                {item.specTag}
                                            </span>
                                        </div>

                                        {/* Bottom Caption & Synchronized Dots */}
                                        <div className={styles.captionOverlay}>
                                            <h4 className={styles.captionText}>{item.caption}</h4>

                                            <div className={styles.dotsWrapper}>
                                                {item.images.map((_, dotIdx) => (
                                                    <button
                                                        key={dotIdx}
                                                        onClick={() => handleManualDotClick(wIdx, dotIdx)}
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
                                        {item.category}
                                    </span>
                                    <h2 className={styles.facilityTitle}>{item.title}</h2>
                                    <div className={styles.subAccentLine} />

                                    <p className={styles.facilityDesc}>{item.desc}</p>

                                    {/* 2 Feature Sub-Cards */}
                                    <div className={styles.subCardsGrid}>
                                        {item.features.map((feat, featIdx) => (
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