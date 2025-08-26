import { useState } from "react";
import Joi from "joi";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
  const [email, setEmail] = useState("");
  return (
    <div className="bg-main-body-color rounded-main p-15 pl-30 w-full h-full shadow-lg flex flex-col justify-center items-center">
      <h1 className="font-main-font text-4xl font-bold text-black text-left mb-8 pr-36">
        Sign in
      </h1>
      <div className="">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="mail.example@mail.com"
          className="input-field"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChange}
            placeholder="**************"
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

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full py-3 mb-6 text-white bg-btn-gr rounded-2xl font-semibold hover:bg-btn-gr-hover transition"
        >
          <Link to={"/home"}>Sign In</Link>
        </button>

        {/* Divider with "or" */}
        <div className="flex items-center mb-6">
          <div className="flex-grow h-px bg-custom-gray"></div>
          <span className="px-3 text-gray-500">or</span>
          <div className="flex-grow h-px bg-custom-gray"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-btn-gray rounded-lg hover:bg-btn-gray-hover transition">
            <FcGoogle size={20} />
            Google
          </button>
          <button className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-btn-gray rounded-lg hover:bg-btn-gray-hover transition">
            <FaFacebook size={18} />
            Facebook
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to={"/register"}
            className="font-semibold text-black hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
