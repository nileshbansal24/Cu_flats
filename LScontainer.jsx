import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import "../styles/Navbar.scss";
import { closeModal, openModal } from "../redux/LSstate";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/state";
import toast from "react-hot-toast";
export default function LScontainer() {
  const modalState = useSelector((state) => state.modal);
  const isModalOpen =
    modalState.modalName === "LOGIN" || modalState.modalName === "SIGNUP";
  const isLogin = modalState.modalName === "LOGIN";
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleUserDataChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLoginOpenPress = () => {
    dispatch(openModal({ modalName: "LOGIN" }));
  };
  const handleSignupOpenPress = () => {
    dispatch(openModal({ modalName: "SIGNUP" }));
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (userData.email === "" || userData.password === "") {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
        }),
      });

      /* Get data after fetching */
      const loggedIn = await response.json();

      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        toast.success("Login successful");
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        closeModal();
      }
    } catch (err) {
      console.log("Login failed", err.message);
    }
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (
      userData.firstName === "" ||
      userData.lastName === "" ||
      userData.email === "" ||
      userData.password === "" ||
      userData.confirmPassword === ""
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const register_form = new FormData();

      for (var key in userData) {
        register_form.append(key, userData[key]);
      }

      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        body: register_form,
      });

      if (response.ok) {
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        closeModal();
      }
    } catch (err) {
      console.log("Registration failed", err.message);
    }
  };

  return (
    <div className="hidden md:block">
      <div className="flex gap-x-5">
        <div className="navbar_right">
          <button onClick={handleLoginOpenPress} className="host">
            Become A Host
          </button>
        </div>

        <div className="flex gap-x-4 font-semibold">
          <button
            onClick={handleLoginOpenPress}
            className="border-purple-600 hover:border-white button-animation text-lg"
          >
            <p className="">Login</p>
          </button>

          <button
            onClick={handleSignupOpenPress}
            className="border-purple-600 hover:border-white button-animation-signup"
          >
            <p className="">Signup</p>
          </button>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow">
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={handleCloseModal}
                className="rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <form
              className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
              action="#"
            >
              <h3 className="text-xl font-medium text-purple-800">
                {isLogin ? " Log in to our platform" : "Create an account"}
              </h3>

              {!isLogin && (
                <>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-purple-800 block mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="bg-purple-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="John"
                      value={userData.firstName}
                      onChange={(e) => handleUserDataChange(e)}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-purple-800 block mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={userData.lastName}
                      onChange={(e) => handleUserDataChange(e)}
                      className="bg-purple-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="John"
                      required
                    />
                  </div>
                </>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-purple-800 block mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userData.email}
                  onChange={(e) => handleUserDataChange(e)}
                  className="bg-purple-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-purple-800 block mb-2"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={userData.password}
                  onChange={(e) => handleUserDataChange(e)}
                  placeholder="••••••••"
                  className="bg-purple-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              {!isLogin && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-purple-800 block mb-2"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={(e) => handleUserDataChange(e)}
                    placeholder="••••••••"
                    className="bg-purple-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>
              )}
              <div className="flex justify-between">
                <a
                  href="#"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              {isLogin ? (
                <button
                  type="submit"
                  onClick={handleLoginSubmit}
                  className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
              ) : (
                <button
                  onClick={handleRegisterSubmit}
                  type="submit"
                  className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800"
                >
                  Create Account
                </button>
              )}
            </form>
            {isLogin ? (
              <div className="text-sm font-medium text-purple-700 space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
                Not registered?{" "}
                <button
                  onClick={handleSignupOpenPress}
                  className="text-blue-700 hover:underline "
                >
                  Create account
                </button>
              </div>
            ) : (
              <div className="text-sm font-medium text-purple-700 space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
                Already registered?{" "}
                <button
                  onClick={handleLoginOpenPress}
                  className="text-blue-700 hover:underline "
                >
                  Log In
                </button>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
