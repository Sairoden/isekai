import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Link to="/login">
        <button>Login Page</button>
      </Link>
      <Link to="/profile">
        <button>Profile Page</button>
      </Link>
    </div>
  );
};

export default Register;
