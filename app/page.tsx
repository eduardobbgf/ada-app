import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Welcome to Ada</h1>
        <h2>The new way to study for interviews</h2>
      </div>
      <Link href="/login">Start</Link>
    </main>
  );
}
