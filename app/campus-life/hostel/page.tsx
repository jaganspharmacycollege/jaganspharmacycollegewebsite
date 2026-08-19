import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function HostelPage() {
    const facilities = [
        { title: 'Separate Boys & Girls Hostels', desc: 'Spacious, well-ventilated rooms with study desks, wardrobes, and high-speed Wi-Fi connectivity.' },
        { title: 'Hygienic Dining Mess', desc: 'Nutritious vegetarian and non-vegetarian meals prepared in steam-operated modern kitchens under strict hygienic supervision.' },
        { title: '24/7 Security & Medical Care', desc: 'Round-the-clock security personnel, resident wardens, and on-call ambulance and medical doctors.' },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Residential Accommodation</span>
                    <h1 className={styles.title}>Hostel</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        A safe, comfortable home-away-from-home providing modern residential living spaces and balanced nutrition.
                    </p>
                </div>
                <div className={styles.grid}>
                    {facilities.map((f, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle}>{f.title}</h3>
                            <p className={styles.cardDesc}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}