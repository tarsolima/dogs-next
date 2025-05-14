import LoginResetarForm from "@/components/login/logi-resetar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
  description: "Resete a sua senha",
};

type ResetarSearchParams = {
  searchParams: Promise<{key: string; login: string}>
}

export default async function ResetarPage({searchParams}: ResetarSearchParams) {
  const {key, login} = await searchParams;
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a Senha</h1>
      <LoginResetarForm keyToken={key} login={login} />
    </div>
  );
}