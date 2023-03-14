import { getAllPostIds, getPostData } from "../../../lib/posts";
import Layout from "../../components/layout";
import Head from "next/head";
import Script from "next/script";
import Date from "@/components/date";
import utilStyles from "@/styles/utils.module.css";
import styles from "../../components/layout.module.css";
import Image from "next/image";

const name = "Saul Goodman";

export default function Post({ data }) {
  return (
    <>
      <Head>
        <title>Post: {data.title}</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <Layout>
        <header className={styles.header}>
          <Image
            priority
            src="/images/saul_goodman.jpg"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt=""
          />
          <h2 className={utilStyles.headingLg}>{name}</h2>
        </header>
        <main className={styles.container}>
          <article>
            <Date dateString={data.date} />
            <h1 className={utilStyles.headingXl}>{data.title}</h1>
            <div className={utilStyles.lightText}></div>
            <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
          </article>
        </main>
      </Layout>
    </>
  );
}

export function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getPostData(params.id);
  return {
    props: { data },
  };
}
