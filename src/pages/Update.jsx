import { useState, useEffect, useContext } from "react";
import { TokenContext } from "../utils/Context";
import Loading from "../component/Loading";
import Layout from "../component/Layout";
import Button from "../component/Button";
import Input from "../component/Input";
import React from "react";

import { useNavigate, useParams } from 'react-router-dom';
import { Link, } from "react-router-dom";

const Update = () => {

  const { token, setToken } = useContext(TokenContext);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate()
  const params = useParams()
  const customer_id = params.customer_id

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [modal, setModal] = useState(false);
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (token === "0") {
      navigate("/")
    }
    if (
      name &&
      country &&
      address &&
      phone &&
      job &&
      status &&
      id
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, country, address, phone, job, status, id]);

  // useEffect(() => {
  //   handleUpdate();
  // }, []);

  const handleUpdate = () => {
    // let myHeaders = new Headers();
    // myHeaders.append(`Authorization`, `Bearer ${token}`);
    // myHeaders.append(`Content-Type`, `application/json`);

    // let raw = JSON.stringify({
    //   "id": id,
    //   "name": name,
    //   "address": address,
    //   "country": country,
    //   "phone_number": phone,
    //   "job_title": job,
    //   "status": status
    // });

    // let requestOptions = {
    //   method: 'PUT',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };

    // fetch(`https://mitramas-test.herokuapp.com/customers/${customer_id}`, requestOptions)
    //   .then(response => response.json())
    //   .then((result) => {
    //     const { message, status } = result;
    //     if (status === "success") {
    //       setModal(true);
    //       navigate(`/${customer_id}`)
    //     }
    //     alert(message);
    //   })
    //   .catch((error) => {
    //     alert(error.toString());
    navigate("/");
    //   })
    //   .finally(() => setLoading(false));
  }

  // if (loading) {
  //   return <Loading />;
  // } else {
  return (
    <Layout>
      <div className="flex justify-center mt-12">
        <div className="border shadow-md lg:w-[60%] md:w-[70%] w-[90%] mb-16 rounded-lg">
      <div
        id="updateCustomer"
        className="lg:text-4xl md:text-3xl text-2xl text-[#F97316] flex justify-center font-bold lg:my-16 md:my-15 my-10"
      >
        Update Data
      </div>
          <div className="space-y-3 flex flex-col lg:w-[80%] md:w-[80%] w-[90%] m-auto">
            <Input
              id="createName"
              type="text"
              label="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              id="createAddress"
              type="text"
              label="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              id="createCountry"
              type="text"
              label="Country"
              onChange={(e) => setCountry(e.target.value)}
            />
            <Input
              id="createPhone"
              type="text"
              label="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              id="createJob"
              type="text"
              label="Job"
              onChange={(e) => setJob(e.target.value)}
            />
            <Input
              id="createStatus"
              type="text"
              label="Status"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-20 mb-20">
            <Button
              onSubmit={(e) => handleUpdate(e)}
              className={`bg-orange-500 text-white font-bold py-2 w-24 hover:shadow-md hover:shadow-gray-700 rounded-lg 
                  ${loading && "bg-orange-200 cursor-not-allowed"
                }`}
              id="btnUpdate"
              label="Update"
              loading={loading || disabled}
              type="update"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
  // }
}

export default Update;
