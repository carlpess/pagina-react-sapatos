import './style.css';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import shoes from '../../data';
import { useState } from 'react';

function Main() {
  const [products, setProducts] = useState([...shoes]);
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  function handleDetailproduct(product) {
    setOpen(true);
    setCurrentProduct(product);
  }

  return (
    <div className="container">
      <Header />
      <div className='container-products'>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleDetailProduct={handleDetailproduct}
          />
        ))}
      </div>
      <Footer />
      <Modal
        open={open}
        handleClose={() => setOpen(false)}
        product={currentProduct}
      />
    </div>
  );
}

export default Main;
