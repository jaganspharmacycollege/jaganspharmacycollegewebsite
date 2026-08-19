'use client';

import React from 'react';
import styles from './StudentTestimonials.module.css';

const testimonials = [
    {
        quote: 'The campus environment is amazing! We get great support from faculty and plenty of opportunities to grow.',
        name: 'Anusha R.',
        role: 'B. Pharmacy III Year',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    {
        quote: "Jagan's College of Pharmacy feels like a second home. The facilities and exposure here are excellent.",
        name: 'Karthik M.',
        role: 'Pharm.D II Year',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
        quote: "I've learned so much beyond academics through events, clubs and interactions. Truly a holistic experience!",
        name: 'Sreeja P.',
        role: 'M. Pharmacy I Year',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    },
];

export default function StudentTestimonials() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>What Our Students Say</h2>
                    <div className={styles.accentLine} />
                </div>

                {/* 3 Testimonial Cards Grid */}
                <div className={styles.grid}>
                    {testimonials.map((item, idx) => (
                        <div key={idx} className={styles.card}>
                            {/* Left Content Area */}
                            <div className={styles.leftContent}>
                                <div className={styles.quoteMark}>““</div>
                                <p className={styles.quoteText}>{item.quote}</p>
                                <div className={styles.meta}>
                                    <h4 className={styles.studentName}>{item.name}</h4>
                                    <p className={styles.studentRole}>{item.role}</p>
                                </div>
                            </div>

                            {/* Right Circular Avatar Badge */}
                            <div className={styles.avatarBadge}>
                                <img src={item.image} alt={item.name} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}