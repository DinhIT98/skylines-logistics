export default function ContactPage() {
    return (
        <>
            {/* Map Section */}
            <div className="w-full h-[450px] relative z-0 bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424361575677!2d106.69002367584113!3d10.77877545914979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a9d8d1bb3%3A0x625e1a32970725a3!2sIndependence%20Palace!5e0!3m2!1sen!2s!4v1715699000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) contrast(90%)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 w-fit rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                Contact Information
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-text-dark mb-6 leading-tight">
                                We are here to help you grow
                            </h1>
                            <p className="text-lg text-text-muted mb-10 leading-relaxed">
                                Have a question about our services or need a custom logistics solution? Our team of experts is ready to assist you 24/7.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 size-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary shadow-sm">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-text-dark mb-1">Our Location</h3>
                                        <p className="text-text-muted leading-relaxed">123 Logistics Way, Port City District 1,<br />Ho Chi Minh City, Vietnam</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 size-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary shadow-sm">
                                        <span className="material-symbols-outlined">phone</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-text-dark mb-1">Phone Number</h3>
                                        <p className="text-text-muted hover:text-primary transition-colors cursor-pointer">+84 123 456 789</p>
                                        <p className="text-text-muted hover:text-primary transition-colors cursor-pointer">+1 (555) 012-3456</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 size-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary shadow-sm">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-text-dark mb-1">Email Address</h3>
                                        <p className="text-text-muted hover:text-primary transition-colors cursor-pointer">info@skylines-logistics.com</p>
                                        <p className="text-text-muted hover:text-primary transition-colors cursor-pointer">support@skylines-logistics.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 size-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary shadow-sm">
                                        <span className="material-symbols-outlined">schedule</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-text-dark mb-1">Working Hours</h3>
                                        <p className="text-text-muted">Mon - Fri: 08:00 AM - 06:00 PM</p>
                                        <p className="text-text-muted">Saturday: 09:00 AM - 01:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-background-light p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <span className="material-symbols-outlined text-9xl text-primary">contact_mail</span>
                            </div>
                            <h3 className="text-2xl font-bold text-text-dark mb-6 relative z-10">Get in Touch</h3>
                            <form className="space-y-5 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-text-dark mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 rounded-lg border-gray-200 bg-white text-text-dark placeholder-gray-400 focus:border-primary focus:ring-primary focus:ring-1 transition-colors outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-text-dark mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full px-4 py-3 rounded-lg border-gray-200 bg-white text-text-dark placeholder-gray-400 focus:border-primary focus:ring-primary focus:ring-1 transition-colors outline-none"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-text-dark mb-2">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Rate Request for Sea Freight"
                                        className="w-full px-4 py-3 rounded-lg border-gray-200 bg-white text-text-dark placeholder-gray-400 focus:border-primary focus:ring-primary focus:ring-1 transition-colors outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-text-dark mb-2">Message</label>
                                    <textarea
                                        placeholder="How can we help you?"
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border-gray-200 bg-white text-text-dark placeholder-gray-400 focus:border-primary focus:ring-primary focus:ring-1 transition-colors outline-none resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="button"
                                    className="w-full py-4 bg-navy-footer hover:bg-primary-dark text-white text-base font-bold rounded-lg transition-all shadow-lg hover:shadow-xl mt-2 flex justify-center items-center gap-2"
                                >
                                    Send Message
                                    <span className="material-symbols-outlined text-sm">send</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
