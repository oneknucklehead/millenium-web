import React from "react";
import ServiceCard from "../../sections/Services/ServiceCard";
import Container from "../../components/Container";

import img1 from "../../assets/Images/services/1.webp";
import img2 from "../../assets/Images/services/2.webp";
import img3 from "../../assets/Images/services/3.webp";
import img4 from "../../assets/Images/services/4.webp";
import img5 from "../../assets/Images/services/5.webp";
import { Helmet } from "react-helmet-async";

const cardData = [
  {
    headline: "Corporate Employee Transport",
    description:
      "Revolutionize employee mobility with Millenium Global's tech-enabled corporate transport services. We provide safe, efficient, and reliable cab fleets, including EV options, for daily commutes and project travel. Our optimized solutions serve businesses in Gurgaon, Chennai, and major Indian cities, enhancing workforce productivity and safety.",
    cta: "/services/employee",
    img: img1,
  },
  {
    headline: "Telecom Solutions",
    description:
      "Millenium Global delivers comprehensive telecom infrastructure development and optimization. Specializing in 4G/5G rollouts, BTS installation, and O&M, we ensure robust network performance. Our expertise in cities like Delhi NCR, Kolkata, and Mumbai drives seamless connectivity and operational efficiency for leading operators across India.",
    cta: "/services/telecom",
    img: img2,
  },
  {
    headline: "Logistics Services",
    description:
      "Millenium Global offers end-to-end 3PL and specialized logistics solutions for seamless supply chain management. From warehousing to fleet services and telecom goods transport, we ensure efficient, timely, and secure movement of your assets. Our services support businesses across Mumbai, Bengaluru, and Hyderabad, optimizing operational flow nationwide.",
    cta: "/services/logistics",
    img: img3,
  },
  {
    headline: "Workspace & HR Solutions",
    description:
      "Millenium provides integrated facility management, including complete office design, furnishing (chairs, tables), and ongoing maintenance for optimal workspaces. We also offer expert HR recruitment for telecom projects, ensuring productive and well-staffed corporate environments in Kolkata, Delhi NCR, and major business hubs.",
    cta: "/services/workspace",
    img: img4,
  },
  {
    headline: "Event Management",
    description:
      "Millenium Leisure Hospitality crafts unforgettable corporate events, MICE, and brand activations nationwide. Our 360° approach covers creative design, venue sourcing, and flawless execution. We deliver high-impact experiences for businesses in Delhi, Mumbai, and Kolkata, ensuring your message resonates powerfully.",
    cta: "/services/events",
    img: img5,
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Millenium Global India | Services</title>
        <meta
          name="description"
          content="Explore Millenium Global’s wide range of services including events, logistics, telecom, workspace solutions, and more."
        />
        <meta property="og:title" content="Millenium Global India | Services" />
        <meta
          property="og:description"
          content="Comprehensive solutions across events, logistics, telecom, and workspace."
        />
        <meta
          property="og:image"
          content="https://milleniumglobal.in/fb-og.png"
        />
        <meta property="og:url" content="https://milleniumglobal.in/services" />
        <link rel="canonical" href="https://milleniumglobal.in/services" />

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Millenium Global Services",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "Employee Transport Services",
              "url": "https://milleniumglobal.in/services/employee"
            },
            {
              "@type": "Service",
              "name": "Events & MICE Management Services",
              "url": "https://milleniumglobal.in/services/events"
            },
            {
              "@type": "Service",
              "name": "3PL & Logistics Services",
              "url": "https://milleniumglobal.in/services/logistics"
            },
            {
              "@type": "Service",
              "name": "Telecom Solutions",
              "url": "https://milleniumglobal.in/services/telecom"
            },
            {
              "@type": "Service",
              "name": "Workspace & HR Solutions",
              "url": "https://milleniumglobal.in/services/workspace"
            }
          ]
        }
        `}</script>
      </Helmet>
      <div className="pt-[80px]">
        <Container className=" px-4">
          <div className="py-4 flex flex-col justify-center items-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold pt-8">
              Our Services
            </h1>
            <p className="text-sm md:text-base text-gray-600 text-center my-4">
              At Millenium Global, we offer a powerful suite of integrated
              services tailored for enterprise efficiency, operational
              excellence, and nationwide scalability. From telecom
              infrastructure development to EV-powered employee transport, and
              from event management to logistics and facility solutions, our
              offerings are built to support growing businesses across India.
              <br />
              <br />
              Headquartered in Gurgaon with operations in Mumbai, Kolkata,
              Chennai, Guwahati, Jaipur, and more, we operate with full
              compliance, smart automation, and industry-leading support. Each
              of our five service verticals is backed by a decade of experience,
              robust systems, and partnerships with top-tier clients like Jio,
              Airtel, Samsung, TCS, PWC, and Teleperformance.
              <br />
              <br />
              Explore how Millenium Global can power your business forward.
            </p>
          </div>
        </Container>
        <Container className=" px-4">
          <div>
            {cardData.map((service, index) => (
              <div className="my-24">
                <ServiceCard
                  key={index}
                  title={service.headline}
                  description={service.description}
                  teamImg={service.img}
                  reverse={index % 2 === 1} // Alternate layout
                  bg={index % 2 === 0 ? "primary" : "secondary"}
                  cta={service.cta}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Services;
