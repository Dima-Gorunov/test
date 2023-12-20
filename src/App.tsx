import SearchForm from "@components/SearchForm/SearchForm";
import {
  useDocClickHandler,
  useInputHandler,
  useSelectChangeHandler,
} from "@/utils/handlers";
import { Documents } from "@components/Documents";
import {
  getAllSearchFields,
  getAllSelects,
} from "@store/selectors/SearchFormSel";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, changeSelect } from "@store/slice/SearchFormSlice";
import { getDocumentsThunk, setActive } from "@store/slice/DocumentSlice";
import { useEffect, useState } from "react";
import { getDocByFilter } from "@store/selectors/FilterSel";

function App() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dispatch = useDispatch();
  const formInputs = useSelector(getAllSearchFields);
  const formSelects = useSelector(getAllSelects);
  const filterDocuments = useSelector(getDocByFilter);
  const handleInputChange = useInputHandler(changeInput);
  const handleSelectChange = useSelectChangeHandler(changeSelect);
  const handleClickDoc = useDocClickHandler(setActive);
  useEffect(() => {
    dispatch(getDocumentsThunk());
  }, []);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <div style={{ marginRight: "20px" }}>
        <SearchForm
          Selects={formSelects}
          Inputs={formInputs}
          handleInputChange={handleInputChange}
          handleSelectChange={handleSelectChange}
        />
      </div>
      <Documents
        screenHeight={screenHeight}
        Items={filterDocuments}
        handleClick={handleClickDoc}
      />
    </div>
  );
}

export default App;
