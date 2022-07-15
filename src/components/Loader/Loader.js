import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BallTriangle } from 'react-loader-spinner';
import s from './Loader.module.css';
function Loader() {
  return (
    <div className={s.container}>
      <BallTriangle color="rgb(91, 146, 194)" height={80} width={80} />
    </div>
  );
}
export default Loader;
