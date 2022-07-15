import s from './Button.module.css';
export default function Button({onClick}) {
  // console.log(onClick)
  return (
    <div className={s.container}>
      <button type="button" className={s.btnMore} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
