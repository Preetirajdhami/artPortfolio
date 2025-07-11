"use client"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({})
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([])

  const galleryData = [
    {
      category: "Graphite and Charcoal Art",
      images: [
        { src: "/graphite1.jpg" },
        { src: "/graphite2.jpg" },
        { src: "/graphite3.jpg" },
        { src: "/graphite4.jpg" },
      ],
    },
    {
      category: "Watercolor Painting",
      images: [
        { src: "/watercolor1.jpg" },
        { src: "/watercolor2.jpg" },
        { src: "/watercolor3.jpg" },
        { src: "/watercolor4.jpg" },
        { src: "/watercolor5.jpg" },
        { src: "/watercolor6.jpg" },
        { src: "/watercolor7.jpg" },
        { src: "/watercolor8.jpg" },
        { src: "/watercolor9.jpg" },
      ],
    },
    {
      category: "Acrylic Painting",
      images: [
        { src: "/acrylic1.jpg" },
        { src: "/acrylic2.jpg" },
        { src: "/acrylic3.jpg" },
        { src: "/acrylic4.jpg" },
      ],
    },
  ]

  const scroll = (index: number, direction: "left" | "right") => {
    if (scrollRefs.current[index]) {
      const scrollAmount = scrollRefs.current[index].clientWidth
      scrollRefs.current[index].scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = (sectionIndex: number) => {
    if (scrollRefs.current[sectionIndex]) {
      const container = scrollRefs.current[sectionIndex]
      const scrollLeft = container.scrollLeft
      const itemWidth = container.clientWidth
      const currentIndex = Math.round(scrollLeft / itemWidth)

      setCurrentImageIndex((prev) => ({
        ...prev,
        [sectionIndex]: currentIndex,
      }))
    }
  }

  const handleImageLoad = (src: string) => {
    setImageLoaded((prev) => ({
      ...prev,
      [src]: true,
    }))
  }

  const handleImageError = (src: string) => {
    console.error(`Failed to load image: ${src}`)
    setImageLoaded((prev) => ({
      ...prev,
      [src]: false,
    }))
  }

  useEffect(() => {
    // Initialize current image indices
    const initialIndices: { [key: number]: number } = {}
    galleryData.forEach((_, index) => {
      initialIndices[index] = 0
    })
    setCurrentImageIndex(initialIndices)
  }, [])

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto px-4 py-8">
        {galleryData.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">{section.category}</h2>

            {/* Mobile Layout - Horizontal Scroll with Page Indicator */}
            <div className="block lg:hidden">
              <div className="relative">
                <div
                  ref={(el) => {
                    scrollRefs.current[sectionIndex] = el
                  }}
                  className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
                  onScroll={() => handleScroll(sectionIndex)}
                >
                  {section.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="relative flex-none w-full h-[400px] snap-center overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={`Gallery image ${imageIndex + 1}`}
                        fill
                        className="object-cover"
                        onLoad={() => handleImageLoad(image.src)}
                        onError={() => handleImageError(image.src)}
                        priority={imageIndex === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Page Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                  {(currentImageIndex[sectionIndex] || 0) + 1}/{section.images.length}
                </div>
              </div>
            </div>

            {/* Desktop Layout - Responsive Grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {section.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={`Gallery image ${imageIndex + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onLoad={() => handleImageLoad(image.src)}
                        onError={() => handleImageError(image.src)}
                        priority={imageIndex < 4}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Gallery
