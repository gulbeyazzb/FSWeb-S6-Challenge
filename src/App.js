import React, { useEffect, useState } from "react";
import Data from "../src/Data";
import Karakter from "./components/Karakter";
import OtherPages from "./components/OtherPages";
import Search from "./components/Search";
const App = () => {
  const [people, setPeople] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setPeople(Data);
    // axios
    //   .get("https://swapi.dev/api/people/")
    //   .then((res) => setPeople(res.data));
  }, []);
  console.log(people);

  const changeHandler = (e) => {
    const { value } = e.target;
    setSearchText(value.toLowerCase());

    const searchResult = people.filter((person) => {
      return person.name.includes(value);
    });
    setPeople(searchResult);
  };
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Search searchText={searchText} changeHandler={changeHandler} />
      <Karakter people={people} />
      <OtherPages />
    </div>
  );
};

export default App;
