import GalleryClientWrapper from "./GalleryClientWrapper";

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params; // Await the params to access category

  return <GalleryClientWrapper category={category} />;
}