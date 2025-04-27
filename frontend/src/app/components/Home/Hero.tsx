import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="bg-background h-screen flex items-center">
      <div className="w-full flex flex-col-reverse md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 px-4 md:px-6 lg:px-12 space-y-6 text-center md:text-left mt-6 md:mt-0">
          <p className="text-sm uppercase tracking-wider text-gray-600">
            Online Art Portfolio Showcase
          </p>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight text-gray-900">
            Unveil Your Vision: <br />
            Embrace Creation, <br />
            Embrace You
          </h1>
          <a
            href="/schedule"
            className="inline-block bg-primary text-white font-medium py-3 px-6 rounded-full hover:bg-teal-800 transition-colors"
          >
            View Gallery
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 h-full">
          <div className="relative w-full h-full">
            <Image
              src="/hero1.jpeg"
              alt="Artist sitting on a chair"
              width={800}
              height={600}
              className="rounded-l-[80px] md:rounded-r-none object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;