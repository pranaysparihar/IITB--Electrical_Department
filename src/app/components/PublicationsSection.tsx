import { motion, AnimatePresence, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { FileText, Award, BookOpen, ExternalLink, ScrollText, X, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { journals, conferences, patents, Publication } from '../data/publications';

export function PublicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedPub, setSelectedPub] = useState<Publication | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Visibility states
  const [showAllJournals, setShowAllJournals] = useState(false);
  const [showAllConferences, setShowAllConferences] = useState(false);
  const [showAllPatents, setShowAllPatents] = useState(false);

  const INITIAL_VISIBLE = 4;

  const filterPubs = (pubs: Publication[]) => {
    return pubs.filter(pub => 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.year.includes(searchQuery) ||
      pub.venue?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredJournals = filterPubs(journals);
  const filteredConferences = filterPubs(conferences);
  const filteredPatents = filterPubs(patents);

  const visibleJournals = showAllJournals ? filteredJournals : filteredJournals.slice(0, INITIAL_VISIBLE);
  const visibleConferences = showAllConferences ? filteredConferences : filteredConferences.slice(0, INITIAL_VISIBLE);
  const visiblePatents = showAllPatents ? filteredPatents : filteredPatents.slice(0, INITIAL_VISIBLE);

  const handleOpenLink = (e: React.MouseEvent, link?: string) => {
    e.stopPropagation();
    if (link && link !== "#" && link !== "—") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
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
            {pub.status && (
              <>
                <span className="text-[#94a3b8]">•</span>
                <span className="text-[#06b6d4] font-medium">{pub.status}</span>
              </>
            )}
          </div>
        </div>

        <button
          onClick={(e) => handleOpenLink(e, pub.link)}
          className={`flex-shrink-0 text-[#64748b] hover:text-[#06b6d4] transition-colors opacity-0 group-hover:opacity-100 ${(!pub.link || pub.link === "#" || pub.link === "—") ? "pointer-events-none opacity-20" : ""}`}
        >
          <ExternalLink className="w-5 h-5" />
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
            <p className="text-xl text-[#64748b] max-w-3xl mx-auto mb-8">
              Our contributions to the scientific community
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-[#94a3b8]" />
              </div>
              <input
                type="text"
                placeholder="Search publications by title, author, or year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/20 focus:border-[#06b6d4] transition-all text-[#0f172a] shadow-sm"
              />
            </div>
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
                  {visibleJournals.map((pub, index) => (
                    <PublicationCard key={index} pub={pub} icon={BookOpen} colorClass="bg-purple-100 text-purple-600" />
                  ))}
                </div>
                {filteredJournals.length > INITIAL_VISIBLE && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={() => setShowAllJournals(!showAllJournals)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 text-[#475569] font-medium hover:bg-gray-50 hover:border-[#06b6d4] hover:text-[#06b6d4] transition-all"
                    >
                      {showAllJournals ? (
                        <>Show Less <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>View All {filteredJournals.length} Journals <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Conferences */}
              <div id="publications-conferences" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
                  <FileText className="text-[#06b6d4] w-6 h-6" />
                  <h3 className="text-2xl font-bold text-[#0f172a]">Conferences</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {visibleConferences.map((pub, index) => (
                    <PublicationCard key={index} pub={pub} icon={FileText} colorClass="bg-blue-100 text-blue-600" />
                  ))}
                </div>
                {filteredConferences.length > INITIAL_VISIBLE && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={() => setShowAllConferences(!showAllConferences)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 text-[#475569] font-medium hover:bg-gray-50 hover:border-[#06b6d4] hover:text-[#06b6d4] transition-all"
                    >
                      {showAllConferences ? (
                        <>Show Less <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>View All {filteredConferences.length} Conferences <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Patents */}
              <div id="publications-patents" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
                  <ScrollText className="text-[#06b6d4] w-6 h-6" />
                  <h3 className="text-2xl font-bold text-[#0f172a]">Patents</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {visiblePatents.map((pub, index) => (
                    <PublicationCard key={index} pub={pub} icon={Award} colorClass="bg-orange-100 text-orange-600" />
                  ))}
                </div>
                {filteredPatents.length > INITIAL_VISIBLE && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={() => setShowAllPatents(!showAllPatents)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 text-[#475569] font-medium hover:bg-gray-50 hover:border-[#06b6d4] hover:text-[#06b6d4] transition-all"
                    >
                      {showAllPatents ? (
                        <>Show Less <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>View All {filteredPatents.length} Patents <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>
                  </div>
                )}
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
                  {selectedPub.link && selectedPub.link !== "#" && selectedPub.link !== "—" && (
                    <button
                      onClick={(e) => handleOpenLink(e, selectedPub.link)}
                      className="px-6 py-2 rounded-lg font-medium bg-[#06b6d4] text-white hover:bg-[#0891b2] transition-colors shadow-lg shadow-[#06b6d4]/20 flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Full Publication
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
