import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Lightbulb, Globe, Award } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const milestones = [
    { year: '2015', event: 'Lab Founded', description: 'Established with focus on AI research' },
    { year: '2017', event: 'First Major Grant', description: '$2M NSF funding secured' },
    { year: '2019', event: 'Industry Partnerships', description: 'Collaborations with Fortune 500 companies' },
    { year: '2021', event: 'Research Expansion', description: 'Expanded to robotics and IoT' },
    { year: '2023', event: 'Global Recognition', description: 'Best Research Lab award' },
  ];

  const focusAreas = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Solving real-world problems through innovative research and development',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Pushing boundaries in AI, ML, and computational systems',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Collaborating with institutions and industry leaders worldwide',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of research integrity',
    },
  ];

  return (
    <section ref={ref} id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            About the Lab
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            A world-class research facility dedicated to advancing the frontiers of technology
            and creating transformative solutions
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#0f172a] mb-6">Our Vision</h3>
            <p className="text-[#475569] mb-6 leading-relaxed">
              The Electric Machines & Drives Laboratory at IIT Bombay's Electrical Engineering
              Department is at the forefront of electric mobility and sustainable energy
              research. Our work spans motor design, power electronics, and intelligent control
              systems for electric vehicles, renewable energy, and industrial applications.
            </p>
            <p className="text-[#475569] leading-relaxed">
              Through collaboration with leading automotive manufacturers, energy companies, and
              research institutions, we develop practical solutions that address India's growing
              demand for efficient, sustainable electric transportation and power systems.
            </p>
          </motion.div>

          {/* Right Column - Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-xl border border-gray-200 hover:border-[#06b6d4] transition-all hover:shadow-lg"
              >
                <area.icon className="w-8 h-8 text-[#06b6d4] mb-3" />
                <h4 className="font-semibold text-[#0f172a] mb-2">{area.title}</h4>
                <p className="text-sm text-[#64748b]">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-[#0f172a] mb-8 text-center">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#06b6d4] to-transparent hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-[#06b6d4] font-semibold mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="font-semibold text-[#0f172a] mb-2">
                        {milestone.event}
                      </h4>
                      <p className="text-[#64748b] text-sm">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block w-4 h-4 bg-[#06b6d4] rounded-full border-4 border-white shadow-lg relative z-10" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}