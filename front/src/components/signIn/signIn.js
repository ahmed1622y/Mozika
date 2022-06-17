import { useContext } from "react";
import Header from "../header/header";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { FiLock } from "@react-icons/all-files/fi/FiLock";
import "./signIn.css";
const SignIn = () => {
  return (
    <div className="singInCont">
      <div className="signInBody">
        <div className="singInForm">
          <input type="text" placeholder="example@example.components" />
          <input type="password" placeholder="%|-%@)'as!" />
          <HiOutlineMail />
          <FiLock />
        </div>
      </div>
    </div>
  );
};
export default SignIn;
