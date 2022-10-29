import React from "react";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const linkGroups = [
  {
    title: "Product",
    links: [
      { text: "Marketing Home", href: "https://obsaased.com" },
      { text: "Dashboard", href: "https://app.frcbom.com" },
    ],
  },
];

const startingCol = 7;

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <img className="h-8 w-auto mb-6" src="/assets/logo-horizontal.png" />
          <p className="mb-4">
            <strong className="font-medium">frcbom.com</strong> manages your
            FIRST Robotics teams' parts inventory easily.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            {/* <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div> */}
            <a
              href="https://twitter.com/ObsaasedTech"
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Twitter className="h-6 w-6" />
            </a>
            {/* <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div> */}
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} frcbom.com.
          </p>
          <p className="text-gray-400">
            Web illustrations by <a href="https://storyset.com/web">Storyset</a>
          </p>
        </div>
        {linkGroups.map((lg, idx) => (
          <div
            key={idx}
            className={`row-span-2 sm:col-span-2 sm:col-start-${
              startingCol + idx * 2
            } sm:col-end-${startingCol + idx * 2 + 2} flex flex-col`}
          >
            <p className="text-black-600 mb-4 font-medium text-lg">
              {lg.title}
            </p>
            <ul className="text-black-500 ">
              {lg.links.map((link, lIdx) => (
                <a key={lIdx} href={link.href}>
                  <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                    {link.text}{" "}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
