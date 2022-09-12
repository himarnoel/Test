import React from "react";
import { useState, useEffect } from "react";
import img2 from "../logos.svg";
import { useNavigate, Link } from "react-router-dom";
const Result = () => {
  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");
  const [tq, settq] = useState(0);
  const [qp, setqp] = useState(0);
  const [qf, setqf] = useState(0);
  const [score, setscore] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    let fetchedData = JSON.parse(localStorage.users);
    let i = JSON.parse(localStorage.index);
    setln(fetchedData[i].Lname);
    setfn(fetchedData[i].Fname);
    settq(fetchedData[i].tq);
    setqp(fetchedData[i].qp);
    setqf(fetchedData[i].qf);
    setscore(fetchedData[i].score);
  }, []);
  const signout = () => {
    localStorage.removeItem("index");
    navigate("/signin");
  };
  return (
    <div>
      <div className="h-screen bg-[#6369D1] w-screen pt-2">
        <div className="flex justify-between">
          <img className="h-20 ms-2 " src={img2} />
          <div className="h-20 mr-2 text-white mt-2 w-44 text-xl flex ">
            <div className="mr-2">{fn}</div>
            <div>{ln}</div>
          </div>
        </div>
        <div className="flex   justify-center items-center w-screen h-4/6  lg:h-96 p-2    md:mt-11">
          <div className="flex  text-black text-xl font-semibold flex-col justify-evenly items-center  bg-white shadow-2xl rounded-md  w-96    md:w-11/12 md:h-64 lg:w-80   lg:h-64 mt-5">
            <h1> Result</h1>
            <div className="mt-1">
              {" "}
              Question Pased: {qp} Out of {tq}
            </div>
            <div className="">
              {" "}
              Question failed: {qf} Out of {tq}
            </div>
            <div className="mb-3">
              {" "}
              Score: {score} Out of {tq}
            </div>
            <button
              //  disabled={btn}
              onClick={() => signout()}
              className="bg-[#374149] mb-3 w-42 mx-auto font-medium  md:col-span-3 lg:col-span-3 hover:bg-[#6369D1] text-white  py-2 px-4 rounded"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
