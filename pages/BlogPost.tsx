import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '../services/content';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-1" /> Back to blog
      </Link>
      
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-6 text-gray-500 border-b border-gray-200 pb-8">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span className="font-medium text-gray-900">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{post.date}</span>
          </div>
        </div>
      </header>

      <article className="prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>

      <hr className="my-12 border-gray-200" />
      
      <div className="bg-gray-50 p-8 rounded-xl">
        <h3 className="text-lg font-bold text-gray-900 mb-2">About the Author</h3>
        <p className="text-gray-600">
          {post.author} is a regular contributor to DevSpace, passionate about sharing knowledge and building better software.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;