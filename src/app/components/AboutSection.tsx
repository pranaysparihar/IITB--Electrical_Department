import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { User, Briefcase, GraduationCap, Award, Video } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const bio = "Dr. [Name] is a Professor in the Department of Electrical Engineering at IIT Bombay. His research interests include Power Electronics, Electric Drives, and Renewable Energy Systems. He has over 20 years of experience in academia and industry.";

  const experience = [
    { role: 'Professor', organization: 'IIT Bombay', period: '2015 - Present' },
    { role: 'Associate Professor', organization: 'IIT Bombay', period: '2010 - 2015' },
    { role: 'Assistant Professor', organization: 'IIT Delhi', period: '2005 - 2010' },
  ];

  const education = [
    { degree: 'Ph.D. in Electrical Engineering', institution: 'University of Wisconsin-Madison', year: '2005' },
    { degree: 'M.Tech in Power Systems', institution: 'IIT Bombay', year: '2000' },
    { degree: 'B.E. in Electrical Engineering', institution: 'University of Mumbai', year: '1998' },
  ];

  const awards = [
    'IEEE Fellow, 2023',
    'Best Paper Award, IEEE ECCE 2022',
    'Excellence in Teaching Award, IIT Bombay 2020',
  ];

  const teachingVideos = [
    { title: 'Introduction to Power Electronics', url: '#', views: '15K' },
    { title: 'Advanced Electric Drives', url: '#', views: '10K' },
    { title: 'Grid Integration of Renewables', url: '#', views: '8K' },
  ];

  return (
    <section ref={ref} id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            About
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Professor Bio and Academic Background
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Sidebar Navigation/Menu for About (Optional visual aid, but the main nav handles scrolling) */}

          <div className="md:col-span-3 space-y-16">

            {/* Bio */}
            <div id="about-bio" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <User className="text-[#06b6d4] w-8 h-8" />
                <h3 className="text-2xl font-bold text-[#0f172a]">Bio</h3>
              </div>
              <p className="text-[#475569] leading-relaxed text-lg bg-gray-50 p-8 rounded-2xl border border-gray-100">
                {bio}
              </p>
            </div>

            {/* Work Experience */}
            <div id="about-experience" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-[#06b6d4] w-8 h-8" />
                <h3 className="text-2xl font-bold text-[#0f172a]">Work Experience</h3>
              </div>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                    <div>
                      <h4 className="font-semibold text-lg text-[#0f172a]">{exp.role}</h4>
                      <p className="text-[#64748b]">{exp.organization}</p>
                    </div>
                    <span className="text-[#06b6d4] font-medium mt-2 md:mt-0 bg-[#06b6d4]/10 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div id="about-education" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-[#06b6d4] w-8 h-8" />
                <h3 className="text-2xl font-bold text-[#0f172a]">Education</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="p-6 bg-[#f8fafc] rounded-xl border border-gray-200">
                    <div className="text-[#06b6d4] font-bold text-xl mb-2">{edu.year}</div>
                    <h4 className="font-semibold text-[#0f172a] mb-1">{edu.degree}</h4>
                    <p className="text-[#64748b] text-sm">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div id="about-awards" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-[#06b6d4] w-8 h-8" />
                <h3 className="text-2xl font-bold text-[#0f172a]">Awards and Fellowship</h3>
              </div>
              <ul className="space-y-3">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#475569] text-lg">
                    <span className="w-2 h-2 bg-[#06b6d4] rounded-full" />
                    {award}
                  </li>
                ))}
              </ul>
            </div>

            {/* Teaching Videos */}
            <div id="about-teaching" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <Video className="text-[#06b6d4] w-8 h-8" />
                <h3 className="text-2xl font-bold text-[#0f172a]">Teaching Videos</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {teachingVideos.map((video, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-gray-200 aspect-video rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-[#06b6d4] border-b-[8px] border-b-transparent ml-1" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-[#0f172a] group-hover:text-[#06b6d4] transition-colors">{video.title}</h4>
                    <p className="text-sm text-[#64748b]">{video.views} views</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}