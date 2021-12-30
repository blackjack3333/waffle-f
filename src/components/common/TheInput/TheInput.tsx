import classNames from "classnames";
import React, {
  ChangeEvent,
  CSSProperties,
  FC,
  HTMLInputTypeAttribute,
} from "react";
import { useNavigate } from "react-router";
import RouteTypes from "src/router/types";
import styles from "./TheInput.module.css";

interface ITheInputProps {
  className?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  style?: CSSProperties;
  getSearch: (input: string) => void;
}

export const TheInput: FC<ITheInputProps> = (props) => {
  const navigate = useNavigate();

  const {
    className,
    onChange,
    placeholder,
    value,
    name,
    type,
    style,
    getSearch,
  } = props;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const val = e.target.value;
    if (onChange) onChange(val);
  };

  const onKeyPressHandler = (event: any) => {
    const value = event.target.value;
    if (event.charCode === 13 && value.trim() !== "") {
      getSearch(event.target.value);
      navigate(RouteTypes.search);
    }
  };
  return (
    <label className={classNames(styles.inputWrapper, className)} style={style}>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className={styles.input}
        onKeyPress={onKeyPressHandler}
      />
    </label>
  );
};

export default TheInput;
