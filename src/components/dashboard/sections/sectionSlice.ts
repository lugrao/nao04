import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

/**
 * Interface representing the section state.
 */
export interface SectionState {
  isScrolled: boolean;
}

/**
 * The initial state for the section slice.
 */
const initialState: SectionState = {
  isScrolled: false,
};

/**
 * Redux slice for managing section state.
 */
export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: (create) => ({
    /**
     * Updates the scroll status based on the scroll position of the target element.
     * @param state - The current state.
     * @param action - The payload action containing the scroll event.
     */
    updateScrollStatus: create.reducer(
      (state, action: PayloadAction<React.UIEvent<HTMLDivElement>>) => {
        const div = action.payload.target as HTMLDivElement;
        state.isScrolled = div.scrollTop > 0;
      },
    ),

    /**
     * Resets the scroll status to false.
     * @param state - The current state.
     */
    resetScrollStatus: create.reducer((state) => {
      state.isScrolled = false;
    }),
  }),
  selectors: {
    /**
     * Selector function to get the `isScrolled` state from the Redux store.
     * @param section - The current section state.
     * @returns The isScrolled state.
     */
    selectIsScrolled: (section) => section.isScrolled,
  },
});

export const { updateScrollStatus, resetScrollStatus } = sectionSlice.actions;

export const { selectIsScrolled } = sectionSlice.selectors;
