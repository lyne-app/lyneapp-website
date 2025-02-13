import {Globe2, Heart, Users} from 'lucide-react';

function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Hero Section */}
            <div className="text-center mb-20">
                <h1 className="text-5xl font-serif font-bold mb-6">About Lyne</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We're revolutionizing how people from the diaspora connect, date, and build meaningful relationships
                    worldwide.
                </p>
            </div>

            {/* Mission Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                <div className="text-center p-8">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Heart className="w-8 h-8 text-orange-600"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-gray-600">
                        To create meaningful connections between people from similar cultural backgrounds living across
                        the globe.
                    </p>
                </div>
                <div className="text-center p-8">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="w-8 h-8 text-orange-600"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Community</h3>
                    <p className="text-gray-600">
                        A vibrant network of individuals seeking authentic connections rooted in shared cultural
                        experiences.
                    </p>
                </div>
                <div className="text-center p-8">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Globe2 className="w-8 h-8 text-orange-600"/>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-gray-600">
                        To bridge geographical gaps and strengthen cultural bonds in the global diaspora community.
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-3xl p-12 mb-20">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                    <div className="space-y-6 text-lg text-gray-600">
                        <p>
                            Lyne was born from a simple observation: people in the diaspora often struggle to find
                            meaningful connections with others who truly understand their cultural background and
                            experiences.
                        </p>
                        <p>
                            We recognized that traditional dating apps weren't addressing the unique needs of our
                            community. They weren't considering the importance of cultural compatibility, shared values,
                            and the unique experience of maintaining cultural identity while living abroad.
                        </p>
                        <p>
                            That's why we created Lyne - a platform that goes beyond traditional dating. We're building
                            a community where cultural background is celebrated, where shared experiences create
                            stronger bonds, and where meaningful connections flourish.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="mb-20">
                <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-2xl font-bold mb-4">Cultural Authenticity</h3>
                        <p className="text-gray-600">
                            We celebrate and preserve cultural identity while fostering connections across borders.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-2xl font-bold mb-4">Meaningful Connections</h3>
                        <p className="text-gray-600">
                            We prioritize quality matches based on shared values and cultural compatibility.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-2xl font-bold mb-4">Safety & Respect</h3>
                        <p className="text-gray-600">
                            We maintain a secure and respectful environment for all our users.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                        <p className="text-gray-600">
                            We continuously evolve our platform to better serve our community's needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;