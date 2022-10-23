import React, { Component } from 'react';
import SearchBar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import API from './Services/FetchGallery';
import css from './App.module.css'


export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1, 
    status: 'idle',
    error: '',
  }
handleSearchFormSubmit =  query => {
  this.fetchGallery(query, this.state.page);
}

componentDidUpdate(prevProps, prevState) {
  const prevQuery = prevState.query;
  const nextQuery = this.state.query;
  const prevPage = prevState.page;
  const nextPage = this.state.page;

if (prevQuery !== nextQuery) {
  this.setState({ status: 'pending', page: 1, images: [] });
  this.fetchGallery(nextQuery, nextPage);
}
if (prevPage !== nextPage) {
  this.fetchGallery(nextQuery, nextPage);
}
}

fetchGallery(nextQuery, nextPage) {
  API.fetchGallery(nextQuery, nextPage)
  .then(data => {this.setState(prevState => {
    return { prevState, images: [...prevState.images, ...data.hits], status: 'resolved', query: nextQuery,
  };
});
if (this.prevPage !== nextPage) {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
}}).catch(error => this.setState({ error, status: 'rejected' }));
}

render () {
  
return (
    <div
    style={{
      
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    
    }}
    >
  <SearchBar onSubmit={this.handleSearchFormSubmit}/>
  {this.state.status === 'idle' && <p className={css.text}>Enter your query...</p>}
  <ImageGallery images={this.state.images}/>
 

    </div>
  );
}
};
