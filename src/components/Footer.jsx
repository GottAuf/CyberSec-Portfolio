import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-slate-200 text-center text-sm text-slate-500 select-none">
      <div className="max-w-6xl mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Gordon Maregwa. All rights reserved.</p>
        {/* You can add social media links here */}
      </div>
    </footer>
  );
}