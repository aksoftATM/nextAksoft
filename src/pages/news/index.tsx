"use client";

import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { CardThree } from "@/components/animation/card";
import Image from "@/assets/image/phone.png";
import Link from "next/link";

export default function News() {
  const [data, setData] = useState<any>([]);
  const url = `https://aksoft.dev/max/api/news?populate=newsCard.image`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((response) => {
        setData(response.data[0].attributes);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  console.log(data, "this is data");

  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <h3 className={styles.title}>{data?.title}</h3>
      <p>{data?.description}</p>
        <div className={styles.fit}>
          {data?.newsCard?.map((item: any, index: number) => (
            <Link key={index} href={`/news/${item.id}`}>
              <CardThree
                image={`https://aksoft.dev/max/${item.image.data.attributes.formats.small.url}`}
                name={item.title_inner}
                title={item.short_description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
