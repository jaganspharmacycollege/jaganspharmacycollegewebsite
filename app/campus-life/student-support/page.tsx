import React from 'react';
import styles from '../CampusLifeLayout.module.css';

export default function StudentSupportPage() {
    const supports = [
        { title: 'Faculty Mentorship Program', desc: 'One-on-one academic, research, and career mentoring assigned to every student.' },
        { title: 'Psychological & Career Counseling', desc: 'Confidential professional counseling services to assist students with stress management and career planning.' },
        { title: 'Remedial Academic Classes', desc: 'Specialized doubt clearing and academic tutorial sessions for challenging subjects.' },
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Guidance & Care</span>
                    <h1 className={styles.title}>Student Support</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Dedicated support frameworks ensuring student wellness, personalized faculty mentoring, and career development.
                    </p>
                </div>
                <div className={styles.grid}>
                    {supports.map((s, i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardDesc}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}