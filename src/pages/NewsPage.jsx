const categories = [
    { name: 'Industry News', count: 12 },
    { name: 'Company Updates', count: 5 },
    { name: 'Regulations', count: 8 },
    { name: 'Technology', count: 4 },
    { name: 'Sustainability', count: 3 },
];

const articles = [
    { icon: 'eco', category: 'Sustainability', date: 'Oct 18, 2023', title: 'Green Logistics: Reducing Carbon Footprint in Supply Chains', excerpt: 'Explore actionable strategies for businesses to implement eco-friendly practices in their logistics operations without compromising efficiency.' },
    { icon: 'smart_toy', category: 'Technology', date: 'Oct 12, 2023', title: 'The Role of AI in Modern Warehousing & Distribution', excerpt: 'Artificial Intelligence is revolutionizing inventory management. Learn how automated systems are increasing accuracy and speed.' },
    { icon: 'flight_takeoff', category: 'Company News', date: 'Sep 28, 2023', title: 'Expanding Our Air Freight Network to South America', excerpt: 'Skylines Logistics is proud to announce new direct cargo flights connecting major Asian hubs with key destinations in Brazil and Chile.' },
    { icon: 'policy', category: 'Regulations', date: 'Sep 15, 2023', title: 'Navigating New EU Customs Regulations for 2024', excerpt: 'Key changes are coming to European import laws. Here is a breakdown of what logistics managers need to know to ensure compliance.' },
];

const latestPosts = [
    { icon: 'local_shipping', title: 'Understanding Incoterms 2020 for Global Trade', date: 'Aug 24, 2023' },
    { icon: 'warehouse', title: 'Top 5 Warehousing Trends to Watch', date: 'Aug 10, 2023' },
    { icon: 'trending_up', title: 'Sea Freight Market Update: August 2023', date: 'Aug 02, 2023' },
];

export default function NewsPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzRyU_ewQnZV9ZhRD3gyJwY-NdmGD7kPiNyms13RwWFbnjeOsXHPXb9D2HvtJyrO8CEs3hB-sfWccAgHWmVcoF2xMfvHHTekCMcuzcy3O8iYsR6cVXJ-M2I9-LOhgxKHe0y_ELEiDdAEaCW0Ea8Yz-Z5-xyNgDocoLUeSvq45NXMeAXcCYukjF8KkCv2G2J7tcOiNDSYZi09ihwovLmeKi2A_Nj9ATwgnINg3tFKO2xAqPmEicPsHzpdldqVoOp4FR0z0FZe34RVfp"
                        alt="Container ship"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-navy-footer/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-[960px] mx-auto px-4 text-center flex flex-col gap-4 items-center pt-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                        Skylines Blog
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
                        Industry Insights &amp; News
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl font-light leading-relaxed">
                        Expert analysis, company updates, and the latest trends shaping the future of global logistics and supply chain management.
                    </p>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Featured Article */}
                        <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-lg transition-all duration-300">
                            <a href="#" className="block relative h-[360px] overflow-hidden bg-gray-200">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-navy-footer/80 opacity-90"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white/20 text-[120px]">trending_up</span>
                                </div>
                                <div className="absolute top-6 left-6">
                                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wide rounded shadow-sm">Featured</span>
                                </div>
                            </a>
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs font-semibold text-text-muted mb-3 uppercase tracking-wider">
                                    <span className="text-primary">Market Analysis</span>
                                    <span className="size-1 rounded-full bg-gray-300"></span>
                                    <span>Oct 24, 2023</span>
                                </div>
                                <h2 className="text-3xl font-bold text-text-dark mb-4 group-hover:text-primary transition-colors">
                                    Global Freight Rates: Q4 2023 Outlook &amp; Strategies for Shippers
                                </h2>
                                <p className="text-text-muted text-lg leading-relaxed mb-6 line-clamp-3">
                                    As we approach the end of the year, freight rates are showing signs of stabilization across major trade lanes. Our comprehensive report analyzes the current market dynamics, capacity fluctuations, and what shippers can expect in the coming quarter.
                                </p>
                                <a href="#" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors">
                                    Read Full Article <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                                </a>
                            </div>
                        </article>

                        {/* Article Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {articles.map((article) => (
                                <article key={article.title} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:-translate-y-1 transition-all duration-300">
                                    <a href="#" className="relative h-48 bg-blue-50 flex items-center justify-center overflow-hidden">
                                        <span className="material-symbols-outlined text-primary/30 text-6xl group-hover:scale-110 transition-transform duration-500">{article.icon}</span>
                                    </a>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 text-xs font-medium text-text-muted mb-3">
                                            <span className="text-primary uppercase font-bold">{article.category}</span>
                                            <span>•</span>
                                            <span>{article.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                                            {article.excerpt}
                                        </p>
                                        <a href="#" className="text-sm font-bold text-primary hover:text-primary-dark mt-auto">Read more</a>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center pt-8 border-t border-gray-100">
                            <nav className="flex gap-2">
                                <a href="#" className="size-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                                </a>
                                <a href="#" className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</a>
                                <a href="#" className="size-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 font-medium">2</a>
                                <a href="#" className="size-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 font-medium">3</a>
                                <span className="size-10 flex items-center justify-center text-gray-400">...</span>
                                <a href="#" className="size-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </nav>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Search */}
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h4 className="font-bold text-text-dark mb-4">Search</h4>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full h-11 pl-4 pr-10 rounded-lg bg-background-light border-transparent focus:border-primary focus:bg-white focus:ring-0 text-sm transition-colors"
                                />
                                <button className="absolute right-0 top-0 h-11 w-10 flex items-center justify-center text-gray-400 hover:text-primary">
                                    <span className="material-symbols-outlined text-lg">search</span>
                                </button>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h4 className="font-bold text-text-dark mb-4">Categories</h4>
                            <ul className="space-y-3">
                                {categories.map((cat) => (
                                    <li key={cat.name}>
                                        <a href="#" className="flex items-center justify-between text-sm text-text-muted hover:text-primary group transition-colors">
                                            <span>{cat.name}</span>
                                            <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-xs font-bold group-hover:bg-primary group-hover:text-white transition-colors">{cat.count}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Latest Posts */}
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h4 className="font-bold text-text-dark mb-6">Latest Posts</h4>
                            <div className="space-y-6">
                                {latestPosts.map((post) => (
                                    <a key={post.title} href="#" className="flex gap-4 group">
                                        <div className="size-16 rounded-lg bg-gray-100 flex-shrink-0 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-gray-400 text-2xl">{post.icon}</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h5 className="text-sm font-bold text-text-dark group-hover:text-primary transition-colors line-clamp-2">{post.title}</h5>
                                            <span className="text-xs text-text-muted">{post.date}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-navy-footer p-6 rounded-xl text-white shadow-lg relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 opacity-10">
                                <span className="material-symbols-outlined text-9xl">mail</span>
                            </div>
                            <h4 className="font-bold mb-2 relative z-10">Subscribe to our newsletter</h4>
                            <p className="text-gray-300 text-xs mb-4 relative z-10">Get the latest logistics news and market insights directly to your inbox.</p>
                            <form className="relative z-10 flex flex-col gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-white/10 border border-white/20 rounded text-sm text-white placeholder-gray-400 focus:ring-1 focus:ring-primary w-full h-10 px-3"
                                />
                                <button type="submit" className="bg-primary hover:bg-primary-dark text-white rounded px-3 h-10 flex items-center justify-center transition-colors font-bold text-sm w-full">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
