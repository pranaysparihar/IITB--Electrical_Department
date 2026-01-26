import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Zap, Car, Battery, Cpu, Wind, Gauge, ChevronRight, ExternalLink } from 'lucide-react';

export function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const researchAreas = [
    {
      icon: Car,
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
      papers: 2,
    },
    {
      icon: Zap,
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
      papers: 3,
    },
    {
      icon: Battery,
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
      papers: 4,
    },
    {
      icon: Cpu,
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
      papers: 2,
    },
    {
      icon: Wind,
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
      papers: 3,
    },
    {
      icon: Gauge,
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
      papers: 1,
    },
  ];

  return (
    <section ref={ref} id="research" className="py-24 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Research Areas
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Pioneering innovations in electric machines, power electronics, and motor control systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#06b6d4]/10 cursor-pointer ${
                  expandedCard === index ? 'ring-2 ring-[#06b6d4]' : ''
                }`}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                {/* Card Header */}
                <div className="p-6">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} mb-4 transform group-hover:scale-110 transition-transform`}
                  >
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0f172a] mb-2 group-hover:text-[#06b6d4] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#06b6d4] mb-3">{area.subtitle}</p>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    {area.description}
                  </p>
                  
                  {/* Paper count badge */}
                  {area.papers > 0 && (
                    <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#475569] bg-[#f8fafc] px-3 py-1.5 rounded-full">
                      <ExternalLink className="w-3 h-3" />
                      <span>{area.papers} recent publication{area.papers > 1 ? 's' : ''}</span>
                    </div>
                  )}
                </div>

                {/* Expandable Details */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedCard === index ? 'auto' : 0,
                    opacity: expandedCard === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <h4 className="text-sm font-semibold text-[#0f172a] mb-3">
                      Key Focus Areas:
                    </h4>
                    <ul className="space-y-2">
                      {area.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-[#475569]"
                        >
                          <ChevronRight className="w-4 h-4 text-[#06b6d4] flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Expand Indicator */}
                <div className="px-6 pb-4">
                  <button className="text-sm text-[#06b6d4] hover:text-[#0891b2] flex items-center gap-1 transition-colors">
                    {expandedCard === index ? 'Show less' : 'Learn more'}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        expandedCard === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
