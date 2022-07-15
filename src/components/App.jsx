import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import s from './App.module.css';

class App extends Component {
  state = {
    requestName: '',
  };

  searchForm = name => {
    this.setState({ requestName: name });
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.searchForm} />
        <ImageGallery requestName={this.state.requestName} />
      </div>
    );
  }
}
export default App;
