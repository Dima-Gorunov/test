import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SearchFormSlice from "@store/slice/SearchFormSlice";
import DocumentSlice from "@store/slice/DocumentSlice";
import { AppDispatch } from "@/interfaces/state";
import { useDispatch } from "react-redux";

export const rootReducer = combineReducers({
  SearchForm: SearchFormSlice.reducer,
  Documents: DocumentSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
