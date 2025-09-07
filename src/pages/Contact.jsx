import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { Mail, MapPin, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "General",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const data = new FormData();
      for (let key in formData) {
        data.append(key, formData[key]);
      }

      // Hidden fields for formsubmit.co
      data.append("_captcha", "false");
      data.append("_template", "box");
      data.append("_subject", "New Contact Form Submission");

      const res = await axios.post(
        "https://formsubmit.co/connect@milleniumglobal.in",
        data
      );
      // console.log(res.data);
      setStatus("✅ Message Sent Successfully!");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "General",
        message: "",
      });
    } catch (error) {
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Auto clear status after 5s
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      <Helmet>
        <title>Millenium Global India | Contact Us </title>
        <meta
          name="description"
          content="Get in touch with Millenium Global for service inquiries, support, or partnership opportunities."
        />
        <meta property="og:title" content="Millenium Global | Contact Us" />
        <meta
          property="og:description"
          content="Reach out to Millenium Global for inquiries and collaborations."
        />
        <meta
          property="og:image"
          content="https://milleniumglobal.in/fb-og.png"
        />
        <meta property="og:url" content="https://milleniumglobal.in/contact" />

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Millenium Global",
            "url": "https://milleniumglobal.in/",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9999842400",
              "contactType": "Sales",
              "areaServed": "IN",
              "availableLanguage": "English"
            }
          }
        }
        `}</script>
      </Helmet>
      <div className="pt-[80px] overflow-hidden">
        <Container className="px-4 py-12 ">
          <div className="min-h-screen bg-white">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-5xl font-extrabold text-secondary mb-4 uppercase">
                Contact Us
              </h1>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Whether you need telecom solutions, corporate transport,
                logistics, workspace management, or event services, our team is
                ready to deliver Pan-India, on-time, and with 100% compliance.
                Reach out today to discuss your requirements.
              </p>
            </motion.div>

            {/* Layout - Form Left, Info Right */}
            <div className="mx-auto grid md:grid-cols-2 gap-10">
              {/* Contact Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-secondary shadow-md h-fit rounded-xl p-8"
              >
                <h2 className="text-xl text-center font-bold mb-6 text-primary">
                  Get In Touch
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="border bg-white rounded-lg p-3 w-full"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="border bg-white rounded-lg p-3 w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="border bg-white rounded-lg p-3 w-full md:col-span-2"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company"
                    className="border bg-white rounded-lg p-3 w-full md:col-span-2"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="border bg-white rounded-lg p-3 w-full md:col-span-2"
                  >
                    <option>General</option>
                    <option>Telecom Solutions</option>
                    <option>Employee & Corporate Transport</option>
                    <option>3PL & Logistics</option>
                    <option>HR & Recruitment</option>
                    <option>Workspace Management</option>
                    <option>Event & MICE Management</option>
                  </select>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows="4"
                    className="border bg-white rounded-lg p-3 w-full md:col-span-2"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 bg-primary hover:bg-primary/90 transition duration-300 cursor-pointer text-white px-6 py-3 rounded-lg w-full disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Send Message"}
                </button>
                {status && (
                  <p
                    className={`mt-4 text-sm ${
                      status.includes("✅") ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </motion.form>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="bg-gray-50 shadow-md rounded-xl p-6">
                  <h2 className="text-lg font-bold text-primary border-b pb-2">
                    Contact Information
                  </h2>

                  {/* Two Column Layout */}
                  <p className="my-4 text-gray-600">
                    For any Business Query & Assistance Please Contact:-
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Ajay Kumar Singh */}
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-secondary">
                          Mr. Ajay Kumar Singh
                        </p>
                        <p className="text-sm text-gray-700">Director</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Phone className="text-secondary w-5 h-5" />
                        <span>9999842400 / 9910724900</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Mail className="text-secondary w-5 h-5" />
                        <span>ajay.singh@milleniumglobal.in</span>
                      </div>
                    </div>

                    {/* Amar Kumar Singh */}
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-secondary">
                          Mr. Amar Kumar Singh
                        </p>
                        <p className="text-sm text-gray-700">Business Head</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Phone className="text-secondary w-5 h-5" />
                        <span>9804104104 / 8444047799</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Mail className="text-secondary w-5 h-5" />
                        <span>amar.singh@milleniumglobal.in</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 shadow-md rounded-xl p-6">
                  <h2 className="text-lg font-bold mb-4 text-primary border-b pb-2">
                    Business Hours
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-secondary uppercase">
                        Monday – Saturday
                      </p>
                      <p className="text-gray-600">9:00 am – 7:00 pm</p>
                    </div>
                    {/* <div>
                    <p className="font-semibold text-[#0c2340] uppercase">
                      Saturday
                    </p>
                    <p className="text-gray-600">9:00 am – 6:00 pm</p>
                  </div> */}
                    <div>
                      <p className="font-semibold text-secondary uppercase">
                        Sunday
                      </p>
                      <p className="text-gray-600">Closed</p>
                      <p className="text-xs text-gray-600">
                        <span className="text-red-800">* </span>Emergency
                        operations available for active projects
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="bg-gray-50 shadow-md rounded-xl p-8 my-12">
              <h2 className="text-lg font-bold mb-6 border-b pb-2 uppercase text-primary">
                Our Locations
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Left Intro */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary">
                    Visit our offices
                  </h3>
                  <p className="text-gray-600 mt-4 text-sm">
                    Find us at these locations across India.
                  </p>
                </div>

                {/* Locations */}
                <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Kolkata */}
                  <div>
                    <p className="font-semibold text-lg text-secondary">
                      Kolkata (Head Office)
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="text-secondary w-5 h-5 shrink-0" />
                      <p className="text-gray-600 flex-1">
                        <span className="text-primary block">
                          Millenium Global
                        </span>
                        The Terminus, Suite No-502, 5th Floor, Action Area -1
                        New Town, Kolkata, West Bengal 700156
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Phone className="text-secondary w-5 h-5 shrink-0" />
                      <p className="text-gray-600 flex-1">
                        033-35275525 / 9717200468
                      </p>
                    </div>
                  </div>

                  {/* Gurgaon */}
                  <div>
                    <p className="font-semibold text-secondary text-lg">
                      Gurgaon (Registered Office)
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="text-secondary w-5 h-5 shrink-0" />
                      <p className="text-gray-600 flex-1">
                        <span className="text-primary block">
                          Millenium Global
                        </span>
                        UGF-97, Vyapar Kendra, Sushant Lok-1, Gurgaon, Haryana
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Phone className="text-secondary w-5 h-5 shrink-0" />
                      <p className="text-gray-600 flex-1">
                        0124-4245001 / 9717200468
                      </p>
                    </div>
                  </div>

                  {/* Guwahati */}
                  <div>
                    <p className="font-semibold text-secondary text-lg">
                      Guwahati (Branch Office)
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="text-secondary w-5 h-5 shrink-0" />
                      <p className="text-gray-600 flex-1">
                        <span className="text-primary block">
                          Millenium Global
                        </span>
                        House No. 12, Kalpataru Path, Near GNRC Hospital, Usha
                        Nagar, Rukmini Gaon, Guwahati, Assam 781006
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Phone className="text-secondary w-5 h-5 shrink-0" />
                      <p className="text-gray-600 flex-1">
                        7908309972 / 9804104104
                      </p>
                    </div>
                  </div>

                  {/* Jaipur */}
                  <div>
                    <p className="font-semibold text-secondary text-lg">
                      Jaipur (Branch Office)
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="text-secondary w-5 h-5 shrink-0" />
                      <p className="text-gray-600 flex-1">
                        <span className="text-primary block">
                          Millenium Global
                        </span>
                        PN-115, P.N 115 Shri Karni Vatika, Gokulpura, Jaipur,
                        Rajasthan
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Phone className="text-secondary w-5 h-5 shrink-0" />
                      <p className="text-gray-600 flex-1">
                        9717200468 / 9804104104
                      </p>
                    </div>
                  </div>

                  {/* Bhubaneshwar */}
                  <div>
                    <p className="font-semibold text-secondary text-lg">
                      Bhubaneshwar (Branch Office)
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="text-secondary w-5 h-5 shrink-0" />
                      <p className="text-gray-600 flex-1">
                        <span className="text-primary block">
                          Millenium Global
                        </span>
                        1st Floor, Plot No-241/3601, Near Pal Heights, Jayadev
                        Vihar, Bhubaneswar, Odisha 751013
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Phone className="text-secondary w-5 h-5 shrink-0" />
                      <p className="text-gray-600 flex-1">
                        9717200468 / 9804104104
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
