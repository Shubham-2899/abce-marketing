import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import MailLoader from "./components/MailLoader";

/*
 * RASPIX Media public website.
 * The client portal (sign-in, campaigns, reports, admin) is a separate app;
 * the header's "Client Login" button links to it via VITE_APP_PORTAL_URL.
 */

const SiteHome = lazy(() => import("./site/pages/SiteHome"));
const AboutPage = lazy(() => import("./site/pages/AboutPage"));
const ServicesPage = lazy(() => import("./site/pages/ServicesPage"));
const ContactPage = lazy(() => import("./site/pages/ContactPage"));
const PortfolioPage = lazy(() => import("./site/pages/PortfolioPage"));
const PrivacyPage = lazy(() => import("./site/pages/PrivacyPage"));
const NotFound = lazy(() => import("./site/pages/NotFound"));

/** Start each new page at the top (hash links are handled by the page). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <SiteHeader />
      <ScrollToTop />
      <Suspense fallback={<MailLoader variant="fullscreen" size={140} label="Loading" />}>
        <Routes>
          <Route path="/" element={<SiteHome />} />
          {/* the existing site and sitemap use /home */}
          <Route path="/home" element={<SiteHome />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          {/* page removed: send old links to the homepage */}
          <Route path="/testimonials" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
