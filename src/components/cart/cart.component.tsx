import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  CartItemImage, CartItem, CartItemPrice,
  CartPopupArea, CartPopupRow, CartPopup, CartHeader,
  CartBody, CartFooter, CartItemQuantityCounter, CartItemDescription, CartTotal
} from './cart.style';
import { getCartData, totalPlusTaxes } from './cart.utils';
import { Button, Text, Input, Headers, Image } from '../generic/generic';
import { trashIcon, quantityIcons, cartIcon, closeIcon } from '../generic/icons';
import { store, updateProductQuantity, removeItemFromCart } from "../../store";
import { LambdaService } from '../../apis/lambda.service';

const apiService = new LambdaService();

const cartHeader = (modalHandler: any) => (
  <CartHeader>
    <Headers.Header2>
      <Text>Cart</Text>
    </Headers.Header2>
    <Button onClick={() => modalHandler(false)} >
      {closeIcon()}
    </Button>
  </CartHeader>
);

const cartItem = (item: any) => (
  <CartItem key={item.id}>
    <CartItemImage>
      <Image src={item.image} style = {{height: '5rem', width: '5rem'}} alt="img product"/>
    </CartItemImage>
    <CartItemDescription>
      <Text style={{fontWeight: 900, width: '12.5rem'}}>{item.name}</Text>
      <Text style={{width: '12.5rem'}}>Placeholder (size etc)</Text>
    </CartItemDescription>
    <CartItemQuantityCounter>
      <Button onClick={() => store.dispatch(updateProductQuantity({ productId: item.id, increment: -1}))}>
        {quantityIcons.subtract()}
      </Button>
      <Input type='text' value={item.quantity} onChange={()=> { console.log('Value change'); }} />
      <Button onClick={() => store.dispatch(updateProductQuantity({ productId: item.id, increment: 1}))}>
        {quantityIcons.add()}
      </Button>
    </CartItemQuantityCounter>
    <CartItemPrice>
      <div onClick={()=>store.dispatch(removeItemFromCart({ productId : item.id}))}>{trashIcon()}</div>
      <Text style={{wordWrap:'break-word'}}>£{item.price*item.quantity}</Text>
    </CartItemPrice>
  </CartItem>
);

const cartBody = (cartItems: any) => (
  <CartBody>
    {cartItems.map((item: any) => (cartItem(item)))}
  </CartBody>
);

const cartFooter = (orderData: any, modalHandler: any) => {
  
  const handleCheckout = (orderData: any) => {
    apiService.addOrder({ UserId: 'no-users-yet', OrderTotal: totalPlusTaxes(orderData.itemPriceSum) });
    modalHandler(false);
  }

  return (
    <CartFooter>
      <Button
        style={{ transition: "all .15s ease" }}
        onClick={() => handleCheckout(orderData)}
      >
        <Text>Checkout</Text>
      </Button>
    </CartFooter>
  );
};

const cartTotal = (itemPriceSum: number) => (
  <CartTotal>
    <Headers.Header3><Text>Shipping and Tax:</Text></Headers.Header3><br></br>
    <Text>Subtotal: £{itemPriceSum}</Text>
    <Text>Tax £0.00</Text>
    <Text>Order Total £{totalPlusTaxes(itemPriceSum)}</Text>
  </CartTotal>
);

export const Cart = () => {
  const cartFromState = useSelector((state: any) => state.cart);
  const { itemCount, itemPriceSum, cartItems } = getCartData(cartFromState);
  
  const [showModal, setShowModal] = React.useState(false);
  
  return (
  <>
    <Button style={{ marginBottom: '2rem' }} onClick={() => setShowModal(true)}>{cartIcon()} {itemCount}</Button>
    {showModal ? (
    <>
      <CartPopupArea>
        <CartPopupRow>
          <CartPopup>
            {cartHeader(setShowModal)}
            {
              itemCount ?
              <>
                {cartBody(cartItems)}
                {cartTotal(itemPriceSum)}
                {cartFooter({ itemCount, itemPriceSum, cartItems }, setShowModal)}
              </>
              :
              <CartBody>
                <Text>Your cart is empty.</Text>
              </CartBody>
            }
          </CartPopup>
        </CartPopupRow>
      </CartPopupArea>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
    ) : null}
  </>
  );
};