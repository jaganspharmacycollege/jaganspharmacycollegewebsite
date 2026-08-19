'use client';

import React from 'react';
import styles from './AboutLeadershipSection.module.css';

const leaders = [
    {
        name: 'Sri. Jagan Mohan Reddy',
        role: 'Chairman & Founder',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
        quote: '“Our commitment is to cultivate competent pharmaceutical professionals equipped with high ethical standards to serve global healthcare.”',
        bio: 'With visionary leadership and a dedication to educational advancement, Sri. Jagan Mohan Reddy laid the foundation for the college to provide quality, accessible pharmacy education.',
    },
    {
        name: 'Dr. K. Srinivasulu',
        role: 'Principal & Professor',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
        quote: '“We blend rigorous scientific exploration with hands-on clinical internships to prepare students for real-world pharmaceutical challenges.”',
        bio: 'Holding decades of teaching, research, and administrative experience in pharmaceutical sciences, Dr. Srinivasulu leads the academic faculty with an emphasis on research excellence.',
    },
];

export default function AboutLeadershipSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.eyebrow}>Visionary Guidance</p>
                    <h2 className={styles.title}>Leadership</h2>
                    <div className={styles.accentLine} />
                </div>

                <div className={styles.grid}>
                    {leaders.map((leader, idx) => (
                        <div key={idx} className={styles.leaderCard}>
                            <div className={styles.imageWrapper}>
                                <img src={leader.image} alt={leader.name} />
                            </div>

                            <div className="flex-1">
                                <div className={styles.leaderInfo}>
                                    <h3 className={styles.leaderName}>{leader.name}</h3>
                                    <p className={styles.leaderRole}>{leader.role}</p>
                                </div>

                                <div className={`${styles.quoteBox} mt-3`}>
                                    <p>{leader.quote}</p>
                                </div>

                                <p className={styles.leaderBio}>{leader.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}