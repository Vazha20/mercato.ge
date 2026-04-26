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

  const isActive = open || value.length > 0;

  return (
    <section
      className={`${styles.section} ${open ? styles.bodyShift : ""}`}
    >
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

        <AlignRightOutlined className={styles.Details} />

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

            {/* DEAL TYPES */}
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

            {/* LOCATION HEADER */}
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
    </section>
  );
}