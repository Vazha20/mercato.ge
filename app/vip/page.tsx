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
    title: "2 ოთახიანი ბინა",
    city: "საბურთალო",
    price: 120000,
    type: "იყიდება",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 6,
    title: "2 ოთახიანი ბინა",
    city: "საბურთალო",
    price: 120000,
    type: "იყიდება",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 7,
    title: "2 ოთახიანი ბინა",
    city: "საბურთალო",
    price: 120000,
    type: "იყიდება",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 8,
    title: "2 ოთახიანი ბინა",
    city: "საბურთალო",
    price: 120000,
    type: "იყიდება",
    image: "https://via.placeholder.com/400x300",
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
        
        <div className={styles.Rocket}>  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"/>
        </svg><h2 className={styles.title}>VIP განცხადებები</h2></div>

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