const mainServices = [
    {
        icon: 'directions_boat',
        title: 'Sea Freight',
        description: 'Our ocean freight services provide a cost-effective solution for large shipments. We partner with major shipping lines to ensure reliable schedules and global reach, handling everything from FCL to LCL with precision.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQgEqKwhgSdduCJkwyxVV2TYAf2eiC3lvOSMWApFZ1Ol8-ShPfn4Y6XfgBBBe1i-4WchAE8o04P0vw2vlIFb2fg9_5NsU3ujSx5BjGUCRDj9kN9uSgnwcvo1-GSOL-Xm8zhgstf1Xze1VNbgE17vMcX1EuIzufkFpk8hJgWo_IR104y9JJOIVheLhown1hWGp2dDjNGG6Nl2nqnbGu8HYI-k2tWwn9xohEHomnZ7x3gSUB56xeSAumYJkt09hbKRhOhsTgXsueI3nY',
        features: [
            { title: 'Full & Less than Container Load', description: 'Flexible FCL and LCL options tailored to your volume.' },
            { title: 'Global Port Coverage', description: 'Direct connections to over 500 ports worldwide.' },
        ],
    },
    {
        icon: 'flight_takeoff',
        title: 'Air Freight',
        description: 'When time is critical, our air freight solutions ensure your cargo reaches its destination swiftly. We offer express, standard, and charter services to meet tight deadlines without compromising on safety.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgiXC00931S_8QJr-G_Ez7_xqcdz7j9CKx4mvq3yR-DIrWwLlIccCxWuFCxaeqpxdli2Og_UfS4HlhiyUNgbweebhc-k-mXAe5e2sHENwi6cUwSDYQV9lBk9YTNmzpCSqQQNbWeu8lNX9eFUSfElMZAS5eI6qiJ5bhEGMpHdjKi9g9C7h_YcU0m1nJwZ7fRF3grWs9W8rtmgmjhDq8pQ8M5kuL_Y0MFJfwpdbymzGx6La2n6QYoCsJkaJ2b44Ix5nKcHpUTTS90E64',
        features: [
            { title: 'Express Delivery', description: 'Door-to-door delivery within 24-48 hours for urgent needs.' },
            { title: 'Cargo Insurance', description: 'Comprehensive coverage for high-value air shipments.' },
        ],
    },
    {
        icon: 'local_shipping',
        title: 'Road Transport',
        description: 'Seamless overland connectivity with our fleet of modern trucks. From cross-border logistics to last-mile delivery, we provide real-time GPS tracking and flexible routing to optimize transit times.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9UflHoI0EIrLomdnpHqGjBKgz5vD_ENHGA3h6oE-JnAfG0nJbLQ5GrcrJThBZRmUIPZIcBXiLRchMuPpLJsEsKK8yuYwaR9ca6aIXPOX4gjiI3b1hDkt6kliYxTuN0HmDkw0H6y4JA7nFFsvp3KAg0LI5QkyrCyfBzaWdqq1NaupOq_Afa1IhapP_kRL-TAQ9LsCl75nXYi3zaPXqOgZMER2drP3_0F8bCoccnaT6e8U8rFjDx-txOAx8U7CeOkDSmyJw7WdpT0Td',
        features: [
            { title: 'Cross-Border Logistics', description: 'Streamlined paperwork for international road freight.' },
            { title: 'Specialized Fleets', description: 'Refrigerated and oversized cargo handling available.' },
        ],
    },
    {
        icon: 'description',
        title: 'Customs Clearance',
        description: 'Navigate the complexities of international trade regulations with ease. Our licensed customs brokers handle all documentation, duty calculations, and compliance checks to prevent delays at the border.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPWkADHvEDasSONI2RXUt-6WPhAOLx46YtFa0wmCsU3z8WSJETeSiWyVlFtFctpt9vN3lq8K0FW1IrX6p16JaKcLLjSmvDOpaZgrJ80_mxppBiISwf2DxItAbsUrE1aCmGBasxtCDfFLIuUkziaL8hz2mv7BikL87H9HoI1xB2E7wq8_KhMFDFQCsvA9oYT0V9isEzl1f6EUr0OwWvg1x5VVZrNWStQZBAhSTu2HLHSfA-o6smyJF5pNadG9Po9H5gQoMKPWKPcUvo',
        features: [
            { title: 'Regulatory Compliance', description: 'Expert knowledge of HS codes and import/export laws.' },
            { title: 'Digital Documentation', description: 'Paperless processing for faster clearance times.' },
        ],
    },
];

const valueAddedServices = [
    { icon: 'warehouse', title: 'Warehousing', description: 'Secure storage facilities with inventory management systems, temperature control, and distribution services.' },
    { icon: 'security', title: 'Cargo Insurance', description: 'Protect your financial interests with our all-risk insurance policies covering loss or damage during transit.' },
    { icon: 'inventory_2', title: 'Professional Packaging', description: 'Custom crating and packaging solutions to ensure your goods are secure and compliant with shipping standards.' },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzRyU_ewQnZV9ZhRD3gyJwY-NdmGD7kPiNyms13RwWFbnjeOsXHPXb9D2HvtJyrO8CEs3hB-sfWccAgHWmVcoF2xMfvHHTekCMcuzcy3O8iYsR6cVXJ-M2I9-LOhgxKHe0y_ELEiDdAEaCW0Ea8Yz-Z5-xyNgDocoLUeSvq45NXMeAXcCYukjF8KkCv2G2J7tcOiNDSYZi09ihwovLmeKi2A_Nj9ATwgnINg3tFKO2xAqPmEicPsHzpdldqVoOp4FR0z0FZe34RVfp"
                        alt="Logistics operations"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/40"></div>
                </div>
                <div className="relative z-10 max-w-[960px] mx-auto px-4 text-center flex flex-col gap-4 items-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                        End-to-End Solutions
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
                        Our Logistics Solutions
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl font-light leading-relaxed">
                        Comprehensive supply chain management services tailored to move your business forward.
                    </p>
                </div>
            </div>

            <main className="bg-white">
                {/* Main Services */}
                {mainServices.map((service, index) => (
                    <section key={service.title} className={`py-20 border-b border-gray-100 ${index % 2 !== 0 ? 'bg-background-light' : ''}`}>
                        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? '' : ''}`}>
                                <div className={`${index % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                                    <div className="size-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                                        <span className="material-symbols-outlined icon-lg">{service.icon}</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-text-dark mb-4">{service.title}</h2>
                                    <p className="text-text-muted text-lg leading-relaxed mb-8">{service.description}</p>
                                    <ul className="space-y-4">
                                        {service.features.map((feature) => (
                                            <li key={feature.title} className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                                <div>
                                                    <h4 className="font-bold text-text-dark">{feature.title}</h4>
                                                    <p className="text-sm text-gray-500">{feature.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`${index % 2 !== 0 ? 'order-1 lg:order-2' : ''} relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group`}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                {/* Value Added Services */}
                <section className="py-24 bg-white">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-text-dark mb-4">Value Added Services</h2>
                            <p className="text-text-muted">Going beyond standard transportation to provide a complete logistics ecosystem.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {valueAddedServices.map((service) => (
                                <div key={service.title} className="bg-background-light rounded-xl p-8 border border-gray-100 hover:border-primary/50 transition-colors group">
                                    <div className="size-12 bg-white rounded-lg flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">{service.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-text-dark mb-3">{service.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
