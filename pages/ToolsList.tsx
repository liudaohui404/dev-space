import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette } from 'lucide-react';
import { Tool } from '../types';

const tools: Tool[] = [
  {
    id: 'json',
    name: 'JSON Formatter',
    description: 'Validate, format, and minify JSON data. Essential for debugging API responses.',
    icon: <Code size={32} />,
    path: '/tools/json-formatter',
    color: 'bg-indigo-500',
  },
  {
    id: 'gradient',
    name: 'Gradient Generator',
    description: 'Generate beautiful CSS gradients for your next project background.',
    icon: <Palette size={32} />,
    path: '/tools/gradient-generator',
    color: 'bg-pink-500',
  },
];

const ToolsList: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Developer Tools</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of small but mighty utilities to help you speed up your daily development tasks.
          Open source and browser-based.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link key={tool.id} to={tool.path} className="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className={`h-2 w-full ${tool.color}`}></div>
            <div className="p-6">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 shadow-md ${tool.color} group-hover:scale-110 transition-transform duration-300`}>
                {tool.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{tool.name}</h2>
              <p className="text-gray-600 mb-4">
                {tool.description}
              </p>
              <span className="text-blue-600 font-medium text-sm group-hover:underline">Launch Tool &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ToolsList;