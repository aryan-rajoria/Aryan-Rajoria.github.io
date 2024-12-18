import React from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import profilephoto from "../../static/profile-photo.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4">
              <img
                className="object-cover rounded-lg shadow-lg"
                src={profilephoto}
                alt="Profile"
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Aryan Rajoria
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Open Source Developer | Security Engineer
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed">
            I'm a passionate open-source developer and security researcher enhancing software security throughout its lifecycle. I specialize in integrating security into CI/CD pipelines, automating security processes, and ensuring secure cloud deployments by leveraging infrastructure as code and containerization. My goal is to build secure and reliable software by proactively identifying and mitigating vulnerabilities. Currently pursuing my Master's in Cybersecurity at Georgia Tech, I'm eager to contribute my skills and knowledge to a dynamic team.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me  
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </button>
            </div>

            <div className="mt-8 flex space-x-6">
              <a href="https://github.com/aryan-rajoria" className="text-gray-600 hover:text-gray-900">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/arajoria" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://appthreat.com" className="text-gray-600 hover:text-gray-900">
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-indigo-600">2+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-indigo-600">5+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-indigo-600">10+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;