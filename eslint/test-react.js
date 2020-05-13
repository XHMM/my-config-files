const { ESLint } = require("eslint");

async function main() {
  const eslint = new ESLint({});
  const results = await eslint.lintFiles(["./test/react/index.tsx"]);

  console.log(results, results[0].messages);
}

main()
