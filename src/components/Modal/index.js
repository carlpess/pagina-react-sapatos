import './style.css';
import Shoe from '../../assets/shoes/shoe1.jpg'
import CloseIcon from '../../assets/close-icon.svg';

function Modal() {
    return (
        <div className='container-modal'>
            <div className='modal'>
                <div className='modal-body'>
                    <img
                        className='product-img'
                        src={Shoe}
                        alt=''
                    />

                    <img
                        className='close-icon'
                        src={CloseIcon}
                        alt='close icon'
                    />

                    <strong>Spato Lorem aaiaiai</strong>
                    <p>descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao </p>

                    <div className='container-buy'>
                        <button className='btn-buy'>COMPRAR</button>

                        <div className='container-prices'>
                            <div className='content-prices'>
                                <span>R$ 300,00</span>
                                <h2>R$ 200,00</h2>
                            </div>

                            <div className='content-installments'>
                                <h4>6x 30,00</h4>
                                <span>sem juros</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;