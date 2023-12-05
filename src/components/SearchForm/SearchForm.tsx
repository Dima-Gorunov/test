import { Input } from "@/common/Input";
import { Select } from "@/common/Select";
import { AllInput, AllSelects } from "@/interfaces/search-form";
import { SearchFormProps } from "@interfaces/ui-interfaces";
import { FC, memo } from "react";

const SearchForm: FC<SearchFormProps> = memo((props) => {
  const { searchById, searchText, searchDateStart, searchDateEnd }: AllInput =
    props.Inputs;
  const { filter, sorting }: AllSelects = props.Selects;
  const { handleInputChange, handleSelectChange } = props;

  return (
    <>
      <Input
        size="auto"
        value={searchById.value}
        name={searchById.name}
        errorText={searchById.errorText}
        onChange={handleInputChange}
        label={searchById.label}
        type={searchById.type}
      />
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Input
          value={searchDateStart.value}
          name={searchDateStart.name}
          errorText={searchDateStart.errorText}
          onChange={handleInputChange}
          label={searchDateStart.label}
          type={searchDateStart.type}
        />
        <Input
          value={searchDateEnd.value}
          name={searchDateEnd.name}
          errorText={searchDateEnd.errorText}
          onChange={handleInputChange}
          label={searchDateEnd.label}
          type={searchDateEnd.type}
        />
      </div>
      <Input
        size="auto"
        value={searchText.value}
        name={searchText.name}
        errorText={searchText.errorText}
        onChange={handleInputChange}
        label={searchText.label}
        type={searchText.type}
      />
      <Select
        value={filter.value}
        name={filter.name}
        options={filter.items}
        handleChange={handleSelectChange}
      />
      <Select
        name={sorting.name}
        value={sorting.value}
        options={sorting.items}
        handleChange={handleSelectChange}
      />
    </>
  );
});

export default SearchForm;
