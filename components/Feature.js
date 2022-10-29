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
              src="/assets/Illustration2.png"
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
            Storage Should be Easy
          </h3>
          <p className="my-2 text-black">
            Reduce the toil on your engineers, cut your monthly operating costs,
            and let ObSaaSed handle the storage for you.
          </p>
          <ul className="text-black self-start list-inside ml-8">
            <li className="relative circle-check custom-list">
              S3-compatible object store with custimizable permissions, access,
              and visibility.
            </li>
            <li className="relative circle-check custom-list">
              Easier than managing AWS accounts or Object Storage clusters
              yourself.
            </li>
            <li className="relative circle-check custom-list">
              Simple design, simple interface, and simple integrations make
              deployment faster.
            </li>
            <li className="relative circle-check custom-list">
              Cheaper than fully-featured competitors.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feature;
