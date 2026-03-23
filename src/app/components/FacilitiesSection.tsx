import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight, Car, Zap, Battery, X } from 'lucide-react';
import evlImage from '../../assets/Facilities/EVLinterior.jpeg';
import mvImage from '../../assets/Facilities/MediumVoltageLab.png';

export function FacilitiesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedGallery, setSelectedGallery] = useState<any>(null);

    const labs = [
        {
            id: 'facilities-ev',
            title: 'Electric Vehicle Lab',
            imageUrl: evlImage,
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
            imageUrl: mvImage,
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
        },
        {
            id: 'facilities-power',
            title: 'Power Electronics Lab',
            imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop',
            icon: Battery,
            sections: [
                {
                    title: 'About the Lab',
                    content: 'The Power Electronics Laboratory at IIT Bombay supports research and development through simulation, design, prototyping, and experimental validation.'
                },
                {
                    title: 'Research & Simulation',
                    content: 'Power electronic circuit simulation, magnetic design, thermal modelling, and 3D modelling of heat sinks and related structures. Reliability analysis of power electronic devices and passive components.'
                },
                {
                    title: 'Hardware & Prototyping',
                    content: 'Facilities for soldering, hardware development, prototype assembly, and experimental testing.'
                },
                {
                    title: 'Applications & Outcomes',
                    bullets: [
                        'Investigation of converter operation, thermal behaviour, magnetic design, and reliability aspects.',
                        'Development of efficient and reliable systems for electric vehicles, photovoltaic systems, battery charging, and related energy applications.'
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
                                onClick={() => setSelectedGallery(lab)}
                                className="relative md:w-2/5 h-64 md:h-auto overflow-hidden cursor-pointer group"
                            >
                                <img
                                    src={lab.imageUrl}
                                    alt={lab.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 bg-white/90 px-4 py-2 rounded-lg font-medium text-slate-900 transition-opacity">
                                        View Gallery
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
                                        onClick={() => setSelectedGallery(lab)}
                                        className="text-[#06b6d4] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                                    >
                                        View Gallery <ArrowRight className="w-4 h-4" />
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
                            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-[101]"
                        >
                            <button
                                onClick={() => setSelectedGallery(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="relative aspect-video bg-slate-900 flex items-center justify-center">
                                <img src={selectedGallery.imageUrl} alt={selectedGallery.title} className="max-w-full max-h-full object-contain" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">{selectedGallery.title} Gallery</h3>
                                <p className="text-[#64748b]">More high-resolution lab images would go here. For now, showing the featured image.</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
