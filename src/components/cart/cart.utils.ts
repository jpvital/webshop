export const getCartData = (cart: any) => {
    
    let itemCount = 0;
    let itemPriceSum = 0;
    let cartItems = [];
    
    for (let [key, value] of Object.entries(cart) as any) {
        itemCount+=value.quantity;
        itemPriceSum+=value.price*value.quantity;
        cartItems.push(Object.assign({}, value, { id: key }));
    }
    
    return { itemCount, itemPriceSum, cartItems };
};

export const totalPlusTaxes = (total: number) => {
    return total;
}