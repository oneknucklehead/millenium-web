import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import logoWhite from "../assets/Images/logoWhite.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-[#1B2A4E] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8"
        >
          <img src={logoWhite} alt="Millenium Logo" className="mb-4" />
          <p className="text-gray-300 max-w-md text-sm">
            Millenium Global helps businesses navigate growth through insightful
            consulting and digital strategies.
          </p>
        </motion.div>

        <div className="h-0 border-t-2 border-dashed border-spacing-[8px] border-[#435481] my-6"></div>

        {/* Links Section */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>

              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              {/* <li>Clients</li> */}
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to={"/services/employee"}>Corporate Car Rental</Link>
              </li>
              <li>
                <Link to={"/services/workspace"}>Workspace Management</Link>
              </li>
              <li>
                <Link to={"/services/telecom"}>Network Managed Services</Link>
              </li>
              <li>
                <Link to={"/services/events"}>Corporate Event Management</Link>
              </li>
              <li>
                <Link to={"/services/logistics"}>
                  Logistics & Fleet Services
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            className="md:col-span-2"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6326 15.6666L15.0689 11.5172C14.8532 11.3211 14.5697 11.2166 14.2783 11.2256C13.9869 11.2346 13.7105 11.3565 13.5073 11.5655L10.8207 14.3284C10.174 14.2049 8.87396 13.7996 7.53573 12.4647C6.1975 11.1254 5.79221 9.82197 5.67209 9.17979L8.43275 6.4921C8.64203 6.28904 8.76409 6.01252 8.7731 5.72105C8.78211 5.42959 8.67737 5.14606 8.48103 4.93046L4.33273 0.367893C4.13631 0.151616 3.86332 0.0204286 3.57173 0.00219123C3.28014 -0.0160462 2.99292 0.0801035 2.77109 0.27022L0.334875 2.35952C0.140776 2.55433 0.0249252 2.81359 0.00929798 3.08814C-0.00754219 3.36881 -0.328628 10.0173 4.82671 15.1749C9.32416 19.6712 14.9578 20.0002 16.5093 20.0002C16.7361 20.0002 16.8753 19.9934 16.9123 19.9912C17.1868 19.9758 17.446 19.8594 17.6398 19.6645L19.728 17.2271C19.9189 17.006 20.0157 16.719 19.9979 16.4275C19.9801 16.1359 19.849 15.8629 19.6326 15.6666Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-gray-300">+91 9910724900</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM18 4.7L10 10.034L2 4.7V2.297L10 7.63L18 2.297V4.7Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:contact@milleniumglobal.com"
                    className="text-sm text-gray-300 hover:underline"
                  >
                    contact@milleniumglobal.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00002 0C3.58902 0 2.04095e-05 3.589 2.04095e-05 7.995C-0.0289796 14.44 7.69602 19.784 8.00002 20C8.00002 20 16.029 14.44 16 8C16 3.589 12.411 0 8.00002 0ZM8.00002 12C5.79002 12 4.00002 10.21 4.00002 8C4.00002 5.79 5.79002 4 8.00002 4C10.21 4 12 5.79 12 8C12 10.21 10.21 12 8.00002 12Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Millenium Headquarters</p>
                  <p className="text-sm text-gray-300">
                    The Terminus , Suite No-502, 5th Floor, Action Area -1 New
                    Town, Kolkata ,West Bengal 700156
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="h-0 border-t-2 border-dashed border-spacing-[8px] border-[#435481] my-6"></div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400"
        >
          <p>
            Copyright © 2025{" "}
            <span className="font-semibold">Millenium Global</span>. All Rights
            Reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H12.615V14.04H10.277V11.315H12.615V9.315C12.615 6.99 14.035 5.723 16.115 5.723C16.814 5.721 17.514 5.757 18.21 5.83V8.25H16.775C15.647 8.25 15.427 8.788 15.427 9.575V11.31H18.124L17.774 14.035H15.426V21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3ZM8.339 18.337H5.667V9.747H8.339V18.337ZM7.003 8.574C6.59244 8.574 6.1987 8.41091 5.9084 8.1206C5.61809 7.8303 5.455 7.43655 5.455 7.026C5.455 6.61544 5.61809 6.22171 5.9084 5.9314C6.1987 5.64109 6.59244 5.478 7.003 5.478C7.41356 5.478 7.80729 5.64109 8.0976 5.9314C8.38791 6.22171 8.551 6.61544 8.551 7.026C8.551 7.43655 8.38791 7.8303 8.0976 8.1206C7.80729 8.41091 7.41356 8.574 7.003 8.574ZM18.338 18.337H15.669V14.16C15.669 13.164 15.651 11.883 14.281 11.883C12.891 11.883 12.68 12.969 12.68 14.09V18.338H10.013V9.748H12.573V10.922H12.61C12.965 10.247 13.837 9.535 15.134 9.535C17.838 9.535 18.337 11.313 18.337 13.627L18.338 18.337Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.99 2C6.472 2 2 6.473 2 11.99C2 16.222 4.633 19.84 8.35 21.296C8.262 20.506 8.184 19.29 8.384 18.428C8.566 17.648 9.556 13.462 9.556 13.462C9.556 13.462 9.257 12.863 9.257 11.978C9.257 10.59 10.062 9.553 11.065 9.553C11.918 9.553 12.329 10.193 12.329 10.96C12.329 11.818 11.783 13.099 11.502 14.287C11.267 15.281 12.001 16.092 12.981 16.092C14.756 16.092 16.122 14.22 16.122 11.517C16.122 9.125 14.403 7.453 11.949 7.453C9.106 7.453 7.437 9.585 7.437 11.788C7.437 12.646 7.768 13.567 8.181 14.068C8.2161 14.1057 8.24088 14.1519 8.25297 14.202C8.26505 14.2521 8.26403 14.3044 8.25 14.354C8.174 14.669 8.005 15.348 7.973 15.487C7.929 15.67 7.828 15.709 7.638 15.621C6.391 15.04 5.611 13.216 5.611 11.75C5.611 8.599 7.9 5.705 12.212 5.705C15.678 5.705 18.371 8.174 18.371 11.475C18.371 14.919 16.2 17.688 13.187 17.688C12.174 17.688 11.223 17.163 10.897 16.542L10.274 18.916C10.049 19.784 9.44 20.872 9.033 21.536C9.99111 21.8318 10.9883 21.9818 11.991 21.981C17.508 21.981 21.981 17.508 21.981 11.991C21.981 6.474 17.507 2 11.99 2Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9469 8.30545C20.9369 7.54807 20.7951 6.79822 20.5279 6.08945C20.2963 5.4916 19.9425 4.94864 19.4891 4.49528C19.0358 4.04191 18.4928 3.6881 17.8949 3.45645C17.1953 3.1938 16.4561 3.05179 15.7089 3.03645C14.7469 2.99345 14.4419 2.98145 11.9999 2.98145C9.55795 2.98145 9.24495 2.98145 8.28995 3.03645C7.54311 3.0519 6.8043 3.19391 6.10495 3.45645C5.50701 3.68793 4.96397 4.04169 4.51058 4.49508C4.05719 4.94847 3.70344 5.4915 3.47195 6.08945C3.20878 6.78858 3.06707 7.52756 3.05295 8.27445C3.00995 9.23745 2.99695 9.54245 2.99695 11.9844C2.99695 14.4264 2.99695 14.7384 3.05295 15.6944C3.06795 16.4424 3.20895 17.1804 3.47195 17.8814C3.70383 18.4792 4.05784 19.022 4.51138 19.4752C4.96492 19.9284 5.50801 20.282 6.10595 20.5134C6.80338 20.7866 7.54232 20.9388 8.29095 20.9634C9.25395 21.0064 9.55895 21.0194 12.0009 21.0194C14.4429 21.0194 14.7559 21.0194 15.7109 20.9634C16.4581 20.9487 17.1973 20.807 17.8969 20.5444C18.4946 20.3125 19.0375 19.9586 19.4908 19.5053C19.9441 19.052 20.298 18.5091 20.5299 17.9114C20.7929 17.2114 20.9339 16.4734 20.9489 15.7244C20.9919 14.7624 21.0049 14.4574 21.0049 12.0144C21.0029 9.57245 21.0029 9.26245 20.9469 8.30545ZM11.9939 16.6024C9.43995 16.6024 7.37095 14.5334 7.37095 11.9794C7.37095 9.42545 9.43995 7.35645 11.9939 7.35645C13.22 7.35645 14.3959 7.84351 15.2629 8.71049C16.1299 9.57747 16.6169 10.7533 16.6169 11.9794C16.6169 13.2055 16.1299 14.3814 15.2629 15.2484C14.3959 16.1154 13.22 16.6024 11.9939 16.6024ZM16.8009 8.26344C16.6593 8.26358 16.5191 8.23578 16.3883 8.18166C16.2574 8.12753 16.1385 8.04813 16.0384 7.948C15.9383 7.84787 15.8589 7.72898 15.8047 7.59813C15.7506 7.46729 15.7228 7.32705 15.7229 7.18545C15.7229 7.04395 15.7508 6.90383 15.805 6.7731C15.8591 6.64238 15.9385 6.52359 16.0385 6.42354C16.1386 6.32348 16.2574 6.24411 16.3881 6.18997C16.5188 6.13582 16.6589 6.10795 16.8004 6.10795C16.9419 6.10795 17.0821 6.13582 17.2128 6.18997C17.3435 6.24411 17.4623 6.32348 17.5624 6.42354C17.6624 6.52359 17.7418 6.64238 17.7959 6.7731C17.8501 6.90383 17.8779 7.04395 17.8779 7.18545C17.8779 7.78145 17.3959 8.26344 16.8009 8.26344Z"
                  fill="white"
                />
                <path
                  d="M11.994 14.9816C13.6525 14.9816 14.997 13.6371 14.997 11.9786C14.997 10.3201 13.6525 8.97559 11.994 8.97559C10.3355 8.97559 8.99097 10.3201 8.99097 11.9786C8.99097 13.6371 10.3355 14.9816 11.994 14.9816Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
