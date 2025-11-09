import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row gap-6 md:items-center">
      <li><a href="#features" className="text-sm text-white/80 hover:text-white transition">Features</a></li>
      <li><a href="#how" className="text-sm text-white/80 hover:text-white transition">How it works</a></li>
      <li>
        <a
          href="https://marketplace.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
        >
          Get Extension
        </a>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 bg-gray-900/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-400 grid place-items-center">
            <Rocket size={18} className="text-white" />
          </div>
          <span className="font-semibold text-white tracking-tight">RetroC</span>
        </a>

        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <NavLinks />
        </div>
      )}
    </header>
  );
}
