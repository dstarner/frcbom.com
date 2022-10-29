import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/img/feature-img.svg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
          <h3
            style={{ width: "100%" }}
            className="text-3xl width-[110%] lg:text-4xl font-medium leading-relaxed text-black-600"
          >
            Inventory Management Should be Easy
          </h3>
          <p className="my-2 text-black">
            FIRST Robotics teams have enough on their plate as-is! Inventory
            management should be easier to know what's in the shop, what's on
            the robot, and what is still needed.
          </p>
          <ul className="text-black self-start list-inside ml-8">
            <li className="relative circle-check custom-list">
              Per-project, per-robot, and team-wide inventory management.
            </li>
            <li className="relative circle-check custom-list">
              Team inventory wishlist.
            </li>
            <li className="relative circle-check custom-list">
              Common supplier parts information and tracking.
            </li>
            <li className="relative circle-check custom-list">
              Inventory usage logs; critical for components like batteries.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feature;
