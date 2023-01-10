export type ThemeBreakpoints = 'mobile' | 'tablet' | 'desktop';
export type ThemeBreakpointVariants = 'begin' | 'end';
export type ThemeFontWeight =
    | 'extra-bold'
    | 'semi-bold'
    | 'medium'
    | 'regular'
    | 'light';

export type ThemeColorShade =
    | 'true-black'
    | 'black'
    | 'grey-1'
    | 'grey-2'
    | 'grey-3'
    | 'grey-4'
    | 'grey-5'
    | 'grey-6'
    | 'grey-7'
    | 'grey-8'
    | 'grey-9'
    | 'white'
    | 'true-white';
export type ThemeColorApp = 'primary';
export type ThemeColorAppVariants =
    | 'default'
    | 'hover'
    | 'active'
    | 'link'
    | 'disabled'
    | 'text'
    | 'outline';
export type ThemeColorState = 'danger' | 'warning' | 'success' | 'info';
export type ThemeColorStateVariants =
    | 'default'
    | 'icon'
    | 'text'
    | 'border'
    | 'hover'
    | 'lightBg';
export type ThemeColorText = 'primary' | 'secondary' | 'link' | 'disabled';
export type ThemeColorJawnt = 'brand' | 'accent';

export type ThemeShadows = 'dialog';
export type ThemeSize = 'dense' | 'default' | 'large';

export type Theme = {
    font: {
        family: {
            heading: string;
            body: string;
        };
        weight: {
            [key in ThemeFontWeight]: number;
        };
    };
    breakpoints: {
        [key in ThemeBreakpoints]: {
            [key in ThemeBreakpointVariants]: number | undefined;
        };
    };
    shadow: {
        [key in ThemeShadows]: string;
    };
    color: {
        jawnt: {
            [key in ThemeColorJawnt]: string;
        };
        text: {
            [key in ThemeColorText]: string;
        };
        shade: {
            [key in ThemeColorShade]: string;
        };
    } & {
        [key in ThemeColorApp]: {
            [key in ThemeColorAppVariants]: string;
        };
    } & {
        [key in ThemeColorState]: {
            [key in ThemeColorStateVariants]: string;
        };
    };
    size: {
        [key in ThemeSize]: number;
    };
};
