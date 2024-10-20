import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Smartphone X', price: 599, quantity: 1, image: 'https://source.unsplash.com/random/100x100?smartphone' },
    { id: 2, name: 'Wireless Earbuds', price: 129, quantity: 2, image: 'https://source.unsplash.com/random/100x100?earbuds' },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10; // Fixed shipping cost
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button 
                      className="bg-gray-200 px-2 py-1 rounded-l"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                    <button 
                      className="bg-gray-200 px-2 py-1 rounded-r"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  className="text-red-500 ml-4"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-6">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;