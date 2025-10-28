import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import Collection from "./components/Collection";
import Events from "./components/Events";
import Footer from "./components/Footer";
import WelcomeLoader from "./components/WelcomeLoader"; // Adjust the path based on your file structure

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // The timer is handled by WelcomeLoader's internal logic
    // No need to set another timer here, as WelcomeLoader calls onLoaded after 3 seconds
  }, []);

  return (
    <>
      {isLoading && <WelcomeLoader onLoaded={() => setIsLoading(false)} />}
      {!isLoading && (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;