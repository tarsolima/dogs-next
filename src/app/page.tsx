import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";

export default async function Home() {
  const {data} = await photosGet();
  
  return (
    <main className="container mainContainer">
      {data && <Feed photos={data} />}
    </main>
  );
}
