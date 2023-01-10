export type ResponsiveDevices = 'mobile' | 'tablet' | 'desktop';

type ResponsiveMedia =
    | `${ResponsiveDevices}-only`
    | `${ResponsiveDevices}-up`
    | `${Extract<ResponsiveDevices, 'mobile'>}-to-${Exclude<
          ResponsiveDevices,
          'mobile'
      >}`
    | `${Extract<ResponsiveDevices, 'tablet'>}-to-${Exclude<
          ResponsiveDevices,
          'mobile' | 'tablet'
      >}`;

// mobile = 0 to (577 - 1)
// tablet = 577 to (992 - 1)
// desktop = 992 - up
const makePx = (val: number) => `${val}px`;
const mobileBegin = 0;
const mobileEnd = makePx(576);
const tabletBegin = makePx(577);
const tabletEnd = makePx(991);
const desktopBegin = makePx(992);

export const makeBreakpoint = (size?: ResponsiveMedia) => {
    switch (size) {
        case 'mobile-only':
            return `@media only screen and (max-width: ${mobileEnd})`;

        case 'tablet-only':
            return `@media only screen and (min-width: ${tabletBegin}) and (max-width: ${tabletEnd})`;

        case 'desktop-only':
        case 'desktop-up':
            return `@media only screen and (min-width: ${desktopBegin})`;

        case 'mobile-up':
            return `@media only screen and (min-width: ${mobileBegin})`;

        case 'tablet-up':
        case 'tablet-to-desktop':
            return `@media only screen and (min-width: ${tabletBegin})`;

        case 'mobile-to-tablet':
            return `@media only screen and (min-width: ${mobileBegin}) and (max-width: ${mobileEnd})`;

        case 'mobile-to-desktop':
            return `@media only screen and (min-width: ${mobileBegin}) and (max-width: ${tabletEnd})`;
    }
};

export const mobileStyles = makeBreakpoint('mobile-to-desktop');
export const tabletStyles = makeBreakpoint('tablet-to-desktop');
export const desktopStyles = makeBreakpoint('desktop-up');
