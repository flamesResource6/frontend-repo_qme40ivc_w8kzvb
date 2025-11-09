import { ShieldCheck, Code2, TestTube, Settings } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Security-first',
    desc: 'Built-in checks, best-practice patterns, and vulnerability hints as you type.'
  },
  {
    icon: Code2,
    title: 'Clean Solidity',
    desc: 'Readable, audited-style code with SPDX headers, NatSpec, and version pragmas.'
  },
  {
    icon: TestTube,
    title: 'Auto tests',
    desc: 'Generate Foundry or Hardhat test suites alongside your contracts.'
  },
  {
    icon: Settings,
    title: 'Configurable',
    desc: 'Choose license, compiler, framework, and patterns like Ownable, Pausable, UUPS.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Why RetroC</h2>
          <p className="mt-3 text-white/75">Everything you need to go from an idea to audited contracts without leaving your editor.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <Icon className="text-white" />
              <h3 className="mt-3 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
