import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import Collection from "./components/Collection";
import Events from "./components/Events";
import WelcomeLoader from "./components/WelcomeLoader"; // Adjust path if needed

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <Router>
      {isLoading && <WelcomeLoader />}
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;