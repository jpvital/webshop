import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  CartItem, CartItemImage, CartItemAttributes, CartItemPrice,
  CartPopupArea, CartPopupRow, CartPopup, CartHeader,
  CartBodyArea, CartBody, CartFooter, CartItemQuantityCounter, CartItemDescription
} from './cart.style';
import { getCartData } from './cart.utils';
import { Button, Text, Input, Headers } from '../generic/generic';
import { trashIcon, quantityIcons, cartIcon, closeIcon } from '../generic/icons';
import { store, updateProductQuantity, removeItemFromCart } from "../../store";

const cartHeader = (onClickHandler: (set: boolean) => void) => (
  <CartHeader>
    <Headers.Header2>
      <Text>Cart</Text>
    </Headers.Header2>
    <Button onClick={() => onClickHandler(false)} >
      {closeIcon()}
    </Button>
  </CartHeader>
);

const cartItemAttributes = ({ name, quantity, id }:{[key:string]:string}) => (
  <CartItemAttributes>
    <CartItemDescription>
      <Text style={{width: '100%', fontWeight: 900}}>{name}</Text>
      <Text style={{width: '100%'}}>Placeholder (size etc)</Text>
    </CartItemDescription>
    <CartItemQuantityCounter>
      <Button onClick={() => store.dispatch(updateProductQuantity({ productId: id, increment: -1}))}>
        {quantityIcons.subtract()}
      </Button>
      <Input style={{ width: '10%' }} type='text' value={quantity} onChange={()=> { console.log('Value change'); }} />
      <Button onClick={() => store.dispatch(updateProductQuantity({ productId: id, increment: 1}))}>
        {quantityIcons.add()}
      </Button>
    </CartItemQuantityCounter>
  </CartItemAttributes>
);

const cartItem = (item: any) => (
  <CartItem key={item.id}>
    <CartItemImage><img src={item.image} alt="img product"/></CartItemImage>
    {cartItemAttributes(item)}
    <CartItemPrice>
      <div onClick={()=>store.dispatch(removeItemFromCart({ productId: item.id}))}>{trashIcon()}</div>
      <Text style={{wordWrap:'break-word'}}>£{item.price*item.quantity}</Text>
    </CartItemPrice>
  </CartItem>
);

const cartBody = (itemCount: number, cartItems: any) => (
  <CartBodyArea>
    <CartBody>
      {itemCount? (
        <>{cartItems.map((item: any) => (cartItem(item)))}</>
      ) : <Text>Your cart is empty.</Text>}
    </CartBody>
  </CartBodyArea>
);

const cartFooter = (onClickHandler: (set: boolean) => void) => (
  <CartFooter>
    <Button
      style={{ transition: "all .15s ease" }}
      onClick={() => onClickHandler(false)}
    >
      <Text>Checkout</Text>
    </Button>
  </CartFooter>
);

const cartTotal = (itemPriceSum: number) => (
  <CartBodyArea>
    <Headers.Header3><Text>Shipping and Tax:</Text></Headers.Header3><br></br><br></br>
    <Text>Subtotal</Text><Text style={{float: 'right'}}>£{itemPriceSum}</Text><br></br>
    <Text>Tax</Text><Text style={{float: 'right'}}>£0.00</Text><br></br>
    <Text>Order Total</Text><Text style={{float: 'right'}}>£{itemPriceSum}</Text>
  </CartBodyArea>
);

export const Cart = () => {
    
  const [showModal, setShowModal] = React.useState(false);
  const cartFromState = useSelector((state: any) => state.cart);
  const { itemCount, itemPriceSum, cartItems } = getCartData(cartFromState);
  
  return (
  <>
    <Button onClick={() => setShowModal(true)}>{cartIcon()} {itemCount}</Button>
    {showModal ? (
    <>
      <CartPopupArea>
        <CartPopupRow>
          <CartPopup>
            {cartHeader(setShowModal)}
            {cartBody(itemCount, cartItems)}
            {cartTotal(itemPriceSum)}
            {cartFooter(setShowModal)}
          </CartPopup>
        </CartPopupRow>
      </CartPopupArea>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
    ) : null}
  </>
  )
};