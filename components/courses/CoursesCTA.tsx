'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './CoursesCTA.module.css';

export default function CoursesCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                {/* Left Content Area */}
                <div className={styles.leftCol}>
                    <h2 className={styles.title}>
                        Ready to Start Your Journey?
                    </h2>
                    <p className={styles.description}>
                        Join Jagan's College of Pharmacy and take the first step towards a successful career in healthcare.
                    </p>
                    <div className={styles.btnWrapper}>
                        <Link href="/admissions" className={styles.applyBtn}>
                            Apply Now <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>

                {/* Right Student Image Section with Arched Mask & Gold Line Accent */}
                <div className={styles.desktopImageContainer}>
                    <div className={styles.goldArc} />
                    <div className={styles.imageArc}>
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                            alt="Jagan's College of Pharmacy Students in Library"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}