import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, GraduationCap, Briefcase, User } from 'lucide-react';

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const professors = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Principal Investigator',
      title: 'Professor of Electrical Engineering',
      interests: 'Power Electronics, Renewable Energy',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Co-Principal Investigator',
      title: 'Associate Professor',
      interests: 'Electric Drives, Control Systems',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
    },
  ];

  const programManagers = [
    {
      name: 'Dr. Emily Watson',
      role: 'Senior Program Manager',
      interests: 'Project Management, Industry Collaboration',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    },
    {
      name: 'James Liu',
      role: 'Lab Manager',
      interests: 'Resource Allocation, Safety Compliance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
  ];

  const students = [
    {
      name: 'Maria Gonzalez',
      role: 'PhD Candidate',
      interests: 'Reinforcement Learning, Multi-agent Systems',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      type: 'PhD'
    },
    {
      name: 'David Thompson',
      role: 'PhD Candidate',
      interests: 'Computer Vision, 3D Reconstruction',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      type: 'PhD'
    },
    {
      name: 'Aisha Mohammed',
      role: 'PhD Candidate',
      interests: 'Federated Learning, Privacy-Preserving AI',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      type: 'PhD'
    },
    {
      name: 'Ryan Park',
      role: 'PhD Candidate',
      interests: 'Robotics, Motion Planning',
      image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop',
      type: 'PhD'
    },
    {
      name: 'Sophie Anderson',
      role: 'M.Tech Student',
      interests: 'Deep Learning, Generative Models',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      type: 'Masters'
    },
    {
      name: 'Liam Chen',
      role: 'M.Tech Student',
      interests: 'Big Data Analytics, Stream Processing',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      type: 'Masters'
    },
  ];

  const PersonCard = ({ person, delay }: { person: any; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#06b6d4]/10 transition-all hover:border-[#06b6d4]/50">
        {/* Image */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Social Links */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="flex-1 bg-white/90 backdrop-blur-sm text-[#0f172a] py-2 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </button>
            <button className="bg-white/90 backdrop-blur-sm text-[#0f172a] p-2 rounded-lg hover:bg-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="font-semibold text-[#0f172a] mb-1 group-hover:text-[#06b6d4] transition-colors">
            {person.name}
          </h3>
          <p className="text-sm text-[#06b6d4] mb-3">{person.role}</p>
          {person.title && (
            <p className="text-xs text-[#64748b] mb-3">{person.title}</p>
          )}
          <div className="flex items-start gap-2 text-xs text-[#475569]">
            {person.type ? <GraduationCap className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#94a3b8]" /> : <Briefcase className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#94a3b8]" />}
            <p>{person.interests}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section ref={ref} id="team" className="py-24 bg-gradient-to-b from-[#f8fafc] to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">Our Team</h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            A diverse group of faculty, staff, and students collaborating to solve complex problems
          </p>
        </motion.div>

        {/* Professors */}
        <div id="team-professors" className="mb-20 scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-2">
            <User className="text-[#06b6d4] w-6 h-6" />
            <h3 className="text-3xl font-bold text-[#0f172a]">Professors</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professors.map((person, index) => (
              <PersonCard key={index} person={person} delay={index * 0.1} />
            ))}
          </div>
        </div>

        {/* Program Managers */}
        <div id="team-managers" className="mb-20 scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-2">
            <Briefcase className="text-[#06b6d4] w-6 h-6" />
            <h3 className="text-3xl font-bold text-[#0f172a]">Program Managers</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programManagers.map((person, index) => (
              <PersonCard key={index} person={person} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </div>

        {/* Students */}
        <div id="team-students" className="scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-2">
            <GraduationCap className="text-[#06b6d4] w-6 h-6" />
            <h3 className="text-3xl font-bold text-[#0f172a]">Students</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((person, index) => (
              <PersonCard key={index} person={person} delay={0.4 + index * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
