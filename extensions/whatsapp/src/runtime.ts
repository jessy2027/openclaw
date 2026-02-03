import type { PluginRuntime } from "openclaw/plugin-sdk";

// eslint-disable-next-line
let runtime: PluginRuntime | null = null;

export function setWhatsAppRuntime(next: PluginRuntime) {
  runtime = next;
}

export function getWhatsAppRuntime(): PluginRuntime {
  if (!runtime) {
    throw new Error("WhatsApp runtime not initialized");
  }
  return runtime;
}
