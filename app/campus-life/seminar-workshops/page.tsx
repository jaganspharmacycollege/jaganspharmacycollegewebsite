'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Layers } from 'lucide-react';
import styles from './SeminarWorkshopsPage.module.css';

const workshopsList = [
    {
        category: 'ANALYTICAL TRAINING',
        title: 'Hands-on HPLC & Analytical Validation',
        codeTag: 'WORKSHOP LAB A',
        specTag: '2-Day Intensive Senior Scientists',
        caption: 'Hands-on Practical Chromatography & Spectral Validation',
        desc: 'Intensive two-day workshops conducted by senior instrumentation scientists covering method development, calibration, system suitability, and real-time chromatographic analysis.',
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
        codeTag: 'SEMINAR PV CELL',
        specTag: 'Global Databases ADR Protocols',
        caption: 'Industry Simulation Training on Adverse Drug Reaction Reporting',
        desc: 'Specialized training sessions on ADR reporting protocols, causality assessment, and global safety database software used in clinical pharmacovigilance units.',
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
        codeTag: 'CONFERENCE 2026',
        specTag: 'Keynote Panels International Faculty',
        caption: 'Annual National Symposium on Emerging Drug Delivery Systems',
        desc: 'Annual conferences featuring guest keynote lectures from renowned international professors, industry executives, and clinical scientists exploring emerging therapeutics.',
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

const sectionDelays = [
    styles.sectionDelay1,
    styles.sectionDelay2,
    styles.sectionDelay3,
];

export default function SeminarWorkshopsPage() {
    const [slideIndices, setSlideIndices] = useState<number[]>(
        workshopsList.map(() => 0)
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
                    (idx, wIdx) => (idx + 1) % workshopsList[wIdx].images.length
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
        workshopIdx: number,
        targetSlideIdx: number
    ) => {
        setSlideIndices((prev) => {
            const updated = [...prev];
            updated[workshopIdx] = targetSlideIdx;
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
                        <span>Knowledge Enhancement</span>
                    </div>
                    <h1 className={styles.title}>Seminar &amp; Workshops</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Continuous skill development workshops, hands-on simulation training, and national pharmacy seminars.
                    </p>
                </div>

                {/* Alternating Zigzag Workshops Stack */}
                <div className={styles.facilitiesList}>
                    {workshopsList.map((item, wIdx) => {
                        const currentImgIdx = slideIndices[wIdx];
                        const isReversed = wIdx % 2 !== 0;

                        return (
                            <div
                                key={wIdx}
                                className={`${styles.facilitySectionCard} ${isReversed ? styles.rowReversed : ''
                                    } ${isVisible ? sectionDelays[wIdx % sectionDelays.length] : styles.hiddenState}`}
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
                                            <span className={styles.specBadge}>{item.specTag}</span>
                                        </div>

                                        {/* Bottom Caption & Synchronized Dots */}
                                        <div className={styles.captionOverlay}>
                                            <h4 className={styles.captionText}>{item.caption}</h4>
                                            <div className={styles.dotsWrapper}>
                                                {item.images.map((_, dotIdx) => (
                                                    <button
                                                        key={dotIdx}
                                                        onClick={() =>
                                                            handleManualDotClick(wIdx, dotIdx)
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