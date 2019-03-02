import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
import Nav from './../components/Nav';



// var SearchContainer = () => (
//   <Nav />
// );

//const mapStateToProps = (state) => ({handleSearchInputChange: })
const mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (string) => {
    dispatch(handleSearchChange(string));
  }
});

const SearchContainer = connect(null, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
