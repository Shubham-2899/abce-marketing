import { Route, Routes } from "react-router-dom";
import NotFound404 from "../pages/notFound404/404";
import Home from "../pages/home";
import AboutUs from "../pages/about-us";
import ContactUs from "../pages/contact";
import Services from "../pages/services";

const ABCRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="services" element={<Services />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default ABCRoutes;
