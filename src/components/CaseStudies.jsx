import React from "react";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mt-20">
      <h3 className="text-3xl font-bold text-slate-900">Case Studies</h3>
      <p className="text-slate-600 mt-3 max-w-xl">
        Detailed reports available on request (NDA-friendly).
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition">
          <div className="text-xs text-yellow-600 uppercase tracking-wide font-semibold">GRC • Fintech</div>
          <h4 className="font-semibold mt-2 text-slate-900">PCI DSS Readiness & Remediation</h4>
          <p className="text-slate-700 mt-3 text-sm leading-relaxed">
            Performed a full gap analysis across the cardholder data environment, documented 14 control gaps, and delivered a prioritized remediation roadmap plus a tailored security policy pack. Worked with the client's engineers to implement fixes and validated them in a follow-up review.
          </p>
          <div className="mt-4 text-sm text-slate-800 font-medium">Outcome: PCI DSS certification achieved within 3 months.</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition">
          <div className="text-xs text-yellow-600 uppercase tracking-wide font-semibold">Pentest • E-commerce</div>
          <h4 className="font-semibold mt-2 text-slate-900">Web Application Penetration Test</h4>
          <p className="text-slate-700 mt-3 text-sm leading-relaxed">
            Black-box testing of customer-facing web app and API. Identified multiple XSS vectors and an IDOR that allowed unauthorized access to order data. Provided code-level remediation steps and retested after fixes.
          </p>
          <div className="mt-4 text-sm text-slate-800 font-medium">Outcome: Vulnerabilities remediated; no high-risk issues at retest.</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition">
          <div className="text-xs text-yellow-600 uppercase tracking-wide font-semibold">Writing • SaaS</div>
          <h4 className="font-semibold mt-2 text-slate-900">Cloud Security Best Practices Guide</h4>
          <p className="text-slate-700 mt-3 text-sm leading-relaxed">
            Authored a 40-page illustrated guide covering IAM hardening, encryption-at-rest, secure CI/CD, and incident response for a mid-size SaaS provider. The guide was adopted as part of the onboarding for new engineers.
          </p>
          <div className="mt-4 text-sm text-slate-800 font-medium">Outcome: Reduced insecure cloud configuration incidents by developer self-reporting and checklist adoption.</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition">
          <div className="text-xs text-yellow-600 uppercase tracking-wide font-semibold">Advisory • Vendor Security</div>
          <h4 className="font-semibold mt-2 text-slate-900">Third-party Vendor Assessment</h4>
          <p className="text-slate-700 mt-3 text-sm leading-relaxed">
            Conducted security due diligence for a payments provider evaluating an outsourced analytics vendor. Delivered a risk scorecard and remediation requirements to include in the contract.
          </p>
          <div className="mt-4 text-sm text-slate-800 font-medium">Outcome: Contract clauses strengthened; high-risk vendor controls remediated.</div>
        </div>
      </div>
    </section>
  );
}