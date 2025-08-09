import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsCard = () => {
  return (
    <motion.div
      className="space-y-5 max-w-sm w-full bg-white rounded-xl p-5 border-[1.5px] border-[#EDEDED]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/40"
            alt="Abhijeet Dasani"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Abhijeet Dasani
            </h4>
            <p className="text-xs text-gray-500">Director, Finora Capital</p>
          </div>
        </div>
        <span className="bg-[#FFF9F5] p-2 rounded-full">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.691 2.292C3.094 0.771 5.217 0 8 0H9V2.819L8.196 2.98C6.826 3.254 5.873 3.793 5.363 4.584C5.09689 5.01013 4.94597 5.49804 4.925 6H8C8.26522 6 8.51957 6.10536 8.70711 6.29289C8.89464 6.48043 9 6.73478 9 7V14C9 15.103 8.103 16 7 16H1C0.734785 16 0.480431 15.8946 0.292894 15.7071C0.105358 15.5196 1.20979e-06 15.2652 1.20979e-06 15V10L0.00300123 7.081C-0.00599877 6.97 -0.195999 4.34 1.691 2.292ZM18 16H12C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V10L11.003 7.081C10.994 6.97 10.804 4.34 12.691 2.292C14.094 0.771 16.217 0 19 0H20V2.819L19.196 2.98C17.826 3.254 16.873 3.793 16.363 4.584C16.0969 5.01013 15.946 5.49804 15.925 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V14C20 15.103 19.103 16 18 16Z"
              fill="#FF6600"
            />
          </svg>
        </span>
        {/* <Quote className="text-orange-500 w-6 h-6" /> */}
      </div>

      {/* Testimonial */}
      <p className="text-sm text-gray-600 leading-relaxed">
        From strategy to execution, Millenium Global delivered. The UI revamp
        not only elevated our brand presence but improved our lead conversion.
      </p>

      <div className="h-[1px] rounded-full bg-[#DFE3EC]" />

      {/* Rating */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.947 9.17901C21.8842 8.99388 21.7685 8.83121 21.6142 8.71107C21.46 8.59094 21.2739 8.51861 21.079 8.50301L15.378 8.05001L12.911 2.58901C12.8325 2.41313 12.7047 2.26374 12.5431 2.15887C12.3815 2.05401 12.193 1.99815 12.0004 1.99805C11.8077 1.99794 11.6192 2.05359 11.4575 2.15828C11.2957 2.26296 11.1678 2.41221 11.089 2.58801L8.62203 8.05001L2.92103 8.50301C2.72948 8.51819 2.54636 8.58822 2.39358 8.70475C2.2408 8.82127 2.12482 8.97934 2.05952 9.16004C1.99422 9.34075 1.98236 9.53645 2.02537 9.72372C2.06838 9.91099 2.16443 10.0819 2.30203 10.216L6.51503 14.323L5.02503 20.775C4.97978 20.9703 4.99428 21.1747 5.06665 21.3617C5.13901 21.5486 5.26589 21.7095 5.43083 21.8235C5.59577 21.9374 5.79115 21.9991 5.99161 22.0007C6.19208 22.0022 6.38837 21.9434 6.55503 21.832L12 18.202L17.445 21.832C17.6154 21.9451 17.8162 22.0033 18.0207 21.9988C18.2251 21.9944 18.4232 21.9274 18.5884 21.8069C18.7536 21.6865 18.878 21.5183 18.9448 21.3251C19.0116 21.1318 19.0176 20.9228 18.962 20.726L17.133 14.326L21.669 10.244C21.966 9.97601 22.075 9.55801 21.947 9.17901Z"
                fill="#EFAB00"
              />
            </svg>
          ))}
        </div>
        <span className="font-semibold">4.7</span>
      </div>
    </motion.div>
  );
};

export default TestimonialsCard;
