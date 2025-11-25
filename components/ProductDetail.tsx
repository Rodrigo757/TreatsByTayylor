/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  
  // Custom Order Logic
  const isCustom = product.category === 'Custom';

  return (
    <div className="pt-24 min-h-screen bg-[#FFF9FA] animate-fade-in-up">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#4A3B32] transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Treats
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Main Image Only */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[4/5] bg-[#FFF0F5] overflow-hidden border border-[#FFB7C5]/30">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover animate-fade-in-up"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center max-w-xl">
             <span className="text-sm font-medium text-[#FFB7C5] uppercase tracking-widest mb-2">{product.category}</span>
             <h1 className="text-4xl md:text-5xl font-serif text-[#4A3B32] mb-4">{product.name}</h1>
             <span className="text-2xl font-bold text-[#D4AF37] mb-8">${product.price}</span>
             
             <p className="text-[#5D4037] leading-relaxed font-light text-lg mb-8 border-b border-[#FFB7C5]/30 pb-8">
               {product.longDescription || product.description}
             </p>

            {isCustom && (
                <div className="mb-8 p-6 bg-[#FFF0F5] border border-[#FFB7C5] rounded-md">
                    <h3 className="font-serif text-[#4A3B32] mb-2">Have a specific recipe?</h3>
                    <p className="text-sm text-[#5D4037] mb-4">Please prepare your ingredients list and recipe steps to provide during checkout.</p>
                    <textarea 
                        placeholder="Paste your recipe or ideas here (optional)..."
                        className="w-full p-3 text-sm bg-white border border-[#FFB7C5] rounded outline-none focus:border-[#D4AF37] text-[#4A3B32]"
                        rows={4}
                    />
                </div>
            )}

             <div className="flex flex-col gap-4">
               <button 
                 onClick={() => onAddToCart(product)}
                 className="w-full py-5 bg-[#D4AF37] text-[#FFF9FA] uppercase tracking-widest text-sm font-medium hover:bg-[#B59028] transition-colors shadow-md"
               >
                 Add to Cart — ${product.price}
               </button>
               <ul className="mt-8 space-y-2 text-sm text-[#5D4037]">
                 {product.features.map((feature, idx) => (
                   <li key={idx} className="flex items-center gap-3">
                     <span className="w-1.5 h-1.5 bg-[#FFB7C5] rounded-full"></span>
                     {feature}
                   </li>
                 ))}
               </ul>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;