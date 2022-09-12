import React, { useState, useEffect } from "react";
import img from "../img.svg";
import img2 from "../logos.svg";
import Input from "../components/Input";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [store, setStore] = useState([]);

  useEffect(() => {
    if (localStorage.users) {
      let setdata = JSON.parse(localStorage.users);
      setStore(setdata);
    } else {
      setStore([]);
    }
  }, []);

  const signUp = async () => {
    if (Fname != "" && Lname !== "" && email !== "" && pass !== "") {
      let obj = { Fname, Lname, email, pass, score: 0, qf: 0, qp: 0, tq: 0 };
      await setStore(() => {
        let data = [...store, obj];
        localStorage.users = JSON.stringify(data);
        return data;
      });
      navigate("/signin");
    } else {
      alert("fill up missing items");
      console.log(Fname);
    }
  };
  return (
    <div>
      <div className="bg-white flex  h-screen w-screen">
        <div className="bg-[#6369D1] h-screen  w-2/4  lg:block hidden  md:hidden">
          <img className="h-24 ps-2 pt-2" src={img2} />
          <img
            src={img}
            alt="dfasfasd"
            className="object-center pt-3 ps-2 align-middle "
          />
        </div>
        <div className="flex flex-col items-start md:items-start lg:justify-center  lg:items-center  lg:w-2/4  w-screen">
          <img
            src={img2}
            alt="dfasfasd"
            className="h-20 text-left  lg:hidden ml-5 pt-2 md:mb-7"
          />
          <div className=" h-96  align-middle w-screen px-6  lg:w-2/3 grid grid-cols-1 lg:mt-5   mt-4 mb-1">
            <p className="text-start font-medium  text-4xl text-[#6369D1] ">
              Sign Up
            </p>

            <Input
              label="Firstname"
              type="text"
              place="Firstname"
              value={Fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <Input
              label="Lastname"
              type="text"
              place="Lastname"
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <Input
              label="Email"
              type="text"
              place="Email"
              onChange={(e) => setemail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              place="Password"
              onChange={(e) => setpass(e.target.value)}
            />
            <button
              class="shadow mt-2 bg-[#6369D1] hover:bg-[#6369D1] focus:shadow-outline focus:outline-none text-white font-bold p-2  rounded"
              type="button"
              onClick={() => signUp()}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
