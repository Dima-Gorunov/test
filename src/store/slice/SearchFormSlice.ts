import { InputAction, SelectAction } from "@interfaces/search-form";
import { createSlice } from "@reduxjs/toolkit";
import { SearchForm } from "@interfaces/search-form";
import { inputErrors } from "@/utils/errors";

const initialState: SearchForm = {
  searchById: {
    value: "",
    name: "searchById",
    label: "ID документа",
    errorText: null,
    type: "text",
  },
  searchDateStart: {
    value: "",
    name: "searchDateStart",
    label: "Создан",
    errorText: null,
    type: "date",
  },
  searchDateEnd: {
    value: "",
    name: "searchDateEnd",
    label: null,
    errorText: null,
    type: "date",
  },
  searchText: {
    value: "",
    name: "searchText",
    label: "Название документа",
    errorText: null,
    type: "text",
  },
  sorting: {
    name: "sorting",
    value: "desc",
    items: [
      {
        value: "desc",
      },
      {
        value: "asc",
      },
    ],
  },
  filter: {
    name: "filter",
    value: "name",
    items: [
      {
        value: "name",
      },
      {
        value: "date",
      },
    ],
  },
};

const SearchFormSlice = createSlice({
  name: "SearchFormSlice",
  initialState,
  reducers: {
    changeInput(state: SearchForm, { payload }: InputAction) {
      const { name, value } = payload;
      for (const key in state) {
        if (state[key].name === name) {
          if (state[key].name === state.searchById.name && value.length > 0) {
            state.searchById.errorText = inputErrors.ID_ERROR;
          } else {
            state.searchById.errorText = null;
          }
          state[key].value = value;
        }
      }
      
      // switch (name) {
      //   case state.searchById.name: {
      //     state.searchById.value = value;
      //     break;
      //   }
      //   case state.searchText.name: {
      //     state.searchText.value = value;
      //     break;
      //   }
      //   case state.searchDateStart.name: {
      //     state.searchDateStart.value = value;
      //     break;
      //   }
      //   case state.searchDateEnd.name: {
      //     state.searchDateEnd.value = value;
      //     break;
      //   }
      //   default: {
      //     break;
      //   }
      // }
    },

    changeSelect(state: SearchForm, { payload }: SelectAction) {
      const { name, value } = payload;
      for (const key in state) {
        if (state[key].name === name) {
          state[key].value = value;
        }
      }
    },
  },
});

export const { changeInput, changeSelect } = SearchFormSlice.actions;

export default SearchFormSlice;
