import React from 'react';
import {AlertCircle, FileText, HelpCircle, Shield} from 'lucide-react';

function Terms() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Hero Section */}
            <div className="text-center mb-20">
                <h1 className="text-5xl font-serif font-bold mb-6">Terms of Use</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Last updated: March 2024
                </p>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-3xl mx-auto mb-20">
                <p className="text-gray-600">
                    Welcome to Lyne. By accessing or using our mobile application and website, you agree to be bound by
                    these Terms of Use.
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-3xl mx-auto space-y-12">
                <section>
                    <div className="flex items-center space-x-4 mb-6">
                        <FileText className="w-8 h-8 text-orange-600"/>
                        <h2 className="text-3xl font-bold">Account Terms</h2>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl space-y-6">
                        <h3 className="text-xl font-bold">Account Creation</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>You must be at least 18 years old</li>
                            <li>You must provide accurate information</li>
                            <li>You are responsible for maintaining account security</li>
                            <li>One account per person</li>
                        </ul>

                        <h3 className="text-xl font-bold">Account Termination</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>We may suspend or terminate accounts for violations</li>
                            <li>You may delete your account at any time</li>
                            <li>Termination may result in information deletion</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="flex items-center space-x-4 mb-6">
                        <Shield className="w-8 h-8 text-orange-600"/>
                        <h2 className="text-3xl font-bold">User Conduct</h2>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl space-y-6">
                        <h3 className="text-xl font-bold">Prohibited Activities</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Harassment or abuse of other users</li>
                            <li>Posting inappropriate or offensive content</li>
                            <li>Creating fake profiles</li>
                            <li>Soliciting money from other users</li>
                            <li>Sharing other users' personal information</li>
                            <li>Using the service for commercial purposes</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="flex items-center space-x-4 mb-6">
                        <AlertCircle className="w-8 h-8 text-orange-600"/>
                        <h2 className="text-3xl font-bold">Content Guidelines</h2>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl space-y-6">
                        <h3 className="text-xl font-bold">User Content</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>You retain rights to your content</li>
                            <li>Content must not violate any laws</li>
                            <li>Content must not infringe on others' rights</li>
                            <li>We may remove content at our discretion</li>
                        </ul>

                        <h3 className="text-xl font-bold">Profile Guidelines</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Photos must be of you</li>
                            <li>No explicit or inappropriate content</li>
                            <li>No commercial advertising</li>
                            <li>Accurate information required</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="flex items-center space-x-4 mb-6">
                        <HelpCircle className="w-8 h-8 text-orange-600"/>
                        <h2 className="text-3xl font-bold">Additional Terms</h2>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl space-y-6">
                        <h3 className="text-xl font-bold">Modifications</h3>
                        <p className="text-gray-600 mb-4">
                            We reserve the right to modify these terms at any time. Continued use of the service
                            constitutes acceptance of modified terms.
                        </p>

                        <h3 className="text-xl font-bold">Disclaimer</h3>
                        <p className="text-gray-600 mb-4">
                            The service is provided "as is" without warranties of any kind.
                        </p>

                        <h3 className="text-xl font-bold">Limitation of Liability</h3>
                        <p className="text-gray-600">
                            We are not liable for any indirect, incidental, or consequential damages.
                        </p>
                    </div>
                </section>
            </div>

            {/* Contact Section */}
            <div className="max-w-3xl mx-auto mt-20">
                <div className="bg-gradient-to-br from-orange-100 to-rose-100 p-8 rounded-3xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Questions About Terms?</h2>
                    <p className="text-gray-600 mb-6">
                        If you have any questions about these Terms of Use, please contact us at:
                    </p>
                    <a href="mailto:legal@uselyneapp.com" className="text-orange-600 font-semibold">
                        legal@uselyneapp.com
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Terms;