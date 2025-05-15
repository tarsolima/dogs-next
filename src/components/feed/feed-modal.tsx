"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { PhotoData } from "@/actions/photo-get";
import PhotoContent from "../photo/photo-content";
import styles from "./feed-modal.module.css";

export default function FeedModal({ photo }: { photo: PhotoData }) {
  const router = useRouter();
  const pathname = usePathname();
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        router.back();
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [router]);

  function handleOutsideClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === modalRef.current) {
      router.back();
    }
  }

  return pathname.includes("foto") ? (
    <div className={styles.modal} onClick={handleOutsideClick} ref={modalRef}>
      <PhotoContent data={photo} single={false} />
    </div>
  ) : null;
}
