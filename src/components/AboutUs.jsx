import React from 'react';

function About() {
    return (
        <div className="p-12 bg-gray-50 rounded-lg max-w-6xl mx-auto">
            <h1
                className="text-4xl mb-6 font-bold text-center"
                style={{ color: 'var(--color-secondary-dark)' }}
            >
                About Us
            </h1>

            {/* About Section */}
            <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Left Content */}
                <div className="flex-1">
                    <p className="text-lg leading-relaxed mb-4">
                        Managing loans and credit cards is crucial, but turbulent circumstances can make it difficult to keep up with payments, putting individuals and SMEs in a compromising position. As a leading debt restructuring company, we are dedicated to understanding the root causes of your financial difficulties and helping you get your personal loans, SME loans, and credit cards back on track. We believe in educating our clients on financial management to prevent future crises.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Excessive debt from credit cards and loans is an undesirable and often unavoidable situation. However, every problem has a solution. With our extensive experience, we can provide you with the best repayment plans from your banks and financial institutions.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        We value open, honest, and transparent relationships with our clients. Our goal is to provide you with the best possible repayment solutions from your creditors and help you make informed decisions to regain control of your loans and credit cards. We believe in offering over-indebted clients open, honest, and transparent advice, as you are the ultimate decision-makers.
                    </p>

                    <p className="text-lg leading-relaxed mb-4" >
                        On behalf of HEM Debts, Loans & Overdue, and Rescheduling Services, we are committed to assisting our clients in achieving a brighter financial future. Our goal is to alleviate your debt-related concerns by providing effective and personalized debt solutions.
                    </p>
                    <p className="text-lg leading-relaxed">

                        We look forward to the opportunity to discuss your financial well-being.
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex-1 text-center">
                    <img
                        src="https://globaldebtadvisory.com/wp-content/uploads/2021/09/about-us-scaled.jpg"
                        alt="Financial Services"
                        className="w-full max-w-md rounded-lg mx-auto"
                    />
                </div>
            </div>

            {/* Group of Companies */}
            <div className="mt-10">
                <h2
                    className="text-2xl font-bold mb-4"
                    style={{ color: 'var(--color-secondary-dark)' }}
                >
                    Group of Companies
                </h2>
                <ul className="text-lg text-gray-700 space-y-1">
                    <li className="flex items-center">
                        <span
                            className="mr-2 text-lg font-bold"
                            style={{ color: 'var(--color-main-dark)' }}
                        >✔</span>
                        Hem Debt Consultants Pvt Ltd
                    </li>
                    <li className="flex items-center">
                        <span
                            className="mr-2 text-lg font-bold"
                            style={{ color: 'var(--color-main-dark)' }}
                        >✔</span>
                        Hem Enterprises
                    </li>
                    <li className="flex items-center">
                        <span
                            className="mr-2 text-lg font-bold"
                            style={{ color: 'var(--color-main-dark)' }}
                        >✔</span>
                        Hem Debt Management Team
                    </li>
                    <li className="flex items-center">
                        <span
                            className="mr-2 text-lg font-bold"
                            style={{ color: 'var(--color-main-dark)' }}
                        >✔</span>
                        Hem Debt & Credit Services
                    </li>
                    <li className="flex items-center">
                        <span
                            className="mr-2 text-lg font-bold"
                            style={{ color: 'var(--color-main-dark)' }}
                        >✔</span>
                        Hem Associates
                    </li>
                    <li className="flex items-center">
                        <span
                            className="mr-2 text-lg font-bold"
                            style={{ color: 'var(--color-main-dark)' }}
                        >✔</span>
                        Aryan Credit Services
                    </li>
                </ul>
            </div>

            {/* Mission & Vision Section */}
            <div className="mt-10 flex flex-col md:flex-row gap-10 bg-white p-8 rounded-lg shadow-md">
                {/* Our Mission */}
                <div className="flex-1">
                    <h2
                        className="text-2xl font-bold mb-3"
                        style={{ color: 'var(--color-secondary-dark)' }}
                    >
                        Our Mission
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Improving lives through financial education. Many people struggle with financial literacy, leading to stressful situations.
                        We empower clients to manage their finances effectively while we work on settling their loans and credit card worries.
                    </p>
                </div>

                {/* Our Vision */}
                <div className="flex-1">
                    <h2
                        className="text-2xl font-bold mb-3"
                        style={{ color: 'var(--color-secondary-dark)' }}
                    >
                        Our Vision
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        To be the most reliable financial partner in the UAE, providing tailored solutions for over-indebted individuals and SMEs.
                        Our goal is to mediate between clients and financial institutions to create sustainable repayment plans.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;