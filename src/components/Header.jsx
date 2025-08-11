import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-900 to-yellow-500 flex items-center justify-center text-white font-semibold select-none cursor-default">GM</div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Gordon Maregwa</h1>
            <p className="text-xs text-slate-600">Cybersecurity Specialist • GRC • Penetration Testing • Technical Writer</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-700">
          <a href="#services" className="hover:text-yellow-600 transition">Services</a>
          <a href="#case-studies" className="hover:text-yellow-600 transition">Case Studies</a>
          <a href="#writing" className="hover:text-yellow-600 transition">Writing</a>
          <a href="#skills" className="hover:text-yellow-600 transition">Skills</a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition">Contact</a>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-slate-900">
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <nav className="flex flex-col gap-4 text-sm font-semibold text-slate-700 px-6">
            <a href="#services" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100 hover:text-yellow-600">Services</a>
            <a href="#case-studies" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100 hover:text-yellow-600">Case Studies</a>
            <a href="#writing" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100 hover:text-yellow-600">Writing</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100 hover:text-yellow-600">Skills</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="py-2 text-yellow-600 hover:text-yellow-700">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}