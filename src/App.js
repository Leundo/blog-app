import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import './App.css';
import BlogHeader from './components/BlogHeader';
import BlogFooter from './components/BlogFooter';

import Home from './pages/Home';
import Article from './pages/Article';
import Lab from './pages/Lab';
import Certification from './pages/Certification';
import Telegraph from './pages/Telegraph';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

  }, []);

  return (
    <div className='app'>
      <Routes>
        <Route path="/page/:pid" element={<BlogHeader focused={'home'}/>} />
        <Route path="/article/:aid" element={<BlogHeader focused={'home'}/>} />
        <Route path="/lab/telegraph" element={<BlogHeader focused={'lab'}/>} />
        <Route path="/lab/certification" element={<BlogHeader focused={'lab'}/>} />
        <Route path="/lab" element={<BlogHeader focused={'lab'}/>} />
        <Route path="/" element={<BlogHeader focused={'home'}/>} />
      </Routes>
      <Routes>
        <Route path="/page/:pid" element={<Home />} />
        <Route path="/article/:aid" element={<Article />} />
        <Route path="/lab/telegraph" element={<Telegraph />} />
        <Route path="/lab/certification" element={<Certification />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <BlogFooter />
    </div>
  );
}

export default App;
