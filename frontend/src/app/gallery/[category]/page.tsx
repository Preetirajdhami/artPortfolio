
import GalleryClientWrapper from "./GalleryClientWrapper";

interface PageProps {
  params: {
    category: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { category } = params;

  return <GalleryClientWrapper category={category} />;
};

export default Page;
