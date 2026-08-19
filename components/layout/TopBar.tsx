'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './TopBar.module.css';

export default function TopBar() {
    return (
        <div className={styles.topBar}>
            <div className={styles.container}>
                {/* Left Side: Affiliations */}
                <div className={styles.affiliations}>
                    <span>Approved by PCI</span>
                    <span className={styles.divider}>|</span>
                    <span>Affiliated to JNTUA</span>
                </div>

                {/* Right Side: Contact Information */}
                <div className={styles.contactInfo}>
                    <a href="tel:+919100012345" className={styles.contactItem}>
                        <Phone size={13} className={styles.icon} />
                        <span>+91 91000 12345</span>
                    </a>
                    <a href="mailto:info@jaganpharmacy.ac.in" className={styles.contactItem}>
                        <Mail size={13} className={styles.icon} />
                        <span>info@jaganpharmacy.ac.in</span>
                    </a>
                    <div className={styles.contactItem}>
                        <MapPin size={13} className={styles.icon} />
                        <span>Jagan's College, Kadapa, Andhra Pradesh</span>
                    </div>
                </div>
            </div>
        </div>
    );
}