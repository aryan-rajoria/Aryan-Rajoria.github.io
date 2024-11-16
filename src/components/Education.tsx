import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
          Education
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Degree Name</h3>
                <p className="text-lg text-gray-600">Institution Name</p>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Graduation Year</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-gray-600">
              <p>Brief description of your academic achievements, relevant coursework, or thesis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;