import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StorkstonePage from './pages/StorkstonePage';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/storkstone" element={<StorkstonePage />} />
  <Route path="/blog/the-story-behind-storkstone" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
