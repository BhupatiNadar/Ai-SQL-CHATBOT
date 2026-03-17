import Navbar from "./components/Homepage/Navbar"
import BodyContent from "./components/Homepage/BodyContent";
import Workflow from "./components/Homepage/Workflow";
import Footer from "./components/Homepage/Footer"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <BodyContent />
      <Workflow/>
      <Footer/>
    </>
  );
}

export default App
