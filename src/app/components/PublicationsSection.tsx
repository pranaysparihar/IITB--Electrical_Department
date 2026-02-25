import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { FileText, Award, BookOpen, ExternalLink, ScrollText, X, Download } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  venue?: string;
  assignee?: string;
  year: string;
  citations?: number;
  status?: string;
  number?: string;
  type: 'journal' | 'conference' | 'patent';
  abstract?: string;
}

export function PublicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);

  const abstractMock = "This is a detailed abstract providing an overview of the research findings, methodologies used, and the overall impact of the work presented in this publication. It discusses the theoretical underpinnings and provides comprehensive experimental results that validate the proposed approach.";

  const journals: Publication[] = [
    {
      title: 'Federated Learning with Differential Privacy: A Comprehensive Survey',
      authors: 'Mohammed, A., Liu, J., Chen, S.',
      venue: 'IEEE Transactions on Neural Networks and Learning Systems',
      year: '2024',
      citations: 78,
      type: 'journal',
      abstract: abstractMock
    },
    {
      title: 'Explainable AI for Medical Image Analysis: Methods and Applications',
      authors: 'Patel, P., Chen, S., Watson, E.',
      venue: 'Nature Machine Intelligence',
      year: '2023',
      citations: 156,
      type: 'journal',
      abstract: abstractMock
    },
    {
      title: 'Quantum Algorithms for Combinatorial Optimization in Drug Discovery',
      authors: 'Kim, A., Patel, P., Chen, S.',
      venue: 'Quantum Information Processing',
      year: '2023',
      citations: 43,
      type: 'journal',
      abstract: abstractMock
    },
    {
      title: 'Privacy-Preserving Deep Learning: Techniques and Trade-offs',
      authors: 'Mohammed, A., Liu, J., Watson, E.',
      venue: 'ACM Computing Surveys',
      year: '2022',
      citations: 267,
      type: 'journal',
      abstract: abstractMock
    },
  ];

  const conferences: Publication[] = [
    {
      title: 'Efficient Transformer Architectures for Low-Resource Language Understanding',
      authors: 'Watson, E., Chen, S., Rodriguez, M.',
      venue: 'ACL 2024',
      year: '2024',
      citations: 45,
      type: 'conference',
      abstract: abstractMock
    },
    {
      title: 'Multi-Agent Reinforcement Learning for Disaster Response Coordination',
      authors: 'Gonzalez, M., Rodriguez, M., Park, R.',
      venue: 'ICRA 2024',
      year: '2024',
      citations: 32,
      type: 'conference',
      abstract: abstractMock
    },
    {
      title: 'Energy-Efficient Neural Architecture Search for Edge Devices',
      authors: 'Liu, J., Kim, A., Chen, L.',
      venue: 'NeurIPS 2023',
      year: '2023',
      citations: 89,
      type: 'conference',
      abstract: abstractMock
    },
    {
      title: 'Real-time 3D Scene Reconstruction Using Multi-View Geometry',
      authors: 'Thompson, D., Rodriguez, M., Chen, S.',
      venue: 'CVPR 2023',
      year: '2023',
      citations: 134,
      type: 'conference',
      abstract: abstractMock
    },
  ];

  const patents: Publication[] = [
    {
      title: "System and Method for Autonomous Drone Navigation in GPS-Denied Environments",
      number: "US 11,234,567 B2",
      assignee: "IIT Bombay",
      year: "2024",
      status: "Granted",
      authors: "Patel, P., Chen, S.",
      type: 'patent',
      abstract: abstractMock
    },
    {
      title: "Novel Semiconductor Device Structure for High-Frequency Applications",
      number: "US 2023/0123456 A1",
      assignee: "IIT Bombay",
      year: "2023",
      status: "Published",
      authors: "Kim, A.",
      type: 'patent',
      abstract: abstractMock
    }
  ];

  const handleOpenPdf = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "_blank", "noopener,noreferrer");
  };

  const PublicationCard = ({ pub, icon: Icon, colorClass }: { pub: Publication, icon: any, colorClass: string }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      onClick={() => setSelectedPub(pub)}
      className="cursor-pointer group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-[#06b6d4]/10 transition-all hover:border-[#06b6d4]/50 mb-4"
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

        <button
          onClick={pub.type === 'journal' ? handleOpenPdf : undefined}
          className="flex-shrink-0 text-[#64748b] hover:text-[#06b6d4] transition-colors opacity-0 group-hover:opacity-100"
        >
          {pub.type === 'journal' ? (
            <Download className="w-5 h-5" title="Download Paper" />
          ) : (
            <ExternalLink className="w-5 h-5" title="View Details" />
          )}
        </button>
      </div>
    </motion.div>
  );

  return (
    <>
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

      {/* Modal Popup for Details */}
      <AnimatePresence>
        {selectedPub && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPub(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-[101]"
            >
              <div className="p-6 md:p-8">
                <button
                  onClick={() => setSelectedPub(null)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3 className="text-2xl font-bold text-[#0f172a] mb-4 pr-8">
                  {selectedPub.title}
                </h3>

                {selectedPub.authors && (
                  <p className="text-lg text-gray-700 mb-6 font-medium">
                    {selectedPub.authors}
                  </p>
                )}

                <div className="flex flex-wrap gap-3 mb-6 pb-6 border-b border-gray-100">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {selectedPub.year}
                  </span>
                  {selectedPub.type === 'journal' && (
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      Journal
                    </span>
                  )}
                  {selectedPub.type === 'conference' && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      Conference
                    </span>
                  )}
                  {selectedPub.type === 'patent' && (
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                      Patent
                    </span>
                  )}
                  {selectedPub.venue && (
                    <span className="px-3 py-1 bg-[#06b6d4]/10 text-[#0891b2] rounded-full text-sm font-medium">
                      {selectedPub.venue}
                    </span>
                  )}
                  {selectedPub.status && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {selectedPub.status}
                    </span>
                  )}
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-[#0f172a] mb-3">Abstract</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedPub.abstract}
                  </p>
                </div>

                <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedPub(null)}
                    className="px-6 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    Close
                  </button>
                  {selectedPub.type === 'journal' && (
                    <button
                      onClick={handleOpenPdf}
                      className="px-6 py-2 rounded-lg font-medium bg-[#06b6d4] text-white hover:bg-[#0891b2] transition-colors shadow-lg shadow-[#06b6d4]/20 flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Read Full Paper
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
