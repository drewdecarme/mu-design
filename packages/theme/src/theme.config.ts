import { Theme } from "./theme.config.types";
import { makeColor } from "./theme.util.makeColor";

export const theme: Theme = {
  font: {
    family: {
      heading: "Poppins",
      body: "Poppins",
    },
    weight: {
      "extra-bold": 700,
      "semi-bold": 600,
      medium: 500,
      regular: 400,
      light: 300,
    },
  },
  breakpoints: {
    mobile: {
      begin: 0,
      end: 576,
    },
    tablet: {
      begin: 577,
      end: 991,
    },
    desktop: {
      begin: 992,
      end: undefined,
    },
  },
  shadow: {
    dialog: `${makeColor(
      "shade.true-black",
      0.2
    )} 0px 11px 15px -7px, ${makeColor(
      "shade.true-black",
      0.14
    )} 0px 24px 38px 3px, ${makeColor(
      "shade.true-black",
      0.12
    )} 0px 9px 46px 8px`,
  },
  size: {
    dense: 36,
    default: 40,
    large: 44,
  },
  color: {
    jawnt: {
      brand: "#d3420d",
      accent: "#F05B22",
    },
    text: {
      primary: "#000e11",
      secondary: "#4d5658",
      link: "#1E6DE2",
      disabled: "#999E9F",
    },
    shade: {
      "true-white": "#FFFFFF",
      white: "#FFFFFF",
      "grey-1": "#E6E7E7",
      "grey-2": "#CCCECF",
      "grey-3": "#B3B7B8",
      "grey-4": "#999E9F",
      "grey-5": "#808688",
      "grey-6": "#666E70",
      "grey-7": "#4D5658",
      "grey-8": "#333E40",
      "grey-9": "#1A2629",
      black: "#000E11",
      "true-black": "#000000",
    },
    primary: {
      default: "#0053A3",
      hover: "#024E98",
      active: "#033b71",
      text: "#ffffff",
      link: "#0074C6",
      disabled: "#CCCECF",
      outline: "#DFF5FF",
    },
    success: {
      default: "#02C898",
      icon: "#007C45",
      text: "#005C2E",
      border: "#005C2E",
      hover: "#DEF6ED",
      lightBg: "#EFFBF6",
    },
    warning: {
      default: "#FFB115",
      icon: "#9E5F00",
      text: "#4D3400",
      border: "#F19026",
      hover: "#F19026",
      lightBg: "#FFF8E1",
    },
    danger: {
      default: "#E50031",
      icon: "#D80029",
      text: "#800214",
      border: "#D42F4E",
      hover: "#FFC8D5",
      lightBg: "#FFF4F7",
    },
    info: {
      default: "#21bed2",
      icon: "#21bed2",
      text: "#21bed2",
      border: "#21bed2",
      hover: "#21bed2",
      lightBg: "#e9f9fb",
    },
  },
};
