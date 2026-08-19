'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import styles from './AdmissionsFAQAndHelp.module.css';

const faqs = [
    {
        q: "What courses are offered at Jagan's College of Pharmacy?",
        a: 'We offer B. Pharmacy (4 Years), Pharm.D (6 Years), M. Pharmacy (2 Years), Ph.D. in Pharmacy, Diploma in Pharmacy (D.Pharm), and specialized Certificate Programs.',
    },
    {
        q: 'How can I apply for admission?',
        a: 'You can apply online by clicking on the "Apply Now" button on our website and filling out the application form with required details and documents.',
    },
    {
        q: 'Is hostel available for students?',
        a: 'Yes, separate well-equipped hostels are available for boys and girls with 24/7 security, Wi-Fi, and nutritious food.',
    },
    {
        q: 'What is the selection process?',
        a: 'Selection is strictly based on academic merit, qualifying exam scores (such as AP EAPCET / PGECET), and fulfillment of eligibility criteria.',
    },
    {
        q: 'Are scholarships available?',
        a: 'Yes, government tuition fee reimbursement schemes as well as merit-based institutional scholarships are available for eligible students.',
    },
];

export default function AdmissionsFAQAndHelp() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Column: FAQ Accordion */}
                <div className={styles.faqCol}>
                    <div>
                        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                        <div className={styles.accentLine} />
                    </div>

                    <div className={styles.accordionList}>
                        {faqs.map((faq, idx) => {
                            const isOpen = openIdx === idx;
                            return (
                                <div key={idx} className={styles.accordionItem}>
                                    <button
                                        onClick={() => setOpenIdx(isOpen ? null : idx)}
                                        className={styles.accordionBtn}
                                    >
                                        <span>{faq.q}</span>
                                        <ChevronDown
                                            size={16}
                                            style={{
                                                transform: isOpen ? 'rotate(180deg)' : 'none',
                                                transition: 'transform 0.2s',
                                            }}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div className={styles.accordionBody}>{faq.a}</div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Need Help? Card */}
                <div className={`${styles.helpCard} ${styles.helpCol}`}>
                    <div className={styles.helpGrid}>
                        {/* Left Content Area */}
                        <div className={`${styles.helpContent} ${styles.helpLeft}`}>
                            <div>
                                <div>
                                    <h3 className={styles.helpTitle}>Need Help?</h3>
                                    <div className={styles.accentLine} />
                                </div>

                                <p className={styles.helpDesc}>
                                    Our admission team is here to assist you with any queries.
                                </p>

                                <ul className={styles.contactList}>
                                    <li className={styles.contactItem}>
                                        <div className={styles.contactIcon}>
                                            <Phone size={12} fill="currentColor" />
                                        </div>
                                        <span>+91 91000 12345</span>
                                    </li>

                                    <li className={styles.contactItem}>
                                        <div className={styles.contactIcon}>
                                            <Mail size={12} fill="currentColor" />
                                        </div>
                                        <span className="truncate">admissions@jaganspharmacy.ac.in</span>
                                    </li>

                                    <li className={styles.contactItem}>
                                        <div className={styles.contactIcon}>
                                            <MapPin size={12} fill="currentColor" />
                                        </div>
                                        <span>
                                            Jagan's College of Pharmacy, <br />
                                            Kadapa, AP - 516003
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <Link href="/contact" className={styles.contactBtn}>
                                    Contact Us <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Right Image Area */}
                        <div className={`${styles.helpImageWrapper} ${styles.helpRight}`}>
                            <div className={styles.gradientOverlay} />
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                                alt="Jagan's College Admissions Representative"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}