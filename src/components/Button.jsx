import React from "react";

function Button({ btnText }) {
  return (
    <button className="bg-(--color-secondary) py-2 px-4 border border-5 border-(--color-main) rounded-xl text-white w-[180px]">
      {btnText}
    </button>
  );
}

export default Button;
