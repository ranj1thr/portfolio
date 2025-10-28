import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StorkstonePage from './pages/StorkstonePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storkstone" element={<StorkstonePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
