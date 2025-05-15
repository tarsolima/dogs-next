import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";

type PerfilUserPageParams = {
  params: Promise<{user: string}>;
}

export default async function PerfilUserPage({
  params,
}: PerfilUserPageParams) {
  const {user} = await params;
  const {data} = await photosGet({user});

  if(!data) return null;
  
  return (
    <section  className="container mainSection">
      <h1 className="title">{user}</h1>
      <Feed photos={data} user={user} />
    </section >
  );
}
