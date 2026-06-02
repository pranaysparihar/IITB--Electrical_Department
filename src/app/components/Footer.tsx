import { motion } from 'motion/react';
import { Github, Linkedin, Youtube, Mail, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Research: [
      { label: 'Electric Vehicles', href: '/publications#research-activities' },
      { label: 'Motor Design', href: '/publications#research-activities' },
      { label: 'Power Electronics', href: '/publications#research-activities' },
      { label: 'Renewable Energy', href: '/publications#research-activities' },
    ],
    Resources: [
      { label: 'Publications', href: '/publications' },
      { label: 'Projects', href: '/projects' },
      { label: 'Lab Facilities', href: '/facilities' },
      { label: 'Collaboration', href: '/#contact' },
    ],
    About: [
      { label: 'Our Team', href: '/team' },
      { label: 'IIT Bombay', href: 'https://www.iitb.ac.in' },
      { label: 'Electrical Engineering', href: 'https://www.ee.iitb.ac.in' },
    ],
    Connect: [
      { label: 'Prospective Students', href: '/team#prospective' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  };

  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/@C1973EVPowertrainlab', label: 'YouTube' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/c1973-ev-powertrain-lab/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sa@ee.iitb.ac.in', label: 'Email' },
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
              <span className="text-xl font-semibold">Prof. Sandeep Anand's Research Group Lab</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Prof. Sandeep Anand's Research Group Lab<br />
              Indian Institute of Technology, Bombay
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
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
              <h3 className="font-semibold mb-4 text-[#06b6d4]">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
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