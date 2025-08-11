import React from "react";
import { ChevronRightIcon, ShieldCheckIcon, ComputerDesktopIcon, DocumentTextIcon } from '@heroicons/react/24/solid';

export default function Services() {
  return (
    <section id="services" className="mt-16">
      <h3 className="text-3xl font-bold text-slate-900">Services</h3>
      <p className="text-slate-600 mt-3 max-w-xl">Choose a service or request a custom scope for your project.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition">
          <div className="flex items-center gap-3 text-yellow-600 mb-2">
            <ShieldCheckIcon className="w-6 h-6" />
            <div className="text-sm uppercase tracking-wide font-semibold">GRC & Compliance</div>
          </div>
          <h4 className="font-semibold mt-1 text-slate-900">Risk assessments • Policy • Compliance</h4>
          <ul className="mt-4 text-sm text-slate-600 space-y-2 list-disc list-inside">
            <li>ISO 27001 readiness & implementation</li>
            <li>PCI DSS gap analysis and remediation</li>
            <li>GDPR & Data protection advisory</li>
            <li>Vendor security assessments</li>
          </ul>
          <div className="mt-5">
            <a href="#contact" className="text-yellow-600 font-semibold hover:text-yellow-700 transition inline-flex items-center gap-1">
              Request GRC proposal <ChevronRightIcon className="w-5 h-5" />
            </a>
          </div>
        </article>

        <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition">
          <div className="flex items-center gap-3 text-yellow-600 mb-2">
            <ComputerDesktopIcon className="w-6 h-6" />
            <div className="text-sm uppercase tracking-wide font-semibold">Penetration Testing</div>
          </div>
          <h4 className="font-semibold mt-1 text-slate-900">Web • Network • Cloud</h4>
          <ul className="mt-4 text-sm text-slate-600 space-y-2 list-disc list-inside">
            <li>Web app security (OWASP Top 10, APIs)</li>
            <li>External & internal network testing</li>
            <li>Cloud security review (AWS/Azure/GCP)</li>
            <li>Exploit verification and remediation testing</li>
          </ul>
          <div className="mt-5">
            <a href="#contact" className="text-yellow-600 font-semibold hover:text-yellow-700 transition inline-flex items-center gap-1">
              Request pentest <ChevronRightIcon className="w-5 h-5" />
            </a>
          </div>
        </article>

        <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition">
          <div className="flex items-center gap-3 text-yellow-600 mb-2">
            <DocumentTextIcon className="w-6 h-6" />
            <div className="text-sm uppercase tracking-wide font-semibold">Technical Writing</div>
          </div>
          <h4 className="font-semibold mt-1 text-slate-900">Guides • Reports • Blog posts</h4>
          <ul className="mt-4 text-sm text-slate-600 space-y-2 list-disc list-inside">
            <li>Executive pentest reports & remediation plans</li>
            <li>Security policies, SOPs and playbooks</li>
            <li>Long-form technical articles for blogs/Medium</li>
            <li>Training materials and slide decks</li>
          </ul>
          <div className="mt-5">
            <a href="#writing" className="text-yellow-600 font-semibold hover:text-yellow-700 transition inline-flex items-center gap-1">
              View writing samples <ChevronRightIcon className="w-5 h-5" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}