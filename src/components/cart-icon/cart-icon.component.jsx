import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)

    const toggleisCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }

  return (
    <div className='cart-icon-container' onClick={toggleisCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>10</span>
    </div>
  )
}

export default CartIcon