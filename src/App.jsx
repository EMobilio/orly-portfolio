import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Animation from './pages/Animation';
import Design from './pages/Design';
import Experience from './pages/Experience';
import Photography from './pages/Photography';
import Portfolio from './pages/Portfolio';
import Reel from './pages/Reel';
import Exhibitions from './pages/Exhibitions';
import Header from './components/Header';
import Footer from './components/Footer';

function Root() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/design" element={<Design />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reel" element={<Reel />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
      </Routes>
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  [{path: "*", Component: Root}]
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
