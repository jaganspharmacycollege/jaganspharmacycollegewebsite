'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './PreFooter.module.css';

export default function PreFooter() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.bannerPill}>
                    {/* Main Content Block */}
                    <div className={styles.contentBlock}>
                        <span className={styles.eyebrow}>
                            <Sparkles size={14} className="inline mr-1 text-amber-400" /> Start Your Healthcare Journey
                        </span>
                        <h3 className={styles.title}>Ready to Build Your Pharmaceutical Career?</h3>
                        <p className={styles.subtitle}>
                            Connect with our admissions team, apply online for upcoming academic batches, or book an interactive guided tour of our modern research campus.
                        </p>
                    </div>

                    {/* Action Button Group */}
                    <div className={styles.buttonGroup}>
                        <Link href="/contact" className={styles.outlineBtn}>
                            Enquiry Form
                        </Link>
                        <Link href="/admissions/application-form" className={styles.outlineBtn}>
                            Online Application
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}