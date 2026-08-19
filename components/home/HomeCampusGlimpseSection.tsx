'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './HomeCampusGlimpseSection.module.css';

const glimpses = [
    {
        title: 'Modern Labs',
        img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=500&q=80',
    },
    {
        title: 'Library',
        img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=500&q=80',
    },
    {
        title: 'Classrooms',
        img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=500&q=80',
    },
    {
        title: 'Events',
        img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=80',
    },
    {
        title: 'Hostel',
        img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=500&q=80',
    },
    {
        title: 'Sports',
        img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80',
    },
];

export default function HomeCampusGlimpseSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <span className={styles.eyebrow}>Life at Jagan&apos;s</span>
                        <h2 className={styles.title}>A Glimpse of Our Campus</h2>
                    </div>
                    <Link href="/infrastructure" className={styles.btnGallery}>
                        View Gallery <ArrowRight size={13} />
                    </Link>
                </div>

                <div className={styles.galleryGrid}>
                    {glimpses.map((item, idx) => (
                        <div key={idx} className={styles.galleryCard}>
                            <div className={styles.imgFrame}>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <p className={styles.label}>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}