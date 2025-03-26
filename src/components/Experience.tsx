import React from 'react';
import ExperienceItem from './experience/ExperienceItem';
import { ExperienceItemProps } from './experience/ExperienceItem';

const Experience: React.FC = () => {
  const experienceData: ExperienceItemProps[] = [
    {
      title: 'Open Source Developer / Security Researcher',
      company: 'OWASP & AppThreat',
      date: 'Feb 2024 - Present',
      location: 'Atlanta, GA (Remote)',
      responsibilities: [
        'Designed and implemented key enhancements to cdxgen and dep-scan, increasing the supported package managers and improving the number of dependencies captured by over 33%, facilitating compliance with NIST RMF.',
        'Developed CycloneDX compliant Software Bills of Materials (SBOMs) for multiple projects with different dependencies. Enhanced tool capabilities by adding various package managers, significantly improving capability to compile comprehensive dependency lists.',
        'Enhanced blint by developing a feature to identify internal and external symbols and symbol tables (symtabs) in Rust and C/C++ binaries, improving the tool’s ability to analyze binary structure and dependencies for enhanced security assessments',
      ],
      current: true,
    },
    {
      title: 'Research Intern',
      company: 'Georgia Institute of Technology',
      date: 'Sep 2022 - May 2023',
      location: 'Atlanta, GA',
      responsibilities: [
        'Developed Open-Source Database System to optimize storage and hardware utilization for AI-driven applications.',
        'Authored query optimization techniques for reducing runtime from over 3 min to 12 seconds.',
        'Improved database functionality by implementing vector storage and retrieval using the Facebook AI Similarity Search library, significantly reducing data access times. Streamlined the integration of vector databases into our system, boosting compatibility and performance.',
        'Enhanced the functionality of existing Query Language to facilitate quick creation of a Retrieval Augmented Generation application, improving from 7 statements required previously to only 3 statements.',
        'Project has gained over 2000 stars on GitHub showcasing widespread community recognition and support.'
      ],
      current: false,
    },
    // Add more experience items here
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
          Work Experience
        </h2>
        <div className="space-y-8 p-6">
          {experienceData.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;