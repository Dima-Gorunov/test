import { RootState } from "@/interfaces/state";
import { AllInput, AllSelects } from "@interfaces/search-form";
import { createSelector } from "@reduxjs/toolkit";

export const getSearchById = (state: RootState) => state.SearchForm.searchById;
export const getSearchDateStart = (state: RootState) =>
  state.SearchForm.searchDateStart;
export const getSearchDateEnd = (state: RootState) =>
  state.SearchForm.searchDateEnd;
export const getSearchText = (state: RootState) => state.SearchForm.searchText;

export const getFilterBy = (state: RootState) => state.SearchForm.filter;
export const getSortBy = (state: RootState) => state.SearchForm.sorting;

export const getAllSearchFields = createSelector(
  getSearchById,
  getSearchDateStart,
  getSearchDateEnd,
  getSearchText,
  (searchById, searchDateStart, searchDateEnd, searchText): AllInput => ({
    searchById,
    searchDateStart,
    searchDateEnd,
    searchText,
  })
);

export const getAllSelects = createSelector(
  getSortBy,
  getFilterBy,
  (sortBy, filterBy): AllSelects => ({
    filter: filterBy,
    sorting: sortBy,
  })
);
