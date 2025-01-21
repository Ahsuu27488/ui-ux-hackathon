"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { Trash2 } from "lucide-react";

const Page = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="w-full bg-white shadow-lg rounded-lg">
      <div className="px-4 py-4 flex flex-col gap-4">
        <h1 className="text-xl font-semibold pb-2 border-b">Shopping Cart</h1>
        
        <div className="flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-gray-500">
              {/* <Image
                width={60}
                height={60}
                src="/images/icons/empty-cart.png"
                alt="Empty Cart"
                className="opacity-50 mb-4"
              /> */}
              <p className="text-sm">Your cart is empty</p>
              <Link href="/shop" className="mt-4 text-sm text-blue-600 hover:text-blue-800 transition-colors">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="relative flex-shrink-0">
                      <Image
                        width={60}
                        height={60}
                        src={item.image}
                        alt={item.name}
                        className="rounded-md object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <h2 className="font-medium text-sm truncate">{item.name}</h2>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-gray-600">
                          USD ${item.price}
                        </span>
                        <div className="flex items-center bg-white rounded-md border px-2">
                          <span className="text-sm py-1">
                            Qty: {item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">USD ${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total</span>
                    <span className="font-semibold text-lg text-[#B88E2F]">
                      USD ${totalAmount.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link 
                  href="/checkout"
                  className="mt-4 w-full flex items-center justify-center px-4 py-2.5 bg-[#B88E2F] text-white rounded-lg hover:bg-[#A67E2A] transition-colors font-medium"
                >
                  Proceed to Checkout
                </Link>
                
                <button 
                  onClick={() => window.history.back()}
                  className="mt-3 w-full text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;