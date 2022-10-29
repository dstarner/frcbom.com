import React from "react";

const ButtonPrimary = ({ children, addClass, href = "#" }) => {
  return (
    <a
      href={href}
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-indigo-500 hover:shadow-indigo-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </a>
  );
};

export default ButtonPrimary;
