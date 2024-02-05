import Image from "next/image";
import Link from "next/link";
import { BsCart2, BsBoxArrowUp } from "react-icons/bs";

const Card = ({ item }) => {
  return (
    <Link href={`/single-art/${item.slug}`}>
      <div className="flex flex-col items-start justify-center w-80  p-8 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] cursor-pointer my-5">
        <Image
          src={item.src}
          width={100}
          height={100}
          className="w-full"
          alt={item.label}
        />

        <div className="mt-5 font-karla_font">
          <h2 className="text-xl font-semibold">{item.label}</h2>
          <p className="text-l text-gray-500">{item.artist}</p>
          <p className="text-l text-gray-400 italic">
            {item.technique}, {item.year}
          </p>
          <p className="text-l text-gray-400 italic">{item.dimensions} in</p>
        </div>

        <div className="w-full mt-12 flex justify-between items-center  hover:visible">
          <h3 className=" text-xl">
            {"$"}
            {item.price}
          </h3>
          <div className="flex gap-2">
            <BsBoxArrowUp className="bg-kid_gray text-kid_black w-8 h-8 p-[6px] cursor-pointer" />
            <BsCart2 className="bg-kid_black text-kid_white w-8 h-8 p-[6px] cursor-pointer" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
