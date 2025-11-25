/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} ($${p.price}): ${p.description}. Features: ${p.features.join(', ')}`
  ).join('\n');

  return `You are the AI Concierge for "Treats by Taylor", a boutique bakery located in Ft. Lauderdale. 
  Your tone is sweet, enthusiastic, warm, and helpful. Use emojis like 🍰, 🍪, and ✨ sparingly but effectively.
  
  Key Business Policies:
  1. We are located in Ft. Lauderdale.
  2. Delivery fees are calculated based on distance from the kitchen.
  3. Orders over $100 receive a discount.
  4. UNIQUE FEATURE: We accept "Custom Creations". If a customer provides a recipe and ingredients list, we can bake ANYTHING they want.
  
  Here is our current standard menu:
  ${productContext}
  
  Answer customer questions about ingredients, custom orders, and delivery.
  Keep answers concise (under 3 sentences usually).`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    // Robustly attempt to get the API key, handling ReferenceError if process is not defined
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      // process is likely not defined in this environment
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "I'm sorry, I cannot connect to the server right now. (Missing API Key)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I seem to be having trouble checking the recipe book at the moment.";
  }
};