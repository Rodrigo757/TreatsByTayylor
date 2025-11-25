/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#FFF9FA]">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-serif text-[#4A3B32] leading-tight">
            Baked from the heart, <br/> right here in <span className="text-[#D4AF37] italic">Ft. Lauderdale.</span>
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#5D4037] font-light leading-relaxed mb-8">
            Treats by Taylor began with a simple idea: the best desserts aren't mass-produced, they are personal. We believe a brownie should taste like it came out of your grandmother's oven, only better.
          </p>
          <p className="text-lg md:text-xl text-[#5D4037] font-light leading-relaxed mb-8">
            Our kitchen in Ft. Lauderdale is filled with the scent of melted butter, vanilla bean, and toasted sugar. We specialize in custom orders—if you have a recipe you love, send it to us. We will bake it with the finest ingredients and deliver it warm to your door.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1260" 
            alt="Bakery Kitchen" 
            className="w-full h-[400px] object-cover mt-12 sepia-[0.2]"
          />
          <p className="text-sm font-medium uppercase tracking-widest text-[#D4AF37] mt-4">
            The Kitchen, Ft. Lauderdale
          </p>
        </div>
      </div>

      {/* Philosophy Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&q=80&w=1200" 
             alt="Close up of dessert texture" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
           />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#FFB7C5]/10">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">Our Promise</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#4A3B32] leading-tight">
             Anything you want, <br/> we can bake.
           </h3>
           <p className="text-lg text-[#5D4037] font-light leading-relaxed mb-12 max-w-md">
             Craving a specific cake from your childhood? Want brownies with a specific candy bar mixed in? Just give us the recipe and ingredients list. We are your personal pastry chefs.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#4A3B32] text-[#FFF9FA]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">Delivery</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#FFF9FA] leading-tight">
             Fresh to your door.
           </h3>
           <p className="text-lg text-[#D6D1C7] font-light leading-relaxed mb-12 max-w-md">
             We deliver across the city. Delivery fees are calculated based on your distance from our kitchen. Spend over $100, and receive a special discount on your total order.
           </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&q=80&w=1260" 
             alt="Delivery of cakes" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-90"
           />
        </div>
      </div>
    </section>
  );
};

export default About;