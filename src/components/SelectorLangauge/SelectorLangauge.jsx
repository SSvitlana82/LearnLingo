import style from "./SelectorLangauge.module.css";
import { useState } from "react";
import React from "react";

import ISO6391 from "iso-639-1";

const languages = ISO6391.getAllNames().map((name) => {
  const code = ISO6391.getCode(name);
  return { code, name };
});

const SelectorLangauge = ({ onSelect }) => {
  return (
    <select className={style.select} onChange={(e) => onSelect(e.target.value)}>
      <option value="" disabled selected>
        Select a language
      </option>
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  );
};

export default SelectorLangauge;
