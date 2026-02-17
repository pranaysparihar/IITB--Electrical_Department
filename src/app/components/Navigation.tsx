import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  type: 'link' | 'dropdown';
  children?: { label: string; id: string }[];
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', type: 'link' },
    {
      id: 'about',
      label: 'About',
      type: 'dropdown',
      children: [
        { label: 'Bio', id: 'about-bio' },
        { label: 'Work Experience', id: 'about-experience' },
        { label: 'Education', id: 'about-education' },
        { label: 'Awards and Fellowship', id: 'about-awards' },
        { label: 'Teaching Videos', id: 'about-teaching' },
      ]
    },
    {
      id: 'research',
      label: 'Research',
      type: 'dropdown',
      children: [
        { label: 'R&D Activities', id: 'research-activities' },
        { label: 'Presentation & Videos', id: 'research-presentation' },
      ]
    },
    {
      id: 'projects',
      label: 'Projects',
      type: 'dropdown',
      children: [
        { label: 'Current Projects', id: 'projects-current' },
        { label: 'Closed Projects', id: 'projects-closed' },
      ]
    },
    {
      id: 'facilities',
      label: 'Facilities',
      type: 'dropdown',
      children: [
        { label: 'Facilities', id: 'facilities-overview' },
        { label: 'EV Lab', id: 'facilities-ev' },
        { label: 'Power Electronics Lab', id: 'facilities-power' },
        { label: 'Medium Voltage Lab', id: 'facilities-medium' },
      ]
    },
    {
      id: 'publications',
      label: 'Publications',
      type: 'dropdown',
      children: [
        { label: 'Journals', id: 'publications-journals' },
        { label: 'Conferences', id: 'publications-conferences' },
        { label: 'Patent', id: 'publications-patents' },
      ]
    },
    {
      id: 'team',
      label: 'Team',
      type: 'dropdown',
      children: [
        { label: 'Professors', id: 'team-professors' },
        { label: 'Program Managers', id: 'team-managers' },
        { label: 'Students', id: 'team-students' },
      ]
    },
    { id: 'contact', label: 'Contact Us', type: 'link' },
  ];

  const handleNavigate = (section: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    // Small timeout to ensure the menu state updates and doesn't block UI thread or conflict with scroll
    // on mobile devices
    setTimeout(() => {
      onNavigate(section);
    }, 100);
  };

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <div className="h-12 w-12 md:h-14 md:w-14 relative overflow-hidden flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg"
                alt="IIT Bombay Logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg md:text-xl font-bold text-[#0f172a] leading-tight group-hover:text-[#06b6d4] transition-colors">
                IIT Bombay
              </span>
              <span className="text-xs md:text-sm font-medium text-[#64748b]">
                EM&D Lab
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative group/nav-item"
                onMouseEnter={() => item.type === 'dropdown' && handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => item.type === 'link' ? handleNavigate(item.id) : undefined}
                  className={`px-3 py-2 rounded-lg transition-all relative flex items-center gap-1 text-sm font-medium ${activeSection === item.id || (activeSection.startsWith(item.id + '-') && item.type === 'dropdown')
                      ? 'text-[#06b6d4]'
                      : 'text-[#475569] hover:text-[#0f172a]'
                    }`}
                >
                  {item.label}
                  {item.type === 'dropdown' && <ChevronDown size={14} className="group-hover/nav-item:rotate-180 transition-transform duration-200" />}

                  {activeSection === item.id && item.type === 'link' && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#06b6d4]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.type === 'dropdown' && (
                  <AnimatePresence>
                    {activeDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 mt-1 overflow-hidden z-[60]"
                      >
                        {item.children?.map((child) => (
                          <button
                            key={child.id}
                            type="button"
                            onClick={() => handleNavigate(child.id)}
                            className="block w-full text-left px-4 py-2.5 text-sm text-[#475569] hover:bg-gray-50 hover:text-[#06b6d4] transition-colors"
                          >
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#475569] hover:text-[#0f172a] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.id} className="space-y-2">
                  {item.type === 'link' ? (
                    <button
                      type="button"
                      onClick={() => handleNavigate(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${activeSection === item.id
                          ? 'bg-[#06b6d4]/10 text-[#06b6d4]'
                          : 'text-[#475569] hover:bg-gray-100'
                        }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <div>
                      <div className="px-4 py-2 font-semibold text-[#0f172a] text-lg border-b border-gray-100 mb-2">
                        {item.label}
                      </div>
                      <div className="space-y-1 ml-2">
                        {item.children?.map((child) => (
                          <button
                            key={child.id}
                            type="button"
                            onClick={() => handleNavigate(child.id)}
                            className="block w-full text-left px-4 py-2 rounded-lg text-sm text-[#475569] hover:text-[#06b6d4] hover:bg-gray-50 transition-colors"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}