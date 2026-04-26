import Link from "next/link";
import styles from "./VipSection.module.css";
import Image from "next/image";

type VipItem = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
};

const vipItems: VipItem[] = [
  {
    id: 1,
    title: "VIP ბინა",
    description: "ცენტრში",
    price: "$1200",
    image: "/vip1.jpg",
  },
  {
    id: 2,
    title: "VIP მანქანა",
    description: "ახალი მოდელი",
    price: "$25,000",
    image: "/vip1.jpg",
  },
  {
    id: 3,
    title: "VIP ოფისი",
    description: "ბიზნეს ზონა",
    price: "$3000",
    image: "/vip1.jpg",
  },
  {
    id: 4,
    title: "VIP სახლი",
    description: "პანორამა",
    price: "$500,000",
    image: "/vip1.jpg",
  },
];

export default function VipSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.flex}>
      <div className={styles.Rocket}>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"/>
        </svg>
        <h2 className={styles.title}>VIP განცხადებები</h2>
      </div>
        <Link href="/vip"><p className={styles.viewAll}>ყველას ნახვა</p></Link>
      </div>

      <div className={styles.grid}>
        {vipItems.map((item) => (
          <div key={item.id} className={styles.card}>
            
            {/* 📸 Image */}
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={styles.image}
              />
            </div>

            {/* 📄 Content */}
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <span className={styles.price}>{item.price}</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}