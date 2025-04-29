import type React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="bg-background h-screen flex flex-col md:flex-row items-center mt-16 md:mt-[-60px] px-4 md:px-0">
      <div className="w-full flex flex-col-reverse md:flex-row items-center max-w-[1920px] mx-auto">
        {/* Left Content */}
        <div className="px-4 md:ml-80 md:w-2/5 md:px-8 lg:px-12 space-y-6 text-center md:text-left mt-8 md:mt-0">
          <p className="text-xs md:text-sm uppercase tracking-wider text-gray-600">
            Online Art Portfolio Showcase
          </p>
          <h1 className="text-3xl md:text-4xl font-serif leading-tight text-gray-900">
            Unveil Your Vision: <br />
            Embrace Creation, <br />
            Embrace You
          </h1>
          <Link
            href="/gallery"
            className="uppercase tracking-wider inline-block bg-primary text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-full hover:bg-teal-800 transition-colors"
          >
            View Gallery
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-3/5 h-[60vh] md:h-[80vh] flex items-center justify-center">
          <div className="relative w-full h-full md:h-[80%] pr-6 md:pr-6">
            <Image
              src="/hero1.jpeg"
              alt="Artist sitting on a chair"
              width={1200}
              height={900}
              className="rounded-[50px] object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
