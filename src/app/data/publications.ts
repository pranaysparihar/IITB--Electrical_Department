export interface Publication {
  title: string;
  authors: string;
  venue?: string;
  assignee?: string;
  year: string;
  type: 'journal' | 'conference' | 'patent';
  link?: string;
  number?: string;
  status?: string;
}


export const journals: Publication[] = [
  {
    title: 'Current Circulation Strategy for Active Thermal Control in Interleaved DC-DC Converters',
    authors: 'Abhishek Chanekar, Nachiketa Deshmukh, Abhinav Arya, S. Anand',
    venue: 'IEEE Journal of Emerging and Selected Topics in Power Electronics',
    year: '2026',
    status: 'Accepted',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/11513496',

  },
  {
    title: 'Junction Temperature based Adaptive Short Circuit Detection Technique for SiC MOSFETs',
    authors: 'Aditya Aman, Abhishek Chanekar, S. Anand, Abhinav Arya, Anant Agarwal',
    venue: 'IEEE Transactions on Industrial Electronics',
    year: '2026',
    status: 'Accepted',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/11489168',

  },
  {
    title: 'Low Device Count Three-Port DC-DC Converter Integrating Onboard Charger and Auxiliary Power Module for Light Electric Vehicles',
    authors: 'Siva Prabhakar, Shiladri Chakraborty, Nachiketa Deshmukh, S. Anand',
    venue: 'IEEE Transactions on Power Electronics, vol. 41, no. 2',
    year: '2026',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/11150744',

  },
  {
    title: 'Rotor position error based adaptive controller for improved average torque in PMSM drives for electric vehicles',
    authors: 'Saurabh Singh, Abhinav Arya, S. Anand, Kishore Chatterjee',
    venue: 'IEEE Transactions on Transportation Electrification',
    year: '2025',
    status: 'Accepted',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/11270999',

  },
  {
    title: 'Conductance Emulation Control for Real Power Compensation in Series-Stacked Active Power Decoupling Circuit',
    authors: 'Nachiketa Deshmukh, Arnab Sarkar, S. Anand, Soumya Ranjan Sahoo',
    venue: 'IEEE Journal of Emerging and Selected Topics in Power Electronics, vol. 6, no. 1, pp. 350-361',
    year: '2024',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/10669758',

  },
  {
    title: 'Ultrafast Self-Powered Circuit for Gate Driving of Normally-On Wide Bandgap Transistors',
    authors: 'Arnab Sarkar, Nachiketa Deshmukh, S. Anand',
    venue: 'IEEE Transactions on Power Electronics',
    year: '2024',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/10379848/',

  },
  {
    title: 'Voltage Regulation and Load Sharing in DC Microgrid using Single Variable Global Average Estimation',
    authors: 'Shyam AB, S.R. Sahoo, S. Anand',
    venue: 'IEEE Transactions on Smart Grid',
    year: '2023',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/10256112',

  },
  {
    title: 'Gate Voltage Based Active Thermal Control of Power Semiconductor Devices',
    authors: 'Abhishek Chanekar, Nachiketa Deshmukh, Abhinav Arya, S. Anand',
    venue: 'IEEE Transactions on Power Electronics',
    year: '2023',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/10172032',

  },
  {
    title: 'Multiple Points Measurement Based Junction Temperature Estimation of IGBT Module',
    authors: 'Abhinav Arya, Abhishek Chanekar, Amit Verma, S. Anand',
    venue: 'IEEE Transactions on Power Electronics',
    year: '2023',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/10024833',

  },
  {
    title: 'H-Bridge Derived Topology for Dynamic on-resistance Evaluation in Power GaN HEMTs',
    authors: 'Rustam Kumar, Arnab Sarkar, S. Anand, Amit Verma, Tian-Li Wu',
    venue: 'IEEE Transactions on Electron Devices',
    year: '2022',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9748975',

  },
  {
    title: 'Active Thermal Control for Buck Converter Based Active Power Decoupling Circuit',
    authors: 'Nachiketa Deshmukh, Abhishek Chanekar, S. Anand, S.R. Sahoo',
    venue: 'IEEE Transactions on Industry Applications',
    year: '2022',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9826420',

  },
  {
    title: 'Modified PWM Scheme to Reduce Reverse Conduction Loss in GaN-based Independently Controlled Multiple Output Flyback Converter',
    authors: 'Arnab Sarkar, Nachiketa Deshmukh, S. Anand',
    venue: 'IEEE Transactions on Power Electronics',
    year: '2022',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9795920',

  },
  {
    title: 'Network-Agnostic Adaptive PQ Adjustment Control for Grid Voltage Regulation in PV Systems',
    authors: 'Anubrata Das, Efstratios Batzelis, S. Anand, S.R. Sahoo',
    venue: 'IEEE Transactions on Sustainable Energy',
    year: '2022',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9789564',

  },
  {
    title: 'Temperature Droop Based Dynamic Reactive Power Sharing Technique to Improve the Lifetime of Power Electronic Converter',
    authors: 'Anubrata Das, Yugal Gupta, S. Anand, S.R. Sahoo',
    venue: 'IEEE Transactions on Power Electronics',
    year: '2021',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9632415',

  },
  {
    title: 'GaN Based Multiple Output Flyback Converter with Independently Controlled Outputs',
    authors: 'Arnab Sarkar, Bhanu Teja Vankayalapati, S. Anand',
    venue: 'IEEE Transactions on Industrial Electronics',
    year: '2021',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9384186',

  },
  {
    title: 'Accurate Online Junction Temperature Estimation of IGBT using Inflection Point Based Updated I-V Characteristics',
    authors: 'Abhinav Arya, Abhishek Chanekar, Pratik Deshmukh, Amit Verma, S. Anand',
    venue: 'IEEE Transactions on Power Electronics',
    year: '2021',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9380212',

  },
  {
    title: 'Comparisons on Different Innovative Cascode GaN HEMT E-Mode Power Modules and Their Efficiencies on the Flyback Converter',
    authors: 'Chih-Chiang Wu, Ching-Yao Liu, S. Anand, Wei-Hua Chieng, Edward-Yi Chang, Arnab Sarkar',
    venue: 'Energies',
    year: '2021',
    type: 'journal',
    link: 'https://www.mdpi.com/1996-1073/14/18/5966',

  },
  {
    title: 'A Distributed-Controlled Harmonic Virtual Impedance Loop for AC Microgrids',
    authors: 'Anubrata Das, Ankit Shukla, Shyam AB, S. Anand, Josep Guerrero, S.R. Sahoo',
    venue: 'IEEE Transactions on Industry Applications',
    year: '2020',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9069413',

  },
  {
    title: 'Flux Error Function Based Controlled Switching Method for Minimizing Inrush Current in 3-Phase Transformer',
    authors: 'Parvraj Pachore, Yugal Gupta, S. Anand, Subrata Sarkar, Paresh Mathur, P.K. Singh',
    venue: 'IEEE Transactions on Power Delivery',
    year: '2020',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9095381',

  },
  {
    title: 'Power Loss Reduction in Buck Converter Based Active Power Decoupling Circuit',
    authors: 'Nachiketa Deshmukh, Siva Prabhakar, S. Anand',
    venue: 'IEEE Transactions on Industry Applications',
    year: '2020',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9200572',

  },
  {
    title: 'Effect of Communication Delay on Consensus Based Secondary Controllers in DC Microgrid',
    authors: 'Shyam AB, S. Anand, S.R. Sahoo',
    year: '2020',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9032310',

  },
  {
    title: 'Coordinated Control of OLTC and Energy Storage for Voltage Regulation in Distribution Network with High PV Penetration',
    authors: 'Tanmay Tewari, Abheejeet Mohapatra, S. Anand',
    year: '2020',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9079884',

  },
  {
    title: 'Selection of Capacitance for Stable Operation of Low Power DC System with Constant Power Loads',
    authors: 'Shirazul Islam, Souradip De, S. Anand, S.R. Sahoo',
    year: '2020',
    type: 'journal',
    link: 'https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/gtd2.12060',

  },
  {
    title: 'Methodology of an Accurate Static I-V Characterisation of Power Semiconductor Devices',
    authors: 'A. Arya, Pankaj Kumar, S. Anand',
    year: '2020',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/9050497',

  },
  {
    title: 'Health Estimation of Individual Capacitors in a Bank With Reduced Sensor Requirements',
    authors: 'Yugal Gupta, Waseem Ahmad, Sagar Narale, S. Anand',
    year: '2018',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/8536870',

  },
  {
    title: 'Adaptive Shunt Filtering Control of UPQC for Increased Non Linear Loads',
    authors: 'Saurav Roy Choudhury, Anubrata Das, S. Anand, Yogesh Sonawane, Sanjay Tungare',
    year: '2019',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/8637742',

  },
  {
    title: 'Integrated DC-DC Converter Based Grid-Connected Transformerless Photovoltaic Inverter with Extended Input Voltage Range',
    authors: 'Anup Anurag, Nachiketa Deshmukh, Avinash Maguluri, S. Anand',
    year: '2017',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/8125736',

  },
  {
    title: 'Online Algorithms for Storage Utilization under Real-Time Pricing in Smart Grid',
    authors: 'A.S. Bedi, Aditya P., M.W. Ahmad, S. Shinde, K. Rajawat, S. Anand',
    year: '2017',
    type: 'journal',
    link: 'https://www.sciencedirect.com/science/article/pii/S0142061517319919',

  },
  {
    title: 'Design and Control of Single Phase Dynamic Voltage Restorer',
    authors: 'Amit Meena, Shirazul Islam, S. Anand, Yogesh Sonawane, Sanjay Tungare',
    year: '2017',
    type: 'journal',
    link: 'https://www.ias.ac.in/article/fulltext/sadh/042/08/1363-1375',

  },
  {
    title: 'Quality Index Based Distributed Secondary Controller for Low Voltage DC Microgrid',
    authors: 'Anoop Ingle, Shyam AB, S.R. Sahoo, S. Anand',
    year: '2018',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/8264690',

  },
  {
    title: 'Quasi-Online Technique for Health Monitoring of Capacitor in Single Phase Solar Inverter',
    authors: 'Nikunj Agarwal, Waseem Ahmad, S. Anand',
    year: '2017',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/8002660',

  },
  {
    title: 'Ideal Current based Distributed Control to Compensate Line Impedance in DC Microgrid',
    authors: 'Shirazul Islam, Shyam Agarwal, Shyam AB, Anoop Ingle, Soumya Thomas, S. Anand, S.R. Sahoo',
    year: '2018',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/8379568',

  },
  {
    title: 'Non-invasive Technique for DC-link Capacitance Estimation in Single Phase Inverters',
    authors: 'Waseem Ahmad, Nandha Kumar, Abhinav Arya, S. Anand',
    year: '2017',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/8067525',

  },
  {
    title: 'Capacitor impedance estimation utilizing dc-link voltage oscillations in single phase inverter',
    authors: 'Abhinav Arya, Waseem Ahmad, Nikunj Agarwal, S. Anand',
    year: '2017',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/7989807',

  },
  {
    title: 'Low Frequency Impedance Monitoring and Corresponding Failure Criteria for Aluminum Electrolytic Capacitors',
    authors: 'Waseem Ahmad, Nikunj Agarwal, P Nandha Kumar, S. Anand',
    year: '2017',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/7862838',

  },
  {
    title: 'Evaluation of Vce at Inflection Point for Monitoring Bond Wire Degradation in Discrete Packaged IGBTs',
    authors: 'Arun Singh, Anup Anurag, S. Anand',
    year: '2016',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/7707420',

  },
  {
    title: 'Lifetime Monitoring of Electrolytic Capacitor to Maximize Earnings from Grid Feeding PV System',
    authors: 'Nikunj Agarwal, Abhinav Arya, Waseem Ahmad, S. Anand',
    year: '2016',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/7501847',

  },
  {
    title: 'Online Monitoring Technique for Aluminum Electrolytic Capacitor in Solar PV Based DC System',
    authors: 'Waseem Ahmad, Nikunj Agarwal, S. Anand',
    year: '2016',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/7494997',

  },
  {
    title: 'Transformer-less Grid Feeding Current Source Inverter for Solar Photovoltaic System',
    authors: 'S. Anand, Saikrishna Kashyap, B.G. Fernandes',
    year: '2014',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/6712103',

  },
  {
    title: 'Reduced Order Model and Stability Analysis of Low Voltage DC Microgrid',
    authors: 'S. Anand, B.G. Fernandes',
    year: '2012',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/6355655',

  },
  {
    title: 'Distributed Control to Ensure Proportional Load Sharing and Improve Voltage Regulation in Low Voltage DC Microgrids',
    authors: 'S. Anand, B.G. Fernandes, Josep Guerrero',
    year: '2012',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/6287047',

  },
  {
    title: 'DC Voltage Controller for Asymmetric Twin Converter Topology Based High Power STATCOM',
    authors: 'S. Anand, K. Chatterjee, B.G. Fernandes',
    year: '2011',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/6134650',

  },
  {
    title: 'Modified Droop Controller for Paralleling of DC-DC Converters in Standalone DC System',
    authors: 'S. Anand, B.G. Fernandes',
    year: '2012',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/6294937',

  },
  {
    title: 'Unique Power Electronics and Drives Experiment Bench (PEDEB) to Facilitate Learning and Research',
    authors: 'S. Anand, R.S. Farswan, B.G. Fernandes',
    year: '2012',
    type: 'journal',
    link: 'https://ieeexplore.ieee.org/document/6213161',

  },
];

export const conferences: Publication[] = [
  {
    title: 'Phase Shift Modulated Secondary Resonant Tank Converters with Reduced Load Dependence for Wide Gain Applications',
    authors: 'Rhitam Das, Siva Prabhakar, Anmol Meshram, S. Anand',
    venue: 'IEEE Energy Conversion Congress and Exposition Europe, ECCE Europe 2026, Valencia, Spain',
    year: '2026',
    type: 'conference',
    link: '#',

  },
  {
    title: 'Single-Stage Integrated OBC-APM Topology with Reduced Device Count for EV Application',
    authors: 'Anmol Meshram, Siva Prabhakar, S. Anand',
    venue: 'International Power Electronics Conference (IPEC) - IEEE ECCE Asia’2026, Nagasaki, Japan',
    year: '2026',
    type: 'conference',
    link: '#',

  },
  {
    title: 'Investigation of Dynamic On-Resistance in GaN HEMTs under Single- Pulse Short-Circuit Operation',
    authors: 'Nikhil Bhardwaj, Akash Gangwar, Yajush Sihag, S. Anand',
    venue: 'International Exhibition and Conference for Power Electronics, Intelligent Motion, Renewable Energy and Energy Management, PCIM Europe 2026, Nürnberg, Germany',
    year: '2026',
    type: 'conference',
    link: '#',

  },
  {
    title: 'Technique for the Accurate Measurement of Average dv/dt of SiC MOSFET',
    authors: 'Aditya Aman, Abhishek Chanekar, S. Anand, Abhinav Arya, Mohd. Ismail, Anant Agarwal',
    venue: '41st Annual IEEE Applied Power Electronics Conference & Exposition, APEC’2026, San Antonio, TX, USA',
    year: '2026',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/11516751',

  },
  {
    title: 'Enhancing Efficiency and Increasing Leakage Inductance in Aluminium Foil Winding based Transformer for Dual Active Bridge Converter',
    authors: 'Priya, S. Anand, B.G. Fernandes',
    venue: '41st Annual IEEE Applied Power Electronics Conference & Exposition, APEC’2026, San Antonio, TX, USA',
    year: '2026',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/11516974',

  },
  {
    title: 'A Low Device Count Three-Terminal Active Capacitor with Low-Side Design for Effective Second-Harmonic Ripple Suppression',
    authors: 'Sagar De, Siva Prabhakar, S. Anand',
    venue: '41st Annual IEEE Applied Power Electronics Conference & Exposition, APEC’2026, San Antonio, TX, USA',
    year: '2026',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/11516722',

  },
  {
    title: 'Selection of Negative Gate Voltage for GaN HEMTs Considering Switching Oscillations and Loss Minimization',
    authors: 'Raghavendra Venkata, S. Anand',
    venue: 'IEEE International conference on Power Electronics, Smart Grid and Renewable Energy, PESGRE’2025, IIT Dharwad, India',
    year: '2025',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/11521107',

  },
  {
    title: 'Design of Transformer Parameters for Energy Efficiency Enhancement of Semi-Active Bridge Converter',
    authors: 'Siva Prabhakar, Shiladri Chakraborty, Sagar De, S. Anand',
    venue: '17th IEEE Energy Conversion Congress and Exposition Asia, ECCE Asia 2025, Bengaluru, India',
    year: '2025',
    type: 'conference',
    link: '#',

  },
  {
    title: 'A Plug and Play Three Terminal Active Power Decoupling Circuit',
    authors: 'Sagar De, Siva Prabhakar, S. Anand',
    venue: 'International Exhibition and Conference for Power Electronics, Intelligent Motion, Renewable Energy and Energy Management, PCIM Europe 2025, Nürnberg, Germany',
    year: '2025',
    type: 'conference',
    link: '#',

  },
  {
    title: 'Design Parameter Selection for Efficiency Improvement of Semi-Dual Active Bridge Converter',
    authors: 'Siva Prabhakar, Shiladri Chakraborty, S. Anand',
    venue: '40th Annual IEEE Applied Power Electronics Conference & Exposition, APEC’2025, Atlanta, Georgia, USA',
    year: '2025',
    type: 'conference',
    link: '#',

  },
  {
    title: 'Bootstrap Gate Driver for GaN-based Solar Inverter: Design Challenges and Solutions',
    authors: 'Chirag Sarode, Akash Gangwar, Abhishek Chanekar, S. Anand',
    venue: '11th IEEE Power Electronics, Drives and Energy Systems, PEDES’2024, Mangaluru, India',
    year: '2024',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/10961610',

  },
  {
    title: 'Methodology for Determining Critical Screening Voltage in SiC MOSFETs Through Gate Leakage Current Hysteresis',
    authors: 'Nikhil Bhardwaj, Shiva Houshmand, Monikuntala Bhattacharya, Michael Jin, Hengyu Yu, Limeng Shi, Jiyashu Quin, Marvin White, S. Anand, Anant Agarwal',
    venue: '11th IEEE Workshop on Wide Bandgap Power Devices and Applications, WiPDA’2024, Dayton, Ohio, USA',
    year: '2024',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/10773284',

  },
  {
    title: 'Diode Emulation Control for Efficiency Improvement of Dual Active Bridge Converters',
    authors: 'Nachiketa Deshmukh, Kamran Asad, Mayank Deo, Pramod Chaudhary, Siva Prabhakar, Shiladri Chakraborty, S. Anand',
    venue: 'IEEE International Communications Energy Conference, INTELEC’2024, Bangalore, India',
    year: '2024',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/10679038',

  },
  {
    title: 'Extended High Efficiency Operation of Semi-Active Half-Bridge DC-DC Converter',
    authors: 'Nachiketa Deshmukh, Kamran Asad, Mayank Deo, Pramod Chaudhary, Siva Prabhakar, Shiladri Chakraborty, S. Anand',
    venue: 'IEEE International Communications Energy Conference, INTELEC’2024, Bangalore, India',
    year: '2024',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/10679037',

  },
  {
    title: 'De-Skewing Algorithm for Accurate Switching Loss Calculation in GaN HEMT',
    authors: 'Akash Gangwar, Abhishek Chanekar, S. Anand, Amit Verma',
    venue: 'IEEE Transportation Electrification Conference and Expo., ITEC’2024, Rosemont, IL, USA',
    year: '2024',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/10599060',

  },
  {
    title: 'Design Methodology to Improve Weighted Efficiency of Semi-Dual Active Bridge Converter',
    authors: 'Siva Prabhakar, Nachiketa Deshmukh, S. Anand, Shiladri Chakraborty, Mayank Deo, Pramod Chaudhary',
    venue: 'IEEE Transportation Electrification Conference and Expo., ITEC’2024, Rosemont, IL, USA',
    year: '2024',
    type: 'conference',
    link: '#',

  },
  {
    title: 'Impact of Operational Parameters on dVDS/dt of SiC MOSFET and a Scheme for Gate Driver Resistance Selection to Limit dVDS/dt',
    authors: 'Aditya Aman, Abhishek Chanekar, S. Anand, Anant Agarwal',
    venue: '39th Annual IEEE Applied Power Electronics Conference & Exposition, APEC’2024, Long Beach, California, USA',
    year: '2024',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/10509088',

  },
  {
    title: 'Impact of Gate Turn-Off Voltage on Body Diode Loss of SiC MOSFET and a Scheme to Improve Light Load Efficiency of SiC Converters',
    authors: 'Aditya Aman, Abhishek Chanekar, S. Anand, Anant Agarwal',
    venue: '11th National Power Electronics Conference, NPEC’2023, IIT Guwahati, India',
    year: '2023',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/10384860',

  },
  {
    title: 'Highly Efficient GaN-based PV Inverter with Reduced Leakage Current',
    authors: 'Akash Gangwar, Nachiketa Deshmukh, Abhishek Chanekar, S. Anand',
    venue: '49th Annual Conference of the IEEE Industrial Electronics Society, IECON’2023, Singapore',
    year: '2023',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/10312424',

  },
  {
    title: 'Thermal Stress Balancing for Lifetime Improvement of H6 Solar Inverter',
    authors: 'Abhishek Chanekar, Nachiketa Deshmukh, Akash Gangwar, S. Anand',
    venue: '25th European Conference on Power Electronics and Applications, EPE’23 ECCE-Europe, Aalborg, Denmark',
    year: '2023',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/10264669',

  },
  {
    title: 'Improving Anti-Slip Performance in Multi-Motor Single Inverter Based Heavy Electric Vehicles',
    authors: 'Saurabh Singh, Naveen Edla, Abhinav Arya, S. Anand, Kishore Chatterjee, Srinivas Gopalan, and Sujay Sirur',
    venue: 'IEEE Transportation Electrification Conference & Expo, ITEC’2023, Detroit, MI, USA',
    year: '2023',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/10186898',

  },
  {
    title: 'Relative Gain Array Based Decoupled Controller Design for GaN-Based Multiple Output Flyback Converter',
    authors: 'Arnab Sarkar, Nachiketa Deshmukh, S. Anand',
    venue: '38th Annual IEEE Applied Power Electronics Conference & Exposition, APEC’2023, Orlando, Florida, USA',
    year: '2023',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/10131593',

  },
  {
    title: 'Design Methodology for Power-Dense and Cost-Effective Series-Stacked Active Power Decoupling Circuit',
    authors: 'Nachiketa Deshmukh, Arnab Sarkar, S.R. Sahoo, S. Anand',
    venue: '38th Annual IEEE Applied Power Electronics Conference & Exposition, APEC’2023, Orlando, Florida, USA',
    year: '2023',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/10131459',

  },
  {
    title: 'Effect of Communication Delay on Steady State Voltage in DC Microgrids',
    authors: 'Shyam A.B., Anubrata Das, S. R. Sahoo, S. Anand',
    venue: '22nd National Power Systems Conference, NPSC’2022, IIT Delhi, India',
    year: '2022',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/abstract/document/10069847',

  },
  {
    title: 'Effect of Material Resistivity and Temperature on Leakage Inductance of Medium Frequency Transformers Made of Al and Cu Foils',
    authors: 'Priya Gajanand, Annoy Kumar Das, S. Anand, B. G. Fernandes',
    venue: '48th Annual Conference of the IEEE Industrial Electronics Society, IECON’2022, Brussels',
    year: '2022',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9968856',

  },
  {
    title: 'Impact of Operational Factors on the Lifetime of Power Semiconductor Devices in Electric Vehicles',
    authors: 'Abhinav Arya, Abhishek Chanekar, Naveen Edla, S. Anand',
    venue: '48th Annual Conference of the IEEE Industrial Electronics Society, IECON’2022, Brussels',
    year: '2022',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9968712',

  },
  {
    title: 'Voltage Regulation Controller in DC Microgrid: Implementation Challenges and Solutions',
    authors: 'A. B. Shyam, S. R. Sahoo, S. Anand',
    venue: '48th Annual Conference of the IEEE Industrial Electronics Society, IECON’2022, Brussels',
    year: '2022',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9968717',

  },
  {
    title: 'Methodology of Gate Voltage Selection for Power Loss Manipulation of Power Semiconductor Device to Achieve Enhanced Lifetime',
    authors: 'Abhishek Chanekar, Nachiketa Deshmukh, Abhinav Arya, S. Anand',
    venue: 'IEEE Energy Conversion Congress and Exposition, ECCE’2022, Detroit, Michigan, USA',
    year: '2022',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9948082',

  },
  {
    title: 'An Adaptive DC Voltage Control for SiC based Medium Voltage Photovoltaic Inverter',
    authors: 'Jenson Joseph Attukadavil, S. Anand, B.G Fernandes',
    venue: 'IEEE Energy Conversion Congress and Exposition, ECCE’2022, Detroit, Michigan, USA',
    year: '2022',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9947823',

  },
  {
    title: 'Collector-Emitter Voltage Based Health Monitoring of Bond Wire in IGBT at Low Gate Voltage',
    authors: 'Pankaj Kumar, Abhinav Arya, Abhishek Chanekar, Pratik Deshmukh, S. Anand',
    venue: 'IEEE Energy Conversion Congress and Exposition, ECCE’2022, Detroit, Michigan, USA',
    year: '2022',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9947879',

  },
  {
    title: 'Dual Active Half Bridge Converter with Integrated Active Power Decoupling for On-Board EV Charger',
    authors: 'Akshay Laturkar, Nachiketa Deshmukh, S. Anand',
    venue: 'IEEE International conference on Power Electronics, Smart Grid and Renewable Energy, PESGRE’2022, Trivandrum, India',
    year: '2022',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9715900',

  },
  {
    title: 'A Three Terminal Active Power Decoupling Circuit for Single-Phase Single-Stage On-Board Charger',
    authors: 'Nachiketa Deshmukh, Siva Prabhakar, S. Anand, S. R. Sahoo',
    venue: '10th National Power Electronics Conference, NPEC’2021, IIT Bhubaneswar, India',
    year: '2021',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9672515',

  },
  {
    title: 'A LLC Resonant Converter with Wide Output Voltage Range for USB - Power Delivery',
    authors: 'Akshata Rajput, Nachiketa Deshmukh, S. Anand',
    venue: '10th National Power Electronics Conference, NPEC’2021, IIT Bhubaneswar, India',
    year: '2021',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9672472',

  },
  {
    title: 'Comparative Study of Various Communication Technologies for Secondary Controllers in DC Microgrid',
    authors: 'A. B. Shyam, S. Anand, Soumya Ranjan Sahoo, Josep M. Guerreo',
    venue: '9th International Conference on Power Systems, ICPS’2021, IIT Kharagpur, India',
    year: '2021',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9670303',

  },
  {
    title: 'An Efficient and Compact Multi-port Power Supply for Nano-satellites',
    authors: 'Arnab Sarkar, Nachiketa Deshmukh, Pankaj Kumar, S. Anand',
    venue: '13th Annual IEEE Energy Conversion Congress and Exposition, ECCE’21, Vancouver, Canada',
    year: '2021',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9595915',

  },
  {
    title: 'Regenerative Snubber Based Bootstrapped Gate Driver Power Supply for Multiple Input Flyback Converter',
    authors: 'Arnab Sarkar, Aditya Aman, S. Anand',
    venue: '13th Annual IEEE Energy Conversion Congress and Exposition, ECCE’21, Vancouver, Canada',
    year: '2021',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9595482',

  },
  {
    title: 'Lifetime Analysis of Photovoltaic Inverter Based on Geographical Site of Installation',
    authors: 'Abhishek A. Chanekar, Abhinav Arya, Nachiketa Deshmukh, S. Anand',
    venue: '9th IEEE Power Electronics, Drives and Energy Systems Conference, PEDES’20, Jaipur, India',
    year: '2020',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9379742',

  },
  {
    title: 'Detection of Phase Loss Fault in a Three-Phase Transformer Based Grid Feeding PV Inverter',
    authors: 'Shouvik Paik, Anubrata Das, S. Anand',
    venue: '9th IEEE Power Electronics, Drives and Energy Systems Conference, PEDES’20, Jaipur, India',
    year: '2020',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9379639',

  },
  {
    title: 'Availability Based Load Harmonic Compensation Using PV Inverter',
    authors: 'Anubrata Das, S. Anand, Soumya Ranjan Sahoo',
    venue: '9th IEEE Power Electronics, Drives and Energy Systems Conference, PEDES’20, Jaipur, India',
    year: '2020',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9379672',

  },
  {
    title: 'Stability Improvement of Series Stacked Buffer Circuit in Single Phase Solar Inverter',
    authors: 'Siva Prabhakar, Nachiketa Deshmukh, S. Anand',
    venue: '9th IEEE Power Electronics, Drives and Energy Systems Conference, PEDES’20, Jaipur, India',
    year: '2020',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9379650',

  },
  {
    title: 'DC-link Voltage Feed-Forward Controller for Buck Active Power Decoupling Circuit',
    authors: 'Nachiketa Deshmukh, Siva Prabhakar, S. Anand',
    venue: '9th IEEE Power Electronics, Drives and Energy Systems Conference, PEDES’20, Jaipur, India',
    year: '2020',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9379485',

  },
  {
    title: 'Conductance Emulation Based Control for Series Stacked Energy Buffer',
    authors: 'Nachiketa Deshmukh, Siva Prabhakar, S. R. Sahoo, S. Anand',
    venue: '9th IEEE Power Electronics, Drives and Energy Systems Conference, PEDES’20, Jaipur, India',
    year: '2020',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9379869',

  },
  {
    title: 'An Adaptive P-Q Management Technique For Grid Voltage Regulation Using PV Inveter',
    authors: 'Anubrata Das, Efstratios Batzelis, S. Anand, S. R. Sahoo',
    venue: '21st National Power Systems Conference, NPSC’20, Gandhinagar, India',
    year: '2020',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9331760',

  },
  {
    title: 'A Cascaded Interleaved Bootstrapped Gate Driver Power Supply for Multilevel Photovoltaic Inverters',
    authors: 'Nachiketa Deshmukh, S. Anand',
    venue: '21st IEEE Workshop on Control and Modeling for Power Electronics, COMPEL’2020, Aalborg, Denmark',
    year: '2020',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9265790',

  },
  {
    title: 'Determination of Fault Clearing Time based on Thermal Limits of Power Semiconductor Devices in DC Microgrids',
    authors: 'Shirazul Islam, Anju Meghwani, S. Anand, Soumya Ranjan Sahoo',
    venue: '11th International Symposium on Power Electronics for Distributed Generation Systems, PEDG’2020, Dubrovnik, Croatia',
    year: '2020',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9244316',

  },
  {
    title: 'Accelerated Aging Method and Lifetime Evaluation of Aluminum Electrolytic Capacitors for Power Electronic Application',
    authors: 'Sagar Narale, Amit Verma, S. Anand',
    venue: 'IEEE Energy Conversion Congress and Exposition, ECCE’2020, Detroit, USA',
    year: '2020',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9235353',

  },
  {
    title: 'Low Side Switch Based Regenerative Snubber Circuit for Flyback Converter',
    authors: 'Saumya Bohra, Arnab Sarkar, S. Anand',
    venue: 'IEEE Energy Conversion Congress and Exposition, ECCE’2020, Detroit, USA',
    year: '2020',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9236237',

  },
  {
    title: 'Consensus based Ideal Current Sharing Controller for DC Microgrid',
    authors: 'Shirazul Islam, Souradip De, S. Anand, S.R. Sahoo',
    venue: '14th International Conference on Compatibility, Power Electronics and Power Engineering, CPE-POWERENG’2020, Portugal',
    year: '2020',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9161693',

  },
  {
    title: 'Gaussian Process Regression based Fault Location in DC Microgrid',
    authors: 'Sai Sowmya Nagam, Rakesh Kumar Panda, Abheejeet Mohapatra, S. Anand',
    venue: '4th IEEE Texas Power and Energy Conference, TPEC’2020, Texas, USA',
    year: '2020',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9042542',

  },
  {
    title: 'Stability of DC Microgrid for Different Reduced Communication Topologies',
    authors: 'Abhiram V. P., A. B. Shyam, S.R. Sahoo, S. Anand',
    venue: '8th International Conference on Power Systems, ICPS’19, Jaipur, India',
    year: '2019',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9067705',

  },
  {
    title: 'Structure and Degradation of Aluminum Electrolytic Capacitors',
    authors: 'Sagar B. Narale, Amit Verma, S. Anand',
    venue: '9th National Power Electronics Conference, NPEC’19, Trichy, India',
    year: '2019',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9034726',

  },
  {
    title: 'Communication Topology Selection for Secondary Controllers in DC Microgrid',
    authors: 'Abhiram V. P., A. B. Shyam, S.R Sahoo, S. Anand',
    venue: '9th National Power Electronics Conference, NPEC’19, Trichy, India',
    year: '2019',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/9034875',

  },
  {
    title: 'Error Analysis of An Accurate Bipolar Voltage Measurement Circuit for Online Health Monitoring of IGBTs',
    authors: 'Pratik Diwakar Deshmukh, Abhinav Arya, S. Anand',
    venue: '20th IEEE International Conference on Industrial Technology, ICIT’19, Melbourne, Australia',
    year: '2019',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8754953',

  },
  {
    title: 'Reliability Comparison of DC Link Capacitor Bank for Different Configurations',
    authors: 'Sagar P. Narale, P. Nandha Kumar, Waseem Ahmad, Amit Verma, S. Anand',
    venue: '20th IEEE International Conference on Industrial Technology, ICIT’19, Melbourne, Australia',
    year: '2019',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8755003',

  },
  {
    title: 'Method to Reduce Harmonic Voltage Distortion and Improve Harmonic Current Sharing in an islanded AC Microgrid',
    authors: 'Ankit Shukla, Anubrata Das, S. Anand',
    venue: '20th IEEE International Conference on Industrial Technology, ICIT’19, Melbourne, Australia',
    year: '2019',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8754950',

  },
  {
    title: 'An Improved Droop Control Method to Enhance Dynamic Performance of AC Microgrid',
    authors: 'Shirazul Islam, Souradip De, S. Anand, S.R. Sahoo',
    venue: '20th National Power Systems Conference, NPSC’18, Tiruchirappalli, India',
    year: '2018',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8771798',

  },
  {
    title: 'Dynamic Overcurrent Saturation of Distributed Sources in a DC Microgrid System',
    authors: 'Debasish Dhua, S. Anand, S.R. Sahoo',
    venue: '20th National Power Systems Conference, NPSC’18, Tiruchirappalli, India',
    year: '2018',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8771443',

  },
  {
    title: 'Coordinated Voltage Control in LV Distribution Systems using OLTC and BESS',
    authors: 'Akansha Jain, Tanmay Tewari, Anubrata Das, S. Anand, Abheejeet Mohapatra',
    venue: '20th National Power Systems Conference, NPSC’18, Tiruchirappalli, India',
    year: '2018',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8771772',

  },
  {
    title: 'Comparison of Si and GaN Power Devices Based SMPS for Satellite Application',
    authors: 'Bhanu Teja Vankayalapati, Arnab Sarkar, Rajender Nune, S. Anand, Yogesh Singh Chauhan',
    venue: '8th Power Electronics, Drives and Energy Systems Conference, PEDES’18, Chennai, India',
    year: '2018',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8707877',

  },
  {
    title: 'Partial Unfolding Scheme for Grid Feeding Transformerless PV Inverter',
    authors: 'Rustam Kumar, Madhurani Rajaput, Nachiketa Deshmukh, Dagadu More, S. Anand',
    venue: '8th Power Electronics, Drives and Energy Systems Conference, PEDES’18, Chennai, India',
    year: '2018',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8707472',

  },
  {
    title: 'Active Ripple Compensation Port for Single Phase Transformerless Photovoltaic Inverter',
    authors: 'Nachiketa Deshmukh, S. Anand',
    venue: '20th European Conference on Power Electronics and Applications, EPE ECCE Europe 2018, Riga, Latvia',
    year: '2018',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/abstract/document/8515527',

  },
  {
    title: 'A Modified SMS Islanding Detection Technique for Reduced Non Detection Zone',
    authors: 'Pankaj Kumar, Ankit Shukla, S. Anand, S.P.S. Pundir, Subrata Sarkar',
    venue: '20th European Conference on Power Electronics and Applications, EPE’2018, Riga, Latvia',
    year: '2018',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8515538',

  },
  {
    title: 'Development of an R&D platform for smart city projects in the Indian context',
    authors: 'S. Sahoo, S. K. Singh, S. S. Inamdar, A. Sharma, I. Husain, A. Yadav, S. Chakrabarti, V. K. Tiwari, S.C. Srivastava, R. Singh, S. Anand, K. Rajawat, A. Roy, P. Sensarma',
    venue: 'CIGRE 2018 Session, Paris, France',
    year: '2018',
    type: 'conference',
    link: 'https://e-cigre.org/publication/SESSION2018_C6-313',

  },
  {
    title: 'Performance Analysis of Reduced Communication Network in DC Microgrid',
    authors: 'Shyam A.B., Anoop Ingle, Soumya Ranjan Sahoo, S. Anand',
    venue: 'IEEE PES Innovative Smart Grid Technologies Asia Conference, ISGT-Asia’2018, Singapore',
    year: '2018',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8467839',

  },
  {
    title: 'CLPSO based droop optimization technique for DC Microgrid',
    authors: 'Shiv Malhotra, Soumya Ranjan Sahoo, S. Anand',
    venue: '4th Indian Control Conference, ICC’2018, IIT Kanpur, India',
    year: '2018',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8307973',

  },
  {
    title: 'Mission Profile Based Evaluation Of Capacitor Reliability In Two Stage Grid Feeding Photovoltaic Inverter',
    authors: 'Sagar B. Narale, P Nandha Kumar, Md. Waseem Ahmad, D. S. More, S. Anand',
    venue: '8th National Power Electronics Conference, NPEC’2017, Pune, India',
    year: '2017',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8310426',

  },
  {
    title: 'Reduced Communication based Local Averaging Method for Low Voltage DC Microgrid',
    authors: 'Soumya Thomas, Soumya Ranjan Sahoo, S. Anand',
    venue: '7th IEEE International Conference on Power Systems, ICPS’2017, Pune, India',
    year: '2017',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8387344',

  },
  {
    title: 'Estimation and Utilization of Aggregate Harmonic Load Model',
    authors: 'Sathish Athiappan, Saikat Chakrabarti, S. Anand',
    venue: 'IEEE PES Asia-Pacific Power and Energy Engineering Conference, APPEEC 2017, Bangalore, India',
    year: '2017',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/8308988',

  },
  {
    title: 'Optimal Utilization of Storage Systems under Real-time Pricing',
    authors: 'Amrit S. Bedi, Waseem Ahmad, Ketan Rajawat, S. Anand',
    venue: 'IEEE ICC Workshop on Integrating Communications, Control, and Computing Technologies for Smart Grid, Paris, France',
    year: '2017',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7962812',

  },
  {
    title: 'Dynamic Droop Gain Adjustment for Proportional Power Sharing in Low Voltage DC Microgrid',
    authors: 'Shyam Agarwal, Shirazul Islam, S. Anand',
    venue: 'IEEE International Conference on Power Electronics, Drives and Energy Systems, PEDES’2016, Trivandrum, India',
    year: '2016',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7914314',

  },
  {
    title: 'Adaptive Reactive Power Injection by Solar PV Inverter to Minimize Tap Changes and Line Losses',
    authors: 'Anubrata Das, Ankul Gupta, Saurav Roy Choudhury, S. Anand',
    venue: '19th National Power Systems Conference, NPSC’2016, Bhubaneswar, India',
    year: '2016',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7858955',

  },
  {
    title: 'Frequency Response Improvement in Microgrid Using Optimized VSG Control',
    authors: 'B. Rathore, S. Chakrabarti, S. Anand',
    venue: '19th National Power Systems Conference, NPSC’2016, Bhubaneswar, India',
    year: '2016',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7858916',

  },
  {
    title: 'Correlation of Accelerated Lifetime in Punctured Capacitor with Normal Operating Lifetime',
    authors: 'Danny Boby, Waseem Ahmad, Nikunj Agarwal, S. Anand',
    venue: 'CPE-POWERENG’2016, Bydgoszcz, Poland',
    year: '2016',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7544213',

  },
  {
    title: 'Condition Monitoring of DC-Link Capacitor Utilizing Zero State of Solar PV H5 Inverter',
    authors: 'Nikunj Agarwal, Waseem Ahmad, S. Anand',
    venue: 'CPE-POWERENG’2016, Bydgoszcz, Poland',
    year: '2016',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7544180',

  },
  {
    title: 'Comparative Analysis of Power Density in Si MOSFET and GaN HEMT based Flyback Converters',
    authors: 'Rajender Nune, Anup Anurag, S. Anand, Yogesh Singh Chauhan',
    venue: 'CPE-POWERENG’2016, Bydgoszcz, Poland',
    year: '2016',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7544212',

  },
  {
    title: 'Simulation of Low Voltage Ride Through Scheme for Distribution System with High R/X Ratio',
    authors: 'Saurav Roy Choudhury, Ankul Gupta, S. Anand',
    venue: 'CPE-POWERENG’2016, Bydgoszcz, Poland',
    year: '2016',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7544185',

  },
  {
    title: 'Distributed Secondary Control with Reduced Communication in Low-Voltage DC Microgrid',
    authors: 'Soumya Thomas, Shirazul Islam, Soumya Ranjan Sahoo, S. Anand',
    venue: 'CPE-POWERENG’2016, Bydgoszcz, Poland',
    year: '2016',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7544171',

  },
  {
    title: 'Power Decoupling in Solar PV System using Partial Power Processing Converter',
    authors: 'Waseem Ahmad, S. Anand',
    venue: 'CPE-POWERENG’2016, Bydgoszcz, Poland',
    year: '2016',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7544184',

  },
  {
    title: 'Design and Control of Single Phase Dynamic Voltage Restorer',
    authors: 'Amit Meena, Shirazul Islam, S. Anand, Yogesh Sonawane, Sanjay Tungare',
    venue: '7th National Power Electronics Conference, NPEC’2015, Mumbai, India',
    year: '2015',
    type: 'conference',
    link: 'https://www.ee.iitb.ac.in/npec/Papers/Program/NPEC_2015_paper_57.pdf',

  },
  {
    title: 'Accelerated Ageing of Aluminum Electrolytic Capacitor',
    authors: 'Rashmi Shukla, Md. Waseem Ahmad, Nikunj Agarwal, S. Anand',
    venue: '7th National Power Electronics Conference, NPEC’2015, Mumbai, India',
    year: '2015',
    type: 'conference',
    link: 'https://www.ee.iitb.ac.in/npec/Papers/Program/NPEC_2015_paper_55.pdf',

  },
  {
    title: 'An Online Technique For Condition Monitoring Of Capacitor In PV System',
    authors: 'Md. Waseem Ahmad, Abhinav Arya, S. Anand',
    venue: 'IEEE International Conference on Industrial Technology, ICIT’2015, Seville, Spain',
    year: '2015',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7125215',

  },
  {
    title: 'Online Monitoring of Power Extraction Efficiency for Minimizing Payback Period of Solar PV System',
    authors: 'Abhinav Arya, Md. Waseem Ahmad, S. Anand',
    venue: 'IEEE International Conference on Industrial Technology, ICIT’2015, Seville, Spain',
    year: '2015',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7125520',

  },
  {
    title: 'Eigenvalue Sensitivity Analysis of Microgrid with Constant Power Loads',
    authors: 'Shirazul Islam, S. Anand',
    venue: 'IEEE Power Electronics, Drives and Energy Systems Conference, PEDES’2014, Mumbai, India',
    year: '2014',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7041967',

  },
  {
    title: 'Power Management Control for Solar Photovoltaic Based DC System',
    authors: 'S. Anand, B.G. Fernandes',
    venue: '40th Annual Conference of the IEEE Industrial Electronics Society, IECON’2014, Dallas, USA',
    year: '2014',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/7049159',

  },
  {
    title: 'Multilevel Open-ended Transformer Based Grid Feeding Inverter for Solar Photovoltaic Application',
    authors: 'S. Anand, B.G. Fernandes',
    venue: '38th Annual Conference of the IEEE Industrial Electronics Society, IECON’2012, Montreal, Canada',
    year: '2012',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/6389047',

  },
  {
    title: 'Optimal Charging of Battery using Solar PV in Standalone DC System',
    authors: 'S. Anand, R.S. Farswan, B. Mangu, B.G. Fernandes',
    venue: 'IET Conference on Power Electronics Machines and Drives, PEMD’2012, Bristol, UK',
    year: '2012',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/6242191',

  },
  {
    title: 'Steady State Performance Analysis for Load Sharing in DC Distributed Generation System',
    authors: 'S. Anand, B.G. Fernandes',
    venue: '10th International Conference on Environment and Electrical Engineering, EEEIC’2011, Rome',
    year: '2011',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/5874577',

  },
  {
    title: 'A New 4-level Open-Ended Transformer based STATCOM for High Power Applications',
    authors: 'S. Anand, B.G. Fernandes, K. Chatterjee',
    venue: '36th Annual Conference of the IEEE Industrial Electronics Society, IECON’2010, Phoenix, USA',
    year: '2010',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/5675316',

  },
  {
    title: 'Optimal Voltage Level for DC Microgrids',
    authors: 'S. Anand, B.G. Fernandes',
    venue: '36th Annual Conference of the IEEE Industrial Electronics Society, IECON’2010, Phoenix, USA',
    year: '2010',
    type: 'conference',
    link: 'https://ieeexplore.ieee.org/document/5674947',

  },
  {
    title: 'A New Differential VRM Topology for Microprocessor Applications',
    authors: 'S. Anand, K. Chatterjee',
    venue: 'National Power Electronics Conference, NPEC’2007, IISc Bangalore, India',
    year: '2007',
    type: 'conference',
    link: '—',

  },
];

export const patents: Publication[] = [
  {
    title: "A Single Phase Grid Connected Transformer-less Photovoltaic inverter",
    authors: "Maguluri Avinash, Anup Anurag, Nachiketa Deshmukh, and S. Anand",
    number: "Indian Patent No. 496891 (Appl: 201611036171)",
    assignee: "IIT Bombay",
    year: "2016",
    status: "Granted (10/01/2024)",
    type: 'patent',

  },
  {
    title: "A voltage measurement circuit and method thereof",
    authors: "Pratik Deshmukh, Abhinav Arya, and S. Anand",
    number: "Indian Patent No. 478972 (Appl: 201811028927)",
    assignee: "IIT Bombay",
    year: "2018",
    status: "Granted (08/12/2023)",
    type: 'patent',

  },
  {
    title: "Control Device",
    authors: "Parvraj Pachore, Akansha Jain, S. Anand, Saikat Chakrabarti, Ajay Kumar Verma, SPS Pundir, and Subrata Sarkar",
    number: "Indian Patent No. 386567 (Appl: 201811024706)",
    assignee: "IIT Kanpur & NTPC",
    year: "2018",
    status: "Granted (13/01/2022)",
    type: 'patent',

  },
  {
    title: "Method for Monitoring the health of Aluminum Electrolytic Capacitor",
    authors: "A. Arya, N. Agarwal, W. Ahmad, and S. Anand",
    number: "Indian Patent No. 399559 (Appl: 201611008693)",
    assignee: "IIT Bombay",
    year: "2016",
    status: "Granted (20/06/2022)",
    type: 'patent',

  },
  {
    title: "Regenerative snubber circuit for flyback and other converters and method thereof",
    authors: "Saumya Bohra, Arnab Sarkar, and S. Anand",
    number: "Indian Patent No. 409112 (Appl: 201911054644)",
    assignee: "IIT Bombay",
    year: "2019",
    status: "Granted (17/10/2022)",
    type: 'patent',

  },
  {
    title: "A method for monitoring of bond wire degradation in Insulated Gate Bipolar Transistor",
    authors: "Arun Singh, Anup Anurag, and S. Anand",
    number: "Indian Patent No. 418062 (Appl: 201611029236)",
    assignee: "IIT Bombay",
    year: "2016",
    status: "Granted (13/01/2023)",
    type: 'patent',

  },
  {
    title: "Wall mounted speed regulator for a BLDC motor driven ceiling fan",
    authors: "S. Anand and B.G. Fernandes",
    number: "Indian Patent No. 536090 (Appl: 542/MUM/2011)",
    assignee: "IIT Bombay",
    year: "2011",
    status: "Granted (30/04/2024)",
    type: 'patent',

  },
  {
    title: "An ultrafast self-powered circuit for gate driving of normally-ON transistors",
    authors: "Arnab Sarkar, Nachiketa Deshmukh, and S. Anand",
    number: "Indian Patent Appl. No. 202321043554",
    assignee: "IIT Bombay",
    year: "2023",
    status: "Published (June 2023)",
    type: 'patent',

  },
  {
    title: "On-board charging system for electric vehicles",
    authors: "Siva Prabhakar, Nachiketa Deshmukh, Shiladri Chakraborty, and S. Anand",
    number: "Indian Patent Appl. No. 202221067778",
    assignee: "IIT Bombay & Varroc",
    year: "2022",
    status: "Published (Nov 2022)",
    type: 'patent',

  },
  {
    title: 'Methods and Systems for Controlling Permanent Magnet Synchronous Machine (PMSM) Motor',
    authors: 'Saurabh Singh, Abhinav Arya, S. Anand, Kishore Chatterjee and Jasaswini Mohanty',
    number: 'Indian Patent Application No. 202521033139',
    assignee: 'IIT Bombay',
    year: '2025',
    status: 'Application Date: 03/April/2025',
    type: 'patent',

  },
  {
    title: 'Brush-less axial flux dual rotor wound field synchronous machine',
    authors: 'Varun Lal, and S. Anand',
    number: 'Indian Patent Application No. 202521133072',
    assignee: 'IIT Bombay',
    year: '2025',
    status: 'Application Date: 29/Dec/2025 (Additional 3 design patents: 485462-001, 485463-001, 485464-001)',
    type: 'patent',

  }
];
