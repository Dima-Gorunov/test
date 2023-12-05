import { store } from "@store/index.ts";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import SearchFormSlice from "@store/slice/SearchFormSlice";
import DocumentsSlice from "@store/slice/DocumentSlice";
import { rootReducer } from "@/store";

export type SearchFormSliceType = ReturnType<typeof SearchFormSlice.reducer>;
export type DocumentsSliceType = ReturnType<typeof DocumentsSlice.reducer>;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;


// Определение типа для thunk-функций в Redux Toolkit
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType, // Тип возвращаемого значения thunk-функции
  RootState, // Тип корневого состояния Redux
  unknown, // Тип дополнительных аргументов, если они используются (можно оставить unknown)
  Action<string> // Тип экшена, который может диспатчить thunk
>;
