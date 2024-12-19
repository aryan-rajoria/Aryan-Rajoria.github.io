import React from 'react';
import EducationItem, { EducationItemProps } from './education/EducationItem';

const Education: React.FC = () => {
  const educationData: EducationItemProps[] = [
    {
      degree: 'Master of Science in Cybersecurity',
      institution: 'Georgia Institute of Technolgoy',
      graduationYear: '2025',
      description:
        'Information Security Policies and Strategies, Introduction to Information Security, Applied Cryptography, Network Security, Secure Computer Systems, Advanced Topics in Privacy.',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Bennett University',
      graduationYear: '2023',
      description:
        'Data Structures and Algorithms in C++, Databases, Operating Systems, Computer Architecture, Cloud computing.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
          Education
        </h2>
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <EducationItem key={index} {...education} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;