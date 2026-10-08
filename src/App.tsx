import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioBento } from './components/PortfolioBento';
import { ProcessSection } from './components/ProcessSection';
import { QuoteSection } from './components/QuoteSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const [quoteStyle, setQuoteStyle] = useState<string>('fineline');

  const scrollToQuote = (styleId?: string) => {
    if (styleId) {
      setQuoteStyle(styleId);
    }
    const el = document.getElementById('orcamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#E60000] selection:text-white font-epilogue antialiased">
      {/* Top Navigation - Ultra clean: ABARR on left, Orçamento Gratuito on right */}
      <Navbar onOpenQuote={() => scrollToQuote()} />

      <main>
        {/* Hero Section with big chunky Syne typography, big photo & red borders */}
        <Hero onOpenQuote={() => scrollToQuote()} />

        {/* Portfolio Bento Grid: Identidade e Precisão */}
        <PortfolioBento onSelectStyleForQuote={(style) => scrollToQuote(style)} />

        {/* Studio Process Methodology */}
        <ProcessSection onOpenQuote={() => scrollToQuote()} />

        {/* Free Quote Consultation & Simulator with Red Neon Backdrop */}
        <QuoteSection initialStyle={quoteStyle} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Conversion Footer with Instagram & WhatsApp */}
      <Footer onOpenQuote={() => scrollToQuote()} />
    </div>
  );
}
