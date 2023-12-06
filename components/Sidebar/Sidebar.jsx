import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link"
import styles from "./Sidebar.module.css";
import useKiosco from "../../hooks/useKiosco";
import Categorias from "../Categorias/Categorias";


const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y Total", url: "/total" },
];

const Sidebar = () => {
  const { categorias } = useKiosco();
  const router = useRouter();

  return (
    <>
      <div className={styles.containerNav}>
        <Link href={"/"}>
          <Image
            width={150}
            height={150}
            src="assets/img/logo.svg"
            alt="imagen icono"
            className={styles.logoImg}
            priority="true"
          />
        </Link>

        <nav className={styles.nav}>
          {categorias.map((categoria) => (
            <Categorias
              key={categoria.id}
              categoria={categoria}
              className={styles.categorias}
            />
          ))}
        </nav>
        <div className={styles.divPasos}>
          {pasos.map((paso) => (
            <button
              key={paso.paso}
              className={styles.botonPasos}
              onClick={() => {
                router.push(paso.url);
              }}
            >
              {paso.nombre}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
