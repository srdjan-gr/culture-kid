"use client";

import Image from "next/image";
import { BsBoxArrowUp, BsEye } from "react-icons/bs";
import { Modal } from "@/components";
import { useState } from "react";

const SingleArtImage = ({ item }) => {
  const [modal, setModal] = useState(false);

  const modalFunction = () => {
    setModal(!modal);
  };

  const imageUrl = `http://127.0.0.1:1337${item.data.attributes.image.data[0].attributes.url}`;
  return (
    <>
      <div className="bg-kid_light_gray w-1/2 h-screen flex flex-col items-end justify-start relative">
        <div className="pe-28 pt-28">
          <div className="flex gap-8">
            <div className="flex justify-center items-center">
              <Image
                src={imageUrl}
                alt={item.data.attributes.name}
                width={100}
                height={100}
                className="h-[70px] w-full border-[1px] border-gray-300 p-2 cursor-pointer"
              />
            </div>
            <div>
              <Image
                src={imageUrl}
                alt={item.data.attributes.name}
                width={100}
                height={100}
                className="h-[420px] w-full custom_shadow_2"
              />

              <div className="flex items-center justify-center gap-8 mt-10 w-full">
                <div
                  onClick={modalFunction}
                  className="flex items-center justify-center gap-2 cursor-pointer text-kid hover:text-gray-400"
                >
                  <BsEye className=" text-kid_black text-sm " />
                  <p className="text-sm">View in a room</p>
                </div>
                <div className="flex items-center justify-center gap-2 cursor-pointer hover:text-gray-400">
                  <BsBoxArrowUp className=" text-kid_black text-sm " />
                  <p className="text-sm">Share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal setModal={setModal} modal={modal} />
    </>
  );
};

export default SingleArtImage;
