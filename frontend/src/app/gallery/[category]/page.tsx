import GalleryClientWrapper from "./GalleryClientWrapper";

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params; 

  return <GalleryClientWrapper category={category} />;
}