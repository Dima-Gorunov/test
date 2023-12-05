import { FiltersValues } from "@/interfaces/search-form";
import { RootState } from "@/interfaces/state";
import { similarity } from "@/utils/text-heplers";
import { createSelector } from "@reduxjs/toolkit";
import { getDocuments } from "@store/selectors/DocumentsSel";

export const getAllFilters = (state: RootState): FiltersValues => {
  const {
    searchById,
    searchDateEnd,
    searchDateStart,
    searchText,
    filter,
    sorting,
  } = state.SearchForm;
  const allFiltersValues = {
    searchById: searchById.value,
    searchText: searchText.value,
    searchDateStart: searchDateStart.value,
    searchDateEnd: searchDateEnd.value,
    filter: filter.value,
    sorting: sorting.value,
  };
  return allFiltersValues;
};

export const getDocByFilter = createSelector(
  [getDocuments, getAllFilters],
  (documents, allFilters) => {
    const {
      searchById,
      searchDateEnd,
      searchDateStart,
      searchText,
      filter,
      sorting,
    } = allFilters;

    if (searchById && documents) {
      const index = documents?.findIndex((item) => item._id === searchById);
      if (index !== -1) {
        return [documents[index]];
      }
    }

    if (documents) {
      let filterdoc = documents;
      if (searchText) {
        filterdoc = filterdoc.filter((item) =>
          item.fileName.toLowerCase().includes(searchText.toLowerCase())
        );
      }
      if (searchDateStart) {
        filterdoc = filterdoc.filter(
          (item) => item.createdAt > searchDateStart
        );
      }
      if (searchDateEnd) {
        filterdoc = filterdoc?.filter((item) => item.createdAt < searchDateEnd);
      }

      if (filter === "date") {
        filterdoc = [...filterdoc].sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          if (sorting === "desc") {
            return dateB - dateA;
          } else if (sorting === "asc") {
            return dateA - dateB;
          }
        });
      }

      if (filter === "name") {
        filterdoc = [...filterdoc].sort((a, b) => {
          const similarityA = similarity(
            a.fileName.toLowerCase(),
            searchText.toLowerCase()
          );
          const similarityB = similarity(
            b.fileName.toLowerCase(),
            searchText.toLowerCase()
          );

          if (sorting === "desc") {
            return similarityB - similarityA; // Сортировка по убыванию
          } else if (sorting === "asc") {
            return similarityA - similarityB; // Сортировка по возрастанию
          }
        });
      }

      return filterdoc;
    }

    // if (filter === "date" && result) {
    //   result = result?.sort((a, b) => {
    //     const dateA = new Date(a.createdAt);
    //     const dateB = new Date(b.createdAt);
    //     if (sorting === "desc") {
    //       return dateB - dateA;
    //     } else if (sorting === "asc") {
    //       return dateA - dateB;
    //     }
    //     return 0;
    //   });
    // }

    // if (filter === "name" && result) {
    //   result = result?.sort((a, b) => {
    //     const similarityA = similarity(
    //       a.fileName.toLowerCase(),
    //       searchText.toLowerCase()
    //     );
    //     const similarityB = similarity(
    //       b.fileName.toLowerCase(),
    //       searchText.toLowerCase()
    //     );

    //     if (sorting === "desc") {
    //       return similarityB - similarityA; // Сортировка по убыванию
    //     } else if (sorting === "asc") {
    //       return similarityA - similarityB; // Сортировка по возрастанию
    //     }

    //     return 0; // Возвращаем 0 для сохранения порядка при отсутствии указания на сортировку
    //   });

    //   return result;
    // }

    return documents;
  }
);
