// src/components/ExperienceItem.tsx
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItemProps {
  positionTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  location: string;
  isCurrent: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  positionTitle,
  companyName,
  startDate,
  endDate,
  location,
  isCurrent,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{positionTitle}</h3>
          <p className="text-lg text-gray-600">{companyName}</p>
        </div>
        {isCurrent && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Current
          </span>
        )}
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500 space-x-4">
        <span className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {startDate} - {endDate}
        </span>
        <span className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </span>
      </div>
    </div>
  );
};

export default ExperienceItem;