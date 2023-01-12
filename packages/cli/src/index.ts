import meow from "meow";

import { FlagInit } from "./init";

type Flags = {
  init: FlagInit;
};

export const cli = meow<Flags>(
  `
  Test
`,
  {
    importMeta: import.meta,
    flags: {
      init: {
        type: "string",
        alias: "i",
      },
    },
  }
);
