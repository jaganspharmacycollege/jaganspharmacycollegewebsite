'use client';

import React, { useState, useEffect } from 'react';
import { Layers } from 'lucide-react';
import styles from './InfrastructureShared.module.css';

// Replace src paths with local assets (e.g. '/images/infrastructure/lh-1.jpg') later
const classroomImages = [
    {
        name: 'Dr. A.P.J. Abdul Kalam Smart Lecture Hall',
        roomNo: 'LH - 01 (Block A)',
        capacity: '120 Seats • Smart Podium',
        src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
        alt: 'Dr. A.P.J. Abdul Kalam Smart Lecture Hall',
    },
    {
        name: 'Sir C.V. Raman Multimedia Gallery Hall',
        roomNo: 'LH - 02 (Block A)',
        capacity: '150 Seats • Tiered Gallery',
        src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
        alt: 'Sir C.V. Raman Multimedia Gallery Hall',
    },
    {
        name: 'Pharmaceutics Interactive Digital Classroom',
        roomNo: 'CR - 104 (Block B)',
        capacity: '90 Seats • Interactive Digital Board',
        src: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
        alt: 'Pharmaceutics Interactive Digital Classroom',
    },
    {
        name: 'Clinical Pharmacy & Case Study Seminar Hall',
        roomNo: 'CR - 202 (Block B)',
        capacity: '80 Seats • Audio-Visual System',
        src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
        alt: 'Clinical Pharmacy & Case Study Seminar Hall',
    },
];

export default function Classrooms() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % classroomImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.sectionAlt}>
            <div className={styles.container}>
                <div className={styles.twoColGrid}>
                    {/* Auto-sliding Image Carousel Frame */}
                    <div className={`${styles.imageFrame} relative overflow-hidden group shadow-xl rounded-2xl`}>
                        {/* Sliding Images */}
                        {classroomImages.map((item, idx) => (
                            <img
                                key={idx}
                                src={item.src}
                                alt={item.alt}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                                    }`}
                            />
                        ))}

                        {/* Dark Gradient Overlay for Caption Legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                        {/* Room Name & Badge Overlay */}
                        <div className="absolute bottom-10 left-4 right-4 z-10 text-white">
                            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-500/90 text-white backdrop-blur-md shadow-sm">
                                    <Layers size={11} /> {classroomImages[currentIndex].roomNo}
                                </span>
                                <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                                    {classroomImages[currentIndex].capacity}
                                </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold leading-snug drop-shadow-md text-white">
                                {classroomImages[currentIndex].name}
                            </h3>
                        </div>

                        {/* Navigation Dots Indicator */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                            {classroomImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                        ? 'w-6 bg-amber-400'
                                        : 'w-2 bg-white/60 hover:bg-white'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <span className={styles.eyebrow}>Learning Spaces</span>
                        <h2 className={styles.title}>Classrooms</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.descText}>
                            Our spacious, well-ventilated lecture halls are acoustically treated and equipped with
                            modern multimedia teaching aids, LCD projectors, high-speed Wi-Fi, and smart podiums
                            for technology-driven instructions.
                        </p>

                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>Multimedia Podiums</h4>
                                <p className={styles.featureDesc}>
                                    Projectors and interactive digital boards in all halls.
                                </p>
                            </div>

                            <div className={styles.featureCardAlt}>
                                <h4 className={styles.featureTitle}>Tiered Seating</h4>
                                <p className={styles.featureDesc}>
                                    Ergonomic gallery seating ensuring clear line of sight.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}