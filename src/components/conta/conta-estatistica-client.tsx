'use client'
import { StatsData } from '@/actions/stats-get';
import dynamic from 'next/dynamic'

const ContaEstatisticas = dynamic(() => import('./conta-estatistica'), {
  loading: () => <p>Carregando...</p>,
  ssr: false
});

type Props = {
  data: StatsData[]
}

export default function ContaEstatisticaClient({data}: Props) {
  return <ContaEstatisticas data={data} />;
}