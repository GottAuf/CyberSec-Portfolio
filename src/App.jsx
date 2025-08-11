import React from "react";

// Single-file React component portfolio (Tailwind CSS assumed globally available)
// Default export: PortfolioSite

export default function PortfolioSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* NAV */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-yellow-500 flex items-center justify-center text-white font-semibold">GM</div>
            <div>
              <h1 className="text-lg font-semibold">Gordon Maregwa</h1>
              <p className="text-xs text-gray-500">Cybersecurity Specialist • GRC • Penetration Testing • Technical Writer</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <a href="#services">Services</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#writing">Writing</a>
            <a href="#skills">Skills</a>
            <a href="#contact" className="text-yellow-600">Contact</a>
          </nav>
          <div className="md:hidden">{/* mobile menu placeholder */}
            <button className="px-3 py-2 rounded-md bg-gray-100">Menu</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Freelance Cybersecurity Specialist</h2>
            <p className="mt-4 text-lg text-gray-700">I help startups and SMBs reduce risk, meet compliance requirements, and remediate vulnerabilities through pragmatic GRC consulting, hands-on penetration testing, and clear technical writing. 11+ years of experience.</p>

            <div className="mt-6 flex gap-4">
              <a href="#contact" className="inline-block bg-yellow-500 text-white px-5 py-3 rounded-lg font-medium shadow">Hire me</a>
              <a href="#case-studies" className="inline-block px-5 py-3 rounded-lg border border-gray-200 text-gray-700">View case studies</a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p><strong>Available for:</strong> Upwork / Freelancer / Direct contract • Remote</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="text-sm text-gray-500">Highlight</div>
            <div className="mt-4 grid grid-cols-1 gap-3">
              <div className="p-3 border rounded-lg">
                <div className="text-xs text-gray-500">GRC</div>
                <div className="font-semibold">PCI DSS gap analysis & remediation</div>
                <div className="text-sm text-gray-600 mt-1">Helped a fintech client achieve compliance in 3 months.</div>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="text-xs text-gray-500">Pentesting</div>
                <div className="font-semibold">Web app & API penetration testing</div>
                <div className="text-sm text-gray-600 mt-1">Found critical XSS and IDOR, provided remediation guidance and retest.</div>
              </div>
              <div className="p-3 border rounded-lg">
                <div className="text-xs text-gray-500">Writing</div>
                <div className="font-semibold">Technical guides & incident playbooks</div>
                <div className="text-sm text-gray-600 mt-1">Produced training materials and long-form research articles.</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mt-12">
          <h3 className="text-2xl font-bold">Services</h3>
          <p className="text-gray-600 mt-2">Choose a service or request a custom scope for your project.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <article className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-sm text-gray-500">GRC & Compliance</div>
              <h4 className="font-semibold mt-2">Risk assessments • Policy • Compliance</h4>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>ISO 27001 readiness & implementation</li>
                <li>PCI DSS gap analysis and remediation</li>
                <li>GDPR & Data protection advisory</li>
                <li>Vendor security assessments</li>
              </ul>
              <div className="mt-4">
                <a href="#contact" className="text-sm font-medium text-yellow-600">Request GRC proposal →</a>
              </div>
            </article>

            <article className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-sm text-gray-500">Penetration Testing</div>
              <h4 className="font-semibold mt-2">Web • Network • Cloud</h4>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>Web app security (OWASP Top 10, APIs)</li>
                <li>External & internal network testing</li>
                <li>Cloud security review (AWS/Azure/GCP)</li>
                <li>Exploit verification and remediation testing</li>
              </ul>
              <div className="mt-4">
                <a href="#contact" className="text-sm font-medium text-yellow-600">Request pentest →</a>
              </div>
            </article>

            <article className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-sm text-gray-500">Technical Writing</div>
              <h4 className="font-semibold mt-2">Guides • Reports • Blog posts</h4>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>Executive pentest reports & remediation plans</li>
                <li>Security policies, SOPs and playbooks</li>
                <li>Long-form technical articles for blogs/Medium</li>
                <li>Training materials and slide decks</li>
              </ul>
              <div className="mt-4">
                <a href="#writing" className="text-sm font-medium text-yellow-600">View writing samples →</a>
              </div>
            </article>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="case-studies" className="mt-16">
          <h3 className="text-2xl font-bold">Case Studies</h3>
          <p className="text-gray-600 mt-2">Short, client-focused summaries. Detailed reports available on request (NDA-friendly).</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-xs text-gray-500">GRC • Fintech</div>
              <h4 className="font-semibold mt-2">PCI DSS Readiness & Remediation</h4>
              <p className="text-gray-600 mt-2 text-sm">Performed a full gap analysis across the cardholder data environment, documented 14 control gaps, and delivered a prioritized remediation roadmap plus a tailored security policy pack. Worked with the client's engineers to implement fixes and validated them in a follow-up review.</p>
              <div className="mt-4 text-sm text-gray-700 font-medium">Outcome: PCI DSS certification achieved within 3 months.</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-xs text-gray-500">Pentest • E-commerce</div>
              <h4 className="font-semibold mt-2">Web Application Penetration Test</h4>
              <p className="text-gray-600 mt-2 text-sm">Black-box testing of customer-facing web app and API. Identified multiple XSS vectors and an IDOR that allowed unauthorized access to order data. Provided code-level remediation steps and retested after fixes.</p>
              <div className="mt-4 text-sm text-gray-700 font-medium">Outcome: Vulnerabilities remediated; no high-risk issues at retest.</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-xs text-gray-500">Writing • SaaS</div>
              <h4 className="font-semibold mt-2">Cloud Security Best Practices Guide</h4>
              <p className="text-gray-600 mt-2 text-sm">Authored a 40-page illustrated guide covering IAM hardening, encryption-at-rest, secure CI/CD, and incident response for a mid-size SaaS provider. The guide was adopted as part of the onboarding for new engineers.</p>
              <div className="mt-4 text-sm text-gray-700 font-medium">Outcome: Reduced insecure cloud configuration incidents by developer self-reporting and checklist adoption.</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-xs text-gray-500">Advisory • Vendor Security</div>
              <h4 className="font-semibold mt-2">Third-party Vendor Assessment</h4>
              <p className="text-gray-600 mt-2 text-sm">Conducted security due diligence for a payments provider evaluating an outsourced analytics vendor. Delivered a risk scorecard and remediation requirements to include in the contract.</p>
              <div className="mt-4 text-sm text-gray-700 font-medium">Outcome: Contract clauses strengthened; high-risk vendor controls remediated.</div>
            </div>
          </div>
        </section>

        {/* WRITING SAMPLES */}
        <section id="writing" className="mt-16">
          <h3 className="text-2xl font-bold">Writing Samples</h3>
          <p className="text-gray-600 mt-2">Selected articles and downloadable reports. Click to preview or request full PDF copies.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <article className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="text-xs text-gray-500">Article</div>
              <h5 className="font-semibold mt-1">BugBounty Hunting for XSS in 2025</h5>
              <p className="text-sm text-gray-600 mt-2">A practical guide to modern XSS vectors, payloads, and defence strategies.</p>
              <div className="mt-3">
                <a href="#" className="text-sm text-yellow-600 font-medium">Preview →</a>
              </div>
            </article>

            <article className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="text-xs text-gray-500">Report</div>
              <h5 className="font-semibold mt-1">Sample Pentest Executive Summary</h5>
              <p className="text-sm text-gray-600 mt-2">An executive-friendly summary that converts technical findings into business risk and prioritized actions.</p>
              <div className="mt-3">
                <a href="#" className="text-sm text-yellow-600 font-medium">Download (sanitized) →</a>
              </div>
            </article>

            <article className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="text-xs text-gray-500">Guide</div>
              <h5 className="font-semibold mt-1">Cloud Security Best Practices</h5>
              <p className="text-sm text-gray-600 mt-2">Practical checklist and patterns for securely operating workloads in the cloud.</p>
              <div className="mt-3">
                <a href="#" className="text-sm text-yellow-600 font-medium">Preview →</a>
              </div>
            </article>
          </div>
        </section>

        {/* SKILLS & TOOLS */}
        <section id="skills" className="mt-16">
          <h3 className="text-2xl font-bold">Skills & Tools</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h4 className="font-semibold">Technical</h4>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>Penetration testing: Burp Suite, OWASP ZAP, Metasploit</li>
                <li>Network tools: Nmap, Wireshark</li>
                <li>Cloud: AWS, Azure, GCP reviews</li>
                <li>Scanning & fuzzing: Nessus, OpenVAS, wfuzz</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h4 className="font-semibold">GRC & Writing</h4>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>ISO 27001, NIST, PCI DSS, GDPR advisory</li>
                <li>Risk assessments, policy development, vendor audits</li>
                <li>Technical writing: reports, guides, blog articles</li>
                <li>Tools: Jira, Confluence, Splunk, Git</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-500">Certifications: list your certifications here (CEH, Security+, ISO 27001 Lead Implementer, etc.)</div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16 bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl border">
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="text-gray-600 mt-2">Let's discuss your project — whether it's a one-off pentest, a compliance road‑map, or a technical article. I respond quickly to proposals from Upwork and direct client inquiries.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h4 className="font-semibold">Let's get started</h4>
              <p className="text-sm text-gray-600 mt-2">Share project scope, timeline, and any constraints. I will provide a concise proposal and price estimate.</p>

              <div className="mt-4 space-y-2 text-sm">
                <div><strong>Email:</strong> <a href="mailto:your-email@example.com" className="text-yellow-600">your-email@example.com</a></div>
                <div><strong>Upwork:</strong> <a href="#" className="text-yellow-600">/u/your-upwork-profile</a></div>
                <div><strong>LinkedIn:</strong> <a href="#" className="text-yellow-600">linkedin.com/in/yourprofile</a></div>
              </div>
            </div>

            <form className="bg-white p-6 rounded-xl border shadow-sm">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 w-full border rounded-md p-2" placeholder="Your name" />

              <label className="block text-sm font-medium text-gray-700 mt-3">Email</label>
              <input type="email" className="mt-1 w-full border rounded-md p-2" placeholder="you@example.com" />

              <label className="block text-sm font-medium text-gray-700 mt-3">Project brief</label>
              <textarea className="mt-1 w-full border rounded-md p-2" rows={4} placeholder="Brief description of the project, timeline, budget."></textarea>

              <div className="mt-4 flex gap-3">
                <button type="submit" className="px-4 py-2 rounded-md bg-yellow-500 text-white font-medium">Send message</button>
                <button type="reset" className="px-4 py-2 rounded-md border">Reset</button>
              </div>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 py-8 text-sm text-gray-500 text-center">
          <div>© {new Date().getFullYear()} Gordon Maregwa — Cybersecurity Specialist. All rights reserved.</div>
          <div className="mt-2">Available for freelance work on Upwork, Freelancer and direct contracts.</div>
        </footer>
      </main>
    </div>
  );
}
