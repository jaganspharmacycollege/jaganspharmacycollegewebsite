'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    GraduationCap,
    CheckCircle2,
    Building,
    Phone,
    Mail,
    ArrowRight,
    Send,
    Sparkles,
    ShieldAlert,
} from 'lucide-react';
import styles from './CategoryB.module.css';

interface FormDataState {
    fullName: string;
    fatherName: string;
    dob: string;
    gender: string;
    category: string;
    phone: string;
    parentPhone: string;
    email: string;
    course: string;
    stream: string;
    rankType: string;
    rankScore: string;
    qualifyingPercentage: string;
    address: string;
    declaration: boolean;
}

const INITIAL_FORM: FormDataState = {
    fullName: '',
    fatherName: '',
    dob: '',
    gender: 'Male',
    category: 'OC',
    phone: '',
    parentPhone: '',
    email: '',
    course: 'B.Pharmacy',
    stream: 'Bi.P.C',
    rankType: 'AP EAPCET-2026',
    rankScore: '',
    qualifyingPercentage: '',
    address: '',
    declaration: false,
};

const TIMELINE_DATA = [
    {
        step: '01',
        date: '28.10.2026 – 29.10.2026',
        title: 'Notification Issued by College',
        desc: 'Published in leading dailies and uploaded to the official state admission portal.',
    },
    {
        step: '02',
        date: '30.10.2026 – 05.11.2026',
        title: 'Application Receiving & Processing',
        desc: 'Receipt of online and physical applications along with supporting qualification credentials.',
    },
    {
        step: '03',
        date: '06.11.2026',
        title: 'Selected Merit List Finalized',
        desc: 'Preparation of selection list prepared strictly according to the statutory merit order.',
    },
    {
        step: '04',
        date: '06.11.2026 – 10.11.2026',
        title: 'Certificate Verification & Ratification',
        desc: 'Competent government authority verifies documents and issues official approval orders.',
    },
];

const ELIGIBILITY_DATA = {
    'B.Pharmacy': {
        title: 'B.Pharmacy (4 Years Bachelor of Pharmacy)',
        desc: 'Sanctioned seats are partitioned in a 50:50 ratio between M.P.C and Bi.P.C streams. Intermediate vocational technical with bridge course candidates are not eligible for pharmacy programs.',
        items: [
            {
                priority: 'Priority 1',
                category: 'NRI Quota (Up to 15%)',
                threshold: 'Passed 10+2 with not less than 50% group marks/aggregate or CGPA ≥ 5.0 on a 10-point scale.',
            },
            {
                priority: 'Priority 2',
                category: 'JEE Mains / NEET-2026',
                threshold: 'Qualified in JEE Mains or NEET-2026 securing at least 45% marks in group subjects.',
            },
            {
                priority: 'Priority 3',
                category: 'AP EAPCET-2026 Rankers',
                threshold: 'Qualified in AP EAPCET-2026 with ≥ 45% marks in group subjects (40% for SC/ST/BC).',
            },
            {
                priority: 'Priority 4',
                category: 'Qualifying 10+2 Marks',
                threshold: 'Remaining seats allocated based on 10+2 marks with ≥ 45% (40% for reserved classes).',
            },
        ],
    },
    'Pharm.D': {
        title: 'Pharm.D (6 Years Doctor of Pharmacy - Clinical)',
        desc: 'Five years of academic study and clinical rotations followed by one complete year of hospital residency internship.',
        items: [
            {
                priority: 'Qualifying Exam',
                category: '10+2 or D.Pharmacy',
                threshold: 'Passed 10+2 with Physics, Chemistry & Mathematics/Biology, or passed D.Pharm from a PCI-approved institute.',
            },
            {
                priority: 'Stream Sharing',
                category: '50:50 M.P.C & Bi.P.C',
                threshold: 'M.P.C and Bi.P.C candidates receive equal seat allocation; unfilled seats convert mutually between streams.',
            },
            {
                priority: 'Entrance Priority',
                category: 'NEET / EAPCET-2026',
                threshold: 'Rank order strictly observed: NRI → NEET-2026 → AP EAPCET-2026 → Intermediate Marks.',
            },
            {
                priority: 'Minimum Cutoff',
                category: '45% (40% Reserved)',
                threshold: 'Minimum group subjects requirement in qualifying examination (40% for SC, ST, and BC applicants).',
            },
        ],
    },
    'M.Pharmacy': {
        title: 'M.Pharmacy (2 Years Master of Pharmacy)',
        desc: 'Admissions conducted as per the PGECET-2026 Category-B institutional guidelines.',
        items: [
            {
                priority: 'Priority 1',
                category: 'NRI Candidates',
                threshold: 'Passed B.Pharmacy with not less than 60% aggregate marks or CGPA ≥ 6.0 on a 10-point scale.',
            },
            {
                priority: 'Priority 2',
                category: 'GPAT / GATE Rankers',
                threshold: 'Valid GPAT/GATE score card holders with ≥ 50% marks (45% for reserved) in B.Pharmacy.',
            },
            {
                priority: 'Priority 3',
                category: 'AP PGECET-2026 Rankers',
                threshold: 'Rank holders in AP PGECET-2026 with ≥ 50% marks (45% for SC/ST/BC) in B.Pharmacy.',
            },
            {
                priority: 'Priority 4',
                category: 'B.Pharm Degree Merit',
                threshold: 'Candidates securing not less than 50% (45% for reserved) in B.Pharmacy consolidated degree memo.',
            },
        ],
    },
};

export default function CategoryBPage() {
    const [formData, setFormData] = useState<FormDataState>(INITIAL_FORM);
    const [activeTab, setActiveTab] = useState<'B.Pharmacy' | 'Pharm.D' | 'M.Pharmacy'>('B.Pharmacy');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [applicationId, setApplicationId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.declaration) {
            alert('Please accept the statutory declaration before proceeding.');
            return;
        }

        setIsSubmitting(true);
        setErrorMessage('');

        const generatedId = `JCP-CATB-${Math.floor(100000 + Math.random() * 900000)}`;

        try {
            const response = await fetch('/api/admissions/category-b', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, applicationId: generatedId }),
            });

            const resData = await response.json();

            if (response.ok && resData.success) {
                setIsSubmitted(true);
                setApplicationId(generatedId);
                setTimeout(() => {
                    setIsSuccess(true);
                    const formEl = document.getElementById('application-form-section');
                    if (formEl) {
                        formEl.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 600);
            } else {
                setErrorMessage(resData.error || 'Email delivery failed. Please check your credentials.');
            }
        } catch (err) {
            console.error(err);
            setErrorMessage('Network connection error. Please verify your details and retry.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const currentEligibility = ELIGIBILITY_DATA[activeTab];

    return (
        <div className={styles.pageWrapper}>
            {/* 1. Header Hero with Light Background */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.badgeRow}>
                        <span className={styles.goldBadge}>
                            <Sparkles size={13} className={styles.flexShrink0} />
                            <span>APSCHE • JNTUA Approved</span>
                        </span>
                        <span className={styles.quotaPill}>30% Institutional Category-B Quota</span>
                    </div>

                    <h1 className={styles.heroTitle}>
                        Category-B (Management Quota) Admissions 2026–27
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Institutional quota admissions for B.Pharmacy, Pharm.D (Doctor of Pharmacy), and M.Pharmacy courses conducted strictly under the guidelines of the Department of Higher Education, Govt. of Andhra Pradesh.
                    </p>

                    <div className={styles.metricsBar}>
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>30%</span>
                            <span className={styles.metricLabel}>Sanctioned Intake under Category-B</span>
                        </div>
                        <div className={styles.metricDivider} />
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>50 : 50</span>
                            <span className={styles.metricLabel}>B.Pharm &amp; Pharm.D (MPC : BiPC Ratio)</span>
                        </div>
                        <div className={styles.metricDivider} />
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>APHERMC</span>
                            <span className={styles.metricLabel}>Standard Fee Regulated Structure</span>
                        </div>
                        <div className={styles.metricDivider} />
                        <div className={styles.metricItem}>
                            <span className={styles.metricValue}>Official</span>
                            <span className={styles.metricLabel}>Direct State Portal Ratification</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Official Timeline Table / Card Stack */}
            <section className={styles.timelineSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeaderRow}>
                        <div className={styles.headerTextGroup}>
                            <h2 className={styles.sectionTitle}>Admissions Timeline (2026–27)</h2>
                            <p className={styles.sectionDesc}>
                                Statutory schedule as notified by the Commissionerate of Higher Education
                            </p>
                        </div>
                        <a href="#application-form-section" className={styles.jumpLink}>
                            <span>Apply Online Now</span>
                            <ArrowRight size={14} className={styles.flexShrink0} />
                        </a>
                    </div>

                    {/* Desktop Table View */}
                    <div className={styles.desktopTableWrap}>
                        <table className={styles.customTable}>
                            <thead>
                                <tr>
                                    <th style={{ width: '85px', textAlign: 'center' }}>Step</th>
                                    <th style={{ width: '220px' }}>Dates / Schedule</th>
                                    <th>Activity</th>
                                    <th>Official Details &amp; Scope</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TIMELINE_DATA.map((t, idx) => (
                                    <tr key={idx}>
                                        <td className={styles.stepCell}>{t.step}</td>
                                        <td className={styles.dateCell}>{t.date}</td>
                                        <td className={styles.titleCell}>{t.title}</td>
                                        <td className={styles.descCell}>{t.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Clean Card Stack */}
                    <div className={styles.mobileStackWrap}>
                        {TIMELINE_DATA.map((t, idx) => (
                            <div key={idx} className={styles.mobileTimelineCard}>
                                <div className={styles.mobileCardTopRow}>
                                    <span className={styles.mobileStepBadge}>Step {t.step}</span>
                                    <span className={styles.mobileDateText}>{t.date}</span>
                                </div>
                                <h3 className={styles.mobileCardTitle}>{t.title}</h3>
                                <p className={styles.mobileCardDesc}>{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Program Eligibility Table / Card Stack */}
            <section className={styles.eligibilitySection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeaderRow}>
                        <div className={styles.headerTextGroup}>
                            <h2 className={styles.sectionTitle}>Course Eligibility &amp; Selection Criteria</h2>
                            <p className={styles.sectionDesc}>Select a program below to review statutory seat allocation rules</p>
                        </div>
                    </div>

                    <div className={styles.tabsNav}>
                        {(['B.Pharmacy', 'Pharm.D', 'M.Pharmacy'] as const).map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                className={`${styles.tabButton} ${activeTab === tab ? styles.activeTabButton : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                <GraduationCap size={16} className={styles.flexShrink0} />
                                <span>{tab}</span>
                            </button>
                        ))}
                    </div>

                    <div className={styles.tabCard}>
                        <div className={styles.tabIntro}>
                            <h3 className={styles.tabCourseTitle}>{currentEligibility.title}</h3>
                            <p className={styles.tabCourseDesc}>{currentEligibility.desc}</p>
                        </div>

                        {/* Desktop Table View */}
                        <div className={styles.desktopTableWrap}>
                            <table className={styles.customTable}>
                                <thead>
                                    <tr>
                                        <th style={{ width: '130px' }}>Priority</th>
                                        <th style={{ width: '240px' }}>Quota Category</th>
                                        <th>Statutory Eligibility &amp; Marks Threshold</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentEligibility.items.map((row, idx) => (
                                        <tr key={idx}>
                                            <td><span className={styles.tableBadge}>{row.priority}</span></td>
                                            <td className={styles.titleCell}>{row.category}</td>
                                            <td className={styles.descCell}>{row.threshold}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Stacked Card View */}
                        <div className={styles.mobileStackWrap}>
                            {currentEligibility.items.map((row, idx) => (
                                <div key={idx} className={styles.mobileEligibilityCard}>
                                    <div className={styles.mobileCardTopRow}>
                                        <span className={styles.tableBadge}>{row.priority}</span>
                                        <strong className={styles.mobileCategoryTitle}>{row.category}</strong>
                                    </div>
                                    <p className={styles.mobileThresholdText}>{row.threshold}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Important Regulatory Notes */}
            <section className={styles.rulesSection}>
                <div className={styles.container}>
                    <div className={styles.alertBanner}>
                        <div className={styles.alertIconBadge}>
                            <ShieldAlert size={22} className={styles.flexShrink0} />
                        </div>
                        <div className={styles.alertContent}>
                            <h4 className={styles.alertTitle}>Crucial Government Regulations &amp; Fee Terms</h4>
                            <ul className={styles.alertList}>
                                <li>
                                    <strong>No Fee Reimbursement:</strong> Candidates admitted under Category-B Management Quota are strictly <strong>not eligible</strong> for fee reimbursement or Jagananna Vidya Deevena (JVD).
                                </li>
                                <li>
                                    <strong>Statutory Tuition Fees:</strong> The institution collects only the fee approved and notified by the Andhra Pradesh Higher Education Regulatory and Monitoring Commission (APHERMC). No capitation or donation is accepted.
                                </li>
                                <li>
                                    <strong>Mandatory Documents:</strong> Rank Card, Hall Ticket, SSC memo, 10+2/Degree memo, Transfer Certificate (TC), Study/Conduct certificates (6th to degree), and Caste/EWS certificate if applicable.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Online Application Form Section */}
            <section id="application-form-section" className={styles.formSection}>
                <div className={styles.container}>
                    <div className={styles.formWrapperCard}>
                        <div className={styles.formHeader}>
                            <div className={styles.formBadge}>
                                <Building size={16} className={styles.flexShrink0} />
                                <span>Admissions Desk</span>
                            </div>
                            <h2 className={styles.formMainHeading}>Institutional Application Form (2026–27)</h2>
                            <p className={styles.formSubHeading}>
                                Fill in your candidate and qualification details to register your application for Category-B quota seat allotment.
                            </p>
                        </div>

                        {errorMessage && (
                            <div className={styles.errorAlertBox}>
                                {errorMessage}
                            </div>
                        )}

                        {isSuccess ? (
                            <div className={styles.successBox}>
                                <div className={styles.successCheck}>
                                    <CheckCircle2 size={48} />
                                </div>
                                <h3>Application Submitted Successfully!</h3>
                                <p>A confirmation email has been dispatched with your registration details:</p>
                                <div className={styles.refIdBox}>{applicationId}</div>
                                <p className={styles.successAdvice}>
                                    Our admissions verification cell will review your details and reach out on <strong>{formData.phone}</strong> and <strong>{formData.email}</strong> to verify original certificates before uploading to the state admissions portal.
                                </p>
                                <button
                                    type="button"
                                    className={styles.newAppBtn}
                                    onClick={() => {
                                        setIsSuccess(false);
                                        setIsSubmitted(false);
                                        setFormData(INITIAL_FORM);
                                    }}
                                >
                                    Submit Another Application
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.formContent}>
                                {/* Section 1: Course Info */}
                                <div className={styles.formFieldset}>
                                    <span className={styles.fieldsetTitle}>1. Course &amp; Examination Category</span>

                                    <div className={styles.grid2}>
                                        <div className={styles.fieldBox}>
                                            <label className={styles.fieldLabel}>Course Desired *</label>
                                            <select
                                                name="course"
                                                value={formData.course}
                                                onChange={handleChange}
                                                className={styles.selectControl}
                                                required
                                            >
                                                <option value="B.Pharmacy">B.Pharmacy (4 Years)</option>
                                                <option value="Pharm.D">Pharm.D (6 Years)</option>
                                                <option value="M.Pharmacy">M.Pharmacy (2 Years)</option>
                                            </select>
                                        </div>

                                        <div className={styles.fieldBox}>
                                            <label className={styles.fieldLabel}>Qualifying Stream *</label>
                                            <select
                                                name="stream"
                                                value={formData.stream}
                                                onChange={handleChange}
                                                className={styles.selectControl}
                                                required
                                            >
                                                <option value="Bi.P.C">Intermediate (Bi.P.C - Biology, Physics, Chemistry)</option>
                                                <option value="M.P.C">Intermediate (M.P.C - Maths, Physics, Chemistry)</option>
                                                <option value="D.Pharmacy">D.Pharmacy Diploma</option>
                                                <option value="B.Pharmacy">B.Pharmacy Degree (For M.Pharm)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.grid2}>
                                        <div className={styles.fieldBox}>
                                            <label className={styles.fieldLabel}>Entrance Exam Status *</label>
                                            <select
                                                name="rankType"
                                                value={formData.rankType}
                                                onChange={handleChange}
                                                className={styles.selectControl}
                                                required
                                            >
                                                <option value="AP EAPCET-2026">AP EAPCET-2026</option>
                                                <option value="NEET-2026">NEET-2026</option>
                                                <option value="JEE-Mains-2026">JEE-Mains-2026</option>
                                                <option value="GPAT / GATE">GPAT / GATE (PG)</option>
                                                <option value="AP PGECET-2026">AP PGECET-2026</option>
                                                <option value="Direct Marks Merit">Direct Merit / Not Qualified</option>
                                            </select>
                                        </div>

                                        <div className={styles.fieldBox}>
                                            <label className={styles.fieldLabel}>Hall Ticket / Rank Card No.</label>
                                            <input
                                                type="text"
                                                name="rankScore"
                                                value={formData.rankScore}
                                                onChange={handleChange}
                                                placeholder="e.g. 214582 or N/A"
                                                className={styles.inputControl}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: Personal Details */}
                                <div className={styles.formFieldset}>
                                    <span className={styles.fieldsetTitle}>2. Candidate Information</span>

                                    <div className={styles.grid2}>
                                        <div className={styles.fieldBox}>
                                            <label className={styles.fieldLabel}>Candidate Full Name (As per SSC Memo) *</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="Enter full name"
                                                className={styles.inputControl}
                                                required
                                            />
                                        </div>

                                        <div className={styles.fieldBox}>
                                            <label className={styles.fieldLabel}>Father / Guardian Name *</label>
                                            <input
                                                type="text"
                                                name="fatherName"
                                                value={formData.fatherName}
                                                onChange={handleChange}
                                                placeholder="Enter father's name"
                                                className={styles.inputControl}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.grid3}>
                                        <div className={styles.fieldBox}>
                                            <label className={styles.fieldLabel}>Date of Birth *</label>
                                            <input
                                                type="date"
                                                name="dob"
                                                value={formData.dob}
                                                onChange={handleChange}
                                                className={styles.inputControl}
                                                required
                                            />
                                        </div>

                                        <div className={styles.fieldBox}>
                                            <label className={styles.fieldLabel}>Gender *</label>
                                            <select
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                className={styles.selectControl}
                                                required
                                            >
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div className={styles.fieldBox}>
                                            <label className={styles.fieldLabel}>Social Category *</label>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                                className={styles.selectControl}
                                                required
                                            >
                                                <option value="OC">OC</option>
                                                <option value="BC-A">BC-A</option>
                                                <option value="BC-B">BC-B</option>
                                                <option value="BC-C">BC-C</option>
                                                <option value="BC-D">BC-D</option>
                                                <option value="BC-E">BC-E</option>
                                                <option value="SC">SC</option>
                                                <option value="ST">ST</option>
                                                <option value="EWS">EWS</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3: Contact Details */}
                                <div className={styles.formFieldset}>
                                    <span className={styles.fieldsetTitle}>3. Contact &amp; Academic Scores</span>

                                    <div className={styles.grid2}>
                                        <div className={styles.fieldBox}>
                                            <label className={styles.fieldLabel}>Candidate Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                pattern="[0-9]{10}"
                                                placeholder="10-digit number"
                                                className={styles.inputControl}
                                                required
                                            />
                                        </div>

                                        <div className={styles.fieldBox}>
                                            <label className={styles.fieldLabel}>Parent / Guardian Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="parentPhone"
                                                value={formData.parentPhone}
                                                onChange={handleChange}
                                                pattern="[0-9]{10}"
                                                placeholder="10-digit number"
                                                className={styles.inputControl}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.grid2}>
                                        <div className={styles.fieldBox}>
                                            <label className={styles.fieldLabel}>Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="name@example.com"
                                                className={styles.inputControl}
                                                required
                                            />
                                        </div>

                                        <div className={styles.fieldBox}>
                                            <label className={styles.fieldLabel}>Qualifying Aggregate / Group % *</label>
                                            <input
                                                type="number"
                                                step="0.01"
                                                name="qualifyingPercentage"
                                                value={formData.qualifyingPercentage}
                                                onChange={handleChange}
                                                placeholder="e.g. 78.4"
                                                className={styles.inputControl}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.fieldBox}>
                                        <label className={styles.fieldLabel}>Permanent Postal Address *</label>
                                        <textarea
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            rows={2}
                                            placeholder="House No, Village/Town, Mandal, District, State, PIN"
                                            className={styles.textareaControl}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Statutory Checkbox */}
                                <div className={styles.declarationBox}>
                                    <input
                                        type="checkbox"
                                        id="declaration"
                                        name="declaration"
                                        checked={formData.declaration}
                                        onChange={handleChange}
                                        className={styles.checkboxInput}
                                        required
                                    />
                                    <label htmlFor="declaration" className={styles.declarationLabel}>
                                        I solemnly declare that all statements made in this application are correct. I understand that Category-B management admissions are subject to government verification and that seats under this quota are <strong>not eligible for state fee reimbursement (JVD)</strong>.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSubmitted}
                                    className={`${styles.submitButton} ${isSubmitted ? styles.submitButtonSuccess : ''}`}
                                >
                                    {isSubmitted ? (
                                        <>
                                            <CheckCircle2 size={16} className={styles.flexShrink0} />
                                            <span>Submitted Successfully</span>
                                        </>
                                    ) : isSubmitting ? (
                                        <span>Submitting Application...</span>
                                    ) : (
                                        <>
                                            <span>Submit Category-B Application</span>
                                            <Send size={15} className={styles.flexShrink0} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* 6. Campus Support Contact Bar */}
            <section className={styles.contactBar}>
                <div className={styles.container}>
                    <div className={styles.contactBarFlex}>
                        <div className={styles.contactBarText}>
                            <h4 className={styles.contactBarTitle}>Campus Admissions Help Desk</h4>
                            <p className={styles.contactBarDesc}>
                                Have queries regarding certificate verification or seat allocation? Reach out to our campus desk.
                            </p>
                        </div>
                        <div className={styles.contactButtons}>
                            <a href="tel:+917680077733" className={styles.contactActionBtn}>
                                <Phone size={15} className={styles.flexShrink0} />
                                <span>+91 7680077733</span>
                            </a>
                            <a href="mailto:admissions.jcp@gmail.com" className={styles.contactActionBtn}>
                                <Mail size={15} className={styles.flexShrink0} />
                                <span>admissions.jcp@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}