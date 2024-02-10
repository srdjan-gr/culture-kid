"use client";

import Image from "next/image";
import mockup from "../../../public/Wall-mockup1.png";
import { BsArrowLeft } from "react-icons/bs";

const Modal = ({ setModal, modal }) => {
  const closeModal = () => {
    setModal(!modal);
  };
  return (
    <div
      className={`${
        modal ? "visible" : "invisible"
      } fixed top-0 left-0 w-full h-screen z-50 transition-all ease-in-out delay-350 `}
    >
      <BsArrowLeft
        className="text-5xl bg-white absolute top-0 left-0 p-2 cursor-pointer"
        onClick={closeModal}
      />

      <Image
        src={mockup}
        height={100}
        width={100}
        className="w-full h-full"
        alt="room mockup"
      />
    </div>
  );
};

export default Modal;
