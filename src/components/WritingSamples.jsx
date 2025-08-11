import React from "react";

export default function WritingSamples() {
  return (
    <section id="writing" className="mt-20">
      <h3 className="text-3xl font-bold text-slate-900">Writing Samples</h3>
      <p className="text-slate-600 mt-3 max-w-xl">Selected articles and downloadable reports. Click to preview or request full PDF copies.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition">
          <div className="text-xs text-yellow-600 uppercase tracking-wide font-semibold">Article</div>
          <h5 className="font-semibold mt-2 text-slate-900">BugBounty Hunting for XSS in 2025</h5>
          <p className="text-slate-700 mt-3 text-sm leading-relaxed">A practical guide to modern XSS vectors, payloads, and defence strategies.</p>
          <a href="http://bit.ly/4oxxHZf" className="mt-4 inline-block text-yellow-600 font-semibold hover:text-yellow-700 transition">
            Preview →
          </a>
        </article>

        <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition">
          <div className="text-xs text-yellow-600 uppercase tracking-wide font-semibold">Report</div>
          <h5 className="font-semibold mt-2 text-slate-900">Sample Pentest Executive Summary</h5>
          <p className="text-slate-700 mt-3 text-sm leading-relaxed">An executive-friendly summary that converts technical findings into business risk and prioritized actions.</p>
          <a href="#" className="mt-4 inline-block text-yellow-600 font-semibold hover:text-yellow-700 transition">
            Download (sanitized) →
          </a>
        </article>

        <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition">
          <div className="text-xs text-yellow-600 uppercase tracking-wide font-semibold">Guide</div>
          <h5 className="font-semibold mt-2 text-slate-900">Cloud Security Best Practices</h5>
          <p className="text-slate-700 mt-3 text-sm leading-relaxed">Practical checklist and patterns for securely operating workloads in the cloud.</p>
          <a href="#" className="mt-4 inline-block text-yellow-600 font-semibold hover:text-yellow-700 transition">
            Preview →
          </a>
        </article>
      </div>
    </section>
  );
}