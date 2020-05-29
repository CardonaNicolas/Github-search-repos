import React from 'react';
import { Input, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import SearchBarStyled from './SearchBarStyled';

const SearchBar = ({ value, changeValue, fetchSearch, themeValue }) => {
  const handleInputChange = (event) => {
    changeValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchSearch();
  };

  return (
    <SearchBarStyled>
      <Segment inverted={themeValue}>
        <form onSubmit={handleFormSubmit}>
          <Input
            fluid
            icon="search"
            placeholder="Search..."
            onChange={handleInputChange}
            value={value}
          />
        </form>
      </Segment>
    </SearchBarStyled>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  fetchSearch: PropTypes.func.isRequired,
  themeValue: PropTypes.bool.isRequired,
};

export default SearchBar;
