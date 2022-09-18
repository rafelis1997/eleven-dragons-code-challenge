import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
        backgroundColor: '#1B1D21',
        color: "$gray100",
    },
}) 