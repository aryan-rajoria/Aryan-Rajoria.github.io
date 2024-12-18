import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectInterface {
    imageSrc: string;
    title: string;
    description: string;
    githubLink?: string; // Optional GitHub link
    externalLink?: string; // Optional external link
}

// Define the ProjectItem component
const ProjectItem: React.FC<ProjectInterface> = ({ imageSrc, title, description, githubLink, externalLink }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={imageSrc}
        alt={`${title} thumbnail`}
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex space-x-4">
          {githubLink && (
            <a href={githubLink} className="text-gray-600 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
          )}
          {externalLink && (
            <a href={externalLink} className="text-gray-600 hover:text-gray-900">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;