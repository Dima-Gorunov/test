import { ChangeEvent, FC, memo } from "react";
import { InputProps } from "@interfaces/ui-interfaces";
import styles from "./style.module.css";
const Input: FC<InputProps> = memo((props) => {
  const {
    label,
    name,
    type,
    errorText,
    value,
    size = "small",
    onChange,
    style = {},
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange({ name, value });
  };

  return (
    <div
      className={size === "auto" ? styles.autoContainer : styles.smallContainer}
      style={style}
    >
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
      {errorText && <div className={styles.errorText}>{errorText}</div>}
    </div>
  );
});

export default Input;
