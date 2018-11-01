import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input } from 'antd';

const Search = Input.Search;

class SearchInput extends Component {
  handleChange = event => {
    this.props.textChange(event);
  };

  onPressEnter = event => {
    this.props.textChange(event.target.value);
  }

  onChange = (event) => {
    if(event.target.value === '')
      this.props.textChange(event.target.value);
  }

  componentDidMount(){
    let searchButton = document.querySelector('.ant-input-search-button');
    let getInputText = document.querySelector('.ant-input-search .ant-input-lg');
    searchButton.addEventListener('click', () => this.handleChange(getInputText.value));
  }

  render() {
    return (
      <div className="component-search-input">
        <div>
          <Search 
          placeholder="Search by keywords (PHP, .NET)"
          enterButton="Search"
          size="large"
          addonAfter=""
          onPressEnter={this.onPressEnter}
          onChange={this.onChange}
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