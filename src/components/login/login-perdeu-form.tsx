"use client";

import { useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import ErrorMessage from "../helper/error-message";
import React from "react";
import styles from "./login-form.module.css";
import passwordLost from "@/actions/password-lost";
import { useRouter } from "next/navigation";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar Email</Button>
      )}
    </>
  );
}

export default function LoginPerdeuForm() {
  const [state, action] = React.useActionState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });
  const router = useRouter();

  if(state.ok) {
    setTimeout(() => {
      router.push('/login');
    }, 5000)
  }

  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    setUrl(window.location.href.replace("perdeu", "resetar"))
  }, []);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Email / Usuário" name="login" type="text" autoFocus />
        <input
          type="hidden"
          name="url"
          value={url}
        />
        {state.ok ? <p style={{color: '#4c1'}}>Email enviado! Você será redirecionado para a página de Login!</p>  : <FormButton />}
        <ErrorMessage error={state.error} />
      </form>
    </>
  );
}
