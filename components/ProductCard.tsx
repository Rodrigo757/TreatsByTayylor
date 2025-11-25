/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="group flex flex-col gap-6 cursor-pointer" onClick={() => onClick(product)}>
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#FFF0F5] border border-[#D4AF37]/10">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#4A3B32]/0 group-hover:bg-[#4A3B32]/10 transition-colors duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="bg-white/95 backdrop-blur text-[#4A3B32] px-6 py-3 border border-[#D4AF37] text-xs uppercase tracking-widest font-medium">
                    Taste This
                </span>
            </div>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-serif font-medium text-[#4A3B32] mb-1 group-hover:text-[#D4AF37] transition-colors">{product.name}</h3>
        <p className="text-sm font-light text-[#888] mb-3 tracking-wide">{product.category}</p>
        <span className="text-sm font-bold text-[#D4AF37] block">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;