import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        e.target.reset();
        navigate("/orders");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="card mx-auto my-20 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLoginForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-ghost  text-emerald-600 font-bold flex items-center gap-2"
      >
        Sing In with Google <FcGoogle className="text-2xl"></FcGoogle>
      </button>
      <p className="text-orange-600 text-center mb-4">
        You have no account. Please{" "}
        <Link to="/register" className="text-green-700 font-bold">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
