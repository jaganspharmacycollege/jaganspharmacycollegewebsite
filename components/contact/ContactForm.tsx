'use client';

import React, { useState } from 'react';
import { Send, ChevronDown } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        course: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <div className={styles.card}>
            {/* Form Title */}
            <div className={styles.header}>
                <h3 className={styles.title}>Send Us a Message</h3>
                <div className={styles.accentLine} />
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                {/* Row 1: Name & Mobile */}
                <div className={styles.gridRow}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={styles.input}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className={styles.input}
                        required
                    />
                </div>

                {/* Row 2: Email */}
                <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={styles.input}
                    required
                />

                {/* Row 3: Course Dropdown */}
                <div className={styles.selectWrapper}>
                    <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className={`${styles.input} ${styles.select}`}
                        required
                    >
                        <option value="" disabled>Select Course</option>
                        <option value="b-pharm">B. Pharmacy</option>
                        <option value="m-pharm">M. Pharmacy</option>
                        <option value="pharm-d">Pharm. D</option>
                        <option value="other">Other Inquiry</option>
                    </select>
                    <ChevronDown size={16} className={styles.selectIcon} />
                </div>

                {/* Row 4: Message Textarea */}
                <textarea
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${styles.textarea} resize-none`}
                    required
                />

                {/* Submit Button */}
                <button type="submit" className={styles.submitBtn}>
                    Send Message <Send size={15} />
                </button>
            </form>
        </div>
    );
}