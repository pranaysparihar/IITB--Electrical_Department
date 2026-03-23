import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Linkedin, GraduationCap, Briefcase, User } from 'lucide-react';
import sandeepPhoto from '../../assets/sandeep_anand.png';
import {
  Dialog,
  DialogContent,
} from './ui/dialog';

// Moved out of TeamSection to prevent remounting on every render
const PersonCard = ({ person, delay, isInView, onPhotoClick }: { person: any; delay: number; isInView: boolean; onPhotoClick?: (p: any) => void }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#06b6d4]/10 transition-all hover:border-[#06b6d4]/50 h-full flex flex-col">
        {/* Image */}
        <div
          role={onPhotoClick && person.about ? "button" : undefined}
          tabIndex={onPhotoClick && person.about ? 0 : undefined}
          className={`relative overflow-hidden aspect-square ${onPhotoClick && person.about ? 'cursor-pointer' : ''}`}
          onClick={() => onPhotoClick?.(person)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onPhotoClick?.(person);
            }
          }}
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
              href={`mailto:${person.email || 'sa@ee.iitb.ac.in'}`}
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
            {person.type === 'PhD' || person.type === 'Masters' ? <GraduationCap className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#94a3b8]" /> : <Briefcase className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#94a3b8]" />}
            <p className="line-clamp-3">{person.interests}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

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
      email: 'sa@ee.iitb.ac.in',
      about: `I am a faculty member in the Department of Electrical Engineering, IITB, India. Before this, I was at IITK, during 2013-2020. I was also a visiting scholar at WSU, Pullman, US, and Queen's University, Kingston, CA during Summer 2018 and Winter 2018, respectively. During 2012-13, I worked at Cosmic Circuits Pvt. Ltd., Bangalore on new product development for solar PV systems. During 2007-08, I worked at Emerson Network Power India (Now Vertiv Co), Mumbai on the development of digital controllers for medium power online UPS systems.

I received Ph.D. and B.Tech degrees in EE from IITB in 2013 and 2007, respectively.

I work in the area of Power Electronics, wherein my research interests are Electric Vehicles Drive Train and Chargers, Wide Bandgap Devices (GaN and SiC) based Power Converters, Circuits for Interfacing Alternate Sources (Solar PV, Battery, Fuel Cells), and Reliability of Power Electronic Circuits`
    },
  ];

  const students = [
    {
      name: 'Nikhil Bhardwaj',
      role: 'PhD Student',
      type: 'PhD',
      interests: 'Reliability studies of SiC power devices, power electronics, and wide bandgap device characterization.',
      about: 'I am a Ph.D. student in the Department of Electrical Engineering at the Indian Institute of Technology Bombay (IIT Bombay), India. My research interests include reliability studies of SiC power devices. I completed my M.Tech in Electrical Engineering from the Indian Institute of Science (IISc), Bengaluru, India. Prior to that, I earned my B.Tech degree in Electrical Engineering from the Malaviya National Institute of Technology (MNIT) Jaipur, India. I have also carried out part of my research at The Ohio State University, Columbus, Ohio, USA, as an IITB–OSU Frontier Scholar.',
      email: 'nikhil.b255@gmail.com',
      linkedin: 'https://www.linkedin.com/in/nikhil-bhardwaj-93077123/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Akash Gangwar',
      role: 'PhD Student',
      type: 'PhD',
      interests: 'Wide bandgap (WBG) devices (GaN and SiC), solar photovoltaic (PV) inverters, and resonant converters.',
      about: 'I am a Ph.D. student in the Department of Electrical Engineering at the Indian Institute of Technology Bombay (IIT Bombay), specializing in Power Electronics. My research focuses on wide bandgap (WBG) devices, particularly GaN and SiC, with the goal of improving their application in solar photovoltaic (PV) inverters. I completed my M.Tech in Power Systems from the National Institute of Technology Tiruchirappalli (NIT Trichy), Tamil Nadu, in 2021, where my research project involved the design and analysis of a three-level LLC resonant converter integrated with an active front-end converter. Prior to that, I earned my B.Tech degree in Electrical and Electronics Engineering from ABES Engineering College, Ghaziabad, in 2018.',
      email: 'akashgangwar452@gmail.com',
      linkedin: 'https://www.linkedin.com/in/akashgangwar452/',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Saurabh Singh',
      role: 'PhD Student',
      type: 'PhD',
      interests: 'Control, condition monitoring, and reliability improvement of EV motor drives.',
      about: 'I am a PhD student in the Department of Electrical Engineering at the Indian Institute of Technology Bombay, Mumbai, India. My research interests include control, condition monitoring, and reliability improvement of EV motor drives. I earned my B.Tech. degree in Electrical Engineering from the Indian Institute of Technology Patna, India, in 2021.',
      email: 'saurabhsingh.ss1295@gmail.com',
      linkedin: 'https://www.linkedin.com/in/saurabh-singh-76183b237',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Varun Lal',
      role: 'PhD Student',
      type: 'PhD',
      interests: 'Electric machine design, electromagnetic design, axial flux wound field synchronous machines, and EV motors.',
      about: 'I am a Ph.D. student in Electrical Engineering at the Indian Institute of Technology Bombay (IIT Bombay). My research interests lie in electric machine design, with a focus on electromagnetic design aimed at improving power density and efficiency. I work on rare-earth-free and permanent magnet–free motors for electric vehicle (EV) applications, and I am currently involved in the design and development of axial flux wound field synchronous machines, exploring brushless excitation techniques to enhance their power density. I have also worked on BLDC motor design for three-wheelers, focusing on improving performance using low-cost passive cooling methods. I hold a postgraduate diploma in Electric Mobility from COEP (in collaboration with ARAI) and completed my B.Tech in Electrical and Electronics Engineering from VIT Chennai.',
      email: 'varunlal.iitb@gmail.com',
      linkedin: 'https://www.linkedin.com/in/varun-mukesh-lal/',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop'
    },
    {
      name: 'Priya Sinsinwar',
      role: 'PhD Student',
      type: 'PhD',
      interests: 'Medium-frequency transformers, isolated DC–DC converters, soft-switching estimation, and magnetic integration.',
      about: 'I am currently pursuing my Ph.D. in the Department of Electrical Engineering at the Indian Institute of Technology Bombay (IIT Bombay), India. My research interests include the design and optimization of medium-frequency transformers, magnetic component integration for DC–DC converters to enhance power density, and accurate soft-switching estimation methods for isolated DC–DC converters. I earned my B.Tech degree in Electrical and Electronics Engineering from Banasthali Vidyapith, India, in 2017. I have been honored with the Innovative Concept Award at the International Future Energy Challenge (IFEC) 2023 and received the Outstanding Teaching Assistant Award at IIT Bombay.',
      email: 'priyasinsinwar@iitb.ac.in',
      linkedin: 'https://www.linkedin.com/in/priya-sinsinwar-b7302391/',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Narendra Muley',
      role: 'M.Tech Student',
      type: 'Masters',
      interests: 'PMSM rotor temperature estimation, PCB reliability, onboard chargers for EVs, and motor controllers.',
      about: 'I am an M.Tech (Class of 2027) student at the Centre for Systems and Control, IIT Bombay, and currently working as a Project Research Assistant in the Department of Electrical Engineering. I am involved in an Anusandhan National Research Foundation (ANRF) funded project titled “Design and Development of a 20 kW SiC-based Traction Inverter." During my tenure as project staff, I have worked on PCB reliability, onboard chargers for electric vehicles, and motor controllers for two-wheeler EVs. I earned my B.Tech degree in Electrical Engineering from Walchand College of Engineering in 2022.',
      email: 'narendra18muley@gmail.com',
      linkedin: 'http://linkedin.com/in/narendra18',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'
    },
    {
      name: 'Mohd Shazeb',
      role: 'M.Tech Student',
      type: 'Masters',
      interests: 'Power Electronics, motor drive systems, and SiC-based high-power converter design.',
      about: 'I am an M.Tech student in Power Electronics at the Indian Institute of Technology Bombay (IIT Bombay). My research interests lie in Power Electronics, with a focus on motor drive systems and high-power converter design. I have worked on the design and development of a 5 kW motor controller and am currently involved in the design and development of a SiC-based 20 kW motor controller aimed at achieving high efficiency and high-performance operation. I completed my B.Tech in Electrical Engineering from Aligarh Muslim University in 2024.',
      email: 'shazeb@iitb.ac.in',
      linkedin: 'https://www.linkedin.com/in/mohd-shazeb-6706ba293',
      image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=400&fit=crop'
    },
    {
      name: 'Sagnik Banerjee',
      role: 'M.Tech Student',
      type: 'Masters',
      interests: 'Medium-voltage grid-connected converters, power electronics, and power systems.',
      about: 'I am currently a Master’s student in Power Electronics and Power Systems at IIT Bombay, focusing on the design and development of medium-voltage grid-connected converters. I completed my B.Tech in Electrical Engineering from Institute of Engineering and Management, Kolkata in 2022. Prior to joining IIT Bombay, I worked as a Lead Engineer in Testing and Commissioning at Tata Power Renewable Energy Limited.',
      email: '24m1114@iitb.ac.in',
      linkedin: 'https://www.linkedin.com/in/sagnik-banerjee-17646519a',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop'
    },
  ];

  const handlePhotoClick = (person: any) => {
    if (person.about) {
      setSelectedPerson(person);
    }
  };

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
                <PersonCard key={person.name} person={person} delay={index * 0.1} isInView={isInView} onPhotoClick={handlePhotoClick} />
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
                <PersonCard key={person.name} person={person} delay={0.4 + index * 0.05} isInView={isInView} onPhotoClick={handlePhotoClick} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedPerson} onOpenChange={(open: boolean) => !open && setSelectedPerson(null)}>
        <DialogContent 
            onCloseAutoFocus={(e) => e.preventDefault()}
            className="max-w-2xl bg-white p-0 overflow-hidden border-none shadow-2xl"
        >
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
                    <p className="text-sm text-[#475569]">{selectedPerson?.title || 'Research Team Member'}</p>
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
