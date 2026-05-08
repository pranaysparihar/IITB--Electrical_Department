import { motion } from "motion/react";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";

export default function NewsPage() {
    const newsItems = [
        {
            id: 1,
            title: "Pleased to see E-RIDES featured in RISE@IITB (IRCC Newsletter, 2026 Issue 1)",
            date: "May 1, 2026",
            summary: "The Research and Innovation in Sciences and Engineering (RISE@IITB) newsletter by the Industrial Research & Consultancy Centre highlights the breadth of cutting-edge work at IIT Bombay, and we’re excited to see the E-RIDES initiative showcased as part of this innovation ecosystem.",
            category: "Featured",
            link: "#"
        },
        {
            id: 2,
            title: "Register Now | Power Electronics in Practice: From Magnetics to Gate Drivers",
            date: "April 25, 2026",
            summary: "Hands-on, simulation-based learning with IIT Bombay Faculty. July 4–25, 2026 (Weekends). Earn an IIT Bombay Certificate.",
            category: "Course",
            link: "#"
        },
        {
            id: 3,
            title: "E-Mobility Industry–Academia Conclave",
            date: "April 24, 2026",
            summary: "Gain insights into 2026 EV powertrain requirements, safety, and power electronics. Registration: https://lnkd.in/gnjq-z4c",
            category: "Event",
            link: "https://lnkd.in/gnjq-z4c"
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
                        Stay updated with the latest announcements, publications, and milestones from the HiPER Laboratory on our <a href="https://www.linkedin.com/company/c1973-ev-powertrain-lab/" target="_blank" rel="noopener noreferrer" className="text-[#06b6d4] hover:underline font-medium">LinkedIn</a>.
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
