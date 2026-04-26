import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        მზად ხარ გაყიდვისთვის?
      </h2>

      <p className={styles.subtitle}>
        განათავსე განცხადება რამდენიმე წამში
      </p>

      <button className={styles.button}>
        განცხადების დამატება
      </button>
    </section>
  );
}