import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search images" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
