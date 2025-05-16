import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <section className="  bg-background responsive-padding  flex flex-col  sm:items-center  md:items-center md:py-32 md:justify-center md:gap-12 ">
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center  w-full  mx-auto">
        {/* Left Content */}
        <div className="flex-1 max-w-lg mx-auto text-center lg:text-left space-y-4 md:space-y-6 mt-6 md:mt-0  md:px-0">
          <span className="inline-block rounded-full border bg-primary/25 px-4 py-1 text-sm font-medium">
            Art
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-gray-900">
            Unveil Your Vision: <br />
            Embrace Creation, <br />
            Embrace You
          </h1>
          <p className="text-base text-gray-600 max-w-md mx-auto md:mx-0">
            An artist exploring beauty through graphite, watercolor, acrylic,
            and pastel. Let my art speak where words fall short.
          </p>
          <Link
            href="/gallery"
            className="inline-block rounded-full bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-teal-800"
          >
            View Gallery
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end px-4 md:px-0">
          <div className="relative w-full max-w-[500px] h-[50vh] md:h-[50vh]  rounded-[50px]  overflow-hidden shadow-lg">
            <Image
              src="/hero1.jpeg"
              alt="Artist sitting on a chair"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Custom Art Section - Centered absolutely */}
      <div className="absolute bottom-28 left-0 right-0 flex justify-center transform translate-y-1/2">
        <section className="bg-primary py-5 sm:py-6 md:py-7 lg:py-8 w-[92%]  rounded-[25px]  shadow-xl">
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
  );
};

export default Hero;
