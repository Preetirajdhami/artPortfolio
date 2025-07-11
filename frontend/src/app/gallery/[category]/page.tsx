"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion, Variants, Transition } from "framer-motion";
import { useDrag } from "@use-gesture/react";

type ImageType = {
  src: string;
  title: string;
  description: string;
};

const categoriesData: Record<string, { title: string; images: ImageType[] }> = {
  "graphite-and-charcoal": {
    title: "Graphite and Charcoal Art",
    images: [
      { src: "/graphite1.jpg", title: "Mountain Landscape", description: "Detailed charcoal drawing of mountain ranges" },
      { src: "/graphite2.jpg", title: "Portrait Study", description: "Graphite portrait on textured paper" },
      { src: "/graphite3.jpg", title: "Portrait Study", description: "Graphite portrait on textured paper" },
      { src: "/graphite4.jpg", title: "Portrait Study", description: "Graphite portrait on textured paper" },
    ],
  },
  watercolor: {
    title: "Watercolor Painting",
    images: [
      { src: "/watercolor1.jpg", title: "Floral Arrangement", description: "Vibrant watercolor flowers" },
      { src: "/watercolor2.jpg", title: "Floral Arrangement", description: "Vibrant watercolor flowers" },
      { src: "/watercolor3.jpg", title: "Floral Arrangement", description: "Vibrant watercolor flowers" },
      { src: "/watercolor4.jpg", title: "Floral Arrangement", description: "Vibrant watercolor flowers" },
    ],
  },
  acrylic: {
    title: "Acrylic Painting",
    images: [
      { src: "/acrylic1.jpg", title: "Sunset Over Ocean", description: "Acrylic painting of a breathtaking sunset over the waves" },
      { src: "/acrylic2.jpg", title: "Abstract Expression", description: "Bold and colorful abstract acrylic artwork" },
      { src: "/acrylic3.jpg", title: "Abstract Expression", description: "Bold and colorful abstract acrylic artwork" },
      { src: "/acrylic4.jpg", title: "Abstract Expression", description: "Bold and colorful abstract acrylic artwork" },
    ],
  },
};

const GalleryByCategory = ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const data = categoriesData[category];

  // Redirect or handle invalid category if no data found
  if (!data) {
    return <div className="text-center p-20 text-xl">Category not found.</div>;
  }

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const bindSwipe = useDrag(({ swipe: [swipeX] }) => {
    if (selectedImage !== null) {
      const totalImages = data.images.length;
      if (swipeX > 0) {
        setSelectedImage((prev) => (prev === null ? 0 : (prev - 1 + totalImages) % totalImages));
      } else if (swipeX < 0) {
        setSelectedImage((prev) => (prev === null ? 0 : (prev + 1) % totalImages));
      }
    }
  });

  const lightboxVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const captionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transitionConfig: Transition = { duration: 0.3 };

  return (
    <div className="bg-background min-h-screen px-4 py-8">
      <h2 className="text-3xl font-bold text-primary mb-6">{data.title}</h2>

      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-lg z-10 hidden sm:flex"
          onClick={() => scroll("left")}
        >
          <FaArrowLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide scroll-smooth"
        >
          {data.images.map((image, i) => (
            <div
              key={i}
              className="relative flex-none w-64 h-64 snap-center overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(i)}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={512}
                height={512}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-lg z-10 hidden sm:flex"
          onClick={() => scroll("right")}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={lightboxVariants}
            transition={transitionConfig}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-50"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>

              <button
                className="absolute left-4 text-white text-4xl hover:text-gray-300 z-50"
                onClick={() =>
                  setSelectedImage((prev) => {
                    if (prev === null) return null;
                    return (prev - 1 + data.images.length) % data.images.length;
                  })
                }
              >
                <FaArrowLeft />
              </button>

              <button
                className="absolute right-4 text-white text-4xl hover:text-gray-300 z-50"
                onClick={() =>
                  setSelectedImage((prev) => {
                    if (prev === null) return null;
                    return (prev + 1) % data.images.length;
                  })
                }
              >
                <FaArrowRight />
              </button>

              <motion.div
                className="max-w-6xl w-full h-full flex flex-col md:flex-row items-center justify-center p-4 md:p-8 gap-6 md:gap-8"
                variants={captionVariants}
              >
                <motion.div
                  key={selectedImage}
                  variants={imageVariants}
                  className="flex justify-center w-full max-w-xl"
                >
                  <Image
                    src={data.images[selectedImage].src}
                    alt={data.images[selectedImage].title}
                    width={800}
                    height={800}
                    className="object-contain max-h-[80vh] w-auto"
                    {...bindSwipe()}
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col text-center md:text-left md:max-w-md"
                  variants={captionVariants}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{data.images[selectedImage].title}</h3>
                  <p className="text-white">{data.images[selectedImage].description}</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryByCategory;
