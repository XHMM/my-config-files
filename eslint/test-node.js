const { ESLint } = require("eslint");

async function main() {
  const eslint = new ESLint({
  });
  const results = await eslint.lintFiles(["./test/node/lib.ts", './test/node/index.ts']);

  console.log(results, results[0].messages);
}

main()
