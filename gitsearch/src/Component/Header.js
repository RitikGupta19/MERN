import React, { useState } from "react";

import SearchFilters from "./SearchFilters";

const Header = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    const toggleVisible = !visible;
    setVisible(toggleVisible);
  };

  return (
    <nav className={`navbar ${visible ? "active" : ""}`}>
      <div className='title'>GitProbe</div>
      <div className='btn toggle-btn' onClick={toggleVisibility}>
        Toggle Filters
      </div>
      <SearchFilters {...props} visible={visible} />
    </nav>
  );
};

export default Header;
