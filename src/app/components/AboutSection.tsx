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
            Welcome
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
                Our research group operates at the forefront of next-generation transportation and power electronics, closely collaborating with the Electric Vehicle (EV) Laboratory and the Medium Voltage (MV) Laboratory. We are dedicated to advancing the efficiency, power density, and sustainability of clean energy systems through cutting-edge hardware design and advanced control topologies. <br /> <br />
                Our core research and development framework is divided into two primary pillars: <br></br>

                1. Electric Vehicle Powertrain & Components
                We focus on the end-to-end optimization of EV subsystems, primarily targeting 2-wheeler, 3-wheeler, and 4-wheeler applications. Our work spans across:
                Rare-Earth-Free Motor Design: Addressing material sustainability and supply chain vulnerabilities, we focus on developing Rare-Earth Element (REE)-free and Permanent Magnet (PM)-free electric motors. Our design methodologies strictly aim to maximize power density and operational efficiency for lightweight electric mobility.
                Next-Generation Inverters & On-Board Chargers (OBC): We develop robust hardware solutions for inverters and OBCs. By transitioning from traditional Silicon (Si) to Wide-Bandgap (WBG) semiconductors—specifically Gallium Nitride (GaN) and Silicon Carbide (SiC)—we significantly enhance system performance, thermal management, and power density while aggressively minimizing manufacturing costs.
                Advanced Motor Control Strategies: Beyond hardware, we design and validate sophisticated control algorithms to optimize transient performance, system-level efficiency, and overall powertrain reliability.<br /> <br />


                2. Medium Voltage Solid-State Transformers (SST)
                Bridging the gap between renewable energy integration and modern grid infrastructure, our group specializes in high-power density Solid-State Transformers.
                Silicon Carbide (SiC) Integration: Utilizing 3.3 kV SiC power MOSFETs, our SST architecture enables high-voltage operation, superior thermal performance, and exceptional efficiency under heavy thermal loads, making it ideal for next-generation medium-voltage applications.
                Modular & Scalable Design: The system employs a highly maintainable and flexible modular approach. Each individual submodule is rated at a 2 kV DC link and handles 13.33 kW of power.
                Grid-Scale Prototyping: By electrically stacking 15 of these identical submodules (configured with 5 submodules per phase), our research aims to realize a 200 kW SST prototype capable of seamlessly interfacing directly with an 11 kV utility grid.              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}