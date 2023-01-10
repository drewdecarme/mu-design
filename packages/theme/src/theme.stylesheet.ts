import { css } from '@linaria/core';

import {
    createFontFamilies,
    createFontWeights,
    createThemeColors,
    createThemeShadows,
    createThemeSize,
} from './theme.stylesheet.utils';
import { makeFontFamily } from './theme.util.makeFontFamily';

export const themeStyles = css`
    :global() {
        :root,
        ::backdrop,
        ::before,
        ::after {
            --font-size: 16px;
            --line-height: 1.4;

            // Fonts
            ${createFontFamilies()};
            ${createFontWeights()};

            // Colors
            ${createThemeColors()};

            // shadow
            ${createThemeShadows()};

            // size
            ${createThemeSize()};
        }

        * {
            box-sizing: border-box;
            font-family: ${makeFontFamily('body')};

            &:before,
            &:after {
                font-family: ${makeFontFamily('body')};
                box-sizing: border-box;
            }
        }

        a {
            text-decoration: none;

            &:visited {
                color: initial;
            }
        }

        ul,
        li {
            padding: 0;
            margin: 0;
            list-style-type: none;
        }

        a {
            color: inherit;

            &:visited {
                color: inherit;
            }
        }
    }
`;
