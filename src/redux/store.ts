import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { sectionSlice } from "src/components/dashboard/sections/sectionSlice";
import { userSlice } from "src/components/authentication/userSlice";

/**
 * Root reducer combining all the slices.
 */
const rootReducer = combineSlices(sectionSlice, userSlice);

/**
 * Type representing the root state of the Redux store.
 */
export type RootState = ReturnType<typeof rootReducer>;

/**
 * Function to create and configure the Redux store.
 * @param preloadedState - The initial state to preload into the store.
 * @returns The configured Redux store.
 */
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });
  return store;
};

/**
 * The configured Redux store instance.
 */
export const store = makeStore();

/**
 * Type representing the Redux store instance.
 */
export type AppStore = typeof store;

/**
 * Type representing the dispatch function of the Redux store.
 */
export type AppDispatch = AppStore["dispatch"];
