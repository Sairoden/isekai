import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/register">
        <button>Register Page</button>
      </Link>
      <Link to="/profile">
        <button>Profile Page</button>
      </Link>
    </div>
  );
};

export default Login;
