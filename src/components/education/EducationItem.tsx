import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export interface EducationItemProps {
  degree: string;
  institution: string;
  graduationYear: string;
  description: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  graduationYear,
  description,
}) => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <div className="flex items-center space-x-4">
      <div className="bg-indigo-100 p-3 rounded-lg">
        <GraduationCap className="w-6 h-6 text-indigo-600" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{degree}</h3>
        <p className="text-lg text-gray-600">{institution}</p>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{graduationYear}</span>
        </div>
      </div>
    </div>
    <div className="mt-4 text-gray-600">
      <p>{description}</p>
    </div>
  </div>
);

export default EducationItem;