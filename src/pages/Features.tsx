import {Gift, Globe2, Heart, MessageCircle, Shield, Sparkles, UserCircle2, Users} from 'lucide-react';

function Features() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Hero Section */}
            <div className="text-center mb-20">
                <h1 className="text-5xl font-serif font-bold mb-6">Features</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Discover how Lyne helps you find meaningful connections in the diaspora.
                </p>
            </div>

            {/* Main Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                        <Heart className="w-6 h-6 text-orange-600"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Cultural Matching</h3>
                    <p className="text-gray-600 mb-6">
                        Our advanced algorithm considers cultural background, values, and interests to create meaningful
                        connections.
                    </p>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center space-x-2">
                            <Sparkles className="w-5 h-5 text-orange-600"/>
                            <span>Smart compatibility scoring</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Globe2 className="w-5 h-5 text-orange-600"/>
                            <span>Cultural background matching</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-orange-600"/>
                            <span>Shared interests discovery</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                        <MessageCircle className="w-6 h-6 text-orange-600"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Rich Messaging</h3>
                    <p className="text-gray-600 mb-6">
                        Express yourself fully with our comprehensive messaging features.
                    </p>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center space-x-2">
                            <Sparkles className="w-5 h-5 text-orange-600"/>
                            <span>Real-time chat</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Globe2 className="w-5 h-5 text-orange-600"/>
                            <span>Voice messages</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-orange-600"/>
                            <span>Photo sharing</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                        <UserCircle2 className="w-6 h-6 text-orange-600"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Rich Profiles</h3>
                    <p className="text-gray-600 mb-6">
                        Create detailed profiles that showcase your personality and cultural background.
                    </p>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center space-x-2">
                            <Sparkles className="w-5 h-5 text-orange-600"/>
                            <span>Cultural background details</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Globe2 className="w-5 h-5 text-orange-600"/>
                            <span>Interest tags</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-orange-600"/>
                            <span>Photo galleries</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-3xl">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                        <Gift className="w-6 h-6 text-orange-600"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Virtual Gifts</h3>
                    <p className="text-gray-600 mb-6">
                        Show interest and appreciation through our virtual gifting system.
                    </p>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center space-x-2">
                            <Sparkles className="w-5 h-5 text-orange-600"/>
                            <span>Cultural-themed gifts</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Globe2 className="w-5 h-5 text-orange-600"/>
                            <span>Special occasion gifts</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-orange-600"/>
                            <span>Custom messages</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Safety Features */}
            <div className="bg-gradient-to-br from-orange-100 to-rose-100 rounded-3xl p-12 mb-20">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center space-x-4 mb-8">
                        <Shield className="w-8 h-8 text-orange-600"/>
                        <h2 className="text-3xl font-bold">Safety First</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Profile Verification</h3>
                            <p className="text-gray-600">
                                All profiles are verified to ensure authentic connections and prevent fraud.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Privacy Controls</h3>
                            <p className="text-gray-600">
                                Customize your privacy settings and control who can see your profile.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                            <p className="text-gray-600">
                                Our support team is always available to help with any concerns.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Block & Report</h3>
                            <p className="text-gray-600">
                                Easily block and report inappropriate behavior to maintain a safe environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;