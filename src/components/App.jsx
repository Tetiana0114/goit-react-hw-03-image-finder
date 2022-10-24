import React, { Component } from 'react';
import API from './Services/FetchGallery';
import css from './App.module.css'
import SearchBar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';


export class App extends Component {
  state = {
    page: 1, 
    query: '',
    items: [],
    status: 'idle',
    error: '',
  }
handleSearchFormSubmit =  query => {
  this.fetchGallery(query, this.state.page);
}
componentDidUpdate(_, prevState) {
  if ( prevState.query !== this.state.query || prevState.page !== this.state.page)  {
    this.setState({ status: 'pending', page: 1, items: [] });
    this.fetchGallery(this.state.query, this.state.page);
    }
}

loadMore = () => {
  this.setState(prevState => ({
    page: prevState.page + 1
    
  }));
};

fetchGallery(nextQuery, nextPage) {
  API.fetchGallery(nextQuery, nextPage)
  .then(data => {this.setState(prevState => {
    return { prevState, items: [...prevState.items, ...data.hits], status: 'resolved', query: nextQuery,
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
  <ImageGallery images={this.state.items}/>
  <Loader/>
  <Button loadMore={this.loadMore}/>
 

    </div>
  );
}
};
