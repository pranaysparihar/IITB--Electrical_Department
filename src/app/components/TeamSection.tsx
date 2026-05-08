import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Linkedin, GraduationCap, Briefcase, User } from 'lucide-react';
import sandeepPhoto from '../../assets/sandeep_anand.png';
import nikhilphoto from '../../assets/Team/Nikhil_Bhardwaj.jpg';
import akashphoto from '../../assets/Team/Akash_Gangwar.jpeg';
import saurabhphoto from '../../assets/Team/Saurabh_Singh.png';
import narendraphoto from '../../assets/Team/Narendra.jpeg';
import shazebphoto from '../../assets/Team/Mohd_Shazeb.png';
import sagnikphoto from '../../assets/Team/Sagnik_Banerjee.jpeg';
import varunphoto from '../../assets/Team/Varun_Lal.png';
import priyaphoto from '../../assets/Team/Priya_Sinsinwar.jpeg';
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

const graduatedStudents = {
  postdocs: [
    { name: 'Dr. Abhinav Arya', topic: 'Reliability of power electronic, EV chargers, EV motor drive', degree: 'Institute Post-Doc', year: 'Nov 2023 – July 2024', placement: 'IIT-BBS (Assistant Professor)' },
    { name: 'Dr. Martin Cheerangal', topic: 'Motor Drive, EV Powertrain', degree: 'Project Research Scientist', year: 'Sep 2023 – Feb 2024', placement: 'Khalifa University (post-doc)' },
  ],
  phd: [
    { name: 'Waseem Ahmad', topic: "Health Monitoring of AEC's for Power Electronic Applications", degree: 'Ph.D.', year: '2018', placement: 'NUS (Post-Doc), Assistant Prof. at NIT Surathkal' },
    { name: 'Shirazul Islam', topic: 'Stability Analysis and Control of AC and DC Microgrids with Constant Power Loads', degree: 'Ph.D.', year: '2021', coAdvisor: 'Dr. S. R. Sahoo', placement: 'Research Associate at Qatar University' },
    { name: 'Anubrata Das', topic: 'Inverter Based Resource: Control Towards Grid Support Functionalities and Improved Reliability', degree: 'Ph.D.', year: '2022', coAdvisor: 'Dr. S. R. Sahoo', placement: 'Post-Doc at University of Tennessee at Knoxville, USA' },
    { name: 'Shyam AB', topic: 'Analyzing The Effect Of Data Exchange Among Secondary Controllers In Dc Microgrid', degree: 'Ph.D.', year: 'June 2023', coAdvisor: 'Dr. S. R. Sahoo', placement: 'Assistant Prof. at IIT (ISM) Dhanbad' },
    { name: 'Abhinav Arya', topic: 'IGBT Reliability And Junction Temperature Estimation In Power Electronic Systems', degree: 'Ph.D.', year: 'June 2023', coAdvisor: 'Dr. Amit Verma', placement: 'Post-Doc at IIT Bombay' },
    { name: 'Arnab Sarkar', topic: 'Low-Power DC–DC Converters: Improving Power Density Using GaN Devices', degree: 'Ph.D.', year: 'April 2024', placement: 'Jaguar Land Rover (Automotive)' },
    { name: 'Nachiketa Deshmukh', topic: 'Towards high-performance alternatives for bulk electrolytic capacitor banks in single phase power converters', degree: 'Ph.D.', year: 'May 2025', coAdvisor: 'Dr. S. R. Sahoo', placement: 'Varroc (Automotive Component Manufacturer)' },
    { name: 'Abhishek Chanekar', topic: 'Reliability of power electronic circuits (tentative)', degree: 'Ph.D.', year: 'Thesis Submitted', placement: 'SEDEMAC, Pune' },
    { name: 'Aditya Aman', topic: 'Reliability and Protection of SiC MOSFETs (tentative)', degree: 'Ph.D.', year: 'Ongoing', coAdvisor: 'Dr. Anant Agarwal, OSU', placement: 'Tesla, Germany' },
  ],
  masters: [
    { name: 'Shatakshi Sharma', topic: 'Output Power Leveling of DFIG using Battery Energy Storage System', degree: 'M.Tech', year: '2014', coAdvisor: 'Dr. S. N. Singh', placement: 'PhD-IITD' },
    { name: 'Amit Meena', topic: 'Design And Development of Single Phase Dynamic Voltage Restorer', degree: 'M.Tech', year: '2015' },
    { name: 'Shyam Agarwal', topic: 'Power Sharing in Low Voltage DC Microgrid Using Low Speed Communication', degree: 'M.Tech', year: '2015', placement: 'CPRI' },
    { name: 'Abhinav Arya', topic: 'Online Health Monitoring of Aluminium Electrolytic Capacitors For Single Phase Grid Connected PV System', degree: 'M.Tech', year: '2015', placement: 'PhD-IITK' },
    { name: 'Arun Singh', topic: 'Online condition monitoring of discrete IGBT for Solar PV Inverter', degree: 'BT-MT', year: '2016', placement: 'Texas Instruments' },
    { name: 'Saurav Roy Chaudhary', topic: 'Dynamic Voltage Restorer With Adaptive Active Filtering', degree: 'M.Tech', year: '2016', placement: 'ABB' },
    { name: 'Soumya Thomas', topic: 'Cooperative Control for Low Voltage DC Microgrid', degree: 'M.Tech', year: '2016', coAdvisor: 'Dr. S. R. Sahoo', placement: 'Texas Instruments' },
    { name: 'Maguluri Avinash', topic: 'High Efficiency Five Level Single-Phase Grid-Connected Transformer-Less Photovoltaic Inverter', degree: 'M.Tech', year: '2016', placement: 'Valeo' },
    { name: 'Nikunj Agarwal', topic: 'Online Technique for Health Monitoring of Capacitor in Single Phase Solar Inverter', degree: 'M.Tech', year: '2016', placement: 'ONGC' },
    { name: 'Rajender Nune', topic: 'Design and Development of GaN HEMT based DC-DC Converter', degree: 'M.Tech', year: '2016', coAdvisor: 'Dr. Yogesh Chauhan', placement: 'Qualcomm' },
    { name: 'Sathish Kumar', topic: 'Estimation and Utilization of Aggregate Harmonic Load Model', degree: 'MS(R)', year: '2017', coAdvisor: 'Dr. S. Chakrabarti', placement: 'Tata Motors' },
    { name: 'Anoop Ingle', topic: 'Quality Index Based Controller and Transient Analysis for DC Microgrid', degree: 'M.Tech', year: '2017', coAdvisor: 'Dr. S. R. Sahoo', placement: 'Intel' },
    { name: 'P Nandha Kumar', topic: 'Comparative study of dc-link capacitor banks using physics-of-failure approach', degree: 'BT-MT', year: '2017', placement: 'ISRO' },
    { name: 'Pratik Deshmukh', topic: 'On-state Voltage Measurement Circuit for Online Health Monitoring of Power Semiconductor Devices', degree: 'M.Tech', year: '2018', placement: 'Intel' },
    { name: 'Ankit Shukla', topic: 'Method to Improve Harmonic Current Sharing and Reduce Voltage Distortion in AC Microgrid', degree: 'M.Tech', year: '2018', placement: 'Intel' },
    { name: 'Shouvik Paik', topic: 'Design and Development of Three Phase Smart Solar Inverter with Grid Support Functionalities', degree: 'MS(R)', year: 'July 2020', coAdvisor: 'Dr. S. Chakrabarti', placement: 'Accenture, Japan' },
    { name: 'Abhiram VP', topic: 'Communication Topology Selection for Secondary Controllers in DC Microgrid', degree: 'M.Tech', year: '2019', coAdvisor: 'Dr. S. R. Sahoo', placement: 'SECI' },
    { name: 'Sagar Narale', topic: 'Reliability and Accelerated Aging Method of Aluminum Electrolytic Capacitors', degree: 'MS(R)', year: '2020', coAdvisor: 'Dr. Amit Verma', placement: 'GE (Webtech)' },
    { name: 'Parvraj Pachore', topic: 'Controlled Switching Method for Minimizing Inrush Current in Three Phase Transformer', degree: 'M.Tech', year: '2020', placement: 'Eaton' },
    { name: 'Saumya Bohra', topic: 'Regenerative Snubber Circuit for GaN HEMT Based Flyback Converter', degree: 'M.Tech', year: '2019', placement: 'Intel' },
    { name: 'Siddharth Jain', topic: 'Design of LCL Filter for Wide Bandgap Devices Based Grid-Connected Inverter', degree: 'M.Tech', year: '2020', placement: 'Maxlinear' },
    { name: 'Akshata Rajput', topic: 'A LLC resonant converter with wide output voltage range for USB - power delivery', degree: 'MS(R)', year: '2021', coAdvisor: 'Dr. S. R. Sahoo', placement: 'Solar Energy Corporation of India (SECI)' },
    { name: 'Siva Prabhakar', topic: 'Stability Improvement of Series Stacked Buffer Circuit in Single Phase Solar Inverter', degree: 'M.Tech', year: 'Oct 2020', coAdvisor: 'Dr. S. Chakrabarti', placement: 'Joined IITB for Ph.D.' },
    { name: 'Bhismadev Meher', topic: 'Accurate Flux Estimation of the Transformer and Development of Control Switching Device for Inrush Current Minimization', degree: 'M.Tech', year: 'July 2020', coAdvisor: 'Dr. S. Chakrabarti', placement: 'Qualcomm' },
    { name: 'Sai Sowmya Nagam', topic: 'Gaussian Process Regression based Fault Location in DC Microgrid', degree: 'M.Tech', year: 'Dec 2019', coAdvisor: 'Dr. Abheejeet Mohapatra', placement: 'Joined Imperial College London for Ph.D.' },
    { name: 'Pankaj Kumar', topic: 'Collector-Emitter Voltage Based Health Monitoring of Bond Wire in IGBT at Low Gate Voltage', degree: 'BT-MT', year: 'June 2020', coAdvisor: 'Dr. S. Chakrabarti', placement: 'Qualcomm' },
    { name: 'Tanmay Tiwari', topic: 'Coordinated Control of OLTC and Energy Storage for Voltage Regulation in Distribution Network with High PV Penetration', degree: 'M.Tech', year: '2019', coAdvisor: 'Dr. Abheejeet Mohapatra', placement: 'JP Morgan Chase Co' },
    { name: 'Anubrata Das', topic: 'Adaptive Reactive Power Injection By PV Inverter to Minimize Tap Changing Operations of OLTC', degree: 'M.Tech', year: '2021', placement: 'Continued for Ph.D' },
    { name: 'Nachiketa Deshmukh', topic: 'Active Power Decoupling Circuit and Bootstrapped Gate Driver Power Supply for Single Phase Transformerless Photovoltaic Inverter', degree: 'M.Tech', year: '2020', coAdvisor: 'Dr. S. R. Sahoo', placement: 'Continued for Ph.D.' },
    { name: 'Mrunmay Vaidya', topic: 'Comparative Study of DC/AC Bidirectional Converter Topologies for Battery Charging in Integrated Starter Generator Application', degree: 'M.Tech (RA)', year: '2021', coAdvisor: 'Dr. B.G. Fernandes', placement: 'Eaton' },
    { name: 'Akshay Laturkar', topic: 'Fast On-board Charger with Integrated Active Power Decoupling using GaN HEMT Devices', degree: 'M.Tech (RA)', year: '2021', placement: 'Bajaj Auto' },
    { name: 'Ali Asger Khattab', topic: 'Novel Method for Determination of Lead Acid Battery State of Health', degree: 'M.Tech', year: '2021', coAdvisor: 'Dr. Narendra Shiradkar', placement: 'CPWD' },
    { name: 'Vaishnav Lande', topic: 'Onboard Charger for Electric Vehicle', degree: 'M.Tech', year: '2022', placement: 'Enphase' },
    { name: 'Jitesh Kumar', topic: 'EV Chargers', degree: 'M.Tech', year: '2023', coAdvisor: 'Dr. Kishore Chatterjee', placement: 'Enphase' },
    { name: 'Akash Gosavi', topic: 'Decentralized Control of Cascaded H-Bridge Converters', degree: 'M.Tech (RA)', year: '2024', placement: 'Enphase, Bengaluru' },
    { name: 'Chirag Kishor Sarode', topic: 'GaN HEMT-based Single-phase Solar Inverter', degree: 'M.Tech', year: '2024', placement: 'Sedemac, Pune' },
    { name: 'Mohd Ismail', topic: 'Gate Driver Integrated Online Health Monitoring of SiC MOSFETs', degree: 'M.Tech (RA)', year: 'June 2025', placement: 'Tesla, Germany' },
    { name: 'Sagar De', topic: 'Active Power Decoupling Techniques for Single-Phase Power Converters', degree: 'M.Tech (RA)', year: 'June 2025', placement: 'Ultraviolet' },
    { name: 'Yajush Sihag', topic: 'Comparative Study of Dynamic Ron in GaN Power Transistor Under Voltage and Short Circuit Stress', degree: 'M.Tech', year: 'June 2025', placement: 'Hind Rectifiers' },
  ]
};

const GraduatedStudentCard = ({ student }: { student: any }) => (
  <div className="bg-white border border-gray-200 p-5 rounded-xl hover:shadow-md transition-shadow hover:border-[#06b6d4]/30 h-full flex flex-col">
    <div className="flex justify-between items-start mb-2 gap-2">
      <h4 className="font-bold text-[#0f172a]">{student.name}</h4>
      <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded-md whitespace-nowrap">
        {student.degree} {student.year && `• ${student.year}`}
      </span>
    </div>
    <p className="text-sm text-[#475569] mb-4 leading-relaxed">{student.topic}</p>
    <div className="space-y-1.5 mt-auto pt-3 border-t border-gray-100">
      {student.coAdvisor && (
        <p className="text-xs text-gray-500 flex items-start gap-1.5">
          <User className="w-3.5 h-3.5 text-[#06b6d4] shrink-0" />
          <span><span className="font-medium text-gray-700">Co-Advisor:</span> {student.coAdvisor}</span>
        </p>
      )}
      {student.placement && (
        <p className="text-xs text-gray-500 flex items-start gap-1.5">
          <Briefcase className="w-3.5 h-3.5 text-[#06b6d4] shrink-0" />
          <span><span className="font-medium text-gray-700">Placement:</span> {student.placement}</span>
        </p>
      )}
    </div>
  </div>
);

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedPerson, setSelectedPerson] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'current' | 'graduated' | 'prospective'>('current');

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
      image: nikhilphoto,
    },
    {
      name: 'Akash Gangwar',
      role: 'PhD Student',
      type: 'PhD',
      interests: 'Wide bandgap (WBG) devices (GaN and SiC), solar photovoltaic (PV) inverters, and resonant converters.',
      about: 'I am a Ph.D. student in the Department of Electrical Engineering at the Indian Institute of Technology Bombay (IIT Bombay), specializing in Power Electronics. My research focuses on wide bandgap (WBG) devices, particularly GaN and SiC, with the goal of improving their application in solar photovoltaic (PV) inverters. I completed my M.Tech in Power Systems from the National Institute of Technology Tiruchirappalli (NIT Trichy), Tamil Nadu, in 2021, where my research project involved the design and analysis of a three-level LLC resonant converter integrated with an active front-end converter. Prior to that, I earned my B.Tech degree in Electrical and Electronics Engineering from ABES Engineering College, Ghaziabad, in 2018.',
      email: 'akashgangwar452@gmail.com',
      linkedin: 'https://www.linkedin.com/in/akashgangwar452/',
      image: akashphoto,
    },
    {
      name: 'Saurabh Singh',
      role: 'PhD Student',
      type: 'PhD',
      interests: 'Control, condition monitoring, and reliability improvement of EV motor drives.',
      about: 'I am a PhD student in the Department of Electrical Engineering at the Indian Institute of Technology Bombay, Mumbai, India. My research interests include control, condition monitoring, and reliability improvement of EV motor drives. I earned my B.Tech. degree in Electrical Engineering from the Indian Institute of Technology Patna, India, in 2021.',
      email: 'saurabhsingh.ss1295@gmail.com',
      linkedin: 'https://www.linkedin.com/in/saurabh-singh-76183b237',
      image: saurabhphoto,
    },
    {
      name: 'Varun Lal',
      role: 'PhD Student',
      type: 'PhD',
      interests: 'Electric machine design, electromagnetic design, axial flux wound field synchronous machines, and EV motors.',
      about: 'I am a Ph.D. student in Electrical Engineering at the Indian Institute of Technology Bombay (IIT Bombay). My research interests lie in electric machine design, with a focus on electromagnetic design aimed at improving power density and efficiency. I work on rare-earth-free and permanent magnet–free motors for electric vehicle (EV) applications, and I am currently involved in the design and development of axial flux wound field synchronous machines, exploring brushless excitation techniques to enhance their power density. I have also worked on BLDC motor design for three-wheelers, focusing on improving performance using low-cost passive cooling methods. I hold a postgraduate diploma in Electric Mobility from COEP (in collaboration with ARAI) and completed my B.Tech in Electrical and Electronics Engineering from VIT Chennai.',
      email: 'varunlal.iitb@gmail.com',
      linkedin: 'https://www.linkedin.com/in/varun-mukesh-lal/',
      image: varunphoto,
    },
    {
      name: 'Priya Sinsinwar',
      role: 'PhD Student',
      type: 'PhD',
      interests: 'Medium-frequency transformers, isolated DC–DC converters, soft-switching estimation, and magnetic integration.',
      about: 'I am currently pursuing my Ph.D. in the Department of Electrical Engineering at the Indian Institute of Technology Bombay (IIT Bombay), India. My research interests include the design and optimization of medium-frequency transformers, magnetic component integration for DC–DC converters to enhance power density, and accurate soft-switching estimation methods for isolated DC–DC converters. I earned my B.Tech degree in Electrical and Electronics Engineering from Banasthali Vidyapith, India, in 2017. I have been honored with the Innovative Concept Award at the International Future Energy Challenge (IFEC) 2023 and received the Outstanding Teaching Assistant Award at IIT Bombay.',
      email: 'priyasinsinwar@iitb.ac.in',
      linkedin: 'https://www.linkedin.com/in/priya-sinsinwar-b7302391/',
      image: priyaphoto,
    },
    {
      name: 'Narendra Muley',
      role: 'M.Tech Student',
      type: 'Masters',
      interests: 'PMSM rotor temperature estimation, PCB reliability, onboard chargers for EVs, and motor controllers.',
      about: 'I am an M.Tech (Class of 2027) student at the Centre for Systems and Control, IIT Bombay, and currently working as a Project Research Assistant in the Department of Electrical Engineering. I am involved in an Anusandhan National Research Foundation (ANRF) funded project titled “Design and Development of a 20 kW SiC-based Traction Inverter." During my tenure as project staff, I have worked on PCB reliability, onboard chargers for electric vehicles, and motor controllers for two-wheeler EVs. I earned my B.Tech degree in Electrical Engineering from Walchand College of Engineering in 2022.',
      email: 'narendra18muley@gmail.com',
      linkedin: 'http://linkedin.com/in/narendra18',
      image: narendraphoto,
    },
    {
      name: 'Mohd Shazeb',
      role: 'M.Tech Student',
      type: 'Masters',
      interests: 'Power Electronics, motor drive systems, and SiC-based high-power converter design.',
      about: 'I am an M.Tech student in Power Electronics at the Indian Institute of Technology Bombay (IIT Bombay). My research interests lie in Power Electronics, with a focus on motor drive systems and high-power converter design. I have worked on the design and development of a 5 kW motor controller and am currently involved in the design and development of a SiC-based 20 kW motor controller aimed at achieving high efficiency and high-performance operation. I completed my B.Tech in Electrical Engineering from Aligarh Muslim University in 2024.',
      email: 'shazeb@iitb.ac.in',
      linkedin: 'https://www.linkedin.com/in/mohd-shazeb-6706ba293',
      image: shazebphoto,
    },
    {
      name: 'Sagnik Banerjee',
      role: 'M.Tech Student',
      type: 'Masters',
      interests: 'Medium-voltage grid-connected converters, power electronics, and power systems.',
      about: 'I am currently a Master’s student in Power Electronics and Power Systems at IIT Bombay, focusing on the design and development of medium-voltage grid-connected converters. I completed my B.Tech in Electrical Engineering from Institute of Engineering and Management, Kolkata in 2022. Prior to joining IIT Bombay, I worked as a Lead Engineer in Testing and Commissioning at Tata Power Renewable Energy Limited.',
      email: '24m1114@iitb.ac.in',
      linkedin: 'https://www.linkedin.com/in/sagnik-banerjee-17646519a',
      image: sagnikphoto,
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

          {/* Students Section with Tabs */}
          <div id="team-students" className="scroll-mt-28">
            <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-[#06b6d4] w-6 h-6" />
                <h3 className="text-3xl font-bold text-[#0f172a]">Students</h3>
              </div>
              <div className="flex bg-gray-100 p-1 rounded-lg">
                {(['current', 'graduated', 'prospective'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === tab
                      ? 'bg-white text-[#0f172a] shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeTab === 'current' && (
                  <motion.div
                    key="current"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {students.map((person, index) => (
                      <PersonCard key={person.name} person={person} delay={index * 0.05} isInView={isInView} onPhotoClick={handlePhotoClick} />
                    ))}
                  </motion.div>
                )}

                {activeTab === 'graduated' && (
                  <motion.div
                    key="graduated"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-10"
                  >
                    <div>
                      <h4 className="text-xl font-bold text-[#0f172a] mb-4 border-l-4 border-[#06b6d4] pl-3">Post-Docs & Research Scientists</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {graduatedStudents.postdocs.map((student, idx) => (
                          <GraduatedStudentCard key={`pd-${idx}`} student={student} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0f172a] mb-4 border-l-4 border-[#06b6d4] pl-3">Ph.D.</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {graduatedStudents.phd.map((student, idx) => (
                          <GraduatedStudentCard key={`phd-${idx}`} student={student} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0f172a] mb-4 border-l-4 border-[#06b6d4] pl-3">M.Tech / MS(R) / Dual Degree</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {graduatedStudents.masters.map((student, idx) => (
                          <GraduatedStudentCard key={`m-${idx}`} student={student} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'prospective' && (
                  <motion.div
                    key="prospective"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
                  >
                    <div className="w-16 h-16 bg-[#06b6d4]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#06b6d4]">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Join Our Research Group</h3>
                    <p className="text-[#475569] mb-8 text-lg leading-relaxed">
                      We are looking for motivated students/researchers, who are passionate about power electronics, to work as a full time student/researcher with us. Candidates are expected to have good academic/research credentials.

                      These are ideal positions for graduating or recently graduated students looking for research experience in the area of power electronics.

                      To know more about our current research interests, you may visit "overview of research" and "publications".

                      In case you are interested in joining us, you may send your CV
                    </p>
                    <a
                      href="mailto:sa@ee.iitb.ac.in"
                      className="inline-flex items-center gap-2 bg-[#06b6d4] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#0891b2] transition-colors shadow-lg shadow-[#06b6d4]/20"
                    >
                      <Mail className="w-5 h-5" />
                      Contact Prof. Sandeep Anand
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
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
