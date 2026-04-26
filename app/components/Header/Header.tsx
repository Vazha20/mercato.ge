"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { PhoneOutlined, UserOutlined } from '@ant-design/icons';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link href="/">
            <div>
              <Image
                src="/l.png"
                alt="Mercato logo"
                width={120}
                height={40}
                priority
              />
            </div>
          </Link>

          <div className={styles.right}>
            <select className={styles.langSelect}>
              <option value="ka">ქართული</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>

            {/* 🔥 აქ შეცვლილია */}
            <button onClick={() => setOpen(true)} className={styles.button}>
              <UserOutlined className={styles.AuthIcon}/>
              <p>შესვლა</p>
            </button>
          </div>
        </div>
      </nav>

      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.links}>
            <Link href="/aboutus">ჩვენ შესახებ</Link>
            <Link href="/categories">კატეგორიები</Link>
            <Link href="/categories">სერვისები</Link>
            <Link href="/contact">კონტაქტი</Link>
          </div>

          <div className={styles.Flex}>
            <PhoneOutlined className={styles.Phone}/>
            <div className={styles.links}>+995 555 555 555</div>
          </div>
        </div>
      </nav>
{open && (
  <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
    <div
      className={styles.modal}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.LoginFlex}>
              <h2 className={styles.modalTitle}>შესვლა</h2>
               <button
                className={styles.closeBtn}
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

      </div>
      

      <input className={styles.input} type="text" placeholder="Email" />
      <input className={styles.input} type="password" placeholder="პაროლი" />

      <button className={styles.loginBtn}>შესვლა</button>

      <p className={styles.extra}>
        არ გაქვს ანგარიში? <span>რეგისტრაცია</span>
      </p>
    </div>
  </div>
)}
    </>
  );
}