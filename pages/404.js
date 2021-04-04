import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>404 | Page Not Found</title>
      </Head>
      <div className="not-found">
        <h1>Ooops...</h1>
        <h2>That page cannot be found :(</h2>
        <p>
          Going back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>{" "}
          is 3 seconds...
        </p>
      </div>
    </>
  );
};

export default NotFound;
