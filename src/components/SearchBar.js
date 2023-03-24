import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SearchBar.css";
import { SearchBarMovie } from "./SearchBarMovie";
// var data = ['thriller', 'horror', 'comedy', 'action', 'romance']

export const SearchBar = () => {
  // const [value, setValue] = useState('')
  // const [valid, setValid] = useState(false)

  // const onChange = (e) => {
  //     if (valid === true) {
  //         setValid(false)
  //     }
  //     setValue(e.target.value)
  // }

  // return (
  //     <div className='whole-search'>
  //         <div className='search-container'>
  //             <div className='search-inner'>
  //                 <input className='input' type='text' placeholder='Search For Movie' value={value} onChange={onChange} />
  //             </div>
  // <div className='search-outer'>
  //     {isLoggedIn && userLoggedIn && valid ? <NavLink className='navsearch-button' to={value} onClick={() => setValid(false)}>Search</NavLink> : <button className='search-button'>Search</button>}
  // </div>
  //         </div>
  //         {isLoggedIn && <div className='dropdown'>
  //             {data.filter(item => {
  //                 const searchTerm = value.toLowerCase();
  //                 const targetTerm = item.toLowerCase();
  //                 return searchTerm && targetTerm.startsWith(searchTerm) && targetTerm !== searchTerm
  //             }).slice(0, 10).map((item) => <div className='dropdown-row' onClick={() => { setValue(item); setValid(true) }}>{item}</div>)}
  //         </div>}
  //     </div>
  // )

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("");

  const handleSearchSubmit = async (value) => {
    setSubmitButtonDisabled(true);
    const reqBody = {
      filter: "Name",
      name: value,
    };
    const response = await fetch("/user/search-for-moviess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
    if (!response.ok) {
      setSubmitButtonDisabled(false);
      return;
    }
    const output = await response.json();
    console.log(output.movie);
    setMovies(output.movie);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-movies">
      <div className="whole-search">
        <div className="search-container">
          <div className="search-inner">
            <input
              className="input"
              type="text"
              placeholder="Search For Movie"
              value={value}
              onChange={onChange}
            />
          </div>
          <div className="search-outer">
            {isLoggedIn && userLoggedIn ? (
              <div
                className="search-button"
                onClick={() => {
                  handleSearchSubmit(value);
                }}
                disabled={submitButtonDisabled}
              >
                Search
              </div>
            ) : (
              <button className="search-button">Search</button>
            )}
          </div>
        </div>
      </div>
      {movies && (
            <div className="movies-list">
              {movies.map((movie) => (
                <SearchBarMovie key={movie.id} movie = {movie}/>
              ))}
            </div>
          )}
    </div>
  );
};
