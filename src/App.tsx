import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";

const App = () => {
  return (
    <div className="bg-black">
      <BrowserRouter>
        <div className="flex justify-center items-center p-10">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HeroSection />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
