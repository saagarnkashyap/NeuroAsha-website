import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Predict from './pages/Predict';
import Chatbot from './pages/Chatbot';
import Report from './pages/Report';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="predict" element={<Predict />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route 
            path="report" 
            element={
              <ProtectedRoute>
                <Report />
              </ProtectedRoute>
            } 
          />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

