import { HeroSection } from '@/app/components/HeroSection';
import { ContactSection } from '@/app/components/ContactSection';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, Users, FolderKanban, FlaskConical, GraduationCap, ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Dynamically import all images from the respective folders
const aboutImages = Object.values(import.meta.glob('../../assets/About Group/*.{png,jpg,jpeg,gif,webp}', { eager: true, import: 'default' })) as string[];
const rndImages = Object.values(import.meta.glob('../../assets/R&D/*.{png,jpg,jpeg,gif,webp}', { eager: true, import: 'default' })) as string[];
const projectImages = Object.values(import.meta.glob('../../assets/Projects/*.{png,jpg,jpeg,gif,webp}', { eager: true, import: 'default' })) as string[];

function Slideshow({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    if (images.length === 0) return null;

    return (
        <div className="w-full h-full relative overflow-hidden rounded-3xl group shadow-lg">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
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
                </>
            )}
        </div>
    );
}

export default function HomePage() {
    const sections = [
        {
            title: 'About Group',
            desc: 'The research group led by Prof. Sandeep Anand at IIT Bombay focuses on advanced power electronics with applications in electric mobility and sustainable energy systems. The group’s work spans electric vehicle drivertrain and charging technologies, wide bandgap (GaN and SiC)–based power converters, and circuits for integrating renewable and alternate energy sources such as solar PV, batteries, and fuel cells. The group combines fundamental research with practical, industry-relevant solutions.',
            icon: GraduationCap,
            link: '/about',
            color: 'text-indigo-500',
            bg: 'bg-indigo-50',
            images: aboutImages,
        },
        {
            title: 'R&D',
            desc: 'Our R&D activities span advanced power electronics for electric mobility and sustainable energy systems, driving innovation through focused research and real-world applications. The group actively contributes to leading journals and conferences, showcasing impactful publications and technical presentations to the global research community.',
            icon: BookOpen,
            link: '/publications',
            color: 'text-cyan-500',
            bg: 'bg-cyan-50',
            images: rndImages,
        },
        {
            title: 'Projects',
            desc: 'Our lab focuses on the development and analysis of advanced power electronic converters for efficient energy conversion and control in applications such as electric vehicles, renewable energy systems, and battery-integrated systems. We emphasize the use of modern technologies, including wide bandgap devices (SiC/GaN), to enhance system performance and efficiency. Our work also involves designing reliable power electronic circuits for interfacing energy sources such as solar PV and batteries, with a focus on improving overall system efficiency, power quality, and reliability.',
            icon: FolderKanban,
            link: '/projects',
            color: 'text-emerald-500',
            bg: 'bg-emerald-50',
            images: projectImages,
        },
        {
            title: 'Achievements',
            desc: 'Our faculty and students have been recognized with numerous prestigious awards and fellowships, including the INSA Associate Fellowship and several international student competitions, reflecting our commitment to research excellence.',
            icon: Trophy,
            link: '/achievements',
            color: 'text-amber-500',
            bg: 'bg-amber-50',
            images: [],
            hideSlideshow: true,
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
                        Welcome HiPER Lab
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-[#64748b] max-w-3xl mx-auto leading-relaxed"
                    >
                        We focus on cutting-edge research in electric mobility, renewable energy integration, and high-efficiency power conversion technologies.
                    </motion.p>
                </div>

                {sections.map((item, idx) => (
                    <section key={idx} className={`py-24 ${idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                                <motion.div
                                    initial={{ opacity: 0, x: item.hideSlideshow ? 0 : (idx % 2 === 1 ? 40 : -40) }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className={`flex-1 w-full ${item.hideSlideshow ? 'md:max-w-4xl mx-auto text-center' : ''}`}
                                >
                                    <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 ${item.hideSlideshow ? 'mx-auto' : ''}`}>
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

                                {!item.hideSlideshow && (
                                    <motion.div
                                        initial={{ opacity: 0, x: idx % 2 === 1 ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="flex-1 w-full"
                                    >
                                        <div className="aspect-[4/3] rounded-3xl relative shadow-2xl overflow-hidden bg-gray-100">
                                            <Slideshow images={item.images} />
                                        </div>
                                    </motion.div>
                                )}

                            </div>
                        </div>
                    </section>
                ))}
            </div>
            <ContactSection />
        </div>
    );
}
