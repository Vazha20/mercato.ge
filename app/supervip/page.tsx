'use client'

import { useState } from "react";
import styles from "./page.module.css";

const mockData = [
  {
    id: 1,
    title: "2 ოთახიანი ბინა",
    city: "საბურთალო",
    price: 120000,
    type: "იყიდება",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    title: "სტუდიო ბინა ზღვის ხედით",
    city: "ბათუმი",
    price: 500,
    type: "ქირავდება",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 3,
    title: "3 ოთახიანი ბინა ახალი რემონტით",
    city: "ვაკე",
    price: 180000,
    type: "იყიდება",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 4,
    title: "კომფორტული ბინა ცენტრში",
    city: "რუსთავი",
    price: 350,
    type: "ქირავდება",
    image: "",
  },
  {
    id: 5,
    title: "კომფორტული ბინა ცენტრში",
    city: "რუსთავი",
    price: 350,
    type: "ქირავდება",
    image: "",
  },
  {
    id: 6,
    title: "კომფორტული ბინა ცენტრში",
    city: "რუსთავი",
    price: 350,
    type: "ქირავდება",
    image: "",
  },
  {
    id: 7,
    title: "კომფორტული ბინა ცენტრში",
    city: "რუსთავი",
    price: 350,
    type: "ქირავდება",
    image: "",
  },
  {
    id: 8,
    title: "კომფორტული ბინა ცენტრში",
    city: "რუსთავი",
    price: 350,
    type: "ქირავდება",
    image: "",
  },
];

export default function Listings() {
  const [selectedType, setSelectedType] = useState("ყველა");

  const filtered = mockData.filter((item) =>
    selectedType === "ყველა" ? true : item.type === selectedType
  );

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        
        <div className={styles.Rocket}><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clipRule="evenodd"/>
</svg><h2 className={styles.title}>SUPER VIP განცხადებები</h2></div>

        {/* GRID */}
        <div className={styles.grid}>
          {filtered.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} className={styles.image} />

              <div className={styles.content}>
                <div className={styles.topRow}>
                  <h3>{item.title}</h3>
                  <span className={styles.badge}>{item.type}</span>
                </div>

                <p>{item.city}</p>

                <div className={styles.bottomRow}>
                  <span className={styles.price}>
                    {item.price.toLocaleString()} ₾
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}