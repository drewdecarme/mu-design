import { theme } from "./theme.config";
import { makeRem } from "./theme.util.makeRem";

import type { ThemeSize } from "./theme.config.types";

type MakeSizeOptions = {
  /**
   * This option allows a computation on the raw value
   * of the size that was defined in the first parameter
   * of the function. This function will return a number.
   *
   * This number is then used to return the a rem string value
   * to the makeSize call.
   */
  calculate?: (num: number) => number;
};

export const makeSize = (size: ThemeSize, options?: MakeSizeOptions) => {
  if (options?.calculate) return makeRem(options?.calculate(theme.size[size]));

  return `var(--jawnt-size-${size})`;
};
