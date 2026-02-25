import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight, Zap, Car, Battery, Wind, X } from 'lucide-react';

export function FacilitiesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedGallery, setSelectedGallery] = useState<any>(null);

    const evLab = {
        title: 'Electric Vehicle Lab',
        description: 'A state-of-the-art facility dedicated to the testing and development of electric vehicle powertrains, including battery management systems, on-board chargers, and traction motors. Equipped with dynamometers and battery cycling stations.',
        imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop',
        features: ['200kW Motor Dynamometer', 'Battery Pack Testing Chamber', 'HIL Simulation Setup']
    };

    const powerLab = {
        title: 'Power Electronics Lab',
        description: 'Focused on high-efficiency power conversion systems. This lab features advanced fabrication and testing equipment for wide bandgap (SiC/GaN) devices, multi-level converters, and renewable energy integration systems.',
        imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
        features: ['High Voltage Probing Station', 'Thermal Imaging Camera', 'EMI/EMC Testing']
    };

    const mediumVoltageLab = {
        title: 'Medium Voltage Lab',
        description: 'Specialized for research on medium voltage drives and grid-connected converters. The lab houses high-power supplies and protection systems for testing commercial-scale electrical equipment.',
        imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&h=600&fit=crop',
        features: ['11kV Grid Simulator', 'MV Drive Testbed', 'Partial Discharge Detector']
    };

    const renewableLab = {
        title: 'Renewable Energy Lab',
        description: 'Dedicated to the integration of renewable energy sources such as solar and wind into the electrical grid. Features microgrid simulators and advanced control systems for energy management.',
        imageUrl: 'https://images.unsplash.com/photo-1509391366360-120953a15865?w=800&h=600&fit=crop',
        features: ['Microgrid Emulator', 'Solar PV Simulator', 'Wind Turbine Generator']
    };

    const LabCard = ({ lab, id, icon: Icon }: { lab: any, id: string, icon: any }) => (
        <div id={id} className="scroll-mt-28 mb-8">
            <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img src={lab.imageUrl} alt={lab.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-lg shadow-sm">
                        <Icon className="w-6 h-6 text-[#06b6d4]" />
                    </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{lab.title}</h3>
                    <p className="text-[#475569] mb-6 leading-relaxed flex-1">{lab.description}</p>
                    <div className="mt-auto">
                        <h4 className="font-semibold text-[#0f172a] mb-3">Key Equipment:</h4>
                        <ul className="space-y-2 mb-6">
                            {lab.features.map((feature: string, idx: number) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-[#475569]">
                                    <div className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setSelectedGallery(lab)}
                            className="text-[#06b6d4] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                        >
                            View Gallery <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section ref={ref} id="facilities" className="py-24 bg-gradient-to-b from-white to-[#f8fafc] scroll-mt-20">
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
                    <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
                        World-class infrastructure supporting advanced research and development
                    </p>
                </motion.div>

                <div id="facilities-overview" className="mb-20">
                    <p className="text-center text-[#475569] max-w-4xl mx-auto text-lg leading-relaxed">
                        Our laboratory is equipped with cutting-edge technology to support comprehensive research in electric machines and drives.
                        The facilities facilitate end-to-end development from simulation and prototyping to full-scale testing and validation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <LabCard lab={evLab} id="facilities-ev" icon={Car} />
                    <LabCard lab={powerLab} id="facilities-power" icon={Zap} />
                    <LabCard lab={mediumVoltageLab} id="facilities-medium" icon={Battery} />
                    <LabCard lab={renewableLab} id="facilities-renewable" icon={Wind} />
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

                            <div className="relative aspect-video">
                                <img src={selectedGallery.imageUrl} alt={selectedGallery.title} className="w-full h-full object-cover" />
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
