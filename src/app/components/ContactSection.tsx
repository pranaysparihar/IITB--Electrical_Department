import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Room 116, EE Department', 'Indian Institute of Technology Bombay', 'Powai, Mumbai - 400076, India'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['emdlab@ee.iitb.ac.in', 'pi@iitb.ac.in'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 (22) 2576-XXXX', 'Lab: +91 (22) 2576-YYYY'],
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Interested in collaboration, joining the team, or learning more about our work?
            We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#06b6d4]/20 to-[#06b6d4]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <info.icon className="w-8 h-8 text-[#06b6d4]" />
              </div>
              <h4 className="text-xl font-semibold text-[#0f172a] mb-4">{info.title}</h4>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-[#475569]">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl overflow-hidden h-[400px] relative w-full shadow-lg"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg opacity-75">Interactive Map</p>
              <p className="text-sm opacity-60 mt-2">EE Department, IIT Bombay</p>
            </div>
          </div>
          {/* You can replace this with an actual embedded map iframe later */}
        </motion.div>
      </div>
    </section>
  );
}