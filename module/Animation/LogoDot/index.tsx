import { useEffect } from "react";
import Head from "next/head";

const LogoDot: React.FC = () => {
  useEffect(() => {
    const el = document.body;

    el.addEventListener("click", function (e) {
      el.hidden = true;
      requestAnimationFrame(() => {
        el.hidden = false;
      });
    });

    requestAnimationFrame(() => {
      document.body.dataset.play = "true";
    });
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        :root {
          --duration: 6s;
          --wave-duration: calc(var(--duration) * 0.25);
          // ... (other styles)
        }
        // ... (other styles)

        /* Additional global styles */
        body:not([data-play]) *,
        body:not([data-play]) *:before,
        body:not([data-play]) *:after {
          visibility: hidden;
          animation: none !important;
        }
      `}</style>
      <style jsx>{`
        body {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .container {
          display: grid;
          align-items: center;
          justify-items: center;
          > * {
            grid-area: 1 / 1;
          }
        }
        .title {
          font-size: 10vmin;
          margin: 0;
          // ... (other styles)
        }
        .title .char {
          // ... (other styles)
        }
        /* Add more styles as needed */
      `}</style>
      <div className="container">
        <h1 className="title" data-splitting>
          Splitting
        </h1>
        <div className="dot">
          <div className="dot-inner">
            <svg
              className="dot-wave background"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
            >
              <path d="M799.09 90s11.04 0 0 0c-80.714 0-79.621-90-200-90-120.377 0-118.607 90-200 90-81.391 0-81.215-90-200-90C80.308 0 78.68 89.29-.91 90c-6.946.062 0 0 0 0v510h800V90z" />
            </svg>
            <svg
              className="dot-wave foreground"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
            >
              <path d="M799.09 90s11.04 0 0 0c-80.714 0-79.621-90-200-90-120.377 0-118.607 90-200 90-81.391 0-81.215-90-200-90C80.308 0 78.68 89.29-.91 90c-6.946.062 0 0 0 0v510h800V90z" />
            </svg>
          </div>
        </div>
      </div>
      <a
        href="https://youtu.be/hVqCPXzD_hA"
        target="_blank"
        data-keyframers-credit
        style={{ color: "#FFF" }}
      ></a>
      <script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script>
    </>
  );
};

export default LogoDot;
