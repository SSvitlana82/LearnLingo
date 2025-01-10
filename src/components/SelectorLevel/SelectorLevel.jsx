import { useState } from "react";
import style from "./SelectorLevel.module.css";

const levels = [
  { code: "all levels" },
  { code: "A1 Beginner" },
  { code: "A2 Elementary" },
  { code: "B1 Intermediate" },
  { code: "B2 Upper-Intermediate" },
  { code: "C1 Advanced" },
  { code: "C2 Proficient" },
];

const SelectorLevel = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLevels, setSelectedLevels] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (level) => {
    const isSelected = selectedLevels.includes(level);

    // Додаємо або видаляємо рівень зі списку
    const updatedLevels = isSelected
      ? selectedLevels.filter((item) => item !== level)
      : [...selectedLevels, level];

    setSelectedLevels(updatedLevels);
    onSelect(updatedLevels); // Передаємо обрані рівні наверх
  };

  return (
    <div className={style.customSelect}>
      <div className={style.selectBox} onClick={toggleDropdown}>
        {selectedLevels.length > 0
          ? selectedLevels[0] // Відображення обраних рівнів
          : "Select levels"}
        <span className={style.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className={style.dropdown}>
          {levels.map((level) => (
            <div
              key={level.code}
              className={`${style.option} ${
                selectedLevels.includes(level.code) ? style.selected : ""
              }`}
              onClick={() => handleSelect(level.code)}
            >
              {level.code}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectorLevel;
