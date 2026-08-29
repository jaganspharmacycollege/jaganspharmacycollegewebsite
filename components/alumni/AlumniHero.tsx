'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Building2 } from 'lucide-react';
import styles from './AlumniHero.module.css';

const heroBgSlides = [
    {
        image:
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
        caption: 'Celebrating Global Pharmaceutical Leadership & Innovation',
    },
    {
        image:
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80',
        caption: 'Alumni Network Across 30+ Countries & Fortune 500 Healthcare Leaders',
    },
    {
        image:
            'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80',
        caption: 'Annual Alumni Conventions, Research Symposia & Student Mentorship',
    },
];

interface AlumniProfile {
    id: string;
    name: string;
    role: string;
    company: string;
    batch: string;
    img: string;
}

interface AlumniCardSlot {
    slotId: string;
    cardStyle: string;
    animClass: string;
    profiles: AlumniProfile[];
}

const alumniCardSlots: AlumniCardSlot[] = [
    {
        slotId: 'slot-1',
        cardStyle: styles.cardPos1,
        animClass: styles.animDelay1,
        profiles: [
            {
                id: 'p1',
                name: 'Dr. Priya Sharma',
                role: 'Clinical Research Director',
                company: 'Novartis',
                batch: 'Class of 2014',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
            },
            {
                id: 'p2',
                name: 'Dr. Meera Nambiar',
                role: 'Clinical Pharmacology Lead',
                company: 'GSK Healthcare',
                batch: 'Class of 2011',
                img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=700&q=80',
            },
            {
                id: 'p3',
                name: 'Pooja Hegde',
                role: 'Bioequivalence Manager',
                company: 'Sun Pharma',
                batch: 'Class of 2017',
                img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
            },
        ],
    },
    {
        slotId: 'slot-2',
        cardStyle: styles.cardPos2,
        animClass: styles.animDelay2,
        profiles: [
            {
                id: 'p4',
                name: 'Rahul Varma',
                role: 'Principal Formulation Scientist',
                company: 'Pfizer',
                batch: 'Class of 2016',
                img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
            },
            {
                id: 'p5',
                name: 'Arjun Menon',
                role: 'Senior Drug Discovery Scientist',
                company: 'Biocon Biologics',
                batch: 'Class of 2013',
                img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80',
            },
            {
                id: 'p6',
                name: 'Manish Rawat',
                role: 'Principal Analytical Chemist',
                company: 'Aurobindo Pharma',
                batch: 'Class of 2015',
                img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80',
            },
        ],
    },
    {
        slotId: 'slot-3',
        cardStyle: styles.cardPos3,
        animClass: styles.animDelay3,
        profiles: [
            {
                id: 'p7',
                name: 'Dr. Sneha Reddy',
                role: 'Regulatory Affairs Manager',
                company: 'AstraZeneca',
                batch: 'Class of 2012',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80',
            },
            {
                id: 'p8',
                name: 'Kavita Iyer',
                role: 'Global Compliance Auditor',
                company: 'Johnson & Johnson',
                batch: 'Class of 2010',
                img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=700&q=80',
            },
            {
                id: 'p9',
                name: 'Dr. Ritu Verma',
                role: 'Pharmacovigilance Scientist',
                company: 'Sanofi',
                batch: 'Class of 2015',
                img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80',
            },
        ],
    },
    {
        slotId: 'slot-4',
        cardStyle: styles.cardPos4,
        animClass: styles.animDelay4,
        profiles: [
            {
                id: 'p10',
                name: 'Karthik Nair',
                role: 'VP Quality Assurance',
                company: "Dr. Reddy's Labs",
                batch: 'Class of 2010',
                img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=700&q=80',
            },
            {
                id: 'p11',
                name: 'Suresh Balaji',
                role: 'Director of QA & QC',
                company: 'Cipla Global',
                batch: 'Class of 2009',
                img: 'https://images.unsplash.com/photo-1560250097-0693528c311a?auto=format&fit=crop&w=700&q=80',
            },
            {
                id: 'p12',
                name: 'Deepak Joshi',
                role: 'Head of Quality Operations',
                company: 'Lupin Pharma',
                batch: 'Class of 2012',
                img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=700&q=80',
            },
        ],
    },
    {
        slotId: 'slot-5',
        cardStyle: styles.cardPos5,
        animClass: styles.animDelay5,
        profiles: [
            {
                id: 'p13',
                name: 'Ananya Deshmukh',
                role: 'Founder & CEO',
                company: 'BioPharma Solutions',
                batch: 'Class of 2018',
                img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
            },
            {
                id: 'p14',
                name: 'Divya Agarwal',
                role: 'Co-Founder & COO',
                company: 'PharmaTech Analytics',
                batch: 'Class of 2019',
                img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80',
            },
            {
                id: 'p15',
                name: 'Suhani Kapoor',
                role: 'Managing Director',
                company: 'Herbal BioFormulations',
                batch: 'Class of 2014',
                img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
            },
        ],
    },
    {
        slotId: 'slot-6',
        cardStyle: styles.cardPos6,
        animClass: styles.animDelay6,
        profiles: [
            {
                id: 'p16',
                name: 'Dr. Vikram Sethi',
                role: 'Head of Pharmacovigilance',
                company: 'Sun Pharma',
                batch: 'Class of 2011',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
            },
            {
                id: 'p17',
                name: 'Dr. Alok Srivastava',
                role: 'Senior Clinical Reviewer',
                company: 'US FDA',
                batch: 'Class of 2008',
                img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=700&q=80',
            },
            {
                id: 'p18',
                name: 'Naveen Chawla',
                role: 'Principal Safety Evaluator',
                company: 'Abbott Labs',
                batch: 'Class of 2013',
                img: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=700&q=80',
            },
        ],
    },
];

export default function AlumniHero() {
    const [activeProfileIdx, setActiveProfileIdx] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    // Cinematic 5000ms auto-cycle
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveProfileIdx((prev) => (prev + 1) % 3);
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

    // Ultra-slow fluid linear-interpolated (lerp) parallax animation
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
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06}px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05}px, 0)`;
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

    return (
        <section ref={sectionRef} className={styles.heroSection}>
            {/* Background Auto-Cycling Slider */}
            <div className={styles.bgSlider}>
                {heroBgSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`${styles.bgSlide} ${idx === activeProfileIdx ? styles.activeSlide : styles.inactiveSlide
                            }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
            </div>

            {/* Emerald Vignette Overlay */}
            <div className={styles.overlay} />

            {/* Ambient Parallax Radial Glows */}
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Eyebrow Tag */}
                <div
                    className={`${styles.eyebrowTag} ${isVisible ? styles.animateRevealEyebrow : styles.hiddenState
                        }`}
                >
                    <Sparkles size={14} className={styles.eyebrowIcon} />
                    <span>Global Alumni Network</span>
                </div>

                {/* Dynamic Bouncy Cluster Grid */}
                <div className={styles.clusterStage}>
                    {alumniCardSlots.map((slot) => {
                        const currentProfile = slot.profiles[activeProfileIdx];
                        return (
                            <div
                                key={slot.slotId}
                                className={`${styles.cardWrapper} ${slot.cardStyle} ${isVisible ? slot.animClass : styles.hiddenState
                                    }`}
                            >
                                <div
                                    className={styles.largeCardPill}
                                    tabIndex={0}
                                    role="button"
                                    aria-label={`${currentProfile.name}, ${currentProfile.role} at ${currentProfile.company}`}
                                >
                                    {/* Image Stack Layer */}
                                    <div className={styles.imageStack}>
                                        {slot.profiles.map((profile, pIdx) => (
                                            <img
                                                key={profile.id}
                                                src={profile.img}
                                                alt={profile.name}
                                                className={`${styles.largeCardImg} ${pIdx === activeProfileIdx
                                                        ? styles.activeCardImg
                                                        : styles.inactiveCardImg
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Strictly Matched Hover Tooltip */}
                                    <div className={styles.chipTooltip}>
                                        <strong className={styles.tooltipName}>
                                            {currentProfile.name}
                                        </strong>
                                        <span className={styles.tooltipRole}>
                                            {currentProfile.role}
                                        </span>
                                        <span className={styles.tooltipCompany}>
                                            <Building2 size={12} /> {currentProfile.company} (
                                            {currentProfile.batch})
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Synchronized Carousel Dots */}
                <div
                    className={`${styles.dotsWrapper} ${isVisible ? styles.animateRevealDots : styles.hiddenState
                        }`}
                >
                    {heroBgSlides.map((_, dotIdx) => (
                        <button
                            key={dotIdx}
                            onClick={() => setActiveProfileIdx(dotIdx)}
                            className={`${styles.dot} ${dotIdx === activeProfileIdx ? styles.activeDot : ''
                                }`}
                            aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}