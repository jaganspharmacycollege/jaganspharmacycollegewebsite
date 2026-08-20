'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './HomeCampusGlimpseSection.module.css';

const glimpses = [
    {
        title: 'Modern Labs',
        img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'Rich Library',
        img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'Smart Classrooms',
        img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'Events & Fests',
        img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'Hostel Life',
        img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'Sports & Arena',
        img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    },
];

export default function HomeCampusGlimpseSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.headerText}>
                        <span className={styles.eyebrow}>Life at Jagan&apos;s</span>
                        <h2 className={styles.title}>A Glimpse of Our Campus</h2>
                    </div>
                    <Link href="/infrastructure" className={styles.btnGallery}>
                        <span>View Full Gallery</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>

                {/* 6-Card Image Grid */}
                <div className={styles.galleryGrid}>
                    {glimpses.map((item, idx) => (
                        <Link
                            key={idx}
                            href="/infrastructure"
                            className={styles.galleryCard}
                        >
                            <div className={styles.imgFrame}>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className={styles.cardOverlay} />
                            <div className={styles.cardContent}>
                                <p className={styles.labelTag}>{item.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}