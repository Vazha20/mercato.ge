import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>ჩვენ შესახებ</h1>

      <p className={styles.subtitle}>
        პლატფორმა, სადაც შეგიძლია მარტივად იყიდო და გაყიდო ნებისმიერი რამ.
      </p>

      {/* 🔹 Info cards */}
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>🎯 ჩვენი მიზანი</h3>
          <p>
            შევქმნათ მარტივი და სწრაფი სივრცე განცხადებების განთავსებისთვის.
          </p>
        </div>

        <div className={styles.card}>
          <h3>⚡ სისწრაფე</h3>
          <p>
            განცხადების დამატება მხოლოდ რამდენიმე წამში შეგიძლია.
          </p>
        </div>

        <div className={styles.card}>
          <h3>🔒 უსაფრთხოება</h3>
          <p>
            ვზრუნავთ მომხმარებლების უსაფრთხო და სანდო გამოცდილებაზე.
          </p>
        </div>

        <div className={styles.card}>
          <h3>🌍 საზოგადოება</h3>
          <p>
            ათასობით აქტიური მომხმარებელი ყოველდღიურად.
          </p>
        </div>
      </div>

      {/* 🔹 Bottom section */}
      <div className={styles.bottom}>
        <h2>რატომ ჩვენ?</h2>
        <p>
          ჩვენ ვქმნით თანამედროვე marketplace-ს, სადაც ყველაფერი მარტივია -
          მოძებნა, გაყიდვა და კომუნიკაცია.
        </p>
      </div>
    </section>
  );
}