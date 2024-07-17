import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      Github Actions
      Github Pages
      <Image src={"https://placehold.co/600x400"} alt="coming" />
      Coming Soon
    </main>
  );
}
