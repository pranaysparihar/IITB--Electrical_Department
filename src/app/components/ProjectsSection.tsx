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
    // PI PROJECTS - ACTIVE
    {
      title: 'E-RIDES (e-node for EVs at IITB)',
      description: 'Establishment of a PEMD theme e-node for EVs at IITB under ANRF. Leading IITB team and 3 work packages.',
      status: 'ongoing',
      tags: ['EV', 'PEMD', 'Principal Investigator'],
      funding: 'ANRF',
      year: '2025-2028',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Kishore Chatterjee (Overall Lead PI)', 'Prof. Sandeep Anand (Lead PI at IITB)']
    },
    {
      title: 'Research on WBG Devices and Circuits',
      description: 'Enhancing inverter efficiency and performance using Wide Bandgap devices and circuits.',
      status: 'ongoing',
      tags: ['WBG', 'Inverter', 'Principal Investigator'],
      funding: 'Hyundai Motor Company (HMC)',
      year: '2025-2026',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Wide Bandgap Power Electronics for EVs',
      description: 'Development of robust and high density SiC based motor controller for electric cars.',
      status: 'ongoing',
      tags: ['SiC', 'EV', 'Motor Controller', 'Principal Investigator'],
      funding: 'Mr. Lalit Keshre',
      year: '2024-2025',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Young Faculty Research Fellowship (YFRF) Grant',
      description: 'Fellowship grant under Visvesvaraya Ph.D Scheme for Electronics & IT (Phase-2).',
      status: 'ongoing',
      tags: ['Fellowship', 'MeitY', 'Principal Investigator'],
      funding: 'MeitY',
      year: '2025-2029',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'PMSM Controllers for Electric 2/3 Wheelers',
      description: 'Design and development of efficient PMSM controllers specifically for light electric vehicles.',
      status: 'ongoing',
      tags: ['PMSM', 'EV', 'Motor Control', 'Principal Investigator'],
      funding: 'TRC Deeptech, IIT Bombay',
      year: '2024-2025',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },

    // PI PROJECTS - COMPLETED
    {
      title: 'GaN based Inverter / Motor Controller',
      description: 'Design and implementation of high-performance GaN based motor controllers.',
      status: 'completed',
      tags: ['GaN', 'Inverter', 'Principal Investigator'],
      funding: 'Class of 73 Legacy Project',
      year: '2024-2025',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Study of DC-link Capacitor Reduction',
      description: 'Research into techniques for reducing the size and cost of DC-link capacitors in power converters.',
      status: 'completed',
      tags: ['Capacitor', 'Power Electronics', 'Principal Investigator'],
      funding: 'Cummins Technologies India Pvt Ltd',
      year: '2024',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Establishing the C’73 EV Powertrain Laboratory',
      description: 'Infrastructure development and establishment of a dedicated EV powertrain research facility.',
      status: 'completed',
      tags: ['Lab Setup', 'EV', 'Principal Investigator'],
      funding: 'Class of 73 Legacy Project',
      year: '2023-2024',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Reference Design and Prototype for EV Charger',
      description: 'Development of an efficient reference design and prototype for electric vehicle charging stations.',
      status: 'completed',
      tags: ['EV Charger', 'Infineon', 'Principal Investigator'],
      funding: 'Cypress Semiconductor / Infineon',
      year: '2022-2024',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'DC-DC Converter for EV Charging Application',
      description: 'Specialized DC-DC converter design optimized for fast charging environments.',
      status: 'completed',
      tags: ['DC-DC', 'EV Charging', 'Principal Investigator'],
      funding: 'Log9 Materials Scientific Pvt Ltd',
      year: '2022-2023',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Integration of On-board Charger and APM',
      description: 'Integrating onboard charger and auxiliary power module for light electric vehicles.',
      status: 'completed',
      tags: ['Integrated Charger', 'EV', 'Principal Investigator'],
      funding: 'Varroc Engineering Limited',
      year: '2022-2023',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Power Drive Train for Heavy Vehicles',
      description: 'Simulation, reliability study, and power density optimization for heavy vehicle drivetrains.',
      status: 'completed',
      tags: ['Heavy Vehicles', 'Drive Train', 'Principal Investigator'],
      funding: 'Cummins Technologies India Pvt Ltd',
      year: '2022-2023',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'E-mode GaN HEMT based Solar Inverter',
      description: 'Development of a single phase solar inverter with smart gate driver using GaN HEMT.',
      status: 'completed',
      tags: ['GaN', 'Solar Inverter', 'Principal Investigator'],
      funding: 'DST-SERD',
      year: '2021-2024',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'FOC for Sinusoidal EMF PM Hub Motor',
      description: 'Implementation of Field Oriented Control for permanent magnet hub motors with sinusoidal EMF.',
      status: 'completed',
      tags: ['FOC', 'Hub Motor', 'Principal Investigator'],
      funding: 'India Nippon Electricals Limited',
      year: '2022-2023',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Digital Current Controlled Source',
      description: 'Design and development of high-precision digital current controlled sources.',
      status: 'completed',
      tags: ['Digital Control', 'Principal Investigator'],
      funding: 'VAS Spectrometers PVT. LTD.',
      year: '2021-2022',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Enabling GaN-based Power Converters',
      description: 'Facility setup and research plan implementation for advanced GaN power electronic converters.',
      status: 'completed',
      tags: ['GaN', 'Facility Setup', 'Principal Investigator'],
      funding: 'IIT Bombay',
      year: '2020-2023',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Performance Enhancement using GaN-HEMT',
      description: 'Research into improving power electronic circuit performance through wide bandgap devices.',
      status: 'completed',
      tags: ['GaN-HEMT', 'Power Electronics', 'Principal Investigator'],
      funding: 'SERB, Govt. of India',
      year: '2019-2022',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Transformer Inrush Current Minimization Device',
      description: 'Development of a device for minimizing inrush current during transformer switching.',
      status: 'completed',
      tags: ['Transformer', 'Inrush Current', 'Principal Investigator'],
      funding: 'IUSSTF - IIGP 2.0',
      year: '2019-2020',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Smart Solar Inverter for Grid Control',
      description: 'Solar inverter design with droop characteristics and integrated DC supply for primary frequency control.',
      status: 'completed',
      tags: ['Smart Inverter', 'Grid Control', 'Principal Investigator'],
      funding: 'NTPC Limited',
      year: '2016-2019',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Harmonic Compensation using Solar PV Inverters',
      description: 'Using distributed solar PV inverters for power quality enhancement and harmonic compensation.',
      status: 'completed',
      tags: ['Harmonics', 'Solar PV', 'Principal Investigator'],
      funding: 'DST-CERI',
      year: '2016-2019',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Smart Converters for Renewable Integration',
      description: 'Research grant for developing smart power electronic converters for sustainable energy integration.',
      status: 'completed',
      tags: ['Renewable', 'Power Converters', 'Principal Investigator'],
      funding: 'DST INSPIRE Fellowship',
      year: '2013-2018',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Integrated DC-DC Solar PV Inverter',
      description: 'Grid connected transformerless photovoltaic inverter with integrated DC-DC converter stages.',
      status: 'completed',
      tags: ['Photovoltaic', 'DC-DC', 'Principal Investigator'],
      funding: 'IUSSTF - IIGP 2.0',
      year: '2017-2018',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Over Voltage and Inrush Current Study',
      description: 'Study to minimize transients during connection of grid-tied solar PV plants.',
      status: 'completed',
      tags: ['Grid Tied', 'Solar PV', 'Principal Investigator'],
      funding: 'NTPC Limited',
      year: '2016-2019',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'GaN based Compact DC-DC Converter',
      description: 'Design and development of high-density compact converters for space applications.',
      status: 'completed',
      tags: ['GaN', 'Space Tech', 'Principal Investigator'],
      funding: 'ISRO-STC',
      year: '2016-2018',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Reliability Study of Battery Charger Circuit',
      description: 'Analyzing and improving the reliability of specialized battery charger designs.',
      status: 'completed',
      tags: ['Battery Charger', 'Reliability', 'Principal Investigator'],
      funding: 'ALIMCO',
      year: '2017',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'High Reliability DC-DC Converter',
      description: 'Integrating batteries with low voltage DC systems through high reliability converter topologies.',
      status: 'completed',
      tags: ['DC-DC', 'Reliability', 'Principal Investigator'],
      funding: 'SERB FAST Track Scheme',
      year: '2014-2017',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Harmonic Compensation using Static Regulator',
      description: 'Addressing voltage and current harmonics in power systems using static voltage regulators.',
      status: 'completed',
      tags: ['Harmonics', 'SVR', 'Principal Investigator'],
      funding: 'Emerson Network Power',
      year: '2015-2016',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Solar PV Interfacing with LVDC System',
      description: 'Development of power electronic converters for interfacing solar photovoltaics with low voltage DC networks.',
      status: 'completed',
      tags: ['Solar PV', 'LVDC', 'Principal Investigator'],
      funding: 'IIT Kanpur',
      year: '2013-2015',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },
    {
      title: 'Static Voltage Regulator Laboratory Prototype',
      description: 'Development of scaled-down prototypes for testing advanced static voltage regulation strategies.',
      status: 'completed',
      tags: ['SVR', 'Prototype', 'Principal Investigator'],
      funding: 'Emerson Network Power',
      year: '2014-2015',
      paperLink: '',
      hasPaper: false,
      participants: ['Prof. Sandeep Anand']
    },

    // CO-I PROJECTS - ACTIVE
    {
      title: 'NCPRE Phase-3',
      description: 'National Centre for Photovoltaic Research and Education. Role: Group lead for power electronics and grid integration.',
      status: 'ongoing',
      tags: ['Photovoltaic', 'Grid Integration', 'Co-Investigator'],
      funding: 'MNRE, Govt. of India',
      year: '2023-2027',
      paperLink: '',
      hasPaper: false,
      participants: ['Dr. B.G. Fernandes (PI)', 'Dr. S. Doolla (PI)', 'Prof. Sandeep Anand (Co-I)']
    },
    {
      title: 'FIST Grant - WBG based Converters',
      description: 'Establishment and research in WBG based Power Electronics. Role: Lab Establishment and Research.',
      status: 'ongoing',
      tags: ['FIST', 'WBG', 'Co-Investigator'],
      funding: 'DST, Govt. of India',
      year: '2022-2027',
      paperLink: '',
      hasPaper: false,
      participants: ['Head of Department (PI)', 'Prof. Sandeep Anand (Co-I)']
    },
    {
      title: 'SUSTENANCE Project',
      description: 'Sustainable Energy system for Achieving Novel Carbon Neutral Energy communities. Role: EV energy vertical, e-rickshaw.',
      status: 'ongoing',
      tags: ['Sustainability', 'EV', 'Co-Investigator'],
      funding: 'DST, Govt. of India',
      year: '2021-2025',
      paperLink: '',
      hasPaper: false,
      participants: ['Dr. K. Chatterjee (PI)', 'Dr. Z. Rather (PI)', 'Prof. Sandeep Anand (Co-I)']
    },

    // CO-I PROJECTS - COMPLETED
    {
      title: 'Charging Control Of PMSM (ISG)',
      description: 'Charging control of PMSM with FOC. Role: Power converter for Integrated Starter Generator (ISG).',
      status: 'completed',
      tags: ['PMSM', 'ISG', 'Co-Investigator'],
      funding: 'SEDEMAC Mechatronics',
      year: '2020-2021',
      paperLink: '',
      hasPaper: false,
      participants: ['Dr. Anil Kulkarni (PI)', 'Prof. Sandeep Anand (Co-I)']
    },
    {
      title: 'Advanced Control of Intelligent DC Microgrids',
      description: 'Research into design of power sharing controllers for DC microgrids.',
      status: 'completed',
      tags: ['DC Microgrid', 'Power Sharing', 'Co-Investigator'],
      funding: 'IMPRINT-2 (DST/SERB)',
      year: '2019-2022',
      paperLink: '',
      hasPaper: false,
      participants: ['Dr. S. R. Sahoo (PI)', 'Prof. Sandeep Anand (Co-I)']
    },
    {
      title: 'Stability of Networked Microgrids',
      description: 'Analysis, protection, and coordinated control of networked microgrids. Role: Hybrid Solar Inverter.',
      status: 'completed',
      tags: ['Microgrids', 'Stability', 'Co-Investigator'],
      funding: 'DST (Mission Innovation)',
      year: '2018-2021',
      paperLink: '',
      hasPaper: false,
      participants: ['Dr. Saikat Chakrabarti (PI)', 'Prof. Sandeep Anand (Co-I)']
    },
    {
      title: 'UI-ASSIST: US-India Smart Distribution',
      description: 'US-India collaborative for smart distribution system with storage. Role: Secondary controller, Solar Inverters.',
      status: 'completed',
      tags: ['UI-ASSIST', 'Smart Grid', 'Co-Investigator'],
      funding: 'IUSSTF',
      year: '2017-2022',
      paperLink: '',
      hasPaper: false,
      participants: ['Dr. S. C. Srivastava (PI)', 'Prof. Sandeep Anand (Co-I)']
    },
    {
      title: 'INDO-UK Clean Energy Centre',
      description: 'Role: Prototype development and control of DC Microgrids.',
      status: 'completed',
      tags: ['Clean Energy', 'DC Microgrids', 'Co-Investigator'],
      funding: 'DST, Govt. of India',
      year: '2017-2021',
      paperLink: '',
      hasPaper: false,
      participants: ['Dr. B. G. Fernandes (PI)', 'Prof. Sandeep Anand (Co-I)']
    },
    {
      title: 'GaN HEMT CIRCUIT DESIGN (IMPRINT)',
      description: 'GaN HEMT based circuit design for defense and space applications. Role: Use of GaN for power converters.',
      status: 'completed',
      tags: ['GaN HEMT', 'IMPRINT', 'Co-Investigator'],
      funding: 'IMPRINT, Govt. of India',
      year: '2017-2020',
      paperLink: '',
      hasPaper: false,
      participants: ['Dr. Yogesh Chauhan (PI)', 'Prof. Sandeep Anand (Co-I)']
    },
    {
      title: 'Cooperative Control for DC Microgrid',
      description: 'Research into controller design for DC Microgrids.',
      status: 'completed',
      tags: ['DC Microgrid', 'Cooperative Control', 'Co-Investigator'],
      funding: 'SERB, Govt. of India',
      year: '2015-2017',
      paperLink: '',
      hasPaper: false,
      participants: ['Dr. S. R. Sahoo (PI)', 'Prof. Sandeep Anand (Co-I)']
    },
    {
      title: 'Smart City R&D Platform',
      description: 'Development of platform for smart city projects. Role: Design of solar inverter.',
      status: 'completed',
      tags: ['Smart City', 'Solar Inverter', 'Co-Investigator'],
      funding: 'Ministry of Power (MOP)',
      year: '2014-2016',
      paperLink: '',
      hasPaper: false,
      participants: ['Dr. Saikat Chakrabarti (PI)', 'Prof. Sandeep Anand (Co-I)']
    }
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

        {/* Completed Projects */}
        <div id="projects-closed" className="scroll-mt-28">
          <h3 className="text-3xl font-bold text-[#0f172a] mb-8 border-l-4 border-[#06b6d4] pl-4">Completed Projects</h3>
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
