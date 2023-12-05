type inputNames =
  | "searchById"
  | "searchDateStart"
  | "searchDateEnd"
  | "searchText";

type selectNames = "sorting" | "filter";

export interface Input {
  name: inputNames;
  label: string | null;
  value: string;
  errorText: string | null;
  type: string;
}

export type AllInput = {
  [K in Input["name"]]: Input;
};

export interface InputPayload
  extends Omit<Input, "label" | "value" | "errorText" | "type"> {
  value: string;
}

export interface InputAction {
  type: unknown;
  payload: InputPayload;
}
export interface InputsState {
  [key: string]: Input;
}

export interface SelectPayload {
  name: string;
  value: string;
}

export interface SelectAction {
  type: unknown;
  payload: SelectPayload;
}

export interface SelectItem {
  value: string;
}

export interface Select {
  items: SelectItem[];
  name: selectNames;
  value: string;
}

export type AllSelects = {
  [K in Select["name"]]: Select;
};

export interface SearchForm {
  searchById: Input;
  searchDateStart: Input;
  searchDateEnd: Input;
  searchText: Input;
  filter: Select;
  sorting: Select;
}

export interface FiltersValues {
  searchById: string;
  searchText: string;
  searchDateStart: string;
  searchDateEnd: string;
  filter: string;
  sorting: string;
}
