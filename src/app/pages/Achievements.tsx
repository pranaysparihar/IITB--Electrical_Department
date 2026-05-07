import { motion } from 'motion/react';
import { Award, Trophy, Star, Medal } from 'lucide-react';

interface FacultyAward {
  id: number;
  title: string;
  year: string;
  issuer?: string;
  description?: string;
}

interface StudentAward {
  id: number;
  year: string;
  names: string;
  award: string;
  details?: string;
}

const facultyAwards: FacultyAward[] = [
  { id: 1, title: 'Young Faculty Research Fellowship (YFRF)', year: '2025', issuer: 'MeitY, Govt. of India', description: 'Under Visvesvaraya PhD Scheme of Ministry of Electronics & Information Technology' },
  { id: 2, title: 'C1973 Research Excellence Award', year: '2024', issuer: 'IIT Bombay, India', description: 'For excellence in research and innovation' },
  { id: 3, title: 'INSA Associate Fellow', year: '2023', issuer: 'The Indian National Science Academy (INSA)' },
  { id: 4, title: 'Best Paper Award in Microgrids and Distribution Systems', year: '2021', issuer: '9th International Conference on Power Systems (ICPS-2021)', description: 'With co-authors A. B. Shyam, S. R. Sahoo, and Josep M. Guerreo' },
  { id: 5, title: 'Dr. M. Ramamoorty Best Paper Award in Power Electronics & Drives', year: '2020', issuer: 'NPSC- 2020', description: 'With co-authors Anubrata Das, Efstratios Batzelis, and S. R. Sahoo' },
  { id: 6, title: 'Exceptionally good teaching feedback rating', year: '2019, 2018, 2017, 2015 & 2014', issuer: 'Director, IITK', description: 'Congratulatory letters for courses' },
  { id: 7, title: 'NASI-Young Scientist Platinum Jubilee Award', year: '2019', issuer: 'The National Academy of Sciences, India' },
  { id: 8, title: 'PK Kelkar Young Faculty Research Fellowship', year: '2019', issuer: 'IIT Kanpur, India' },
  { id: 9, title: 'Outstanding Branch Counselor/Chapter Advisor Award', year: '2018', issuer: 'IEEE UP Section', description: 'For IEEE PES SBC' },
  { id: 10, title: 'Shastri Mobility Program Awardee', year: '2018', issuer: 'Shastri Indo-Canadian Institute' },
  { id: 11, title: 'Young Engineer Award', year: '2017', issuer: 'Indian National Academy of Engineering (INAE), India' },
  { id: 12, title: 'Associate-ship', year: '2017', issuer: 'Indian Academy of Sciences (IASc), Bangalore, India' },
  { id: 13, title: 'Senior Member', year: '2016', issuer: 'IEEE' },
  { id: 14, title: 'Bhaskara Advanced Solar Energy (BASE) Fellowship Program', year: '2015', issuer: 'IUSSTF', description: '(travel not availed)' },
  { id: 15, title: 'POSOCO Power System Award', year: '2014', issuer: 'POSOCO, India' },
  { id: 16, title: 'INSPIRE Faculty Fellowship Award', year: '2013', issuer: 'INSA, India' },
  { id: 17, title: 'Innovative Student Project Award', year: '2013', issuer: 'INAE, India' },
  { id: 18, title: 'Award for Excellence in Thesis Work', year: '2013', issuer: 'IIT Bombay, India' },
];

const studentAwards: StudentAward[] = [
  { id: 1, year: '2025', names: 'Abhinav Arya', award: 'ISOI Best Thesis Award', details: 'By Instrument Society of India (ISOI)' },
  { id: 2, year: '2024', names: 'IIT Bombay Racing Team', award: 'Overall 1st in Formula Bharat Electric' },
  { id: 3, year: '2024', names: 'Aditya Aman', award: 'APEC Student Attendance Support', details: 'By APEC’24 conference at Long Beach, CA' },
  { id: 4, year: '2023', names: 'Aniket Nadkarni, Avinash Narne, Devraj Panchal, Jenson Joseph, Prabhat Kumar, Priya, Tirth Patel, Tirth Meghani', award: 'The Innovative Concept Award', details: 'in IEEE International Future Energy Challenge (IFEC) -2023 at Hannover, Germany' },
  { id: 5, year: '2023', names: 'Anubrata Das', award: 'POSOCO Power System Award for Ph.D. work', details: 'By POSOCO, India' },
  { id: 6, year: '2023', names: 'Nachiketa Deshmukh', award: 'APEC Student Attendance Support', details: 'By APEC’23 conference at Orlando Florida' },
  { id: 7, year: '2023', names: 'Arnab Sarkar', award: 'APEC Student Attendance Support', details: 'By APEC’23 conference at Orlando Florida' },
  { id: 8, year: '2022', names: 'Arnab Sarkar', award: 'Student Project Demonstration Travel Grant', details: 'By IEEE Energy Conversion Congress and Exposition (ECCE), 2022 in Detroit, USA' },
  { id: 9, year: '2021', names: 'Shyam A.B.', award: 'Best Contributory Paper in track Micro-Grid and Distribution System', details: 'With co-authors: S.R. Sahoo, S. Anand, and J. M. Guerrero At 9th International Conference on Power Systems (ICPS), IIT Kharagpur' },
  { id: 10, year: '2021', names: 'Arnab Sarkar', award: '“100 seconds” technical video competition 2021', details: '1st prize in Electrical Engineering domain By INAE Kanpur Chapter' },
  { id: 11, year: '2021', names: 'Arnab Sarkar', award: 'IEEE-IES Student and Young Professional Competition 2021', details: '3rd prize for work titled “GaN Based Multiple Output Flyback Converter with Independently Controlled Outputs” By IEEE Industrial Electronics Society' },
  { id: 12, year: '2021', names: 'Arnab Sarkar', award: 'ECCE Student Attendance Grant', details: 'in IEEE Energy Conversion Congress and Expo (ECCE) -2021, Canada' },
  { id: 13, year: '2020', names: 'Pankaj Kumar, Dibyojyoti Sinha, Arnab Sarkar (PG Mentor), Nachiketa Deshmukh (PG Mentor) et. al.', award: 'The Ingenuity Award (3rd position)', details: 'in IEEE International Future Energy Challenge (IFEC) -2020' },
  { id: 14, year: '2020', names: 'Anubrata Das', award: 'Dr. M. Ramamoorty Best Paper Award in Power Electronics & Drives', details: 'With co-authors: Efstratios Batzelis, S. Anand, and S. R. Sahoo At National Power Systems Conference (NPSC) 2020' },
  { id: 15, year: '2020', names: 'Pankaj Kumar', award: 'Proficiency Prizes/Medal in Electrical Engineering', details: 'By I.I.T. Kanpur, India' },
  { id: 16, year: '2020', names: 'Abhiram V.P.', award: 'POSOCO Power System Award in Master Category', details: 'By POSOCO, India' },
  { id: 17, year: '2019', names: 'Parvraj Pachore, Nachiketa Deshmukh', award: 'One of the University Challenge Winners', details: 'of the DST - Lockheed Martin - Tata Trusts India Innovation Growth Programme (IIGP) 2.0' },
  { id: 18, year: '2019', names: 'Parvraj Pachore', award: 'Won 2nd prize at Student’s Innovation Pavilion', details: 'at Gridtech-2019 organized by Power Grid' },
  { id: 19, year: '2019', names: 'Anubrata Das', award: 'IEEE-ICIT Student Travel Scholarship', details: 'by IEEE International Conference on Industrial Technology at Australia in 2019' },
  { id: 20, year: '2018', names: 'Pratik Deshmukh', award: 'Cadence Silver Medal', details: 'for the best 2-year M. Tech. graduating student of CSE or EE department by IIT Kanpur' },
  { id: 21, year: '2018', names: 'Pratik Deshmukh', award: 'IEEE/PEDES’96 Award', details: 'for outstanding M.Tech graduating student in the area of Power Electronics and Drives for 2016 by IIT Kanpur' },
  { id: 22, year: '2018', names: 'Anoop Atish Ingle', award: 'POSOCO Power System Award (PPSA) in Master Category', details: 'by Power System Operation Company (POSOCO), New Delhi' },
  { id: 23, year: '2017', names: 'Avinash M., A. Anurag, N. Deshmukh and A. Arya', award: 'One of University Challenge Winners', details: 'of the DST - Lockheed Martin - Tata Trusts India Innovation Growth Programme (IIGP) 2.0' },
  { id: 24, year: '2017', names: 'Saurav Roy Chaudhary', award: 'POSOCO Power System Award (PPSA) in Master Category', details: 'by Power System Operation Company (POSOCO), New Delhi' },
  { id: 25, year: '2016', names: 'Nikunj Agarwal', award: 'IEEE/PEDES’96 Award', details: 'for outstanding M.Tech graduating student in the area of Power Electronics and Drives for 2016 by IIT Kanpur' },
  { id: 26, year: '2015', names: 'Abhinav Arya', award: 'IEEE/PEDES’96 Award', details: 'for outstanding M.Tech graduating student in the area of Power Electronics and Drives for 2015 by IIT Kanpur' },
  { id: 27, year: '2015', names: 'Abhinav Arya', award: 'IEEE-ICIT Student Travel Scholarship', details: 'by IEEE International Conference on Industrial Technology at Spain in 2015.' }
];

export default function AchievementsPage() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
            Awards & Recognitions
          </h1>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Celebrating the excellence and achievements of our faculty and students.
          </p>
        </motion.div>

        {/* Faculty Awards Section */}
        <div id="faculty-awards" className="mb-24 scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <Trophy className="w-8 h-8 text-[#06b6d4]" />
            <h2 className="text-3xl font-bold text-[#0f172a]">Faculty Awards</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyAwards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#06b6d4]/30 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-700">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2 leading-snug">
                  {award.title}
                </h3>
                {award.issuer && (
                  <p className="text-sm font-medium text-[#06b6d4] mb-2">
                    {award.issuer}
                  </p>
                )}
                {award.description && (
                  <p className="text-sm text-[#475569] leading-relaxed mt-auto pt-4 border-t border-gray-50">
                    {award.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Student Awards Section */}
        <div id="student-awards" className="scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <Medal className="w-8 h-8 text-emerald-500" />
            <h2 className="text-3xl font-bold text-[#0f172a]">Student's Awards & Recognitions</h2>
          </div>
          
          <div className="space-y-6">
            {studentAwards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start md:items-center"
              >
                <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <Star className="w-6 h-6 text-emerald-500 mb-1" />
                  <span className="text-sm font-bold text-emerald-700">{award.year}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                    {award.award}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-semibold text-[#06b6d4]">
                      {award.names}
                    </span>
                  </div>
                  {award.details && (
                    <p className="text-[#475569] text-sm leading-relaxed">
                      {award.details}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
