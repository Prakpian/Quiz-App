import React from "react";

function Button({ btnText, onClick }) {
  return (
    <button
      className="bg-(--color-secondary) py-2 px-4 border border-5 border-(--color-main) rounded-xl text-white w-[180px]"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}

export default Button;
