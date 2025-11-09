import { useState } from 'react';

export default function Playground() {
  const [prompt, setPrompt] = useState('ERC20 token with mint, burn, and pausability. Owner is a multisig.');
  const [output, setOutput] = useState('// Your generated Solidity will appear here...');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    // In a full app this would call the backend. For now we mock a response.
    await new Promise(r => setTimeout(r, 700));
    setOutput(`// SPDX-License-Identifier: MIT\npragma solidity ^0.8.20;\n\n/// @title RetroC Generated Contract\n/// @notice Example stub for: ${prompt}\ncontract RetroCToken {\n    string public name = "RetroC";\n}`);
    setLoading(false);
  };

  return (
    <section id="playground" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <label className="block text-sm text-white/80 mb-2">Describe your contract</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={7}
              className="w-full rounded-md bg-gray-900/60 border border-white/10 p-3 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="mt-3 flex gap-3">
              <button onClick={generate} disabled={loading} className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition disabled:opacity-60">
                {loading ? 'Generating…' : 'Generate Solidity'}
              </button>
              <button onClick={() => {navigator.clipboard.writeText(output);}} className="inline-flex items-center justify-center rounded-md border border-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/10 transition">
                Copy Output
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black p-5 overflow-auto min-h-[240px]">
            <pre className="text-xs md:text-sm text-green-300 whitespace-pre-wrap leading-relaxed">{output}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
