import React, { useState, ChangeEvent, FocusEvent, KeyboardEvent } from "react";
import { FaSearchengin } from "react-icons/fa";
import styles from "./input.module.scss";

export default function Search({
  placeholder,
  type,
  name,
  onBlur,
  onClick,
  onFocus,
  onKeyDown,
  label,
  theme,
  onSearch,
  inputRef,
}) {
  return (
    <div className={styles.container}>
      <FaSearchengin size={37} className={styles.icon} />
      <input
        ref={inputRef}
        type={type}
        onChange={onSearch}
        className={styles.input}
        placeholder={placeholder}
        onFocus={onFocus}
        name={name}
        onBlur={onBlur}
        onKeyDown={onKeyDown}></input>
    </div>
  );
}
