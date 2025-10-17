import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeaderNav from "./component/navComponents/HeaderNav";
import HeroSection from "./component/HeroSection";
import FixNavbar from "./component/navComponents/FixNavbar";
import RankingSection from "./component/RankingSection";
import EventSection from "./component/EventSection";
import PlacementProvide from "./component/PlacementProvide";
import ShooliniFooter from "./component/ShooliniFooter";
import Fitchers from "./component/Feature";

// Dummy pages bana dete hain (About, Contact)
import About from "./component/About";
import Contact from "./component/contact";
import Vision from "./component/Vision";
import MissingPage from "./component/MissingPage";
import Leadership from "./component/LeaderShip";
import Faculty from "./component/faculty";
import ScienceAcademy from "./component/ScienceAcademy";
import ArtsAcademy from "./component/ArtsAcademy";

function App() {
  return (
   <>
      {/* Fixed Navbar + Header */}
      <HeaderNav />
      <FixNavbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Fitchers />
              <HeroSection />
              <RankingSection />
              <EventSection />
              <PlacementProvide />
            </>
          }
        />
 <Route path="/about-us" element={<About />} />
  <Route path="/about-us/vision" element={<h1> <Vision/></h1>} />
  <Route path="/about-us/mission" element={<h1><MissingPage/></h1>} />
  <Route path="/about-us/leadership" element={<h1><Leadership/></h1>} />
  <Route path="/about-us/faculty" element={<h1><Faculty/></h1>} />
  <Route path="/about-us/infrastructure" element={<h1>Infrastructure Page</h1>} />

  <Route path="/academies" element={<h1>Academies Main</h1>} />
  <Route path="/academies/science" element={<h1><ScienceAcademy/></h1>} />
  <Route path="/academies/Arts" element={<h1><ArtsAcademy/></h1>} />
   </Routes>
   <ShooliniFooter/> 
   </>
  );
}

export default App;
