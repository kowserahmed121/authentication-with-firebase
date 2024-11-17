import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        e.target.reset();
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="card mx-auto my-20 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegisterForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent text-white">Login</button>
        </div>
      </form>
      <p className="text-orange-600 text-center mb-4">
        You have already account. Please{" "}
        <Link to="/login" className="text-green-700 font-bold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
