import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const reducers = {

}

export const store = configureStore({
    reducers,
    middleware: [logger]
})