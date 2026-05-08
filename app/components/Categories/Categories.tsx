import { CalendarOutlined, CarFilled, CarOutlined, HomeOutlined, KeyOutlined } from "@ant-design/icons";
import styles from "./Categories.module.css";

const categories = [
  { label: "იყიდება ბინები", icon: <KeyOutlined /> },
  { label: "ქირავდება ბინები", icon: <HomeOutlined /> },
  { label: "ბინა დღიურად", icon: <CalendarOutlined /> },
  { label: "იყიდება მანქანა", icon: <CarOutlined /> },
  { label: "ქირავდება მანქანა", icon: <CarFilled /> },
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