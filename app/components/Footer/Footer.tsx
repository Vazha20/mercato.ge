import Link from "next/link";
import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
import styles from './Footer.module.css';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
         <Link href="/">
              <Image
                src="/l.png"
                alt="Mercato logo"
                width={120}
                height={40}
                priority
              />
          </Link>
        <p style={{marginTop: "8px"}}>იპოვე რაც გჭირდება ან განათავსე განცხადება</p>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h4>ნავიგაცია</h4>
          <Link href="/about">ჩვენ შესახებ</Link>
          <Link href="/shop">მაღაზია</Link>
          <Link href="/contact">კონტაქტი</Link>
        </div>

        {/* Contact */}
        <div className={styles.section}>
          <h4>კონტაქტი</h4>
          <p>Email: info@chupstore.com</p>
          <p>ტელეფონი: +995 555 555 555</p>
          <div className={styles.socials}>
            <FacebookFilled />
            <InstagramFilled />
          </div>
        </div>
      </div>

     <div className={styles.bottom}>
  &copy; {new Date().getFullYear()} Mercato. ყველა უფლება დაცულია. Powered by <Link className={styles.webers} href="https://www.facebook.com/profile.php?id=61577946634847" target="_blank" rel="noopener noreferrer">Mercato.ge</Link>
</div>

    </footer>
  );
}