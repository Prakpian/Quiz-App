import React from "react";

function Button({ btnText, onClick }) {
  return (
    <button
      className="bg-(--color-secondary) py-2 px-4 border border-5 border-(--color-main) text(--color-secondary) font-medium w-[180px] hover:cursor-pointer active:scale-95"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}

export default Button;
