import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Linkedin, GraduationCap, Briefcase, User } from 'lucide-react';
import sandeepPhoto from '../../assets/sandeep_anand.png';
import {
  Dialog,
  DialogContent,
} from './ui/dialog';

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [selectedPerson, setSelectedPerson] = useState<any>(null);

  const professors = [
    {
      name: 'Sandeep Anand',
      role: 'Professor',
      title: 'Dept. of Electrical Engineering, Indian Institute of Technology Bombay',
      interests: 'Power Electronics, Electric Vehicles Drive Train and Chargers, Wide Bandgap Devices (GaN and SiC) based Power Converters, Circuits for Interfacing Alternate Sources (Solar PV, Battery, Fuel Cells), and Reliability of Power Electronic Circuits',
      image: sandeepPhoto,
      linkedin: 'https://www.linkedin.com/in/sandeep-anand-b82128b/',
      email: 'me.sandeepanand@gmail.com',
      about: `I am a faculty member in the Department of Electrical Engineering, IITB, India. Before this, I was at IITK, during 2013-2020. I was also a visiting scholar at WSU, Pullman, US, and Queen's University, Kingston, CA during Summer 2018 and Winter 2018, respectively. During 2012-13, I worked at Cosmic Circuits Pvt. Ltd., Bangalore on new product development for solar PV systems. During 2007-08, I worked at Emerson Network Power India (Now Vertiv Co), Mumbai on the development of digital controllers for medium power online UPS systems.

I received Ph.D. and B.Tech degrees in EE from IITB in 2013 and 2007, respectively.

I work in the area of Power Electronics, wherein my research interests are Electric Vehicles Drive Train and Chargers, Wide Bandgap Devices (GaN and SiC) based Power Converters, Circuits for Interfacing Alternate Sources (Solar PV, Battery, Fuel Cells), and Reliability of Power Electronic Circuits`
    },
  ];

  const handlePhotoClick = (person: any) => {
    if (person.about) {
      setSelectedPerson(person);
    }
  };



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
      name: 'Varun Lala',
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

  const PersonCard = ({ person, delay, onPhotoClick }: { person: any; delay: number; onPhotoClick?: (p: any) => void }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#06b6d4]/10 transition-all hover:border-[#06b6d4]/50 h-full flex flex-col">
        {/* Image */}
        <div
          className={`relative overflow-hidden aspect-square ${onPhotoClick && person.about ? 'cursor-pointer' : ''}`}
          onClick={() => onPhotoClick?.(person)}
        >
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Social Links */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <a
              href={`mailto:${person.email || 'emdlab@ee.iitb.ac.in'}`}
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-white/90 backdrop-blur-sm text-[#0f172a] py-2 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
            <a
              href={person.linkedin || '#'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 backdrop-blur-sm text-[#0f172a] p-2 rounded-lg hover:bg-white transition-colors flex items-center justify-center shrink-0 w-10"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-semibold text-[#0f172a] mb-1 group-hover:text-[#06b6d4] transition-colors">
            {person.name}
          </h3>
          <p className="text-sm text-[#06b6d4] mb-3">{person.role}</p>
          {person.title && (
            <p className="text-xs text-[#64748b] mb-3 leading-relaxed">{person.title}</p>
          )}
          <div className="mt-auto flex items-start gap-2 text-xs text-[#475569]">
            {person.type ? <GraduationCap className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#94a3b8]" /> : <Briefcase className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#94a3b8]" />}
            <p className="line-clamp-3">{person.interests}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
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
              <h3 className="text-3xl font-bold text-[#0f172a]">Professor</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professors.map((person, index) => (
                <PersonCard key={index} person={person} delay={index * 0.1} onPhotoClick={handlePhotoClick} />
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
                <PersonCard key={index} person={person} delay={0.4 + index * 0.05} onPhotoClick={handlePhotoClick} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedPerson} onOpenChange={(open: boolean) => !open && setSelectedPerson(null)}>
        <DialogContent className="max-w-2xl bg-white p-0 overflow-hidden border-none shadow-2xl">
          <div className="relative">
            <div className="h-32 bg-gradient-to-r from-[#0f172a] to-[#06b6d4]" />
            <div className="absolute top-16 left-8 flex items-end gap-6">
              <div className="w-32 h-32 rounded-2xl border-4 border-white overflow-hidden shadow-lg bg-white">
                <img
                  src={selectedPerson?.image}
                  alt={selectedPerson?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mb-2">
                <h3 className="text-2xl font-bold text-[#0f172a]">{selectedPerson?.name}</h3>
                <p className="text-[#06b6d4] font-medium">{selectedPerson?.role}</p>
              </div>
            </div>

            <div className="pt-20 px-8 pb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-[#64748b] uppercase tracking-wider mb-2">About</h4>
                  <div className="text-[#475569] leading-relaxed whitespace-pre-wrap">
                    {selectedPerson?.about}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                  <div>
                    <h4 className="text-sm font-bold text-[#64748b] uppercase tracking-wider mb-2">Title</h4>
                    <p className="text-sm text-[#475569]">{selectedPerson?.title}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#64748b] uppercase tracking-wider mb-2">Links</h4>
                    <div className="flex gap-4">
                      {selectedPerson?.linkedin && (
                        <a
                          href={selectedPerson.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#64748b] hover:text-[#06b6d4] transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {selectedPerson?.email && (
                        <a
                          href={`mailto:${selectedPerson.email}`}
                          className="text-[#64748b] hover:text-[#06b6d4] transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
