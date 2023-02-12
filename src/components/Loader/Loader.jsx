import './Loader.css';
import loader from 'assets/svg/loader.svg';

export const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="Data loading..." />
    </div>
  );
};
