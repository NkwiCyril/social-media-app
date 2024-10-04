import LeftSection from "./layouts/LeftSection";
import RightSection from "./layouts/RightSection";
import CenterSection from "./layouts/CenterSection";
import "./styles/index.css";
import Footer from "./layouts/Footer";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex space-x-6 py-5 px-5">
        <div className="w-1/4 h-fit">
          <LeftSection />
        </div>
        <div className="w-1/2">
          <CenterSection />
        </div>
        <div className="w-1/4 h-fit">
          <RightSection />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
