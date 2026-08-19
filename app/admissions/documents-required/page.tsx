import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import styles from '../AdmissionsLayout.module.css';

export default function DocumentsRequiredPage() {
    const ugDocuments = [
        'SSC / 10th Standard Original Marks Memo & Passing Certificate',
        'Intermediate / 10+2 / Diploma Marks Memo & Pass Certificate',
        'AP EAPCET Rank Card & Hall Ticket',
        'Transfer Certificate (T.C.) & Conduct Certificate from the last attended institution',
        'Study & Bonafide Certificates (Class VI to Intermediate / Diploma)',
        'Income Certificate & Caste / Community Certificate (if claiming fee reimbursement)',
        'Aadhaar Card Photocopy (Student and Parents)',
        'Passport Size Color Photographs (6 Copies)',
    ];

    const pgDocuments = [
        'B.Pharm Degree Certificate & Consolidated Marks Memo (All Semesters)',
        'GPAT / AP PGECET Rank Card & Hall Ticket',
        'State Pharmacy Council Registration Certificate (PCI)',
        'Transfer Certificate (T.C.) & Migration Certificate from last attended university',
        'Study & Bonafide Certificates from B.Pharm Institution',
        'Income Certificate & Caste / Community Certificate (if claiming fee reimbursement)',
        'Aadhaar Card Photocopy (Student and Parents)',
        'Passport Size Color Photographs (6 Copies)',
    ];

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Verification Checklist</span>
                    <h1 className={styles.title}>Documents Required</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Please prepare original documents along with 3 sets of self-attested photocopies at the time of admission counseling and verification.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    {/* Card 1: B.Pharm & Pharm.D */}
                    <div className={styles.card}>
                        <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#053B2A] flex items-center justify-center">
                                    <GraduationCap size={20} />
                                </div>
                                <h2 className="text-xl font-extrabold text-[#053B2A]">
                                    B.Pharm &amp; Pharm.D
                                </h2>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-[#b86e00] border border-amber-200">
                                UG / Integrated
                            </span>
                        </div>

                        <div className={styles.list}>
                            {ugDocuments.map((doc, idx) => (
                                <div key={idx} className={styles.listItem}>
                                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-[#053B2A] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                        {idx + 1}
                                    </span>
                                    <span className="text-gray-700 font-medium">{doc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: M.Pharm */}
                    <div className={styles.card}>
                        <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#053B2A] flex items-center justify-center">
                                    <Award size={20} />
                                </div>
                                <h2 className="text-xl font-extrabold text-[#053B2A]">
                                    M.Pharm
                                </h2>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-[#053B2A] border border-emerald-200">
                                Postgraduate
                            </span>
                        </div>

                        <div className={styles.list}>
                            {pgDocuments.map((doc, idx) => (
                                <div key={idx} className={styles.listItem}>
                                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-[#053B2A] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                        {idx + 1}
                                    </span>
                                    <span className="text-gray-700 font-medium">{doc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}