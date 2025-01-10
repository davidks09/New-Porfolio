import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pt-20 -mt-20 relative overflow-hidden">
      <div className="absolute inset-0 data-grid opacity-20"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
            <span className="gradient-text">David Owusu Sekyere</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6 opacity-90">
            Data Analyst & Business Intelligence Professional
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Passionate about transforming complex data into actionable insights
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <a 
              href="https://github.com/davidks09" 
              className="text-gray-400 hover:text-accent-blue transition-all transform hover:scale-110 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/david-sekyere09" 
              className="text-gray-400 hover:text-accent-blue transition-all transform hover:scale-110 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sekyeredavid01@gmail.com"
              className="text-gray-400 hover:text-accent-blue transition-all transform hover:scale-110 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
        <div className="bg-dark-card rounded-xl shadow-2xl p-8 border border-gray-800 hover-card-effect relative overflow-hidden">
          <div className="absolute inset-0 data-dots"></div>
          <p className="text-gray-300 leading-relaxed relative z-10">
            Data Analyst with a solid background in Business Administration and Big Data Analytics.
            Experienced in Python, SQL, and data visualization, with a proven track record of
            extracting meaningful insights from complex datasets. Recently completed an MSc. in
            Big Data Analytics at Bay Atlantic University.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;