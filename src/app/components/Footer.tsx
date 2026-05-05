import { motion } from 'motion/react';
import { Github, Linkedin, Youtube, Mail, FlaskConical } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Research: ['Electric Vehicles', 'Motor Design', 'Power Electronics', 'Renewable Energy'],
    Resources: ['Publications', 'Projects', 'Lab Facilities', 'Collaboration'],
    About: ['Our Team', 'IIT Bombay', 'Electrical Engineering', 'Careers'],
    Connect: ['Contact Us', 'Visit Lab', 'Prospective Students', 'Industry Partners'],
  };

  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/@C1973EVPowertrainlab', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#06b6d4]/20 rounded-lg flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-[#06b6d4]" />
              </div>
              <span className="text-xl font-semibold">HiPER Lab</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Electric Machines & Drives Laboratory
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Electrical Engineering Department<br />
              Indian Institute of Technology, Bombay
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#06b6d4] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Electric Machines & Drives Lab, IIT Bombay. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#06b6d4] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#06b6d4] transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-[#06b6d4] transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}