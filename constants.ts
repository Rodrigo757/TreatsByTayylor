/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Taylor Brownie',
    tagline: 'Fudgy, rich, and unforgettable.',
    description: 'Triple chocolate fudge brownies topped with a dusting of edible gold leaf.',
    longDescription: 'Our signature brownie is where it all started. Baked with three types of Belgian chocolate, these are dense, fudgy, and incredibly rich. We finish each batch with a delicate dusting of 24k edible gold leaf, making them perfect for gifts or a luxurious midnight treat.',
    price: 35,
    category: 'Brownies',
    imageUrl: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Triple Belgian Chocolate', 'Edible Gold Leaf', 'Box of 12']
  },
  {
    id: 'p2',
    name: 'Brown Butter Rice Krispys',
    tagline: 'Nostalgia, elevated.',
    description: 'Classic crispy treats made with browned butter, sea salt, and extra marshmallow.',
    longDescription: 'We took the childhood classic and gave it a gourmet upgrade. By browning the butter before mixing, we introduce a nutty, toffee-like depth to the flavor profile. Finished with flaky Maldon sea salt to balance the sweetness of the extra marshmallow pockets.',
    price: 24,
    category: 'Treats',
    imageUrl: 'https://images.unsplash.com/photo-1595982886006-253ac0545a90?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1595982886006-253ac0545a90?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1601306698305-b0492cb71576?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Brown Butter', 'Sea Salt Finish', 'Box of 8']
  },
  {
    id: 'p3',
    name: 'Southern Banana Pudding',
    tagline: 'Just like Nana used to make.',
    description: 'Layers of vanilla wafers, fresh bananas, and homemade vanilla bean custard.',
    longDescription: 'This is the real deal. No instant mixes here. We slow-cook our vanilla bean custard and layer it generously with ripe bananas and classic Nilla wafers. Topped with a mountain of stabilized whipped cream that holds up perfectly for delivery across Ft. Lauderdale.',
    price: 45,
    category: 'Puddings',
    imageUrl: 'https://images.unsplash.com/photo-1549403166-70fb2a21034f?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1549403166-70fb2a21034f?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Fresh Bananas', 'Real Vanilla Bean', 'Serves 6-8']
  },
  {
    id: 'custom',
    name: 'The Custom Creation',
    tagline: 'Your recipe, our oven.',
    description: 'You provide the recipe and ingredients list, we bake it to perfection. Anything is possible.',
    longDescription: 'Have a family recipe you miss but can’t bake yourself? Or a crazy idea for a cake flavor? The "Custom Creation" is our specialty. When you order, simply paste your full recipe and ingredient list. We will source the finest ingredients and bake it exactly to your specifications. If it’s edible, we can make it.',
    price: 120,
    category: 'Custom',
    imageUrl: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Any Recipe', 'Personal Consultation', 'Premium Ingredients']
  },
  {
    id: 'p5',
    name: 'Pink Champagne Cake',
    tagline: 'Celebration in a slice.',
    description: 'Rosé infused sponge cake with strawberry buttercream and gold accents.',
    longDescription: 'Light, airy, and sophisticated. We infuse the batter with a reduction of sparkling Rosé wine, giving the cake a subtle floral note and a tender crumb. Frosted with fresh strawberry buttercream and decorated with our signature gold pearls.',
    price: 65,
    category: 'Cakes',
    imageUrl: 'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Infused with Rosé', 'Strawberry Buttercream', '6 inch / 3 Layer']
  },
  {
    id: 'p6',
    name: 'Red Velvet Truffles',
    tagline: 'Bite-sized decadence.',
    description: 'Red velvet cake crumbs mixed with cream cheese frosting, dipped in white chocolate.',
    longDescription: 'The perfect party favor or personal indulgence. We take our moist red velvet cake, mix it with just the right amount of tangy cream cheese frosting, and dip the whole thing in premium white chocolate. Drizzled with pink chocolate for that Taylor touch.',
    price: 30,
    category: 'Treats',
    imageUrl: 'https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Box of 12', 'White Chocolate Shell', 'Moist Center']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "Why We Use Brown Butter",
        date: "May 12, 2025",
        excerpt: "The science behind the nutty, caramel depth in our signature rice krispy treats.",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D4037]" },
                "Butter is good. Brown butter is magical. It happens when you cook butter just past its melting point, allowing the milk solids to toast."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D4037]" },
                "This Maillard reaction creates hundreds of new flavor compounds, introducing notes of toasted hazelnut and toffee. At Treats by Taylor, we don't just melt the butter; we transform it."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#D4AF37] pl-6 italic text-xl text-[#D4AF37] my-10 font-serif" },
                "\"It’s the difference between a snack and an experience.\""
            )
        )
    },
    {
        id: 2,
        title: "The Art of the Custom Order",
        date: "April 28, 2025",
        excerpt: "We baked a 5-tier matcha cake for a wedding last week. Here is how it went.",
        image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D4037]" },
                "One of our favorite things at Treats by Taylor is receiving a challenge. Last week, a client asked for a Matcha and Black Sesame cake using a specific recipe from their grandmother in Tokyo."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D4037]" },
                "We sourced ceremonial grade matcha and ground black sesame seeds by hand. The result? A towering green masterpiece that tasted like home."
            )
        )
    },
    {
        id: 3,
        title: "Spring Menu Inspiration",
        date: "April 15, 2025",
        excerpt: "Thinking pink: Strawberries, Rosé, and Rhubarb are entering the kitchen.",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D4037]" },
                "As the weather warms up in Ft. Lauderdale, we crave lighter, fruitier flavors. This month, we are experimenting with local strawberries and tart rhubarb."
            )
        )
    }
];

export const BRAND_NAME = 'Treats by Taylor';
export const PRIMARY_COLOR = 'rose-50'; 
export const ACCENT_COLOR = 'pink-400';