"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { PhoneOutlined, UserOutlined } from "@ant-design/icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  return (
    <>
      {/* TOP NAV */}
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link href="/">
            <Image
              src="/l.png"
              alt="Mercato logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          <div className={styles.right}>
            <select className={styles.langSelect}>
              <option value="ka">ქართული</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>

            <button onClick={() => setOpen(true)} className={styles.button}>
              <UserOutlined className={styles.AuthIcon} />
              <p>შესვლა</p>
            </button>
          </div>
        </div>
      </nav>

      {/* BOTTOM NAV */}
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.links}>
            <Link href="/aboutus">ჩვენ შესახებ</Link>

            {/* 🔽 DROPDOWN */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => setCatOpen(true)}
              onMouseLeave={() => setCatOpen(false)}
            >
              <span className={styles.dropdownTitle}>კატეგორიები ▾</span>

              {catOpen && (
                <div className={styles.dropdownMenu}>
                  <Link href="/categories/fruits">ყველა განცხადება</Link>
                  <Link href="/categories/vegetables">ბოსტნეული</Link>
                  <Link href="/categories/meat">ხორცი</Link>
                  <Link href="/categories/dairy">რძის პროდუქტები</Link>
                </div>
              )}
            </div>

            <Link href="/services">სერვისები</Link>
            <Link href="/contact">კონტაქტი</Link>
          </div>

          <div className={styles.Flex}>
            <PhoneOutlined className={styles.Phone} />
            <div className={styles.links}>+995 555 555 555</div>
          </div>
        </div>
      </nav>

      {/* LOGIN MODAL */}
      {open && (
        <div
          className={styles.modalOverlay}
          onClick={() => setOpen(false)}
        >
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

            <input
              className={styles.input}
              type="text"
              placeholder="Email"
            />
            <input
              className={styles.input}
              type="password"
              placeholder="პაროლი"
            />

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