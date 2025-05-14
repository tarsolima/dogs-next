import photoGet from "@/actions/photo-get";
import PhotoContent from "@/components/photo/photo-content";

type FotoIdParams = { params: Promise<{ id: string }> };

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { id } = await params;
  const { data } = await photoGet(id);

  if (!data) return null;
  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  );
}

export async function generateMetadata({ params }: FotoIdParams) {
  const { id } = await params;
  const { data } = await photoGet(id);

  if (!data) return { title: "Fotos" };
  return {
    title: data.photo.title,
  };
}