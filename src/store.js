import { configureStore } from "@reduxjs/toolkit";
import { LoadState, SaveState } from "./Utils/LocalStorage";
import BlogSlice from "./reducers/BlogSlice";
import PwaSlice from "./reducers/PwaSlice";
const persistedState = LoadState();

const store = configureStore({
  reducer: {
    blog: BlogSlice,
    pwa: PwaSlice,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  SaveState(store.getState());
});

export default store;
