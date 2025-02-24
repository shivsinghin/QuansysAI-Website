import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DesktopData = [
  {
    name: "Dashboard",
    url: "/1-Dashbaord.png",
  },
  {
    name: "Onboarding",
    url: "/2-Onboarding.png",
  },
  {
    name: "Import",
    url: "/3-Import.png",
  },
  {
    name: "Outbound Calls",
    url: "/4-Outbound.png",
  },
  {
    name: "Insights",
    url: "/5-Insights.png",
  },
];

const TableImage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-10 md:mt-25 mb-8 md:mb-15 px-4 md:px-0" id="table-images">
      <main className="flex flex-col items-center justify-center" id="lisa">
        <div className="flex flex-col items-center justify-center">
          <h2 className="lg:text-[40px] text-3xl font-bold text-center mb-4 md:mb-6 px-4 md:px-0">
            Multilingual AI Call Agent
          </h2>
          <p className="text-gray-500 mx-auto lg:w-[40%] w-[95%] text-center text-x md:text-base">
            A multilingual AI call agent provides seamless communication across
            languages, enhancing customer experience with automated support and
            personalized interactions worldwide. It bridges cultural gaps
            efficiently, ensuring consistent service quality globally.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 w-full max-w-4xl">
            {/* Card 1 - Automated Support */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <img src="/icons/ai.svg" alt="AI" className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Support</h3>
              <p className="text-gray-600">
                AI-powered conversations handle multiple calls simultaneously, delivering instant responses 24/7.
              </p>
            </div>

            {/* Card 2 - Automated Sales */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <img src="/icons/globe.svg" alt="Global" className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Sales</h3>
              <p className="text-gray-600">
                Intelligent outbound calls to qualify leads and schedule meetings with potential customers.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TableImage;
