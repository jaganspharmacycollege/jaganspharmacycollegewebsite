'use client';

import React from 'react';
import { ClipboardCheck, FileText, FileUp, CreditCard, Users, CheckCircle } from 'lucide-react';

const steps = [
    {
        step: 'Step 01',
        title: 'Check Eligibility',
        desc: 'Review the eligibility\ncriteria for your\nchosen program.',
        icon: ClipboardCheck,
        iconBg: 'bg-[#EBF7F2] text-[#053B2A]',
    },
    {
        step: 'Step 02',
        title: 'Apply Online',
        desc: 'Fill out the online\napplication form with\nrequired details.',
        icon: FileText,
        iconBg: 'bg-[#F3E8FF] text-purple-700',
    },
    {
        step: 'Step 03',
        title: 'Submit Documents',
        desc: 'Upload the necessary\ndocuments as per the\nguidelines.',
        icon: FileUp,
        iconBg: 'bg-[#FFF3E6] text-[#B86E00]',
    },
    {
        step: 'Step 04',
        title: 'Pay Application Fee',
        desc: 'Pay the application\nfee securely through\nonline mode.',
        icon: CreditCard,
        iconBg: 'bg-[#EBF7F2] text-[#053B2A]',
    },
    {
        step: 'Step 05',
        title: 'Merit / Selection',
        desc: 'Selection will be based\non merit and eligibility\ncriteria.',
        icon: Users,
        iconBg: 'bg-[#F3E8FF] text-purple-700',
    },
    {
        step: 'Step 06',
        title: 'Confirmation',
        desc: 'Receive confirmation\nand admission details\nvia email / SMS.',
        icon: CheckCircle,
        iconBg: 'bg-[#FFF3E6] text-[#B86E00]',
    },
];

export default function AdmissionProcess() {
    return (
        <section className="py-12 bg-[#FAF8F5]">
            <div className="max-w-7xl mx-auto px-4 space-y-6">

                {/* Section Heading with Gold Line */}
                <div className="text-center space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#053B2A]">
                        Admission Process
                    </h2>
                    <div className="w-10 h-[3px] bg-[#B86E00] rounded-full mx-auto" />
                </div>

                {/* 6 Step Cards Flow */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-center">
                    {steps.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="relative flex items-center h-full">
                                {/* Card Container */}
                                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-2xs w-full h-full flex flex-col items-center text-center space-y-3">

                                    {/* Icon Badge */}
                                    <div className={`w-13 h-13 rounded-full ${item.iconBg} flex items-center justify-center shrink-0`}>
                                        <Icon size={24} strokeWidth={1.5} />
                                    </div>

                                    {/* Text Details with Larger Font Sizes */}
                                    <div className="space-y-1">
                                        <p className="text-xs font-semibold text-gray-700">
                                            {item.step}
                                        </p>
                                        <h3 className="text-sm sm:text-base font-serif font-bold text-[#053B2A] leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 leading-snug pt-1 font-medium whitespace-pre-line">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>

                                {/* Double Chevron Separator (») */}
                                {idx !== steps.length - 1 && (
                                    <div className="hidden lg:block absolute -right-3.5 z-20 text-gray-400 font-serif text-base pointer-events-none">
                                        »
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}