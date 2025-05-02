import type { FC } from "react"
import Image from "next/image"
import Link from "next/link"

const Hero: FC = () => {
  return (
    <>
      <section className="bg-background flex h-[600px] sm:h-[620px] md:h-[600px] lg:h-[620px] xl:h-[650px] flex-col items-center px-6 pt-2 sm:pt-4 md:pt-6 md:flex-row md:px-8 lg:px-10 relative">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col-reverse items-center md:flex-row">
          {/* Left Content */}
          <div className="space-y-3 sm:space-y-4 px-4 text-center md:w-1/2 md:px-6 md:text-left lg:px-12">
            <span className="inline-block rounded-full border bg-primary/25 px-4 py-1 text-sm font-medium">Art</span>
            <h1 className="text-3xl sm:text-4xl font-serif leading-tight text-gray-900 md:text-5xl">
              Unveil Your Vision: <br />
              Embrace Creation, <br />
              Embrace You
            </h1>
            <p className="text-gray-600">
              An artist exploring beauty through graphite, watercolor, acrylic, and pastel. Let my art speak where words
              fall short.
            </p>
            <Link
              href="/schedule"
              className="inline-block rounded-full bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-teal-800"
            >
              View Gallery
            </Link>
          </div>

          {/* Right Image */}
          <div className="h-[40vh] sm:h-[45vh] md:h-[55vh] lg:h-[58vh] md:w-1/2 ml-0 md:ml-32 mt-0 md:-mt-4">
            <div className="relative h-full w-full md:w-[600px] pr-6 md:pr-6">
              <Image
                src="/hero1.jpeg"
                alt="Artist sitting on a chair"
                fill
                className="rounded-[40px] sm:rounded-[60px] object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Custom Art Section - Centered absolutely */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center transform translate-y-1/2">
          <section className="bg-primary py-6 sm:py-7 md:py-8 lg:py-10 w-11/12 sm:w-5/6 md:w-2/3 rounded-[30px] sm:rounded-[40px] shadow-xl">
            <div className="mx-auto px-4 sm:px-6 text-center">
              <h2 className="text-xl sm:text-2xl font-serif text-white md:text-3xl">
                Custom Art That Tells Your Story
              </h2>
              <p className="mt-2 text-white text-sm sm:text-base md:text-lg">
                Turn your favorite memories into hand crafted masterpieces. Perfect for gifts, decor, or keepsakes.
              </p>
              <div className="mt-4 sm:mt-6 flex justify-center">
                <Link
                  href="/order"
                  className="inline-block rounded-full bg-background px-5 py-2 sm:px-6 sm:py-3 font-bold text-primary transition-colors hover:bg-gray-100"
                >
                  Place Your Order
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Spacer to account for overlapping section */}
      <div className="h-16 sm:h-20 md:h-24 lg:h-28"></div>
    </>
  )
}

export default Hero
