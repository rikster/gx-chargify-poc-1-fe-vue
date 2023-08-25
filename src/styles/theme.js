import {ColorPalette} from "./ColorPallete.js";

export const theme = {
    colors: ColorPalette,
    space: [0, 2, 4, 8, 12, 16, 24, 32, 40, 64, 80],
    radii: [2, 4, 6, 8, 16],
    fontSizes: [12, 14, 16, 20, 30, 36],
    sizes: [8, 12, 16, 24, 28, 36, 64],
    fontWeights: [400, 500, 600, 700],
    borderWidths: [0, 2],
    lineHeights: ['16px', '20px', '24px', '32px', '40px', '64px'],
    breakpoints: ['768px', '1000px'],
    boxShadows: {
        input: `0px 2px 4px ${transparentize(0.85, palette.black.dark)}`,
    },
    fonts: {
        primary: "'Montserrat', sans-serif",
        secondary: '"Open Sans", sans-serif',
    },
};