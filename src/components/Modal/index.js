import './style.css';
import CloseIcon from '../../assets/close-icon.svg';
import { handleCalculateInstallment } from '../../utils/functions'

function Modal({ open, handleClose, product }) {
    return (
        <>
            {open &&
                <div className='container-modal'>
                    <div className='modal'>
                        <div className='modal-body'>
                            <img
                                className='product-img'
                                src={product.image}
                                alt='product'
                            />

                            <img
                                className='close-icon'
                                src={CloseIcon}
                                alt='close icon'
                                onClick={() => handleClose()}
                            />

                            <strong>{product.name}</strong>
                            <p>{product.description}</p>

                            <div className='container-buy'>
                                <button className='btn-buy'>COMPRAR</button>

                                <div className='container-prices'>
                                    <div className='content-prices'>
                                        <span>R$ {product.oldPrice.toFixed(2)}</span>
                                        <h2>R$ {product.currentPrice.toFixed(2)}</h2>
                                    </div>

                                    <div className='content-installments'>
                                        <h4>6x {handleCalculateInstallment(product.currentPrice)}</h4>
                                        <span>sem juros</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;