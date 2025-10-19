const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Allow Metro to resolve Supabase's ESM/CJS bundles (e.g. wrapper.mjs).
config.resolver.sourceExts = Array.from(
  new Set([...config.resolver.sourceExts, "mjs", "cjs"])
);

module.exports = withNativeWind(config, { input: "./global.css" });
