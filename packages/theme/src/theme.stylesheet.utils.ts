import { theme } from "./theme.config";
import { makeRem } from "./theme.util.makeRem";

export const makeHexToRgb = (color: string) => {
  const trimmedColor = color.substring(1);
  if (trimmedColor.length != 6) {
    throw "Only six-digit hex colors are allowed.";
  }

  const aRgbHex = trimmedColor.match(/.{1,2}/g);
  if (aRgbHex) {
    return `${parseInt(aRgbHex[0], 16)}, ${parseInt(
      aRgbHex[1],
      16
    )}, ${parseInt(aRgbHex[2], 16)}`;
  }
  return "ERROR_HEX_TO_RGB";
};

export const createThemeColors = () => {
  return Object.entries(theme.color).reduce(
    (accum, [colorKey, colorVariants]) => `${accum}
${Object.entries(colorVariants).reduce((iAccum, [variant, value]) => {
  return `${iAccum}
--jawnt-palette-${colorKey}-${variant}: ${value};
--jawnt-palette-${colorKey}-${variant}-rgb: ${makeHexToRgb(value)};
`;
}, "")}`,
    ""
  );
};

export const createFontFamilies = () => {
  return Object.entries(theme.font.family).reduce(
    (accum, [fontFamilyKey, fontFamilyValue]) => `${accum}
--jawnt-font-family-${fontFamilyKey}: ${fontFamilyValue};
`,
    ""
  );
};

export const createFontWeights = () => {
  return Object.entries(theme.font.weight).reduce(
    (accum, [fontWeightKey, fontWeightValue]) => `${accum}
--jawnt-font-weight-${fontWeightKey}: ${fontWeightValue};
`,
    ""
  );
};

export const createThemeShadows = () => {
  return Object.entries(theme.shadow).reduce(
    (accum, [shadowKey, shadowValue]) => `${accum}
--jawnt-shadow-${shadowKey}: ${shadowValue};
    `,
    ""
  );
};

export const createThemeSize = () => {
  return Object.entries(theme.size).reduce(
    (accum, [sizeKey, sizeValue]) => `${accum}
--jawnt-size-${sizeKey}: ${makeRem(sizeValue)};
--jawnt-size-${sizeKey}-raw: ${sizeValue};
    `,
    ""
  );
};
