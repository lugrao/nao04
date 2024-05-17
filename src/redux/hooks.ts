// This file serves as a central hub for re-exporting pre-typed Redux hooks.
// These imports are restricted elsewhere to ensure consistent
// usage of typed hooks throughout the application.
// We disable the ESLint rule here because this is the designated place
// for importing and re-exporting the typed versions of hooks.
/* eslint-disable @typescript-eslint/no-restricted-imports */
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

/**
 * Hook to access the Redux dispatch function with type safety.
 *
 * @returns The typed dispatch function from the Redux store.
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/**
 * Hook to access the Redux store's state with type safety.
 *
 * @param selector - The selector function to select a part of the state.
 * @param equalityFn - Optional equality function to customize the selector's behavior.
 * @returns The selected state.
 */
export const useAppSelector = useSelector.withTypes<RootState>();
