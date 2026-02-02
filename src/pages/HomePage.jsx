import { Link } from 'react-router-dom';

const stats = [
    { icon: 'public', value: '150+', label: 'Countries Reached' },
    { icon: 'schedule', value: '98%', label: 'On-time Delivery' },
    { icon: 'verified_user', value: '24/7', label: 'Secure Handling' },
];

const services = [
    { icon: 'directions_boat', title: 'Sea Freight', description: 'Global ocean transport solutions ensuring cost-effective delivery for large volume cargo.' },
    { icon: 'flight_takeoff', title: 'Air Freight', description: 'Expedited shipping options for time-critical cargo needs with global airport coverage.' },
    { icon: 'local_shipping', title: 'Road Transport', description: 'Flexible trucking networks for efficient door-to-door delivery across continents.' },
    { icon: 'description', title: 'Customs Clearance', description: 'Navigating complex regulations with ease to speed up your global supply chain.' },
];

const partners = [
    { icon: null, shape: 'circle', name: 'LOGISTICA' },
    { icon: null, shape: 'square', name: 'FastCargo' },
    { icon: 'anchor', shape: null, name: 'OCEANIC' },
    { icon: null, shape: 'diamond', name: 'NEXUS' },
    { icon: 'public', shape: null, name: 'GLOBAL' },
];

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzRyU_ewQnZV9ZhRD3gyJwY-NdmGD7kPiNyms13RwWFbnjeOsXHPXb9D2HvtJyrO8CEs3hB-sfWccAgHWmVcoF2xMfvHHTekCMcuzcy3O8iYsR6cVXJ-M2I9-LOhgxKHe0y_ELEiDdAEaCW0Ea8Yz-Z5-xyNgDocoLUeSvq45NXMeAXcCYukjF8KkCv2G2J7tcOiNDSYZi09ihwovLmeKi2A_Nj9ATwgnINg3tFKO2xAqPmEicPsHzpdldqVoOp4FR0z0FZe34RVfp"
                        alt="Container ship at sunset"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/50"></div>
                </div>
                <div className="relative z-10 max-w-[960px] mx-auto px-4 text-center flex flex-col gap-6 items-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                        Global Logistics Partner
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
                        Connecting Global Commerce with Precision
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
                        Efficient, reliable, and secure freight forwarding solutions tailored for your business needs across sea, air, and land.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button className="h-12 px-8 bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-lg transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                            Get a Quote
                            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
                        </button>
                        <button className="h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 text-base font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                            Track Shipment
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center text-center p-4">
                                <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-4">
                                    <span className="material-symbols-outlined icon-lg">{stat.icon}</span>
                                </div>
                                <h3 className="text-4xl font-black text-text-dark mb-1">{stat.value}</h3>
                                <p className="text-text-muted font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-background-light">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold text-text-dark mb-4 tracking-tight">Our Services</h2>
                            <p className="text-text-muted text-lg">Comprehensive logistics solutions designed to optimize your supply chain from origin to destination.</p>
                        </div>
                        <Link to="/services" className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                            View All Services <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_right_alt</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service) => (
                            <div key={service.title} className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                                <div className="size-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">{service.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-dark mb-2">{service.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed mb-4">{service.description}</p>
                                <Link to="/services" className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary-dark">Learn more</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold text-text-muted uppercase tracking-widest mb-10">Trusted by Industry Leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
                        {partners.map((partner) => (
                            <div key={partner.name} className="h-8 flex items-center gap-2">
                                {partner.shape === 'circle' && <div className="size-8 bg-gray-800 rounded-full"></div>}
                                {partner.shape === 'square' && <div className="size-8 border-4 border-gray-800 rounded-none"></div>}
                                {partner.shape === 'diamond' && <div className="w-8 h-8 bg-gray-800 transform rotate-45"></div>}
                                {partner.icon && <span className="material-symbols-outlined text-4xl text-gray-800">{partner.icon}</span>}
                                <span className={`text-xl text-gray-800 ${partner.name === 'LOGISTICA' ? 'font-black' : partner.name === 'OCEANIC' ? 'font-bold italic' : partner.name === 'NEXUS' ? 'font-light' : 'font-bold'}`}>
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
