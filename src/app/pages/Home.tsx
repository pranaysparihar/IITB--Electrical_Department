import { HeroSection } from '@/app/components/HeroSection';
import { ContactSection } from '@/app/components/ContactSection';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, FolderKanban, FlaskConical, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const sections = [
        {
            title: 'About The Lab',
            desc: 'The Electric Machines & Drives (EM&D) Laboratory focuses on pushing the boundaries of electric mobility, renewable energy systems, and advanced power convertors. Discover the academic background and vision of our leadership.',
            icon: GraduationCap,
            link: '/about',
            color: 'text-indigo-500',
            bg: 'bg-indigo-50',
            imagePlaceholder: 'bg-indigo-100',
        },
        {
            title: 'Publications & Research',
            desc: 'We actively publish our findings in top-tier journals and conferences. Explore our extensive database of research activities, presentations, and patented technologies that are shaping the future of power electronics.',
            icon: BookOpen,
            link: '/publications',
            color: 'text-cyan-500',
            bg: 'bg-cyan-50',
            imagePlaceholder: 'bg-cyan-100',
        },
        {
            title: 'Projects',
            desc: 'Our work is supported by various leading funding agencies. Discover our current and successfully closed research projects driving practical innovation in real-world electric machines.',
            icon: FolderKanban,
            link: '/projects',
            color: 'text-emerald-500',
            bg: 'bg-emerald-50',
            imagePlaceholder: 'bg-emerald-100',
        },
        {
            title: 'Facilities',
            desc: 'Our laboratory is equipped with state-of-the-art instruments across EV, Power Electronics, and Medium Voltage. We provide hands-on environments for rigorous testing and groundbreaking hardware development.',
            icon: FlaskConical,
            link: '/facilities',
            color: 'text-amber-500',
            bg: 'bg-amber-50',
            imagePlaceholder: 'bg-amber-100',
        },
        {
            title: 'Our Team',
            desc: 'A vibrant community of brilliant professors, dedicated program managers, and passionate students. Meet the minds that collaborate daily to bring our ambitious research visions to life.',
            icon: Users,
            link: '/team',
            color: 'text-rose-500',
            bg: 'bg-rose-50',
            imagePlaceholder: 'bg-rose-100',
        }
    ];

    return (
        <div>
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

            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-6"
                    >
                        Welcome to EM&D Lab
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-[#64748b] max-w-3xl mx-auto leading-relaxed"
                    >
                        We focus on cutting edge research spanning electric vehicles, renewable energy integration, and advanced power electronics. Explore our impact areas below.
                    </motion.p>
                </div>

                {sections.map((item, idx) => (
                    <section key={idx} className={`py-24 ${idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 1 ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="flex-1 w-full"
                                >
                                    <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                                        <item.icon className={`w-8 h-8 ${item.color}`} />
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-[#0f172a] mb-6">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-[#64748b] leading-relaxed mb-8">
                                        {item.desc}
                                    </p>
                                    <Link
                                        to={item.link}
                                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${item.bg} ${item.color} hover:brightness-95`}
                                    >
                                        Learn More about {item.title.split(' ')[0]}
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 1 ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="flex-1 w-full"
                                >
                                    {/* Abstract placeholder graphic mimicking the theme */}
                                    <div className={`aspect-[4/3] rounded-3xl ${item.imagePlaceholder} bg-opacity-30 border border-black/5 flex items-center justify-center relative overflow-hidden`}>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                                            className={`absolute w-full h-full opacity-20`}
                                            style={{ backgroundImage: 'radial-gradient(circle at center, currentColor 2px, transparent 2px)', backgroundSize: '24px 24px', color: 'currentColor' }}
                                        />
                                        <item.icon className={`w-32 h-32 ${item.color} opacity-20 absolute`} />
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </section>
                ))}
            </div>

            <ContactSection />
        </div>
    );
}
