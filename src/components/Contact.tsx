import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Contact</h2>
      <div className="max-w-2xl mx-auto">
        <div className="bg-dark-card rounded-lg shadow-lg p-8 border border-gray-800">
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new opportunities and collaborations.
            Feel free to reach out through any of the following channels:
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sekyeredavid01@gmail.com"
              className="flex flex-col items-center text-gray-400 hover:text-accent-blue transition-colors cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={24} className="mb-2" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/davidks09"
              className="flex flex-col items-center text-gray-400 hover:text-accent-blue transition-colors cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} className="mb-2" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/david-sekyere09"
              className="flex flex-col items-center text-gray-400 hover:text-accent-blue transition-colors cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="mb-2" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;