import { makeColor, makeSize } from "@mu-design/theme";
import { clsx } from "clsx";
import { css } from "goober";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  pxSize?: "s" | "m" | "lg";
  pxVariant?: "primary" | "secondary";
};

const ButtonCSS = css`
  height: ${makeSize("small")};

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
