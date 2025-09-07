import React from "react";
import HomeCarousel from "../sections/Home/HomeCarousel";
import Ticker from "../components/Ticker";
import WhyMillenium from "../sections/Home/WhyMillenium";
import ServicesGrid from "../sections/Home/ServicesGrid";
import Solutions from "../sections/Home/Solutions";
import Clients from "../sections/Home/Clients";
import Testimonials from "../sections/Home/Testimonials";
import WorkingProcess from "../sections/Home/WorkingProcess";
import { Helmet } from "react-helmet-async";
const services = [
  "Employee Transportation",
  "Corporate Car Rental",
  "Logistics Services",
  "Workspace Management",
  "HR Consultancy",
  "Telecom Infrastructure Services",
];
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Millenium Global India</title>
        <meta
          name="description"
          content="Millenium Global offers turnkey solutions in network rollout & optimization, telecom infrastructure, employee transportation, 3PL logistics, HR recruitment, corporate facility management and 360° event management. Serving pan‑india with Gurgaon, Chennai & Kolkata hubs."
        />
        <link rel="canonical" href="https://milleniumglobal.in/" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="Millenium Global India - Empowering Businesses"
        />
        <meta
          property="og:description"
          content="Explore telecom infrastructure, network rollout & optimization,  employee transportation, 3PL logistics, HR recruitment, corporate facility management and 360° event management with Millenium Global."
        />
        <meta
          property="og:image"
          content="https://milleniumglobal.in/fb-og.png"
        />
        <meta property="og:url" content="https://milleniumglobal.in/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Millenium Global" />
        <meta
          name="twitter:description"
          content="Explore telecom infrastructure, network rollout & optimization,  employee transportation, 3PL logistics, HR recruitment, corporate facility management and 360° event management with Millenium Global."
        />
        <meta
          name="twitter:image"
          content="https://milleniumglobal.in/twitter-og.png"
        />

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Millenium Global",
          "url": "https://milleniumglobal.in/",
          "logo": "https://milleniumglobal.in/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9999842400",
            "contactType": "Customer Service",
            "areaServed": "IN",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.linkedin.com/company/millenium-leisure-hospitality-services/",
            "https://instagram.com/milleniumleisure/"
          ]
        }
        `}</script>

        {/* Website Schema (Google Sitelinks Search Box) */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://milleniumglobal.in/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://milleniumglobal.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
        `}</script>
      </Helmet>
      <div className="overflow-hidden">
        <HomeCarousel />
        <Ticker services={services} />
        <WhyMillenium />
        <ServicesGrid />
        <WorkingProcess />
        <Solutions />
        <Clients />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
