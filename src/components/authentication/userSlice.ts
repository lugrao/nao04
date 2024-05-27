import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

/**
 * Interface representing the user state.
 */
export interface UserState {
  activeSession: string | null;
  userData: UserData | null;
  error: string | null;
}

/**
 * Interface representing user data.
 */
export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

/**
 * The initial state for the user slice.
 */
const initialState: UserState = {
  activeSession: null,
  userData: null,
  error: null,
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
    createUser: create.reducer((state, action: PayloadAction<UserData>) => {
      const email = action.payload.email;
      if (!localStorage.getItem(email))
        localStorage.setItem(email, JSON.stringify(action.payload));
      localStorage.setItem("activeSession", email);
      state.activeSession = email;
      state.userData = action.payload;
    }),

    /**
     * Logs the user in.
     * @param {UserState} state - The current state.
     * @param {PayloadAction<Pick<UserData, "email" | "password">>} action -
     * The payload action containing email and password.
     */
    logUserIn: create.reducer(
      (state, action: PayloadAction<Pick<UserData, "email" | "password">>) => {
        const email = action.payload.email;
        const password = action.payload.password;
        const userData = localStorage.getItem(email);
        const parsedData = userData && JSON.parse(userData);
        const goodCredentials = userData && parsedData.password === password;
        goodCredentials && localStorage.setItem("activeSession", email);
        state.userData = goodCredentials ? parsedData : null;
        state.activeSession = goodCredentials ? email : null;
        state.error = goodCredentials
          ? null
          : "Los datos ingresados son incorrectos.";
      },
    ),

    /**
     * Logs the user out by cleaning the active session in local storage and
     * resetting the Redux state when reloading the page.
     */
    logUserOut: create.reducer(() => {
      localStorage.setItem("activeSession", "");
      window.location.href = "/";
    }),

    /**
     * Updates the active session.
     * @param {UserState} state - The current state.
     */
    updateActiveSession: create.reducer((state) => {
      const session = localStorage.getItem("activeSession");
      state.activeSession = session ? session : null;
    }),

    /**
     * Clears user data.
     * @param {UserState} state - The current state.
     */
    clearUserData: create.reducer((state) => {
      state.userData = null;
    }),
  }),
  selectors: {
    /**
     * Selects the active session.
     * @param {UserState} user - The user state.
     * @returns {string | null} The active session.
     */
    selectActiveSession: (user: UserState): string | null => user.activeSession,
    /**
     * Selects the user data.
     * @param {UserState} user - The user state.
     * @returns {UserData | null} The user data.
     */
    selectUserData: (user: UserState): UserData | null => user.userData,
    /**
     * Selects the error message.
     * @param {UserState} user - The user state.
     * @returns {string | null} The error message.
     */
    selectError: (user: UserState): string | null => user.error,
  },
});

export const {
  createUser,
  logUserIn,
  logUserOut,
  clearUserData,
  updateActiveSession,
} = userSlice.actions;

export const { selectActiveSession, selectUserData, selectError} = userSlice.selectors;
