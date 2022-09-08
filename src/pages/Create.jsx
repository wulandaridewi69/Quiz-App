import { useEffect, useContext, useState } from "react";
import { TokenContext } from '../utils/Context';
import Layout from "../component/Layout";
import Button from "../component/Button";
import Input from "../component/Input";
import React from "react";
import { Modal, Box } from '@mui/material'

import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 20;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

const Create = () => {

  const { token, setToken } = useContext(TokenContext);

  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate()

  const [objSubmit, setObjSubmit] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState({});
  const [job, setJob] = useState("");

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
      status
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, country, address, phone, job, status]);

  const handleSubmit = (e) => {

    // setLoading(true);
    // e.preventDefault();

    // let myHeaders = new Headers();
    // myHeaders.append(`Authorization`, `Bearer ${token}`);
    // myHeaders.append(`Content-Type`, `application/json`);

    // let raw = JSON.stringify({
    //   "name": name,
    //   "address": address,
    //   "country": country,
    //   "phone_number": phone,
    //   "job_title": job,
    //   "status": status
    // });

    // let requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };

    // fetch("https://mitramas-test.herokuapp.com/customers", requestOptions)
    //   .then(response => response.json())
    //   .then((result) => {
    //     const { message, status } = result;
    //     if (status === "success") {
    //       setModal(true);
    //       navigate("/")
    //     }
    //     alert(message);
    //   })
    //   .catch((error) => {
    //     alert(error.toString());
    // navigate("/");

    //   })
    //   .finally(() => setLoading(false));
  }


  return (
    <Layout>
      <Modal
        open={modal}
        onClose={() => setModal(false)}>
        <Box className="w-1/3 min-h-1/2 translate-x-full translate-y-1/4 bg-white flex flex-col justify-center rounded-lg items-center shadow-2xl p-5 gap-3" >
          <p className='text-4xl font-bold text-center my-5'>Data has been saved ?</p>
        </Box>
      </Modal>
      <div className="flex justify-center mt-12">
        <div className="border shadow-md lg:w-[60%] md:w-[70%] w-[90%] mb-16 rounded-lg">
          <div
            id="createCustomer"
            className="lg:text-4xl md:text-3xl text-2xl text-[#F97316] flex justify-center font-bold lg:my-16 md:my-15 my-10"
          >
            Create Data
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
              onSubmit={(e) => handleSubmit(e)}
              className={`bg-orange-500 text-white font-bold py-2 w-24 hover:shadow-md hover:shadow-gray-700 rounded-lg 
                  ${loading && "bg-orange-200 cursor-not-allowed"
                }`}
              id="btnCreate"
              label="Create"
              loading={loading || disabled}
              type="submit"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Create;
