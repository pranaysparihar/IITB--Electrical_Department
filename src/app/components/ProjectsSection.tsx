import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Tag, FileText, Calendar, X, Users, Download, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  status: 'ongoing' | 'completed';
  tags: string[];
  funding: string;
  year: string;
  paperLink: string;
  hasPaper: boolean;
  participants: string[];
}

// Mock PDF for demo
const MOCK_PDF_URL = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'High-Efficiency In-Wheel Motor for EVs',
      description: 'Development of a compact permanent magnet motor with integrated power electronics for direct-drive electric vehicles, achieving 96% peak efficiency.',
      status: 'ongoing',
      tags: ['PM Motor', 'EV', 'In-Wheel Drive'],
      funding: 'SERB',
      year: '2024-2026',
      paperLink: MOCK_PDF_URL,
      hasPaper: true,
      participants: ['Dr. Sarah Chen', 'Ryan Park', 'Liam Chen']
    },
    {
      title: 'SiC-Based Fast Charger for Electric Vehicles',
      description: 'Design and implementation of a 50kW bidirectional DC fast charger using silicon carbide MOSFETs with vehicle-to-grid (V2G) capability.',
      status: 'ongoing',
      tags: ['Power Electronics', 'SiC', 'Fast Charging'],
      funding: 'DST',
      year: '2023-2025',
      paperLink: MOCK_PDF_URL,
      hasPaper: true,
      participants: ['Dr. Michael Rodriguez', 'Aisha Mohammed']
    },
    {
      title: 'AI-Based Predictive Maintenance for Industrial Motors',
      description: 'Machine learning algorithms for real-time condition monitoring and predictive fault diagnosis in three-phase induction motors.',
      status: 'ongoing',
      tags: ['AI', 'Condition Monitoring', 'Induction Motor'],
      funding: 'Industry Sponsored',
      year: '2024-2026',
      paperLink: '',
      hasPaper: false,
      participants: ['Dr. Sarah Chen', 'Maria Gonzalez', 'Sophie Anderson']
    },
    {
      title: 'Modular Multi-Level Converter for HVDC',
      description: 'Development of advanced control strategies for MMC-based HVDC systems with enhanced fault ride-through capability.',
      status: 'ongoing',
      tags: ['Power Electronics', 'HVDC', 'Grid Integration'],
      funding: 'CPRI',
      year: '2023-2025',
      paperLink: MOCK_PDF_URL,
      hasPaper: true,
      participants: ['Dr. Michael Rodriguez', 'David Thompson']
    },
    {
      title: 'Switched Reluctance Motor for EV Traction',
      description: 'Design optimization and torque ripple minimization of 4-phase SRM for electric vehicle applications using finite element analysis.',
      status: 'completed',
      tags: ['SRM', 'Motor Design', 'FEA'],
      funding: 'ARAI',
      year: '2021-2023',
      paperLink: MOCK_PDF_URL,
      hasPaper: true,
      participants: ['Dr. Emily Watson', 'Ryan Park']
    },
    {
      title: 'Wireless Charging System for Electric Buses',
      description: 'Dynamic wireless power transfer system with 20kW charging capability for opportunity charging at bus stops.',
      status: 'completed',
      tags: ['Wireless Charging', 'WPT', 'E-Bus'],
      funding: 'MNRE',
      year: '2020-2023',
      paperLink: MOCK_PDF_URL,
      hasPaper: true,
      participants: ['Dr. Sarah Chen', 'James Liu']
    },
    {
      title: 'DFIG-Based Wind Energy System',
      description: 'Advanced control strategies for doubly-fed induction generators with grid fault ride-through and power quality enhancement.',
      status: 'ongoing',
      tags: ['DFIG', 'Wind Energy', 'Grid Integration'],
      funding: 'MNRE',
      year: '2023-2026',
      paperLink: MOCK_PDF_URL,
      hasPaper: true,
      participants: ['Dr. Michael Rodriguez', 'Liam Chen']
    },
    {
      title: 'Sensorless Control of PMSM Drives',
      description: 'Implementation of observer-based sensorless vector control for permanent magnet synchronous motors across wide speed range.',
      status: 'completed',
      tags: ['PMSM', 'Sensorless Control', 'FOC'],
      funding: 'CSIR',
      year: '2019-2022',
      paperLink: MOCK_PDF_URL,
      hasPaper: true,
      participants: ['Dr. Sarah Chen', 'Aisha Mohammed']
    },
    {
      title: 'Thermal Management in EV Battery Packs',
      description: 'Novel liquid cooling strategies and thermal modeling for lithium-ion battery packs in electric vehicles.',
      status: 'ongoing',
      tags: ['Battery', 'Thermal Management', 'EV'],
      funding: 'ISRO',
      year: '2024-2027',
      paperLink: '',
      hasPaper: false,
      participants: ['Dr. Emily Watson', 'David Thompson']
    },
    {
      title: 'Direct Drive Actuator for Robotics',
      description: 'High torque density brushless DC motor with integrated encoder for industrial robotic applications.',
      status: 'completed',
      tags: ['BLDC', 'Actuator', 'Robotics'],
      funding: 'Industry Sponsored',
      year: '2020-2022',
      paperLink: MOCK_PDF_URL,
      hasPaper: true,
      participants: ['Dr. Michael Rodriguez', 'Ryan Park']
    },
    {
      title: 'Matrix Converter for Renewable Energy',
      description: 'Direct AC-AC matrix converter topology with space vector modulation for wind and solar power conversion.',
      status: 'ongoing',
      tags: ['Matrix Converter', 'Renewable Energy', 'SVM'],
      funding: 'DST',
      year: '2023-2025',
      paperLink: '',
      hasPaper: false,
      participants: ['Dr. Sarah Chen', 'Sophie Anderson']
    },
    {
      title: 'Flywheel Energy Storage System',
      description: 'High-speed permanent magnet motor-generator for kinetic energy storage with magnetic bearing suspension.',
      status: 'completed',
      tags: ['Energy Storage', 'FESS', 'PM Motor'],
      funding: 'DRDO',
      year: '2018-2021',
      paperLink: MOCK_PDF_URL,
      hasPaper: true,
      participants: ['Dr. Michael Rodriguez', 'James Liu']
    },
  ];

  const currentProjects = projects.filter(p => p.status === 'ongoing');
  const closedProjects = projects.filter(p => p.status === 'completed');

  const ProjectCard = ({ project, index }: { project: Project, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      layout
      className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-[#06b6d4]/10 transition-all hover:border-[#06b6d4]/50 flex flex-col h-full"
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
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProject(project);
            }}
            className="flex items-center gap-1 text-xs text-[#06b6d4] hover:text-[#0891b2] transition-colors font-medium px-2 py-1 rounded hover:bg-[#06b6d4]/10"
          >
            <FileText className="w-3 h-3" />
            Paper
          </button>
        )}
      </div>

      <h3 className="text-lg font-semibold text-[#0f172a] mb-3 group-hover:text-[#06b6d4] transition-colors leading-snug">
        {project.title}
      </h3>

      <p className="text-sm text-[#475569] mb-4 leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
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

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-6xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a] line-clamp-1">{selectedProject.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-[#64748b] mt-1">
                      <FileText className="w-4 h-4" />
                      Project Paper & Details
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-gray-500 hover:text-[#0f172a] hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col lg:flex-row h-full overflow-hidden">

                  {/* Main Content (PDF View) */}
                  <div className="flex-1 bg-gray-100 relative h-full min-h-[400px]">
                    {selectedProject.paperLink ? (
                      <div className="w-full h-full flex flex-col">
                        {/* Toolbar for external link */}
                        <div className="bg-white border-b border-gray-200 px-4 py-2 flex justify-end">
                          <a
                            href={selectedProject.paperLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-[#06b6d4] hover:text-[#0891b2] flex items-center gap-1"
                          >
                            Open PDF in new tab <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        <iframe
                          src={selectedProject.paperLink}
                          className="w-full flex-1 border-none"
                          title="Project Paper"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <div className="text-center">
                          <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p>No paper available for preview</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sidebar Info */}
                  <div className="w-full lg:w-96 bg-white border-l border-gray-200 overflow-y-auto p-6">

                    <div className="mb-8">
                      <div className="flex items-center gap-2 text-[#0f172a] font-bold text-lg mb-4 border-b border-gray-100 pb-2">
                        <Users className="w-5 h-5 text-[#06b6d4]" />
                        <h4>Participants</h4>
                      </div>
                      <div className="space-y-3">
                        {selectedProject.participants.map((person, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-[#06b6d4]/10 flex items-center justify-center text-[#06b6d4] font-bold text-sm">
                              {person.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="font-medium text-[#475569]">{person}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-bold text-[#0f172a] mb-4">Project Overview</h4>
                      <p className="text-[#475569] text-sm leading-relaxed mb-4">
                        {selectedProject.description}
                      </p>

                      <div className="space-y-4 text-sm">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-500">Funding Agency</span>
                          <span className="font-semibold text-[#0f172a]">{selectedProject.funding}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-500">Duration</span>
                          <span className="font-semibold text-[#0f172a]">{selectedProject.year}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-500">Status</span>
                          <span className={`font-semibold capitalize ${selectedProject.status === 'ongoing' ? 'text-green-600' : 'text-gray-600'}`}>
                            {selectedProject.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#0f172a] mb-3">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-[#f8fafc] text-[#64748b] text-xs rounded border border-gray-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
