"use client";
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Mail, Phone, Users, Target, Heart, Award, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Farmer",
    date: "Feb 15, 2024",
    text: "Ahwaan has made finding government schemes so much easier. The platform is user-friendly and helped me discover schemes I didn't even know existed!",
    image: "👨‍🌾"
  },
  {
    name: "Priya Singh",
    role: "Student",
    date: "Feb 10, 2024",
    text: "As a student, I was looking for educational schemes. Ahwaan not only helped me find relevant schemes but also guided me through the application process.",
    image: "👩‍🎓"
  },
  {
    name: "Mohammed Ali",
    role: "Entrepreneur",
    date: "Feb 5, 2024",
    text: "The best part about Ahwaan is how it simplifies complex government schemes into easy-to-understand information. Excellent platform!",
    image: "👨‍💼"
  },
  {
    name: "Aarav Mehta",
    role: "Small Business Owner",
    date: "Jan 28, 2024",
    text: "I was struggling to find government loans for small businesses, and Ahwaan guided me step by step. Amazing service!",
    image: "🏢"
  },
  {
    name: "Neha Sharma",
    role: "Homemaker",
    date: "Jan 20, 2024",
    text: "Ahwaan made it easy for me to find welfare schemes for women. The platform is well-organized and simple to use.",
    image: "👩‍👧"
  },
  {
    name: "Vikas Patel",
    role: "Engineer",
    date: "Jan 15, 2024",
    text: "I found a skill development scheme that helped me get a better job. Thank you, Ahwaan!",
    image: "👷‍♂️"
  },
  {
    name: "Rohit Verma",
    role: "Doctor",
    date: "Jan 10, 2024",
    text: "Government health schemes can be confusing, but Ahwaan provided clear and structured information. Highly recommended!",
    image: "🩺"
  },
  {
    name: "Ananya Sen",
    role: "Social Worker",
    date: "Jan 5, 2024",
    text: "Ahwaan helps connect people to government benefits effortlessly. A great initiative!",
    image: "🤝"
  },
  {
    name: "Suresh Gupta",
    role: "Senior Citizen",
    date: "Dec 28, 2023",
    text: "I found pension-related schemes easily through Ahwaan. The process was so smooth and informative.",
    image: "👴"
  }
];

const stats = [
  { number: "1M+", label: "Users Served", icon: Users },
  { number: "500+", label: "Schemes Listed", icon: Target },
  { number: "95%", label: "Success Rate", icon: Award },
  { number: "24/7", label: "Support Available", icon: Heart }
];

const AboutPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 3) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 3 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span className="text-blue-100">Empowering Millions</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-200"
            >
              About Ahwaan
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative max-w-3xl mx-auto"
            >
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 blur-2xl"></div>
              <p className="text-xl text-blue-100 leading-relaxed relative z-10">
                Empowering citizens with easy access to government schemes and services. 
                Your bridge to a better tomorrow through simplified government initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[180px] hover:bg-white/15 transition-all duration-300"
                >
                  <stat.icon className="h-6 w-6 text-blue-400 mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.number}</h3>
                  <p className="text-sm text-blue-200">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-auto" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C280,84 1160,84 1440,50 L1440,100 L0,100 Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

{/* Mission Section */}
<section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Mission Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ahwaan is your comprehensive platform for discovering and accessing government schemes 
          in India. We bridge the gap between citizens and government initiatives by providing 
          a user-friendly interface to explore, understand, and apply for various schemes.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to ensure that every Indian citizen can easily find and benefit from 
          the numerous government schemes available to them. Whether you're a farmer, student, 
          entrepreneur, or senior citizen, Ahwaan helps you connect with the right opportunities.
        </p>
      </motion.div>

      {/* Stats Section with Smooth Animation and Light Blue Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group bg-white p-6 rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-500 overflow-hidden"
          >
            {/* Light Blue Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-blue-400 opacity-20 blur-2xl rounded-xl"></div>

            <stat.icon className="h-8 w-8 text-blue-400 mb-4 transition-colors duration-500 group-hover:text-white relative z-10" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2 transition-colors duration-500 group-hover:text-white relative z-10">
              {stat.number}
            </h3>
            <p className="text-gray-600 transition-colors duration-500 group-hover:text-white relative z-10">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          What Our Users Say
        </motion.h2>
        <div className="relative flex flex-col items-center">
          {/* Testimonials Carousel */}
          <div className="relative w-full max-w-4xl">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {testimonials.slice(currentTestimonial, currentTestimonial + 3).map((testimonial, index) => (
                <div
                  key={index}
                  className="relative bg-gray-50 p-6 rounded-xl shadow-sm transition-all duration-500 border-2 border-transparent hover:border-blue-500"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{testimonial.image}</span>
                    <div>
                      <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Buttons */}
          <div className="flex items-center mt-6 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentTestimonial / 3 === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentTestimonial(index * 3)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
      
    </div>
  );
};

export default AboutPage;