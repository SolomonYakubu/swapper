import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lorus</title>
        <style>
          @import
          url(&quot;https://fonts.googleapis.com/css2?family=Questrial&display=swap)
        </style>
        <meta property="og:title" content="Lorus" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />

        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#0c0c0c"></meta>
        <link rel="icon" href="favicon.ico"></link>
        <link rel="shortcut icon" href="favicon.ico" />

        <meta
          property="og:description"
          content=" Lorus has emerged as a phenomenon in the Cryptocurrency
                  community. Its limited supply and no-tax policy have made it a
                  sought-after asset, with investors all around the world
                  fighting for a piece of the pie. This has fueled discussion
                  about its potential as a big player in the cryptocurrency
                  market. Lorus's enigmatic and mythical nature has made it
                  a highly sought-after token. Its no-tax Buy/Sell policy has
                  made it a feasible investment prospect, and its potential has
                  made it a desired asset."
        />
        <meta property="og:url" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
