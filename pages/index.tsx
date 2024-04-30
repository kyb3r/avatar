import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vercel Avatar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Avatar</h1>

        <div style={{ display: "flex", gap: 10 }}>
          <img
            className={styles.avatar}
            src="/vercel.svg?text=VC"
            alt="Vercel"
          />
          <img className={styles.avatar} src="/1" alt="Vercel" />
          <img className={styles.avatar} src="/satori" alt="Vercel" />
          <img className={styles.avatar} src="/nextjs" alt="Vercel" />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(15, 1fr)",
            gap: 10,
          }}
        >
          {
            // loop through 0 to 100 and generate a random avatar
            Array.from({ length: 45 }, (_, i) => (
              <img
                key={i}
                className={styles.avatar}
                src={`/${i}.png`}
                alt="Vercel"
              />
            ))
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
