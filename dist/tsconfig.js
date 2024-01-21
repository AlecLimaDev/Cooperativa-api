// src/tsconfig.json
var compilerOptions = {
  target: "es2016",
  lib: [],
  module: "commonjs",
  rootDir: "./",
  sourceMap: true,
  esModuleInterop: true,
  forceConsistentCasingInFileNames: true,
  strict: false,
  skipLibCheck: true
};
var tsconfig_default = {
  compilerOptions
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  compilerOptions
});
