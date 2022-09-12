import React from "react";

const Input = (props) => {
  return (
    <div>
      <div class="mb-3">
        <label
          class="float-left text-gray-700 text-sm font-medium  mb-2"
          for="username"
        >
          {props.label}
        </label>
        <input
          class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-7 focus:outline-none focus:shadow-outline"
          id="password"
          type={props.type}
          placeholder={props.place}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Input;
