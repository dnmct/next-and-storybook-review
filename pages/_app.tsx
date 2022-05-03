import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname === "/login") {
    return <Component {...pageProps} />;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <header
        style={{
          backgroundColor: "hotpink",
          padding: "2rem",
        }}
      >
        <nav style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/todos">Todos</Link>
          </li>
        </nav>
      </header>
      <main style={{ padding: "2rem", flex: 1 }}>
        <Component {...pageProps} />
      </main>
      <footer
        style={{
          backgroundColor: "hotpink",
          padding: "2rem",
        }}
      >
        Footer
      </footer>
    </div>
  );
}

export default MyApp;
