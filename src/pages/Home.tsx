import React from 'react';
import {Gift, Heart, MessageCircle, Store as PlayStore, Store as AppStore, UserCircle2} from 'lucide-react';

function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <h2 className="text-6xl font-serif font-bold mb-8">
                            We're <span className="italic">not just</span> for<br/>dating anymore
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                            Connect with people from your culture worldwide. Find love, friendship, and meaningful
                            connections in the diaspora.
                        </p>
                        <div className="flex space-x-4 mb-8">
                            <button disabled
                                    className="opacity-50 cursor-not-allowed bg-black text-white px-6 py-3 rounded-lg inline-flex items-center space-x-2">
                                <AppStore className="w-5 h-5"/>
                                <span>App Store</span>
                            </button>
                            <button disabled
                                    className="opacity-50 cursor-not-allowed bg-black text-white px-6 py-3 rounded-lg inline-flex items-center space-x-2">
                                <PlayStore className="w-5 h-5"/>
                                <span>Google Play</span>
                            </button>
                        </div>
                        {/* Add a join the waitlist button here that takes you to the bottom of the screen*/}
                        <button
                            onClick={() => document.getElementById('waitlist-form').scrollIntoView({behavior: 'smooth'})}
                            className="bg-black text-white px-6 py-3 rounded-lg"
                        >
                            Join the Waitlist
                        </button>
                    </div>
                    <div className="flex-1 relative">
                        <div className="bg-gradient-to-br from-orange-100 to-rose-100 rounded-[2.5rem] p-6 shadow-xl">
                            <div className="bg-white rounded-2xl p-4 shadow-sm">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div
                                        className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                        <Heart className="w-6 h-6 text-orange-600"/>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Match Found!</h4>
                                        <p className="text-sm text-gray-600">Based on your cultural preferences</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="aspect-square bg-gray-100 rounded-xl"></div>
                                    <div className="aspect-square bg-gray-100 rounded-xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    {/* Match Feature */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-orange-100 to-rose-100 rounded-[2.5rem] p-6 shadow-xl">
                            <div className="bg-white rounded-2xl overflow-hidden">
                                <div className="p-4">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <UserCircle2 className="w-8 h-8 text-orange-600"/>
                                        <h4 className="font-semibold">Profile</h4>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
                                        <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-4xl font-bold mb-6">Match-made on Lyne.</h3>
                        <p className="text-xl text-gray-600">
                            Our smart algorithm connects you with people who share your cultural background, values, and
                            interests. Find your perfect match in the diaspora.
                        </p>
                    </div>

                    {/* Chat Feature */}
                    <div className="flex flex-col justify-center md:order-1">
                        <h3 className="text-4xl font-bold mb-6">Start meaningful conversations</h3>
                        <p className="text-xl text-gray-600">
                            Break the ice naturally with people who understand your journey. Share stories, experiences,
                            and create lasting connections.
                        </p>
                    </div>
                    <div className="relative md:order-2">
                        <div className="bg-gradient-to-br from-orange-100 to-rose-100 rounded-[2.5rem] p-6 shadow-xl">
                            <div className="bg-white rounded-2xl overflow-hidden">
                                <div className="p-4">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <MessageCircle className="w-8 h-8 text-orange-600"/>
                                        <h4 className="font-semibold">Messages</h4>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-10 bg-gray-100 rounded-xl w-3/4"></div>
                                        <div className="h-10 bg-gray-100 rounded-xl w-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gift Feature */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-orange-100 to-rose-100 rounded-[2.5rem] p-6 shadow-xl">
                            <div className="bg-white rounded-2xl overflow-hidden">
                                <div className="p-4">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <Gift className="w-8 h-8 text-orange-600"/>
                                        <h4 className="font-semibold">Send a Gift</h4>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="aspect-square bg-gray-100 rounded-xl"></div>
                                        <div className="aspect-square bg-gray-100 rounded-xl"></div>
                                        <div className="aspect-square bg-gray-100 rounded-xl"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-4xl font-bold mb-6">Show you care</h3>
                        <p className="text-xl text-gray-600">
                            Make your interest known with virtual gifts and thoughtful gestures. Create special moments
                            that lead to meaningful connections.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-100 to-rose-100 py-24 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-5xl font-serif font-bold mb-8">Ready to meet your match?</h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Join thousands of others finding meaningful connections in the diaspora.
                        </p>
                        {/*Join the waitlist*/}
                        <form id="waitlist-form" className="flex justify-center space-x-4 my-8">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-3 rounded-lg border border-gray-300 w-96"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-black text-white px-8 py-3 rounded-lg"
                            >
                                Join the Waitlist
                            </button>
                        </form>
                        {/*<div className="flex justify-center space-x-6">*/}
                        {/*    <button disabled*/}
                        {/*            className="opacity-50 cursor-not-allowed bg-black text-white px-8 py-4 rounded-xl inline-flex items-center space-x-2">*/}
                        {/*        <AppStore className="w-5 h-5"/>*/}
                        {/*        <span>Download on App Store</span>*/}
                        {/*    </button>*/}
                        {/*    <button disabled*/}
                        {/*            className="opacity-50 cursor-not-allowed bg-black text-white px-8 py-4 rounded-xl inline-flex items-center space-x-2">*/}
                        {/*        <PlayStore className="w-5 h-5"/>*/}
                        {/*        <span>Get it on Google Play</span>*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;