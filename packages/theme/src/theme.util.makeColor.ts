import type {
    ThemeColorApp,
    ThemeColorAppVariants,
    ThemeColorJawnt,
    ThemeColorShade,
    ThemeColorState,
    ThemeColorStateVariants,
    ThemeColorText,
} from './theme.config.types';

export type ThemeColorAndVariant =
    | `${ThemeColorApp}.${ThemeColorAppVariants}`
    | `${ThemeColorState}.${ThemeColorStateVariants}`
    | `shade.${ThemeColorShade}`
    | `text.${ThemeColorText}`
    | `jawnt.${ThemeColorJawnt}`;

export type ThemeColorUnion =
    | {
          color: ThemeColorApp;
          appVariant: ThemeColorAppVariants;
          opacity?: number;
      }
    | {
          color: ThemeColorState;
          stateVariant: ThemeColorStateVariants;
          opacity?: number;
      }
    | {
          color: 'shade';
          shadeVariant: ThemeColorShade;
          opacity?: number;
      }
    | {
          color: 'text';
          textVariant: ThemeColorText;
          opacity?: number;
      }
    | {
          color: 'jawnt';
          jawntVariant: ThemeColorJawnt;
          opacity?: number;
      };

export const exhaustiveMatchGuard = (_: never): never => {
    throw new Error(
        'Forgot to add another case statement for the switch clause.'
    );
};

export function makeColor(
    colorVariant: ThemeColorAndVariant,
    opacity?: number
): string;
export function makeColor(config: ThemeColorUnion): string;

export function makeColor(
    colorAndVariantOrConfig: unknown,
    opacity?: number
): unknown {
    let rColor = '';
    let rVariant = '';
    let rOpacity: number | undefined = opacity;

    if (typeof colorAndVariantOrConfig === 'string') {
        const [color, variant] = colorAndVariantOrConfig.split('.');
        rColor = color;
        rVariant = variant;
    } else {
        const config = colorAndVariantOrConfig as ThemeColorUnion;
        switch (config.color) {
            case 'danger':
            case 'warning':
            case 'success':
            case 'info':
                rVariant = config.stateVariant;
                break;
            case 'text':
                rVariant = config.textVariant;
                break;
            case 'shade':
                rVariant = config.shadeVariant;
                break;
            case 'jawnt':
                rVariant = config.jawntVariant;
                break;
            default:
                rVariant = config.appVariant;
        }
        rColor = config.color;
        rOpacity = config.opacity;
    }

    if (rOpacity) {
        return `rgba(var(--jawnt-palette-${rColor}-${rVariant}-rgb), ${rOpacity})`;
    }

    return `var(--jawnt-palette-${rColor}-${rVariant})`;
}
