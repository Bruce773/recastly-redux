import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';



var SearchContainer = () => {
  <Nav />
};

// const mapStateToProps = (state) => ({handleSearchInputChange: })
const mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (string) => {
    dispatch(handleSearchChange(string));
  }
});

SearchContainer = connect(null, mapDispatchToProps)(SearchContainer);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
