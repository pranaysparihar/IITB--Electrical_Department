import { HeroSection } from '@/app/components/HeroSection';
import { ContactSection } from '@/app/components/ContactSection';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, Users, FolderKanban, FlaskConical, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function RNDSlideshow() {
    const images = [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full h-full relative overflow-hidden rounded-3xl group">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={(e) => { e.preventDefault(); prevSlide(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={(e) => { e.preventDefault(); nextSlide(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={(e) => { e.preventDefault(); setCurrentIndex(idx); }}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white scale-110 shadow-sm' : 'bg-white/50 hover:bg-white/80'}`}
                    />
                ))}
            </div>
        </div>
    );
}

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
            title: 'Research & Development',
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
            <HeroSection />

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
                                        Know More about {item.title.split(' ')[0]}
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
                                    {item.title === 'Research & Development' ? (
                                        <div className="aspect-[4/3] rounded-3xl flex items-center justify-center relative shadow-lg overflow-hidden">
                                            <RNDSlideshow />
                                        </div>
                                    ) : (
                                        <div className={`aspect-[4/3] rounded-3xl ${item.imagePlaceholder} bg-opacity-30 border border-black/5 flex items-center justify-center relative overflow-hidden`}>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                                                className={`absolute w-full h-full opacity-20`}
                                                style={{ backgroundImage: 'radial-gradient(circle at center, currentColor 2px, transparent 2px)', backgroundSize: '24px 24px', color: 'currentColor' }}
                                            />
                                            <item.icon className={`w-32 h-32 ${item.color} opacity-20 absolute`} />
                                        </div>
                                    )}
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
