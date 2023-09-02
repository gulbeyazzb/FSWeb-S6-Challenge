import React, { useEffect, useState } from "react";
import Karakter from "./components/Karakter";
import Search from "./components/Search";
import ReactPaginate from "react-paginate";
const App = () => {
  const [people, setPeople] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const getPeople = async () => {
      const res = await fetch(`https://swapi.dev/api/people/`);
      const data = await res.json();
      console.log(data);
      const total = data.count;
      console.log(total);
      const searchResult = data.results.filter((person) => {
        return person.name.toLowerCase().includes(searchText.toLowerCase());
      });
      setPageCount(Math.ceil(total / 10));
      setPeople(searchResult);
    };
    getPeople();
  }, [searchText]);

  const changeHandler = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const fetchPeople = async (currentPage) => {
    const res = await fetch(
      `https://swapi.dev/api/people/?page=${currentPage}`
    );
    const data = await res.json();
    return data.results;
  };

  const handlerPageClick = async (data) => {
    let currentPage = data.selected + 1;
    const peopleFormServer = await fetchPeople(currentPage);
    console.log("handler", peopleFormServer);
    setPeople(peopleFormServer);
  };

  return (
    <div className="App ">
      <h1 className="Header">Karakterler</h1>
      <Search searchText={searchText} changeHandler={changeHandler} />
      <Karakter people={people} />
      <ReactPaginate
        previosLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={4}
        pageRangeDisplayed={6}
        onPageChange={handlerPageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default App;
