'use client';

import React from 'react';
import { BookOpen, Beaker, User } from 'lucide-react';
import styles from './CoursesHero.module.css';

export default function CoursesHero() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Column: Heading & Key Highlights */}
                <div className={styles.leftCol}>
                    <p className={styles.eyebrow}>OUR COURSES</p>
                    <h1 className={styles.title}>
                        Programs Designed<br />for Your Future
                    </h1>
                    <div className={styles.accentLine} />
                    <p className={styles.description}>
                        Explore our industry-aligned pharmacy programs crafted to build knowledge, skills and a successful career in healthcare and beyond.
                    </p>

                    {/* 3 Pillar Badges Row */}
                    <div className={styles.badgesRow}>
                        <div className={styles.badgeItem}>
                            <div className={`${styles.iconCircle} bg-[#EBF7F2] text-[#053B2A]`}>
                                <BookOpen size={20} />
                            </div>
                            <div>
                                <h4 className={styles.badgeTitle}>
                                    Industry<br />Oriented
                                </h4>
                                <p className={styles.badgeSub}>
                                    Designed with industry expertise
                                </p>
                            </div>
                        </div>

                        <div className={styles.badgeItem}>
                            <div className={`${styles.iconCircle} bg-[#F3E8FF] text-purple-800`}>
                                <Beaker size={20} />
                            </div>
                            <div>
                                <h4 className={styles.badgeTitle}>
                                    Practical<br />Learning
                                </h4>
                                <p className={styles.badgeSub}>
                                    Hands-on training in modern labs
                                </p>
                            </div>
                        </div>

                        <div className={styles.badgeItem}>
                            <div className={`${styles.iconCircle} bg-[#FFF3E6] text-[#B86E00]`}>
                                <User size={20} />
                            </div>
                            <div>
                                <h4 className={styles.badgeTitle}>
                                    Career<br />Support
                                </h4>
                                <p className={styles.badgeSub}>
                                    Guidance for a bright professional future
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Image Fallback */}
                    <div className={styles.mobileImageWrapper}>
                        <img
                            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80"
                            alt="Jagan's College of Pharmacy Students in front of Campus"
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
                        alt="Jagan's College of Pharmacy Students in front of Campus"
                    />
                </div>
            </div>
        </section>
    );
}