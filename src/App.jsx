import React from "react";
import { ChevronRightIcon, ShieldCheckIcon, DocumentTextIcon, ComputerDesktopIcon, UserGroupIcon, EnvelopeIcon, LinkIcon } from '@heroicons/react/24/solid';

export default function PortfolioSite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans">
      {/* NAV */}
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
            <a href="#contact" className="text-yellow-600 font-bold hover:text-yellow-700 transition">Contact</a>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu placeholder */}
            <button className="px-3 py-2 rounded-md bg-slate-100 hover:bg-slate-200 transition">Menu</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 scroll-smooth">
        {/* HERO */}
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

        {/* SERVICES */}
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

        {/* CASE STUDIES */}
        <section id="case-studies" className="mt-20">
          <h3 className="text-3xl font-bold text-slate-900">Case Studies</h3>
          <p className="text-slate-600 mt-3 max-w-xl">
            Short, client-focused summaries. Detailed reports available on request (NDA-friendly).
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {/* Repeat case study cards */}
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

        {/* WRITING SAMPLES */}
        <section id="writing" className="mt-20">
          <h3 className="text-3xl font-bold text-slate-900">Writing Samples</h3>
          <p className="text-slate-600 mt-3 max-w-xl">Selected articles and downloadable reports. Click to preview or request full PDF copies.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition">
              <div className="text-xs text-yellow-600 uppercase tracking-wide font-semibold">Article</div>
              <h5 className="font-semibold mt-2 text-slate-900">BugBounty Hunting for XSS in 2025</h5>
              <p className="text-slate-700 mt-3 text-sm leading-relaxed">A practical guide to modern XSS vectors, payloads, and defence strategies.</p>
              <a href="#" className="mt-4 inline-block text-yellow-600 font-semibold hover:text-yellow-700 transition">
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

        {/* SKILLS & TOOLS */}
        <section id="skills" className="mt-20">
          <h3 className="text-3xl font-bold text-slate-900">Skills & Tools</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold mb-4 text-yellow-600 flex items-center gap-2">
                <ComputerDesktopIcon className="w-6 h-6" />
                Technical
              </h4>
              <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
                <li>Penetration testing: Burp Suite, OWASP ZAP, Metasploit</li>
                <li>Network tools: Nmap, Wireshark</li>
                <li>Cloud: AWS, Azure, GCP reviews</li>
                <li>Scanning & fuzzing: Nessus, OpenVAS, wfuzz</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition">
              <h4 className="font-semibold mb-4 text-yellow-600 flex items-center gap-2">
                <UserGroupIcon className="w-6 h-6" />
                GRC & Writing
              </h4>
              <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
                <li>ISO 27001, NIST, PCI DSS, GDPR advisory</li>
                <li>Risk assessments, policy development, vendor audits</li>
                <li>Technical writing: reports, guides, blog articles</li>
                <li>Tools: Jira, Confluence, Splunk, Git</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-20 max-w-xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">Get in touch</h3>
          <form
            action="mailto:youremail@example.com"
            method="POST"
            className="flex flex-col gap-4"
          >
            <label className="flex flex-col text-sm font-semibold text-slate-700">
              Name
              <input
                type="text"
                name="name"
                required
                className="mt-1 p-2 rounded-md border border-slate-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition"
                placeholder="Your full name"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-slate-700">
              Email
              <input
                type="email"
                name="email"
                required
                className="mt-1 p-2 rounded-md border border-slate-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition"
                placeholder="you@example.com"
              />
            </label>

            <label className="flex flex-col text-sm font-semibold text-slate-700">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1 p-2 rounded-md border border-slate-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition"
                placeholder="Write your message here..."
              />
            </label>

            <button
              type="submit"
              className="bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </form>

          <p className="text-sm text-slate-500 mt-6">
            Or email me directly at{" "}
            <a
              href="mailto:youremail@example.com"
              className="text-yellow-600 hover:text-yellow-700 underline transition"
            >
              youremail@example.com
            </a>
          </p>
        </section>

        <footer className="mt-20 py-10 border-t border-slate-200 text-center text-sm text-slate-500 select-none">
          &copy; {new Date().getFullYear()} Gordon Maregwa. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
