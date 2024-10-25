import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import BrowserOnly from "@docusaurus/BrowserOnly"; // import BrowserOnly
import styles from "./index.module.css";
import { useEffect } from "react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <BrowserOnly>
      {() => {
        useEffect(() => {
          if (window) {
            window.location.href = "docs/";
          }
        }, []);

        return (
          <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
              <Heading as="h1" className="hero__title">
                {siteConfig.title}
                <meta charSet="UTF-8" />
                <meta http-equiv="refresh" content="0; url=docs/" />
                <title>Your Site Title Here</title>
              </Heading>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}></div>
            </div>
          </header>
        );
      }}
    </BrowserOnly>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title}>
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
