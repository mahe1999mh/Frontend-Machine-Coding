import { useEffect, useState } from "react";
import "./Autocomplete.css";

export function Autocomplete() {
  const [recipes, setRecipes] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [hideRecipes, setHideRecipes] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [cash, setCash] = useState({});

  console.log(cash);

  const feachApi = async () => {
    const data = await fetch(
      `https://dummyjson.com/recipes/search?q=${inputSearch}`
    );
    const json = await data.json();
    setRecipes(json?.recipes);
    setCash(prev => ({ ...prev, [inputSearch]: json?.recipes }));
  };

  const handleSearch = e => {
    setInputSearch(e.target.value);
  };

  useEffect(() => {
    if (cash[inputSearch]) {
      setRecipes(cash[inputSearch]);
      console.log("cash return");
      return;
    }

    const input = setTimeout(() => {
      feachApi();
      console.log("API Call");
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
      setHideRecipes(false);
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
        onBlur={() => setTimeout(() => setHideRecipes(false), 300)}
        onKeyDown={handleKeyDow}
      />

      {hideRecipes && inputSearch.length > 0 && (
        <div
          style={{
            height: "200px",
            padding: "2px",
            overflowY: "auto",
          }}
        >
          {recipes?.map((li, i) => (
            <div
              key={li.id}
              className={`dropdown-item ${selectedIndex == i ? "active" : ""}`}
              onClick={() => {
                setInputSearch(li?.name);
                setHideRecipes(false);
              }}
            >
              {li?.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
