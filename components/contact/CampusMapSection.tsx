'use client';

import React from 'react';
import { CalendarDays } from 'lucide-react';
import styles from './CampusMapSection.module.css';

export default function CampusMapSection() {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                {/* Left Side: Map Container */}
                <div className={`${styles.mapContainer} ${styles.mapCol}`}>
                    <iframe
                        title="Jagan's College of Pharmacy Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.8878932451!2d78.8234!3d14.4673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI4JzAyLjMiTiA30MKwNDknMjQuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                        className={styles.mapIframe}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* Right Side: Content Area */}
                <div className={`${styles.contentArea} ${styles.contentCol}`}>
                    <div>
                        <h3 className={styles.title}>Visit Our Campus</h3>
                        <div className={styles.accentLine} />
                    </div>

                    <p className={styles.subText}>
                        We welcome you to visit our campus and experience our vibrant learning environment.
                    </p>

                    <div>
                        <button className={styles.visitBtn}>
                            Plan Your Visit <CalendarDays size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}