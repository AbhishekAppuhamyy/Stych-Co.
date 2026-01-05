import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.dfssssfsdfsf</p>
      ) : (
        <>
          {cart.map(item => <CartItem key={item.id} item={item} />)}
          <div className="mt-4 text-right">
            <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
            <Link to="/checkout" className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Go to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
