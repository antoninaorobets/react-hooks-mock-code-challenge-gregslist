import React from "react";
import Search from "./Search";

function Header({setFilterParam}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setFilterParam={setFilterParam}/>
    </header>
  );
}

export default Header;
