import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, ArrowRight, Users, Newspaper, Trophy } from 'lucide-react';

export function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredNews = {
    title: 'Lab Receives $5M Grant for AI Safety Research',
    date: 'January 15, 2026',
    category: 'Funding',
    description:
      'Our lab has been awarded a major grant from the National Science Foundation to lead groundbreaking research on AI safety and alignment. This multi-year project will focus on developing robust frameworks for ensuring AI systems behave reliably and ethically in real-world scenarios.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
  };

  const newsItems = [
    {
      title: 'PhD Student Wins Best Paper Award at NeurIPS',
      date: 'December 10, 2025',
      category: 'Achievement',
      icon: Trophy,
      description:
        'Maria Gonzalez received the Best Paper Award for her work on multi-agent reinforcement learning.',
    },
    {
      title: 'Successful Workshop on Quantum Machine Learning',
      date: 'November 22, 2025',
      category: 'Event',
      icon: Users,
      description:
        'Over 200 researchers attended our workshop exploring the intersection of quantum computing and ML.',
    },
    {
      title: 'New Collaboration with Tech Industry Leaders',
      date: 'October 5, 2025',
      category: 'Partnership',
      icon: Newspaper,
      description:
        'Announcing strategic partnerships with Google, Microsoft, and IBM for edge computing research.',
    },
    {
      title: 'Lab Featured in Nature Machine Intelligence',
      date: 'September 18, 2025',
      category: 'Publication',
      icon: Newspaper,
      description:
        'Our research on explainable AI for healthcare was featured in a special issue on trustworthy AI.',
    },
    {
      title: 'International Conference on Robotics Hosted',
      date: 'August 14, 2025',
      category: 'Event',
      icon: Users,
      description:
        'Successfully hosted ICRA 2025 with over 1,500 participants from 40 countries.',
    },
    {
      title: 'Graduate Students Secure NSF Fellowships',
      date: 'July 20, 2025',
      category: 'Achievement',
      icon: Trophy,
      description:
        'Three of our PhD students were awarded prestigious NSF Graduate Research Fellowships.',
    },
  ];

  return (
    <section ref={ref} id="news" className="py-24 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            News & Events
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and announcements
          </p>
        </motion.div>

        {/* Featured News */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#06b6d4]/20 transition-all border border-gray-200 hover:border-[#06b6d4]/50">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-[#06b6d4] text-white rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-[#64748b] mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredNews.date}</span>
                  <span className="w-1 h-1 bg-[#94a3b8] rounded-full" />
                  <span className="text-[#06b6d4]">{featuredNews.category}</span>
                </div>

                <h3 className="text-3xl font-bold text-[#0f172a] mb-4 group-hover:text-[#06b6d4] transition-colors">
                  {featuredNews.title}
                </h3>

                <p className="text-[#475569] leading-relaxed mb-6">
                  {featuredNews.description}
                </p>

                <button className="inline-flex items-center gap-2 text-[#06b6d4] hover:text-[#0891b2] font-medium transition-colors group/btn">
                  Read full article
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-[#06b6d4]/10 transition-all hover:border-[#06b6d4]/50 cursor-pointer"
            >
              {/* Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#06b6d4]/20 to-[#06b6d4]/5 rounded-lg flex items-center justify-center group-hover:from-[#06b6d4]/30 group-hover:to-[#06b6d4]/10 transition-all">
                  <item.icon className="w-6 h-6 text-[#06b6d4]" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 bg-[#f8fafc] text-[#475569] rounded text-xs font-medium mb-2">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-[#0f172a] mb-2 group-hover:text-[#06b6d4] transition-colors leading-snug">
                {item.title}
              </h3>

              <p className="text-sm text-[#475569] mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-xs text-[#94a3b8] pt-4 border-t border-gray-100">
                <Calendar className="w-3 h-3" />
                <span>{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#0f172a] text-white rounded-lg hover:bg-[#1e293b] transition-all shadow-lg hover:shadow-xl">
            View All News
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
