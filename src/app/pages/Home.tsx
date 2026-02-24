import { HeroSection } from '@/app/components/HeroSection';
import { ContactSection } from '@/app/components/ContactSection';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, FolderKanban, FlaskConical, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const summaries = [
        {
            title: 'About The Lab',
            desc: 'Advancing electric mobility through innovative research in motor design and intelligent control systems.',
            icon: GraduationCap,
            link: '/about',
            color: 'text-indigo-500',
            bg: 'bg-indigo-50',
        },
        {
            title: 'Publications & Research',
            desc: 'Explore our latest journals, conference papers, patents, and ongoing R&D activities.',
            icon: BookOpen,
            link: '/publications',
            color: 'text-cyan-500',
            bg: 'bg-cyan-50',
        },
        {
            title: 'Projects',
            desc: 'Discover our funded research projects driving innovation in electric machines.',
            icon: FolderKanban,
            link: '/projects',
            color: 'text-emerald-500',
            bg: 'bg-emerald-50',
        },
        {
            title: 'Facilities',
            desc: 'State-of-the-art equipments across our EV, Power Electronics, and Medium Voltage Labs.',
            icon: FlaskConical,
            link: '/facilities',
            color: 'text-amber-500',
            bg: 'bg-amber-50',
        },
        {
            title: 'Our Team',
            desc: 'Meet the brilliant professors, program managers, and students powering our research.',
            icon: Users,
            link: '/team',
            color: 'text-rose-500',
            bg: 'bg-rose-50',
        }
    ];

    return (
        <div>
            {/* Note: HeroSection still expects onNavigate prop if it has internal buttons */}
            <HeroSection onNavigate={(section) => {
                if (section === 'contact') {
                    const contactEl = document.getElementById('contact');
                    if (contactEl) {
                        window.scrollTo({ top: contactEl.offsetTop - 80, behavior: 'smooth' });
                    }
                } else {
                    window.location.hash = `#/${section}`;
                }
            }} />

            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6">
                            Welcome to EM&D Lab
                        </h2>
                        <p className="text-xl text-[#64748b] max-w-3xl mx-auto leading-relaxed">
                            We focus on cutting edge research spanning electric vehicles, renewable energy integration, and advanced power electronics. Explore our work below.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {summaries.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col h-full"
                            >
                                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                                    <item.icon className={`w-7 h-7 ${item.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h3>
                                <p className="text-[#64748b] leading-relaxed mb-8 flex-grow">
                                    {item.desc}
                                </p>
                                <Link
                                    to={item.link}
                                    className="inline-flex items-center gap-2 text-[#06b6d4] font-semibold group-hover:text-[#0891b2] transition-colors mt-auto"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
}
