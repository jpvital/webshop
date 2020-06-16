import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  CartItemImage, CartItem, CartItemPrice,
  CartItemQuantityCounter, CartItemDescription
} from './cart.style';
import { getCartData, totalPlusTaxes } from './cart.utils';
import { Button, Text, ButtonText, Input, Headers, Image } from '../generic/generic';
import { trashIcon, quantityIcons, cartIcon, closeIcon } from '../generic/icons';
import { store, updateProductQuantity, removeItemFromCart } from "../../utils/store";
import { LambdaService } from '../../services/lambda.service';
import { PopupBackground, PopupContent, PopupSection, PopupHeader } from '../generic/popups';
import verbose from '../../global/verbose';

export const Cart = () => {
  
  const cartFromState = useSelector((state: any) => state.cart);
  const { itemCount, itemPriceSum, cartItems } = getCartData(cartFromState);
  const [showModal, setShowModal] = React.useState(false);
  const api = new LambdaService();

  const handleCheckout = (orderData: any) => {
    api.addOrder({ UserId: 'no-users-yet', OrderTotal: totalPlusTaxes(orderData.itemPriceSum) });
    setShowModal(false);
  }

  const cartHeader = () => (
    <PopupHeader>
      <Headers.Header2>
        <Text>Cart</Text>
      </Headers.Header2>
      <Button style={{marginLeft: 'auto'}} onClick={() => setShowModal(false)} >
        {closeIcon()}
      </Button>
    </PopupHeader>
  );

  const cartBody = (cartItems: any) => (
    <PopupSection>
      {cartItems.map((item: any) => (cartItem(item)))}
    </PopupSection>
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

  const cartFooter = (orderData: any) => (
    <PopupSection>
      <Button
        style={{width: '100%', paddingLeft: '0px', paddingRight: '0px', transition: "all .15s ease" }}
        onClick={() => handleCheckout(orderData)}
      >
        <ButtonText style={{textAlign: 'center', width: '100%'}}>Checkout</ButtonText>
      </Button>
    </PopupSection>
  );

  const cartTotal = (itemPriceSum: number) => (
    <PopupSection>
      <Headers.Header3 style={{textAlign: 'left'}}><Text>Shipping and Tax:</Text></Headers.Header3><br></br>
      <Text>Subtotal: £{itemPriceSum}</Text>
      <Text>Tax £0.00</Text>
      <Text>Order Total £{totalPlusTaxes(itemPriceSum)}</Text>
    </PopupSection>
  );

  return (
  <>
    <Button style={{ marginBottom: '2rem' }} onClick={() => setShowModal(true)}>{cartIcon()} {itemCount}</Button>
    {showModal ? (
    <>
      <PopupBackground>
          <PopupContent>
            {cartHeader()}
            {
              itemCount ?
              <>
                {cartBody(cartItems)}
                {cartTotal(itemPriceSum)}
                {cartFooter({ itemCount, itemPriceSum, cartItems })}
              </>
              :
              <PopupSection><Text>{verbose.INFO.EMPTY_CART}</Text></PopupSection>
            }
          </PopupContent>
      </PopupBackground>
    </>
    ) : null}
  </>
  );
};