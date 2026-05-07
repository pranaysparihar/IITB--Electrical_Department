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
      details: ['Ground Floor, Dept of Electrical Engineering', 'IIT Bombay, Powai, Mumbai 400 076', 'India'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['sa@ee.iitb.ac.in'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(O): +91-22-2576-7409'],
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
              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#06b6d4]/10 group-hover:border-[#06b6d4]/20 transition-all">
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
          className="rounded-2xl overflow-hidden h-[400px] w-full shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.160105389659!2d72.9164874!3d19.1319889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f67f8bf8b3%3A0x254d4ac58e28820c!2sDepartment%20of%20Electrical%20Engineering!5e0!3m2!1sen!2sin!4v1714800000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EE Department IIT Bombay Map"
          />
        </motion.div>

      </div>
    </section>
  );
}