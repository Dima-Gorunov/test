import { FC, ChangeEvent } from "react";
import { SelectProps } from "@interfaces/ui-interfaces";

const Select: FC<SelectProps> = (props) => {
  const { options, handleChange, name, value } = props;

  const optionsArray = options?.map((item, index) => (
    <option key={index} value={item.value}>
      {item.value}
    </option>
  ));

  const change = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const data = {
      name: name,
      value: e.target.value,
    };
    console.log(data);
    
    handleChange(data);
  };

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <select value={value} name={name} onChange={change}>
        {optionsArray}
      </select>
    </div>
  );
};

export default Select;
