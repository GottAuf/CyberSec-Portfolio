import React from "react";
import { ComputerDesktopIcon, UserGroupIcon } from '@heroicons/react/24/solid';

export default function Skills() {
  return (
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
  );
}