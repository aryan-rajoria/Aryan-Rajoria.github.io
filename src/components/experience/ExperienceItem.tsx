import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  location: string;
  responsibilities: string[];
  current: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, date, location, responsibilities, current }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-lg text-gray-600">{company}</p>
          </div>
          {current && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Current
            </span>
          )}
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500 space-x-4">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </span>
        </div>
        <ul className="mt-4 space-y-2 text-gray-600">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ExperienceItem;