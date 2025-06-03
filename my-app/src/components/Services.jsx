import { motion } from 'framer-motion';
import { Code, Briefcase, BarChart2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Tech Recruitment",
      description: "We specialize in connecting companies with top-tier tech talent across all levels and specializations, from junior developers to principal engineers.",
      icon: <Code className="w-10 h-10" />,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Executive Search",
      description: "Finding visionary leaders who can drive your organization forward with our comprehensive C-level and leadership hiring solutions.",
      icon: <Briefcase className="w-10 h-10" />,
      color: "bg-rose-100 text-rose-600"
    },
    {
      title: "Talent Consulting",
      description: "Strategic advice to optimize your hiring processes, employer branding, and build high-performing teams that scale with your business.",
      icon: <BarChart2 className="w-10 h-10" />,
      color: "bg-teal-100 text-teal-600"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-100 to-transparent opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-indigo-600">Talent Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg transform group-hover:-translate-y-2 transition-all duration-300" />
              <div className="relative h-full bg-white p-8 rounded-2xl border border-gray-100 group-hover:border-indigo-100 transition-all duration-300 flex flex-col">
                <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <div className="mt-auto">
                  <button className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
                    Learn more
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Explore all services
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;