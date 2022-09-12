import React from "react";

const Btn = (props) => {
  return (
    <div>
      <button
        class="shadow mt-2 bg-[#6369D1] hover:bg-[#6369D1] focus:shadow-outline focus:outline-none text-white font-bold p-2  rounded"
        type="button"
      >
       {props.name}
      </button>
    </div>
  );
};

export default Btn;
