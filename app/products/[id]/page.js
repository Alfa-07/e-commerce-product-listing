// app/products/[id]/page.js
import styles from '../../../styles/Products.module.css';

export default function ProductDetail({ params }) {
  const { id } = params;

  const products = [
    { id: '1', name: 'Product One', price: '$10', description: 'Description for product one.' },
    { id: '2', name: 'Product Two', price: '$20', description: 'Description for product two.' },
    { id: '3', name: 'Product Three', price: '$30', description: 'Description for product three.' },
  ];

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.productDetailContainer}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}
