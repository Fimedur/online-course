import React from 'react';

const Cart = (props) => {
    console.log(props)
    const cart = props.cart
    const totalPrice = cart.reduce((total,prd) => total + prd.Price, 0);
    const tax = (totalPrice*.15);
    const GT = (totalPrice + tax).toFixed(2);
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Item Orderd:  {cart.length}</p>
            <p>Tolat cost:    {totalPrice}$</p>
            <p>Tax + VAT:    {tax}$</p>
            <hr />
            <p>Grand Total:   {GT}$</p>
        </div>
    );
};

export default Cart;