import { describe, expect, it } from 'vitest';

import { makeColor } from './theme.util.makeColor';

describe('makeColor', () => {
    it('creates a valid CSS variable string when provided a string', () => {
        const colorString = makeColor('primary.hover');
        expect(colorString).toContain('var(');
    });

    it('creates a danger CSS var when provided a config', () => {
        const colorString = makeColor({
            color: 'danger',
            stateVariant: 'border',
        });
        expect(colorString).toEqual('var(--jawnt-palette-danger-border)');
    });

    it('creates a primary CSS var when provided a config', () => {
        const colorString = makeColor({
            color: 'primary',
            appVariant: 'hover',
        });
        expect(colorString).toEqual('var(--jawnt-palette-primary-hover)');
    });

    it('creates a text CSS var when provided a config and opacity', () => {
        const colorString = makeColor({
            color: 'success',
            stateVariant: 'lightBg',
            opacity: 0.3,
        });
        expect(colorString).toEqual(
            'rgba(var(--jawnt-palette-success-lightBg-rgb), 0.3)'
        );
    });
    it('creates a danger light background CSS var when provided a string', () => {
        const colorString = makeColor('danger.lightBg');
        expect(colorString).toEqual('var(--jawnt-palette-danger-lightBg)');
    });

    it('creates a primary link CSS var when provided a string and opacity', () => {
        const colorString = makeColor('primary.link', 0.2);
        expect(colorString).toEqual(
            'rgba(var(--jawnt-palette-primary-link-rgb), 0.2)'
        );
    });
});
