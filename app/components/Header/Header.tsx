"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import {
  PhoneOutlined,
  PlusCircleOutlined,
  PlusCircleTwoTone,
  UserOutlined,
} from "@ant-design/icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // 👉 outside click (categories)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) return;

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setCatOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeModal = () => {
    setOpen(false);
    setIsRegister(false);
  };

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
            <button className={styles.button}>
              <PlusCircleOutlined className={styles.AuthIcon}/>
              <p>დამატება</p>
            </button>
            <select className={styles.langSelect}>
              <option value="ka">ქართული</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>

            <button
              onClick={() => setOpen(true)}
              className={styles.button}
            >
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

            {/* DROPDOWN */}
            <div className={styles.dropdown} ref={dropdownRef}>
              <span
                onClick={() => setCatOpen((prev) => !prev)}
                className={`${styles.dropdownTitle} ${
                  catOpen ? styles.active : ""
                }`}
              >
                კატეგორიები
                <span className={styles.arrow}>▾</span>
              </span>

              {catOpen && (
                <div className={styles.dropdownMenu}>
                  <Link href="/categories/all">
                    ყველა განცხადება
                  </Link>
                  <Link href="/categories/vegetables">
                    იყიდება ბინები
                  </Link>
                  <Link href="/categories/meat">
                    ქირავდება ბინები
                  </Link>
                  <Link href="/categories/dairy">
                    ბინა დღიურად
                  </Link>
                  <Link href="/categories/dairy">
                    ბინა დღიურად
                  </Link>
                  <Link href="/categories/dairy">
                    ბინა დღიურად
                  </Link>
                  <Link href="/categories/dairy">
                    ბინა დღიურად
                  </Link>
                  <Link href="/categories/dairy">
                    ბინა დღიურად
                  </Link>
                  <Link href="/categories/dairy">
                    ბინა დღიურად
                  </Link>
                </div>
              )}
            </div>

            <Link href="/services">სერვისები</Link>
            <Link href="/contact">კონტაქტი</Link>
          </div>

          <div className={styles.Flex}>
            <PhoneOutlined className={styles.Phone} />
            <div className={styles.links}>
              +995 555 555 555
            </div>
          </div>
        </div>
      </nav>

      {/* LOGIN / REGISTER MODAL */}
      {open && (
        <div
          className={styles.modalOverlay}
          onClick={closeModal}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.LoginFlex}>
              <h2 className={styles.modalTitle}>
                {isRegister ? "რეგისტრაცია" : "შესვლა"}
              </h2>

              <button
                className={styles.closeBtn}
                onClick={closeModal}
              >
                ✕
              </button>
            </div>

            {/* REGISTER დამატებითი ველი */}
            {isRegister && (
              <input
                className={styles.input}
                type="text"
                placeholder="სახელი"
              />
            )}

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

            {/* REGISTER confirm */}
            {isRegister && (
              <input
                className={styles.input}
                type="password"
                placeholder="გაიმეორე პაროლი"
              />
            )}

            <button className={styles.loginBtn}>
              {isRegister ? "რეგისტრაცია" : "შესვლა"}
            </button>

            <p className={styles.extra}>
              {isRegister
                ? "უკვე გაქვს ანგარიში?"
                : "არ გაქვს ანგარიში?"}

              <span
                onClick={() =>
                  setIsRegister((prev) => !prev)
                }
                style={{
                  cursor: "pointer",
                  marginLeft: 6,
                }}
              >
                {isRegister ? "შესვლა" : "რეგისტრაცია"}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}