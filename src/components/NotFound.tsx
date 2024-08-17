import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <h1>The requested page was not found</h1>
      <p>Maybe you would like to go <Link to={'/'}>Home?</Link></p>
    </>
  );
};

export default NotFound;