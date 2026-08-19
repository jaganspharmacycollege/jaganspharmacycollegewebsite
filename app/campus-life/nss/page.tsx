import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function NSSPage() {
    const activities = [
        { title: 'Blood Donation Drives', desc: 'Annual voluntary blood donation camps in association with the Indian Red Cross Society and local hospitals.' },
        { title: 'Rural Village Adoption', desc: 'Weekly sanitation drives, health literacy camps, and clean drinking water initiatives in neighboring villages.' },
        { title: 'Environmental Tree Plantation', desc: 'Over 1,000+ saplings planted annually as part of the Haritha Haram and Green India initiatives.' },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>National Service Scheme</span>
                    <h1 className={styles.title}>NSS</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Our active NSS unit instills social responsibility and community welfare values under the motto &apos;Not Me But You&apos;.
                    </p>
                </div>
                <div className={styles.grid}>
                    {activities.map((a, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle}>{a.title}</h3>
                            <p className={styles.cardDesc}>{a.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}