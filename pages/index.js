import Head from "next/head";
import MainPage from "./main";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>
          Wallet Casino - Try to generate a random wallet with some money in it
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Wallet Casino - Try to generate a random wallet with some money in it"
        />
        <meta
          name="description"
          content="There are over 2^132, but maybe it's your lucky day! Share if you get a huge windfall."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lighthearted-madeleine-4a9f02.netlify.app/"
        />
        <meta
          property="og:title"
          content="Wallet Casino - Try to generate a random wallet with some money in it"
        />
        <meta
          property="og:description"
          content="There are over 2^132, but maybe it's your lucky day! Share if you get a huge windfall."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/pegaswap-493e9.appspot.com/o/guesser.png?alt=media&token=2aa9b950-d16f-41b5-8a27-95b60309a266"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://lighthearted-madeleine-4a9f02.netlify.app/"
        />
        <meta
          property="twitter:title"
          content="Wallet Casino - Try to generate a random wallet with some money in it"
        />
        <meta
          property="twitter:description"
          content="There are over 2^132, but maybe it's your lucky day! Share if you get a huge windfall."
        />
        <meta
          property="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/pegaswap-493e9.appspot.com/o/guesser.png?alt=media&token=2aa9b950-d16f-41b5-8a27-95b60309a266"
        ></meta>
      </Head>

      <main>
        <MainPage />
      </main>

      <footer>
        <div>
          <p>
            Your Odds (
            <a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki">
              BIP-39
            </a>
            ): 2048 ^ 12 = 2^132
          </p>
          <p>.....but who knows how many wallets have money? Good Luck! 🍦</p>
          <p>
            By: <a href="https://twitter.com/wangandyy">Andy</a> 🦤
          </p>
        </div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer p {
          margin: 0;
        }

        footer a {
          display: inline-block;
          justify-content: center;
          align-items: center;
          text-decoration: underline;
          color: blue;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
