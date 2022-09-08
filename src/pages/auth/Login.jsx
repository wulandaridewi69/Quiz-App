import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { TokenContext } from "../../utils/Context";
import Loading from '../../component/Loading';
import Button from "../../component/Button";
import Input from "../../component/Input";


const Login = () => {

  const { token, setLogin } = useContext(TokenContext);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    console.log("token", token)
    if (token) navigate("/");
    setLoading(false)
  }, []);

  const handleSubmit = async (e) => {
    setLoading(true);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "email_or_username": email,
      "password": password
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_URL}/login`, requestOptions)
      .then(response => {
        if (response.status == 200) {
          return response.json()
        } else {
          throw "Username and Password not found";
        }
      })
      .then((result) => {
        setLogin(result.result);
        navigate("/");
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false))
  }

  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <div className="h-screen flex lg:flex-row md:flex-row flex-col justify-center overflow-auto">
        <div className="w-full flex flex-col justify-center mt-28">
          <div className="text-center mb-28 ml-44">
            DISINI TEMPAT LOGO
          </div>
        </div>
        <div className="w-full h-screen flex flex-col justify-center items-center bg-[#085E7D]">
          <h1
            id="Login"
            className="font-bold lg:text-5xl md:text-4xl text-3xl text-orange-500 pb-14"
          >
            LOGIN
          </h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="space-y-4 text-white flex flex-col lg:w-1/2 w-[80%]"
          >
            <Input
              id="loginEmail"
              className="bg-white rounded-md w-full"
              type="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="loginPassword"
              className="bg-white rounded-md w-full"
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-center ">
              <Button
                onClick={() => handleSubmit()}
                className={`mt-6 bg-orange-500 text-white font-bold py-2 w-24 hover:shadow-md hover:shadow-gray-700 rounded-lg 
                  ${loading && "bg-orange-200 cursor-not-allowed"
                  }`}
                id="btnLogin"
                label="Login"
                loading={loading}
                type="submit"
              />
            </div>
            <p className="text-center">Atau</p>
            <div className="flex justify-center">
              <Button
                // onClick={() => handleRegister()}
                className={`bg-orange-500 text-white font-bold py-2 w-24 hover:shadow-md hover:shadow-gray-700 rounded-lg 
                  ${loading && "bg-orange-200 cursor-not-allowed"
                  }`}
                id="btnRegister"
                label="Register"
                loading={loading}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
