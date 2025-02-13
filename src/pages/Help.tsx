import {Clock, Mail, MessageCircle} from 'lucide-react';

function Help() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Hero Section */}
            <div className="text-center mb-20">
                <h1 className="text-5xl font-serif font-bold mb-6">Help & Support</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We're here to help you have the best experience on Lyne.
                </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <MessageCircle className="w-8 h-8 text-orange-600"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
                    <p className="text-gray-600 mb-4">
                        Chat with our support team in real-time
                    </p>
                    <button disabled
                            className="bg-orange-600 text-white px-6 py-3 rounded-xl opacity-50 cursor-not-allowed">
                        Start Chat
                    </button>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-8 h-8 text-orange-600"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Email Support</h3>
                    <p className="text-gray-600 mb-4">
                        Get help via email
                    </p>
                    <a href="mailto:support@lyne.app"
                       className="inline-block bg-orange-600 text-white px-6 py-3 rounded-xl">
                        Email Us
                    </a>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Clock className="w-8 h-8 text-orange-600"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Support Hours</h3>
                    <p className="text-gray-600">
                        24/7 Support<br/>
                        Always here to help
                    </p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-bold mb-2">How do I get started?</h3>
                        <p className="text-gray-600">
                            Download the app from your device's app store, create an account, and complete your profile
                            to start connecting with others.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-bold mb-2">How does matching work?</h3>
                        <p className="text-gray-600">
                            Our algorithm considers your cultural background, interests, and preferences to suggest
                            compatible matches.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-bold mb-2">Is my information secure?</h3>
                        <p className="text-gray-600">
                            Yes, we use industry-standard encryption and security measures to protect your personal
                            information.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-bold mb-2">Can I change my location?</h3>
                        <p className="text-gray-600">
                            Yes, you can update your location settings at any time to connect with people in different
                            areas.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h3 className="text-xl font-bold mb-2">How do I report inappropriate behavior?</h3>
                        <p className="text-gray-600">
                            Use the report button on any profile or message to alert our moderation team about
                            inappropriate content or behavior.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Still Need Help?</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Your email"
                        />
                    </div>
                    <div>
                        <label html For="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            placeholder="How can we help?"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Help;