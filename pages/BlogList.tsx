import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../services/content';
import { Search } from 'lucide-react';

const BlogList: React.FC = () => {
  const [filter, setFilter] = useState('');

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(filter.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">The Blog</h1>
        <p className="text-gray-600">Thoughts, stories and ideas.</p>
      </div>

      <div className="relative mb-10">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
          placeholder="Search articles by title or tag..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="space-y-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
              <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-blue-200">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                   <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium text-gray-900">{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                   </div>
                   <span className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                     Read more &rarr;
                   </span>
                </div>
              </article>
            </Link>
          ))
        ) : (
          <div className="text-center py-20 text-gray-500">
            No posts found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;