import { configureStore } from "@reduxjs/toolkit";
// import reducer from ""

const store = configureStore({
    reducer: {},
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
