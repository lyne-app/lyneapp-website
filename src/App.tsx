import {useEffect, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Help from './pages/Help';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import logo from './images/lyneapp-1-logo.png'; // Import the image

function App() {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        const closeMenu = (e: MouseEvent) => {
            if (isOpen && !(e.target as Element).closest('.mobile-menu')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isOpen]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
            {/* Navigation */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center relative">
                <Link to="/">
                    <img src={logo} alt="lyne logo" className="h-20 w-25"/>
                </Link>
                <div className="md:hidden">
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(!isOpen)
                    }}
                            className="text-gray-600 hover:text-black focus:outline-none z-50">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
                <div className={`mobile-menu md:flex md:items-center md:space-x-8 ${isOpen ? 'block' : 'hidden'} 
                                 absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent 
                                 shadow-lg md:shadow-none z-40 md:z-auto`}>
                    <div
                        className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0">
                        <Link to="/about" onClick={() => setIsOpen(false)}
                              className="text-gray-600 hover:text-black w-full md:w-auto text-center py-2 md:py-0 font-bold">About</Link>
                        <Link to="/features" onClick={() => setIsOpen(false)}
                              className="text-gray-600 hover:text-black w-full md:w-auto text-center py-2 md:py-0 font-bold">Features</Link>
                        <Link to="/help" onClick={() => setIsOpen(false)}
                              className="text-gray-600 hover:text-black w-full md:w-auto text-center py-2 md:py-0 font-bold">Help?</Link>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/features" element={<Features/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path="/terms" element={<Terms/>}/>
            </Routes>

            {/* Footer */}
            <footer className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <Link to="/">
                            <img src={logo} alt="lyne logo" className="h-20 w-25"/> {/* Use the image */}
                        </Link>
                        <div className="flex flex-wrap justify-center gap-8">
                            <Link to="/privacy" className="text-gray-600 hover:text-black">Privacy</Link>
                            <Link to="/terms" className="text-gray-600 hover:text-black">Terms</Link>
                            <Link to="/help" className="text-gray-600 hover:text-black">Contact</Link>
                            <Link to="/about" className="text-gray-600 hover:text-black">About Us</Link>
                            <Link to="/help" className="text-gray-600 hover:text-black">Support</Link>
                            <a href="#" className="text-gray-600 hover:text-black">Blog</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;