import React from 'react';
import styles from '../AdmissionsLayout.module.css';

export default function DocumentsRequiredPage() {
    const documents = [
        'SSC / 10th Standard Original Marks Memo & Passing Certificate',
        'Intermediate / 10+2 / Diploma Marks Memo & Pass Certificate',
        'B.Pharm Degree Certificate & Consolidated Marks Memo (For M.Pharm applicants)',
        'AP EAPCET / GPAT / AP PGECET Rank Card & Hall Ticket',
        'Transfer Certificate (T.C.) & Conduct Certificate from the last attended institution',
        'Study & Bonafide Certificates (Class VI to Intermediate / Degree)',
        'Income Certificate & Caste / Community Certificate (if claiming fee reimbursement)',
        'Aadhar Card Photocopy (Student and Parents)',
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

                <div className={styles.card}>
                    <div className={styles.list}>
                        {documents.map((doc, idx) => (
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
    );
}