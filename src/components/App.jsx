import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchGallery from './Services/FetchGallery';
// import css from './App.module.css'
import SearchBar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';


export class App extends Component {
  state = {
    page: 1, 
    query: '',
    items: [],
    loading: false,
  }

handleSearchFormSubmit = queryName => {
  this.setState({
    page: 1,
    query: queryName,
    items: [],
    loading: true,
  });
}

async componentDidUpdate(_, prevState) {
  if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
  this.setState({ loading: true });
  try {
    const newItems = await fetchGallery({query: this.state.query, page: this.state.page});
  if (newItems.totalHits !== 0) {
    this.setState({
      items: [...this.state.items, ...newItems.hits],
      loading: false,
      })} else {
        Notify.failure('Sorry, there are no images with this name.');
      }
      }
  catch (error) {console.log(error)}
  finally {this.setState({ loading: false });
    }
  }
}

loadMore = () => {
  this.setState(prevState => ({
    page: prevState.page + 1,
    loading: true,
  }));
};


render () {
  const { loading, items } = this.state;

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
  {/* {this.state.status === 'idle' && <p className={css.text}>Enter your query...</p>} */}
  {loading && (<Loader/>)}
  <ImageGallery images={items}/>
  {items.length > 0 && (<Button loadMore={this.loadMore}/>)}
    </div>
  );
}
};