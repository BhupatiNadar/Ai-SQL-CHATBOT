import Navbar from "./components/Homepage/Navbar"
import BodyContent from "./components/Homepage/BodyContent";
import Workflow from "./components/Homepage/Workflow";
import Footer from "./components/Homepage/Footer"
import Header from "./components/Aboutme/Header"
import AboutMeBody from "./components/Aboutme/AboutMeBody";
import AboutMeWorkflow from "./components/Aboutme/AboutMeWorkflow";
import AboutMeFooter from "./components/Aboutme/AboutMeFooter";
import FeaturesHeader from "./components/Features/FeaturesHeader";
import FeaturesBody from "./components/Features/FeaturesBody";
import FeathuresFooter from "./components/Features/FeathuresFooter";
import ContactHeader from "./components/Contact/ContactHeader";
import ContactBody from "./components/Contact/ContactBody";
import ContactFooter from "./components/Contact/ContactFooter";
<<<<<<< HEAD
=======
import How_it_workHeader from "./components/How_it_work/How_it_workHeader"
import How_it_workBody from "./components/How_it_work/How_it_workBody"
>>>>>>> f68eec84f9107a768a129139128788fe173235ce
import "./App.css"
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BodyContent />
              <Workflow />
              <Footer />
            </>
          }
        />

        <Route
          path="/About"
          element={
            <>
              <Header />
              <AboutMeBody />
              <AboutMeWorkflow />
              <AboutMeFooter />
            </>
          }
        />

        <Route
          path="/Features"
          element={
            <>
              <FeaturesHeader />
              <FeaturesBody />
              <FeathuresFooter />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            <>
<<<<<<< HEAD
            <ContactHeader/>
            <ContactBody/>
            <ContactFooter/>
            </>
          }
        />
=======
              <ContactHeader />
              <ContactBody />
              <ContactFooter />
            </>
          }
        />

        <Route 
        path="/How_it_works"
         element={
          <>
          <How_it_workHeader/>
          <How_it_workBody/>
          </>
      } />
>>>>>>> f68eec84f9107a768a129139128788fe173235ce
      </Routes>
    </>
  );
}

export default App
