'use client';

import React, { useState, useEffect } from 'react';
import {
    Users2,
    HeartHandshake,
    BookOpenCheck,
    Sparkles,
    Layers,
} from 'lucide-react';
import styles from './StudentSupportPage.module.css';

const supportList = [
    {
        category: 'PERSONALIZED MENTORSHIP',
        title: 'Faculty Mentorship Program',
        codeTag: 'MENTOR - 1:1 CELL',
        specTag: 'Faculty Assigned • Academic & Career Tracking',
        caption: 'One-on-One Academic, Research & Career Mentoring Framework',
        desc: 'One-on-one academic, research, and career mentoring assigned to every student from their first semester through graduation, fostering individual growth and guidance[cite: 19].',
        images: [
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Dedicated Mentors',
                desc: 'Assigned faculty mentors monitoring academic progress and well-being.',
            },
            {
                title: 'Career Roadmaps',
                desc: 'Personalized guidance for higher studies, GPAT preparation, and industry pathways.',
            },
        ],
    },
    {
        category: 'WELLNESS & COUNSELING',
        title: 'Psychological & Career Counseling',
        codeTag: 'WELLNESS - CELL',
        specTag: 'Confidential Support • Certified Counselors',
        caption: 'Confidential Mental Wellness & Professional Career Counseling',
        desc: 'Confidential professional counseling services to assist students with stress management, emotional balance, academic adjustment, and structured career planning[cite: 19].',
        images: [
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Confidential Care',
                desc: 'Private one-on-one sessions for stress reduction and personal well-being.',
            },
            {
                title: 'Career Guidance',
                desc: 'Aptitude assessment, resume workshops, and interview coaching modules.',
            },
        ],
    },
    {
        category: 'ACADEMIC REINFORCEMENT',
        title: 'Remedial Academic Classes',
        codeTag: 'ACADEMICS - SUPPORT',
        specTag: 'Doubt Clearing • Focused Tutorials',
        caption: 'Focused Tutorial Sessions & Subject Mastery Programs',
        desc: 'Specialized doubt clearing and academic tutorial sessions designed to reinforce foundational concepts and provide tailored assistance for challenging subjects[cite: 19].',
        images: [
            'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
        ],
        features: [
            {
                title: 'Targeted Tutorials',
                desc: 'Small-batch peer study and faculty-led concept reinforcement.',
            },
            {
                title: 'Exam Preparation',
                desc: 'Structured problem-solving drills and model paper review sessions.',
            },
        ],
    },
];

export default function StudentSupportPage() {
    const [slideIndices, setSlideIndices] = useState<number[]>(
        supportList.map(() => 0)
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndices((prev) =>
                prev.map((idx, sIdx) => (idx + 1) % supportList[sIdx].images.length)
            );
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const handleManualDotClick = (supportIdx: number, targetSlideIdx: number) => {
        setSlideIndices((prev) => {
            const updated = [...prev];
            updated[supportIdx] = targetSlideIdx;
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
                        <span>Guidance &amp; Care</span>
                    </div>
                    <h1 className={styles.title}>Student Support</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Dedicated support frameworks ensuring student wellness, personalized faculty mentoring, and career development[cite: 19].
                    </p>
                </div>

                {/* Alternating Zigzag Support Stack */}
                <div className={styles.facilitiesList}>
                    {supportList.map((item, sIdx) => {
                        const currentImgIdx = slideIndices[sIdx];
                        const isReversed = sIdx % 2 !== 0; // Alternates layout on desktop (Image on Right on odd indices)

                        return (
                            <div
                                key={sIdx}
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

                                        {/* Top-Left Badges */}
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
                                                        onClick={() => handleManualDotClick(sIdx, dotIdx)}
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