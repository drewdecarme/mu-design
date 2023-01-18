import meow from "meow";

import { run as runInit } from "./init.js";

const cliConfig = meow(
  `
  Test
`,
  {
    importMeta: import.meta,
  }
);

export function cli() {
  if (cliConfig.input.includes("init")) {
    runInit();
  }
}
