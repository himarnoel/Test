import React from "react";
import { data } from "./../assets/Quest";
import { useState, useEffect } from "react";
import img2 from "../logos.svg";
import Modal from "./../components/Modal";
import { useNavigate, Link } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  const [val, setval] = useState(data);
  const [counter, setCounter] = useState(10);
  const [next, setnext] = useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [btn, setbtn] = useState(false);
  const [css, setcss] = useState(
    "bg-red-400  anim rounded-md text-sm h-1 lg:col-span-4 md:col-span-4"
  );
  const [selected, setselected] = useState("");
  const [clas, setclas] = useState("");
  const [fn, setfn] = useState("");
  const [ln, setln] = useState("");
  const [score, setscore] = useState(0);
  const [incr, setincr] = useState("");
  const [ques, setques] = useState(0);
  let cols = 10;
  //   const [answers, setanswers] = useState();

  let fetchedData = JSON.parse(localStorage.users);
  let i = JSON.parse(localStorage.index);
  useEffect(() => {
    fetchedData[i].tq = val.length;
    setln(fetchedData[i].Lname);
    setfn(fetchedData[i].Fname);
    localStorage.users = JSON.stringify(fetchedData);

    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter == 0) {
      setbtn(true);
      setcss("bg-red-400  rounded-md text-sm h-1 lg:col-span-4 md:col-span-4");

      upadat();
      setclas(
        incr.correct
          ? "shadow mt-2 bg-green-600  hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold p-2  rounded"
          : "shadow mt-2 bg-red-600  hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold p-2  rounded"
      );
    }
    return () => clearInterval(timer);
  }, [counter]);

  const nexti = () => {
    if (counter == 0) {
      console.log(next + 1);
      if (next + 1 != val.length) {
        setnext(next + 1);
        setCounter(10);
        setbtn(false);
        setcss(
          "bg-red-400 anim rounded-md text-sm h-1 lg:col-span-4 md:col-span-4"
        );
      } else {
        navigate("/result");
      }
    }
  };

  const select = (text) => {
    setincr(text);
    setselected(text.text);
    setclas(
      "shadow mt-2 bg-blue-600  hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold p-2  rounded"
    );
  };

  const upadat = async () => {
    await setscore(incr.correct ? score + 1 : score);
    fetchedData[i].qp = score + 1;
    fetchedData[i].score = score + 1;
    fetchedData[i].qf = fetchedData[i].tq - fetchedData[i].qp;
    localStorage.users = JSON.stringify(fetchedData);
  };
  return (
    <div>
      {showModal ? (
        <div className="absolute h-screen w-screen bg-black/90  z-20 flex justify-center items-center">
          {/* <div className=" h-64  w-1/2  bg-green-400 mt-5 rounded ">sdfas</div> */}
          <Modal change={setShowModal} />
        </div>
      ) : null}

      <div className="h-screen bg-[#6369D1] w-screen pt-2">
        <div className="flex justify-between">
          <img className="h-20 ms-2 " src={img2} />
          <div className="h-20 mr-2 text-white mt-2 w-44 text-xl flex ">
            <div className="mr-2">{fn}</div>
            <div>{ln}</div>
          </div>
        </div>
        <div className="flex   justify-center items-center w-screen h-4/6  lg:h-96 p-2    md:mt-11">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1  bg-white shadow-2xl rounded-md  w-96    md:w-11/12 md:h-64 lg:w-1/2  lg:h-64 mt-5">
            <div className={css}></div>
            <div className="px-3 text-lg font-semibold pt-1 flex flex-col">
              <span className="text-center px-1  pt-1 text-2xl">
                <div className="mb-3 text-left text-base flex justify-between ">
                  <div>Countdown: {counter}</div>
                  <div>Score: {score}</div>
                </div>
                Question {next + 1}/{val.length}
              </span>
              <span className="pt-2"> {val[next].question}</span>
            </div>
            <div className="px-3 grid  grid-cols-1 py-2">
              {val[next].answers.map((data, i) => (
                <button
                  disabled={btn}
                  key={i}
                  className={
                    selected == data.text
                      ? clas
                      : "shadow mt-2 bg-[#6369D1]  hover:bg-[#7b81e9] focus:shadow-outline focus:outline-none text-white font-bold p-2  rounded"
                  }
                  type="button"
                  onClick={() => select(data)}
                >
                  {data.text}
                </button>
              ))}
            </div>
            <button
              //  disabled={btn}
              onClick={() => nexti()}
              className="bg-[#374149] mb-3 w-42 mx-auto  md:col-span-3 lg:col-span-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
