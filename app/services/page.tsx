'use client';

import { ExclamationCircleOutlined, PlayCircleOutlined, VerticalAlignMiddleOutlined, VideoCameraFilled } from '@ant-design/icons';
import styles from './page.module.css';

const services = [
  {
    id: 1,
    icon: <VerticalAlignMiddleOutlined />,
    title: "უძრავი ქონება",
  },
  {
    id: 2,
    icon: <PlayCircleOutlined />,
    title: "განავითარე ბიზნესი სწორად",
  },
  {
    id: 3,
    icon: <VideoCameraFilled />,
    title: "ფოტო და ვიდეო მომსახურება",
  },
];

export default function Services() {
  return (
     
    <section className={styles.wrapper}>
      <div className={styles.Flex}>
      <ExclamationCircleOutlined style={{fontSize: '22px'}}/>
      <h2 className={styles.title}>სერვისები</h2>
      </div>
    

      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.id} className={styles.card}>
            
            <div className={styles.icon}>{s.icon}</div>

            <h3 className={styles.cardTitle}>{s.title}</h3>
          

          </div>
        ))}
      </div>
    </section>
  );
}