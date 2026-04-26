import Link from "next/link";
import styles from "./SuperVipSection.module.css";
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

export default function SuperVipSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.flex}>
        
<div className={styles.Rocket}><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clipRule="evenodd"/>
</svg><h2 className={styles.title}>SUPER VIP განცხადებები</h2></div>
        
        <Link href="/supervip"><p className={styles.viewAll}>ყველას ნახვა</p></Link>
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