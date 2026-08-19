'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Share2, Globe, MessageSquare, Video } from 'lucide-react';
import styles from './ContactInfoCards.module.css';

export default function ContactInfoCards() {
    return (
        <div className={styles.wrapper}>
            {/* Header text above cards */}
            <div className={styles.header}>
                <p className={styles.eyebrow}>Get In Touch</p>
                <h2 className={styles.title}>We'd Love to Hear From You!</h2>
            </div>

            {/* 2x2 Info Cards Grid */}
            <div className={styles.grid}>
                {/* Address Card */}
                <div className={styles.card}>
                    <div className={styles.iconCircle}>
                        <MapPin size={22} />
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Address</h3>
                        <p className={styles.cardText}>
                            Jagan's College of Pharmacy<br />
                            Kadapa, Andhra Pradesh 516003<br />
                            India
                        </p>
                    </div>
                </div>

                {/* Phone Card */}
                <div className={styles.card}>
                    <div className={styles.iconCircle}>
                        <Phone size={22} />
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Phone</h3>
                        <p className={`${styles.cardText} whitespace-nowrap`}>
                            +91 91000 12345<br />
                            +91 89199 12345
                        </p>
                    </div>
                </div>

                {/* Email Card */}
                <div className={styles.card}>
                    <div className={styles.iconCircle}>
                        <Mail size={22} />
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Email</h3>
                        <div className="space-y-0.5 min-w-0">
                            <p className={styles.emailText}>info@jaganspharmacy.ac.in</p>
                            <p className={styles.emailText}>admissions@jaganspharmacy.ac.in</p>
                        </div>
                    </div>
                </div>

                {/* Office Hours Card */}
                <div className={styles.card}>
                    <div className={styles.iconCircle}>
                        <Clock size={22} />
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Office Hours</h3>
                        <p className={`${styles.cardText} whitespace-nowrap`}>
                            Monday – Saturday<br />
                            9:00 AM – 5:00 PM
                        </p>
                    </div>
                </div>
            </div>

            {/* Social Links Section */}
            <div className={styles.socialSection}>
                <p className={styles.socialLabel}>Follow Us</p>
                <div className={styles.socialIcons}>
                    <a href="#" className={styles.socialBtn} aria-label="Share">
                        <Share2 size={20} />
                    </a>
                    <a href="#" className={styles.socialBtn} aria-label="Website">
                        <Globe size={20} />
                    </a>
                    <a href="#" className={styles.socialBtn} aria-label="Message">
                        <MessageSquare size={20} />
                    </a>
                    <a href="#" className={styles.socialBtn} aria-label="Video">
                        <Video size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}