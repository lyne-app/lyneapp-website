import React from 'react';
import {Eye, FileText, Lock, Shield} from 'lucide-react';

function Privacy() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Hero Section */}
            <div className="text-center mb-20">
                <h1 className="text-5xl font-serif font-bold mb-6">Privacy Policy</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Last updated: March 2024
                </p>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-3xl mx-auto mb-20">
                <p className="text-gray-600">
                    At Lyne, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                    and safeguard your information when you use our mobile application and website.
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-3xl mx-auto space-y-12">
                <section>
                    <div className="flex items-center space-x-4 mb-6">
                        <Shield className="w-8 h-8 text-orange-600"/>
                        <h2 className="text-3xl font-bold">Information We Collect</h2>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl space-y-6">
                        <h3 className="text-xl font-bold">Personal Information</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Name and date of birth</li>
                            <li>Contact information (email, phone number)</li>
                            <li>Profile information (photos, interests, preferences)</li>
                            <li>Cultural background and language preferences</li>
                            <li>Location data</li>
                        </ul>

                        <h3 className="text-xl font-bold">Usage Information</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>App usage statistics</li>
                            <li>Device information</li>
                            <li>Log data and analytics</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="flex items-center space-x-4 mb-6">
                        <Lock className="w-8 h-8 text-orange-600"/>
                        <h2 className="text-3xl font-bold">How We Use Your Information</h2>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl space-y-6">
                        <ul className="list-disc list-inside space-y-4 text-gray-600">
                            <li>To provide and maintain our Service</li>
                            <li>To match you with other users based on compatibility</li>
                            <li>To communicate with you about updates and promotions</li>
                            <li>To improve our services and user experience</li>
                            <li>To protect the security of our platform</li>
                            <li>To comply with legal obligations</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="flex items-center space-x-4 mb-6">
                        <Eye className="w-8 h-8 text-orange-600"/>
                        <h2 className="text-3xl font-bold">Information Sharing</h2>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl space-y-6">
                        <p className="text-gray-600">
                            We do not sell or rent your personal information to third parties. We may share your
                            information in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside space-y-4 text-gray-600">
                            <li>With other users as part of the normal operation of the service</li>
                            <li>With service providers who assist in our operations</li>
                            <li>When required by law or to protect our rights</li>
                            <li>In the event of a business transaction (e.g., merger or acquisition)</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="flex items-center space-x-4 mb-6">
                        <FileText className="w-8 h-8 text-orange-600"/>
                        <h2 className="text-3xl font-bold">Your Rights</h2>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl space-y-6">
                        <p className="text-gray-600">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside space-y-4 text-gray-600">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Object to processing of your information</li>
                            <li>Request data portability</li>
                        </ul>
                    </div>
                </section>
            </div>

            {/* Contact Section */}
            <div className="max-w-3xl mx-auto mt-20">
                <div className="bg-gradient-to-br from-orange-100 to-rose-100 p-8 rounded-3xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
                    <p className="text-gray-600 mb-6">
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <a href="mailto:privacy@uselyneapp.com" className="text-orange-600 font-semibold">
                        privacy@uselyneapp.com
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Privacy;