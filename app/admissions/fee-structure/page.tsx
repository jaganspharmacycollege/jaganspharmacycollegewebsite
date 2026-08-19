import React from 'react';
import styles from '../AdmissionsLayout.module.css';

export default function FeeStructurePage() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Tuition & Charges</span>
                    <h1 className={styles.title}>Fee Structure</h1>
                    <div className={styles.accentLine} />
                    <p className={styles.descText}>
                        Tuition fees are structured in adherence to the Andhra Pradesh Higher Education Regulatory and Monitoring Commission (APHERMC) guidelines.
                    </p>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>Course</th>
                                <th className={styles.th}>Duration</th>
                                <th className={styles.th}>Tuition Fee (Per Annum)</th>
                                <th className={styles.th}>Admission / Caution Deposit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.tr}>
                                <td className={`${styles.td} font-bold text-[#053B2A]`}>B.Pharm</td>
                                <td className={styles.td}>4 Years</td>
                                <td className={styles.td}>₹ 45,000 /-</td>
                                <td className={styles.td}>₹ 5,000 (Refundable)</td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={`${styles.td} font-bold text-[#053B2A]`}>Pharm.D</td>
                                <td className={styles.td}>6 Years</td>
                                <td className={styles.td}>₹ 68,000 /-</td>
                                <td className={styles.td}>₹ 5,000 (Refundable)</td>
                            </tr>
                            <tr className={styles.tr}>
                                <td className={`${styles.td} font-bold text-[#053B2A]`}>M.Pharm (All Branches)</td>
                                <td className={styles.td}>2 Years</td>
                                <td className={styles.td}>₹ 55,000 /-</td>
                                <td className={styles.td}>₹ 5,000 (Refundable)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="text-xs text-gray-500 mt-4 italic">
                    * Note: Hostel accommodation, bus transportation, and university examination fees are charged separately as applicable. Eligible SC/ST/BC/EBC students can avail state fee reimbursement schemes.
                </p>
            </div>
        </div>
    );
}