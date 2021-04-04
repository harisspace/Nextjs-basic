import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="keywords" content="Homepage" />
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <h1>hello</h1>
      </div>
    </>
  );
}
