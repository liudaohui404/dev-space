import React, { useState } from 'react';
import { Copy, RefreshCw, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const GradientGenerator: React.FC = () => {
  const [color1, setColor1] = useState('#3b82f6');
  const [color2, setColor2] = useState('#9333ea');
  const [direction, setDirection] = useState('to right');
  const [copied, setCopied] = useState(false);

  const cssOutput = `background: linear-gradient(${direction}, ${color1}, ${color2});`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const randomize = () => {
    const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    setColor1(randomColor());
    setColor2(randomColor());
  };

  return (
    <div className="max-w-4xl mx-auto">
       <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link to="/tools" className="hover:text-blue-600">Tools</Link> 
        <span>/</span>
        <span className="text-gray-900">Gradient Generator</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Gradient Generator</h1>
        <p className="text-gray-600 mt-1">Create vivid gradients for backgrounds and UI elements.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Preview Area */}
        <div 
            className="h-64 md:h-96 rounded-2xl shadow-lg flex items-center justify-center transition-all duration-500"
            style={{ background: `linear-gradient(${direction}, ${color1}, ${color2})` }}
        >
            <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white font-medium border border-white/30">
                Preview
            </span>
        </div>

        {/* Controls */}
        <div className="space-y-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
            
            {/* Colors */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Color</label>
                    <div className="flex items-center gap-2">
                        <input 
                            type="color" 
                            value={color1} 
                            onChange={(e) => setColor1(e.target.value)}
                            className="h-10 w-10 p-1 rounded cursor-pointer border border-gray-300"
                        />
                        <input 
                            type="text" 
                            value={color1} 
                            onChange={(e) => setColor1(e.target.value)}
                            className="flex-1 p-2 border border-gray-300 rounded-md font-mono text-sm uppercase"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Color</label>
                    <div className="flex items-center gap-2">
                        <input 
                            type="color" 
                            value={color2} 
                            onChange={(e) => setColor2(e.target.value)}
                            className="h-10 w-10 p-1 rounded cursor-pointer border border-gray-300"
                        />
                        <input 
                            type="text" 
                            value={color2} 
                            onChange={(e) => setColor2(e.target.value)}
                            className="flex-1 p-2 border border-gray-300 rounded-md font-mono text-sm uppercase"
                        />
                    </div>
                </div>
            </div>

            {/* Direction */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Direction</label>
                <div className="grid grid-cols-4 gap-2">
                    {['to right', 'to left', 'to bottom', 'to top', 'to bottom right', 'to top left'].map((dir) => (
                        <button
                            key={dir}
                            onClick={() => setDirection(dir)}
                            className={`p-2 text-xs font-medium rounded-md border ${
                                direction === dir 
                                ? 'bg-blue-50 border-blue-500 text-blue-700' 
                                : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                        >
                            {dir.replace('to ', '')}
                        </button>
                    ))}
                </div>
            </div>

            <button 
                onClick={randomize}
                className="w-full py-2 flex items-center justify-center gap-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
            >
                <RefreshCw size={16} /> Randomize Colors
            </button>

            {/* CSS Output */}
            <div className="pt-4 border-t border-gray-100">
                <label className="block text-sm font-medium text-gray-700 mb-2">CSS Code</label>
                <div className="relative">
                    <code className="block p-4 bg-gray-900 text-gray-100 rounded-lg font-mono text-sm break-all pr-12">
                        {cssOutput}
                    </code>
                    <button 
                        onClick={copyToClipboard}
                        className="absolute top-2 right-2 p-2 bg-white/10 text-white hover:bg-white/20 rounded-md transition-colors"
                    >
                        {copied ? <CheckCircle size={18} className="text-green-400" /> : <Copy size={18} />}
                    </button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default GradientGenerator;