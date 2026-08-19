'use client';

import React from 'react';
import Link from 'next/link';
import { FlaskConical, BookOpen, Trophy, Sparkles, Home, ArrowRight } from 'lucide-react';
import styles from './CampusHighlights.module.css';

const highlights = [
    {
        title: 'Advanced Laboratories',
        desc: 'Well-equipped labs for practical learning and research.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
        icon: FlaskConical,
    },
    {
        title: 'Rich Library',
        desc: 'A vast collection of books, journals and digital resources.',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
        icon: BookOpen,
    },
    {
        title: 'Sports & Fitness',
        desc: 'Indoor and outdoor sports facilities to keep you active.',
        image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=600&q=80',
        icon: Trophy,
    },
    {
        title: 'Cultural Activities',
        desc: 'Festivals, events and clubs to nurture your talents.',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
        icon: Sparkles,
    },
    {
        title: 'Comfortable Hostel',
        desc: 'Well-furnished, hygienic and comfortable accommodation.',
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
        icon: Home,
    },
];

export default function CampusHighlights() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Section Heading with Gold Line */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Campus Highlights</h2>
                    <div className={styles.accentLine} />
                </div>

                {/* 5 Cards Row */}
                <div className={styles.grid}>
                    {highlights.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className={styles.card}>
                                <div className={styles.imageFrame}>
                                    <img src={item.image} alt={item.title} />
                                </div>

                                <div className={styles.content}>
                                    <div className={styles.iconHeader}>
                                        <div className={styles.iconCircle}>
                                            <Icon size={15} strokeWidth={1.5} />
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
                        View All Facilities <ArrowRight size={15} />
                    </Link>
                </div>
            </div>
        </section>
    );
}