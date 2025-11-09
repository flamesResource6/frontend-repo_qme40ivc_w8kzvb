import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/O8QO5r7eJ1JQp2xj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
              <Sparkles size={14} /> AI-Powered Solidity Generator
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white">
              RetroC — Generate robust smart contracts in seconds
            </h1>
            <p className="mt-4 text-white/80 md:text-lg">
              A VS Code extension that turns plain-English prompts into secure, production-ready Solidity code. Ship faster with inline docs, audits, and tests.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://marketplace.visualstudio.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-medium hover:bg-white/90 transition"
              >
                Install on VS Code
              </a>
              <a
                href="#playground"
                className="inline-flex items-center justify-center rounded-md border border-white/20 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                Try Playground
              </a>
            </div>
          </div>

          <div className="relative h-[420px] rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900/60 to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1639149888905-fb39731f2e4b?q=80&w=1920&auto=format&fit=crop"
              alt="RetroC Preview"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
