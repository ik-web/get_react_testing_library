import './ErrorMessage.css';

export const ErrorMessage = ({ message }) => {
  return (
    <div className="errorMessage">
      <h2 className="errorMessage__title">{message}</h2>
    </div>
  );
};
