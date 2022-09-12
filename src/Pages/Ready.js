import React from "react";
import img2 from "../logos.svg";
import { useNavigate } from "react-router-dom";
const Ready = () => {
  let navigate = useNavigate();
  const nextu = () => {
    navigate("/home");
  };
  return (
    <div>
      <div className="h-screen w-screen bg-[#6369D1] ">
        <img className="h-20 ms-2 " src={img2} />
        <div className="flex  flexcol  justify-center items-center w-screen h-4/6  lg:h-96 p-2    md:mt-11">
          <div className="bg-white shadow-2xl rounded-md  w-96    md:w-11/12 md:h-64 lg:w-1/2 lg:h-56  xl:h-56 mt-5">
            <div className="text-black text-lg font-semibold">
              <div className="ml-5 text-2xl mb-5">Instructions</div>
              <ol className="list-decimal ">
                <li>As soon as you start timer start counting</li>
                <li>Each Question has is own timer</li>
              </ol>
            </div>
            <button
              onClick={() => nextu()}
              className="bg-[#6369D1] mb-3 w-42 float-end  mr-2 hover:bg-[#6369D1] text-white font-bold py-2 px-4 rounded"
            >
              Start Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
