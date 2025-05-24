import React from 'react';
import vulnImage from "../../static/proj1.png";

interface Blog {
  id: string;
  title: string;
  date: string;
  description: string;
  link: string;
  imageUrl?: string; // Optional: URL for a cover image
  tags?: string[];   // Optional: An array of tags
}

// Easy-to-edit list of blog posts
// Replace with your actual blog post data
const blogs: Blog[] = [
  {
    id: '1',
    title: 'Vulnerable Web Apps',
    date: 'October 26, 2023',
    description: 'Comparing Vulnerable Web Apps and which technologies they help test',
    link: 'https://aryan-rajoria.github.io/vuln-web-sec-proj/', // Replace with the actual link to your blog post
    imageUrl: vulnImage, // Example image
    tags: ['Penetration Testing', 'Application Security', "Cloud Security"],
  },
//   {
//     id: '2',
//     title: 'Understanding React Hooks',
//     date: 'November 15, 2023',
//     description: 'A deep dive into React Hooks, explaining useState, useEffect, and useContext with practical examples.',
//     link: '#', // Replace with the actual link to your blog post
//     imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60', // Example image
//     tags: ['React', 'JavaScript', 'Frontend'],
//   },
//   {
//     id: '3',
//     title: 'Tips for Effective Remote Work',
//     date: 'December 05, 2023',
//     description: 'Sharing my personal tips and strategies for staying productive and maintaining a healthy work-life balance while working remotely.',
//     link: '#', // Replace with the actual link to your blog post
//     // No imageUrl for this one, to show how it handles missing images
//     tags: ['Remote Work', 'Productivity', 'Lifestyle'],
//   },
  // Add more blog objects here as you write them
  // {
  //   id: '4',
  //   title: 'Your Next Blog Post Title',
  //   date: 'Month Day, Year',
  //   description: 'A short, engaging description of your blog post.',
  //   link: '#', // Link to the post
  //   imageUrl: 'https://via.placeholder.com/400x200?text=Your+Image',
  //   tags: ['Tag1', 'Tag2'],
  // },
];

const BlogList: React.FC = () => {
  if (blogs.length === 0) {
    return null; // Or a message like "No blog posts yet."
  }

  return (
    <section id="blog" className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10 sm:mb-12">
          My Latest Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              {blog.imageUrl && (
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={blog.imageUrl}
                    alt={`Cover image for ${blog.title}`}
                    className="w-full h-48 object-cover"
                  />
                </a>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <a href={blog.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {blog.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{blog.date}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {blog.description}
                </p>
                {blog.tags && blog.tags.length > 0 && (
                  <div className="mb-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 font-semibold hover:underline transition-colors duration-300"
                >
                  Read More &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;