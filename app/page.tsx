import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      Github Actions
      Github Pages
      <Image src={"/coming.png"} alt="coming" />
      Coming Soon
    </main>
  );
}
