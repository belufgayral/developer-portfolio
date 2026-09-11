import { portfolioData } from "@/data/portfolioData";

export default function TerminalStatus() {
  const { telemetry } = portfolioData;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-4" id="terminal-status">
      <div className="p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/20 flex flex-wrap items-center justify-between gap-3 text-label-code font-label-code text-outline">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span>SYSTEM // STATUS: {telemetry.status}</span>
          <span className="hidden sm:inline text-outline-variant">
            | NODE_ENV: {telemetry.nodeEnv}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span>LATENCY: {telemetry.latency}</span>
          <span>BUILD: {telemetry.build}</span>
        </div>
      </div>
    </div>
  );
}

