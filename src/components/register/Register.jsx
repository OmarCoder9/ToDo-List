import { useState } from "react";
import Joi from "joi";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router";

const Register = () => {
  const [error, setError] = useState("");
  const [rePassError, setRePassError] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rePassword, setRePassword] = useState("");
  const [showRePassword, setShowRePassword] = useState(false);
  // Define Joi schema
  const schema = Joi.string()
    .min(8)
    .max(30)
    .required()
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_])"))
    .messages({
      "string.min": "Password must be at least 8 characters",
      "string.max": "Password must be less than 30 characters",
      "string.pattern.base":
        "Password must include uppercase, lowercase, number, and special character",
    });
  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const { error } = schema.validate(value);
    setError(error ? error.message : "");
  };
  const handleRePass = (e) => {
    const value = e.target.value;
    setRePassword(value);
    const newRePassError = password !== value ? "Passwords don't match" : "";
    setRePassError(newRePassError);
  };
  return (
    <div className="bg-main-body-color rounded-main p-15 px-55 w-full h-full shadow-lg flex flex-col justify-center items-center">
      <h1 className="font-main-font text-4xl font-bold text-black text-left mb-8 pr-36">
        Sign in
      </h1>
      <div className="">
        <input
          type="text"
          onChange={(e) => setFName(e.target.value)}
          value={fName}
          placeholder="First Name"
          className="input-field"
        />
        <input
          type="text"
          onChange={(e) => setLName(e.target.value)}
          value={lName}
          placeholder="Last Name"
          className="input-field"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="E-main address"
          className="input-field"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChange}
            placeholder="Password"
            className="input-field"
          />
          <div className="absolute left-53 pl-4 top-1.5">
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <LuEyeClosed /> : <LuEye />}
            </button>
          </div>
          {error && <p className="text-error">{error}</p>}
          {!error && password && (
            <p className="text-correct">Password is valid</p>
          )}
        </div>
        <div className="relative">
          <input
            type={showRePassword ? "text" : "password"}
            value={rePassword}
            onChange={handleRePass}
            placeholder="Re-enter the password"
            className="input-field"
          />
          <div className="absolute left-53 pl-4 top-1.5">
            <button onClick={() => setShowRePassword(!showRePassword)}>
              {showRePassword ? <LuEyeClosed /> : <LuEye />}
            </button>
          </div>
          {rePassError && <p className="text-error">{rePassError}</p>}
          {!rePassError && rePassword && password === rePassword && (
            <p className="text-correct">Passwords match</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-3 mb-6 text-white bg-btn-gr rounded-2xl font-semibold hover:bg-btn-gr-hover transition"
        >
          <Link to={"/home"}>Sign Up</Link>
        </button>
        {/* Sign Up Link */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to={"/signin"}
            className="font-semibold text-black hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
