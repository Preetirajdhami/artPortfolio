import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="mt-10 h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 max-w-4xl mx-auto leading-tight">
About Me        </h2>

      </div>

      {/* Content Section */}
      <div className="relative mt-10 flex-grow">
        {/* Content Container - this needs to be positioned relative for absolute positioning inside */}
        <div className="relative w-full h-full flex flex-col md:flex-row">
          {/* Left space for image */}
          <div className="md:w-2/5 lg:w-1/3"></div>

          {/* Right Content Green Background */}
          <div className="bg-[#6b775a] text-white rounded-3xl md:w-3/5 lg:w-2/3 p-8 md:p-12 mt-20 md:mt-0">
            <div className="md:pl-20 lg:pl-24">
              <h3 className="text-3xl md:text-4xl font-light mb-6">Sound familiar?</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 6H1M23 6L18 1M23 6L18 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-white/90 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco.
                  </p>
                </div>

                <div className="flex">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 6H1M23 6L18 1M23 6L18 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-white/90 text-sm md:text-base">
                    Diam efficitur metus sociosqu nunc tincidunt fringilla taciti habitasse non. 
                    Scelerisque conubia pretium porttitor taciti condimentum.
                  </p>
                </div>

                <div className="flex">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 6H1M23 6L18 1M23 6L18 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-white/90 text-sm md:text-base">
                    Himenaeos cubilia tortor id ligula aenean maximus nec. Sem nam cubilia aliquet 
                    aliquet id varius fermentum varu.
                  </p>
                </div>

                <div className="flex">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 6H1M23 6L18 1M23 6L18 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-white/90 text-sm md:text-base">
                    Fusce orci himenaeos commodo ultrices sagittis dictum mollis in. Tincidunt 
                    inceptos nostra himenaeos aptent habitasse metus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image positioned absolutely to overlay on the green div */}
          <div className="absolute z-10 left-0 md:left-10 lg:left-0 top-1/2 transform -translate-y-1/2">
            <div className="relative w-full max-w-md">
              <Image 
                src="/hero1.jpeg" 
                alt="Plant in terracotta pot and coffee cup" 
                width={450} 
                height={500}
                className="rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;