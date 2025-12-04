import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import ToolsList from './pages/ToolsList';
import JsonFormatter from './components/tools/JsonFormatter';
import GradientGenerator from './components/tools/GradientGenerator';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Blog Routes */}
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          
          {/* Tool Routes */}
          <Route path="tools" element={<ToolsList />} />
          <Route path="tools/json-formatter" element={<JsonFormatter />} />
          <Route path="tools/gradient-generator" element={<GradientGenerator />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;