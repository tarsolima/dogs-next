'use client'

import React from "react";
import styles from "./photo-content.module.css";
import PhotoComments from "./photo-comments";
import PhotoDelete from "./photo-delete";
import Link from "next/link";
import { useUser } from "@/context/user-context";
import Image from "next/image";
import { PhotoData } from "@/actions/photo-get";

const PhotoContent = ({ data, single}: {data: PhotoData, single: boolean}) => {
  const {user} = useUser()
  const { photo, comments } = data;
  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
      </div>
      <div className={styles.details}>
        <div>
          <div className={styles.author}>
            {user && user.username === photo.author ? (
              <PhotoDelete id={String(photo.id)} />
            ) : (
              <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualicacoes}>{photo.acessos}</span>
          </div>
          <h1 className="title">
           {photo.title}
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} Kg</li>
            <li>{photo.idade} Anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
