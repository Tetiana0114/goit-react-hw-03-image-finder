import React, { Component } from 'react';
import SearchBar from 'components/Searchbar';
// import ImageGallery from 'components/ImageGallery';


export class App extends Component {
  state = {
    imgSearch: ''
  }

  handleSearchFormSubmit =  imgSearch => {
    this.setState({  imgSearch });
  }



render () {
  
return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    }}
    >
  
  <SearchBar onSubmit={this.handleSearchFormSubmit}/>
 

    </div>
  );
}
};
