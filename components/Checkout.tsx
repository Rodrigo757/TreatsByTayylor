
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const delivery = 15; // Placeholder delivery
  const discount = subtotal >= 100 ? 10 : 0; // $10 off if over $100
  const total = subtotal + delivery - discount;

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#FFF9FA] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#4A3B32] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div>
            <h1 className="text-3xl font-serif text-[#4A3B32] mb-4">Checkout</h1>
            <p className="text-sm text-[#5D4037] mb-12">Treats by Taylor - Ft. Lauderdale Delivery</p>
            
            <div className="space-y-12">
              {/* Section 1: Contact */}
              <div>
                <h2 className="text-xl font-serif text-[#4A3B32] mb-6">Contact Information</h2>
                <div className="space-y-4">
                   <input type="email" placeholder="Email address" className="w-full bg-transparent border-b border-[#FFB7C5] py-3 text-[#4A3B32] placeholder-[#FFB7C5] outline-none focus:border-[#D4AF37] transition-colors cursor-not-allowed" disabled />
                   <div className="flex items-center gap-2">
                     <input type="checkbox" id="newsletter" className="accent-[#D4AF37] cursor-not-allowed" disabled />
                     <label htmlFor="newsletter" className="text-sm text-[#5D4037] cursor-not-allowed">Email me with new flavors</label>
                   </div>
                </div>
              </div>

              {/* Section 2: Shipping */}
              <div>
                <h2 className="text-xl font-serif text-[#4A3B32] mb-6">Delivery Address</h2>
                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="First name" className="w-full bg-transparent border-b border-[#FFB7C5] py-3 text-[#4A3B32] placeholder-[#FFB7C5] outline-none focus:border-[#D4AF37] transition-colors cursor-not-allowed" disabled />
                      <input type="text" placeholder="Last name" className="w-full bg-transparent border-b border-[#FFB7C5] py-3 text-[#4A3B32] placeholder-[#FFB7C5] outline-none focus:border-[#D4AF37] transition-colors cursor-not-allowed" disabled />
                   </div>
                   <input type="text" placeholder="Address" className="w-full bg-transparent border-b border-[#FFB7C5] py-3 text-[#4A3B32] placeholder-[#FFB7C5] outline-none focus:border-[#D4AF37] transition-colors cursor-not-allowed" disabled />
                   <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full bg-transparent border-b border-[#FFB7C5] py-3 text-[#4A3B32] placeholder-[#FFB7C5] outline-none focus:border-[#D4AF37] transition-colors cursor-not-allowed" disabled />
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="City (Ft. Lauderdale area)" className="w-full bg-transparent border-b border-[#FFB7C5] py-3 text-[#4A3B32] placeholder-[#FFB7C5] outline-none focus:border-[#D4AF37] transition-colors cursor-not-allowed" disabled />
                      <input type="text" placeholder="Postal code" className="w-full bg-transparent border-b border-[#FFB7C5] py-3 text-[#4A3B32] placeholder-[#FFB7C5] outline-none focus:border-[#D4AF37] transition-colors cursor-not-allowed" disabled />
                   </div>
                </div>
              </div>

               {/* Section 3: Payment (Mock) */}
              <div>
                <h2 className="text-xl font-serif text-[#4A3B32] mb-6">Payment</h2>
                <div className="p-6 border border-[#FFB7C5] bg-white/50 space-y-4 rounded-md">
                   <p className="text-sm text-[#5D4037] mb-2">All transactions are secure and encrypted.</p>
                   <input type="text" placeholder="Card number" className="w-full bg-transparent border-b border-[#FFB7C5] py-3 text-[#4A3B32] placeholder-[#FFB7C5] outline-none focus:border-[#D4AF37] transition-colors cursor-not-allowed" disabled />
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Expiration (MM/YY)" className="w-full bg-transparent border-b border-[#FFB7C5] py-3 text-[#4A3B32] placeholder-[#FFB7C5] outline-none focus:border-[#D4AF37] transition-colors cursor-not-allowed" disabled />
                      <input type="text" placeholder="Security code" className="w-full bg-transparent border-b border-[#FFB7C5] py-3 text-[#4A3B32] placeholder-[#FFB7C5] outline-none focus:border-[#D4AF37] transition-colors cursor-not-allowed" disabled />
                   </div>
                </div>
              </div>

              <div>
                <button 
                    disabled
                    className="w-full py-5 bg-[#D4AF37] text-[#FFF9FA] uppercase tracking-widest text-sm font-medium cursor-not-allowed opacity-80 rounded-md shadow-md"
                >
                    Pay Now — ${total}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pl-12 lg:border-l border-[#FFB7C5]">
            <h2 className="text-xl font-serif text-[#4A3B32] mb-8">Order Summary</h2>
            
            <div className="space-y-6 mb-8">
               {items.map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 bg-[#FFF0F5] relative">
                       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover rounded-sm" />
                       <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#D4AF37] text-white text-[10px] flex items-center justify-center rounded-full shadow-sm">1</span>
                    </div>
                    <div className="flex-1">
                       <h3 className="font-serif text-[#4A3B32] text-base">{item.name}</h3>
                       <p className="text-xs text-[#A8A29E]">{item.category}</p>
                    </div>
                    <span className="text-sm text-[#5D4037]">${item.price}</span>
                 </div>
               ))}
            </div>

            <div className="border-t border-[#FFB7C5] pt-6 space-y-2">
              <div className="flex justify-between text-sm text-[#5D4037]">
                 <span>Subtotal</span>
                 <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-[#5D4037]">
                 <span>Delivery (Est.)</span>
                 <span>${delivery}</span>
              </div>
              {subtotal >= 100 && (
                  <div className="flex justify-between text-sm text-[#D4AF37]">
                     <span>Big Order Discount</span>
                     <span>-${discount}</span>
                  </div>
              )}
            </div>
            
            <div className="border-t border-[#FFB7C5] mt-6 pt-6">
               <div className="flex justify-between items-center">
                 <span className="font-serif text-xl text-[#4A3B32]">Total</span>
                 <div className="flex items-end gap-2">
                   <span className="text-xs text-[#A8A29E] mb-1">USD</span>
                   <span className="font-serif text-2xl text-[#4A3B32]">${total}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
