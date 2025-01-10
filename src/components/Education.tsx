import React from 'react';

const education = [
  {
    degree: 'MSc. Big Data Analytics',
    school: 'Bay Atlantic University',
    location: 'Washington, DC',
    period: 'May 2023 – December 2024',
    achievements: ['President\'s Award Recipient, 2024', 'President\'s List Certificate, 2023']
  },
  {
    degree: 'BSc. Business Administration',
    school: 'Ashesi University',
    location: 'Berekuso, E/R Ghana',
    period: 'September 2018 – July 2022'
  }
];

const Education = () => {
  return (
    <section id="education" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-dark-card rounded-lg shadow-lg p-6 border border-gray-800">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-100">{edu.degree}</h3>
                <p className="text-gray-300">{edu.school}</p>
                <p className="text-gray-400">{edu.location}</p>
              </div>
              <p className="text-gray-400 mt-2 md:mt-0">{edu.period}</p>
            </div>
            {edu.achievements && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-200 mb-2">Achievements</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;