/**
 * A utility to return the correct CSS variable
 * for the type of font family that should be used from
 * the :root
 */
export const makeFontFamily = (type: "heading" | "body") => {
  return `var(--jawnt-font-family-${type})`;
};
