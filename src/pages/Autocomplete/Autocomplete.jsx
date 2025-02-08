import { useEffect, useState } from "react";
import "./Autocomplete.css";

export function Autocomplete() {
  const [recipes, setRecipes] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [hideRecipes, setHideRecipes] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const feachApi = async () => {
    const data = await fetch(
      `https://dummyjson.com/recipes/search?q=${inputSearch}`
    );
    const json = await data.json();
    setRecipes(json?.recipes);
  };

  const handleSearch = e => {
    setInputSearch(e.target.value);
  };

  useEffect(() => {
    const input = setTimeout(() => {
      feachApi();
    }, 300);

    return () => {
      clearInterval(input);
    };
  }, [inputSearch]);

  const handleKeyDow = e => {
    if (e.key === "ArrowDown") {
      setSelectedIndex(prev => (prev < recipes.length - 1 ? prev + 1 : 0));
    }
    if (e.key == "ArrowUp") {
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : recipes.length - 1));
    }

    if (e.key == "Enter" && selectedIndex != -1) {
      setInputSearch(recipes[selectedIndex].name);
    }
  };

  return (
    <div className="App">
      <h2>Autocomplete Search Bar (Recipes Search)</h2>
      <input
        className="inputSearch"
        type={"text"}
        value={inputSearch}
        onChange={handleSearch}
        onFocus={() => setHideRecipes(true)}
        onBlur={() => setTimeout(() => setHideRecipes(false), 200)}
        onKeyDown={handleKeyDow}
      />

      {hideRecipes && (
        <div
          style={{
            height: "200px",
            padding: "2px",
            overflowY: "auto",
          }}
        >
          {recipes?.map((li, i) => (
            <div
              className={`dropdown-item ${selectedIndex == i ? "active" : ""}`}
              onClick={() => setInputSearch(li?.name)}
            >
              {li?.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
