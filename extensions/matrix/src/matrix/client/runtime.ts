// eslint-disable-next-line
let runtime: PluginRuntime | null = null;
export function isBunRuntime(): boolean {
  const versions = process.versions as { bun?: string };
  return typeof versions.bun === "string";
}
