import { useDispatch, useSelector } from 'react-redux';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { addItemToCart } from '../../features/cart/cartSlice';
import { selectCartItems } from '../../features/cart/cartSlice';
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems)
  const addProductToCart = () => {
    console.log('From card - cart items:', cartItems, 'product:', product)
    dispatch(addItemToCart({cartItems: cartItems, product: product}))};

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
