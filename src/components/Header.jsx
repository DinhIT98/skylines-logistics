import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#e7ebf3]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-8 bg-primary rounded text-white">
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>local_shipping</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-text-dark">Skylines Logistics</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors ${isActive(link.path)
                                        ? 'font-semibold text-text-dark'
                                        : 'text-text-muted hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:flex items-center justify-center size-10 rounded-full hover:bg-gray-100 text-text-muted transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </button>

                        {/* Language Switcher */}
                        <div className="flex items-center bg-gray-100 rounded-lg p-1">
                            <button className="px-3 py-1 bg-white rounded shadow-sm text-xs font-bold text-primary">EN</button>
                            <button className="px-3 py-1 text-xs font-bold text-text-muted hover:text-text-dark">VI</button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden flex items-center text-text-dark"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined">
                                {mobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <nav className="flex flex-col p-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${isActive(link.path)
                                        ? 'bg-blue-50 text-primary font-semibold'
                                        : 'text-text-muted hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
