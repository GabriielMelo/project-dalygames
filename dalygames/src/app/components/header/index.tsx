import Image from "next/image";
import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";
import logoImg from "../../../../assets/logo.svg";
import styles from "./style.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <Image src={logoImg} alt="logo" />
          <Link href={"/"}>Games</Link>
          <Link href={"/profile"}>Profile</Link>
        </nav>
        <div className={styles.loginbar}>
          <button>
            <LiaGamepadSolid size={24} color="#666" />
          </button>
        </div>
      </div>
    </header>
  );
}
