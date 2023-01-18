import type { Flag, FlagType } from "meow";
import meow from "meow";

export type CLIFlag<
  FlagName extends string,
  TFlagType extends FlagType
> = Record<FlagName, Flag<TFlagType, FlagName>>;

type InitFlagTest = CLIFlag<"testFlag", "string">;
type InitFlagTest2 = CLIFlag<"testFlag2", "string">;
type InitFlagTest3 = CLIFlag<"testFlag3", "string">;

export type InitFlags = InitFlagTest & InitFlagTest2 & InitFlagTest3;

export const flags: InitFlags = {
  testFlag: {
    type: "string",
    alias: "tf",
  },
  testFlag2: {
    type: "string",
    alias: "tf2",
  },
  testFlag3: {
    type: "string",
    alias: "tf3",
  },
};

export const initCli = meow<typeof flags>(
  `
  init
`,
  {
    importMeta: import.meta,
    flags,
  }
);

export function run() {
  console.log(JSON.stringify(initCli.flags, null, 2));
}
