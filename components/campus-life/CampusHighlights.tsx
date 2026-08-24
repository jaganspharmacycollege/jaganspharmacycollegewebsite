'use client';

import React from 'react';
import Link from 'next/link';
import {
    FlaskConical,
    BookOpen,
    Trophy,
    Sparkles,
    Home,
    ArrowRight,
} from 'lucide-react';
import styles from './CampusHighlights.module.css';

const highlights = [
    {
        title: 'Advanced Laboratories',
        desc: 'Well-equipped labs for practical learning and pharmaceutical research.',
        image:
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
        icon: FlaskConical,
        theme: styles.themeEmerald,
    },
    {
        title: 'Rich Library',
        desc: 'A vast collection of books, international journals and digital e-resources.',
        image:
            'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
        icon: BookOpen,
        theme: styles.themeAmber,
    },
    {
        title: 'Sports & Fitness',
        desc: 'Indoor and outdoor sports facilities and athletics to keep you energized.',
        image:
            'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=600&q=80',
        icon: Trophy,
        theme: styles.themePurple,
    },
    {
        title: 'Cultural Activities',
        desc: 'Annual festivals, creative arts events and student clubs to nurture your talents.',
        image:
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
        icon: Sparkles,
        theme: styles.themeTeal,
    },
    {
        title: 'Comfortable Hostel',
        desc: 'Well-furnished, hygienic and secure residential accommodation for boys & girls.',
        image:
            'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
        icon: Home,
        theme: styles.themePeach,
    },
];

export default function CampusHighlights() {
    return (
        <section className={styles.section}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Heading with Gold Line */}
                <div className={styles.header}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Infrastructure &amp; Amenities</span>
                    </div>
                    <h2 className={styles.title}>Campus Highlights</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.headerSub}>
                        Explore the state-of-the-art academic and recreational facilities that make life at Jagan&apos;s inspiring.
                    </p>
                </div>

                {/* 5 Cards Row */}
                <div className={styles.grid}>
                    {highlights.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className={styles.card}>
                                <div className={styles.imageFrame}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={styles.cardImg}
                                    />
                                    <div className={styles.imageOverlay} />
                                </div>

                                <div className={styles.content}>
                                    <div className={styles.iconHeader}>
                                        <div className={`${styles.iconSquircle} ${item.theme}`}>
                                            <Icon size={18} strokeWidth={2.2} />
                                        </div>
                                        <h3 className={styles.cardTitle}>{item.title}</h3>
                                    </div>
                                    <p className={styles.description}>{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Centered CTA Button */}
                <div className={styles.btnWrapper}>
                    <Link href="/campus-life/facilities" className={styles.viewAllBtn}>
                        <span>View All Facilities</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}