import styles from "../components/layout.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1>The post you are looking for does not exist</h1>
    </div>
  );
}
