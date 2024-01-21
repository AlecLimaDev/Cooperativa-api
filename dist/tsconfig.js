// src/tsconfig.json
var compilerOptions = {
  paths: {
    "@prisma/client": ["node_modules/@prisma/client"]
  },
  target: "es2020",
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
