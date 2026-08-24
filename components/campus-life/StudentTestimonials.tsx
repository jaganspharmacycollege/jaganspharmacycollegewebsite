'use client';

import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import styles from './StudentTestimonials.module.css';

const testimonials = [
    {
        quote:
            'The campus environment is amazing! We get great support from faculty and plenty of opportunities to grow.',
        name: 'Anusha R.',
        role: 'B. Pharmacy III Year',
        image:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        theme: styles.themeEmerald,
    },
    {
        quote:
            "Jagan's College of Pharmacy feels like a second home. The facilities and exposure here are excellent.",
        name: 'Karthik M.',
        role: 'Pharm.D II Year',
        image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        theme: styles.themeAmber,
    },
    {
        quote:
            "I've learned so much beyond academics through events, clubs and interactions. Truly a holistic experience!",
        name: 'Sreeja P.',
        role: 'M. Pharmacy I Year',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
        theme: styles.themePurple,
    },
];

export default function StudentTestimonials() {
    return (
        <section className={styles.section}>
            {/* Ambient Parallax Lighting Glows */}
            <div className={styles.bgOrbLeft} />
            <div className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Student Voices</span>
                    </div>
                    <h2 className={styles.title}>What Our Students Say</h2>
                    <div className={styles.accentLine} />
                    <p className={styles.headerSub}>
                        Hear directly from our students about their academic journey, laboratory exposure, and campus life.
                    </p>
                </div>

                {/* 3 Testimonial Cards Grid */}
                <div className={styles.grid}>
                    {testimonials.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            {/* Left Content Area */}
                            <div className={styles.leftContent}>
                                <div className={`${styles.quoteMarkBadge} ${item.theme}`}>
                                    <Quote size={16} strokeWidth={2.4} />
                                </div>
                                <p className={styles.quoteText}>&ldquo;{item.quote}&rdquo;</p>

                                <div className={styles.meta}>
                                    <h4 className={styles.studentName}>{item.name}</h4>
                                    <p className={styles.studentRole}>{item.role}</p>
                                </div>
                            </div>

                            {/* Right Circular Avatar Badge */}
                            <div className={`${styles.avatarBadge} ${item.theme}`}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className={styles.avatarImg}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}