import Head from "next/head";
import Image from "next/image";
import homeStyles from "@/styles/Home.module.css";

export const siteTitle = "Next.js Blog";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={homeStyles.description}>
        <p>
          This is my NextJS&nbsp;
          <code className={homeStyles.code}>HelloWorld.jsx</code>&nbsp;project
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={homeStyles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      {children}
    </>
  );
}

export default Layout;
