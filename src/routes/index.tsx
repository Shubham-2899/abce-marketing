import { Route, Routes } from "react-router-dom";
import NotFound404 from "../pages/notFound404/404";
import Home from "../pages/home";

const ABCRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="contact-us" element={<div>contact us</div>} />
      <Route path="about" element={<div>About us</div>} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default ABCRoutes;
