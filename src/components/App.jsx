import { useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import s from './App.module.css';
export default function App (){

const [state, setState] = useState('')

 const searchForm = name => {
      
  setState(name);
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={searchForm} />
      <ImageGallery requestName={state} />
    </div>
  );
}