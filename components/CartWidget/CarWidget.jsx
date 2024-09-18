import cart from './assets/shopping_cart.svg'
import './CarWidget.css'

const CarWidget = () => {
    return (
        <div className="CartWidget">
            <img src={cart} alt="cart-widget" className="CartIcon"/>
            <span className="ItemCount">0</span>
        </div>
    )
}

export default CarWidget;
