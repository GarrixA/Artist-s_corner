import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import ArtsPage from "../pages/ArtsPage";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="gallery" element={<ArtsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
