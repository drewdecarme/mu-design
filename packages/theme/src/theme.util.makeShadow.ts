import type { ThemeShadows } from './theme.config.types';

export const makeShadow = (shadow: ThemeShadows): string => {
    return `var(--jawnt-shadow-${shadow})`;
};
