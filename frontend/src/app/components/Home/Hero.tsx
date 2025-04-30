import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <section className="bg-background flex h-[650px] flex-col items-center px-4 pt-0 mt-0 md:flex-row md:px-0">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col-reverse items LIS-center md:flex-row">
        {/* Left Content */}
        <div className="mt-24 space-y-4 px-4 text-center md:w-1/2 md:px-6 md:text-left lg:px-12">
          <span className="inline-block rounded-full border bg-primary/25 px-4 py-1 text-sm font-medium">
            Art
          </span>
          <h1 className="text-4xl font-serif leading-tight text-gray-900 md:text-5xl">
            Unveil Your Vision: <br />
            Embrace Creation, <br />
            Embrace You
          </h1>
          <p className="text-gray-600">
            An artist exploring beauty through graphite, watercolor, acrylic, and pastel. Let my art speak where words fall
            short.
          </p>
          <Link
            href="/schedule"
            className="inline-block rounded-full bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-teal-800"
          >
            View Gallery
          </Link>
        </div>

        {/* Right Image */}
        <div className="h-[50vh] md:h-[60vh] md:w-1/2 ml-32">
          <div className="relative h-full w-[600px] pr-6 md:pr-6">
            <Image
              src="/hero1.jpeg"
              alt="Artist sitting on a chair"
              fill
              className="rounded-[60px] object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;