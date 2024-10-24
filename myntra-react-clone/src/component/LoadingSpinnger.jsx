
const LoadingSpinner = () => {
  return (
    <>
    <center className="spinner">
      <button className="btn btn-warning" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span role="status">Loading...</span>
      </button>
      </center>
    </>
  );
};

export default LoadingSpinner;