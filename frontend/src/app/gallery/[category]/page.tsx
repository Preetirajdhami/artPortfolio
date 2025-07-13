"use server";

import GalleryClientWrapper from "./GalleryClientWrapper";

interface Props {
  params: {
    category: string;
  };
}

const Page = async ({ params }: Props) => {
  // Await params to satisfy Next.js requirement:
  const { category } = await Promise.resolve(params);

  // Now pass category to the client wrapper:
  return <GalleryClientWrapper category={category} />;
};

export default Page;
