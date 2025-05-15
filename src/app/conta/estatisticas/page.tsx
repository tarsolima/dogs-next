import statsGet from "@/actions/stats-get"
import ContaEstatisticaClient from "@/components/conta/conta-estatistica-client";

export default async function EstatisticasPage() {
  const {data} = await statsGet();

  if(!data) return null;
  return (
    <section>
      <ContaEstatisticaClient data={data} />
    </section>
  );
}