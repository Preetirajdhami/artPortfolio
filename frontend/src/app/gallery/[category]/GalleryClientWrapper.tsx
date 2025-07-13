"use client";

import GalleryByCategory from "./GalleryByCategory";

const GalleryClientWrapper = ({ category }: { category: string }) => {
  return <GalleryByCategory category={category} />;
};

export default GalleryClientWrapper;
