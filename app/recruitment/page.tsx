'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    Briefcase,
    Sparkles,
    ArrowLeft,
    Send,
    CheckCircle,
    AlertCircle,
    Loader2,
    Building2,
    Award,
    BookOpen,
} from 'lucide-react';
import styles from './Recruitment.module.css';

export default function RecruitmentPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: 'Assistant Professor',
        department: 'Pharmaceutics',
        qualification: '',
        experience: '',
        specialization: '',
        publicationsCount: '',
        resumeLink: '',
        coverNote: '',
    });

    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isMounted = true;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isMounted && entry) setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            isMounted = false;
            observer.disconnect();
        };
    }, []);

    // Parallax animation
    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;
        let isMounted = true;

        const updateParallax = () => {
            if (!isMounted || !sectionRef.current) return;
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
            if (isMounted) animationFrameId = requestAnimationFrame(updateParallax);
        };

        const handleScroll = () => {
            if (!isMounted) return;
            targetScroll = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateParallax);

        return () => {
            isMounted = false;
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const res = await fetch('/api/recruitment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || 'Failed to submit recruitment application.');
            }

            setSubmitted(true);
        } catch (err: any) {
            setErrorMessage(err.message || 'An unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div className={`${styles.backNav} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>Return to Home</span>
                    </Link>
                </div>

                <div className={`${styles.header} ${isVisible ? styles.animateReveal1 : styles.hiddenState}`}>
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Academic &amp; Research Appointments</span>
                    </div>
                    <h1 className={styles.title}>Faculty &amp; Staff Recruitment</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Join our accomplished academic fraternity at Jagan&apos;s College of Pharmacy. We invite doctorates,
                        postgraduates, and laboratory professionals committed to innovative healthcare education and translational research.
                    </p>
                </div>

                <div className={styles.contentGrid}>
                    {/* Main Application Form */}
                    <div className={`${styles.formCard} ${isVisible ? styles.animateReveal2 : styles.hiddenState}`}>
                        {submitted ? (
                            <div className={styles.successState}>
                                <div className={styles.successIconBox}>
                                    <CheckCircle size={48} />
                                </div>
                                <h3 className={styles.successTitle}>Application Submitted Successfully!</h3>
                                <p className={styles.successText}>
                                    Your recruitment profile and credentials have been forwarded directly to the Principal and Governing
                                    Selection Board. Shortlisted candidates will be notified for demonstration lectures and personal interviews.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormData({
                                            fullName: '',
                                            email: '',
                                            phone: '',
                                            position: 'Assistant Professor',
                                            department: 'Pharmaceutics',
                                            qualification: '',
                                            experience: '',
                                            specialization: '',
                                            publicationsCount: '',
                                            resumeLink: '',
                                            coverNote: '',
                                        });
                                    }}
                                    className={styles.btnReset}
                                >
                                    Submit Another Profile
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.formElement}>
                                {errorMessage && (
                                    <div className={styles.errorBanner}>
                                        <AlertCircle size={16} />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <div className={styles.formRowTwo}>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Dr. P. Suresh Kumar"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            className={styles.textInput}
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Official / Personal Email *</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="e.g. suresh.pharma@gmail.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className={styles.textInput}
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRowTwo}>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Mobile Contact *</label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="+91 98480 XXXXX"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className={styles.textInput}
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Position Applied For *</label>
                                        <select
                                            value={formData.position}
                                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                            className={styles.selectInput}
                                        >
                                            <option value="Professor">Professor</option>
                                            <option value="Associate Professor">Associate Professor</option>
                                            <option value="Assistant Professor">Assistant Professor</option>
                                            <option value="Lecturer / Clinical Preceptor">Lecturer / Clinical Preceptor</option>
                                            <option value="Laboratory Technician">Laboratory Technician</option>
                                            <option value="Administrative Staff">Administrative Staff</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.formRowTwo}>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Academic Department *</label>
                                        <select
                                            value={formData.department}
                                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                            className={styles.selectInput}
                                        >
                                            <option value="Pharmaceutics">Pharmaceutics</option>
                                            <option value="Pharmacology">Pharmacology</option>
                                            <option value="Pharmaceutical Analysis">Pharmaceutical Analysis</option>
                                            <option value="Pharmaceutical Chemistry">Pharmaceutical Chemistry</option>
                                            <option value="Pharmacy Practice">Pharmacy Practice</option>
                                            <option value="Pharmacognosy">Pharmacognosy</option>
                                            <option value="Administration / Operations">Administration / Operations</option>
                                        </select>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Highest Qualification *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Ph.D., M.Pharm (Pharmaceutics)"
                                            value={formData.qualification}
                                            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                                            className={styles.textInput}
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRowTwo}>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Total Experience (Years) *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. 5 Years Teaching / 2 Years R&D"
                                            value={formData.experience}
                                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                            className={styles.textInput}
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Scopus / WoS Publications Count</label>
                                        <input
                                            type="number"
                                            placeholder="e.g. 6"
                                            value={formData.publicationsCount}
                                            onChange={(e) => setFormData({ ...formData, publicationsCount: e.target.value })}
                                            className={styles.textInput}
                                        />
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>Core Research &amp; Teaching Specialization *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. NDDS, Bio-analytical HPLC, Preclinical Screening, Molecular Docking"
                                        value={formData.specialization}
                                        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                                        className={styles.textInput}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>CV / Resume Online Link (Google Drive / Dropbox / LinkedIn)</label>
                                    <input
                                        type="url"
                                        placeholder="https://drive.google.com/file/d/.../view?usp=sharing"
                                        value={formData.resumeLink}
                                        onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                                        className={styles.textInput}
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.inputLabel}>Brief Cover Note &amp; Career Objective</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Briefly state your pedagogical background, grant track record, and how you can contribute to JCP..."
                                        value={formData.coverNote}
                                        onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                                        className={styles.textArea}
                                    />
                                </div>

                                <button type="submit" disabled={loading} className={styles.btnSubmit}>
                                    {loading ? (
                                        <>
                                            <Loader2 size={16} className={styles.spinnerIcon} />
                                            <span>Submitting Candidature...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Submit Application</span>
                                            <Send size={15} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Side Institutional Highlights */}
                    <div className={`${styles.infoColumn} ${isVisible ? styles.animateReveal3 : styles.hiddenState}`}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIconCircle}>
                                <Award size={20} />
                            </div>
                            <h4 className={styles.infoTitle}>Research Incentives &amp; Grants</h4>
                            <p className={styles.infoBody}>
                                JCP promotes continuous faculty development with financial incentives for Scopus/SCI Q1 publications,
                                full reimbursement for national/international conferences, and institutional intramural seed funding.
                            </p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIconCircle}>
                                <Building2 size={20} />
                            </div>
                            <h4 className={styles.infoTitle}>Modern Laboratory Ecosystem</h4>
                            <p className={styles.infoBody}>
                                Faculty lead research supported by Central Instrumentation Facilities (HPLC, FTIR, UV-Vis),
                                pilot formulation manufacturing plants, and a CPCSEA-compliant preclinical animal housing suite[cite: 6, 7].
                            </p>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIconCircle}>
                                <BookOpen size={20} />
                            </div>
                            <h4 className={styles.infoTitle}>Regulatory &amp; Statutory Standards</h4>
                            <p className={styles.infoBody}>
                                Recruitments strictly adhere to PCI, AICTE, and JNTUA norms[cite: 6, 7]. Competitive salary packages are offered
                                commensurate with qualifications, industrial exposure, and research achievements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}