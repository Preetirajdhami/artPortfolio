import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <>
      <section className="bg-background flex h-[550px] sm:h-[580px] md:h-[580px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px] flex-col items-center px-4 pt-0 md:flex-row md:px-6 lg:px-8 relative">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col-reverse items-center md:flex-row md:justify-between">
          {/* Left Content */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4 px-4 text-center md:w-1/2 md:px-6 md:text-left lg:px-8 xl:px-12 mt-4 md:mt-0">
            <span className="inline-block rounded-full border bg-primary/25 px-4 py-1 text-sm font-medium">
              Art
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-gray-900">
              Unveil Your Vision: <br />
              Embrace Creation, <br />
              Embrace You
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto md:mx-0">
              An artist exploring beauty through graphite, watercolor, acrylic,
              and pastel. Let my art speak where words fall short.
            </p>
            <Link
              href="/gallery"
              className="inline-block rounded-full bg-primary px-5 py-2 sm:px-6 sm:py-3 font-medium text-white transition-colors hover:bg-teal-800"
            >
              View Gallery
            </Link>
          </div>

          {/* Right Image */}
          <div className="h-[45vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] xl:h-[60vh] w-full md:w-[1000px] mt-0 md:-mt-12">
            <div className="relative h-full w-full md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto">
              <Image
                src="/hero1.jpeg"
                alt="Artist sitting on a chair"
                fill
                className="rounded-[50px] sm:rounded-[60px] md:rounded-[70px] object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Custom Art Section - Centered absolutely */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center transform translate-y-1/2">
          <section className="bg-primary py-5 sm:py-6 md:py-7 lg:py-8 w-[92%] sm:w-[85%] md:w-[75%] lg:w-[70%] xl:w-[65%] rounded-[25px] sm:rounded-[30px] md:rounded-[35px] shadow-xl">
            <div className="mx-auto px-3 sm:px-4 md:px-6 text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-white leading-snug sm:leading-normal">
                Custom Art That Tells Your Story
              </h2>
              <p className="mt-1 sm:mt-2 text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-loose">
                Turn your favorite memories into hand crafted masterpieces.
                Perfect for gifts, decor, or keepsakes.
              </p>
              <div className="mt-3 sm:mt-4 md:mt-5 flex justify-center">
                <Link
                  href="/commission"
                  className="inline-block rounded-full bg-background px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 font-bold text-primary transition-colors hover:bg-gray-100"
                >
                  Place Your Order
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Hero;
