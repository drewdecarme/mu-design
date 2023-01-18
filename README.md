<p align="center">
    <img alt="mu-design" src="./logo-2.png" width="256" style="border-radius: 20px;"/>
</p>
<h1 align="center">
    μ Design
</h1>

<!-- <h4 align="center">
</h4> -->

<p align="center">
A collection of small typesafe utilities for easily creating and interfacing a CSS variable based design system.
</p>

# NOTE: This is a work in progress and is not ready for production.

## Introduction

Pronounced **"m-you" design** and inspired after the greek letter **μ**, this package is a set of simple framework agnostic TS utilities that you can use to first create and then easily and confidently scale your CSS variable based design system. These utilities help abstract away a lot of the thought, implementation and maintenance that goes into technical design systems at scale.

The idea is that we want to create as little **friction** as possible in our **_static_** and **_kinetic_** implementations of our design system.

First, we want to make sure we can easily get off the ground without too much effort, thusly reducing the static friction. Baseline configuration using the `makeMuSystem` allows you to easily create a CSS stylesheet via the CLI.

Second, we want to be able to continually and _quickly_ interface the design system without too much thought. This is where we use the utilities to guide us on what we can and can't use and how.

## Guiding Principals

- Use the `mu.config.ts` to create the CSS stylesheet with our design system variables
- Use the `make` utilities to interface CSS variables with other CSS variables
- Use the app to overwrite CSS variables with other CSS variables for theme
- Anytime a primitive is used, it should be interfaced using a utility

## Baseline Requirements

Like everything... there are always some base requirements before we can get started.

First, I'm assuming you're using a `esm` based repo. If you're not, add below to your `package.json`.

```json
{
  "type": "package.json"
}
```

Second, I'm assuming you're using TS since this is primarily the benefit of the utilities. Ensure that you include the `mu.config.ts` file in the `tsconfig.json` at the root of your repository

```json
{
  "include": ["src", "mu.config.ts"]
}
```

## Getting Started

### Install

```bash
# yarn
yarn add @mu-design/theme
yarn add @mu-design/cli --dev

# npm
npm install @mu-design/theme
npm install @mu-desgin/cli --dev
```

### Creating your theme

Create a `mu.config.ts` file at the base of the repo, import the `makeMuSystem` function from the `@mu-design/theme` package

```ts
export default makeMuSystem({
  // required values
  config: {
    cssFileName: "filename-of-our-stylesheet",
    cssOutDir: "./relative/director/to-where-you-want-your-stylesheet/to-be/",
  },
});
```

Add a script in your `package.json` to invoke the `@mu-design/cli`. This will create a css file in a directory of your choosing.

### Using your theme

Use the utilities along with your favorite CSS-in-JS package, I like [goober](). It's like `styled-components` without the obnoxious overhead.

```tsx
import { makeColor, makeSize } from "@mu-design/theme";
import { clsx } from "clsx";
import { css } from "goober";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  pxSize?: "s" | "m" | "lg";
  pxVariant?: "primary" | "secondary";
};

const ButtonCSS = css`
  &.variant {
    &-primary {
      background: ${makeColor("primary.default")};
    }
    &-secondary {
      background: ${makeColor("secondary.default")};
    }
  }

  &.size {
    &-s {
      height: ${makeSize("small")};
    }
    &-m {
      height: ${makeSize("medium")};
    }
    &-l {
      height: ${makeSize("large")};
    }
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      children,
      className,
      pxSize = "m",
      pxVariant = "primary",
      ...restProps
    },
    ref
  ) {
    return (
      <button
        {...restProps}
        ref={ref}
        className={clsx(
          ButtonCSS,
          className,
          `size-${pxSize}`,
          `variant-${pxVariant}`
        )}
      >
        {children}
      </button>
    );
  }
);
```

## Utilities API

### `makeColor`

### `makeSize`

### `makeFontFamily`

### `makeFontWeight`

### `makeRem`

### `makeBreakpoint`

### `makeShadow`

### `makeClass`

## ClI

## FAQs

<details>
    <summary>What kinds of code bases is this intended for?</summary>

### All kinds

Small, large, medium, whatever... it's ready for all of them.

</details>

<details>
    <summary>What kinds of code bases is this intended for?</summary>
    
### All kinds
Small, large, medium, whatever... it's ready for all of them.

</details>

###

### Overview

#### Extenuating rules

- the theme js config can be used for other means (canvas colors, etc...)

### Build process and Linaria CLI process

- Builds an esm and a cjs directory
- also builds a css directory
- linaria CLI runs against the dist/css directory
  - there's some weirdness with the `--out-dir` property so it looks a little weird
- `dist/css` directory get's removed at the end of the build process

### Why Typography isn't included

Typography isn't defined in this theme as it is an abstraction on top of the theme.
Typography is a combination of multiple values of the theme. Since this is designed to create
CSS variables and utilities that are designed to be of single responsibility to interface those
CSS variables, we'd be conflating 2 concepts at two levels in theme. This theme is supposed to act as the lowest level of primitives of the overall theme
