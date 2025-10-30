import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import StorkstonePage from './pages/StorkstonePage';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storkstone" element={<StorkstonePage />} />
          <Route path="/blog/the-story-behind-storkstone" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
