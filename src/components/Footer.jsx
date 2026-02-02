import { Link } from 'react-router-dom';

const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Latest News', path: '/news' },
    { name: 'Sustainability', path: '#' },
    { name: 'Careers', path: '#' },
];

const services = [
    { name: 'Sea Freight', path: '/services' },
    { name: 'Air Freight', path: '/services' },
    { name: 'Road Transport', path: '/services' },
    { name: 'Warehousing', path: '/services' },
    { name: 'Customs Brokerage', path: '/services' },
];

export default function Footer() {
    return (
        <footer className="bg-navy-footer text-white pt-16 pb-8">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-8 bg-primary rounded text-white">
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>local_shipping</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight">Skylines Logistics</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Providing top-tier logistics solutions to connect businesses globally. We ensure your cargo arrives safely and on time.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a href="#" className="size-10 rounded-lg bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                            </a>
                            <a href="#" className="size-10 rounded-lg bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            </a>
                            <a href="#" className="size-10 rounded-lg bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-400">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="hover:text-white transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-400">
                            {services.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="hover:text-white transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-400 mb-8">
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                                123 Logistics Way, Port City
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">phone</span>
                                +84 123 456 789
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                                info@skylines-logistics.com
                            </li>
                        </ul>
                        <h5 className="text-white font-bold text-sm mb-3">Subscribe to our newsletter</h5>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-white/10 border-none rounded text-sm text-white placeholder-gray-500 focus:ring-1 focus:ring-primary w-full h-10 px-3"
                            />
                            <button type="submit" className="bg-primary hover:bg-primary-dark text-white rounded px-3 h-10 flex items-center justify-center transition-colors">
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2023 Skylines Logistics. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
