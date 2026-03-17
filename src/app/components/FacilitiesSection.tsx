import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
// Removed Wind icon from this import
import { ArrowRight, Zap, Car, Battery, X } from 'lucide-react';
import evlImage from '../../assets/Facilities/EVLinterior.jpeg';
import mvImage from '../../assets/Facilities/MediumVoltageLab.png';

export function FacilitiesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedGallery, setSelectedGallery] = useState<any>(null);

    const evLab = {
        title: 'Electric Vehicle Lab',
        description: 'The C1973 EV Powertrain Lab at the Indian Institute of Technology Bombay (IIT Bombay) is a dedicated research and innovation facility focused on advancing electric mobility technologies in India. Established with the generous support of the Class of 1973 B.Tech. alumni, the lab drives research on key EV powertrain components including electric motors, motor controllers, and battery management systems (BMS), with a strong emphasis on solutions tailored for India’s rapidly growing electric vehicle ecosystem. The facility is equipped with advanced design, prototyping, and testing infrastructure such as CNC milling machines, active dynamometers, and specialized motor and battery characterization setups, enabling comprehensive development and validation of EV subsystems. The lab actively collaborates with industry through the Industry–Academia Partnership Program (I-APP), engaging with leading automotive companies and EV startups to translate research into real-world applications. It also contributes to skill development through initiatives like the e-Postgraduate Diploma (ePGD) in E-Mobility, aimed at training professionals in emerging EV technologies. Additionally, the lab plays an important role in national initiatives such as the E-RIDES project under the MAHA-EV Mission, supporting India’s efforts to develop indigenous EV technologies and accelerate the transition toward sustainable transportation.',
        imageUrl: evlImage,
        features: ['200kW Motor Dynamometer', 'Battery Pack Testing Chamber', 'HIL Simulation Setup']
    };

    const powerLab = {
        title: 'Power Electronics Lab',
        description: 'The powerelectronics Laboratory in the Department of Electrical Engineering at IIT Bombay supports research and development through simulation, design, prototyping, and experimental validation. The laboratory is used for simulation of power electronic circuits, magnetic simulations and design of magnetic components, thermal modelling of converters and components, and 3D modelling of heat sinks and related structures. The facility also supports reliability studies of power electronic devices and passive components. In addition, the lab provides infrastructure for soldering, hardware development, prototype assembly, and experimental testing of power electronic systems. These facilities enable systematic investigation of converter operation, thermal behaviour, magnetic design, and reliability aspects, thereby supporting the development of efficient and reliable power electronic systems for applications such as electric vehicles, photovoltaic systems, battery charging, and related energy technologies.',
        imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
        features: ['High Voltage Probing Station', 'Thermal Imaging Camera', 'EMI/EMC Testing']
    };

    const mediumVoltageLab = {
        title: 'Medium Voltage Lab',
        description: 'The Medium Voltage Power Electronics Laboratory (MVPEL) at NCPRE, IIT Bombay, is a pioneering facility and the first of its kind in India, established to foster cutting-edge research in MV power electronics. Designed to meet the growing demand for advanced MV systems, this laboratory offers a unique infrastructure for designing and developing innovative solutions in power electronics. The facility, set up with the support from MNRE, is equipped to support research in PV central inverters, direct MV grid-connected inverters, high-power converters, high-voltage device characterization, and HVDC systems, positioning IIT Bombay as a leader in this domain. The laboratory is equipped with advanced instruments capable of handling voltages ranging from 0 to 11 kV AC and power levels up to 200 kVA. Its key resources include a grid simulator (400 V, 22.5 kVA) to emulate grid conditions, MV DC power supplies rated at 6 kV and 10 kV, and high-precision measurement tools such as high-bandwidth oscilloscopes and optically isolated highvoltage probes (2.5 kV). For higher voltage applications, the lab also utilizes passive high-voltage probes capable of measuring up to 20 kV. This comprehensive suite of equipment enables the precise characterization and testing of MV systems and components, offering unmatched capability in the Indian research landscape. The lab setup is engineered with a high emphasis on safety and operational flexibility. The setup includes High Tension and Low-Tension panels, auto-transformers, and step-up transformers, providing a robust infrastructure to facilitate diverse testing requirements. The well-organized layout ensures efficient workflow and seamless integration of equipment during experiments, making it ideal for both academic research and industry collaborations.',
        imageUrl: mvImage,
        features: ['11kV Grid Simulator', 'MV Drive Testbed', 'Partial Discharge Detector']
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

                {/* Grid changed to 3 columns on larger screens to look centered since we have 3 items now */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <LabCard lab={evLab} id="facilities-ev" icon={Car} />
                    <LabCard lab={powerLab} id="facilities-power" icon={Zap} />
                    <LabCard lab={mediumVoltageLab} id="facilities-medium" icon={Battery} />
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
