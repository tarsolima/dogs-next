"use client";

import React from "react";
import FeedIcon from "@/icons/feed-icon";
import EstatisticasIcon from "@/icons/estatisticas-icon";
import AdicionarIcon from "@/icons/adicionar-icon";
import SairIcon from "@/icons/sair-icon";
import styles from "./conta-header.module.css";
import useMedia from "@/hooks/use-media";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logout from "@/actions/logout";
import { useUser } from "@/context/user-context";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/conta/postar":
      return "Poste Sua Foto";
    case "/conta/estatisticas":
      return "Estatisticas";
    default:
      return "Minha Conta";
  }
}

export default function ContaHeader() {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const menuRef = React.useRef<HTMLElement | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  const pathname = usePathname();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const { setUser } = useUser();

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileMenu(false);
      }
    }

    if (mobileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenu]);

  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          ref={buttonRef}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        ></button>
      )}
      <nav
        ref={menuRef}
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/conta" className={pathname === "/conta" ? "active" : ""}>
          <FeedIcon /> {mobile && "Minhas Fotos"}
        </Link>
        <Link
          href="/conta/estatisticas"
          className={pathname === "/conta/estatisticas" ? "active" : ""}
        >
          <EstatisticasIcon /> {mobile && "Estatísticas"}{" "}
        </Link>
        <Link
          href="/conta/postar"
          className={pathname === "/conta/postar" ? "active" : ""}
        >
          <AdicionarIcon /> {mobile && "Adicionar Fotos"}
        </Link>
        <button onClick={handleLogout}>
          {" "}
          <SairIcon />
          {mobile && "sair"}
        </button>
      </nav>
    </header>
  );
}
