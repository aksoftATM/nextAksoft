"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaLongArrowAltRight } from "react-icons/fa";

import styles from "./style.module.scss";

export default function AboutNews() {
  const [data, setData] = useState<any>({});
  const router = useRouter();
  const { id } = useRouter().query;
  const url = `https://aksoft.dev/max/api/news?populate=*`;

  useEffect(() => {
    if (id) {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.json();
        })
        .then((response) => {
          const state = response.data[0].attributes.newsCard.filter(
            (item: any) => item.id === Number(id)
          );
          console.log(state[0], "this is state");
          setData(state[0]);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  }, [id]);

  const BlogContent = ({ htmlString }: any) => {
    return (
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: htmlString }}
      />
    );
  };

  const handleGoForward = ()=> {
    router.push("/news")
  }

  console.log(data?.news_inner, "this is news mufa");

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h2  onClick={handleGoForward} className={styles.h2}>Новости: <FaLongArrowAltRight />  {data?.title_inner}</h2>
        <h3 className={styles.title}>{data?.title_inner}</h3>
        <p className={styles.text_p}>{data?.short_description}</p>
        <div className={styles.content}>
          <BlogContent htmlString={data?.news_inner} />
        </div>
      </div>
    </div>
  );
}
