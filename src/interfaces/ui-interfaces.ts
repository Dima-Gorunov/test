import { Document, DocumentPayload } from "@interfaces/documents";
import {
  AllInput,
  AllSelects,
  Input,
  InputPayload,
} from "@interfaces/search-form";
import { CSSProperties } from "react";

export interface SelectData {
  name: string;
  value: string;
}

export interface SelectProps {
  name: string;
  value: string;
  handleChange: (data: SelectData) => void;
  options: { value: string }[];
}

export interface InputProps extends Input {
  onChange: (data: InputPayload) => void;
  placeholder?: string;
  disabled?: boolean;
  style?: CSSProperties;
  size?: "small" | "auto";
}

export interface SearchFormProps {
  Inputs: AllInput;
  Selects: AllSelects;
  handleInputChange: (data: InputPayload) => void;
  handleSelectChange: (data: SelectData) => void;
}

export interface DocumentsProps {
  Items: Document[] | null;
  handleClick: (data: DocumentPayload) => void;
}

export interface DocumentProps {
  Item: Document;
  handleClick: (data: DocumentPayload) => void;
}
