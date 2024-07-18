import Image from "next/image";
import styles from "./page.module.css";



export default function Home() {
  const imgSrc = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/\
      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"
  return (
    <main className={styles.main}>
      Github Actions
      Github Pages
      <Image src={imgSrc} width={600} height={400} alt="coming" />
      Coming Soon
    </main>
  );
}
