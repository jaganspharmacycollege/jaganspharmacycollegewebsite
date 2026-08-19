'use client';

import React from 'react';
import { Users, Trophy, HeartHandshake, Globe } from 'lucide-react';
import styles from './CampusLifeHero.module.css';

export default function CampusLifeHero() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Column: Heading & 4 Horizontal Badges */}
                <div className={styles.leftCol}>
                    <p className={styles.eyebrow}>CAMPUS LIFE</p>
                    <h1 className={styles.title}>
                        Learn. Grow.<br />Thrive Together.
                    </h1>
                    <div className={styles.accentLine} />
                    <p className={styles.description}>
                        At Jagan's College of Pharmacy, life goes beyond classrooms. Discover a vibrant campus where learning, leadership and lifelong friendships flourish.
                    </p>

                    {/* 4 Pillar Badges Row */}
                    <div className={styles.badgesRow}>
                        <div className={styles.badgeItem}>
                            <div className={`${styles.iconCircle} bg-[#EBF7F2] text-[#053B2A]`}>
                                <Users size={16} strokeWidth={1.5} />
                            </div>
                            <h4 className={styles.badgeTitle}>
                                Vibrant<br />Community
                            </h4>
                        </div>

                        <div className={styles.badgeItem}>
                            <div className={`${styles.iconCircle} bg-[#F3E8FF] text-purple-800`}>
                                <Trophy size={16} strokeWidth={1.5} />
                            </div>
                            <h4 className={styles.badgeTitle}>
                                Holistic<br />Development
                            </h4>
                        </div>

                        <div className={styles.badgeItem}>
                            <div className={`${styles.iconCircle} bg-[#FFF3E6] text-[#B86E00]`}>
                                <HeartHandshake size={16} strokeWidth={1.5} />
                            </div>
                            <h4 className={styles.badgeTitle}>
                                Health &<br />Wellness
                            </h4>
                        </div>

                        <div className={styles.badgeItem}>
                            <div className={`${styles.iconCircle} bg-[#EBF3FF] text-blue-700`}>
                                <Globe size={16} strokeWidth={1.5} />
                            </div>
                            <h4 className={styles.badgeTitle}>
                                Lasting<br />Connections
                            </h4>
                        </div>
                    </div>

                    {/* Mobile Image Fallback */}
                    <div className={styles.mobileImageWrapper}>
                        <img
                            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80"
                            alt="Students on Jagan's College Campus"
                        />
                    </div>
                </div>

                {/* Empty Column for Desktop Alignment */}
                <div className="hidden lg:block lg:col-span-7 h-full" />
            </div>

            {/* Right Edge Desktop Curved Image */}
            <div className={styles.desktopImageWrapper}>
                <div className={styles.desktopImageInner}>
                    <img
                        src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80"
                        alt="Students on Jagan's College Campus"
                    />
                </div>
            </div>
        </section>
    );
}