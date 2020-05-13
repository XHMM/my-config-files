const { ESLint } = require("eslint");

async function main() {
  const eslint = new ESLint();
  const results = await eslint.lintFiles(["./test/browser/index.ts"]);
  for (const result of results) {
    console.log(result.messages);
  }
}

main()
