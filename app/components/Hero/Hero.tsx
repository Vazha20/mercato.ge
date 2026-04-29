import { AlignRightOutlined, SearchOutlined } from "@ant-design/icons";
import styles from "./Hero.module.css";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const texts = ["დიდი დიღომი", "წერეთელი", "საბურთალო"];

  const dealTypes = [
    "იყიდება",
    "ქირავდება",
    "გირავდება",
    "გაიცემა იჯარით",
    "ქირავდება დღიურად",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState("იყიდება");

  // 👉 NEW (modal state)
  const [showModal, setShowModal] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // typing animation
  useEffect(() => {
    if (isTyping) return;

    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(currentText.substring(0, displayed.length + 1));

        if (displayed === currentText) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayed(currentText.substring(0, displayed.length - 1));

        if (displayed === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, textIndex, isTyping]);

  // outside click close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) return;

      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

useEffect(() => {
  if (showModal) {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  } else {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }

  return () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  };
}, [showModal]);

  const isActive = open || value.length > 0;

  return (
    <section className={`${styles.section} ${open ? styles.bodyShift : ""}`}>
      {/* TITLE */}
      {!isActive && (
        <div className={styles.visible}>
          <h1 className={styles.title}>იყიდე და გაყიდე მარტივად</h1>

          <p className={styles.subtitle}>
            იპოვე რაც გჭირდება ან განათავსე განცხადება
          </p>
        </div>
      )}

      {/* SEARCH */}
      <div
        className={`${styles.searchWrapper} ${
          open ? styles.searchFixed : ""
        }`}
        ref={wrapperRef}
      >
        <input
          type="text"
          value={value}
          placeholder={
            value ? "მაგ." : displayed ? `მაგ. ${displayed}` : "მაგ."
          }
          className={`${styles.input} ${
            open || value ? styles.activeInput : ""
          }`}
          onClick={() => setOpen(true)}
          onChange={(e) => {
            const val = e.target.value;
            setValue(val);

            if (val.length > 0) {
              setIsTyping(true);
            } else {
              setIsTyping(false);
              setDisplayed("");
              setTextIndex(0);
            }
          }}
        />

        {/* 👉 DETAIL BUTTON (opens modal) */}
        <AlignRightOutlined
          className={styles.Details}
          onClick={() => setShowModal(true)}
        />

        <button className={styles.button}>
          <SearchOutlined className={styles.Search} /> ძებნა
        </button>

        {/* DROPDOWN */}
        {open && (
          <div className={styles.dropdown}>
            <div className={styles.dropdownHeader}>
              <span>გარიგების ტიპი</span>

              <button
                className={styles.closeBtn}
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className={styles.dealTypes}>
              {dealTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedDeal(type)}
                  className={`${styles.dealBtn} ${
                    selectedDeal === type ? styles.activeDeal : ""
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className={styles.dropdownHeader}>
              <span>აირჩიე მდებარეობა</span>
            </div>

            <div className={styles.locations}>
              {[
                "თბილისი",
                "ბათუმი",
                "ქუთაისი",
                "რუსთავი",
                "ზუგდიდი",
                "თელავი",
                "გორი",
                "ბაკურიანი",
                "ბორჯომი",
                "გუდაური",
              ].map((city) => (
                <div key={city} className={styles.cityItem}>
                  {city}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      

{showModal && (
  <div
    className={styles.modalOverlay}
    onClick={() => setShowModal(false)}
  >
    <div
      className={styles.modal}
      onClick={(e) => e.stopPropagation()}
    >
      {/* HEADER */}
      <div className={styles.modalHeader}>
        <h2>დეტალური ფილტრი</h2>
        <button onClick={() => setShowModal(false)}>✕</button>
      </div>

      {/* ქონების ტიპი */}
      <p className={styles.label}>ქონების ტიპი</p>
      <div className={styles.tags}>
        {[
          "ბინა",
          "კერძო სახლი",
          "აგარაკი",
          "მიწის ნაკვეთი",
          "კომერციული ფართი",
          "სასტუმრო",
        ].map((item) => (
          <button key={item} className={styles.tagBtn}>
            {item}
          </button>
        ))}
      </div>

      {/* გარიგების ტიპი */}
      <p className={styles.label}>გარიგების ტიპი</p>
      <div className={styles.tags}>
        {[
          "იყიდება",
          "ქირავდება",
          "გირავდება",
          "ქირავდება დღიურად",
        ].map((item) => (
          <button key={item} className={styles.tagBtn}>
            {item}
          </button>
        ))}
      </div>

      {/* მდგომარეობა */}
      <p className={styles.label}>მდგომარეობა</p>
      <div className={styles.padding}>
      <select className={styles.select}>
        <option>აირჩიე მდგომარეობა</option>
        <option>ახალი</option>
        <option>ძველი</option>
      </select>
      </div>

      {/* ფასი */}
      <p className={styles.label}>სრული ფასი</p>
      <div className={styles.range}>
        <input type="number" placeholder="დან" />
        <input type="number" placeholder="მდე" />
      </div>

      {/* ფართი */}
      <p className={styles.label}>კვადრატული მეტრის ფასი</p>
      <div className={styles.range}>
        <input type="number" placeholder="დან მ²" />
        <input type="number" placeholder="მდე მ²" />
      </div>

      {/* ღილაკი */}
      <div className={styles.paddingBtn}>
      <button className={styles.submitBtn}>
        ძებნა
      </button>
      </div>
    </div>
  </div>
)}
    </section>
  );
}