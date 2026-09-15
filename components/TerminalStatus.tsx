"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TerminalStatus() {
  const { telemetry } = useLanguage().data;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-4" id="terminal-status">
      <div className="p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/20 flex flex-wrap items-center justify-between gap-3 text-label-code font-label-code text-outline">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span>
            {telemetry.statusPrefix} {telemetry.status}
          </span>
          <span className="hidden sm:inline text-outline-variant">
            {telemetry.envPrefix} {telemetry.nodeEnv}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span>
            {telemetry.latencyPrefix} {telemetry.latency}
          </span>
          <span>
            {telemetry.buildPrefix} {telemetry.build}
          </span>
        </div>
      </div>
    </div>
  );
}
