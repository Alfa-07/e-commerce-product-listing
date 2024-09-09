// app/page.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Browse our products!</p>
      <Link href="/products" className={styles.link}>
        View Products
      </Link>
    </div>
  );
}
