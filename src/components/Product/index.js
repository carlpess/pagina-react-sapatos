import './style.css';
import { handleCalculateInstallment } from '../../utils/functions';

function Product({ product }) {
    return (
        <div className='container-product'>
            <img src={product.image} alt='Product' />
            <span>{product.name}</span>
            <div className='container-prices'>
                <span>R$ {product.oldPrice.toFixed(2)}</span>
                <h2>R$ {product.currentPrice.toFixed(2)}</h2>
            </div>
            <div className='container-installments'>
                <h4>6x R$ {handleCalculateInstallment(product.currentPrice)}</h4>
                <span>sem juros</span>
            </div>
        </div>
    )
}

export default Product;