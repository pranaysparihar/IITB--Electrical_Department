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
                The Electric Machines & Drives (EM&D) Laboratory at IIT Bombay is at the forefront of research in electric mobility, power electronics, and renewable energy integration. We focus on theoretical analysis, advanced simulation, and practical hardware prototyping to create highly efficient, reliable, and intelligent electrical systems for future transport and grid applications. Our goal is to drive innovation that supports a sustainable energy future.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}