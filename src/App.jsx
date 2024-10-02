import Header from "./layouts/Header";
import LeftSection from "./layouts/LeftSection";
import RightSection from "./layouts/RightSection";
import CenterSection from "./layouts/CenterSection";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
