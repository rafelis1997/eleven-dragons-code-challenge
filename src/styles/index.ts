import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    media: {
        bp1: '(max-width: 768px)'
    },
    theme: {
        colors: {
            white: '#FFF',

            gray900: '#121214',
            gray800: '#202024',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',

            yellow500: '#FCD400',
            yellow300: '#FCE77E',
        },
    }
})

