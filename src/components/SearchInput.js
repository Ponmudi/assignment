import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input } from 'antd';

const Search = Input.Search;

class SearchInput extends Component {
  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <Search 
          placeholder="Search by keywords (PHP, .NET)"
          enterButton="Search"
          size="large"
          onChange={this.handleChange}
          addonAfter=""
          />
        </div>
      </div>
    );
  }
}
SearchInput.propTypes = {
  textChange: PropTypes.func
};
export default SearchInput;