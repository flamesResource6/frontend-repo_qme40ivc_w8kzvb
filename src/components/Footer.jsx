export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} RetroC — Solidity, faster.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-white/70 hover:text-white">Privacy</a>
          <a href="#" className="text-white/70 hover:text-white">Terms</a>
          <a href="https://github.com/" className="text-white/70 hover:text-white" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
