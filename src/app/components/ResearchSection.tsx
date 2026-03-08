import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';

export function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [expandedBullet, setExpandedBullet] = useState<string | null>(null);

  const researchAreas = [
    {
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&q=80&w=800',
      title: 'Electric Vehicle Powertrains',
      subtitle: 'Next-Gen E-Mobility Solutions',
      description: 'Developing advanced electric drivetrain architectures, including in-wheel motors, multi-motor configurations, and integrated power electronics for enhanced vehicle performance and efficiency.',
      details: [
        'In-wheel motor design and optimization',
        'Traction control and torque vectoring',
        'Regenerative braking systems',
        'Thermal management of EV powertrains',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1572044161730-aeb3d6ce764b?auto=format&fit=crop&q=80&w=800',
      title: 'Motor Design & Control',
      subtitle: 'High-Performance Electric Machines',
      description: 'Innovative designs for permanent magnet, induction, and switched reluctance motors with advanced control algorithms for maximum efficiency, torque density, and dynamic performance.',
      details: [
        'PM motor design with reduced rare-earth materials',
        'Field-oriented and direct torque control',
        'Sensorless control techniques',
        'Multi-phase motor drives',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      title: 'Power Electronics',
      subtitle: 'Efficient Energy Conversion',
      description: 'Designing high-efficiency inverters, converters, and chargers using wide bandgap semiconductors (SiC/GaN) for electric vehicles and renewable energy applications.',
      details: [
        'SiC and GaN-based inverter design',
        'Wireless power transfer systems',
        'Fast charging infrastructure',
        'Grid-to-vehicle (G2V) and V2G systems',
      ],
      color: 'from-green-500 to-teal-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800',
      title: 'Intelligent Motor Drives',
      subtitle: 'AI-Driven Control Systems',
      description: 'Integrating machine learning and AI techniques for predictive maintenance, adaptive control, and real-time optimization of motor drive systems in diverse operating conditions.',
      details: [
        'Neural network-based motor control',
        'Predictive maintenance algorithms',
        'Fault detection and diagnosis',
        'Adaptive parameter estimation',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800',
      title: 'Renewable Energy Integration',
      subtitle: 'Wind & Solar Systems',
      description: 'Developing generator designs and control strategies for wind turbines and solar tracking systems, optimizing energy harvesting and grid integration for sustainable power generation.',
      details: [
        'Doubly-fed induction generators (DFIG)',
        'Maximum power point tracking (MPPT)',
        'Grid synchronization and stability',
        'Hybrid renewable energy systems',
      ],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      title: 'Electric Actuators',
      subtitle: 'Precision Motion Control',
      description: 'Research on high-precision electric actuators for robotics, aerospace, and industrial automation, focusing on compact design, high torque density, and accurate position control.',
      details: [
        'Direct drive actuators',
        'Linear and rotary motors',
        'High-speed motor design',
        'Position and velocity feedback systems',
      ],
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const presentations = [
    { title: 'Keynote at IEEE ECCE 2024', duration: '45 min', thumbnail: 'bg-blue-100' },
    { title: 'Seminar on EV Technologies', duration: '1 hr 15 min', thumbnail: 'bg-green-100' },
    { title: 'Workshop on Wide Bandgap Devices', duration: '30 min', thumbnail: 'bg-purple-100' },
  ];

  return (
    <section ref={ref} id="research" className="py-24 bg-gradient-to-b from-white to-[#f8fafc] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Research
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Pioneering innovations in electric machines, power electronics, and motor control systems
          </p>
        </motion.div>

        {/* R&D Activities */}
        <div id="research-activities" className="mb-24 scroll-mt-28">
          <h3 className="text-3xl font-bold text-[#0f172a] mb-12 border-l-4 border-[#06b6d4] pl-4">R&D Activities</h3>
          <div className="flex flex-wrap gap-6 items-start">
            {researchAreas.map((area, index) => {
              const isExpanded = expandedCard === index;
              return (
                <motion.div
                  layout
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group ${isExpanded
                    ? 'w-full'
                    : 'w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]'
                    }`}
                >
                  <motion.div
                    layout
                    className={`bg-white rounded-2xl border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-[#06b6d4]/10 cursor-pointer flex flex-col ${isExpanded ? 'md:flex-row ring-2 ring-[#06b6d4]' : ''
                      }`}
                    onClick={() => {
                      if (!isExpanded) {
                        setExpandedCard(index);
                        setExpandedBullet(null);
                      }
                    }}
                  >
                    {/* Image */}
                    <motion.div
                      layout
                      className={`relative overflow-hidden shrink-0 ${isExpanded ? 'md:w-[35%]' : 'w-full h-48'}`}
                    >
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>

                    {/* Content Container */}
                    <div className="flex flex-col md:flex-row flex-1 p-6">
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <motion.h3 layout className="text-xl font-semibold text-[#0f172a] mb-2 group-hover:text-[#06b6d4] transition-colors">
                            {area.title}
                          </motion.h3>
                          <motion.p layout className="text-sm text-[#06b6d4] mb-3">{area.subtitle}</motion.p>
                          <motion.p layout className="text-[#475569] text-sm leading-relaxed mb-6">
                            {area.description}
                          </motion.p>
                        </div>

                        <button
                          onClick={(e) => {
                            if (isExpanded) {
                              e.stopPropagation();
                              setExpandedCard(null);
                            }
                          }}
                          className="text-sm text-[#06b6d4] hover:text-[#0891b2] flex items-center gap-1 transition-colors mt-auto w-fit"
                        >
                          {isExpanded ? 'Show less' : 'Know more'}
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </button>
                      </div>

                      {/* Desktop expanded view (horizontal) */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ width: 0, opacity: 0, marginLeft: 0, paddingLeft: 0 }}
                            animate={{ width: 'auto', opacity: 1, marginLeft: 24, paddingLeft: 24 }}
                            exit={{ width: 0, opacity: 0, marginLeft: 0, paddingLeft: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="hidden md:block border-l border-gray-100 overflow-hidden shrink-0"
                          >
                            <div className="w-[300px]" onClick={(e) => e.stopPropagation()}>
                              <h4 className="text-sm font-semibold text-[#0f172a] mb-3">
                                Key Focus Areas:
                              </h4>
                              <ul className="space-y-3">
                                {area.details.map((detail, idx) => {
                                  const bulletId = `${index}-${idx}`;
                                  const isBulletExpanded = expandedBullet === bulletId;
                                  return (
                                    <li key={idx} className="flex flex-col">
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setExpandedBullet(isBulletExpanded ? null : bulletId);
                                        }}
                                        className="flex items-start gap-2 text-sm text-[#475569] cursor-pointer hover:text-[#0f172a] group/bullet"
                                      >
                                        <ChevronRight className={`w-4 h-4 text-[#06b6d4] flex-shrink-0 mt-0.5 transition-transform ${isBulletExpanded ? 'rotate-90' : 'group-hover/bullet:translate-x-0.5'}`} />
                                        <span className={isBulletExpanded ? "font-medium text-[#0f172a]" : ""}>{detail}</span>
                                      </div>
                                      <AnimatePresence>
                                        {isBulletExpanded && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                          >
                                            <p className="pl-6 pt-1 pb-2 text-xs text-[#64748b] leading-relaxed">
                                              Detailed research metrics and comprehensive strategies regarding {detail.toLowerCase()} are currently being documented by our team.
                                            </p>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </li>
                                  );
                                })}
                              </ul>

                              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                                <h4 className="text-sm font-semibold text-[#0f172a] mb-2">Extended Research Notes</h4>
                                <p className="text-xs text-[#64748b] leading-relaxed">
                                  This section features additional material for deep diving into {area.title.toLowerCase()}. There's plenty of space to add more text on our innovative methodologies.
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Mobile expanded view (vertical) */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-6 pt-6 border-t border-gray-100 overflow-hidden w-full"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <h4 className="text-sm font-semibold text-[#0f172a] mb-3">
                              Key Focus Areas:
                            </h4>
                            <ul className="space-y-3">
                              {area.details.map((detail, idx) => {
                                const bulletId = `${index}-${idx}`;
                                const isBulletExpanded = expandedBullet === bulletId;
                                return (
                                  <li key={idx} className="flex flex-col">
                                    <div
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setExpandedBullet(isBulletExpanded ? null : bulletId);
                                      }}
                                      className="flex items-start gap-2 text-sm text-[#475569] cursor-pointer hover:text-[#0f172a] group/bullet"
                                    >
                                      <ChevronRight className={`w-4 h-4 text-[#06b6d4] flex-shrink-0 mt-0.5 transition-transform ${isBulletExpanded ? 'rotate-90' : 'group-hover/bullet:translate-x-0.5'}`} />
                                      <span className={isBulletExpanded ? "font-medium text-[#0f172a]" : ""}>{detail}</span>
                                    </div>
                                    <AnimatePresence>
                                      {isBulletExpanded && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="overflow-hidden"
                                        >
                                          <p className="pl-6 pt-1 pb-2 text-xs text-[#64748b] leading-relaxed">
                                            Detailed research metrics and comprehensive strategies regarding {detail.toLowerCase()} are currently being documented by our team.
                                          </p>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </li>
                                );
                              })}
                            </ul>

                            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                              <h4 className="text-sm font-semibold text-[#0f172a] mb-2">Extended Research Notes</h4>
                              <p className="text-xs text-[#64748b] leading-relaxed">
                                This section features additional material for deep diving into {area.title.toLowerCase()}. There's plenty of space to add more text on our innovative methodologies.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Presentation & Videos */}
        <div id="research-presentation" className="scroll-mt-28">
          <h3 className="text-3xl font-bold text-[#0f172a] mb-12 border-l-4 border-[#06b6d4] pl-4">Presentation & Videos</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {presentations.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`aspect-video rounded-xl mb-4 relative overflow-hidden flex items-center justify-center ${item.thumbnail} group-hover:shadow-lg transition-all`}>
                  <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-md" />
                </div>
                <h4 className="font-semibold text-lg text-[#0f172a] mb-2 group-hover:text-[#06b6d4] transition-colors">{item.title}</h4>
                <p className="text-sm text-[#64748b]">{item.duration}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
