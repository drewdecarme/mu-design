import type { ThemeFontWeight } from "./theme.config.types";

/**
 * A utility to return the correct CSS variable
 * for the type of font weight that should be used from
 * the :root
 */
export const makeFontWeight = (weight: ThemeFontWeight) => {
  return `var(--jawnt-font-weight-${weight})`;
};
