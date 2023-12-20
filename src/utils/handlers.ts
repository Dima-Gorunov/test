import { InputPayload } from "@/interfaces/search-form";
import { SelectData } from "@/interfaces/ui-interfaces";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const useInputHandler = (handle) => {
  const dispatch = useDispatch();
  const handleInputChange = useCallback(
    (data: InputPayload) => {
      dispatch(handle(data));
    },
    [dispatch]
  );

  return handleInputChange;
};

export const useDocClickHandler = (handle) => {
  const dispatch = useDispatch();
  const handleInputChange = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const _id = e.currentTarget.dataset.itemId;
      const data = {
        _id,
      };
      dispatch(handle(data));
    },
    [dispatch]
  );

  return handleInputChange;
};

export const useSelectChangeHandler = (handle) => {
  const dispatch = useDispatch();
  const handleInputChange = useCallback(
    (data: SelectData) => {
      dispatch(handle(data));
    },
    [dispatch]
  );

  return handleInputChange;
};
