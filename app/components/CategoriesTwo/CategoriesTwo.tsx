import { CalendarOutlined, CarOutlined, HomeOutlined, KeyOutlined } from "@ant-design/icons";
import styles from "./CategoriesTwo.module.css";

const categories = [
  { label: "აგარაკები", icon: <KeyOutlined /> },
  { label: "მშენებარე ბინები", icon: <CarOutlined /> },
  { label: "გირაბვდება ბინა", icon: <CalendarOutlined /> },
  { label: "ბინების ფასი" },
  { label: "ხელნაკეთი ნივთები", icon: <HomeOutlined /> },
];

export default function Categories() {
  return (
    <div className={styles.wrapper}>
      {categories.map((cat, index) => (
        <button key={index} className={styles.btn}>
          {cat.icon && <span className={styles.icon}>{cat.icon}</span>}
          {cat.label}
        </button>
      ))}
    </div>
  );
}