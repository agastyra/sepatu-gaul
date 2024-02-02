import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;

  return (
    <div className="w-full max-w-xs">
      <h1 className="text-blue-600 text-2xl font-bold mb-2">{title}</h1>
      <p className="font-medium text-slate-600 mb-4">
        Hello, please enter your detail!
      </p>
      {children}
      <Navigation type={type} />
    </div>
  );
};

const Navigation = (props) => {
  const { type } = props;

  return (
    <>
      {type === "login" && (
        <p className="text-center">
          Don't have any account?{" "}
          <Link to="/register" className="text-blue-600 font-bold">
            Register here
          </Link>
        </p>
      )}

      {type === "register" && (
        <p className="text-center">
          Already have an account{" "}
          <Link to="/login" className="text-blue-600 font-bold">
            Login here
          </Link>
        </p>
      )}
    </>
  );
};

export default AuthLayouts;
