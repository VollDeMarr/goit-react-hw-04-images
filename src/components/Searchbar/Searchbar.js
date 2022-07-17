import { useState } from 'react';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit, changePage  }) {
  const [request, setRequest] = useState('');


  const submitForm = e => {
    e.preventDefault();
    if (request.trim() === '') {
      return;
    }
    onSubmit(request);
    changePage(1);
  };

  const changeInput = e => {
    setRequest(e.currentTarget.value.toLowerCase());
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={submitForm} className={s.SearchForm}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={changeInput}
        />
      </form>
    </header>
  );
}
