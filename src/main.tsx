import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";
import store from "./store/store";
import {ThemeProvider} from "@mui/material";
import {theme} from "./provider/theme";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    // </React.StrictMode>,
)
