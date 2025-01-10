import React from 'react';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'R', 'SQL']
  },
  {
    title: 'Data Tools',
    skills: ['Hadoop', 'NoSQL', 'MapReduce']
  },
  {
    title: 'Data Visualization',
    skills: ['Looker Studio', 'BigQuery', 'Visio', 'Tableau']
  },
  {
    title: 'Other Skills',
    skills: [
      'Microsoft Office',
      'Google Suite',
      'Statistical Methods',
      'Predictive Modeling',
      'Collaborative Tools',
      'Communication',
      'Leadership'
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="pt-20 -mt-20">
      <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-dark-card rounded-lg shadow-lg p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-dark-lighter text-accent-blue px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;