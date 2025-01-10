import React from 'react';

const experiences = [
  {
    title: 'Data Analysis Intern',
    company: 'Red Dot Foundation',
    location: 'Remote',
    period: 'May 2024 – July 2024',
    points: [
      'Executed SQL queries to extract, transform, and analyze data',
      'Developed interactive dashboards using Looker Studio and BigQuery',
      'Conducted in-depth data analysis and produced detailed reports',
      'Onboarded 4+ new organizations',
      'Conducted country-specific data analysis'
    ]
  },
  {
    title: 'Quality Assurance Officer',
    company: 'Ghana National Household Registry (GNHR)',
    location: 'Accra, Ghana',
    period: 'August 2022 – April 2023',
    points: [
      'Ensured data quality and accuracy through validation procedures',
      'Collaborated with data teams to implement quality control measures',
      'Maintained high standards of data integrity'
    ]
  },
  {
    title: 'Junior Analyst',
    company: 'CalBank Head Office',
    location: 'Accra, Ghana',
    period: 'June 2021 – August 2021',
    points: [
      'Identified financial service opportunities',
      'Assisted in developing finance policies and processes',
      'Collaborated with team members to enhance service delivery models'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-dark-card rounded-lg shadow-lg p-6 border border-gray-800 hover:border-accent-blue transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-100">{exp.title}</h3>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-gray-400">{exp.location}</p>
              </div>
              <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;