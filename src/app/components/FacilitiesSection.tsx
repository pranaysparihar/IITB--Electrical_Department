import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Car, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react';

import evLabImage1 from '../../assets/Facilities/EV Lab/EV Lab.png';
import evLabImage2 from '../../assets/Facilities/EV Lab/IMG20240215163246.jpg.jpeg';
import evLabImage3 from '../../assets/Facilities/EV Lab/IMG20240426104709.jpg.jpeg';
import evLabImage4 from '../../assets/Facilities/EV Lab/WhatsApp Image 2024-04-30 at 3.48.30 PM.jpeg';
import evLabImage5 from '../../assets/Facilities/EV Lab/WhatsApp Image 2024-04-30 at 3.48.39 PM.jpeg';
import evLabImage6 from '../../assets/Facilities/EV Lab/WhatsApp Image 2024-04-30 at 3.59.05 PM.jpeg';

import mvEvLabImage from '../../assets/Facilities/MV Lab/EV Lab.png';
import mvEvlInterior from '../../assets/Facilities/MV Lab/EVLinterior.jpeg';
import picture1 from '../../assets/Facilities/MV Lab/Picture1.png';
import picture2 from '../../assets/Facilities/MV Lab/Picture2.png';
import picture3 from '../../assets/Facilities/MV Lab/Picture3.png';
import picture4 from '../../assets/Facilities/MV Lab/Picture4.png';
import picture5 from '../../assets/Facilities/MV Lab/Picture5.png';
import picture7 from '../../assets/Facilities/MV Lab/Picture7.png';
import picture8 from '../../assets/Facilities/MV Lab/Picture8.png';
import picture9 from '../../assets/Facilities/MV Lab/Picture9.png';
import picture10 from '../../assets/Facilities/MV Lab/Picture10.png';
import picture11 from '../../assets/Facilities/MV Lab/Picture11.png';
import picture12 from '../../assets/Facilities/MV Lab/Picture12.png';

export function FacilitiesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedGallery, setSelectedGallery] = useState<any>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openGallery = (lab: any) => {
        setSelectedGallery(lab);
        setCurrentImageIndex(0);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedGallery) return;
            if (e.key === 'ArrowLeft') {
                setCurrentImageIndex((prev) => (prev === 0 ? selectedGallery.images.length - 1 : prev - 1));
            } else if (e.key === 'ArrowRight') {
                setCurrentImageIndex((prev) => (prev === selectedGallery.images.length - 1 ? 0 : prev + 1));
            } else if (e.key === 'Escape') {
                setSelectedGallery(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedGallery]);

    const evLabImages = [
        evLabImage1,
        evLabImage2,
        evLabImage3,
        evLabImage4,
        evLabImage5,
        evLabImage6,
    ];

    const mvLabImages = [
        mvEvLabImage,
        mvEvlInterior,
        picture1,
        picture2,
        picture3,
        picture4,
        picture5,
        picture7,
        picture8,
        picture9,
        picture10,
        picture11,
        picture12,
    ];

    const labs = [
        {
            id: 'facilities-ev',
            title: 'Electric Vehicle Lab',
            imageUrl: evLabImage1,
            images: evLabImages,
            icon: Car,
            sections: [
                {
                    title: 'About the Lab',
                    content: 'The C1973 EV Powertrain Lab at IIT Bombay is a dedicated research and innovation facility for advancing electric mobility technologies in India. Established with support from the Class of 1973 B.Tech. alumni, it focuses on developing indigenous EV solutions and serves as a platform for interdisciplinary research and collaboration.'
                },
                {
                    title: 'Research Focus',
                    content: 'Design and analysis of efficient, reliable power electronic systems tailored to Indian conditions, emphasizing efficiency, cost-effectiveness, and scalability.'
                },
                {
                    title: 'Industry & Collaboration',
                    bullets: [
                        'Active collaboration through the Industry–Academia Partnership Program (I-APP) with automotive OEMs, EV startups, and partners such as John Deere, Matter, and Tapfin.',
                        'Contribution to national initiatives including the E-RIDES project under ANRF’s MAHA-EV Mission.'
                    ]
                },
                {
                    title: 'Education & Outreach',
                    bullets: [
                        'Offers interdisciplinary programs like the e-Postgraduate Diploma (ePGD) in E-Mobility.',
                        'Focuses on skill development for the growing EV sector.'
                    ]
                },
                {
                    title: 'Key Equipment',
                    bullets: [
                        'Dynamometer(upto 50kw)',
                        'Wire Cut EDM',
                        'Oscilloscopes',
                        'Regenerative Grid Simulator',
                        'Battery Cycler',
                        'CNC Milling Machine',
                        'Potentiostat'
                    ]
                }
            ]
        },
        {
            id: 'facilities-medium',
            title: 'Medium Voltage Lab',
            imageUrl: mvEvLabImage,
            images: mvLabImages,
            icon: Zap,
            sections: [
                {
                    title: 'About the Lab',
                    content: 'The Medium Voltage Power Electronics Laboratory (MVPEL) at NCPRE, IIT Bombay is a pioneering facility and the first of its kind in India for research in medium voltage (MV) power electronics. Established with support from MNRE, it aims to foster advanced research and development in MV systems. The lab provides unique infrastructure for designing and developing innovative power electronic solutions, positioning IIT Bombay as a leader in this domain.'
                },
                {
                    title: 'Research Focus',
                    bullets: [
                        'PV central inverters and direct MV grid-connected inverters.',
                        'High-power converters and HVDC systems.',
                        'High-voltage device characterization and MV system development.'
                    ]
                },
                {
                    title: 'Infrastructure & Capability',
                    bullets: [
                        'Supports voltage levels from 0 to 11 kV AC and power levels up to 200 kVA.',
                        'Enables design, testing, and validation of medium voltage power electronic systems.',
                        'Offers a comprehensive platform for both academic research and industry-oriented development.'
                    ]
                },
                {
                    title: 'Key Equipment',
                    bullets: [
                        'Grid simulator (400 V, 22.5 kVA) for emulating grid conditions.',
                        'MV DC power supplies rated at 6 kV and 10 kV.',
                        'High-bandwidth oscilloscopes and optically isolated high-voltage probes (2.5 kV).',
                        'Passive high-voltage probes capable of measurements up to 20 kV.'
                    ]
                },
                {
                    title: 'Safety & System Design',
                    bullets: [
                        'Equipped with High Tension (HT) and Low Tension (LT) panels.',
                        'Includes auto-transformers and step-up transformers for flexible operation.',
                        'Designed with strong emphasis on safety, operational flexibility, and efficient workflow.'
                    ]
                }
            ]
        }
    ];

    return (
        <section ref={ref} id="facilities" className="py-24 bg-gradient-to-b from-white to-slate-50 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
                        Facilities
                    </h2>
                    <p className="text-xl text-[#64748b] max-w-3xl mx-auto mb-8">
                        World-class infrastructure supporting advanced research and development
                    </p>
                    <div id="facilities-overview" className="mb-20">
                        <p className="text-center text-[#475569] max-w-4xl mx-auto text-lg leading-relaxed">
                            Our laboratory is equipped with cutting-edge technology to support comprehensive research in electric machines and drives.
                            The facilities facilitate end-to-end development from simulation and prototyping to full-scale testing and validation.
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {labs.map((lab, index) => (
                        <motion.div
                            key={lab.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow min-h-[500px]"
                        >
                            {/* Image Section - Clickable */}
                            <div 
                                onClick={() => openGallery(lab)}
                                className="relative md:w-2/5 h-64 md:h-auto overflow-hidden cursor-pointer group"
                            >
                                <img
                                    src={lab.imageUrl}
                                    alt={lab.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 bg-white/90 px-4 py-2 rounded-lg font-medium text-slate-900 transition-opacity">
                                        View Gallery ({lab.images.length} Photos)
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-lg shadow-sm">
                                    <lab.icon className="w-6 h-6 text-[#06b6d4]" />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-12 flex flex-col flex-1">
                                <h3 className="text-3xl font-bold text-[#0f172a] mb-8">{lab.title}</h3>
                                
                                <div className="space-y-8">
                                    {lab.sections.map((section, sIdx) => (
                                        <div key={sIdx}>
                                            <h4 className="text-lg font-bold text-[#0f172a] mb-3">{section.title}</h4>
                                            {section.content && (
                                                <p className="text-[#475569] leading-relaxed mb-4">{section.content}</p>
                                            )}
                                            {section.bullets && (
                                                <ul className="space-y-2">
                                                    {section.bullets.map((bullet, bIdx) => (
                                                        <li key={bIdx} className="flex items-start gap-3 text-[#475569]">
                                                            <div className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full mt-2 flex-shrink-0" />
                                                            <span className="leading-relaxed">{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 pt-6 border-t border-gray-100">
                                    <button
                                        onClick={() => openGallery(lab)}
                                        className="text-[#06b6d4] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                                    >
                                        View Gallery ({lab.images.length} Photos) <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedGallery && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedGallery(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl shadow-2xl overflow-hidden z-[101] flex flex-col max-h-[90vh]"
                        >
                            {/* Gallery Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{selectedGallery.title} Gallery</h3>
                                    <p className="text-xs text-slate-400">
                                        Photo {currentImageIndex + 1} of {selectedGallery.images.length}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedGallery(null)}
                                    className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Main Image Container */}
                            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] max-h-[60vh] overflow-hidden group">
                                <motion.img
                                    key={currentImageIndex}
                                    src={selectedGallery.images[currentImageIndex]}
                                    alt={`${selectedGallery.title} - Photo ${currentImageIndex + 1}`}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="max-w-full max-h-[60vh] object-contain select-none"
                                />

                                {/* Navigation Controls */}
                                {selectedGallery.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? selectedGallery.images.length - 1 : prev - 1))}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all opacity-80 hover:opacity-100 hover:scale-110 shadow-lg"
                                            aria-label="Previous photo"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button
                                            onClick={() => setCurrentImageIndex((prev) => (prev === selectedGallery.images.length - 1 ? 0 : prev + 1))}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-all opacity-80 hover:opacity-100 hover:scale-110 shadow-lg"
                                            aria-label="Next photo"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Thumbnail Navigation Strip */}
                            {selectedGallery.images.length > 1 && (
                                <div className="p-4 bg-slate-900 border-t border-slate-800">
                                    <div className="flex gap-2 overflow-x-auto pb-1 max-w-full justify-start md:justify-center">
                                        {selectedGallery.images.map((img: string, idx: number) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                                                    idx === currentImageIndex
                                                        ? 'border-[#06b6d4] scale-105 opacity-100'
                                                        : 'border-transparent opacity-50 hover:opacity-80'
                                                }`}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Thumbnail ${idx + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

