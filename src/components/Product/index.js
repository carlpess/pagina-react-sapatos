import './style.css';
import { handleCalculateInstallment } from '../../utils/functions';

function Product({ product, handleDetailProduct }) {
    return (
        <div
            className='container-product'
            onClick={() => handleDetailProduct(product)}
        >
            <img src={product.image} alt='Product' />
            <span>{product.name}</span>
            <div className='content-prices'>
                <span>R$ {product.oldPrice.toFixed(2)}</span>
                <h2>R$ {product.currentPrice.toFixed(2)}</h2>
            </div>
            <div className='content-installments'>
                <h4>6x R$ {handleCalculateInstallment(product.currentPrice)}</h4>
                <span>sem juros</span>
            </div>
        </div>
    )
}

export default Product;