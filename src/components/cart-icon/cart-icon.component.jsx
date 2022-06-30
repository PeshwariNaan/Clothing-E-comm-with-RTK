import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen, setIsCartOpen } from "../../features/cart/cartSlice";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch()

  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleisCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleisCartOpen}>
      <ShoppingIcon className="shopping-icon" />

      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
