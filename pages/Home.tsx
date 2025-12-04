import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../services/content';
import { ArrowRight, Code, Palette } from 'lucide-react';

const Home: React.FC = () => {
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Building the <span className="text-blue-600">future</span>, <br />
          one line of code at a time.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Welcome to DevSpace. A hub for developers to read insights, explore tutorials, and use handy utilities to speed up their workflow.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/blog"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
          >
            Read the Blog
          </Link>
          <Link
            to="/tools"
            className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Explore Tools
          </Link>
        </div>
      </section>

      {/* Featured Tools */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Popular Tools</h2>
          <Link to="/tools" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/tools/json-formatter" className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">JSON Formatter</h3>
            <p className="text-gray-600">Validate, format, and minify your JSON data instantly.</p>
          </Link>
          
           <Link to="/tools/gradient-generator" className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-pink-500 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Palette size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Gradient Generator</h3>
            <p className="text-gray-600">Create beautiful CSS gradients and copy the code.</p>
          </Link>
        </div>
      </section>

      {/* Latest Posts */}
      <section>
         <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
            Read all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-8">
          {latestPosts.map((post) => (
            <article key={post.slug} className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex-1">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="text-blue-600 font-medium">{post.tags[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-sm font-semibold text-gray-900 hover:underline">
                  Read article
                </Link>
               </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;