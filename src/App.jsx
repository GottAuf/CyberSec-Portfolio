import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import WritingSamples from './components/WritingSamples';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12 scroll-smooth">
        <Hero />
        <Services />
        <CaseStudies />
        <WritingSamples />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}