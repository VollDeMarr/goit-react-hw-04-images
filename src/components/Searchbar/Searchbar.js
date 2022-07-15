import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    request: '',
  };

  submitForm = e => {
    e.preventDefault();
    if (this.state.request.trim() === '') {
      return;
    }
    console.log(this.props)
    this.props.onSubmit(this.state.request);
    this.setState({ items: [] });
  };

  changeInput = e => {
    this.setState({ request: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.submitForm} className={s.SearchForm}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeInput}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
