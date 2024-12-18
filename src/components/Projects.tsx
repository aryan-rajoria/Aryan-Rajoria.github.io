import React from 'react';
import ProjectItem from './projects/ProjectItem';
import deptree from "../../static/basic-ftp-cdxgen-dependencytree.png";
import blintpic from '../../static/blint.png';
import depscanpic from '../../static/depscan.png';

// Define the Projects component
const Projects: React.FC = () => {
  // Array of project data
  const projects = [
    {
      imageSrc: deptree,
      title: 'Cyclonedx/cdxgen',
      description: 'Cdxgen is a CLI tool, library, REPL, and server to create a valid and compliant CycloneDX Bill of Materials (BOM) containing an aggregate of all project dependencies in JSON format. CycloneDX is a full-stack BOM specification that is easily created, human and machine-readable, and simple to parse.',
      githubLink: 'https://github.com/CycloneDX/cdxgen.git',
    },
    {
      imageSrc: blintpic,
      title: 'Blint',
      description: 'Blint is a Binary Linter that checks the security properties and capabilities of your executables. It is powered by lief. Since version 2, blint can also generate Software Bill-of-Materials (SBOM) for supported binaries.',
      githubLink: 'https://github.com/owasp-dep-scan/blint.git',
    },
    {
      imageSrc: depscanpic,
      title: 'Depscan',
      description: 'OWASP dep-scan is a next-generation security and risk audit tool based on known vulnerabilities, advisories, and license limitations for project dependencies. Both local repositories and container images are supported as the input, and the tool is ideal for integration with ASPM/VM platforms and in CI environments',
      githubLink: 'https://github.com/owasp-dep-scan/dep-scan.git',
      externalLink: 'https://depscan.readthedocs.io',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;