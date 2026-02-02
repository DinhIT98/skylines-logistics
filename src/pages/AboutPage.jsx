const timeline = [
    { year: '2010', title: 'The Beginning', description: 'Skylines Logistics was founded in Port City with a small team of 5 and a single warehouse, focusing on local trucking.', align: 'left' },
    { year: '2015', title: 'Going Global', description: 'Expanded operations to include Sea and Air freight, opening our first international office in Singapore to serve the Asian market.', align: 'right' },
    { year: '2019', title: 'Digital Transformation', description: 'Launched our proprietary tracking system, allowing clients real-time visibility and boosting operational efficiency by 40%.', align: 'left' },
    { year: '2023', title: 'Sustainability Focus', description: 'Achieved carbon neutral status for our local fleet and partnered with green shipping lines to offer eco-friendly logistics solutions.', align: 'right' },
];

const leaders = [
    { name: 'Sarah Jenkins', role: 'Chief Executive Officer', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoGTVPkBb8YT8k43nyyCx9YL7fLOqRnl2CIv_5RK8zGtZHzVYItFgybYsf8nZFkVvAU4PAR6LWKmHSMJZmVOIirA0jxLvZ3FH-O5ivwrx5_M57-VdSLh80PI3tkpJMaXqD6bc7J4PnlvvvG4pPwtWZDsDr7miKLJ4EVdr3N73H5w1xfVxGLeLUppAtD0rHsTjZ1XGDa4nEjLoKRyFzQ2_EPHKsw8bAUVGhou32u16VbKWfR2tRcLL1Xh8ST_e1kKuUva4uiXYSZTV2' },
    { name: 'David Tran', role: 'Chief Operating Officer', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUsGSPBSRsg6wCSCZNFNo78go8xYxBr2MpdjnfL_PuVsIci8gt2e_jwggArcifGu9CzvWsKGq_RVYqHnWiAH3IK65hkgwONSAlA0wEnNOoY8HoLXRYJu4m8Ow8Rt3uC1IJ-_zGiCP9pWYaRAoyutu52ChZGur6pSASjZ2BQF9lbRw8zE-pcWqKU8BaGYBQWGY0VteAVFPqaXULGQr3t6khmpf4T9BzVQMf_IW-uQ2tvtsfjaCG73_f7yET87UIN07DyRih2JP_65FE' },
    { name: 'Elena Rodriguez', role: 'Head of Global Sales', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZUByFCPlHnLM58fP0Cm0Nwz8GMwBuFnQEfuKXLMUTDybW_PRbiwI1ja8TdnVBwuFbjdHwoT-Lyv7j2Y1l-TNEE_SHv_m-KJ7L1fZbxMkHwvdUQmDwn_9ggjESjKtuOK9PEcWQqbdOSI6IB61KVKJm3jwEP1mj1zw-5slwSfV7ELPpB61fJBmapKhU6epLjVd5HZxb5WjCc_ZwyaShg4qW_t3WxO1U0x7IH4NjYGB09HXpqtfuKDggXG0lyRhJ0a-JT2BwLBliqio6' },
    { name: 'Michael Ross', role: 'Head of Logistics', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvUMlulq6VgcR8uvZHIMiTIaWJ2MCoWLp6ranxHJHZ73KdcjF-vKmPLFgjeQDMcRButdANia-dB-CY3aJtCaZFbSCqe4WBX-32miezuyKerLtdMy8X8nbm74sPoWVONNhUg9HBOtRk_cgCRmbPdIm4OsOFNWyMfoV9zKegHevPPJL3pBDjKq4Y13kgt_-z1ZRHz7YWd20G6wGjVv97DW7HQauigh1Ac_YO4r9iKFBSS8uMb5--vtiUgWRuKyzzCXLZXViTi6GOUAuP' },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[500px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJs8ai8-RjE57tZ-YC5iYc0LDT9j4uG6NLwsLG-OY2x2Pc2b7SYYOcLYvJh0UHVDgvTSUq6y01zDnDNPNnFNSffdsDXHY8u8gRftdBG1a0ubXxuLWI6DeXPda6nWkf09-Ft4YXCARRy_ZYRMR-laK592Pvz_18bv7gd0ooUyCbeNwFKfzijlXT79VR07SLYImVNdf4vPU9xDben11J6okCYCBHH8Ei51vfURCzS9356fa6Zlke3pPEU1UvoJnRmSXIaEWG7OECulSw"
                        alt="Global network map"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-background-dark/60"></div>
                </div>
                <div className="relative z-10 max-w-[960px] mx-auto px-4 text-center flex flex-col gap-6 items-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                        About Skylines
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
                        Our Story of Global Connection
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
                        Founded on the principles of reliability and innovation, we have been bridging the gap between markets and people since 2010.
                    </p>
                </div>
            </div>

            {/* Vision & Mission */}
            <section className="py-20 bg-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        <div className="flex flex-col gap-6 p-8 rounded-2xl bg-blue-50/50 border border-blue-100">
                            <div className="size-14 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined icon-lg">visibility</span>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-text-dark mb-4">Our Vision</h2>
                                <p className="text-text-muted text-lg leading-relaxed">
                                    To be the world's most trusted partner in global supply chain management, redefining logistics through technology, sustainability, and an unwavering commitment to customer success. We envision a world where borders are seamless and commerce flows without interruption.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                            <div className="size-14 rounded-xl bg-text-dark flex items-center justify-center text-white shadow-lg">
                                <span className="material-symbols-outlined icon-lg">flag</span>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-text-dark mb-4">Our Mission</h2>
                                <p className="text-text-muted text-lg leading-relaxed">
                                    To deliver excellence in logistics by providing innovative, cost-effective, and secure transportation solutions. We empower businesses to grow by handling their cargo with the utmost care, ensuring on-time delivery, and navigating complex regulatory landscapes with expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-background-light">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Our Journey</h2>
                        <p className="text-text-muted text-lg">A timeline of growth, innovation, and expansion over the last decade.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>
                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={item.year} className="relative flex flex-col md:flex-row items-center justify-between">
                                    {item.align === 'left' || index % 2 === 0 ? (
                                        <>
                                            <div className="flex-1 w-full md:w-5/12 mb-4 md:mb-0 md:text-right pr-0 md:pr-12 pl-12 md:pl-0">
                                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                                    <span className="text-primary font-bold text-lg block mb-2">{item.year}</span>
                                                    <h3 className="text-xl font-bold text-text-dark mb-2">{item.title}</h3>
                                                    <p className="text-sm text-gray-500">{item.description}</p>
                                                </div>
                                            </div>
                                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white transform -translate-x-1/2"></div>
                                            <div className="flex-1 w-full md:w-5/12 pl-12 hidden md:block"></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex-1 w-full md:w-5/12 hidden md:block"></div>
                                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white transform -translate-x-1/2"></div>
                                            <div className="flex-1 w-full md:w-5/12 mb-4 md:mb-0 pl-12">
                                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                                    <span className="text-primary font-bold text-lg block mb-2">{item.year}</span>
                                                    <h3 className="text-xl font-bold text-text-dark mb-2">{item.title}</h3>
                                                    <p className="text-sm text-gray-500">{item.description}</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Meet Our Leadership</h2>
                        <p className="text-text-muted text-lg">The experts driving our global operations forward.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {leaders.map((leader) => (
                            <div key={leader.name} className="group flex flex-col items-center">
                                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-gray-100">
                                    <img
                                        src={leader.image}
                                        alt={`Portrait of ${leader.name}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-text-dark">{leader.name}</h3>
                                <p className="text-primary font-medium text-sm mb-2">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
