import React, { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';

const projects = [
  {
    title: "Housing Affordability Analysis",
    subtitle: "Data Analysis & Visualization Project", 
    description: "Analyzed housing affordability trends across major US metropolitan areas using Python and data visualization tools.",
    fullDescription: "Comprehensive analysis of housing affordability trends across 50 major US metropolitan areas, incorporating factors such as median home prices, household income, and cost of living indices. The project provides interactive visualizations and predictive insights for potential homebuyers and policymakers.",
    tags: ["Data Analysis", "Python", "Visualization"],
    highlights: [
      "Analyzed data from 50 major US metropolitan areas",
      "Created interactive dashboards using Plotly and Streamlit", 
      "Implemented machine learning models to predict future affordability trends",
      "Generated comprehensive reports with actionable insights"
    ],
    techStack: {
      "Languages": ["Python", "SQL"],
      "Libraries": ["Pandas", "NumPy", "Scikit-learn", "Plotly"],
      "Tools": ["Jupyter Notebook", "Streamlit", "Git"]
    },
    links: {
      github: "google.com",
      live: "#"
    }
  },
  {
    title: "Library Management System",
    subtitle: "Database Design & Implementation",
    description: "Designed and implemented a relational database using MySQL Workbench for library management.",
    fullDescription: "A comprehensive library management system built with MySQL, featuring robust database design and efficient query optimization. The system handles book inventory, patron management, and transaction tracking with a focus on data integrity and performance.",
    tags: ["MySQL", "Database Design", "Security"],
    highlights: [
      "Designed normalized database schema with 10+ interconnected tables",
      "Implemented stored procedures for common operations",
      "Created triggers for automated inventory updates",
      "Developed comprehensive security measures and access controls"
    ],
    techStack: {
      "Database": ["MySQL"],
      "Tools": ["MySQL Workbench", "Git"],
      "Testing": ["MySQL Unit Testing"]
    },
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Weather Data Analysis Bot",
    subtitle: "Telegram Bot Development",
    description: "Developed a Telegram bot using Python for real-time weather data analysis and visualization.",
    fullDescription: "An interactive Telegram bot that provides real-time weather data analysis and visualization. The bot fetches data from weather APIs, processes it, and generates custom visualizations for users, making weather information easily accessible and understandable.",
    tags: ["Python", "API Integration", "Bot Development"],
    highlights: [
      "Integrated multiple weather data APIs",
      "Implemented data visualization using Matplotlib",
      "Created interactive command system",
      "Deployed bot with 24/7 availability"
    ],
    techStack: {
      "Language": ["Python"],
      "Libraries": ["python-telegram-bot", "Matplotlib", "Requests"],
      "APIs": ["Weatherbit API"],
      "Deployment": ["Heroku"]
    },
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Product Performance Analysis",
    subtitle: "Business Intelligence Project",
    description: "Led a business intelligence project analyzing product performance to support strategic decision-making.",
    fullDescription: "A comprehensive business intelligence project focused on analyzing product performance across multiple retail channels. The analysis includes sales trends, customer behavior patterns, and predictive modeling to support data-driven decision-making.",
    tags: ["Business Intelligence", "Data Analysis", "Visualization"],
    highlights: [
      "Analyzed sales data from multiple retail channels",
      "Created interactive dashboards using Power BI",
      "Developed predictive models for sales forecasting",
      "Generated actionable insights for stakeholders"
    ],
    techStack: {
      "Tools": ["Power BI", "Excel"],
      "Languages": ["DAX", "M", "SQL"],
      "Visualization": ["Power BI Desktop", "Power BI Service"]
    },
    links: {
      github: "#",
      live: "#"
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-dark-card rounded-lg shadow-lg overflow-hidden border border-gray-800 hover:border-accent-blue transition-all duration-300 hover-card-effect"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="bg-dark-lighter text-accent-blue px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <a
                    href={project.links.github}
                    className="text-gray-400 hover:text-accent-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.links.live}
                    className="text-gray-400 hover:text-accent-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-accent-blue hover:text-blue-300 transition-colors text-sm"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-dark-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">{selectedProject.title}</h3>
                  <p className="text-gray-400">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-accent-blue transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-100 mb-2">Overview</h4>
                  <p className="text-gray-300">{selectedProject.fullDescription}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-100 mb-2">Key Highlights</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-100 mb-2">Tech Stack</h4>
                  <div className="space-y-2">
                    {Object.entries(selectedProject.techStack).map(([category, items]) => (
                      <div key={category}>
                        <h5 className="text-gray-400 font-medium">{category}:</h5>
                        <div className="flex flex-wrap gap-2">
                          {items.map((item, idx) => (
                            <span
                              key={idx}
                              className="bg-dark-lighter text-accent-blue px-3 py-1 rounded-full text-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <a
                    href={selectedProject.links.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-accent-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  <a
                    href={selectedProject.links.live}
                    className="flex items-center gap-2 text-gray-300 hover:text-accent-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
