import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FlaskConical } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
            Lab Details
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Sidebar Navigation/Menu for About (Optional visual aid, but the main nav handles scrolling) */}

          <div className="md:col-span-3 space-y-16">

            {/* Lab Description */}
            <div id="about-lab" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <FlaskConical className="text-[#06b6d4] w-8 h-8" />
                <h3 className="text-2xl font-bold text-[#0f172a]">Lab Description</h3>
              </div>
              <p className="text-[#475569] leading-relaxed text-lg bg-gray-50 p-8 rounded-2xl border border-gray-100">
                The HiPER Lab (High Performance Power Electronics Research Lab) at the Indian Institute of Technology Bombay, led by Prof. Sandeep Anand, is at the forefront of research in advanced power electronics, driving innovation in electric mobility and sustainable energy systems. <br /> <br />

                The lab focuses on the design and development of next-generation electric vehicle (EV) drivetrains and charging technologies, alongside high-performance power converters based on wide bandgap semiconductor devices such as GaN and SiC. Its research also extends to intelligent power electronic interfaces for integrating renewable and alternative energy sources, including solar photovoltaic (PV) systems, batteries, and fuel cells.<br /> <br />


                Through close alignment with emerging industry needs and national initiatives in EV powertrains and photovoltaic systems, HiPER Lab seamlessly bridges fundamental research with practical implementation—delivering impactful, scalable, and industry-relevant solutions for the future of energy and mobility.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}