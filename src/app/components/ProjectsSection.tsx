import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Tag, FileText, Calendar } from 'lucide-react';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'High-Efficiency In-Wheel Motor for EVs',
      description: 'Development of a compact permanent magnet motor with integrated power electronics for direct-drive electric vehicles, achieving 96% peak efficiency.',
      status: 'ongoing',
      tags: ['PM Motor', 'EV', 'In-Wheel Drive'],
      funding: 'SERB',
      year: '2024-2026',
      paperLink: '#',
      hasPaper: true,
    },
    {
      title: 'SiC-Based Fast Charger for Electric Vehicles',
      description: 'Design and implementation of a 50kW bidirectional DC fast charger using silicon carbide MOSFETs with vehicle-to-grid (V2G) capability.',
      status: 'ongoing',
      tags: ['Power Electronics', 'SiC', 'Fast Charging'],
      funding: 'DST',
      year: '2023-2025',
      paperLink: '#',
      hasPaper: true,
    },
    {
      title: 'AI-Based Predictive Maintenance for Industrial Motors',
      description: 'Machine learning algorithms for real-time condition monitoring and predictive fault diagnosis in three-phase induction motors.',
      status: 'ongoing',
      tags: ['AI', 'Condition Monitoring', 'Induction Motor'],
      funding: 'Industry Sponsored',
      year: '2024-2026',
      paperLink: '#',
      hasPaper: false,
    },
    {
      title: 'Modular Multi-Level Converter for HVDC',
      description: 'Development of advanced control strategies for MMC-based HVDC systems with enhanced fault ride-through capability.',
      status: 'ongoing',
      tags: ['Power Electronics', 'HVDC', 'Grid Integration'],
      funding: 'CPRI',
      year: '2023-2025',
      paperLink: '#',
      hasPaper: true,
    },
    {
      title: 'Switched Reluctance Motor for EV Traction',
      description: 'Design optimization and torque ripple minimization of 4-phase SRM for electric vehicle applications using finite element analysis.',
      status: 'completed',
      tags: ['SRM', 'Motor Design', 'FEA'],
      funding: 'ARAI',
      year: '2021-2023',
      paperLink: '#',
      hasPaper: true,
    },
    {
      title: 'Wireless Charging System for Electric Buses',
      description: 'Dynamic wireless power transfer system with 20kW charging capability for opportunity charging at bus stops.',
      status: 'completed',
      tags: ['Wireless Charging', 'WPT', 'E-Bus'],
      funding: 'MNRE',
      year: '2020-2023',
      paperLink: '#',
      hasPaper: true,
    },
    {
      title: 'DFIG-Based Wind Energy System',
      description: 'Advanced control strategies for doubly-fed induction generators with grid fault ride-through and power quality enhancement.',
      status: 'ongoing',
      tags: ['DFIG', 'Wind Energy', 'Grid Integration'],
      funding: 'MNRE',
      year: '2023-2026',
      paperLink: '#',
      hasPaper: true,
    },
    {
      title: 'Sensorless Control of PMSM Drives',
      description: 'Implementation of observer-based sensorless vector control for permanent magnet synchronous motors across wide speed range.',
      status: 'completed',
      tags: ['PMSM', 'Sensorless Control', 'FOC'],
      funding: 'CSIR',
      year: '2019-2022',
      paperLink: '#',
      hasPaper: true,
    },
    {
      title: 'Thermal Management in EV Battery Packs',
      description: 'Novel liquid cooling strategies and thermal modeling for lithium-ion battery packs in electric vehicles.',
      status: 'ongoing',
      tags: ['Battery', 'Thermal Management', 'EV'],
      funding: 'ISRO',
      year: '2024-2027',
      paperLink: '#',
      hasPaper: false,
    },
    {
      title: 'Direct Drive Actuator for Robotics',
      description: 'High torque density brushless DC motor with integrated encoder for industrial robotic applications.',
      status: 'completed',
      tags: ['BLDC', 'Actuator', 'Robotics'],
      funding: 'Industry Sponsored',
      year: '2020-2022',
      paperLink: '#',
      hasPaper: true,
    },
    {
      title: 'Matrix Converter for Renewable Energy',
      description: 'Direct AC-AC matrix converter topology with space vector modulation for wind and solar power conversion.',
      status: 'ongoing',
      tags: ['Matrix Converter', 'Renewable Energy', 'SVM'],
      funding: 'DST',
      year: '2023-2025',
      paperLink: '#',
      hasPaper: false,
    },
    {
      title: 'Flywheel Energy Storage System',
      description: 'High-speed permanent magnet motor-generator for kinetic energy storage with magnetic bearing suspension.',
      status: 'completed',
      tags: ['Energy Storage', 'FESS', 'PM Motor'],
      funding: 'DRDO',
      year: '2018-2021',
      paperLink: '#',
      hasPaper: true,
    },
  ];

  const currentProjects = projects.filter(p => p.status === 'ongoing');
  const closedProjects = projects.filter(p => p.status === 'completed');

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      layout
      className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-[#06b6d4]/10 transition-all hover:border-[#06b6d4]/50"
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${project.status === 'ongoing'
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-gray-700'
            }`}
        >
          {project.status === 'ongoing' ? '● Ongoing' : '✓ Completed'}
        </span>
        {project.hasPaper && (
          <a
            href={project.paperLink}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-xs text-[#06b6d4] hover:text-[#0891b2] transition-colors"
          >
            <FileText className="w-3 h-3" />
            Paper
          </a>
        )}
      </div>

      <h3 className="text-lg font-semibold text-[#0f172a] mb-3 group-hover:text-[#06b6d4] transition-colors leading-snug">
        {project.title}
      </h3>

      <p className="text-sm text-[#475569] mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string, idx: number) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1 px-2 py-1 bg-[#f8fafc] text-[#475569] rounded text-xs"
          >
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-[#64748b]">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {project.year}
        </div>
        <div className="font-medium text-[#06b6d4]">{project.funding}</div>
      </div>
    </motion.div>
  );

  return (
    <section ref={ref} id="projects" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Projects
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto mb-8">
            Funded research projects driving innovation in electric machines and power systems
          </p>
        </motion.div>

        {/* Current Projects */}
        <div id="projects-current" className="mb-20 scroll-mt-28">
          <h3 className="text-3xl font-bold text-[#0f172a] mb-8 border-l-4 border-[#06b6d4] pl-4">Current Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Closed Projects */}
        <div id="projects-closed" className="scroll-mt-28">
          <h3 className="text-3xl font-bold text-[#0f172a] mb-8 border-l-4 border-[#06b6d4] pl-4">Closed Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {closedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
