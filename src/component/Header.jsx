import React, { useState, useContext } from "react";
// import LOGO from "../assets/logo.png";
import { useNavigate } from "react-router-dom"
import { TokenContext } from "../utils/Context";

const Header = () => {

  const navigate = useNavigate()
  const { token, setToken } = useContext(TokenContext);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const handleLogout = () => {
    // setToken("0");
    // localStorage.removeItem("token");
    // setShowModal(!showModal);
    // navigate("/");
    // alert("You have been logged out");
  };

  const handleCreate = () => {
    // navigate("/create");
  };

  const handleModal = () => {
    // setShowModal(!showModal);
  };

  return (
    <>
      <nav className="sticky top-0 w-full px-2 py-2.5 bg-white flex justify-between drop-shadow-lg z-10">
        <div className="flex items-center font-bold text-2xl ml-10 text-[#085E7D]">
          <a id="to-homepage" href="/">
            MN 
          </a>
        </div>
        {token === "0" && (
          <div className="flex rounded">
            <button
              id="btnLogin"
              className="bg-sky-900 hover:bg-sky-600 text-white rounded mr-2 py-1 px-3"
              label="Login"
            >
              <a href="/login">Login</a>
            </button>
            <button
              id="btnSignup"
              className="bg-sky-900 hover:bg-sky-600 text-white rounded mr-2 py-1 px-3"
              label="Register"
            >
              <a href="/register">Register</a>
            </button>
          </div>
        )}
        {token !== "0" && (
          <div className="flex flex-row items-center justify-center ">
            <button type="button">
              {/* <div className="text-white mr-3" onClick={handleCreate}>
                <FaPlus />
              </div> */}
            </button>
            <button type="button">
              <div className="mr-3" onClick={handleModal}>
                <img
                  // src={LOGO}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </div>
            </button>
          </div>
        )}
      </nav>
      {showModal && (
        <div
          id="dropdownDivider"
          className="z-10 fixed bg-sky-900 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 right-7 top-16"
        >
          <ul
            className="py-1 text-sm text-white dark:text-black"
            aria-labelledby="dropdownDividerButton"
          >
            <li>
                <a href="/profile"
                  id="btnProfile"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Profile
                </a>
            </li>
            <li>
                <a href="/Create"
                  id="btnCreate"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Create 
                </a>
            </li>
            <li>
                <a href="/list"
                  id="btnList"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  List 
                </a>
            </li>
            <li>
                <a href="/historypayment"
                  id="btnHistory"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  History Payment
                </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              id="btnLogout"
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              onClick={handleLogout}
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;