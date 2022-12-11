import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemFromCart, selectCartItems } from '../../features/cart/cartSlice';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {

  const dispatch = useDispatch()
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems)
  
 

  const clearItemHandler = () => dispatch(clearItemFromCart({cartItems: cartItems, product: cartItem}));
  const addItemHandler = () => dispatch(addItemToCart({cartItems: cartItems, product: cartItem}));
  const removeItemHandler = () => dispatch(removeItemFromCart({cartItems: cartItems, product: cartItem}));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
