import {createTheme, PaletteColorOptions} from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";
import createTypography from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
    interface Palette {
        purple: PaletteColorOptions;
    }
    interface PaletteOptions {
        purple?: PaletteColorOptions;
    }
}

export const pallete = createPalette({
    mode: 'dark',
    primary: {
        main: '#3f51b5',
    },
    secondary: {
        main: '#f50057',
    },
    purple: {
        main: '#9966FF'
    }
})

export const typography = createTypography(pallete,{
    fontFamily: "inherit"
})

export const theme = createTheme({
    palette: pallete,
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        "color": pallete.text.secondary,
                        "fontWeight": "bold"
                    },
                    fontWeight: "normal",
                },
            }
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: pallete.secondary.main
                }
            }
        }
    }
});