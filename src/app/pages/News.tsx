import { motion } from "motion/react";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";

export default function NewsPage() {
    const newsItems = [
        {
            id: 1,
            title: "Lab Awarded New Research Grant for EV Technologies",
            date: "March 15, 2026",
            summary: "Our EM&D Lab has successfully secured a major grant to further research in advanced power converters for electric vehicles.",
            category: "Grant",
            link: "#"
        },
        {
            id: 2,
            title: "Prof. Sharma Publishes Breakthrough Paper in IEEE Transactions",
            date: "February 28, 2026",
            summary: "A new approach to medium voltage drive systems has been published, paving the way for more efficient industrial applications.",
            category: "Publication",
            link: "#"
        },
        {
            id: 3,
            title: "New Battery Testing Facility Opened",
            date: "January 10, 2026",
            summary: "We are excited to announce the opening of our state-of-the-art battery testing facility, expanding our capabilities in energy storage.",
            category: "Facility",
            link: "#"
        }
    ];

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">Lab News</h1>
                    <p className="text-xl text-[#64748b] max-w-3xl">
                        Stay updated with the latest announcements, publications, and milestones from the EM&D Laboratory.
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-3 py-1 bg-[#06b6d4]/10 text-[#06b6d4] text-sm font-medium rounded-full">
                                            {item.category}
                                        </span>
                                        <span className="flex items-center text-sm text-[#64748b] gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {item.date}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#0f172a] mb-3">{item.title}</h2>
                                    <p className="text-[#475569] leading-relaxed mb-4 md:mb-0">
                                        {item.summary}
                                    </p>
                                </div>
                                <div className="shrink-0 pt-4 md:pt-0">
                                    <a
                                        href={item.link}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0f172a] text-white rounded-lg hover:bg-[#1e293b] transition-colors"
                                    >
                                        Read Info
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
