import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
          Work Experience
        </h2>
        <div className="space-y-8">
          {/* Experience items will be populated with your data */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Position Title</h3>
                <p className="text-lg text-gray-600">Company Name</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Current
              </span>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 space-x-4">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                2020 - Present
              </span>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Location
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Key achievement or responsibility
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;