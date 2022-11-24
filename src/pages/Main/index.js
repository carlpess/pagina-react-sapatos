import './style.css';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

function Main() {
  return (
    <div className="container">
      <Header />
      <div>
        <Product />
      </div>
      <Footer />
      <Modal />
    </div>
  );
}

export default Main;
