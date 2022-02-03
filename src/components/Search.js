import React,{useState} from "react";

function Search({setFilterParam}) {
  const [searchWord,setSearchWord] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterParam(searchWord)
    console.log(searchWord);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
