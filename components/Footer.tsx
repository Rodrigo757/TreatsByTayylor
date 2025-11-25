/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-[#FFF0F5] pt-24 pb-12 px-6 text-[#5D4037] border-t-4 border-[#FFB7C5]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <h4 className="text-2xl font-serif text-[#4A3B32] mb-6">Treats by Taylor</h4>
          <p className="max-w-xs font-light leading-relaxed mb-4">
            Custom baking for the sweet of heart. <br/>
            Located in sunny Ft. Lauderdale, FL.
          </p>
          <p className="text-sm font-medium text-[#D4AF37]">
            Delivery discounts on orders $100+
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-medium text-[#4A3B32] mb-6 tracking-wide text-sm uppercase">Menu</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">All Treats</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">Custom Orders</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">Cakes</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">Puddings</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-medium text-[#4A3B32] mb-6 tracking-wide text-sm uppercase">Bakery</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">Our Kitchen</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">Ingredients</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-[#D4AF37] transition-colors underline-offset-4 hover:underline">Recipes</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-medium text-[#4A3B32] mb-6 tracking-wide text-sm uppercase">Sweet News</h4>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="email@address.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
              className="bg-transparent border-b border-[#D4AF37] py-2 text-lg outline-none focus:border-[#4A3B32] transition-colors placeholder-[#A8A29E]/70 text-[#4A3B32] disabled:opacity-50" 
            />
            <button 
              onClick={handleSubscribe}
              disabled={subscribeStatus !== 'idle' || !email}
              className="self-start text-sm font-medium uppercase tracking-widest mt-2 hover:text-[#D4AF37] disabled:cursor-default disabled:hover:text-[#5D4037] disabled:opacity-50 transition-opacity"
            >
              {subscribeStatus === 'idle' && 'Join the Club'}
              {subscribeStatus === 'loading' && 'Joining...'}
              {subscribeStatus === 'success' && 'Welcome!'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-[#D4AF37]/30 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60">
        <p>Baked with love by Treats by Taylor</p>
      </div>
    </footer>
  );
};

export default Footer;