import SelectorLangauge from "../SelectorLangauge/SelectorLangauge";
import style from "./Filters.module.css";
import { useState } from "react";

const Filters = ({}) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999);
  return (
    <div>
      <SelectorLangauge />
      <input
        type="number"
        min={0}
        max={maxPrice}
        name="minPrice"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <input
        type="number"
        min={minPrice}
        max={999999}
        name="maxPrice"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
      {/*  <button onClick={handlePriceFilter}>Filter</button> */}
      Filters
    </div>
  );
};

export default Filters;
