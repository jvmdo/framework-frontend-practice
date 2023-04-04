import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import utilStyles from "@/styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";
import Date from "@/components/date";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>NextJS Blog Tutorial</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <div className={styles.thirteen}>
              <Image
                src="/thirteen.svg"
                alt="13"
                width={40}
                height={31}
                priority
              />
            </div>
            <h1 className={`${inter.className} ${utilStyles.heading2Xl}`}>
              &nbsp;Blog
            </h1>
          </div>
          <div className={styles.grid}>
            {data.map(({ id, date, title }) => (
              <Link key={id} href={`/posts/${id}`} className={styles.card}>
                <h2 className={inter.className}>{title}</h2>
                <p className={inter.className}>
                  <Date dateString={date} />
                </p>
              </Link>
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = getSortedPostsData();
  return {
    props: { data },
  };
}