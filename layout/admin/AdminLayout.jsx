import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./AdminLayout.module.css"

export default function AdminLayout({ children, pagina }) {
  const pageTitle = typeof pagina === 'string' ? pagina : '';

  return (
    <>
      <Head>
        <title>{`Kiosco Cole - ${pageTitle}`}</title>
        <meta name="description" content="Kiosco Virtual" />
      </Head>

      <div className={styles.divAside}>
        <aside className={styles.aside}>
          <Link href={"/"}>
            <Image
              width={150}
              height={150}
              src="/assets/img/logo.svg"
              alt="imagen logotipo"
              className={styles.logo}
            />
          </Link>
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}
