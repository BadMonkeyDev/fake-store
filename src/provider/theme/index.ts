import {createTheme, PaletteColor, PaletteColorOptions, PaletteMode, ThemeOptions} from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";


declare module "@mui/material/styles" {
    interface Palette {
        purple: PaletteColor;
        dark: PaletteColor;
        darkText: PaletteColor;
    }
    interface PaletteOptions {
        purple?: PaletteColorOptions;
        dark?: PaletteColorOptions;
        darkText?: PaletteColorOptions;
    }
}

export const palette = createPalette({
    primary: {
        main: '#3f51b5',
    },
    secondary: {
        main: '#f50057',
    },
    purple: {
        main: '#9966FF',
    },
    dark: {
        main: '#303030',
        light: '#424242',
        contrastText: '#fff'
    },
    darkText: {
        main: 'rgba(255,255,255, 0.8)',
        light: 'rgba(255,255,255, 0.6)',
        contrastText: '#fff'
    }
})

export const theme = createTheme({
    palette: palette,
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        fontWeight: "bold",
                        color: palette.darkText.main,
                    },
                    fontWeight: "normal",
                    color: palette.darkText.light,
                },
            }
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: palette.secondary.main
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                colorSecondary: palette.primary.main
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: palette.dark.main,
                }
            }
        },
        MuiIconButton: {
            variants: [
                {
                 props: { value: "dark" },
                 style: {
                     color: palette.darkText.light,
                     "&:hover": palette.purple.main
                 }
                }
            ]
        }
    }
});

