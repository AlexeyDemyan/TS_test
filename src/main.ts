document.title = `${new Date().toISOString()} TypeScript compiled`;

const checkList = `
npm i -D typescript to install TypeScript compiler
npx tsc -v to check compiler version
npx tsc --init to create tsconfig.json
include and compilerOptions.rootDir parameters to reflect location of source files with TS code
compilerOptions.outDir parameter to reflect where compiler will be placing final JS code files
specify other compiler parameters where needed
npx tsc to compile`;