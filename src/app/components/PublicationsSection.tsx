import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { FileText, Award, BookOpen, ExternalLink, ScrollText } from 'lucide-react';

export function PublicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const journals = [
    {
      title: 'Federated Learning with Differential Privacy: A Comprehensive Survey',
      authors: 'Mohammed, A., Liu, J., Chen, S.',
      venue: 'IEEE Transactions on Neural Networks and Learning Systems',
      year: '2024',
      citations: 78,
    },
    {
      title: 'Explainable AI for Medical Image Analysis: Methods and Applications',
      authors: 'Patel, P., Chen, S., Watson, E.',
      venue: 'Nature Machine Intelligence',
      year: '2023',
      citations: 156,
    },
    {
      title: 'Quantum Algorithms for Combinatorial Optimization in Drug Discovery',
      authors: 'Kim, A., Patel, P., Chen, S.',
      venue: 'Quantum Information Processing',
      year: '2023',
      citations: 43,
    },
    {
      title: 'Privacy-Preserving Deep Learning: Techniques and Trade-offs',
      authors: 'Mohammed, A., Liu, J., Watson, E.',
      venue: 'ACM Computing Surveys',
      year: '2022',
      citations: 267,
    },
  ];

  const conferences = [
    {
      title: 'Efficient Transformer Architectures for Low-Resource Language Understanding',
      authors: 'Watson, E., Chen, S., Rodriguez, M.',
      venue: 'ACL 2024',
      year: '2024',
      citations: 45,
    },
    {
      title: 'Multi-Agent Reinforcement Learning for Disaster Response Coordination',
      authors: 'Gonzalez, M., Rodriguez, M., Park, R.',
      venue: 'ICRA 2024',
      year: '2024',
      citations: 32,
    },
    {
      title: 'Energy-Efficient Neural Architecture Search for Edge Devices',
      authors: 'Liu, J., Kim, A., Chen, L.',
      venue: 'NeurIPS 2023',
      year: '2023',
      citations: 89,
    },
    {
      title: 'Real-time 3D Scene Reconstruction Using Multi-View Geometry',
      authors: 'Thompson, D., Rodriguez, M., Chen, S.',
      venue: 'CVPR 2023',
      year: '2023',
      citations: 134,
    },
  ];

  const patents = [
    {
      title: "System and Method for Autonomous Drone Navigation in GPS-Denied Environments",
      number: "US 11,234,567 B2",
      assignee: "IIT Bombay",
      year: "2024",
      status: "Granted"
    },
    {
      title: "Novel Semiconductor Device Structure for High-Frequency Applications",
      number: "US 2023/0123456 A1",
      assignee: "IIT Bombay",
      year: "2023",
      status: "Published"
    }
  ];

  const PublicationCard = ({ pub, icon: Icon, colorClass }: { pub: any, icon: any, colorClass: string }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-[#06b6d4]/10 transition-all hover:border-[#06b6d4]/50 mb-4"
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}>
          <Icon className="w-5 h-5" />
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-[#0f172a] mb-2 group-hover:text-[#06b6d4] transition-colors leading-snug">
            {pub.title}
          </h4>
          {pub.authors && <p className="text-sm text-[#64748b] mb-2">{pub.authors}</p>}
          {pub.number && <p className="text-sm text-[#64748b] mb-2 font-mono">{pub.number}</p>}

          <div className="flex items-center gap-4 text-sm flex-wrap">
            {pub.venue && <span className="text-[#475569] font-medium">{pub.venue}</span>}
            {pub.assignee && <span className="text-[#475569] font-medium">{pub.assignee}</span>}
            <span className="text-[#94a3b8]">•</span>
            <span className="text-[#94a3b8]">{pub.year}</span>
            {pub.citations !== undefined && (
              <>
                <span className="text-[#94a3b8]">•</span>
                <span className="text-[#94a3b8]">{pub.citations} citations</span>
              </>
            )}
            {pub.status && (
              <>
                <span className="text-[#94a3b8]">•</span>
                <span className="text-[#06b6d4] font-medium">{pub.status}</span>
              </>
            )}
          </div>
        </div>

        <button className="flex-shrink-0 text-[#64748b] hover:text-[#06b6d4] transition-colors opacity-0 group-hover:opacity-100">
          <ExternalLink className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );

  return (
    <section ref={ref} id="publications" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Publications
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Our contributions to the scientific community
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-3 space-y-16">
            {/* Journals */}
            <div id="publications-journals" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
                <BookOpen className="text-[#06b6d4] w-6 h-6" />
                <h3 className="text-2xl font-bold text-[#0f172a]">Journals</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {journals.map((pub, index) => (
                  <PublicationCard key={index} pub={pub} icon={BookOpen} colorClass="bg-purple-100 text-purple-600" />
                ))}
              </div>
            </div>

            {/* Conferences */}
            <div id="publications-conferences" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
                <FileText className="text-[#06b6d4] w-6 h-6" />
                <h3 className="text-2xl font-bold text-[#0f172a]">Conferences</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {conferences.map((pub, index) => (
                  <PublicationCard key={index} pub={pub} icon={FileText} colorClass="bg-blue-100 text-blue-600" />
                ))}
              </div>
            </div>

            {/* Patents */}
            <div id="publications-patents" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
                <ScrollText className="text-[#06b6d4] w-6 h-6" />
                <h3 className="text-2xl font-bold text-[#0f172a]">Patents</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {patents.map((pub, index) => (
                  <PublicationCard key={index} pub={pub} icon={Award} colorClass="bg-orange-100 text-orange-600" />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
