import React, { useState } from "react";
import img from "../img.svg";
import img2 from "../logos.svg";
import Input from "../components/Input";
import { useNavigate, Link } from "react-router-dom";
const Signin = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();
  const signin = () => {
    if (email !== "" && pass !== "") {
      let fetchedData = JSON.parse(localStorage.users);
      console.log(fetchedData);
      for (let index = 0; index < fetchedData.length; index++) {
        console.log(fetchedData[index]);
        if (
          fetchedData[index].email === email &&
          fetchedData[index].pass == pass
        ) {
          alert("good");
          localStorage.index = JSON.stringify(index);
          navigate("/home");
          break;
        } else {
          alert("Incorrect username or password");
          break;
        }
      }
    } else {
      alert("Fill up Empty Space");
    }
  };
  return (
    <div>
      <div className="bg-white flex h-screen w-screen">
        <div className="bg-[#6369D1]  h-screen  w-2/4   lg:block hidden  ">
          <img className="h-20 ps-2 pt-2" src={img2} />
          <img
            src={img}
            alt="dfasfasd"
            className="object-center pt-3 ps-2 align-middle"
          />
        </div>
        <div className="flex justify-center items-center lg:w-2/4 w-screen  md:w-screen">
          <div className=" h-96 align-middle w-screen px-6  lg:w-2/3 grid grid-cols-1 mt-5 mb-5">
            <p className="text-start font-medium  text-4xl text-[#6369D1] ">
              Sign In
            </p>
            <br />
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
              onClick={() => signin()}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Signin;
