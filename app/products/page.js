// app/products/page.js
import Link from 'next/link';
import styles from '../../styles/Products.module.css';

const products = [
  { id: '1', name: 'Product One', price: '$10' },
  { id: '2', name: 'Product Two', price: '$20' },
  { id: '3', name: 'Product Three', price: '$30' },
];

export default function Products() {
  return (
    <div className={styles.productsContainer}>
      <h1>Products</h1>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <Link href={`/products/${product.id}`} className={styles.link}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
