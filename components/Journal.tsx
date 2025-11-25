/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  return (
    <section id="journal" className="bg-[#FFF9FA] py-32 px-6 md:px-12 border-t border-[#FFB7C5]/20">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b border-[#D4AF37]/30">
            <div>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-4">From the Oven</span>
                <h2 className="text-4xl md:text-6xl font-serif text-[#4A3B32]">Kitchen Stories</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {JOURNAL_ARTICLES.map((article) => (
                <div key={article.id} className="group cursor-pointer flex flex-col text-left" onClick={() => onArticleClick(article)}>
                    <div className="w-full aspect-[4/3] overflow-hidden mb-8 bg-[#FFF0F5]">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                        <span className="text-xs font-medium uppercase tracking-widest text-[#FFB7C5] mb-3">{article.date}</span>
                        <h3 className="text-2xl font-serif text-[#4A3B32] mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors">{article.title}</h3>
                        <p className="text-[#5D4037] font-light leading-relaxed">{article.excerpt}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;