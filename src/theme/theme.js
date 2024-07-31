
import { createTheme } from "@mui/material";

const themeOptions = [
    {
        name: "light",
        '@global': {
            '*::-webkit-scrollbar': {
                width: '0.4em'
            },
            '*::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '*::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
                outline: '1px solid slategrey'
            }
        },
        option: {
            typography: {
                fontFamily: ["Encode Sans", "sans-serif"].join(","),
                fontSize: 16,
                body1: {
                    fontSize: 16
                },
                h1: {
                    // fontFamily: ["nipporegular", "sans-serif"].join(","),
                    // fontSize: 103,
                    lineHeight: 1,
                    margin: "0 0 25px 0",
                    fontWeight: 400,
                    color: "#ffffff",
                },
                h5: {
                    // fontFamily: ["Encode Sans", "sans-serif"].join(","),
                    // fontSize: 20,
                    fontWeight: 600,
                    color: "#ffffff",
                    lineHeight: 1.2,
                    margin: "0 0 10px 0",
                },
                h6: {
                    // fontFamily: ["Encode Sans", "sans-serif"].join(","),
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.2,
                    margin: "0 0 2px 0",
                },

            },

            palette: {
                mode: "light",
                primary: {
                    main: "#00FF82",
                    // light: "#FFD3E0",
                },
            },
        },

    },
    {
        name: "dark",
        option: {
            palette: {
                mode: "dark",
            },
        },
    },
];

export const createMuiTheme = (themeMode) => {
    let options = themeOptions.find((item) => item.name === themeMode);

    if (!options) {
        console.warn("theme not found!");
        [options] = themeOptions;
    }


    return createTheme(options.option);

};