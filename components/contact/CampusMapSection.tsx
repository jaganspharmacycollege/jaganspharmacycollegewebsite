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
                        src="https://www.google.com/maps/place/Jagan's+College+of+Pharmacy/@14.3569367,80.0556578,981m/data=!3m1!1e3!4m6!3m5!1s0x3a4cf5d5e9abfb1f:0xfa2fe2be492fc92c!8m2!3d14.3572029!4d80.0581533!16s%2Fg%2F11s95kfm64?authuser=0&entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D"
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