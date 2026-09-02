'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    ChevronDown,
    Phone,
    Mail,
    MapPin,
    ArrowRight,
    HelpCircle,
    Headphones,
    Sparkles,
} from 'lucide-react';
import styles from './AdmissionsFAQAndHelp.module.css';

const faqs = [
    {
        q: "What academic courses are offered at Jagan's College of Pharmacy?",
        a: 'We offer B. Pharmacy (4 Years Undergraduate), Pharm.D (6 Years Doctoral), and M. Pharmacy (2 Years Postgraduate with multiple research specializations), all permanently affiliated to JNTUA and approved by AICTE.',
    },
    {
        q: 'How can I apply for admission?',
        a: 'You can apply online by clicking "Apply Online" on our portal and filling out the application form with your qualifying academic details and entrance exam ranks (AP EAPCET / GPAT / PGECET).',
    },
    {
        q: 'Are hostel facilities available for outstation students?',
        a: 'Yes, secure on-campus separate hostels are available for boys and girls featuring 24/7 biometric security, Wi-Fi connectivity, hygienic dining halls, and continuous medical assistance.',
    },
    {
        q: 'What is the selection & seat allotment process?',
        a: 'Admissions are conducted transparently via state counseling (AP State Convenor Quota) and institutional category admissions (Management Quota) based on aggregate marks and entrance test ranks.',
    },
    {
        q: 'Are government scholarships and fee reimbursement supported?',
        a: 'Yes, eligible students can avail of Andhra Pradesh state government tuition fee reimbursement (JVD schemes) as well as institutional merit-based scholarships.',
    },
];

export default function AdmissionsFAQAndHelp() {
    const [openIdx, setOpenIdx] = useState<number | null>(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    const toggleFAQ = (idx: number) => {
        setOpenIdx((prev) => (prev === idx ? null : idx));
    };

    // Repeating scroll-triggered entrance detection
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Ultra-slow fluid linear-interpolated (lerp) parallax animation
    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;

        const updateParallax = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();

            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                currentScroll += (targetScroll - currentScroll) * 0.035;
                const relativeOffset = window.innerHeight - rect.top;

                if (orbLeftRef.current) {
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06}px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05}px, 0)`;
                }
            }

            animationFrameId = requestAnimationFrame(updateParallax);
        };

        const handleScroll = () => {
            targetScroll = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateParallax);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                {/* Left Column: FAQ Accordion */}
                <div className={styles.faqCol}>
                    <div
                        className={`${styles.colHeader} ${isVisible ? styles.animateHeader : styles.hiddenState
                            }`}
                    >
                        <div className={styles.badgeWrapper}>
                            <HelpCircle size={14} className={styles.badgeIcon} />
                            <span className={styles.badgeText}>Got Questions?</span>
                        </div>
                        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                        <div className={styles.accentLine} />
                        <p className={styles.faqSub}>
                            Everything you need to know about the admission timeline, eligibility benchmarks, and campus life.
                        </p>
                    </div>

                    <div className={styles.accordionList}>
                        {faqs.map((faq, idx) => {
                            const isOpen = openIdx === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`${styles.accordionItem} ${isOpen ? styles.itemOpen : ''
                                        } ${isVisible
                                            ? idx === 0
                                                ? styles.animDelay1
                                                : idx === 1
                                                    ? styles.animDelay2
                                                    : idx === 2
                                                        ? styles.animDelay3
                                                        : idx === 3
                                                            ? styles.animDelay4
                                                            : styles.animDelay5
                                            : styles.hiddenState
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(idx)}
                                        className={styles.accordionBtn}
                                        aria-expanded={isOpen}
                                    >
                                        <span className={styles.questionText}>{faq.q}</span>
                                        <div
                                            className={`${styles.chevronCircle} ${isOpen ? styles.chevronActive : ''
                                                }`}
                                        >
                                            <ChevronDown size={16} />
                                        </div>
                                    </button>

                                    {isOpen && (
                                        <div className={styles.accordionBody}>
                                            <p>{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Dedicated Help Desk Card */}
                <div
                    className={`${styles.helpCol} ${isVisible ? styles.animDelay3 : styles.hiddenState
                        }`}
                >
                    <div className={styles.helpCard}>
                        <div className={styles.helpContent}>
                            <div>
                                <div className={styles.helpHeaderTag}>
                                    <Headphones size={14} />
                                    <span>Admissions Support Desk</span>
                                </div>
                                <h3 className={styles.helpTitle}>Need Direct Assistance?</h3>
                                <div className={styles.accentLineSmall} />
                                <p className={styles.helpDesc}>
                                    Our dedicated admission counselors are ready to assist you with course selection, document verification, and fee details.
                                </p>

                                <ul className={styles.contactList}>
                                    <li className={styles.contactItem}>
                                        <div className={`${styles.contactIcon} ${styles.iconMint}`}>
                                            <Phone size={14} />
                                        </div>
                                        <div>
                                            <span className={styles.contactLabel}>Phone Inquiry</span>
                                            <p className={styles.contactValue}>+91 7680077726 / 9989000447</p>
                                        </div>
                                    </li>

                                    <li className={styles.contactItem}>
                                        <div className={`${styles.contactIcon} ${styles.iconPurple}`}>
                                            <Mail size={14} />
                                        </div>
                                        <div>
                                            <span className={styles.contactLabel}>Email Admissions</span>
                                            <p className={styles.contactValue}>admissions.jcp@gmail.com</p>
                                        </div>
                                    </li>

                                    <li className={styles.contactItem}>
                                        <div className={`${styles.contactIcon} ${styles.iconPeach}`}>
                                            <MapPin size={14} />
                                        </div>
                                        <div>
                                            <span className={styles.contactLabel}>Campus Location</span>
                                            <p className={styles.contactValue}>
                                                Jagan&apos;s College of Pharmacy, Jangalakandriga, SPSR Nellore, AP 524401
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.helpFooter}>
                                <Link href="/contact" className={styles.contactBtn}>
                                    <span>Schedule a Campus Visit</span>
                                    <ArrowRight size={15} />
                                </Link>
                            </div>
                        </div>

                        {/* Support Representative Image Preview */}
                        <div className={styles.helpImageWrapper}>
                            <img
                                src="/assets/Infra/office.png"
                                alt="Jagan's College Admissions Representative"
                                className={styles.helpImage}
                            />
                            <div className={styles.gradientOverlay} />
                            <div className={styles.counselorBadge}>
                                <Sparkles size={13} className={styles.counselorBadgeIcon} />
                                <span>Dedicated Counselor Available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}