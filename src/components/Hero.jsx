import React from "react";
import { ShieldCheckIcon, DocumentTextIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center py-8">
      <div>
        <h2 className="text-4xl font-extrabold leading-tight text-slate-900">Freelance Cybersecurity Specialist</h2>
        <p className="mt-5 text-lg text-slate-700 leading-relaxed">
          I help startups and SMBs reduce risk, meet compliance requirements, and remediate vulnerabilities through pragmatic GRC consulting, hands-on penetration testing, and clear technical writing. 11+ years of experience.
        </p>
        <div className="mt-8 flex gap-5">
          <a
            href="#contact"
            className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-600 transition"
          >
            Hire me
          </a>
          <a
            href="#case-studies"
            className="inline-block px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:border-yellow-500 hover:text-yellow-600 transition"
          >
            View case studies
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          <strong>Available for:</strong> Upwork / Freelancer / Direct contract • Remote
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Highlight</div>
        <div className="mt-5 grid grid-cols-1 gap-4">
          <div className="p-4 border rounded-lg hover:shadow-lg transition">
            <div className="flex items-center gap-2 text-yellow-600">
              <ShieldCheckIcon className="w-5 h-5" />
              <div className="text-xs uppercase tracking-wide font-semibold">GRC</div>
            </div>
            <div className="font-semibold text-slate-900 mt-1">PCI DSS gap analysis & remediation</div>
            <div className="text-sm text-slate-600 mt-1">Helped a fintech client achieve compliance in 3 months.</div>
          </div>
          <div className="p-4 border rounded-lg hover:shadow-lg transition">
            <div className="flex items-center gap-2 text-yellow-600">
              <ComputerDesktopIcon className="w-5 h-5" />
              <div className="text-xs uppercase tracking-wide font-semibold">Pentesting</div>
            </div>
            <div className="font-semibold text-slate-900 mt-1">Web app & API penetration testing</div>
            <div className="text-sm text-slate-600 mt-1">Found critical XSS and IDOR, provided remediation guidance and retest.</div>
          </div>
          <div className="p-4 border rounded-lg hover:shadow-lg transition">
            <div className="flex items-center gap-2 text-yellow-600">
              <DocumentTextIcon className="w-5 h-5" />
              <div className="text-xs uppercase tracking-wide font-semibold">Writing</div>
            </div>
            <div className="font-semibold text-slate-900 mt-1">Technical guides & incident playbooks</div>
            <div className="text-sm text-slate-600 mt-1">Produced training materials and long-form research articles.</div>
          </div>
        </div>
      </div>
    </section>
  );
}