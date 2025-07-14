import GalleryClientWrapper from "./GalleryClientWrapper";

export default async function Page(props: unknown) {
  // Force cast props to correct shape to bypass type errors:
  const { params } = props as { params: { category: string } };

  return <GalleryClientWrapper category={params.category} />;
}
