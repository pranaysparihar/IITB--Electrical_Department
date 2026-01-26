import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { FileText, Award, BookOpen, ExternalLink } from 'lucide-react';

export function PublicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const publications = [
    {
      title: 'Efficient Transformer Architectures for Low-Resource Language Understanding',
      authors: 'Watson, E., Chen, S., Rodriguez, M.',
      venue: 'ACL 2024',
      year: '2024',
      type: 'conference',
      citations: 45,
    },
    {
      title: 'Federated Learning with Differential Privacy: A Comprehensive Survey',
      authors: 'Mohammed, A., Liu, J., Chen, S.',
      venue: 'IEEE Transactions on Neural Networks and Learning Systems',
      year: '2024',
      type: 'journal',
      citations: 78,
    },
    {
      title: 'Multi-Agent Reinforcement Learning for Disaster Response Coordination',
      authors: 'Gonzalez, M., Rodriguez, M., Park, R.',
      venue: 'ICRA 2024',
      year: '2024',
      type: 'conference',
      citations: 32,
    },
    {
      title: 'Explainable AI for Medical Image Analysis: Methods and Applications',
      authors: 'Patel, P., Chen, S., Watson, E.',
      venue: 'Nature Machine Intelligence',
      year: '2023',
      type: 'journal',
      citations: 156,
    },
    {
      title: 'Energy-Efficient Neural Architecture Search for Edge Devices',
      authors: 'Liu, J., Kim, A., Chen, L.',
      venue: 'NeurIPS 2023',
      year: '2023',
      type: 'conference',
      citations: 89,
    },
    {
      title: 'Quantum Algorithms for Combinatorial Optimization in Drug Discovery',
      authors: 'Kim, A., Patel, P., Chen, S.',
      venue: 'Quantum Information Processing',
      year: '2023',
      type: 'journal',
      citations: 43,
    },
    {
      title: 'Real-time 3D Scene Reconstruction Using Multi-View Geometry',
      authors: 'Thompson, D., Rodriguez, M., Chen, S.',
      venue: 'CVPR 2023',
      year: '2023',
      type: 'conference',
      citations: 134,
    },
    {
      title: 'Privacy-Preserving Deep Learning: Techniques and Trade-offs',
      authors: 'Mohammed, A., Liu, J., Watson, E.',
      venue: 'ACM Computing Surveys',
      year: '2022',
      type: 'journal',
      citations: 267,
    },
  ];

  const awards = [
    {
      title: 'Best Paper Award',
      event: 'International Conference on Machine Learning',
      year: '2023',
      recipient: 'Dr. Sarah Chen',
    },
    {
      title: 'Outstanding Research Award',
      event: 'IEEE Robotics and Automation Society',
      year: '2023',
      recipient: 'Dr. Michael Rodriguez',
    },
    {
      title: 'Young Investigator Award',
      event: 'National Science Foundation',
      year: '2022',
      recipient: 'Dr. Emily Watson',
    },
  ];

  const years = ['all', ...Array.from(new Set(publications.map((p) => p.year)))];
  const filteredPublications =
    selectedYear === 'all'
      ? publications
      : publications.filter((p) => p.year === selectedYear);

  return (
    <section ref={ref} id="publications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Publications & Awards
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Our contributions to the scientific community and recognition of excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Publications List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-[#0f172a]">Recent Publications</h3>
              
              {/* Year Filter */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-[#475569] bg-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              {filteredPublications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-[#06b6d4]/10 transition-all hover:border-[#06b6d4]/50"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                        pub.type === 'journal'
                          ? 'bg-purple-100 text-purple-600'
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {pub.type === 'journal' ? (
                        <BookOpen className="w-5 h-5" />
                      ) : (
                        <FileText className="w-5 h-5" />
                      )}
                    </div>

                    <div className="flex-1">
                      <h4 className="font-semibold text-[#0f172a] mb-2 group-hover:text-[#06b6d4] transition-colors leading-snug">
                        {pub.title}
                      </h4>
                      <p className="text-sm text-[#64748b] mb-2">{pub.authors}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-[#475569] font-medium">{pub.venue}</span>
                        <span className="text-[#94a3b8]">•</span>
                        <span className="text-[#94a3b8]">{pub.year}</span>
                        <span className="text-[#94a3b8]">•</span>
                        <span className="text-[#94a3b8]">{pub.citations} citations</span>
                      </div>
                    </div>

                    <button className="flex-shrink-0 text-[#64748b] hover:text-[#06b6d4] transition-colors opacity-0 group-hover:opacity-100">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards Sidebar */}
          <div>
            <h3 className="text-2xl font-semibold text-[#0f172a] mb-6">Recent Awards</h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-[#06b6d4]/10 to-white border border-[#06b6d4]/20 rounded-xl p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-6 h-6 text-[#06b6d4] flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#0f172a] mb-1">{award.title}</h4>
                      <p className="text-sm text-[#475569] mb-2">{award.event}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#64748b]">{award.recipient}</span>
                    <span className="text-[#06b6d4] font-medium">{award.year}</span>
                  </div>
                </motion.div>
              ))}

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="bg-[#0f172a] text-white rounded-xl p-6 mt-6"
              >
                <h4 className="font-semibold mb-4">Publication Metrics</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Total Publications</span>
                    <span className="text-xl font-bold text-[#06b6d4]">150+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Total Citations</span>
                    <span className="text-xl font-bold text-[#06b6d4]">3,200+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">H-Index</span>
                    <span className="text-xl font-bold text-[#06b6d4]">42</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
