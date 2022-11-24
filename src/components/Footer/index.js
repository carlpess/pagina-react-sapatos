import './style.css';
import Logo from '../../assets/logo.svg'
import FacebookLogo from '../../assets/facebook.svg';
import IntagramLogo from '../../assets/instagram.svg';

function Footer() {
    return (
        <footer>
            <div className='left-footer'>
                <div className='container-address'>
                    <strong>Endereço:</strong>
                    <span>Rua Cubos, 10</span>
                    <span>Jardim Academy</span>
                    <span>Salvador - Bahia - CEP 41820-021</span>
                </div>
                <div className='container-social'>
                    <img src={FacebookLogo} alt='facebook logo' />
                    <img src={IntagramLogo} alt='instagram logo' />
                </div>
            </div>

            <div className='vertical-line'></div>

            <div className='right-footer'>
                <img src={Logo} alt='Logo footer' />
            </div>
        </footer>
    )
}

export default Footer;