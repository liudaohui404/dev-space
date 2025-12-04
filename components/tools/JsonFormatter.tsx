import React, { useState } from 'react';
import { Copy, Trash2, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const JsonFormatter: React.FC = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    try {
      if (!input.trim()) {
        setError(null);
        return;
      }
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const minifyJson = () => {
    try {
        if (!input.trim()) return;
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed));
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clear = () => {
    setInput('');
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
       <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link to="/tools" className="hover:text-blue-600">Tools</Link> 
        <span>/</span>
        <span className="text-gray-900">JSON Formatter</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">JSON Formatter</h1>
          <p className="text-gray-600 mt-1">Beautify or minify your JSON string.</p>
        </div>
        <div className="flex gap-2">
            <button onClick={formatJson} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Beautify
            </button>
            <button onClick={minifyJson} className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors">
                Minify
            </button>
        </div>
      </div>

      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JSON here..."
          className={`w-full h-[60vh] p-4 font-mono text-sm bg-white border rounded-xl focus:ring-2 focus:outline-none resize-none shadow-sm ${
            error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
          }`}
          spellCheck={false}
        />
        
        {/* Toolbar inside textarea */}
        <div className="absolute top-4 right-4 flex gap-2">
            <button onClick={copyToClipboard} className="p-2 bg-white/90 backdrop-blur border border-gray-200 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors" title="Copy">
                {copied ? <CheckCircle size={18} className="text-green-500" /> : <Copy size={18} />}
            </button>
            <button onClick={clear} className="p-2 bg-white/90 backdrop-blur border border-gray-200 rounded-lg hover:bg-red-50 text-gray-600 hover:text-red-500 transition-colors" title="Clear">
                <Trash2 size={18} />
            </button>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-700">
            <AlertCircle className="shrink-0 mt-0.5" size={20} />
            <div className="font-mono text-sm break-all">{error}</div>
        </div>
      )}
    </div>
  );
};

export default JsonFormatter;