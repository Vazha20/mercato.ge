import styles from "./AdSection.module.css";

export default function AdSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h2>აქ განთავსდება თქვენი რეკლამა</h2>
        </div>
      </div>
    </section>
  );
}