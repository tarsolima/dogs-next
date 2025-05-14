import photoGet from '@/actions/photo-get';
import FeedModal from '@/components/feed/feed-modal';

type FotoIdParams = { params: Promise<{ id: string }> };

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { id } = await params;
  const { data } = await photoGet(id);

  if (!data) return null;
  return <FeedModal photo={data} />;
}

export async function generateMetadata({ params }: FotoIdParams) {
  const { id } = await params;
  const { data } = await photoGet(id);

  if (!data) return { title: "Fotos" };
  return {
    title: data.photo.title,
  };
}