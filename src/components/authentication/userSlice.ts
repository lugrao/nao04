import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

/**
 * Interface representing the user state.
 */
export interface UserState {
  isLoggedIn: boolean;
}

/**
 * The initial state for the user slice.
 */
const initialState: UserState = {
  isLoggedIn: false,
};

/**
 * Redux slice for managing user state.
 */
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: (create) => ({
    /**
     * Updates the authentication status.
     * @param state - The current state.
     * @param action - The payload action containing a boolean.
     */
    updateAuthStatus: create.reducer(
      (state, action: PayloadAction<boolean>) => {
        state.isLoggedIn = action.payload;
      },
    ),
  }),
  selectors: {
    /**
     * Selector function to get the `isLoggedIn` state from the Redux store.
     * @param section - The current section state.
     * @returns The isLoggedIn state.
     */
    selectIsLoggedIn: (section) => section.isLoggedIn,
  },
});

export const { updateAuthStatus } = userSlice.actions;

export const { selectIsLoggedIn } = userSlice.selectors;
