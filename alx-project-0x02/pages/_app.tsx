import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/dist/shared/lib/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Application</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is my application built with Next.js" />
        <meta name="keywords" content="Next.js, React, Application" />
      </Head>

      <div className="container px-6 width-full mx-auto">
        <Component {...pageProps} />
      </div>
    </>
  );
}
